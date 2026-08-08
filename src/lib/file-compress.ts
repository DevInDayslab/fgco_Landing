import {
  formatMaxUploadSize,
  UPLOAD_MAX_BYTES,
  VIDEO_MAX_DURATION_SEC,
} from "@/lib/upload-limits";

export type CompressedFileResult = {
  file: File;
  compressed: boolean;
  originalSize: number;
};

type VideoElementWithCapture = HTMLVideoElement & {
  captureStream?: () => MediaStream;
  mozCaptureStream?: () => MediaStream;
};

function pickVideoMimeType(): string {
  const candidates = [
    "video/webm;codecs=vp9",
    "video/webm;codecs=vp8",
    "video/webm",
    "video/mp4",
  ];
  return candidates.find((type) => MediaRecorder.isTypeSupported(type)) ?? "video/webm";
}

function extensionForMime(mimeType: string) {
  return mimeType.includes("mp4") ? "mp4" : "webm";
}

async function loadVideoElement(file: File): Promise<{ video: HTMLVideoElement; url: string }> {
  const url = URL.createObjectURL(file);
  const video = document.createElement("video");
  video.preload = "auto";
  video.playsInline = true;
  video.muted = true;
  video.src = url;

  await new Promise<void>((resolve, reject) => {
    video.onloadedmetadata = () => resolve();
    video.onerror = () => reject(new Error("Could not read video file."));
  });

  return { video, url };
}

function releaseVideo(video: HTMLVideoElement, url: string) {
  URL.revokeObjectURL(url);
  video.removeAttribute("src");
  video.load();
  video.remove();
}

function getVideoStream(video: HTMLVideoElement): MediaStream | null {
  const withCapture = video as VideoElementWithCapture;
  return withCapture.captureStream?.() ?? withCapture.mozCaptureStream?.() ?? null;
}

async function recordStream(
  stream: MediaStream,
  durationSec: number,
  videoBitsPerSecond: number,
): Promise<Blob> {
  const mimeType = pickVideoMimeType();
  const chunks: BlobPart[] = [];
  const recorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond });

  const blob = await new Promise<Blob>((resolve, reject) => {
    recorder.onerror = () => reject(new Error("Video compression failed."));
    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) chunks.push(event.data);
    };
    recorder.onstop = () => resolve(new Blob(chunks, { type: mimeType }));

    recorder.start(1000);
    setTimeout(() => {
      if (recorder.state === "recording") recorder.stop();
    }, Math.ceil(durationSec * 1000) + 750);
  });

  stream.getTracks().forEach((track) => track.stop());
  return blob;
}

async function recordScaledVideo(
  video: HTMLVideoElement,
  width: number,
  height: number,
  durationSec: number,
  videoBitsPerSecond: number,
): Promise<Blob> {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Video compression is not supported in this browser.");

  const canvasStream = canvas.captureStream(24);
  const sourceStream = getVideoStream(video);
  if (sourceStream) {
    sourceStream.getAudioTracks().forEach((track) => canvasStream.addTrack(track));
  }

  video.currentTime = 0;
  await video.play();

  const drawUntil = performance.now() + durationSec * 1000;
  const drawFrame = () => {
    if (performance.now() >= drawUntil || video.ended) return;
    ctx.drawImage(video, 0, 0, width, height);
    requestAnimationFrame(drawFrame);
  };
  drawFrame();

  const blob = await recordStream(canvasStream, durationSec, videoBitsPerSecond);
  video.pause();
  return blob;
}

async function transcodeVideo(
  file: File,
  maxBytes: number,
): Promise<File> {
  const { video, url } = await loadVideoElement(file);

  try {
    const duration = Math.min(video.duration || VIDEO_MAX_DURATION_SEC, VIDEO_MAX_DURATION_SEC);
    if (!Number.isFinite(duration) || duration <= 0) {
      throw new Error("Could not determine video length.");
    }

    const maxWidth = 1280;
    const scale =
      video.videoWidth > 0 ? Math.min(1, maxWidth / video.videoWidth) : 1;
    const width = Math.max(1, Math.round(video.videoWidth * scale));
    const height = Math.max(1, Math.round(video.videoHeight * scale));

    const bitrates = [2_500_000, 1_800_000, 1_200_000, 800_000, 500_000, 350_000];
    const baseName = file.name.replace(/\.[^.]+$/, "") || "video";

    for (const videoBitsPerSecond of bitrates) {
      const sourceStream = getVideoStream(video);
      let blob: Blob | null = null;

      if (sourceStream && scale >= 1) {
        video.currentTime = 0;
        await video.play();
        blob = await recordStream(sourceStream, duration, videoBitsPerSecond);
        video.pause();
      }

      if (!blob || blob.size > maxBytes) {
        blob = await recordScaledVideo(video, width, height, duration, videoBitsPerSecond);
      }

      if (blob.size <= maxBytes) {
        const ext = extensionForMime(blob.type);
        return new File([blob], `${baseName}-compressed.${ext}`, { type: blob.type });
      }
    }

    throw new Error(
      `Video is still too large after compression. Please upload a shorter clip under ${formatMaxUploadSize(maxBytes)} or paste an alternative video link.`,
    );
  } finally {
    releaseVideo(video, url);
  }
}

export async function compressImageFile(
  file: File,
  maxWidth = 1920,
  quality = 0.82,
): Promise<CompressedFileResult> {
  if (!file.type.startsWith("image/")) {
    return { file, compressed: false, originalSize: file.size };
  }

  const originalSize = file.size;
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, maxWidth / bitmap.width);
  const width = Math.max(1, Math.round(bitmap.width * scale));
  const height = Math.max(1, Math.round(bitmap.height * scale));

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return { file, compressed: false, originalSize };
  }

  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  const blob = await new Promise<Blob | null>((resolve) => {
    canvas.toBlob((b) => resolve(b), "image/jpeg", quality);
  });

  if (!blob) {
    return { file, compressed: false, originalSize };
  }

  const baseName = file.name.replace(/\.[^.]+$/, "") || "upload";
  const compressedFile = new File([blob], `${baseName}.jpg`, { type: "image/jpeg" });

  return {
    file: compressedFile,
    compressed: compressedFile.size < originalSize,
    originalSize,
  };
}

export async function compressVideoFile(
  file: File,
  maxBytes = UPLOAD_MAX_BYTES.video,
): Promise<CompressedFileResult> {
  const originalSize = file.size;

  if (originalSize <= maxBytes) {
    return { file, compressed: false, originalSize };
  }

  if (typeof MediaRecorder === "undefined") {
    throw new Error(
      `Video must be under ${formatMaxUploadSize(maxBytes)}. Try a smaller file or use the alternative video link.`,
    );
  }

  const compressedFile = await transcodeVideo(file, maxBytes);
  return {
    file: compressedFile,
    compressed: compressedFile.size < originalSize,
    originalSize,
  };
}

export async function prepareNominationUpload(
  file: File,
  purpose: "profile" | "document" | "video",
): Promise<CompressedFileResult> {
  if (purpose === "video") {
    return compressVideoFile(file);
  }

  if (file.type === "application/pdf") {
    return { file, compressed: false, originalSize: file.size };
  }

  if (file.type.startsWith("image/")) {
    return compressImageFile(file);
  }

  return { file, compressed: false, originalSize: file.size };
}

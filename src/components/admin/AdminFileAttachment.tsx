import { Download, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { adminFetchBlob, getApiBaseUrl } from "@/lib/api-client";

type AttachmentMeta = {
  key?: string | null;
  originalName?: string | null;
  contentType?: string | null;
  size?: number | null;
  originalSize?: number | null;
  compressed?: boolean | null;
  publicUrl?: string | null;
};

export function AdminFileAttachment({
  label,
  keyValue,
  meta,
}: {
  label: string;
  keyValue: string | null | undefined;
  meta?: AttachmentMeta | null;
}) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!keyValue) return;

    let objectUrl: string | null = null;
    let cancelled = false;

    if (meta?.publicUrl) {
      setPreviewUrl(meta.publicUrl);
      return;
    }

    adminFetchBlob(`/api/admin/files?key=${encodeURIComponent(keyValue)}`)
      .then((blob) => {
        if (cancelled) return;
        objectUrl = URL.createObjectURL(blob);
        setPreviewUrl(objectUrl);
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load file");
        }
      });

    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [keyValue, meta?.publicUrl]);

  if (!keyValue) {
    return (
      <div className="rounded-lg border border-dashed border-zinc-200 p-4">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">{label}</p>
        <p className="mt-1 text-sm text-zinc-400">Not provided</p>
      </div>
    );
  }

  const isImage = (meta?.contentType ?? "").startsWith("image/");
  const isVideo = (meta?.contentType ?? "").startsWith("video/");
  const downloadUrl =
    meta?.publicUrl ?? `${getApiBaseUrl()}/api/admin/files?key=${encodeURIComponent(keyValue)}`;

  return (
    <div className="rounded-lg border border-zinc-200 p-4">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">{label}</p>
      <p className="mt-1 text-sm font-medium text-zinc-900">
        {meta?.originalName ?? keyValue}
      </p>
      {meta?.size != null && (
        <p className="mt-1 text-xs text-zinc-500">
          {(meta.size / 1024).toFixed(1)} KB
          {meta.compressed && meta.originalSize
            ? ` (compressed from ${(meta.originalSize / 1024).toFixed(1)} KB)`
            : ""}
        </p>
      )}

      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}

      {previewUrl && isImage && (
        <img
          src={previewUrl}
          alt={meta?.originalName ?? label}
          className="mt-3 max-h-64 rounded-lg border border-zinc-100 object-contain"
        />
      )}

      {previewUrl && isVideo && (
        <video
          src={previewUrl}
          controls
          className="mt-3 max-h-64 w-full rounded-lg border border-zinc-100"
        />
      )}

      {!isImage && !isVideo && keyValue && (
        <div className="mt-3 flex items-center gap-2 text-sm text-zinc-600">
          <FileText className="h-4 w-4" />
          <span>{meta?.contentType ?? "Document"}</span>
        </div>
      )}

      <a
        href={downloadUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 hover:text-zinc-900"
        onClick={(e) => {
          if (!meta?.publicUrl) {
            e.preventDefault();
            adminFetchBlob(`/api/admin/files?key=${encodeURIComponent(keyValue)}`).then((blob) => {
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = meta?.originalName ?? keyValue.split("/").pop() ?? "download";
              a.click();
              URL.revokeObjectURL(url);
            });
          }
        }}
      >
        <Download className="h-4 w-4" />
        Download
      </a>
    </div>
  );
}

import { useRef, useState } from "react";
import { Upload } from "lucide-react";
import { uploadNominationFile, type UploadResult } from "@/lib/api-client";
import { AdminFileAttachment } from "./AdminFileAttachment";

type AttachmentMeta = {
  key?: string | null;
  originalName?: string | null;
  contentType?: string | null;
  size?: number | null;
  originalSize?: number | null;
  compressed?: boolean | null;
  publicUrl?: string | null;
};

function uploadMeta(result: UploadResult): AttachmentMeta {
  return {
    key: result.key,
    originalName: result.originalName,
    contentType: result.contentType,
    size: result.size,
    originalSize: result.originalSize,
    compressed: result.compressed,
    publicUrl: result.publicUrl,
  };
}

export function AdminAttachmentEditor({
  label,
  purpose,
  keyValue,
  meta,
  accept,
  onUploaded,
}: {
  label: string;
  purpose: "profile" | "document" | "video";
  keyValue: string | null | undefined;
  meta?: AttachmentMeta | null;
  accept: string;
  onUploaded: (key: string, meta: AttachmentMeta) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(file: File) {
    setUploading(true);
    setError(null);
    try {
      const result = await uploadNominationFile(file, purpose);
      onUploaded(result.key, uploadMeta(result));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-3">
      <AdminFileAttachment label={label} keyValue={keyValue} meta={meta ?? null} />
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) void handleFile(file);
          e.target.value = "";
        }}
      />
      <button
        type="button"
        disabled={uploading}
        onClick={() => inputRef.current?.click()}
        className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 disabled:opacity-50"
      >
        <Upload className="h-4 w-4" />
        {uploading ? "Uploading…" : keyValue ? "Replace file" : "Upload file"}
      </button>
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}

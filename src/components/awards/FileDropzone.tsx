import { FileText, Film, ImageIcon, Loader2, Upload, X } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { toast } from "sonner";
import { fileDropzoneClass, labelClass } from "@/components/awards/form-styles";
import { formatFileSize } from "@/lib/upload-limits";

type FileDropzoneProps = {
  label: string;
  required?: boolean;
  accept?: string;
  hint?: string;
  variant?: "image" | "document" | "video";
  value: File | null;
  onChange: (file: File | null) => void;
  maxBytes?: number;
  processFile?: (file: File) => Promise<File | null>;
};

export function FileDropzone({
  label,
  required,
  accept,
  hint,
  variant = "image",
  value,
  onChange,
  maxBytes,
  processFile,
}: FileDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const acceptFile = useCallback(
    async (file: File | null) => {
      if (!file) {
        setError(null);
        onChange(null);
        return;
      }

      setProcessing(true);
      setError(null);

      try {
        const processed = processFile ? await processFile(file) : file;
        if (!processed) return;

        if (maxBytes && processed.size > maxBytes) {
          const message = `File must be under ${Math.round(maxBytes / (1024 * 1024))}MB.`;
          setError(message);
          toast.error(message);
          onChange(null);
          if (inputRef.current) inputRef.current.value = "";
          return;
        }

        onChange(processed);

        if (processed.size < file.size) {
          toast.success(
            `Compressed ${file.name} (${formatFileSize(file.size)} → ${formatFileSize(processed.size)})`,
          );
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : "Could not process file.";
        setError(message);
        toast.error(message);
        onChange(null);
        if (inputRef.current) inputRef.current.value = "";
      } finally {
        setProcessing(false);
      }
    },
    [maxBytes, onChange, processFile],
  );

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) void acceptFile(file);
  };

  const Icon = variant === "document" ? FileText : variant === "video" ? Film : ImageIcon;
  const hoverBorder =
    variant === "document"
      ? "hover:border-blue-500"
      : variant === "video"
        ? "hover:border-violet-500"
        : "hover:border-amber-500";
  const iconHover =
    variant === "document"
      ? "group-hover:text-blue-500"
      : variant === "video"
        ? "group-hover:text-violet-500"
        : "group-hover:text-amber-500";

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && !processing && inputRef.current?.click()}
        onClick={() => !processing && inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          if (!processing) setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className={`group cursor-pointer ${fileDropzoneClass} ${hoverBorder} ${
          dragging ? "border-amber-500 bg-amber-500/5" : ""
        } ${processing ? "pointer-events-none opacity-70" : ""}`}
      >
        <Icon
          className={`mx-auto mb-3 h-8 w-8 text-gray-500 transition-colors ${iconHover}`}
        />
        <p className="text-sm font-medium text-gray-300">
          {label} {required && <span className="text-amber-500">*</span>}
        </p>
        {hint && <p className="mt-1 text-xs text-gray-500">{hint}</p>}

        {processing ? (
          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-amber-400">
            <Loader2 className="h-4 w-4 animate-spin" />
            Processing file…
          </p>
        ) : value ? (
          <div className="mt-4 flex flex-col items-center gap-1">
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm text-gray-300">{value.name}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  void acceptFile(null);
                }}
                className="rounded-full p-1 hover:bg-gray-800"
                aria-label="Remove file"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <span className="text-xs text-gray-500">{formatFileSize(value.size)}</span>
          </div>
        ) : (
          <p className="mt-4 text-sm text-gray-400">
            <Upload className="mr-1 inline h-4 w-4" />
            Drag and drop or browse
          </p>
        )}

        <input
          ref={inputRef}
          type="file"
          accept={accept}
          className="hidden"
          disabled={processing}
          onChange={(e) => void acceptFile(e.target.files?.[0] ?? null)}
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
      {!value && (
        <label className={`mt-3 block ${labelClass}`}>
          <input
            type="file"
            accept={accept}
            required={required}
            disabled={processing}
            className="w-full text-sm text-gray-400 file:mr-4 file:rounded-full file:border-0 file:bg-amber-500/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-amber-500 hover:file:bg-amber-500/20 disabled:opacity-60"
            onChange={(e) => void acceptFile(e.target.files?.[0] ?? null)}
          />
        </label>
      )}
    </div>
  );
}

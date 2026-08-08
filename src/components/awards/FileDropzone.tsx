import { FileText, ImageIcon, Upload, X } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { fileDropzoneClass, labelClass } from "@/components/awards/form-styles";

type FileDropzoneProps = {
  label: string;
  required?: boolean;
  accept?: string;
  hint?: string;
  variant?: "image" | "document";
  value: File | null;
  onChange: (file: File | null) => void;
};

export function FileDropzone({
  label,
  required,
  accept,
  hint,
  variant = "image",
  value,
  onChange,
}: FileDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = useCallback(
    (file: File | null) => {
      onChange(file);
    },
    [onChange],
  );

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const Icon = variant === "document" ? FileText : ImageIcon;
  const hoverBorder = variant === "document" ? "hover:border-blue-500" : "hover:border-amber-500";
  const iconHover =
    variant === "document" ? "group-hover:text-blue-500" : "group-hover:text-amber-500";

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className={`group cursor-pointer ${fileDropzoneClass} ${hoverBorder} ${
          dragging ? "border-amber-500 bg-amber-500/5" : ""
        }`}
      >
        <Icon
          className={`mx-auto mb-3 h-8 w-8 text-gray-500 transition-colors ${iconHover}`}
        />
        <p className="text-sm font-medium text-gray-300">
          {label} {required && <span className="text-amber-500">*</span>}
        </p>
        {hint && <p className="mt-1 text-xs text-gray-500">{hint}</p>}

        {value ? (
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-sm text-gray-300">{value.name}</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleFile(null);
                if (inputRef.current) inputRef.current.value = "";
              }}
              className="rounded-full p-1 hover:bg-gray-800"
              aria-label="Remove file"
            >
              <X className="h-4 w-4" />
            </button>
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
          onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
        />
      </div>
      {!value && (
        <label className={`mt-3 block ${labelClass}`}>
          <input
            type="file"
            accept={accept}
            required={required}
            className="w-full text-sm text-gray-400 file:mr-4 file:rounded-full file:border-0 file:bg-amber-500/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-amber-500 hover:file:bg-amber-500/20"
            onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
          />
        </label>
      )}
    </div>
  );
}

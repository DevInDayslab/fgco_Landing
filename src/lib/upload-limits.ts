export const UPLOAD_MAX_BYTES = {
  profile: 8 * 1024 * 1024,
  document: 15 * 1024 * 1024,
  video: 100 * 1024 * 1024,
} as const;

export const VIDEO_MAX_DURATION_SEC = 180;

export function formatMaxUploadSize(bytes: number) {
  return `${Math.round(bytes / (1024 * 1024))}MB`;
}

export function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

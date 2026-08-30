import type { ReactNode } from "react";

type PlaceholderImageProps = {
  className?: string;
  suggestedFile?: string;
  label?: ReactNode;
};

// Temporary image placeholder used while real photos are being provided.
// Swap this element for a Next.js <Image> (or plain <img>) at the same
// aspect ratio once the real asset is available.
export function PlaceholderImage({
  className,
  suggestedFile,
  label,
}: PlaceholderImageProps) {
  return (
    <div
      className={`img-placeholder${className ? ` ${className}` : ""}`}
      role="img"
      aria-label={typeof label === "string" ? label : undefined}
    >
      <span>{label ?? "Image placeholder"}</span>
      {suggestedFile && (
        <span className="img-placeholder-file">→ {suggestedFile}</span>
      )}
    </div>
  );
}

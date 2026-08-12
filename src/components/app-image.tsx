"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function AppImage({
  className,
  alt,
  ...props
}: ImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-3 border border-border bg-gradient-to-br from-border/40 via-card to-background",
          className
        )}
      >
        <ImageIcon className="h-10 w-10 text-muted/40" />
        <span className="px-4 text-center text-[11px] uppercase tracking-[0.2em] text-muted/50">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

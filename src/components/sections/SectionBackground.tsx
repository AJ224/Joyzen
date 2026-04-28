import React from "react";

export type SectionBackgroundProps = {
  gradient: string;
  overlayClassName: string;
  topFadeClassName: string;
  bottomFadeClassName: string;
};

export function SectionBackground({
  gradient,
  overlayClassName,
  topFadeClassName,
  bottomFadeClassName,
}: SectionBackgroundProps) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div className="h-full w-full" style={{ background: gradient }} />
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div className={`absolute inset-x-0 top-0 h-16 ${topFadeClassName}`} />
      <div className={`absolute inset-x-0 bottom-0 h-16 ${bottomFadeClassName}`} />
    </div>
  );
}


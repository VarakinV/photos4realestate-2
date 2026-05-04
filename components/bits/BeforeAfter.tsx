"use client";

import ReactCompareImage from "react-compare-image";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: "taller" | "wider";
};

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
  aspectRatio,
}: Props) {
  return (
    <div className="before-after-slider">
      <ReactCompareImage
        leftImage={beforeSrc}
        rightImage={afterSrc}
        leftImageAlt={beforeAlt}
        rightImageAlt={afterAlt}
        leftImageLabel={beforeLabel}
        rightImageLabel={afterLabel}
        sliderLineColor="#ffffff"
        sliderLineWidth={2}
        handleSize={44}
        aspectRatio={aspectRatio}
      />
    </div>
  );
}

export default BeforeAfter;

"use client";

import ReactCompareImage from "react-compare-image";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
};

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
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
        aspectRatio="wider"
      />
    </div>
  );
}

export default BeforeAfter;

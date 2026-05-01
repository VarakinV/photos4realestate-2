declare module "react-compare-image" {
  import * as React from "react";

  export interface ReactCompareImageProps {
    leftImage: string;
    rightImage: string;
    leftImageAlt?: string;
    rightImageAlt?: string;
    leftImageLabel?: string;
    rightImageLabel?: string;
    leftImageCss?: React.CSSProperties;
    rightImageCss?: React.CSSProperties;
    aspectRatio?: "taller" | "wider";
    handle?: React.ReactNode;
    handleSize?: number;
    hover?: boolean;
    sliderLineColor?: string;
    sliderLineWidth?: number;
    sliderPositionPercentage?: number;
    skeleton?: React.ReactNode;
    vertical?: boolean;
    onSliderPositionChange?: (position: number) => void;
  }

  const ReactCompareImage: React.FC<ReactCompareImageProps>;
  export default ReactCompareImage;
}

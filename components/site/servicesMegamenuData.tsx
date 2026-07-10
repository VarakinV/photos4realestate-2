import {
  Camera,
  Video,
  Ruler,
  Box,
  Drone,
  Hotel,
  Sofa,
  Moon,
  Megaphone,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";

export type MegamenuServiceItem = {
  slug: string;
  name: string;
  icon: ReactNode;
};

export type MegamenuGroup = {
  title: string;
  items: MegamenuServiceItem[];
};

const iconProps = { size: 18, strokeWidth: 1.75, "aria-hidden": true } as const;

export const servicesMegamenuGroups: ReadonlyArray<MegamenuGroup> = [
  {
    title: "RMS Services",
    items: [
      {
        slug: "real-estate-photography-in-calgary",
        name: "Real Estate Photography",
        icon: <Camera {...iconProps} />,
      },
      {
        slug: "real-estate-videos-in-calgary",
        name: "Real Estate Videography",
        icon: <Video {...iconProps} />,
      },
      {
        slug: "rms-measurements-and-floor-plans-in-calgary",
        name: "RMS Measurements & Floor Plans",
        icon: <Ruler {...iconProps} />,
      },
      {
        slug: "iguide-virtual-tours-in-calgary",
        name: "iGUIDE 3D Virtual Tours",
        icon: <Box {...iconProps} />,
      },
      {
        slug: "real-estate-aerial-drone-photography-in-calgary",
        name: "Drone Photography & Videography",
        icon: <Drone {...iconProps} />,
      },
    ],
  },
  {
    title: "Additional Services",
    items: [
      {
        slug: "virtual-staging",
        name: "Virtual Staging",
        icon: <Sofa {...iconProps} />,
      },
      {
        slug: "twilight-photography-for-real-estate-in-calgary",
        name: "Twilight Photography",
        icon: <Moon {...iconProps} />,
      },
      {
        slug: "style-shots",
        name: "Style Shots",
        icon: <Sparkles {...iconProps} />,
      },
      {
        slug: "marketing-kit-for-realtors",
        name: "Marketing Kit for Realtors",
        icon: <Megaphone {...iconProps} />,
      },
    ],
  },
  {
    title: "Commercial Services",
    items: [
      {
        slug: "hotel-photography",
        name: "Hotel Photography",
        icon: <Hotel {...iconProps} />,
      },
    ],
  },
];

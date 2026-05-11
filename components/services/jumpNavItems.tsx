import {
  Camera,
  Video,
  Ruler,
  Box,
  Drone,
  Sofa,
  Moon,
  Megaphone,
  Sparkles,
} from "lucide-react";
import type { JumpNavItem } from "@/components/services/ServicesJumpNav";

const iconProps = { size: 16, strokeWidth: 2, "aria-hidden": true } as const;

export const servicesJumpNavItems: ReadonlyArray<JumpNavItem> = [
  { id: "photography", label: "Photography", icon: <Camera {...iconProps} /> },
  { id: "videography", label: "Videography", icon: <Video {...iconProps} /> },
  { id: "rms", label: "RMS & Floor Plans", icon: <Ruler {...iconProps} /> },
  { id: "iguide", label: "iGUIDE 3D Tour", icon: <Box {...iconProps} /> },
  { id: "drone", label: "Drone", icon: <Drone {...iconProps} /> },
  { id: "virtual-staging", label: "Virtual Staging", icon: <Sofa {...iconProps} /> },
  { id: "twilight", label: "Twilight", icon: <Moon {...iconProps} /> },
  { id: "marketing-kit", label: "Marketing Kit", icon: <Megaphone {...iconProps} /> },
  { id: "style-shots", label: "Style Shots", icon: <Sparkles {...iconProps} /> },
];

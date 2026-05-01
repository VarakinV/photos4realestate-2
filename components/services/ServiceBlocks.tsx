import {
  Camera,
  Video,
  Ruler,
  Box,
  Drone,
  Sofa,
  Moon,
  Megaphone,
  Clock,
  Award,
} from "lucide-react";
import { ServiceBlock } from "@/components/services/ServiceBlock";
import {
  ServiceImage,
  ServiceBeforeAfter,
  ServiceGallery,
  ServiceVideo,
  ServiceEmbed,
} from "@/components/services/ServiceVisuals";
import { servicesImages } from "@/lib/images";

const iconProps = { size: 20, strokeWidth: 2, "aria-hidden": true } as const;

export function ServiceBlocks() {
  return (
    <>
      <ServiceBlock
        id="photography"
        number="01"
        eyebrow="Real Estate Photography"
        icon={<Camera {...iconProps} />}
        title="MLS-Ready Photography that Sells Faster"
        lead="High-resolution, HDR-enhanced photography that captures every room in its best light. Our photographers use professional gear, natural light, and advanced editing for images that stand out on MLS and every social feed."
        features={[
          "Interior & exterior photography",
          "Professional HDR editing",
          "Blue-sky replacement included",
          "Window view pull-through",
          "Next-day delivery",
          "Full marketing license",
        ]}
        learnMoreHref="/services/real-estate-photography-in-calgary"
        learnMoreLabelSuffix="real estate photography in Calgary"
        visual={
          <ServiceImage
            src={servicesImages.photography}
            alt="Bathroom in a Calgary house photographed by Photos 4 Real Estate"
            priority
            badge={{
              icon: <Clock size={16} strokeWidth={2} aria-hidden="true" />,
              label: "Delivery",
              value: "Next Day",
            }}
          />
        }
      />

      <ServiceBlock
        id="videography"
        number="02"
        eyebrow="Real Estate Videography"
        icon={<Video {...iconProps} />}
        title="Cinematic Property Videos for Every Platform"
        lead="Professional video walkthroughs that give buyers the feel of being in the home. Captured using professional equipment and smooth techniques, edited with music and ready to publish on YouTube, Instagram Reels, Facebook and TikTok."
        features={[
          "Cinematic interior & exterior walkthrough",
          "Professional colour grading & editing",
          "Background music licensed for social media",
          "Optimized for social media",
          "Drone footage included",
          "48-hour turnaround",
        ]}
        learnMoreHref="/services/real-estate-videos-in-calgary"
        learnMoreLabelSuffix="real estate videos in Calgary"
        reverse
        visual={
          <ServiceVideo
            src={servicesImages.videographyVideo}
            title="Vertical property video of 306 Cranbrook Walk SE, Calgary by Photos 4 Real Estate"
          />
        }
      />

      <ServiceBlock
        id="rms"
        number="03"
        eyebrow="RMS Measurements & Floor Plans"
        icon={<Ruler {...iconProps} />}
        title="RECA-Compliant Measurements & Floor Plans"
        lead="Professional laser-measured floor plans following Alberta's Residential Measurement Standard. Accurate and RECA-compliant, so you can list the square footage with confidence."
        features={[
          "RECA-compliant RMS",
          "Laser-measured accuracy",
          "2D floor plan layouts",
          "PDF and PNG delivery",
          "Same visit as photos",
          "Interactive iGUIDE option",
        ]}
        learnMoreHref="/services/rms-measurements-and-floor-plans-in-calgary"
        learnMoreLabelSuffix="RMS measurements and floor plans in Calgary"
        visual={
          <ServiceImage
            src={servicesImages.rms}
            alt="Example of an iGUIDE standard 2D floor plan for a Calgary home"
            badge={{
              icon: <Award size={16} strokeWidth={2} aria-hidden="true" />,
              label: "Standard",
              value: "RECA Compliant",
            }}
          />
        }
      />

      <ServiceBlock
        id="iguide"
        number="04"
        eyebrow="iGUIDE 3D Virtual Tours"
        icon={<Box {...iconProps} />}
        title="Immersive iGUIDE 3D Virtual Tours"
        lead="Give buyers a self-guided walkthrough of the property any time, day or night. iGUIDE combines 360° imagery with accurate floor plans — a proven listing engagement booster."
        features={[
          "Interactive 3D tour",
          "Integrated floor plan",
          "Accurate measurements",
          "Hosted online",
          "Embed anywhere",
          "MLS compatible",
        ]}
        learnMoreHref="/services/iguide-virtual-tours-in-calgary"
        learnMoreLabelSuffix="iGUIDE 3D virtual tours in Calgary"
        reverse
        visual={
          <ServiceEmbed
            src={servicesImages.iguideEmbedSrc}
            title="iGUIDE 3D virtual tour of 20729 Main St SE, Calgary"
          />
        }
      />

      <ServiceBlock
        id="drone"
        number="05"
        eyebrow="Drone Photography & Videography"
        icon={<Drone {...iconProps} />}
        title="Aerial Perspectives That Show the Full Picture"
        lead="See the whole property — lot lines, rooftops, acreage context and nearby amenities. Our drone pilots capture high-resolution stills and cinematic aerial video."
        features={[
          "Aerial photography & video",
          "Shows lot size, proximity & neighbourhood",
          "High-resolution stills",
          "Ideal for acreages, lakefront & large lots",
          "Weather-backup scheduling",
          "Completed same visit as ground photography",
        ]}
        learnMoreHref="/services/real-estate-aerial-drone-photography-in-calgary"
        learnMoreLabelSuffix="real estate aerial drone photography in Calgary"
        visual={
          <ServiceGallery
            main={{
              src: servicesImages.droneMain,
              alt: "Aerial drone view of downtown Calgary by Photos 4 Real Estate",
            }}
            secondary={{
              src: servicesImages.droneSecondary,
              alt: "Drone photograph of Mahogany Lake, Calgary",
            }}
            tertiary={{
              src: servicesImages.droneTertiary,
              alt: "Drone photograph of an acreage property near Calgary",
            }}
          />
        }
      />

      <ServiceBlock
        id="virtual-staging"
        number="06"
        eyebrow="Virtual Staging"
        icon={<Sofa {...iconProps} />}
        title="Transform Empty Rooms into Buyer Magnets"
        lead="Photo-realistic virtual staging that helps buyers picture themselves living in the home — for a fraction of the cost of physical staging. Choose from modern, traditional, Scandinavian and more."
        features={[
          "Photo-realistic furniture",
          "Multiple style options",
          "Virtual decluttering",
          "Grass greening",
          "Renovation previews",
          "Disclosure-compliant files",
        ]}
        learnMoreHref="/services/virtual-staging"
        learnMoreLabelSuffix="virtual staging for Calgary real estate"
        reverse
        visual={
          <ServiceBeforeAfter
            beforeSrc={servicesImages.stagingBefore}
            afterSrc={servicesImages.stagingAfter}
            beforeAlt="Empty Calgary bedroom before virtual staging"
            afterAlt="Calgary bedroom after virtual staging by Photos 4 Real Estate"
          />
        }
      />

      <ServiceBlock
        id="twilight"
        number="07"
        eyebrow="Twilight Photography"
        icon={<Moon {...iconProps} />}
        title="Exteriors that Glow Past the Competition"
        lead="Twilight exteriors capture the home at its most inviting moment — warm interior lights, a saturated sky and rich evening colour. Statistically the single best-performing image on MLS and social thumbnails."
        features={[
          "Golden-hour timing",
          "Warm interior lighting",
          "Sky enhancement",
          "Dramatic exteriors",
          "MLS hero image",
          "Social-ready edits",
        ]}
        learnMoreHref="/services/twilight-photography-for-real-estate-in-calgary"
        learnMoreLabelSuffix="twilight photography for real estate in Calgary"
        visual={
          <ServiceImage
            src={servicesImages.twilight}
            alt="Calgary home photographed at twilight with warm interior lights"
          />
        }
      />

      <ServiceBlock
        id="marketing-kit"
        number="08"
        eyebrow="Marketing Kit for Realtors"
        icon={<Megaphone {...iconProps} />}
        title="A Complete Marketing Kit with Every Shoot"
        lead="Every booking includes a suite of marketing assets no other local provider offers as standard — social reels, property flyers, branded websites and slideshows, ready to publish the day after your shoot."
        features={[
          "9 social media reels",
          "2 slideshow videos",
          "3 property flyers",
          "3 branded websites",
          "Single-property websites",
          "Free with every package",
        ]}
        learnMoreHref="/services/marketing-kit-for-realtors"
        learnMoreLabelSuffix="the marketing kit for Calgary realtors"
        reverse
        visual={
          <ServiceImage
            src={servicesImages.marketingKit}
            alt="Preview of a complete marketing kit for Calgary realtors including social reels, websites, slideshows, and flyers"
          />
        }
      />
    </>
  );
}

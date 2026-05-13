import type { PortfolioImage } from "@/lib/portfolio";
import { listR2FolderImages } from "@/lib/portfolio";

export type HotelGalleryCategory = {
  id: string;
  label: string;
  folder: string;
  heading: string;
  description: string;
  images: PortfolioImage[];
};

type HotelGalleryDefinition = Omit<HotelGalleryCategory, "images">;

const hotelCdnRoot = "p4re-static-media/hotel-photography";

const definitions: HotelGalleryDefinition[] = [
  {
    id: "rooms",
    label: "Rooms",
    folder: "rooms",
    heading: "Hotel Room Photography",
    description: "Guest rooms, suites, bedding details, windows, work areas, and the in-room experience guests compare before booking.",
  },
  {
    id: "exterior",
    label: "Exterior",
    folder: "exterior",
    heading: "Hotel Exterior Photography",
    description: "Building facades, entrances, signage, parking, grounds, twilight options, and drone-ready exterior context.",
  },
  {
    id: "lobby",
    label: "Lobby",
    folder: "lobby",
    heading: "Lobby & Reception Photography",
    description: "Arrival moments, reception desks, lounge seating, first impressions, and branded public spaces.",
  },
  {
    id: "amenities",
    label: "Amenities",
    folder: "amenities",
    heading: "Hotel Amenities Photography",
    description: "Pools, dining, meeting rooms, gyms, lounges, spas, and guest amenities that help your property stand out.",
  },
];

const fallbackImages: Partial<Record<string, PortfolioImage[]>> = {
  rooms: [
    {
      id: "hotel-rooms-fallback-1",
      src: "https://cdn.photos4realestate.ca/p4re-static-media/hotel-photography/rooms/Photo-of-a-hotel-room-10-Photos-4-Real-Estate.webp",
      alt: "Hotel room photography example by Photos 4 Real Estate in Calgary",
      caption: "Hotel Room · Calgary",
      ratio: "wide",
      featured: true,
    },
  ],
};

function cleanHotelImageLabel(value: string) {
  return value
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\bPhotos 4 Real Estate\b/gi, "")
    .replace(/\bPhoto of (a|an|the)\b/gi, "")
    .replace(/\bin a hotel\b/gi, "hotel")
    .replace(/\s+/g, " ")
    .trim();
}

function hotelImageAlt(definition: HotelGalleryDefinition, image: PortfolioImage) {
  const fileName = decodeURIComponent(image.src.split("/").pop() ?? image.caption);
  const label = cleanHotelImageLabel(image.caption || fileName);
  const detail = label ? `: ${label}` : "";
  return `${definition.heading}${detail} in Calgary, Alberta by Photos 4 Real Estate`;
}

export async function getHotelGalleryCategories(): Promise<HotelGalleryCategory[]> {
  return Promise.all(
    definitions.map(async (definition) => {
      const images =
        (await listR2FolderImages(`${hotelCdnRoot}/${definition.folder}/`, {
          idPrefix: `hotel-${definition.id}`,
          heading: definition.heading,
          maxKeys: 120,
        })) ?? fallbackImages[definition.id] ?? [];

      return {
        ...definition,
        images: images.map((image) => ({
          ...image,
          alt: hotelImageAlt(definition, image),
        })),
      };
    }),
  );
}
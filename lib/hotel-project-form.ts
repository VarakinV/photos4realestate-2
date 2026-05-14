export const hotelPhotographyNeedOptions = [
  "Guest rooms",
  "Lobby & common areas",
  "Restaurant / bar",
  "Spa / wellness",
  "Exterior & grounds",
  "Pool & amenities",
  "Event / meeting spaces",
] as const;

export const hotelDecisionOptions = ["Yes", "No", "Not sure"] as const;

export const hotelTimelineOptions = [
  "ASAP — within 1 week",
  "Standard — within 2–4 weeks",
  "Flexible",
  "Not sure yet",
] as const;

export const hotelPackageOptions = [
  "Standard $1,995",
  "Advanced $2,595",
  "Custom",
] as const;

export type HotelProjectInput = {
  propertyName: string;
  roomCount: string;
  cityLocation: string;
  needs: string[];
  twilightPhotography: string;
  videography: string;
  timeline: string;
  packageInterest: string;
  fullName: string;
  email: string;
  phone: string;
  notes: string;
};

export type HotelProjectField = keyof HotelProjectInput;

export type HotelProjectFieldErrors = Partial<Record<HotelProjectField, string>>;

export type HotelProjectResult =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: HotelProjectFieldErrors };

export function isHotelOption(value: string, options: readonly string[]) {
  return options.includes(value);
}
import type { Metadata } from "next";
import { WheelInteractive } from "./WheelInteractive";

export const dynamic = "force-static";

const title = "Spin & Win | Photos 4 Real Estate";
const description =
  "Spin the fortune wheel and win real prizes — from free drone photos to loyalty points. Every realtor wins something.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  robots: { index: false, follow: true },
};

export default function WheelLandingPage() {
  const recaptchaSiteKey = process.env.RECAPTCHA_SITE_KEY;

  return <WheelInteractive recaptchaSiteKey={recaptchaSiteKey} />;
}

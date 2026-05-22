import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SuccessConfetti } from "@/components/site/SuccessConfetti";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Free Headshots Request Received",
  description:
    "Your complimentary realtor headshot request has been received by Photos 4 Real Estate.",
};

export default function FreeHeadshotsSuccessPage() {
  return (
    <section className="free-headshots-success-page" aria-labelledby="free-headshots-success-heading">
      <SuccessConfetti />
      <div className="container">
        <div className="free-headshots-success-card">
          <div className="free-headshots-success-icon" aria-hidden="true">
            <CheckCircle2 size={34} />
          </div>
          <span className="section-label">Complimentary Headshot Offer</span>
          <h1 id="free-headshots-success-heading">Your Request Has Been Received</h1>
          <p>Thank you for claiming your complimentary realtor headshot offer.</p>
          <p>
            We&rsquo;ve saved your request and you can redeem the offer whenever you book a
            future listing shoot with Photos 4 Real Estate.
          </p>
          <div className="free-headshots-success-actions">
            <p>If you&rsquo;re ready to schedule now, you can book online here:</p>
            <a href={siteConfig.bookingUrl} className="btn btn-primary">
              Book Now
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SuccessConfetti } from "@/components/site/SuccessConfetti";
import { siteConfig } from "@/lib/site";

function WheelSuccessContent() {
  const searchParams = useSearchParams();
  const prize = searchParams.get("prize") ?? "your prize";

  return (
    <section className="wheel-success-page" aria-labelledby="wheel-success-heading">
      <SuccessConfetti />
      <div className="container">
        <div className="wheel-success-card">
          <div className="wheel-success-icon" aria-hidden="true">
            <CheckCircle2 size={34} />
          </div>
          <span className="section-label">Fortune Wheel Prize</span>
          <h1 id="wheel-success-heading">Congratulations!</h1>
          <p className="wheel-success-prize">
            You&rsquo;ve won <strong>&ldquo;{prize}&rdquo;</strong>
          </p>
          <p>
            Thank you for spinning the wheel! We&rsquo;ve received your information and our team will reach out shortly to help you redeem your prize.
          </p>
          <div className="wheel-success-actions">
            <p>Ready to use your prize or explore our services? Book online now:</p>
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

export default function WheelSuccessPage() {
  return (
    <Suspense fallback={null}>
      <WheelSuccessContent />
    </Suspense>
  );
}

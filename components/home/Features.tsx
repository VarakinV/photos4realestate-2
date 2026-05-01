import Image from "next/image";
import Link from "next/link";
import { BeforeAfter } from "@/components/bits/BeforeAfter";
import { homeImages } from "@/lib/images";

export function VirtualStagingFeature() {
  return (
    <section className="feature-section" aria-labelledby="vs-heading">
      <div className="container">
        <div className="feature-grid">
          <div className="feature-content">
            <span className="section-label">Virtual Staging</span>
            <h2 id="vs-heading">Empty rooms don&rsquo;t sell. Staged ones do.</h2>
            <p>
              Virtual staging replaces vacant rooms with photo-realistic furniture so
              buyers can picture themselves living there — for a fraction of the cost
              of physical staging.
            </p>
            <p>
              We also offer virtual decluttering, seasonal grass greening and renovation
              previews to help buyers see the home&rsquo;s true potential.
            </p>
            <Link href="/services/virtual-staging" className="btn btn-primary">
              Explore Virtual Staging
            </Link>
          </div>

          <div>
            <div className="feature-img">
              <BeforeAfter
                beforeSrc={homeImages.vsBefore}
                afterSrc={homeImages.vsAfter}
                beforeAlt="Empty Calgary living room before virtual staging"
                afterAlt="Same Calgary living room after virtual staging by Photos 4 Real Estate"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DroneFeature() {
  return (
    <section className="feature-section alt" aria-labelledby="drone-heading">
      <div className="container">
        <div className="feature-grid reverse">
          <div className="feature-content">
            <span className="section-label">Aerial Drone</span>
            <h2 id="drone-heading">See the whole property — and the neighbourhood.</h2>
            <p>
              Drone photography gives Calgary listings a perspective that no
              ground-level camera can match. Aerial shots showcase lot size,
              proximity to parks and amenities, neighbourhood context, and
              architectural scale.
            </p>
            <p>
              Our licensed drone operators capture stunning still and video aerial
              footage in compliance with Transport Canada regulations.
            </p>
            <Link
              href="/services/real-estate-aerial-drone-photography-in-calgary"
              className="btn btn-primary"
            >
              Explore Drone Services
            </Link>
          </div>

          <div className="feature-img">
            <Image
              src={homeImages.drone}
              alt="Aerial drone photograph of a Calgary home captured by Photos 4 Real Estate"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function TwilightFeature() {
  return (
    <section className="feature-section" aria-labelledby="twilight-heading">
      <div className="container">
        <div className="feature-grid">
          <div className="feature-content">
            <span className="section-label">Twilight Photography</span>
            <h2 id="twilight-heading">Listings that glow past the competition.</h2>
            <p>
              Twilight exteriors capture the house at its most inviting moment — warm
              interior lights, a soft sky and rich saturated colour. They&rsquo;re the
              single best-performing image on MLS and social thumbnails.
            </p>
            <p>
              We shoot at real dusk, then composite for clean, believable results — no
              fake skies.
            </p>
            <Link
              href="/services/twilight-photography-for-real-estate-in-calgary"
              className="btn btn-primary"
            >
              Explore Twilight Photography
            </Link>
          </div>

          <div className="feature-img">
            <Image
              src={homeImages.twilight}
              alt="Calgary home photographed at twilight with warm interior lights by Photos 4 Real Estate"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

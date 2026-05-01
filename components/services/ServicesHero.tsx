export function ServicesHero() {
  return (
    <section className="services-page-hero" aria-labelledby="services-page-title">
      <div className="container">
        <div className="services-page-hero-inner">
          <div>
            <div className="services-page-hero-eyebrow">
              Calgary &amp; Surrounding Areas
            </div>
            <h1 id="services-page-title">
              Professional Real Estate
              <br />
              <em>Media Services</em>
            </h1>
            <p className="services-page-hero-sub speakable-intro">
              Photos 4 Real Estate provides{" "}
              <strong>everything Calgary realtors need</strong> to market a
              property — from MLS-ready photography to 3D virtual tours, drone
              footage and floor plans. All services in one visit, delivered the
              next day.
            </p>
          </div>

          <ul
            className="services-page-hero-stats"
            aria-label="Key services page stats"
          >
            <li className="services-page-hero-stat">
              <span className="num">8+</span>
              <span className="lbl">Services available</span>
            </li>
            <li className="services-page-hero-stat">
              <span className="num">24h</span>
              <span className="lbl">Next-day delivery</span>
            </li>
            <li className="services-page-hero-stat">
              <span className="num">1</span>
              <span className="lbl">Visit for everything</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

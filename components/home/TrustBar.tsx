import { Clock, FileOutput, Ruler, ShieldCheck, Star } from "lucide-react";

const items = [
  { label: "Next day delivery", Icon: Clock },
  { label: "RECA-Compliant RMS", Icon: Ruler },
  { label: "MLS-Ready Deliverables", Icon: FileOutput },
  { label: "Top-Rated in Calgary", Icon: Star },
  { label: "Licensed & Insured", Icon: ShieldCheck },
];

export function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Trust and credentials">
      <div className="container trust-bar-inner">
        {items.map(({ label, Icon }) => (
          <div className="trust-item" key={label}>
            <span className="trust-icon">
              <Icon aria-hidden="true" strokeWidth={2} />
            </span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

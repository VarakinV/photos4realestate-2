import { CloudSun, Flame, Sprout, WavesLadder } from "lucide-react";
import type { ReactNode } from "react";

type AddonCard = {
  title: string;
  description: string;
  icon: ReactNode;
};

const addOns: ReadonlyArray<AddonCard> = [
  {
    title: "Sky Replacement",
    description:
      "Replace overcast or grey skies with bright blue Calgary skies — included on every shoot at no extra cost.",
    icon: <CloudSun size={20} strokeWidth={2} aria-hidden="true" />,
  },
  {
    title: "Pool Water Enhancement",
    description:
      "Transform dull or green pool water into pristine, crystal-clear blue — perfect for luxury property listings.",
    icon: <WavesLadder size={20} strokeWidth={2} aria-hidden="true" />,
  },
  {
    title: "Fireplace Enhancement",
    description:
      "Add a warm, glowing fire to empty or unlit fireplaces — instantly makes a room feel more inviting and aspirational.",
    icon: <Flame size={20} strokeWidth={2} aria-hidden="true" />,
  },
  {
    title: "Grass & Lawn Enhancement",
    description:
      "Refresh tired or brown lawns with vibrant green grass — particularly useful for winter and early spring listings.",
    icon: <Sprout size={20} strokeWidth={2} aria-hidden="true" />,
  },
];

export function ServicesAddons() {
  return (
    <section className="addons-section" aria-labelledby="addons-heading">
      <div className="container">
        <div className="section-header addons-header">
          <span className="section-label">Enhancements</span>
          <h2 id="addons-heading">Photo Enhancement Add-Ons</h2>
          <p>
            Every shoot can be enhanced with these optional upgrades — ask when
            booking.
          </p>
        </div>
        <div className="addons-grid">
          {addOns.map((item) => (
            <article key={item.title} className="addon-card">
              <div className="addon-icon" aria-hidden="true">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
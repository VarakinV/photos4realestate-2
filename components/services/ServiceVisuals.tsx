import Image from "next/image";
import type { ReactNode } from "react";

type ServiceImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  badge?: {
    icon: ReactNode;
    label: string;
    value: string;
  };
};

export function ServiceImage({ src, alt, priority, badge }: ServiceImageProps) {
  return (
    <>
      <div className="service-img-main">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          priority={priority}
          style={{ objectFit: "cover" }}
        />
      </div>
      {badge ? (
        <div className="service-img-badge">
          <span className="badge-icon" aria-hidden="true">
            {badge.icon}
          </span>
          <div>
            <div className="badge-label">{badge.label}</div>
            <div className="badge-value">{badge.value}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export { BeforeAfter as ServiceBeforeAfter } from "@/components/bits/BeforeAfter";

type ServiceGalleryProps = {
  main: { src: string; alt: string };
  secondary: { src: string; alt: string };
  tertiary: { src: string; alt: string };
};

type ServiceVideoProps = {
  src: string;
  title: string;
  poster?: string;
};

export function ServiceVideo({ src, title, poster }: ServiceVideoProps) {
  return (
    <div className="service-video-main">
      <video
        className="service-video-el"
        src={poster ? src : `${src}#t=0.5`}
        poster={poster}
        controls
        preload="metadata"
        playsInline
        aria-label={title}
      />
    </div>
  );
}

type ServiceEmbedProps = {
  src: string;
  title: string;
};

export function ServiceEmbed({ src, title }: ServiceEmbedProps) {
  return (
    <div className="service-embed">
      <iframe
        src={src}
        title={title}
        className="service-embed-iframe"
        scrolling="no"
        allowFullScreen
      />
    </div>
  );
}

type CollageItem = { src: string; alt: string };
type ServiceCollageProps = {
  topLeft: CollageItem;
  topRight: CollageItem;
  bottomLeft: CollageItem;
  bottomRight: CollageItem;
};

export function ServiceCollage({
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}: ServiceCollageProps) {
  const cells: CollageItem[] = [topLeft, topRight, bottomLeft, bottomRight];
  return (
    <div className="service-collage">
      {cells.map((cell) => (
        <div className="service-collage-cell" key={cell.src}>
          <Image
            src={cell.src}
            alt={cell.alt}
            fill
            sizes="(max-width: 900px) 50vw, 25vw"
            style={{ objectFit: "contain" }}
          />
        </div>
      ))}
    </div>
  );
}

export function ServiceGallery({
  main,
  secondary,
  tertiary,
}: ServiceGalleryProps) {
  return (
    <div className="service-gallery">
      <div className="service-gallery-main">
        <Image
          src={main.src}
          alt={main.alt}
          fill
          sizes="(max-width: 900px) 100vw, 30vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="service-gallery-cell">
        <Image
          src={secondary.src}
          alt={secondary.alt}
          fill
          sizes="(max-width: 900px) 50vw, 15vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="service-gallery-cell">
        <Image
          src={tertiary.src}
          alt={tertiary.alt}
          fill
          sizes="(max-width: 900px) 50vw, 15vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

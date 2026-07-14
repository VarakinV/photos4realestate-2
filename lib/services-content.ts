import { services } from "@/lib/site";
import { servicesImages } from "@/lib/images";
import type { Faq } from "@/lib/faqs";
import { photosOnlyTiers, pricingTiers } from "@/lib/pricing";

export type ServiceSlug = (typeof services)[number]["slug"];

const startPhotosOnly = photosOnlyTiers[0].price;
const startEssential = pricingTiers[0].essential;
const startSkyline = pricingTiers[0].skyline;
const startSocial = pricingTiers[0].social;

export type ServiceVisual =
  | { kind: "image"; src: string; alt: string }
  | { kind: "video"; src: string; title: string; poster?: string }
  | { kind: "embed"; src: string; title: string }
  | {
      kind: "before-after";
      beforeSrc: string;
      afterSrc: string;
      beforeAlt: string;
      afterAlt: string;
    };

export type ServiceContent = {
  slug: ServiceSlug;
  seoTitle: string;
  seoDescription: string;
  ogAlt: string;
  eyebrow: string;
  h1: string;
  lead: string;
  overviewHeading: string;
  overviewParagraphs: readonly string[];
  includedHeading: string;
  features: readonly string[];
  whoForHeading: string;
  whoForBody: string;
  faqs: readonly Faq[];
  relatedSlugs: readonly ServiceSlug[];
  visual: ServiceVisual;
};

export const servicesContent: Record<ServiceSlug, ServiceContent> = {
  "real-estate-photography-in-calgary": {
    slug: "real-estate-photography-in-calgary",
    seoTitle: "Real Estate Photography Calgary | Photos 4 Real Estate",
    seoDescription:
      "Professional MLS-ready real estate photography in Calgary. HDR editing, blue-sky replacement, next-day delivery. Book your Calgary photo shoot online today.",
    ogAlt: "Real Estate Photography in Calgary by Photos 4 Real Estate",
    eyebrow: "Calgary Real Estate Photography",
    h1: "Real Estate Photography in Calgary",
    lead: "Photos 4 Real Estate provides professional MLS-ready real estate photography for Calgary realtors and homeowners. Every shoot includes HDR-enhanced interior and exterior images, blue-sky replacement and next-day delivery — so your listing can go live the day after we finish.",
    overviewHeading: "What is real estate photography?",
    overviewParagraphs: [
      "Real estate photography is the professional capture and editing of interior and exterior images for property marketing. We use full-frame cameras, wide-angle lenses, off-camera lighting and HDR bracketing so every room reads bright, accurate and inviting on MLS, your website and social feeds.",
      "Our Calgary photographers shoot every property to a consistent standard: corrected verticals, true-to-life colour, balanced window views and a deliberate shot list that highlights the layout, light and finishes buyers want to see first.",
    ],
    includedHeading: "What's included with every Calgary photo shoot",
    features: [
      "Interior & exterior photography",
      "Professional HDR editing",
      "Blue-sky replacement included",
      "Window view pull-through",
      "Next-day delivery",
      "Full marketing license for MLS, web & social",
    ],
    whoForHeading: "Who is this for?",
    whoForBody:
      "Calgary real estate agents, brokerages, developers, builders and homeowners preparing a property for MLS or private sale. Listings that lead with strong photography see more saves, more showings and faster offers.",
    faqs: [
      {
        q: "How much does real estate photography cost in Calgary?",
        a: `Real estate photography in Calgary starts at $${startPhotosOnly} for photos only (up to 1,500 sq ft). Our most popular package — Essential, which includes photos, iGUIDE 3D tour, and RMS measurements — starts at $${startEssential} for homes up to 1,000 sq ft. All prices are before GST. <a href="/prices">See full pricing<span class="sr-only"> for Calgary real estate photography packages</span> &rarr;</a>`,
      },
      {
        q: "How long does a real estate photo shoot take?",
        a: "A standard real estate photo shoot takes 45 to 90 minutes depending on the size of the property and the number of rooms. If you've added RMS measurements, a 3D virtual tour, or drone photography to your booking, expect 1 to 3 hours total.",
      },
      {
        q: "When will I receive my photos?",
        a: "All photos are delivered within 24 hours of the shoot. You'll receive a download link by the next morning with high-resolution JPEG files and web-optimized versions ready for MLS upload. No chasing, no follow-ups required.",
      },
      {
        q: "What is blue-sky replacement and is it included?",
        a: "Blue-sky replacement is a post-processing technique where an overcast or grey sky in an exterior photo is digitally replaced with a bright blue sky. It's included at no extra charge on every exterior image in every package — you'll never receive a listing photo with a grey sky from us.",
      },
      {
        q: "How should the property be prepared for the shoot?",
        a: "Turn on all lights, open all blinds and curtains, clear countertops, make all beds, remove personal items and pet accessories, and move vehicles out of the driveway. We have a full photoshoot checklist you can share with your sellers before the appointment. <a href=\"/photoshoot-checklist\">See the full checklist<span class=\"sr-only\"> for preparing your Calgary home</span> &rarr;</a>",
      },
      {
        q: "Do you serve areas outside of Calgary?",
        a: "Yes. We serve Calgary and surrounding communities including Okotoks, Airdrie, Cochrane, Chestermere, High River, Springbank, Bearspaw, Rocky View County, and Banff. Travel within 35 km of Calgary City Centre is free. A $30 flat fee applies to select surrounding towns, and $0.85/km applies beyond 35 km.",
      },
      {
        q: "Can I book real estate photography without the iGUIDE tour and RMS measurements?",
        a: `Yes — our Photos Only service starts at $${startPhotosOnly} and includes professional photography, blue-sky replacement, and MLS-ready files without the iGUIDE or RMS component. This is a good option if you already have recent floor plans or are photographing a rental property that doesn't require RMS.`,
      },
    ],
    relatedSlugs: [
      "real-estate-videos-in-calgary",
      "rms-measurements-and-floor-plans-in-calgary",
      "twilight-photography-for-real-estate-in-calgary",
    ],
    visual: {
      kind: "image",
      src: servicesImages.photography,
      alt: "Bathroom in a Calgary house photographed by Photos 4 Real Estate",
    },
  },

  "style-shots": {
    slug: "style-shots",
    seoTitle: "Style Shots Photography Calgary | Photos 4 Real Estate",
    seoDescription:
      "Add 3–4 magazine-style detail shots to your Calgary real estate photoshoot for $35. Showcase finishes, décor, and design details. Book online today.",
    ogAlt: "Style Shots photography for Calgary real estate listings by Photos 4 Real Estate",
    eyebrow: "Signature Detail Shots",
    h1: "Style Shots Photography in Calgary",
    lead: "Style Shots are magazine-style close-up photographs captured as an add-on to your Calgary real estate photoshoot. They highlight the textures, finishes, décor, lighting, and craftsmanship that make a home feel memorable — and help buyers connect emotionally with the lifestyle behind the listing.",
    overviewHeading: "What are Style Shots in real estate photography?",
    overviewParagraphs: [
      "Style Shots are detail-focused, editorial real estate photos designed to complement the main wide-angle listing gallery. Instead of showing the full room, they focus on visual moments such as a styled coffee table, linen textures, marble counters, pendant lighting, tile work, or carefully selected décor.",
      "These close-up images are especially useful for listings where staging, materials, finishes, or design choices are part of the story. They add personality to MLS, brochures, property websites, Instagram Reels, and social posts without replacing the essential room-by-room photography buyers still need.",
    ],
    includedHeading: "What's included with Style Shots",
    features: [
      "3–4 magazine-style close-up photos",
      "Décor, texture, lighting, and finish details",
      "Carefully composed editorial imagery",
      "Professional editing matched to the main photo set",
      "High-resolution delivery for web and print",
      "$35 add-on to a real estate photography session",
    ],
    whoForHeading: "Who should add Style Shots?",
    whoForBody:
      "Style Shots are ideal for Calgary realtors marketing luxury or designer listings, professionally staged homes, builder and renovator projects, interior design portfolios, and Airbnb or vacation rental listings where lifestyle details help the property stand out online.",
    faqs: [
      {
        q: "How many Style Shots are included?",
        a: "The Style Shots add-on includes 3–4 magazine-style detail photos, depending on the property's size, staging, finishes, and available visual details.",
      },
      {
        q: "How much do Style Shots cost?",
        a: "Style Shots cost $35 + GST as an add-on to any real estate photography package. The add-on includes 3–4 edited close-up detail photos.",
      },
      {
        q: "Can I request specific areas or décor details?",
        a: "Yes. You can request specific features such as a kitchen island, marble countertop, pendant lighting, bathroom fixtures, styled shelves, bedding, fireplace details, or other décor moments you want highlighted.",
      },
      {
        q: "Are Style Shots edited the same way as my listing photos?",
        a: "Yes. Style Shots are professionally edited to match the look and colour consistency of your main real estate photo gallery, so the full set feels polished and cohesive.",
      },
      {
        q: "Can I book Style Shots as a standalone service?",
        a: "Style Shots are designed as an add-on to a full real estate photography session because they work best alongside the main room photos. Standalone bookings may be arranged upon request when scheduling allows.",
      },
    ],
    relatedSlugs: [
      "real-estate-photography-in-calgary",
      "twilight-photography-for-real-estate-in-calgary",
      "marketing-kit-for-realtors",
    ],
    visual: {
      kind: "image",
      src: servicesImages.styleShots,
      alt: "Magazine-style close-up detail shot of home décor for a Calgary real estate listing",
    },
  },

  "real-estate-videos-in-calgary": {
    slug: "real-estate-videos-in-calgary",
    seoTitle: "Real Estate Videography Calgary | Photos 4 Real Estate",
    seoDescription:
      "Cinematic property video walkthroughs for Calgary listings — colour-graded, music-licensed and ready for MLS, YouTube, Instagram Reels and TikTok. Book today.",
    ogAlt: "Real Estate Videography in Calgary by Photos 4 Real Estate",
    eyebrow: "Calgary Real Estate Videography",
    h1: "Real Estate Videography in Calgary",
    lead: "Cinematic property video walkthroughs that give Calgary buyers the feel of being inside the home. Captured with stabilized professional gear and edited with licensed music — ready to publish on MLS, YouTube, Instagram Reels, Facebook and TikTok.",
    overviewHeading: "What is a real estate video walkthrough?",
    overviewParagraphs: [
      "A real estate video walkthrough is a short, story-driven film of the property — typically 60 to 120 seconds — that takes buyers from the curb through every key space. Smooth gimbal motion, slider shots and aerial transitions show flow and scale that still photography cannot.",
      "We deliver both a horizontal MLS/YouTube cut and vertical Instagram Reels / TikTok versions, so your single shoot powers an entire week of social marketing for the listing.",
    ],
    includedHeading: "What's included with every property video",
    features: [
      "Cinematic interior & exterior walkthrough",
      "Professional colour grading & editing",
      "Background music licensed for social media",
      "Optimized for social media",
      "Drone footage included",
      "48-hour turnaround",
    ],
    whoForHeading: "Who is this for?",
    whoForBody:
      "Calgary listing agents who lead with video on social, builders showcasing new product, and sellers of distinctive properties — luxury, acreage, infill — where the property's story carries weight in the marketing.",
    faqs: [
      {
        q: "What kind of real estate videos do you produce?",
        a: "Cinematic property walkthroughs combining stabilized gimbal motion, interior and exterior coverage, drone aerials and licensed music. Final delivery is colour-graded MP4 in HD, optimized for MLS, YouTube and social.",
      },
      {
        q: "Do you provide vertical Instagram Reels and TikTok versions?",
        a: "Yes. We deliver either vertical (9:16) cuts sized for Instagram Reels, TikTok and Facebook Reels, or a horizontal cut for MLS and YouTube, based on your preferences.",
      },
      {
        q: "How is background music licensed?",
        a: "We use commercially-licensed music libraries cleared for real estate marketing on social platforms. You can publish on Instagram, TikTok and YouTube without copyright strikes.",
      },
      {
        q: "Can drone footage be added to my property video?",
        a: "Yes — drone aerials are included with every property video where the location and weather allow. For restricted-zone properties (e.g. close to YYC), we will include comprehensive ground-level exterior footage instead.",
      },
      {
        q: "How long does a real estate video shoot take?",
        a: "A standard video shoot takes about 1 to 2 hours, depending on the property's size and the package booked. If combined with photography or an iGUIDE tour, expect 2 to 3 hours total.",
      },
      {
        q: "Can I include an agent introduction or voiceover?",
        a: "Yes! We encourage agents to be on camera. We capture your on-screen introduction and voiceover to personalize the walkthrough. Just let us know when booking so we can plan the script and timing.",
      },
      {
        q: "When will I receive the final video?",
        a: "You will receive a download link for your final, fully edited video within 24 to 48 hours after the shoot is completed.",
      },
    ],
    relatedSlugs: [
      "real-estate-photography-in-calgary",
      "real-estate-aerial-drone-photography-in-calgary",
      "marketing-kit-for-realtors",
    ],
    visual: {
      kind: "video",
      src: servicesImages.videographyVideo,
      title:
        "Vertical property video of 306 Cranbrook Walk SE, Calgary by Photos 4 Real Estate",
    },
  },

  "rms-measurements-and-floor-plans-in-calgary": {
    slug: "rms-measurements-and-floor-plans-in-calgary",
    seoTitle: "RMS Measurements & Floor Plans Calgary | Photos 4 Real Estate",
    seoDescription:
      "RECA-compliant RMS measurements and 2D floor plans for Calgary properties. Laser-measured, delivered next day as PDF and PNG. Book your measurement online.",
    ogAlt: "RMS Measurements and Floor Plans in Calgary by Photos 4 Real Estate",
    eyebrow: "RMS Measurements & Floor Plans",
    h1: "RMS Measurements & Floor Plans in Calgary",
    lead: "RECA-compliant RMS measurements and clean 2D floor plans for Calgary properties. We laser-measure on site to within 1% accuracy and deliver PDF and PNG floor plans the next business day — so you can list square footage with confidence.",
    overviewHeading: "What are RMS measurements?",
    overviewParagraphs: [
      "The Residential Measurement Standard (RMS) is the method Alberta real estate professionals are required to use under RECA when reporting square footage for residential properties. It defines exactly what counts as Above Grade Living Area, how walls are measured and how stairs, voids and below-grade spaces are reported.",
      "Our floor plans show every room with dimensions, doors, windows and stairwells in a clean, agent-friendly layout. The accompanying RMS area report itemizes Above Grade and Below Grade totals so you can list the property compliantly.",
    ],
    includedHeading: "What's included with every RMS measurement",
    features: [
      "RECA-compliant RMS area report",
      "Laser-measured to within 1%",
      "Clean 2D floor plan layouts",
      "PDF and PNG delivery",
      "Same visit as photos",
      "Optional iGUIDE 3D upgrade",
    ],
    whoForHeading: "Who is this for?",
    whoForBody:
      "Calgary listing agents who need RECA-compliant square footage on every MLS listing, builders publishing as-built floor plans, and homeowners who need accurate measurements for refinancing, insurance or pre-list pricing.",
    faqs: [
      {
        q: "What is RMS measurement in Alberta real estate?",
        a: 'RMS stands for Residential Measurement Standard &mdash; the measurement framework mandated by RECA (Real Estate Council of Alberta) for all residential MLS listings in Alberta. RMS specifies which areas count as livable square footage and how they must be measured. All Calgary MLS listings must include RMS-compliant measurements. <a href="https://www.reca.ca" target="_blank" rel="noopener">Learn more from RECA<span class="sr-only"> about Calgary RMS Measurement Standard</span> &rarr;</a>',
      },
      {
        q: "Is RMS measurement required for MLS listings in Calgary?",
        a: "Yes. RECA requires that all residential MLS listings in Alberta include RMS-compliant measurements. Listings without accurate RMS measurements can result in regulatory penalties for the listing realtor and potential legal disputes with buyers who relied on the advertised square footage when making their offer.",
      },
      {
        q: "How much do RMS measurements cost in Calgary?",
        a: `Standalone RMS measurements and floor plans start at $150 + GST for homes up to 1,500 sq ft. When combined with photography in our Essential, Skyline, or Social Boost packages, RMS and floor plans are included starting from $${startEssential} + GST. <a href="/prices/">See the full pricing breakdown by square footage &rarr;</a>`,
      },
      {
        q: "How long does an RMS measurement take?",
        a: "A typical RMS scan using iGUIDE takes 30&ndash;60 minutes on-site depending on property size and number of floors. When combined with photography in the same visit, the total on-site time is 1.5 to 2.5 hours. We can complete both in a single visit, which is how most Calgary realtors book it.",
      },
      {
        q: "What areas are included in the RMS billable area?",
        a: 'RMS billable area includes all interior areas on all floors, basement, sunrooms, crawlspaces, rooms accessible only from outside, and areas with sloped ceilings under 5 feet. It does not include attached garages, cold rooms, areas open to below, or outdoor spaces like balconies, decks, and patios. See our <a href="#billable-area">full billable area guide</a> above for details.',
      },
      {
        q: "How accurate is iGUIDE for RMS measurements?",
        a: "iGUIDE uses a combination of a 360&deg; panoramic camera and a LiDAR-based distance sensor to capture spatial data. The system is accurate to within 1% of actual measurements and is approved by RECA as a compliant method for producing RMS measurement reports. This is significantly more accurate than tape-measure or laser pointer measurements taken manually.",
      },
      {
        q: "What is the difference between Standard and Premium floor plans?",
        a: 'Standard floor plans are included with every package and are fully sufficient for all MLS listings. They show room dimensions, layout, and labels clearly. Premium floor plans offer enhanced detail &mdash; better suited for luxury listings, complex multi-level homes, or commercial properties. Premium plans are priced at $0.06/sq ft with a $70 minimum. <a href="/iguide-floor-plans-standard-vs-premium/">Read the full comparison<span class="sr-only"> of standard vs premium floor plans</span> &rarr;</a>',
      },
      {
        q: "Do I need to measure the property before booking?",
        a: "No &mdash; just an estimate is fine for booking. We'll measure the actual billable area on-site using iGUIDE. If the property falls into a different pricing tier than your estimate, we'll confirm with you before finalizing the invoice. There are no surprise charges.",
      },
    ],
    relatedSlugs: [
      "iguide-virtual-tours-in-calgary",
      "real-estate-photography-in-calgary",
      "real-estate-videos-in-calgary",
    ],
    visual: {
      kind: "image",
      src: servicesImages.rms,
      alt: "Example of an iGUIDE standard 2D floor plan for a Calgary home",
    },
  },

  "iguide-virtual-tours-in-calgary": {
    slug: "iguide-virtual-tours-in-calgary",
    seoTitle: "iGUIDE 3D Virtual Tours Calgary | Photos 4 Real Estate",
    seoDescription:
      "Immersive iGUIDE 3D virtual tours for Calgary real estate listings — integrated floor plans, accurate measurements and MLS-ready embeds. Book your tour today.",
    ogAlt: "iGUIDE 3D Virtual Tour in Calgary by Photos 4 Real Estate",
    eyebrow: "iGUIDE 3D Virtual Tours",
    h1: "iGUIDE 3D Virtual Tours in Calgary",
    lead: "Immersive iGUIDE 3D virtual tours let Calgary buyers walk through the property online any time of day or night. Each tour combines 360° panoramas with an integrated, accurately measured floor plan — proven to boost listing engagement and reduce wasted in-person showings.",
    overviewHeading: "What is an iGUIDE 3D virtual tour?",
    overviewParagraphs: [
      "iGUIDE is a Canadian-built 3D tour platform that captures a full property in 360° and pairs it with a precise floor plan and measurements. Buyers can navigate room to room, jump straight to the floor plan, take their own measurements and view a doll-house overview of the layout.",
      "We host the tour, deliver the embed code for MLS and your website, and bundle the underlying RMS-compliant floor plan and measurements at no extra charge.",
    ],
    includedHeading: "What's included with every iGUIDE tour",
    features: [
      "Interactive 360° 3D walkthrough",
      "Integrated 2D floor plan",
      "Accurate measurements",
      "Hosted online indefinitely",
      "Embed on MLS, your site & social",
      "Includes RMS-compliant area report",
    ],
    whoForHeading: "Who is this for?",
    whoForBody:
      "Calgary listing agents who want a measurable engagement boost, sellers of higher-end properties where buyers fly in or relocate, and any listing where unique layout, flow or finishes are best understood by walking through the home virtually.",
    faqs: [
      {
        q: "What is an iGUIDE virtual tour?",
        a: "iGUIDE is a 3D virtual tour platform built specifically for real estate. It combines interactive 360&deg; panoramic photography with LiDAR-based spatial measurement technology to produce three things simultaneously: an immersive virtual tour, RECA-compliant RMS measurements, and a professional 2D floor plan &mdash; all from a single on-site scan.",
      },
      {
        q: "Does iGUIDE include RMS measurements and floor plans?",
        a: "Yes &mdash; always. The 3D virtual tour, RMS measurements, and 2D floor plan are all produced from the same scan and cannot be separated. You cannot get an iGUIDE tour without also receiving the measurements and floor plan, and vice versa. This is what makes iGUIDE exceptional value for Calgary listings &mdash; three MLS essentials delivered in one visit.",
      },
      {
        q: "How much does an iGUIDE virtual tour cost in Calgary?",
        a: `The iGUIDE service (3D tour + RMS + floor plans) starts at $150 + GST as a standalone service for homes up to 1,500 sq ft. When bundled with photography in an Essential, Skyline, or Social Boost package, it is included starting from $${startEssential} + GST. Pricing scales by billable square footage. <a href="/prices">See the full pricing breakdown <span class="sr-only">for iGUIDE virtual tours in Calgary</span>&rarr;</a>`,
      },
      {
        q: "How is iGUIDE different from Matterport?",
        a: "Both produce 3D virtual tours, but iGUIDE has a decisive advantage for Calgary MLS listings: it produces RECA-compliant RMS measurements as part of every scan &mdash; something Matterport does not do. This means Calgary realtors using Matterport still need to hire a separate provider for RMS measurements, adding cost and a second appointment. With iGUIDE, the tour, measurements, and floor plan are all delivered in one visit at one price.",
      },
      {
        q: "How long does an iGUIDE scan take?",
        a: "An iGUIDE scan typically takes 30&ndash;60 minutes for a standard Calgary home depending on the number of rooms and floors. When combined with photography in the same visit, total on-site time is 1.5 to 2.5 hours. We coordinate both services so you only need one appointment.",
      },
      {
        q: "Can I embed the iGUIDE tour on my property website?",
        a: "Yes. Every iGUIDE tour comes with a shareable URL and an embed code you can add to any property website, your agent website, email campaigns, and social media. The tour works on all devices &mdash; desktop, tablet, and mobile &mdash; without requiring buyers to download any app. Our free property website tool (included in every package) automatically embeds the tour.",
      },
      {
        q: "What is the difference between a Standard and Premium floor plan?",
        a: "Standard floor plans are included in every iGUIDE scan at no extra cost and are fully sufficient for all Calgary MLS listings. Premium floor plans offer higher precision, additional labeling options, and enhanced styling &mdash; better suited for luxury properties, complex layouts, or commercial projects. Premium plans are available for $0.06/sq ft with a $70 minimum. <a href=\"/services/rms-measurements-and-floor-plans-in-calgary\">Read the full comparison <span class=\"sr-only\">between Standard and Premium floor plans</span>&rarr;</a>",
      },
      {
        q: "How do I share the iGUIDE tour with buyers?",
        a: "You receive a shareable URL the next morning after the scan. Paste it anywhere &mdash; MLS listing notes, email, text message, Instagram bio, Facebook post, or WhatsApp. Buyers click once and the full interactive tour opens in their browser. No account, no app download, no barriers to entry.",
      },
    ],
    relatedSlugs: [
      "rms-measurements-and-floor-plans-in-calgary",
      "real-estate-photography-in-calgary",
      "real-estate-videos-in-calgary",
    ],
    visual: {
      kind: "embed",
      src: servicesImages.iguideEmbedSrc,
      title: "iGUIDE 3D virtual tour of 20729 Main St SE, Calgary",
    },
  },

  "real-estate-aerial-drone-photography-in-calgary": {
    slug: "real-estate-aerial-drone-photography-in-calgary",
    seoTitle: "Aerial Drone Photography Calgary | Photos 4 Real Estate",
    seoDescription:
      "Aerial drone photography and videography for Calgary acreages, lakefront and large-lot listings. Captured the same visit as ground photos. Book your shoot.",
    ogAlt: "Aerial Drone Photography in Calgary by Photos 4 Real Estate",
    eyebrow: "Drone Photography & Videography",
    h1: "Aerial Drone Photography & Video in Calgary",
    lead: "Aerial drone photography and video gives Calgary buyers the full picture — lot lines, rooftops, neighbourhood context and proximity to amenities. Our pilots capture high-resolution stills and cinematic aerial footage in the same visit as your ground photography.",
    overviewHeading: "What is real estate drone photography?",
    overviewParagraphs: [
      "Drone photography uses a small unmanned aerial vehicle to capture stills and video from elevated angles ground cameras cannot reach. For Calgary real estate it's the difference-maker on acreages, lakefront homes, large lots and any property where the surroundings are part of the value.",
      "We coordinate aerial coverage in the same booking as your interior, exterior and video shoot — one visit, one team, one cohesive deliverable set.",
    ],
    includedHeading: "What's included with every drone shoot",
    features: [
      "Aerial photography & video",
      "Shows lot size, proximity & neighbourhood",
      "High-resolution stills",
      "Ideal for acreages, lakefront & large lots",
      "Weather-backup scheduling",
      "Completed same visit as ground photography",
    ],
    whoForHeading: "Who is this for?",
    whoForBody:
      "Calgary listing agents marketing acreages, lakefront, large city lots, infill developments and any property where context — adjacent green space, school proximity, view corridors — sells the home as much as the home itself.",
    faqs: [
      {
        q: "How much does drone photography cost for real estate in Calgary?",
        a: `Drone photography for real estate in Calgary costs $125 + GST as an add-on to any photography package. It is included as standard in the Skyline package (from $${startSkyline}) and the Social Boost package (from $${startSocial}). Drone video footage is an additional $125 &mdash; or included in Social Boost. All drone pricing is fixed, not square footage based. <a href="/prices">See the full pricing breakdown<span class="sr-only"> for Calgary drone photography packages</span> &rarr;</a>`,
      },
      {
        q: "Are your drone pilots licensed in Canada?",
        a: "Yes. All Photos 4 Real Estate drone operations are conducted by pilots holding a valid Transport Canada Basic Operations Remote Pilot Certificate. This certification authorizes us to operate drones up to 25 kg for commercial work in Canada. We carry full liability insurance covering all RPAS operations and comply with all Transport Canada regulations.",
      },
      {
        q: "Can you fly a drone anywhere in Calgary?",
        a: "Not everywhere. Calgary has controlled airspace zones &mdash; particularly near Calgary International Airport (YYC) and Springbank Airport (YBW) &mdash; where drone operations require prior authorization through Transport Canada's RPAS Portal. Most Calgary residential neighbourhoods are fully flyable without restrictions. We check airspace feasibility for every property address before your booking and handle any required authorization paperwork before shoot day.",
      },
      {
        q: "What is included in the drone photography package?",
        a: "Our drone photography package includes 5 to 10 high-resolution aerial photos from multiple angles and altitudes &mdash; overhead, oblique, and neighbourhood context shots. All images are professionally colour graded and delivered as high-resolution JPEGs and web-optimized files the next morning, ready for MLS upload alongside your ground photography.",
      },
      {
        q: "What happens if the weather is bad on shoot day?",
        a: "Drone operations require suitable weather &mdash; adequate visibility, safe wind speeds, and no precipitation. If conditions are unsafe on the day of your booking, we reschedule the drone portion at no charge. Ground photography and iGUIDE scanning can typically proceed as planned in the same visit, so you won't lose the whole appointment.",
      },
      {
        q: "Can drone footage be added to a real estate video or social media reel?",
        a: "Yes. Drone video footage can be integrated into a social media reel or cinematic walkthrough video for an additional $125. Drone video is included as standard in the Social Boost package, which combines photography, iGUIDE, RMS, drone photos, and a 45–60 second social media reel with aerial clips. <a href=\"/services/real-estate-videos-in-calgary\">Learn more about our video services<span class=\"sr-only\"> in Calgary</span> &rarr;</a>",
      },
      {
        q: "Does every property benefit from drone photography?",
        a: "Not necessarily. Drone photography adds the most value to properties where location, lot size, or surroundings are key selling features &mdash; lakefront homes, acreages, corner lots, properties with mountain or skyline views, luxury estates, and commercial properties. For a standard detached home in a typical subdivision, ground photography may be fully sufficient. If you're unsure, call us and we'll give you an honest recommendation based on your specific property.",
      },
    ],
    relatedSlugs: [
      "real-estate-photography-in-calgary",
      "real-estate-videos-in-calgary",
      "twilight-photography-for-real-estate-in-calgary",
    ],
    visual: {
      kind: "image",
      src: servicesImages.droneMain,
      alt: "Aerial drone view of downtown Calgary by Photos 4 Real Estate",
    },
  },

  "virtual-staging": {
    slug: "virtual-staging",
    seoTitle: "Virtual Staging for Calgary Real Estate | Photos 4 Real Estate",
    seoDescription:
      "Photo-realistic virtual staging for vacant Calgary listings — multiple style options, virtual decluttering and disclosure-compliant before/after files.",
    ogAlt: "Virtual Staging for Calgary Real Estate by Photos 4 Real Estate",
    eyebrow: "Virtual Staging",
    h1: "Virtual Staging for Calgary Listings",
    lead: "Photo-realistic virtual staging helps Calgary buyers picture themselves living in a vacant home — at a fraction of the cost of physical staging. Choose from modern, traditional, Scandinavian and other styles, and receive both staged and original images for full disclosure.",
    overviewHeading: "What is virtual staging?",
    overviewParagraphs: [
      "Virtual staging is the process of digitally adding photo-realistic furniture, art and decor to photographs of empty rooms. The result looks like a professionally staged home for a small fraction of the cost — and with no logistics, no rentals and no scheduling around movers.",
      "Beyond standard staging we also offer virtual decluttering (remove existing furniture from a lived-in photo), grass greening for tired spring lawns and renovation previews that visualize new flooring, paint or cabinetry on existing spaces.",
    ],
    includedHeading: "What's included with virtual staging",
    features: [
      "Photo-realistic furniture",
      "Multiple style options",
      "Virtual decluttering",
      "Grass greening",
      "Renovation previews",
      "Disclosure-compliant before/after files",
    ],
    whoForHeading: "Who is this for?",
    whoForBody:
      "Calgary listing agents and sellers with vacant properties, builders and investors marketing flips before furniture is in place, and anyone who wants to show buyers the lifestyle potential of a space without the cost of physical staging.",
    faqs: [
      {
        q: "What is virtual staging in real estate?",
        a: "Virtual staging is a digital post-processing service where professional designers use software to add photorealistic furniture, decor, lighting, and accessories to photos of vacant or unfurnished rooms. The result is a furnished-looking room photo that helps buyers visualize how the space would look and feel when lived in &mdash; without the cost or logistics of physical staging.",
      },
      {
        q: "How much does virtual staging cost in Calgary?",
        a: "Virtual staging in Calgary starts at $35 per photo. Package pricing is available: 3 photos for $100, 6 photos for $200, and 10 photos for $300 &mdash; all before GST.",
      },
      {
        q: "How long does virtual staging take?",
        a: "Standard virtual staging is delivered within 24 to 48 hours after your photos are captured and your room/style selections are confirmed.",
      },
      {
        q: "Can I request changes after the staging is delivered?",
        a: "Yes. Revisions and re-style requests are available for $25 per photo. We recommend reviewing the staged photos carefully before requesting changes &mdash; providing a clear brief and reference images upfront minimizes the need for revisions. Revisions are typically delivered within 24 hours of your request.",
      },
      {
        q: "Do I need to disclose virtual staging to buyers?",
        a: "Yes. RECA requires that Calgary realtors disclose when listing photos have been digitally altered or virtually staged. Best practice is to label virtually staged photos clearly in the listing and provide the original unstaged photos alongside the staged versions. Photos 4 Real Estate delivers both the staged and original versions with every order.",
      },
      {
        q: "What design styles are available for virtual staging?",
        a: "We offer multiple design styles including Modern, Scandinavian, Traditional, Transitional, Farmhouse, and Luxury. You can specify your preferred style when selecting the rooms to stage, or leave it to our designers to choose the best fit for the property and target buyer.",
      },
      {
        q: "Which rooms should be virtually staged?",
        a: "For most listings, the best rooms to stage are the living room, primary bedroom, and kitchen or dining area &mdash; the spaces that most strongly influence a buyer's first impression. If you're unsure, we can recommend the best images to stage after the photo shoot.",
      },
      {
        q: "Do you deliver both the staged and original photos?",
        a: "Yes. Every virtual staging order includes both the virtually staged images and the original unstaged versions. This helps with RECA-compliant disclosure and gives you flexibility in how you market the property.",
      },
    ],
    relatedSlugs: [
      "real-estate-photography-in-calgary",
      "twilight-photography-for-real-estate-in-calgary",
      "marketing-kit-for-realtors",
    ],
    visual: {
      kind: "before-after",
      beforeSrc: servicesImages.stagingBefore,
      afterSrc: servicesImages.stagingAfter,
      beforeAlt: "Empty Calgary bedroom before virtual staging",
      afterAlt: "Calgary bedroom after virtual staging by Photos 4 Real Estate",
    },
  },

  "twilight-photography-for-real-estate-in-calgary": {
    slug: "twilight-photography-for-real-estate-in-calgary",
    seoTitle: "Twilight Photography Calgary | Photos 4 Real Estate",
    seoDescription:
      "Twilight exterior photography for Calgary real estate listings — warm interior lights, dramatic skies and the strongest hero image on MLS. Book today.",
    ogAlt: "Twilight Real Estate Photography in Calgary by Photos 4 Real Estate",
    eyebrow: "Twilight Photography",
    h1: "Twilight Photography for Calgary Real Estate",
    lead: "Twilight exterior photography captures the home at its most inviting moment — warm interior lights, a saturated sky and rich evening colour. Statistically the strongest-performing hero image on MLS and social thumbnails for Calgary listings.",
    overviewHeading: "What is twilight real estate photography?",
    overviewParagraphs: [
      "Twilight photography is shot in the brief window of golden and blue hour around sunset, when the sky is still saturated but the home's interior and landscape lighting read warm and intentional. The result is a magazine-grade hero image that visibly outperforms a midday exterior on MLS click-through.",
      "On a Calgary twilight shoot we time the visit precisely to local sunset, switch on every interior and exterior light and capture multiple bracketed exposures that we composite into a single, balanced final image.",
    ],
    includedHeading: "What's included with every twilight shoot",
    features: [
      "Golden-hour timing",
      "Warm interior lighting setup",
      "Sky enhancement",
      "Dramatic exterior compositions",
      "MLS hero image",
      "Social-ready edits",
    ],
    whoForHeading: "Who is this for?",
    whoForBody:
      "Calgary listing agents launching higher-end or design-forward properties, sellers in well-landscaped neighbourhoods, and any listing where the exterior, lighting design or view deserves to lead the marketing.",
    faqs: [
      {
        q: "What is twilight photography in real estate?",
        a: "Twilight photography is a specialty real estate exterior photography style captured during the blue hour &mdash; the 15&ndash;30 minute window just after sunset when the sky takes on deep blue tones and interior lights begin to glow warmly through windows. The contrast between warm interior light and the cool evening sky creates dramatic images that standard daytime photography cannot replicate. It is widely considered the most visually compelling category of real estate exterior photography.",
      },
      {
        q: "How much does twilight photography cost in Calgary?",
        a: "Twilight photography is available as a $125 + GST add-on to any photography package. It must be added to a same-visit photography booking &mdash; our photographer completes all interior and daylight exterior photography first, then stays on-site through sunset. <a href=\"/prices\">See full pricing &rarr;</a>",
      },
      {
        q: "Does twilight photography have to be done at the same time as regular photography?",
        a: "Yes. Twilight photography must be part of the same property visit as your ground photography booking. Our photographer schedules the appointment to arrive in the afternoon, complete all interior and daylight exterior photography, and then wait on-site through sunset to capture the twilight shots. Twilight cannot be booked as a standalone visit without photography, as it requires our team to be present from the afternoon through dusk.",
      },
      {
        q: "What time of year is best for twilight photography in Calgary?",
        a: "Twilight photography can be done year-round in Calgary, with great results in every season. In summer, the blue hour falls between 9&ndash;10 PM, so bookings are scheduled accordingly. In winter, sunset is between 4:30&ndash;5:30 PM, making twilight shoots easy to complete within regular business hours. Fall and spring often produce the most atmospheric sky colour, but winter can be spectacular with snow providing reflective foreground light.",
      },
      {
        q: "What should I do to prepare for a twilight shoot?",
        a: "Turn on every interior light in the house &mdash; every room, every closet. Turn on all exterior lights including landscape lighting, pathway lights, and pot lights. Remove all vehicles from the driveway. Open all front-facing blinds and curtains. Replace any burnt-out bulbs before the shoot. If the property has a fireplace visible from outside, light it &mdash; it adds extraordinary warmth to the shot. See our full preparation checklist above for the complete list.",
      },
      {
        q: "Can I get a virtual twilight instead of real twilight photography?",
        a: "Yes. If a real twilight shoot isn't practical for your timeline, we offer a virtual twilight option as part of our virtual staging service &mdash; a daytime exterior photo is digitally transformed to simulate a blue-hour sky and warm window glow. However, genuine twilight photography consistently produces more realistic and impactful results than digital simulation, and is always the preferred option when scheduling permits.",
      },
      {
        q: "Which Calgary properties benefit most from twilight photography?",
        a: "Twilight photography delivers the highest impact on luxury homes, properties with strong architectural features, homes with significant exterior lighting, lakefront or backing-green-space properties, and any listing where curb appeal and visual differentiation are key selling points. It's also exceptionally effective as a social media hero image &mdash; twilight shots generate 2&ndash;3&times; more engagement than standard exterior photos on Instagram and Facebook.",
      },
    ],
    relatedSlugs: [
      "real-estate-photography-in-calgary",
      "real-estate-aerial-drone-photography-in-calgary",
      "real-estate-videos-in-calgary",
    ],
    visual: {
      kind: "image",
      src: servicesImages.twilight,
      alt: "Calgary home photographed at twilight with warm interior lights",
    },
  },

  "marketing-kit-for-realtors": {
    slug: "marketing-kit-for-realtors",
    seoTitle: "Marketing Kit for Calgary Realtors | Photos 4 Real Estate",
    seoDescription:
      "Free marketing kit for Calgary realtors with every shoot — 9 reels, 2 slideshows, 3 flyers, and 6 branded property websites. Book your listing shoot today.",
    ogAlt: "Marketing Kit for Calgary Realtors by Photos 4 Real Estate",
    eyebrow: "Marketing Kit",
    h1: "Marketing Kit for Calgary Realtors",
    lead: "Every Photos 4 Real Estate booking includes a complete marketing kit no other Calgary provider offers as standard — 9 social reels, 2 slideshow videos, 3 property flyers and 6 branded single-property websites. The kit is generated once we have the required listing information, and in most cases it is delivered the next day.",
    overviewHeading: "What is included in the Marketing Kit?",
    overviewParagraphs: [
      "The Marketing Kit is a bundle of done-for-you marketing assets we generate from every photography or video booking — at no extra cost. Once we have the required listing information, we prepare everything you need to market the listing across MLS, social, email and print without opening a design tool.",
      "Because the kit is built from the actual listing details, we need the property information first — typically the RMS size, asking price, year built, property description and other key remarks. In most cases, once that information is available, the kit is delivered the next day.",
    ],
    includedHeading: "What you receive with every shoot",
    features: [
      "9 social media reels",
      "6 branded property websites",
      "3 print-ready property flyers",
      "2 animated photo slideshows",
      "Branded with your contact info",
      "Free with every package",
    ],
    whoForHeading: "Who is this for?",
    whoForBody:
      "Calgary listing agents who want to market every listing across MLS, social and print without juggling extra vendors or design subscriptions, and brokerages that want a consistent agent-branded marketing standard on every property.",
    faqs: [
      {
        q: "What is included in the Photos 4 Real Estate marketing kit?",
        a: "Every Photos 4 Real Estate package includes a free marketing kit consisting of 9 social media video reels, 6 branded property websites, 3 print-ready PDF property flyers, and 2 professional slideshows. The kit is generated once we have the required listing information for the property, and in most cases it is delivered the next day.",
      },
      {
        q: "Is the marketing kit really free with every package?",
        a: "Yes. The complete marketing kit — 9 reels, 6 property websites, 3 flyers, and 2 slideshows — is included at no extra cost with every Essential, Skyline, and Social Boost photography package. There is no upgrade required and no additional fee.",
      },
      {
        q: "What are the 9 social media reels?",
        a: "The 9 social media reels are short-form vertical video clips (9:16 format) automatically generated from your listing photos, ready to post directly on Instagram Reels, Facebook Reels, and TikTok. Each reel is a different cut or style, giving you variety for your social media posting schedule. These are separate from the full 45–60 second social media reel available in the Social Boost package.",
      },
      {
        q: "How do I access my property websites?",
        a: "Your six property website links are included when the marketing kit is delivered. Each link opens a mobile-responsive property website showcasing your listing photos and listing details. You can share these links directly — no login or account required for buyers to view them.",
      },
      {
        q: "What listing information do you need before the marketing kit can be generated?",
        a: "We need the core listing information before we can generate the marketing kit assets. In most cases that includes the property RMS size, asking price, year built, property description, key features, and any other details you want displayed on the flyers or property websites. Once we have that information, we can generate the full kit.",
      },
      {
        q: "Can I customize the flyers and websites?",
        a: "Yes. Our free online tools — reel generator, slideshow generator, flyer generator, and property website generator — allow you to customize and regenerate your marketing materials using your listing photos at any time. <a href=\"/free-tools\">Open the free tools<span class=\"sr-only\"> for marketing kit customization</span> &rarr;</a>",
      },
      {
        q: "When is the marketing kit delivered?",
        a: "In most cases, the marketing kit is delivered the next day once we have all required listing information for the property. If the listing details are still being finalized after the shoot, the marketing kit will follow as soon as that information is provided. You receive a single download link and access to your property portal containing your photos, floor plans, tour link, and all available marketing kit items in one place.",
      },
    ],
    relatedSlugs: [
      "real-estate-photography-in-calgary",
      "real-estate-videos-in-calgary",
      "iguide-virtual-tours-in-calgary",
    ],
    visual: {
      kind: "image",
      src: servicesImages.marketingKit,
      alt: "Preview of a complete marketing kit for Calgary realtors including social reels, websites, slideshows, and flyers",
    },
  },

  "hotel-photography": {
    slug: "hotel-photography",
    seoTitle: "Hotel Photography Calgary | Photos 4 Real Estate",
    seoDescription:
      "Professional hotel photography in Calgary and Alberta for rooms, amenities, lobbies, exterior images, and drone aerials. Packages from $1,995.",
    ogAlt: "Hotel photography in Calgary and Alberta by Photos 4 Real Estate",
    eyebrow: "Hotel Photography",
    h1: "Hotel Photography in Calgary",
    lead: "Professional hotel and hospitality photography for every space that helps guests choose your property — from rooms and lobbies to amenities, exterior images, and drone aerials.",
    overviewHeading: "What is hotel photography?",
    overviewParagraphs: [
      "Hotel photography is the professional planning, capture, and editing of hospitality images for OTA listings, brand websites, Google Hotels, social media, and print campaigns.",
      "Photos 4 Real Estate photographs the complete guest journey with consistent editing, commercial usage, and clear preparation guidance for your operations team.",
    ],
    includedHeading: "What's included with hotel photography",
    features: [
      "Guest rooms, suites, lobbies & amenities",
      "Exterior photography and drone aerials",
      "OTA-ready high-resolution JPEG delivery",
      "Hotel preparation checklist for your team",
      "Commercial usage licence included",
      "Packages starting at $1,995",
    ],
    whoForHeading: "Who is this for?",
    whoForBody:
      "Hotels, resorts, inns, short-term rental operators, and hospitality marketing teams across Calgary and Alberta that need polished, booking-ready images for every guest-facing channel.",
    faqs: [
      {
        q: "How much does hotel photography cost in Calgary?",
        a: "Hotel photography packages start at $1,995 CAD and include room, amenity, exterior, and drone coverage with professionally edited, OTA-ready files.",
      },
      {
        q: "Is drone photography included?",
        a: "Yes. Drone aerial photography is included in our hotel photography packages, with flight planning, weather coordination, and Transport Canada requirements handled by our team.",
      },
    ],
    relatedSlugs: [
      "real-estate-aerial-drone-photography-in-calgary",
      "real-estate-videos-in-calgary",
      "marketing-kit-for-realtors",
    ],
    visual: {
      kind: "image",
      src: servicesImages.hotelPhotography,
      alt: "Drone photo of Sandman hotel in Calgary by Photos 4 Real Estate",
    },
  },



};

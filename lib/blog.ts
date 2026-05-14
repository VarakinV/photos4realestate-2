export type BlogCategory = {
  slug: string;
  name: string;
  description: string;
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  updated: string;
  readingTime: string;
  categorySlugs: string[];
  image: { src: string; alt: string };
  seoTitle: string;
  seoDescription: string;
  sections: BlogSection[];
  takeaways: string[];
  relatedServices: Array<{ label: string; href: string }>;
  faqs?: Array<{ question: string; answer: string }>;
};

export const blogCategories: BlogCategory[] = [
  { slug: "real-estate-photography-tips", name: "Real Estate Photography Tips", description: "Practical preparation and image strategy for Calgary listings." },
  { slug: "twilight-photography", name: "Twilight Photography", description: "When dusk images help listings stand out online." },
  { slug: "virtual-staging", name: "Virtual Staging", description: "How staged rooms help buyers understand vacant properties." },
  { slug: "drone-photography", name: "Drone Photography", description: "Aerial media, exterior context, and listing use cases." },
  { slug: "videography", name: "Videography", description: "Listing videos, reels, and short-form property marketing." },
  { slug: "rms-and-iguide", name: "RMS and iGUIDE", description: "Floor plans, measurements, and 3D virtual tours for Alberta listings." },
  { slug: "marketing", name: "Marketing", description: "Listing launch assets for MLS, websites, print, and email." },
  { slug: "tips-and-tricks", name: "Tips & Tricks", description: "Small details that make a listing easier to photograph and market." },
  { slug: "marketing-and-social", name: "Marketing & Social", description: "Social media ideas for Calgary realtors and property marketers." },
];

const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const blogPosts: BlogPost[] = [
  {
    slug: "prepare-home-for-real-estate-photos-calgary",
    title: "How to Prepare a Calgary Home for Real Estate Photos",
    excerpt: "A practical room-by-room prep guide to help sellers and agents get brighter, cleaner, MLS-ready real estate photos.",
    date: "2026-05-13",
    updated: "2026-05-13",
    readingTime: "5 min read",
    categorySlugs: ["real-estate-photography-tips", "tips-and-tricks"],
    image: { src: unsplash("photo-1560518883-ce09059eeffa"), alt: "Bright Calgary living room prepared for real estate photography" },
    seoTitle: "Prepare for Real Estate Photos Calgary | Photos 4 Real Estate",
    seoDescription: "Prepare a Calgary home for real estate photos with simple room-by-room tips for cleaner MLS-ready images. Book professional listing media today.",
    takeaways: ["Declutter surfaces before photo day.", "Turn on lights, open blinds, and remove vehicles.", "Prepare kitchens, bathrooms, bedrooms, and exterior spaces first."],
    relatedServices: [{ label: "Calgary real estate photography services", href: "/services/real-estate-photography-in-calgary" }],
    sections: [
      { heading: "Why preparation matters", paragraphs: ["Real estate photography works best when the home is clean, bright, and easy for buyers to understand. Small preparation steps can make rooms look larger and help the photographer focus on the property instead of distractions.", "Photos 4 Real Estate recommends preparing the home at least a few hours before the shoot so lights, blinds, counters, closets, and exterior areas are ready when the appointment begins."] },
      { heading: "Start with the highest-impact areas", paragraphs: ["Kitchens, living rooms, primary bedrooms, bathrooms, and the front exterior usually influence first impressions the most. These spaces should be cleaned, decluttered, and staged simply before the camera arrives."], bullets: ["Clear counters, tables, and bathroom vanities.", "Make beds and straighten pillows.", "Hide garbage bins, laundry, pet items, and personal paperwork.", "Move cars away from the driveway and front curb."] },
      { heading: "Lighting and final details", paragraphs: ["Turn on all interior lights, replace burnt bulbs, and open blinds where privacy allows. The goal is not to make every room artificially bright; it is to create an inviting, consistent look that supports professional editing.", "If the weather is cloudy, do not worry. Exterior sky replacement is part of many professional workflows, but clean windows, tidy landscaping, and clear entry areas still make a visible difference."] },
    ],
  },
  {
    slug: "twilight-real-estate-photography-calgary-listings",
    title: "When Should You Use Twilight Photography for a Listing?",
    excerpt: "Twilight photos can help luxury homes, strong exteriors, pools, views, and outdoor living spaces stand out in MLS and social feeds.",
    date: "2026-05-10",
    updated: "2026-05-10",
    readingTime: "4 min read",
    categorySlugs: ["twilight-photography", "real-estate-photography-tips"],
    image: { src: unsplash("photo-1512917774080-9991f1c4c750"), alt: "Modern home exterior photographed at twilight for a real estate listing" },
    seoTitle: "Twilight Photography Calgary Listings | Photos 4 Real Estate",
    seoDescription: "Learn when twilight real estate photography helps Calgary listings stand out with dramatic exterior images, warm lighting, and stronger curb appeal.",
    takeaways: ["Twilight photos are best for strong exterior features.", "They work well for luxury, view, and outdoor living properties.", "Dusk timing requires careful scheduling and preparation."],
    relatedServices: [{ label: "Twilight photography for Calgary real estate", href: "/services/twilight-photography-for-real-estate-in-calgary" }],
    sections: [
      { heading: "The best use cases", paragraphs: ["Twilight photography is most valuable when the property has something worth showing after sunset: architectural lighting, large windows, landscaped yards, patios, skyline views, or a memorable exterior elevation.", "For Calgary listings, twilight images can be especially effective when homes compete in higher price brackets or when the exterior is a major selling point." ] },
      { heading: "When twilight may not be necessary", paragraphs: ["Not every listing needs dusk photos. If the exterior is simple, heavily shaded, or surrounded by visual clutter, daylight photography may be more practical and cost-effective.", "A good rule is to ask whether the twilight image would become one of the first few photos buyers see online. If the answer is yes, it is worth considering." ] },
      { heading: "How to prepare", paragraphs: ["Turn on all exterior and interior lights before the photographer arrives, open blinds, remove vehicles, and tidy outdoor furniture. Twilight windows are short, so preparation before sunset is important." ] },
    ],
  },
  {
    slug: "virtual-staging-vacant-homes-calgary",
    title: "Virtual Staging for Vacant Calgary Homes: What to Know",
    excerpt: "Virtual staging helps buyers understand scale, layout, and room purpose without the cost and logistics of physical furniture rental.",
    date: "2026-05-06",
    updated: "2026-05-06",
    readingTime: "5 min read",
    categorySlugs: ["virtual-staging", "marketing"],
    image: { src: unsplash("photo-1600210491892-03d54c0aaf87"), alt: "Vacant living room suitable for virtual staging in a Calgary listing" },
    seoTitle: "Virtual Staging Calgary Homes | Photos 4 Real Estate",
    seoDescription: "See how virtual staging helps vacant Calgary homes feel furnished, easier to understand, and more marketable online. View staging options today.",
    takeaways: ["Virtual staging clarifies room purpose.", "It works best with clean, empty rooms and realistic furniture.", "Listings should disclose when images are virtually staged."],
    relatedServices: [{ label: "Virtual staging services for Calgary listings", href: "/services/virtual-staging" }],
    sections: [
      { heading: "Why vacant rooms are harder to read", paragraphs: ["Empty rooms often look smaller online because buyers have no furniture reference for scale. Virtual staging adds context so viewers can understand whether a room works as a bedroom, office, dining area, or living space." ] },
      { heading: "What makes virtual staging effective", paragraphs: ["The best virtual staging looks realistic, matches the property style, and avoids overcrowding the room. It should support the listing, not distract from it."], bullets: ["Use consistent furniture style across rooms.", "Keep pathways and windows visible.", "Avoid exaggerated decor or unrealistic proportions.", "Use MLS-compliant disclosure where required."] },
      { heading: "When to choose it", paragraphs: ["Virtual staging is a strong option for vacant condos, new builds, estate sales, investment properties, and homes where physical staging is not practical. It is also useful when only a few key rooms need visual context." ] },
    ],
  },
  {
    slug: "drone-photography-real-estate-calgary",
    title: "Drone Photography for Calgary Real Estate Listings",
    excerpt: "Aerial photos can show lot position, nearby parks, views, acreage context, and exterior features that ground-level photos miss.",
    date: "2026-05-02",
    updated: "2026-05-02",
    readingTime: "4 min read",
    categorySlugs: ["drone-photography", "real-estate-photography-tips"],
    image: { src: unsplash("photo-1500530855697-b586d89ba3ee"), alt: "Aerial drone view of a residential property and surrounding neighbourhood" },
    seoTitle: "Drone Photography Calgary Real Estate | Photos 4 Real Estate",
    seoDescription: "Drone photography for Calgary real estate helps show lots, views, amenities, acreages, and neighbourhood context. Book aerial media today.",
    takeaways: ["Drone media is best when location matters.", "Aerial images can explain lots, views, and nearby amenities.", "Weather and airspace can affect scheduling."],
    relatedServices: [{ label: "Calgary real estate drone photography", href: "/services/real-estate-aerial-drone-photography-in-calgary" }],
    sections: [
      { heading: "What drone photos add", paragraphs: ["Drone photography helps buyers understand the property in context. It can show how a home sits on the lot, where nearby green spaces are, how close amenities are, and what views are available from the property." ] },
      { heading: "Best property types for aerial media", paragraphs: ["Aerial coverage is useful for acreages, corner lots, backing-on-park homes, luxury properties, golf course listings, lake communities, and homes with exterior upgrades."], bullets: ["Large yards or unique lot shapes.", "Mountain, city, pond, or park views.", "Nearby pathways, schools, or amenities.", "Detached garages, outbuildings, or exterior improvements."] },
      { heading: "Scheduling considerations", paragraphs: ["Drone flights depend on wind, precipitation, visibility, and airspace rules. If aerial images are important to the listing, build a little flexibility into the schedule so the final media is safe and polished." ] },
    ],
  },
  {
    slug: "rms-measurements-iguide-virtual-tours-alberta-listings",
    title: "RMS Measurements and iGUIDE Tours for Alberta Listings",
    excerpt: "Learn how RMS measurements, floor plans, and iGUIDE 3D tours support listing accuracy and give buyers more confidence online.",
    date: "2026-04-29",
    updated: "2026-04-29",
    readingTime: "6 min read",
    categorySlugs: ["rms-and-iguide", "marketing"],
    image: { src: unsplash("photo-1554224155-6726b3ff858f"), alt: "Floor plan and measurement documents used for Alberta real estate listings" },
    seoTitle: "RMS Measurements and iGUIDE Calgary | Photos 4 Real Estate",
    seoDescription: "Understand RMS measurements, floor plans, and iGUIDE 3D tours for Alberta listings and how they support buyer confidence. Book online today.",
    takeaways: ["RMS supports consistent Alberta listing measurement standards.", "Floor plans help buyers understand layout quickly.", "iGUIDE tours add interactive context to online listings."],
    relatedServices: [
      { label: "RMS measurements and floor plans in Calgary", href: "/services/rms-measurements-and-floor-plans-in-calgary" },
      { label: "iGUIDE 3D virtual tours in Calgary", href: "/services/iguide-virtual-tours-in-calgary" },
    ],
    sections: [
      { heading: "Why measurements and floor plans matter", paragraphs: ["Photos create interest, but floor plans help buyers understand the structure of the home. Measurements and room layouts reduce uncertainty and make it easier to compare properties online." ] },
      { heading: "What iGUIDE adds", paragraphs: ["An iGUIDE tour combines interactive 3D navigation, visual room-to-room context, and floor plan information. It gives buyers a better sense of flow before a showing and helps out-of-town buyers evaluate a home more confidently." ] },
      { heading: "How agents can use the assets", paragraphs: ["Floor plans, 3D tours, and measurement documents can be used across MLS, feature sheets, listing pages, email campaigns, and social posts. They are especially helpful for properties with unusual layouts, developed basements, additions, or larger square footage." ] },
    ],
  },
  {
    slug: "real-estate-video-reels-calgary-realtors",
    title: "Real Estate Video and Reels Ideas for Calgary Realtors",
    excerpt: "Use listing videos, short reels, room highlights, and neighbourhood clips to promote properties across MLS, Instagram, and email.",
    date: "2026-04-24",
    updated: "2026-04-24",
    readingTime: "5 min read",
    categorySlugs: ["videography", "marketing-and-social", "marketing"],
    image: { src: unsplash("photo-1497366754035-f200968a6e72"), alt: "Real estate video editing workspace for Calgary realtor listing reels" },
    seoTitle: "Real Estate Video Calgary Realtor Reels | Photos 4 Real Estate",
    seoDescription: "Real estate video and reels help Calgary realtors market listings with walkthroughs, social clips, and stronger launch campaigns. Book media today.",
    takeaways: ["Video helps buyers understand flow and atmosphere.", "Short clips perform well on social media.", "Plan video around the strongest listing features."],
    relatedServices: [
      { label: "Calgary real estate videography services", href: "/services/real-estate-videos-in-calgary" },
      { label: "Marketing kit for Calgary realtors", href: "/services/marketing-kit-for-realtors" },
    ],
    sections: [
      { heading: "What video does differently", paragraphs: ["Photos show key spaces clearly, while video helps buyers feel the movement and atmosphere of a home. A short walkthrough can connect the kitchen, living room, bedrooms, basement, and exterior in a way still images cannot." ] },
      { heading: "Simple reel ideas", paragraphs: ["Short-form videos do not need to show every room. Often the best reels focus on one strong hook and a few polished clips."], bullets: ["Front exterior to main living space.", "Kitchen, pantry, dining, and patio flow.", "Primary suite and ensuite reveal.", "Neighbourhood amenity or nearby park intro."] },
      { heading: "Use video beyond Instagram", paragraphs: ["Listing videos and reels can support MLS links, YouTube, agent websites, email newsletters, QR codes, property pages, and paid social posts. The strongest campaigns reuse the same shoot assets across multiple channels." ] },
    ],
  },
  {
    slug: "social-media-marketing-for-real-estate-listings-calgary",
    title: "Social Media Marketing for Calgary Real Estate Listings",
    excerpt: "How Calgary realtors can turn professional listing photos, reels, property websites, flyers, and slideshows into stronger social media campaigns.",
    date: "2025-07-29",
    updated: "2026-05-14",
    readingTime: "7 min read",
    categorySlugs: ["marketing", "marketing-and-social", "tips-and-tricks"],
    image: { src: "https://cdn.photos4realestate.ca/p4re-static-media/blog/2025-07-29/Social-Media-Real-Estate-Marketing.webp", alt: "Social media marketing assets for a Calgary real estate listing by Photos 4 Real Estate" },
    seoTitle: "Social Media for Calgary Realtors | Photos 4 Real Estate",
    seoDescription: "Learn how Calgary realtors can use photos, reels, listing websites, flyers, and slideshows to market properties on social media. Book online today.",
    takeaways: ["Social media works best when listing assets are ready before launch day.", "Photos 4 Real Estate includes a marketing kit with every Essential, Skyline, and Social Boost package.", "Use reels, listing websites, flyers, and slideshows together instead of relying on one post."],
    relatedServices: [
      { label: "Marketing kit for Calgary realtors", href: "/services/marketing-kit-for-realtors" },
      { label: "Calgary real estate photography services", href: "/services/real-estate-photography-in-calgary" },
      { label: "Real estate videos and reels in Calgary", href: "/services/real-estate-videos-in-calgary" },
    ],
    sections: [
      { heading: "Why social media matters for Calgary listings", paragraphs: ["A Calgary listing does not compete only on MLS. Buyers, neighbours, investors, relocation clients, and future sellers often discover properties through Instagram, Facebook, TikTok, YouTube Shorts, email shares, and agent websites before they ever book a showing.", "That means the quality of your social media content affects both the property campaign and your personal brand. Strong listing visuals make the home easier to notice, easier to share, and easier to remember in a crowded feed." ] },
      { heading: "Start with professional listing media", paragraphs: ["The best social media campaign starts before anything is posted. Professional real estate photography gives you the core visuals for MLS, Instagram carousels, Facebook posts, property websites, feature sheets, email campaigns, and paid ads.", "Photos 4 Real Estate delivers HDR-edited interior and exterior photos with blue-sky replacement, MLS-ready files, web-optimized versions, a usage licence for listing marketing, and next-day delivery on every Calgary shoot."], bullets: ["Use the strongest exterior, kitchen, living room, primary suite, and lifestyle images first.", "Keep captions focused on buyer benefits, not only room labels.", "Link every social post to a listing page, property website, or booking-friendly next step.", "Reuse the same media across MLS, web, print, email, and social instead of creating separate campaigns from scratch."] },
      { heading: "What Photos 4 Real Estate includes in the marketing kit", paragraphs: ["Every Essential, Skyline, and Social Boost package includes a complete marketing kit at no extra cost once the required listing information is provided. The kit is designed to help Calgary realtors publish quickly across social media, print, email, and the web."], bullets: ["9 social media reels generated from your listing photos and listing information.", "3 branded single-property websites with shareable links.", "3 print-ready PDF property flyers for open houses and email campaigns.", "2 animated photo slideshows for email, Facebook, presentations, and quick sharing.", "Marketing kit delivery is usually next day once the listing details are ready."] },
      { heading: "Use reels to create momentum", paragraphs: ["Short-form vertical video is one of the most useful formats for listing promotion because it gives agents multiple chances to introduce the property. A quick reel can highlight the exterior, kitchen, main living area, primary suite, backyard, view, or neighbourhood in a format built for mobile discovery.", "The 9 generated teaser reels in the marketing kit are ideal for frequent posting. For a more polished hero video, our real estate videography service can create cinematic walkthroughs and 60–90 second social media reels, with vertical and horizontal formats available for Instagram Reels, TikTok, Facebook, MLS, and YouTube." ] },
      { heading: "A simple listing launch plan", paragraphs: ["You do not need a complicated campaign to market a listing well. A simple launch plan with consistent assets and clear links will outperform a rushed one-off post."], bullets: ["Before launch: prepare the listing details, property description, price, RMS size, key features, and showing instructions.", "Launch day: post the strongest carousel, publish the property website link, and share a short reel with a clear call to action.", "Open house: use PDF flyers, story graphics, and a reminder post that points back to the listing website.", "After launch: rotate teaser reels, slideshows, room highlights, neighbourhood notes, and market updates while the listing is active.", "After the sale: publish a just-sold post to build social proof and keep your brand visible."] },
      { heading: "Tips for better real estate social media results", paragraphs: ["The goal is not to post more for the sake of posting. The goal is to make every listing easier to understand and easier to act on."], bullets: ["Post consistently while the listing is fresh, not only once when it goes live.", "Write captions that explain the lifestyle, location, layout, and buyer benefit.", "Tag the community or neighbourhood when appropriate.", "Use vertical video for reach and property websites for deeper viewing.", "Keep branding professional, but make sure the property remains the focus.", "Track which formats create clicks, saves, shares, and showing inquiries."] },
      { heading: "Ready to market smarter?", paragraphs: ["If you are a Calgary realtor who wants listing media that supports MLS, social media, open houses, email campaigns, and branded property marketing, Photos 4 Real Estate can help. Book your photography package online, send the listing details when they are ready, and we will deliver the media and marketing assets you need to launch with confidence."] },
    ],
    faqs: [
      { question: "What social media platforms should Calgary realtors focus on?", answer: "Instagram, Facebook, TikTok, and YouTube Shorts are strong options for listing awareness. Instagram Reels and Facebook Reels are especially useful for short property highlights, while YouTube and property websites work well for deeper viewing." },
      { question: "What is included in the Photos 4 Real Estate marketing kit?", answer: "The marketing kit includes 9 social media reels, 3 branded property websites, 3 print-ready PDF flyers, and 2 animated photo slideshows once the required listing information is provided." },
      { question: "Is the marketing kit an extra add-on?", answer: "No. The marketing kit is included at no extra cost with every Essential, Skyline, and Social Boost package from Photos 4 Real Estate." },
      { question: "How quickly do I receive listing marketing assets?", answer: "Edited real estate photos are delivered by the next morning after the shoot. Video is typically delivered within 24–48 hours, and the marketing kit is usually delivered the next day once the required listing information is ready." },
    ],
  },
];

export const recentBlogPosts = blogPosts.slice(0, 5);

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogCategory(slug: string) {
  return blogCategories.find((category) => category.slug === slug);
}

export function getPostsByCategory(slug: string) {
  return blogPosts.filter((post) => post.categorySlugs.includes(slug));
}

export function getPostCategories(post: BlogPost) {
  return post.categorySlugs
    .map((slug) => getBlogCategory(slug))
    .filter((category): category is BlogCategory => Boolean(category));
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en-CA", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "America/Edmonton",
  }).format(new Date(`${date}T12:00:00-06:00`));
}
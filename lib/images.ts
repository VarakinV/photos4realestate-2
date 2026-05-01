// Image URLs sourced from the photos4realestate.ca CDN.
// Unsplash is used only as a fallback for the Unsplash-based home hero collage.
const u = "https://images.unsplash.com";
const cdn = "https://photos4realestate.ca/wp-content/uploads";

export const homeImages = {
  heroLarge: "https://cdn.photos4realestate.ca/p4re-static-media/hero-section-images/28.jpg",
  heroTopLeft: "https://cdn.photos4realestate.ca/p4re-static-media/hero-section-images/04-04.jpg",
  heroBottomLeft: "https://cdn.photos4realestate.ca/p4re-static-media/hero-section-images/17.jpg",
  heroSmall: `${u}/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80`,

  servicePhoto: `${u}/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80`,
  industryAgents: "https://cdn.photos4realestate.ca/p4re-static-media/industries-section-images/kitchen-example-photos-4-real-estate.webp",
  industryHomeowners: "https://cdn.photos4realestate.ca/p4re-static-media/industries-section-images/Bedroom-Photos-4-Real-Estate.webp",
  industryStagers: "https://cdn.photos4realestate.ca/p4re-static-media/industries-section-images/office-Photos-4-Real-Estate.jpg",

  diffLiving: "https://cdn.photos4realestate.ca/p4re-static-media/home-page-images/17-mls%20(1).jpg",

  vsBefore: "https://cdn.photos4realestate.ca/p4re-static-media/before-after/Virtual-Staging-Living-Room-Before-02.webp",
  vsAfter: "https://cdn.photos4realestate.ca/p4re-static-media/before-after/Virtual-Staging-Living-Room-After-02.webp",

  drone: `${u}/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80`,
  twilight: `${u}/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80`,
} as const;


const cdnIguideServicePage = `${cdn}/2024/06`;

export const iguideTourImages = {
  onlineViewing: `${cdnIguideServicePage}/iGUIDE-Online-Viewing.webp`,
  standardFloorPlan: `${cdnIguideServicePage}/iGUIDE-Standard-Floor-Plan.webp`,
  premiumPlan: `${cdnIguideServicePage}/Floor-Plan.webp`,
  rmsMeasurements: `${cdnIguideServicePage}/RMS-Measurements.webp`,
  areasSpecialist: `${cdn}/2025/08/Drone-view-to-Downtown-Calgary-Photos-4-Real-Estate-1024x768.webp`,
  areasFloorPlan: `${cdnIguideServicePage}/iGUIDE-Standard-Floor-Plan.webp`,
  areasVirtualTour: `${cdnIguideServicePage}/iGUIDE-Online-Viewing.webp`,
} as const;

// Photography service page
export const photographyImages = {
  introMain: `${cdn}/2025/05/House-Exterior-Photo-by-Photos-4-Real-Estate-1024x682.webp`,
  introSecondary: `${cdn}/2025/05/Living-Room-with-a-Fireplace-Photos-4-Real-Estate.webp`,
  interior: `${cdn}/2025/05/Modern-Kitchen-Photos-4-Real-Estate.webp`,
  exterior: `${cdn}/2025/05/House-Exterior-Photo-by-Photos-4-Real-Estate-1024x682.webp`,
  skyBefore: `${cdn}/2023/07/pool-before-850.webp`,
  skyAfter: `${cdn}/2023/07/pool-after-850.webp`,
  twilight: `${cdn}/2025/05/Twilight-Photo-Home-in-Auburn-Bay-Photos-4-Real-Estate.webp`,
  prepLiving: `${cdn}/2025/05/Living-Room-with-a-Fireplace-Photos-4-Real-Estate.webp`,
  prepKitchen: `${cdn}/2025/05/Modern-Kitchen-Photos-4-Real-Estate.webp`,
  prepBedroom: `${cdn}/2025/05/Bedroom-Photos-4-Real-Estate.webp`,
  areaCalgary: `${cdn}/2025/08/Drone-view-to-Downtown-Calgary-Photos-4-Real-Estate-1024x768.webp`,
  areaMahogany: `${cdn}/2025/05/Drone-Photo-Mahogany-Photos-4-Real-Estate-1024x576.webp`,
  areaAcreage: `${cdn}/2025/05/House-Exterior-Photo-by-Photos-4-Real-Estate-1024x682.webp`,
} as const;

// Drone service page
export const droneImages = {
  introMain: `${cdn}/2025/08/Drone-view-to-Downtown-Calgary-Photos-4-Real-Estate-1024x768.webp`,
  introSecondary: `${cdn}/2025/05/Drone-Photo-Mahogany-Photos-4-Real-Estate-1024x576.webp`,
  introTertiary: `${cdn}/2025/08/Drone-Photo-property-close-to-Sundance-Lake-Calgary-1024x768.webp`,
  captureTopDown: `${cdn}/2025/08/Duplex-Drone-View-1024x768.jpg`,
  captureOblique: `${cdn}/2025/08/Drone-view-to-Downtown-Calgary-Photos-4-Real-Estate-1024x768.webp`,
  captureContext: `${cdn}/2025/05/Drone-Photo-Mahogany-Photos-4-Real-Estate-1024x576.webp`,
  captureVideo: `${cdn}/2025/08/Drone-Photo-property-close-to-Sundance-Lake-Calgary-1024x768.webp`,
  typeLakefront: `${cdn}/2025/05/Drone-Photo-Mahogany-Photos-4-Real-Estate-1024x576.webp`,
  typeLargeLot: `${cdn}/2025/05/House-Exterior-Photo-by-Photos-4-Real-Estate-1024x682.webp`,
  typeDowntown: `${cdn}/2025/08/Drone-view-to-Downtown-Calgary-Photos-4-Real-Estate-1024x768.webp`,
  typeCornerLot: `${cdn}/2025/08/Duplex-Drone-View-1024x768.jpg`,
  typeAcreageNearCalgary: `${cdn}/2025/08/Drone-Photo-property-close-to-Sundance-Lake-Calgary-1024x768.webp`,
  typeYMCA: `${cdn}/2023/06/office-2.jpg`,
  matterLake: `${cdn}/2025/05/Drone-Photo-Mahogany-Photos-4-Real-Estate-1024x576.webp`,
  matterBridgeland: `${cdn}/2025/08/Drone-view-to-Downtown-Calgary-Photos-4-Real-Estate-1024x768.webp`,
  matterBowRiver: `${cdn}/2025/08/Drone-Photo-property-close-to-Sundance-Lake-Calgary-1024x768.webp`,
} as const;

// Videography service page
export const videographyImages = {
  heroVideo: `${cdn}/2025/05/Calgary-Real-Estate-Video-Walkthrough.mp4`,
  reelsVideo: `${cdn}/2025/05/Calgary-Real-Estate-Social-Reel.mp4`,
  prepVideo: `${cdn}/2025/05/Calgary-Real-Estate-Prep-Video.mp4`,
} as const;

// Twilight service page
export const twilightImages = {
  real1: `${cdn}/2025/05/Twilight-Photo-Home-in-Auburn-Bay-Photos-4-Real-Estate.webp`,
  real3: `${cdn}/2025/05/Twilight-Photo-Home-in-Auburn-Bay-Photos-4-Real-Estate.webp`,
  real4: `${cdn}/2025/05/Twilight-Photo-Home-in-Auburn-Bay-Photos-4-Real-Estate.webp`,
  real5: `${cdn}/2025/05/Twilight-Photo-Home-in-Auburn-Bay-Photos-4-Real-Estate.webp`,
  real6: `${cdn}/2025/05/Twilight-Photo-Home-in-Auburn-Bay-Photos-4-Real-Estate.webp`,
  virtual1: `${cdn}/2025/05/House-Exterior-Photo-by-Photos-4-Real-Estate-1024x682.webp`,
  virtual2: `${cdn}/2025/05/House-Exterior-Photo-by-Photos-4-Real-Estate-1024x682.webp`,
} as const;

// RMS measurements service page
export const rmsImages = {
  standardPlanIntro: `${cdnIguideServicePage}/iGUIDE-Standard-Floor-Plan.webp`,
  rmsMeasurements: `${cdnIguideServicePage}/RMS-Measurements.webp`,
  standardPlanCard: `${cdnIguideServicePage}/iGUIDE-Standard-Floor-Plan.webp`,
  premiumPlanCard: `${cdnIguideServicePage}/Floor-Plan.webp`,
  iguideScanning: `${cdn}/2025/08/Drone-view-to-Downtown-Calgary-Photos-4-Real-Estate-1024x768.webp`,
  areaBathroom: `${cdn}/2025/05/Bedroom-Photos-4-Real-Estate.webp`,
  areaBedroom: `${cdn}/2025/05/Bedroom-Photos-4-Real-Estate.webp`,
  areaKitchen: `${cdn}/2025/05/Modern-Kitchen-Photos-4-Real-Estate.webp`,
} as const;

// Virtual staging service page
export const virtualStagingImages = {
  livingAfter: `${cdn}/2024/05/virtually-stageg-living-room-1-850.webp`,
  livingAfterAlt: `${cdn}/2023/07/virtual-staging-after-image-850.webp`,
  bedroomAfter: `${cdn}/2024/05/virtually-stageg-bedroom-1-850.webp`,
  kitchenAfter: `${cdn}/2024/05/virtually-stageg-kitchen-1-850.webp`,
} as const;

// Services index page (cards on /services and the per-slug content)
export const servicesImages = {
  photography: `${cdn}/2025/05/Living-Room-with-a-Fireplace-Photos-4-Real-Estate.webp`,
  videographyVideo: `${cdn}/2025/05/Calgary-Real-Estate-Video-Walkthrough.mp4`,
  rms: `${cdnIguideServicePage}/iGUIDE-Standard-Floor-Plan.webp`,
  iguideEmbedSrc:
    "https://youriguide.com/embed/20729_main_st_se_calgary_ab?unbranded=1&bgcolor=FFFFFF",
  droneMain: `${cdn}/2025/08/Drone-view-to-Downtown-Calgary-Photos-4-Real-Estate-1024x768.webp`,
  droneSecondary: `${cdn}/2025/05/Drone-Photo-Mahogany-Photos-4-Real-Estate-1024x576.webp`,
  droneTertiary: `${cdn}/2025/08/Drone-Photo-property-close-to-Sundance-Lake-Calgary-1024x768.webp`,
  stagingBefore: `${cdn}/2023/07/virtual-staging-before-image-850.webp`,
  stagingAfter: `${cdn}/2023/07/virtual-staging-after-image-850.webp`,
  twilight: `${cdn}/2025/05/Twilight-Photo-Home-in-Auburn-Bay-Photos-4-Real-Estate.webp`,
  marketingKit: `${cdn}/2025/05/House-Exterior-Photo-by-Photos-4-Real-Estate-1024x682.webp`,
} as const;
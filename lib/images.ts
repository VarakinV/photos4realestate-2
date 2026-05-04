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

  drone:
    "https://cdn.photos4realestate.ca/p4re-static-media/home-page-images/Drone-view-to-Downtown-Calgary-Photos-4-Real-Estate-1024x768.webp",
  twilight:
    "https://cdn.photos4realestate.ca/p4re-static-media/home-page-images/Twilight-photo-of-a-home-in-Calgary.jpg",
} as const;


const cdnIguideServicePage = `${cdn}/2024/06`;

export const iguideTourImages = {
  onlineViewing:
    "https://cdn.photos4realestate.ca/p4re-static-media/iguide-virtual-tour-service-page/Real-estate-floor-plan-generated-from-iGUIDE-property-scan.webp",
  standardFloorPlan: `${cdnIguideServicePage}/iGUIDE-Standard-Floor-Plan.webp`,
  premiumPlan: `${cdnIguideServicePage}/Floor-Plan.webp`,
  rmsMeasurements: `${cdnIguideServicePage}/RMS-Measurements.webp`,
  areasSpecialist:
    "https://cdn.photos4realestate.ca/p4re-static-media/iguide-virtual-tour-service-page/iGUIDE-Specialist-from-Photos-4-Real-Estate-Taking-Measurements-of-a-Living-Room.webp",
  areasFloorPlan:
    "https://cdn.photos4realestate.ca/p4re-static-media/iguide-virtual-tour-service-page/Real-estate-floor-plan-generated-from-iGUIDE-property-scan.webp",
  areasVirtualTour:
    "https://cdn.photos4realestate.ca/p4re-static-media/iguide-virtual-tour-service-page/real-estate-virtual-tour-example-iguide.webp",
} as const;

// Photography service page
export const photographyImages = {
  introMain:
    "https://cdn.photos4realestate.ca/p4re-static-media/re-photography-service-page/Exterior-photo-of-a-house-in-calgary-Photos-4-Real-Estate.webp",
  introSecondary:
    "https://cdn.photos4realestate.ca/p4re-static-media/re-photography-service-page/Living-Room-photo-example-Calgary-Photos-4-Real-Estate.webp",
  interior:
    "https://cdn.photos4realestate.ca/p4re-static-media/re-photography-service-page/Kitchen-photo-example-Calgary-Photos-4-Real-Estate.webp",
  exterior:
    "https://cdn.photos4realestate.ca/p4re-static-media/re-photography-service-page/Exterior-photo-of-a-house-in-Calgary-example-Photos-4-Real-Estate.webp",
  skyBefore:
    "https://cdn.photos4realestate.ca/p4re-static-media/re-photography-service-page/pool-before-850.webp",
  skyAfter:
    "https://cdn.photos4realestate.ca/p4re-static-media/re-photography-service-page/pool-after-850.webp",
  twilight:
    "https://cdn.photos4realestate.ca/p4re-static-media/re-photography-service-page/twilight-photo-of-a-house-near-Calgary-Photos-4-Real-Estate.jpg",
  prepLiving:
    "https://cdn.photos4realestate.ca/p4re-static-media/re-photography-service-page/Dining-area-photo-Photos-4-Real-Estate.webp",
  prepKitchen:
    "https://cdn.photos4realestate.ca/p4re-static-media/re-photography-service-page/Living-Room-with-fireplace-Photos-4-Real-Estate.webp",
  prepBedroom:
    "https://cdn.photos4realestate.ca/p4re-static-media/re-photography-service-page/Living-Room-stairs-Photos-4-Real-Estate.webp",
  areaCalgary:
    "https://cdn.photos4realestate.ca/p4re-static-media/re-photography-service-page/Bedroom-example-photo-Photos-4-Real-Estate-03.webp",
  areaMahogany:
    "https://cdn.photos4realestate.ca/p4re-static-media/re-photography-service-page/Drone-photo-Downtown-Calgary-Photos-4-Real-Estate-03.jpg",
  areaAcreage:
    "https://cdn.photos4realestate.ca/p4re-static-media/re-photography-service-page/Drone-Mahogany-Lake-03.webp",
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
  heroVideo:
    "https://cdn.photos4realestate.ca/p4re-static-media/re-videography-service-page/306%20Cranbrook%20Walk%20Se%20-%20Vertical%20Property%20Video%2C%20Calgary.mp4",
  reelsVideo:
    "https://cdn.photos4realestate.ca/p4re-static-media/re-videography-service-page/V2%209759%20Sanderling%20Way%20Nw%20Calgary%20-%20Videos.mp4",
  prepVideo:
    "https://cdn.photos4realestate.ca/p4re-static-media/re-videography-service-page/244094%20Partridge%20Place.mp4",
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
  standardPlanIntro:
    "https://cdn.photos4realestate.ca/p4re-static-media/rms-and-floor-plans-service-page/iGUIDE-Standard-Floor-Plan.webp",
  rmsMeasurements:
    "https://cdn.photos4realestate.ca/p4re-static-media/rms-and-floor-plans-service-page/RMS-Measurements.webp",
  standardPlanCard:
    "https://cdn.photos4realestate.ca/p4re-static-media/rms-and-floor-plans-service-page/Standard%20iGUIDE%20Floor%20Plan.webp",
  premiumPlanCard:
    "https://cdn.photos4realestate.ca/p4re-static-media/rms-and-floor-plans-service-page/Premium%20iGUIDE%20Floor%20Plan.webp",
  iguideScanning:
    "https://cdn.photos4realestate.ca/p4re-static-media/iguide-virtual-tour-service-page/Real-estate-floor-plan-generated-from-iGUIDE-property-scan.webp",
  areaBathroom:
    "https://cdn.photos4realestate.ca/p4re-static-media/rms-and-floor-plans-service-page/Real%20Estate%20Photographer%20explains%20how%20to%20use%20and%20operate%20iGUIDE%20scanning%20device.webp",
  areaBedroom:
    "https://cdn.photos4realestate.ca/p4re-static-media/rms-and-floor-plans-service-page/Photo-of-a-Bedroom-Photos-4-Real-Estate-02.webp",
  areaKitchen:
    "https://cdn.photos4realestate.ca/p4re-static-media/rms-and-floor-plans-service-page/Photo-of-a-Bathroom-Photos-4-Real-Estate-06.webp",
} as const;

// Virtual staging service page
export const virtualStagingImages = {
  styleModern:
    "https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/Modern-Style-Virtual-Staging-by-Photos-4-Real-Estate-2.jpg",
  styleScandinavian:
    "https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/Scandinavian-Style-Office-Furniture-Photos-4-Real-Estate.jpg",
  styleTransitional:
    "https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/Virtual-Staging-Bedroom-Transitional-%20Style-Photos-4-Real-Estate.webp",
  styleLuxury:
    "https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/virtually-stageg-living-room-Luxury-Photos-4-Real-Estate.webp",
  styleTraditional:
    "https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/Traditional-Style-Virtual-Staging-Photos-4-Real-Estate.jpg",
  styleFarmhouse:
    "https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/virtual-staging-after-image-farmhouse-style-Photos-4-Real-Estate.webp",
  benefitsMain:
    "https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/Virtually-Staged-Living-Room-by-Photos-4-Real-Estate.jpg",
  benefitsBedroom:
    "https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/Virtually-Staged-Bedroom-by-Photos-4-Real-Estate.jpg",
  benefitsDiningLiving:
    "https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/Virtual-Staging-Dinnnig-and-Living-Room-by-Photos-4-Real-Estate.webp",
  areaMain:
    "https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/Virtually-Staged-Bedroom-by-Photos-4-Real-Estate-02.jpg",
  areaBedroom:
    "https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/virtually-stageg-bedroom-1-850.webp",
  areaLiving:
    "https://cdn.photos4realestate.ca/p4re-static-media/virtual-staging-service-page/Virtual-Staging-Living-Room-After-02%20(1).webp",
} as const;

// Services index page (cards on /services and the per-slug content)
export const servicesImages = {
  photography:
    "https://cdn.photos4realestate.ca/p4re-static-media/services-page/Photo-of-a-bathroom-in-a-Calgary-house.webp",
  videographyVideo: videographyImages.heroVideo,
  rms:
    "https://cdn.photos4realestate.ca/p4re-static-media/services-page/iGUIDE-Standard-Floor-Plan.webp",
  iguideEmbedSrc:
    "https://youriguide.com/embed/20729_main_st_se_calgary_ab?unbranded=1&bgcolor=FFFFFF",
  droneMain:
    "https://cdn.photos4realestate.ca/p4re-static-media/services-page/Drone-view-to-Downtown-Calgary-Photos-4-Real-Estate-1024x768.webp",
  droneSecondary:
    "https://cdn.photos4realestate.ca/p4re-static-media/services-page/Drone-Mahogany-Lake-01.webp",
  droneTertiary:
    "https://cdn.photos4realestate.ca/p4re-static-media/services-page/Drone-Photo-Acreges-Near-Calgary.webp",
  stagingBefore:
    "https://cdn.photos4realestate.ca/p4re-static-media/services-page/Virtual-Staging-Bedroom-Before-01.webp",
  stagingAfter:
    "https://cdn.photos4realestate.ca/p4re-static-media/services-page/Virtual-Staging-Bedroom-After-01.webp",
  twilight:
    "https://cdn.photos4realestate.ca/p4re-static-media/services-page/Twilight-photo-of-a-house-in-Harmony-01.jpg",
  marketingKit:
    "https://cdn.photos4realestate.ca/p4re-static-media/services-page/Marketing%20Kit%20from%20Photos%204%20Real%20Estate.webp",
} as const;
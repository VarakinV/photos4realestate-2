/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://photos4realestate.ca",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*", "/admin/*", "/thank-you", "/booking-confirmed", "/404", "/500"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/", "/admin/"] },
    ],
  },
};

export default function sitemap() {
  const baseUrl = "https://safarhood.com";
  const routes = ["", "/about", "/tracks", "/faq", "/contact-us"];
  const tracks = ["/tracks/dayara-bugyal", "/tracks/har-ki-dun", "/tracks/chopta-tungnath", "/tracks/valley-of-flowers"];

  const staticUrls = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const dynamicUrls = tracks.map((track) => ({
    url: `${baseUrl}${track}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticUrls, ...dynamicUrls];
}

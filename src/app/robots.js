export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://safarhood.com/sitemap.xml",
  };
}

// Accepts a full http(s) URL or a site-relative path like "/uploads/images/x.webp".
// The upload API returns relative paths, so plain isURL() would reject them.
export const isUrlOrPath = (value) =>
  typeof value === "string" && (value.startsWith("/") || /^https?:\/\//i.test(value));

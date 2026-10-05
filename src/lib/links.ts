/** Opens web links in a new tab; mailto/tel links stay in place. */
export function externalProps(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

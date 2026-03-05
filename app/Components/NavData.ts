// navData.ts
export interface NavLink {
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { name: "Locations", href: "#locations" },
  { name: "How to Book", href: "#how-to-book" },
  { name: "Why Us", href: "#why-us" },
  { name: "Reviews", href: "#reviews" },
];

export const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    const top = target.getBoundingClientRect().top + window.pageYOffset - 100;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

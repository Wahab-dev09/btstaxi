// navData.ts
export interface NavLink {
  name: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { name: "Locations", href: "#locations" },
  { name: "How to Book", href: "#process" },
  { name: "Why Us", href: "#benefits" },
  { name: "Reviews", href: "#reviews" },
];
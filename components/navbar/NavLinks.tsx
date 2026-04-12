"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "Events" },
  { href: "/catering", label: "Catering" },
  { href: "/contact", label: "Connect" },
  { href: "/careers", label: "Careers" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="hidden lg:flex items-center gap-6 md:gap-7 xl:gap-8 mx-auto xl:mx-10 whitespace-nowrap">
      {links.map((link) => (
        <li key={link.href} className="flex items-center">
          <Link
            href={link.href}
            className={`font-medium text-[18px] leading-[22px] tracking-[0.02em] transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#20064A] rounded-sm py-1 align-middle ${
              pathname === link.href 
                ? "text-[#DFAB40]" 
                : "text-[#20064A] hover:text-[#DFAB40]"
            }`}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

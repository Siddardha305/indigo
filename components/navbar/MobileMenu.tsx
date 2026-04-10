"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/events", label: "Events" },
  { href: "/catering", label: "Catering" },
  { href: "/contact", label: "Connect" },
  { href: "/careers", label: "Careers" },
  { href: "/reserve", label: "Reserve a Table" },
  { href: "/order", label: "Order Now" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[#20064A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20064A] rounded-md transition-colors hover:bg-black/5"
        aria-label="Toggle Navigation Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-[#20064A]/10 rounded-2xl shadow-xl overflow-hidden flex flex-col p-4 gap-4 animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 font-medium text-base rounded-xl transition-colors ${
                    pathname === link.href
                      ? "bg-[#20064A] text-white"
                      : "text-[#20064A] hover:bg-[#20064A]/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

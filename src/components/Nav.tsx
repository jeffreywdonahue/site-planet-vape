"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: "#0B1A2A",
        borderColor: "#1FA6B3",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          className="font-anton text-xl tracking-widest uppercase"
          style={{ color: "#F5F7FA", fontFamily: "var(--font-anton)" }}
        >
          Planet Vape
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-[#1FA6B3]"
              style={{ color: "#B7C0CC" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+15053277822"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#C24A3A", color: "#F5F7FA" }}
            aria-label="Call Planet Vape"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            (505) 327-7822
          </a>

          {/* Mobile hamburger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="md:hidden p-2 rounded"
              style={{ color: "#F5F7FA" }}
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-l"
              style={{ backgroundColor: "#111F33", borderColor: "#1FA6B3" }}
            >
              <nav className="flex flex-col gap-6 mt-8">
                <span
                  className="font-bold text-lg uppercase tracking-widest"
                  style={{
                    color: "#F5F7FA",
                    fontFamily: "var(--font-anton)",
                  }}
                >
                  Planet Vape
                </span>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium transition-colors hover:text-[#1FA6B3]"
                    style={{ color: "#B7C0CC" }}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="tel:+15053277822"
                  className="flex items-center gap-2 px-4 py-3 rounded font-semibold mt-4"
                  style={{ backgroundColor: "#C24A3A", color: "#F5F7FA" }}
                  aria-label="Call Planet Vape"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  (505) 327-7822
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

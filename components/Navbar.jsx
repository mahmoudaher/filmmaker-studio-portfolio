"use client";
import TransitionLink from "@/components/TransitionLink";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const links = [
    { href: "/", label: "HOME" },
    { href: "/film", label: "FILM" },
    { href: "/photography", label: "PHOTOGRAPHY" },
    { href: "/about", label: "ABOUT" },
  ];

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav>
      <div className="hidden md:flex items-center gap-1">
        {links.map((link) => (
          <TransitionLink
            key={link.href}
            href={link.href}
            className="relative px-4 py-2 group"
          >
            <span
              className={`font-bebas text-[14px] tracking-[0.25em] transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-white"
                  : "text-neutral-500 group-hover:text-white/80"
              }`}
            >
              {link.label}
            </span>
            <span
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-red-700 transition-all duration-500 ease-out ${
                isActive(link.href) ? "w-6" : "w-0 group-hover:w-4"
              }`}
            />
          </TransitionLink>
        ))}
      </div>

      <div className="md:hidden">
        <button
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((v) => !v)}
          className="relative w-7 h-5 flex flex-col justify-between items-center group"
        >
          <span
            className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center ${
              isOpen ? "rotate-45 translate-y-[9px]" : ""
            }`}
          />

          <span
            className={`block w-4 h-[1.5px] bg-white/70 transition-all duration-300 ${
              isOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center ${
              isOpen ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          />
        </button>

        <div
          id="mobile-nav"
          className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500 ease-out ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
            className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center"
          >
            <span className="block w-6 h-[1.5px] bg-white rotate-45 absolute" />
            <span className="block w-6 h-[1.5px] bg-white -rotate-45 absolute" />
          </button>

          <div className="flex flex-col items-center gap-8">
            {links.map((link, i) => (
              <TransitionLink
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group"
              >
                <div
                  className={`flex items-center gap-4 transition-all duration-500 ${
                    isOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: isOpen ? `${i * 80}ms` : "0ms" }}
                >
                  <span className="text-[11px] font-montserrat text-neutral-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-bebas text-[32px] tracking-[0.2em] transition-colors duration-300 ${
                      isActive(link.href)
                        ? "text-white"
                        : "text-neutral-600 group-hover:text-white"
                    }`}
                  >
                    {link.label}
                  </span>
                  {isActive(link.href) && (
                    <span className="w-6 h-[1px] bg-red-700" />
                  )}
                </div>
              </TransitionLink>
            ))}
          </div>

          <div className="absolute bottom-10 flex items-center gap-3">
            <span className="w-8 h-px bg-red-800/40" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-bebas text-neutral-700">
              Souleyman Mumtaz
            </span>
            <span className="w-8 h-px bg-red-800/40" />
          </div>
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#concepto", label: "Concepto" },
  { href: "#casa", label: "La casa" },
  { href: "#galeria", label: "Galería" },
  { href: "#plantas", label: "Plantas" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        solid ? "bg-amam-deep/95 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#top" className="font-serif text-3xl text-amam-cream leading-none">
            Amam
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-amam-cream/80 hover:text-amam-cream transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="#contacto" className="btn-light !py-2.5">
              Agenda una visita
            </a>
          </div>

          <button
            className="lg:hidden text-amam-cream p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-amam-cream/80 hover:text-amam-cream py-2.5"
              >
                {link.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)} className="btn-light mt-2">
              Agenda una visita
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

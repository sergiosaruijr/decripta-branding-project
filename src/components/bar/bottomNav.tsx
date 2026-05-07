"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "#inicio", title: "Início" },
  { href: "#quem-somos", title: "Quem somos" },
  { href: "#contato", title: "Contato" },
];

export default function BottomNav() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false); // começa escondido

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 80); // aparece quando passa 80px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2
        transition-all duration-700 ease-in-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <div className="bg-[#c8f135] text-black text-sm font-bold px-5 py-2 rounded-full">
        Decripta
      </div>

      <div
        className="relative bg-black/70 backdrop-blur-md text-white text-sm rounded-full px-10 py-2 cursor-pointer"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div
          className={`flex items-center gap-5 transition-all duration-300 overflow-hidden ${
            open ? "max-w-xs opacity-100" : "max-w-0 opacity-0"
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-white/90 hover:text-[#c8f135] transition-colors duration-200 relative z-10"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <span
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        >
          Menu
        </span>
      </div>
    </div>
  );
}

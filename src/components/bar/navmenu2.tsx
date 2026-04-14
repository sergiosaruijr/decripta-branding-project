"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NAV_ITEMS = [
  // { href: "#projetos", title: "Projetos" },
  { href: "#inicio", title: "Início" },
  { href: "#quem-somos", title: "Quem somos" },
  { href: "#contato", title: "Contato" },
];

// trocar pelos mockups apos pronto
const GRID_IMAGES = [
  { src: "/image/FLYER.png", alt: "Mockup 1", span: "row-span-2" },
  { src: "/image/CARTAO.png", alt: "Mockup 2", span: "" },
  { src: "/image/OUTDOOR2.png", alt: "Mockup 3", span: "" },
  { src: "/image/CARTAO.png", alt: "Mockup 4", span: "row-span-2" },
  { src: "/image/OUTDOOR2.png", alt: "Mockup 5", span: "" },
  { src: "/image/FLYER.png", alt: "Mockup 6", span: "" },
];

function useSmoothScroll() {
  return useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;

    e.preventDefault();
    e.stopPropagation(); // <- importante

    const hash = href.slice(1);
    const target = document.getElementById(hash);
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({ top, behavior: "smooth" });
  }, []);
}

export function NavigationMenuHome2() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  // const handleScroll = useSmoothScroll();

  // fechamento verificar
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // a forma de travar verificar se nao esta com erro em outros modelos
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const [isNavigating, setIsNavigating] = useState(false);

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    e.preventDefault();
    e.stopPropagation();

    // fecha instantaneamente (sem animação)
    setIsNavigating(true);
    setOpen(false);

    setTimeout(() => {
      setIsNavigating(false);
      setActiveHref(null);

      const hash = href.startsWith("#") ? href.slice(1) : href.split("#")[1];
      const target = document.getElementById(hash);
      if (!target) return;

      const top = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
    }, 50); // delay mínimo só pra garantir que o overlay sumiu do DOM
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="fixed top-5 left-5 z-[60] flex items-center gap-2 px-4 py-2
          rounded-lg text-sm tracking-wide select-none
          border border-[#c8f135]/20
          bg-[#0a1208]/70 backdrop-blur-xl
          text-white/80 hover:text-white
          hover:border-[#c8f135]/35 hover:bg-[#0a1208]/85
          transition-all duration-300"
      >
        <span>Menu</span>
        <span className="relative w-3 h-3 flex items-center justify-center">
          <span
            className={`absolute block w-3 h-px bg-current rounded-full
            transition-all duration-300 origin-center
            ${open ? "rotate-45" : "-translate-y-[3px]"}`}
          />
          <span
            className={`absolute block w-3 h-px bg-current rounded-full
            transition-all duration-300 origin-center
            ${open ? "-rotate-45" : "translate-y-[3px]"}`}
          />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-50 flex
        ${isNavigating ? "" : "transition-all duration-500"}
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* esquerda */}
        <div
          className={`relative flex flex-col justify-center
            w-full md:w-1/2 h-full px-12
            bg-[#0a1208]/90 backdrop-blur-xl
            border-r border-[#c8f135]/10
            transition-transform duration-500 ease-out
            ${open ? "translate-x-0" : "-translate-x-8"}`}
        >
          <p className="text-[10px] tracking-[.25em] text-white/25 uppercase mb-12">
            Decripta — branding
          </p>

          <nav>
            <ul className="flex flex-col">
              {NAV_ITEMS.map((item, i) => (
                <li
                  key={item.href}
                  className={
                    i < NAV_ITEMS.length - 1 ? "border-b border-white/8" : ""
                  }
                  style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`group relative flex items-center justify-between
                      py-5 text-lg font-medium tracking-wide
                      transition-colors duration-200
                      ${
                        activeHref === item.href
                          ? "text-[#c8f135]"
                          : "text-white/75 hover:text-[#c8f135]"
                      }`}
                  >
                    <span
                      className="absolute left-0 top-1/2 -translate-y-1/2
                      w-[2px] h-0 bg-[#c8f135] rounded-full
                      transition-all duration-200 group-hover:h-6"
                    />
                    <span className="pl-4">{item.title}</span>

                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="opacity-0 -translate-x-2 group-hover:opacity-100
                        group-hover:translate-x-0 transition-all duration-200"
                    >
                      <path
                        d="M2 12L12 2M12 2H5M12 2V9"
                        stroke="#c8f135"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* rodapé adicionar mais info ou trocar pelo outro do inicio */}
          <div className="absolute bottom-8 left-12 right-12 flex">
            <p className="text-[11px] text-white/25 tracking-wide">
              decripta.branding@gmail.com
            </p>
            {/* <p className="text-white/25 text-sm font-amifer tracking-wider pl-24">
              +55 43 99999-9999
            </p> */}
          </div>
        </div>

        {/* direita */}
        <div
          className={`hidden md:grid md:w-1/2 h-full
            grid-cols-2 grid-rows-3 gap-2 p-2
            bg-[#080f06]
            transition-transform duration-500 ease-out
            ${open ? "translate-x-0" : "translate-x-8"}`}
        >
          {GRID_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-lg ${img.span}
                transition-transform duration-700 ease-out
                hover:scale-[1.02]`}
              style={{ transitionDelay: open ? `${i * 40 + 100}ms` : "0ms" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover opacity-80 hover:opacity-100
                  transition-opacity duration-300"
                sizes="25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

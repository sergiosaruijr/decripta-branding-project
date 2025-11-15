"use client";

import { useEffect, useState } from "react";

const navigation = [
  { name: "Início", href: "#inicio" },
  { name: "Projetos", href: "#projetos" },
  { name: "Quem Somos", href: "#quem-somos" },
  { name: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
      <div
        className={`
        bg-black/30  
        rounded-full 
        px-6 py-3
        transition-all duration-300
        ${scrolled ? "shadow-lg" : "shadow-md"}
      `}
      >
        <ul className="flex items-center justify-center gap-8">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-lg font-light text-[#e6e6e6] hover:text-[#89aa29] transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

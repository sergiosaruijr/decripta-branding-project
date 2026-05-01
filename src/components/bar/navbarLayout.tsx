"use client";

import { useEffect, useState } from "react";
import { NavigationMenuHome2 } from "@/components/bar/navmenu2";

export default function NavbarLayout() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 inset-0 flex w-full justify-between bg-black h-18 items-center px-6 transition-all duration-700 ease-in-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div>
        <p className="text-white">Teste Logo</p>
      </div>
      <NavigationMenuHome2 />
    </div>
  );
}

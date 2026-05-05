"use client";

import { useEffect, useState } from "react";
import { NavigationMenuHome2 } from "@/components/bar/navmenu2";
import Link from "next/link";
import Image from "next/image";

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
      <Link href="/">
        {/* <p className="text-white">Teste Logo</p> */}
        <Image
          src="/image/logoFooter.svg"
          alt="Logo"
          width={165}
          height={37}
          className="lg:ml-12 md:ml-6"
        />
      </Link>
      <div className="lg:mr-12 md:mr-6">
        <NavigationMenuHome2 />
      </div>
    </div>
  );
}

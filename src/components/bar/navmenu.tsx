import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

type NavItem = {
  href: string;
  title: string;
};

const NAV_ITEMS: NavItem[] = [
  { href: "#projetos", title: "Projetos" },
  { href: "#quem-somos", title: "Quem somos" },
  { href: "#contato", title: "Contato" },
];

function useSmoothScroll() {
  const router = useRouter();

  return useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const href = e.currentTarget.getAttribute("href");
      if (!href) return;

      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;

      const hash = href.slice(hashIndex + 1);
      const path = href.slice(0, hashIndex);
      const currentPath = window.location.pathname;

      // cross-page: deixa o Next navegar normalmente
      if (path && path !== currentPath) {
        router.push(href);
        return;
      }

      e.preventDefault();
      const target = document.getElementById(hash);
      if (!target) return;

      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${hash}`);
    },
    [router],
  );
}

export function NavigationMenuHome() {
  const handleScroll = useSmoothScroll();

  const [activeHref, setActiveHref] = useState<string | null>(null);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    setActiveHref(href);
    handleScroll(e);
    setTimeout(() => setActiveHref(null), 400);
  }

  return (
    <NavigationMenu className="">
      <NavigationMenuList className="">
        <NavigationMenuItem className="">
          {/* <NavigationMenuTrigger className="text-[#A1A1A1] bg-[#ADC300] rounded-10 text-sm font-amifer tracking-wider hover:bg-[#89aa29] transition-colors duration-300 opacity-80">
            Menu
          </NavigationMenuTrigger> */}
          <NavigationMenuTrigger
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm
              transition-all duration-300 ease-out
              border border-[#c8f135]/20
              bg-[#0a1208]/70 backdrop-blur-xl
              text-white/80 hover:text-white
              hover:border-[#c8f135]/35
              hover:bg-[#0a1208]/85
              select-none"
          >
            <span className="tracking-wide">Menu</span>
          </NavigationMenuTrigger>

          <NavigationMenuContent className="">
            <div className="grid w-[120px] rounded-lg gap-1 p-1.5 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <div className="rounded-lg bg-[#0a1208]/70 backdrop-blur-xl">
                <ul className="flex flex-col p-6 min-h-[180px]">
                  {NAV_ITEMS.map((item, i) => (
                    <ListItem
                      key={item.href}
                      href={item.href}
                      title={item.title}
                      isActive={activeHref === item.href}
                      last={i === NAV_ITEMS.length - 1}
                      onClick={(e) => handleClick(e, item.href)}
                    />
                  ))}
                </ul>
              </div>
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src="/image/FLYER.png"
                  alt="bg"
                  fill
                  className="rounded-lg h-[379px] pr-1"
                />
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

type ListItemProps = {
  href: string;
  title: string;
  isActive: boolean;
  last: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

function ListItem({ href, title, isActive, last, onClick }: ListItemProps) {
  return (
    // ✅ fix 2: <li> direto filho do <ul>, sem wrapper <div>
    <li className={!last ? "border-b border-white/10" : undefined}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          onClick={onClick}
          className={`
            flex py-3 text-lg font-medium leading-none
            transition-colors duration-200
            ${isActive ? "text-[#c8f135]" : "text-white/85 hover:text-[#c8f135]"}
          `}
        >
          {title}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

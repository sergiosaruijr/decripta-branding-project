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

export function NavigationMenuHome() {
  return (
    <NavigationMenu className=" bg-gray-700">
      <NavigationMenuList className="bg-orange-400">
        <NavigationMenuItem className="bg-blue-600">
          <NavigationMenuTrigger className="text-white bg-[#ADC300] rounded-10 text-sm font-amifer tracking-wider hover:bg-[#89aa29] transition-colors duration-300 ">
            Menu
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="grid w-[120px] gap-2 rounded-lg bg-white p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] lg:h-[399px] bg-blue-600">
              <div className="bg-red-500 flex flex-col ">
                <ListItem
                  href="/docs"
                  title="Projetos"
                  className="h-8 flex text-lg"
                >
                  {/* Projetos criados e desenvolvidos pela Decripta. */}
                </ListItem>
                <div className="w-full border-b-2 bg-black"></div>
                <ListItem
                  href="/docs/installation"
                  title="Quem somos"
                  className="h-8 flex text-lg"
                >
                  <div className="w-full border-b-2 bg-black"></div>
                  {/* Quem somos e o que fazemos. */}
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="Contato"
                  className="h-8 flex text-lg"
                >
                  <div className="w-full border-b-2 bg-black"></div>
                  {/* Informações de contato e redes sociais. */}
                </ListItem>
              </div>
              <div className="bg-amber-400 relative h-full w-full overflow-hidden">
                <Image
                  src="/image/FLYER.png"
                  alt="bg"
                  fill
                  className="rounded-lg h-[379px]"
                />
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  // children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col text-s">
            <div className="leading-none font-medium">{title}</div>
            {/* <div className="line-clamp-2 text-muted-foreground mb-1 text-sm">
              {children}
            </div> */}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

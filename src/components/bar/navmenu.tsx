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

export function NavigationMenuHome() {
  return (
    <NavigationMenu className=" bg-gray-700">
      <NavigationMenuList className="bg-orange-400">
        <NavigationMenuItem className="bg-blue-600">
          <NavigationMenuTrigger className="text-white bg-[#ADC300] rounded-10 text-sm font-amifer tracking-wider hover:bg-[#89aa29] transition-colors duration-300 ">
            Menu
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="w-120 bg-white rounded-lg p-4">
              <ListItem href="/docs" title="Projetos">
                Projetos criados e desenvolvidos pela Decripta.
              </ListItem>
              <ListItem href="/docs/installation" title="Quem somos">
                Quem somos e o que fazemos.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Contato">
                Informações de contato e redes sociais.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col text-s">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground mb-1 text-sm">
              {children}
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

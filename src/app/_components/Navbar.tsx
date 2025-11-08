"use client";

import * as React from "react";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import MobileNavbar from "./MobileNavbar";

export function Navbar() {
  const isMobile = useIsMobile();
  const [lastScrollY, setLastScrollY] = React.useState<number>(0);
  const [scrollUp, setScrollUp] = React.useState<boolean>(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < lastScrollY) {
        setScrollUp(true); // ↑ UP
      } else {
        setScrollUp(false); // ↓ DOWN
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className="text-[#ffe3b9] ">
      <NavigationMenu
        viewport={isMobile}
        hidden={isMobile}
        className="fixed z-40 max-w-screen sm:grid place-items-center hidden "
      >
        <NavigationMenuList
          className={`fixed left-1/2 -translate-x-1/2 z-20 p-4 rounded-xs w-screen transition-all duration-1300 ease-in-out
      ${scrollUp ? "top-0 opacity-100 bg-white/10 backdrop-blur-xs" : "-top-30"}
      ${lastScrollY < 45 ? "bg-transparent" : "bg-white/10 shadow-sm "} `}
        >
          <Link href="/">
            <div className="font-bold text-xl ">Ciel D&apos;or</div>
          </Link>
          <span className=" ml-5 text-2xl">|</span>
          <NavigationMenuItem className="">
            <NavigationMenuTrigger className="bg-transparent">
              Home
            </NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <ul className=" grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
                <li className="row-span-3 ">
                  <NavigationMenuLink
                    asChild
                    className=""
                    style={{
                      backgroundImage: `url('/33.jpg')`,
                      backgroundSize: "cover",
                    }}
                  >
                    <Link
                      href="/"
                      className=" flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                    >
                      <div className="mb-2 text-lg font-medium sm:mt-4 text-white">
                        Ciel D&apos;or
                      </div>
                      <p className="text-white text-sm leading-tight">
                        An exceptional dining experience in an elegant
                        atmosphere. We serve the finest international cuisine
                        with the highest quality standards.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/about" title="About Us">
                  Learn about our restaurant&apos;s story and our philosophy in
                  food presentation.
                </ListItem>
                <ListItem href="/menu" title="Menu">
                  Browse our exclusive food menu.
                </ListItem>
                <ListItem href="/reservation" title="Reservations">
                  Book your table for an unforgettable experience.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Our Menu</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <ListItem title="Appetizers" href="/menu/appetizers">
                  A selection of delicious appetizers to start your meal.
                </ListItem>
                <ListItem title="Main Courses" href="/menu/main-courses">
                  A wide variety of signature main dishes.
                </ListItem>
                <ListItem title="Drinks & Beverages" href="/menu/drinks">
                  Refreshing drinks and fine beverages to complement your meal.
                </ListItem>
                <ListItem title="Desserts" href="/menu/desserts">
                  Sweet endings with our exquisite dessert collection.
                </ListItem>
                <ListItem title="Chef's Specials" href="/menu/specials">
                  Unique creations from our master chef.
                </ListItem>
                <ListItem title="Seasonal Menu" href="/menu/seasonal">
                  Fresh dishes inspired by the current season.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/reservation">Reservations</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/about">
                      <div className="font-medium">Our Story</div>
                      <div className="text-[#d8cbb8]">
                        Learn about Ciel D&apos;or&apos;s journey and vision.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/chef">
                      <div className="font-medium">Our Chef</div>
                      <div className="text-[#d8cbb8]">
                        Meet the master behind our culinary creations.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/gallery">
                      <div className="font-medium">Gallery</div>
                      <div className="text-[#d8cbb8]">
                        View photos of our restaurant and dishes.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="hidden md:block">
            <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/contact">Visit Us</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/events">Private Events</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="/careers">Careers</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {/* ---- Mobile Nav ---- */}
      <MobileNavbar />
    </nav>
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
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-[#d8cbb8] line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

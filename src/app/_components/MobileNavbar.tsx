"use client";
import * as React from "react";
import { ModeToggle } from "@/components/themeToggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function MobileNavbar() {
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
    <nav
      className={`  transition-all duration-1000 ease-in-out  ${lastScrollY > 45 ? "bg-white/10" : ""} fixed   w-full z-50 flex items-center justify-between px-4 py-3  bg-transparent md:hidden`}
    >
      {/* Logo */}
      <h1 className=" text-xl font-bold">Ciel d&apos;Or</h1>

      {/* Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2 rounded-md  transition">
            <Menu size={24} />
          </button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[70%] bg-[#D6C29B] backdrop-blur-md border-l border-white/20 text-primary"
        >
          {/* ✅ العنوان المطلوب */}
          <SheetHeader>
            <SheetTitle className="">Ciel d&apos;Or</SheetTitle>
          </SheetHeader>

          {/* روابط القائمة */}
          <div className="flex flex-col gap-6 mt-20 px-4 text-lg ">
            <Link href="/" className=" hover:text-gray-300 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300 transition">
              About
            </Link>
            <Link href="/projects" className="hover:text-gray-300 transition">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition">
              Contact
            </Link>
            
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

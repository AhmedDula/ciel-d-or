"use client";
import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, Utensils, Calendar, Users, Phone, Star } from "lucide-react";
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
      className={`transition-all duration-1000 ease-in-out ${
        lastScrollY > 45 ? "bg-white/10 backdrop-blur-[1px] shadow-sm" : ""
      } fixed w-full z-50 flex items-center justify-between px-4 py-3 bg-transparent md:hidden`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <h1 className="text-xl font-bold text-[#d8cbb8]">Ciel D&apos;or</h1>
      </Link>

      {/* Right side - Menu button and theme toggle */}
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 rounded-md transition hover:bg-[#3a3a3a]">
              <Menu size={24} className="text-[#d8cbb8]" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[80%] bg-[#2c2c2c] border-l border-[#3a3a3a] text-[#d8cbb8]"
          >
            {/* Header */}
            <SheetHeader>
              <SheetTitle className="text-[#d8cbb8] text-center text-xl">
                Ciel D&apos;or
              </SheetTitle>
            </SheetHeader>

            {/* Navigation Links */}
            <div className="flex flex-col gap-3 mt-8">
              <Link
                href="/"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#3a3a3a] transition-all duration-200 border border-transparent hover:border-[#d8cbb8]/20"
              >
                <Star size={20} className="text-[#d8cbb8]" />
                <span className="font-medium">Home</span>
              </Link>

              <Link
                href="/menu"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#3a3a3a] transition-all duration-200 border border-transparent hover:border-[#d8cbb8]/20"
              >
                <Utensils size={20} className="text-[#d8cbb8]" />
                <span className="font-medium">Our Menu</span>
              </Link>

              <Link
                href="/reservation"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#3a3a3a] transition-all duration-200 border border-transparent hover:border-[#d8cbb8]/20"
              >
                <Calendar size={20} className="text-[#d8cbb8]" />
                <span className="font-medium">Reservations</span>
              </Link>

              <Link
                href="/about"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#3a3a3a] transition-all duration-200 border border-transparent hover:border-[#d8cbb8]/20"
              >
                <Users size={20} className="text-[#d8cbb8]" />
                <span className="font-medium">About Us</span>
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#3a3a3a] transition-all duration-200 border border-transparent hover:border-[#d8cbb8]/20"
              >
                <Phone size={20} className="text-[#d8cbb8]" />
                <span className="font-medium">Contact</span>
              </Link>
            </div>

            {/* Additional Info */}
            <div className="px-3 mt-8 pt-6 border-t border-[#3a3a3a]">
              <div className="text-sm text-[#d8cbb8]/80">
                <p className="font-medium text-[#d8cbb8]">Opening Hours</p>
                <p>Mon-Sun: 12:00 PM - 11:00 PM</p>
              </div>

              <div className="mt-4 text-sm text-[#d8cbb8]/80">
                <p className="font-medium text-[#d8cbb8]">Call Us</p>
                <p>+1 (555) 123-4567</p>
              </div>

              {/* Special Offer Badge */}
              <div className="mt-4 p-3 rounded-lg bg-[#3a3a3a] border border-[#d8cbb8]/30">
                <p className="text-xs text-[#d8cbb8] font-medium">
                  🎉 Special tasting menu available this weekend
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

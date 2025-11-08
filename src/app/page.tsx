"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import HeroSection from "./_components/HeroSection";
import VideoSec from "./_components/videoSec";
import Menu from "./_components/Menu";
import MiddleSec from "./_components/MiddleSec";
import JuiceMenu from "./_components/juiceMenu";
import PhotoSec from "./_components/PhotoSec";
import Footer from "./_components/Footer";

export default function Page() {
  const wrapperRef = useRef(null);

  gsap.registerPlugin(ScrollSmoother);

  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.3,
      effects: true,
      ignoreMobileResize: true,
    });

    return () => smoother.kill();
  });

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" ref={wrapperRef}>
        <section>
          <HeroSection />
        </section>

        <section className="h-screen">
          <VideoSec />
        </section>

        <section className="h-fit ">
          <Menu />
        </section>

        <section className="h-fit">
          <MiddleSec />
        </section>
        <section className="h-fit">
          <JuiceMenu />
        </section>
        <section>
          <PhotoSec />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
}

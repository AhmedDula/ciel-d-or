"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

function VideoSec() {
  const container = useRef(null);
  const videoWrapper = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger, SplitText);
      const SplitHead = SplitText.create("#head", {
        smartWrap: true,
        type: "chars",
      });
      // Timeline للـ animations
      const tl = gsap.timeline();
      tl.from(container.current, {
        scale: 0.93,
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "center center",
          scrub: 1.2,
        },
      });
      gsap.from(SplitHead.chars, {
        opacity: 0,
        stagger: 0.04,
        scrollTrigger: {
          trigger: container.current,
          start: "top+=70 bottom",
        },
      });
      ScrollTrigger.create({
        trigger: "#content",
        start: "top top+=60",
        end: "bottom-=10 top+=190",
        pin: true,
        pinSpacing: "margin",
        scrub: 0,
       
      });
    },
    { scope: container, dependencies: [] }
  );

  return (
    <div ref={container} className="relative w-full h-screen">
      <video
        src="/recipe.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* الـ overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div ref={videoWrapper} className=" w-full h-screen p-[3.3vw] sm:p-[2vw] ">
        {/* النص */}
        <div
          id="content"
          className="h-full gap-2 flex flex-col text-[#d8cbb8] w-[60vw] sm:w-[25vw]"
        >
          <h1
            id="head"
            className=" text-[6vw] sm:text-[2.3vw] font-cinzel font-bold"
          >
            THE SPIRIT OF FRANCE DINING{" "}
          </h1>
          <p>
            From warm hospitality to bold flavors, every detail tells a story.
          </p>
          <button className="bg-[#d8cbb8] w-[40vw] sm:w-[8vw] rounded-sm border-black/60 border p-2 text-black ">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoSec;

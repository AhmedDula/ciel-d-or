"use client";
import LightRays from "@/components/LightRays";
import Rating from "./Rating";
import { useGSAP } from "@gsap/react";
import { SplitText, gsap } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
function HeroSection() {
  const textArea = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(SplitText);
      const chars = SplitText.create(".w", {
        type: "chars",
        smartWrap:true
      });
      const title = SplitText.create(".q", {
        type: "chars",
        smartWrap:true
      });
      const animText = gsap.from(chars.chars, {
        autoAlpha: 0,
        stagger: {
          from: "start",
          each: 0.04,
        },
        onComplete: () => {
          animText.kill();
          
        },
      });
        const animTitle = gsap.from(title.chars, {
        autoAlpha: 0,
        delay:.4,
        stagger: {
          from: "start",
          each: 0.04,
        },
        onComplete: () => {
          animTitle.kill();
          
        },
      });
    },
    { scope: textArea }
  );
  return (
    <div className="w-full  relative h-screen  text-center">
      <div className=" sm:h-1/2 w-full   z-20 absolute top-0 left-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffff"
          raysSpeed={1.5}
          lightSpread={0.4}
          rayLength={0.6}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.04}
          className="custom-rays  bg-transparent"
        />
      </div>
      <Image
        src="/33.jpg"
        alt="Room"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className="absolute inset-0 -z-10"
      />
      <div
        className="relative w-full h-full text-4xl flex justify-center items-center "
        style={
          {
            // backgroundImage: `url('/elegant-wooden-dining-room-with-modern-lighting-generated-by-ai.jpg')`,
            // backgroundSize: "cover",
          }
        }
      >
        <div className="absolute top-0 w-full h-full bg-linear-to-b from-black sm:from-black/70 to-transparent" />

        <div
          ref={textArea}
          className=" flex items-center  justify-between flex-col  w-full h-full z-21 p-7 pt-[10%]"
        >
          <div className="w mt-23 h-[30%] flex-col gap-4 flex">
            <h1 className="q font-cinzel font-semibold text-[15vw] sm:text-[6vw] text-shadow-md text-[#d8cbb8]">
              FLAVORS
            </h1>
            <div className="flex gap-3 text-center items-center  text-[#d8cbb8] sm:flex-row flex-col">
              <h1 className="text-[3vw] md:text-[1vw] font-semibold  sm:w-[16vw]">
                SERVING CENTRAL FRANCE
              </h1>
              <h1 className="font-cinzel  font-semibold text-[12vw] sm:text-[4vw] text-shadow-md text-[#d8cbb8]">
                THAT STAY
              </h1>
              <h1 className="text-[3vw] md:text-[1vw] font-semibold sm:w-[16vw]  ">
                ESTABLISHED 1996
              </h1>
            </div>
          </div>
          <div className="w-full h-[70%] flex justify-end gap-9 sm:justify-between items-center sm:items-end  sm:flex-row flex-col">
            <div className="text-shadow-2xs overflow-hidden w-full sm:w-1/2  ">
              <p className=" sm:w-[34vw]  sm:text-[1.56vw] md:text-[1vw]  text-[3.5vw] text-[#d8cbb8]">
                {" "}
                At Ciel d&apos;or, every dish is a tribute to tradition and every
                moment is crafted for today. We bring together the warmth of
                Indian hospitality, the richness of timeless flavors, and the
                pace of modern life.
              </p>
            </div>
            <div className="bg-[#d8cbb8] w-[80vw] sm:w-[25vw] h-[13vh] ">
              <Rating />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

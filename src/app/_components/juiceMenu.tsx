"use client";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";

function JuiceMenu() {
  const contianer = useRef(null);
  const PinDiv = useRef(null);
  gsap.registerPlugin(ScrollTrigger, SplitText);
  useGSAP(() => {
    const Split = SplitText.create(".h", {
      type: "chars",
      smartWrap: true,
    });
    gsap.from(Split.chars, {
      opacity: 0,
      stagger: 0.04,
      scrollTrigger:{
        trigger:contianer.current,
        start:'top+=70 bottom',
      
      }
    });
    const mm = gsap.matchMedia();
    mm.add("(min-width: 640px)", () => {
      ScrollTrigger.create({
        trigger: PinDiv.current,
        start: "top top",
        end: "bottom-=27 bottom",
        scrub: true,
        pin: true,
        pinSpacing: "margin",
      });
    });

    ScrollTrigger.refresh();
  }, []);
  return (
    <div
      ref={contianer}
      className="flex w-screen sm:h-630 sm:flex-row flex-col overflow-hidden"
    >
      <div
        ref={PinDiv}
        id="Div"
        className="sm:w-[45%]  p-[1.5vw] flex flex-col sm:gap-20 "
      >
        <div className="flex-col flex justify-items-stretch leading-none gap-2">
          <h1 className="h text-[7vw] sm:text-[2.7vw] font-cinzel font-semibold">
            DRINKS THAT
          </h1>
          <h1 className="h text-[7vw] sm:text-[2.7vw] font-cinzel font-semibold">
            COMPLETE
          </h1>
          <h1 className="h text-[7vw] sm:text-[2.7vw] font-cinzel font-semibold">
            THE EXPERIENCE
          </h1>
          <p className="sm:w-[25vw]">
            From house-special cocktails to traditional Indian lassi, every
            drink is designed to pair perfectly with your meal.
          </p>
          <button className="mt-[2vh] bg-[#2c2c2c] text-white sm:w-[9vw] rounded-xs border-black/60 border px-[1vw] py-[2vh]">
            Open Menu
          </button>
        </div>
        <div className="">
          <div className="flex flex-col ">
            <div className="py-[2vh] border-y border-[#2c2c2c]">
              {" "}
              <div className="flex justify-between">
                <h2>Tamarind Margarita</h2> <h2>$16.99</h2>
              </div>{" "}
              <p>
                Tamarind with our signature in-house mix for a distinct take on
                the classic margarita. Pro-tip: make it spicy!
              </p>
            </div>
            <div className="py-[2vh] border-b border-[#2c2c2c]">
              {" "}
              <div className="flex justify-between">
                <h2>Tipsy Lassi</h2> <h2>$18.99</h2>
              </div>{" "}
              <p>Our renowned signature mango lassi with a boozy rum kick.</p>
            </div>
            <div className="py-[2vh] border-b border-[#2c2c2c]">
              {" "}
              <div className="flex justify-between">
                <h2>Lychee-Tini</h2> <h2>$13.99</h2>
              </div>{" "}
              <p>Fresh lychees and vodka; shaken not stirred.</p>
            </div>
            <div className="py-[2vh] border-b border-[#2c2c2c]">
              {" "}
              <div className="flex justify-between">
                <h2>Ginger Peach Soda</h2> <h2>$11.79</h2>
              </div>{" "}
              <p>
                A bright fusion of spicy ginger and juicy peach — refreshing,
                smooth, and perfectly balanced for any moment.
              </p>
            </div>
            <div className="py-[2vh] border-b border-[#2c2c2c]">
              {" "}
              <div className="flex justify-between">
                <h2>Smoked Old Fashion</h2> <h2>$17.99 / $30.99</h2>
              </div>{" "}
              <p>The classic cocktail smoked to excellence.</p>
            </div>
            <div className="py-[2vh] border-b border-[#2c2c2c]">
              {" "}
              <div className="flex justify-between">
                <h2>Mint Cucumber Fizz</h2> <h2>$17.99 / $30.99</h2>
              </div>{" "}
              <p>
                Cool cucumber meets crisp mint in this sparkling blend that
                feels like pure, chilled freshness in a glass.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-[55%] p-[.3vw]">
        <Image
          src={"/juice.jpg"}
          width={1400}
          height={222}
          alt=""
          className="object-cover h-[50vh] sm:h-320 mb-1"
        />

        <Image
          src={"/juice2.jpg"}
          width={1400}
          height={222}
          alt=""
          className="object-cover h-[50vh] sm:h-297 "
        />
      </div>
    </div>
  );
}

export default JuiceMenu;

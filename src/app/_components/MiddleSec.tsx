"use client";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";

function MiddleSec() {
  const container = useRef(null);
  gsap.registerPlugin(SplitText, ScrollTrigger);
  useGSAP(
    () => {
      const splitText = SplitText.create("h1", {
        smartWrap: true,
        type: "chars",
      });
      gsap.from(splitText.chars, {
        autoAlpha: 0,
        stagger: 0.03,
        scrollTrigger: {
          trigger: container.current,
          start: "top+=70 bottom",
        },
      });
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="bg-[#bfb4a3] h-fit w-full flex flex-col py-[2vh] overflow-hidden"
    >
      <div className="flex flex-col w-full h-fit p-[2vw] ">
        <div className="w-full ">
          <div className="flex w-full  justify-center">
            <h1 className="text-[8vw] sm:text-[2.8vw] font-cinzel font-semibold">
              CATERING
            </h1>
          </div>
          <div className="flex sm:gap-4 justify-center items-center sm:flex-row flex-col mb-[3vh]">
            <h1 className="font-semibold">Exceptional food</h1>
            <h1 className="text-[7vw] sm:text-[2.7vw] font-cinzel font-semibold">
              THE CIEL D
              &apos;OR WAY
            </h1>
            <h1 className="font-semibold">Anywhere</h1>
          </div>
        </div>
        <div className="flex justify-center w-full pl-[3vw] ">
          <p className="sm:w-[30vw] text-center">
            Whether you&apos;re hosting a wedding, corporate gathering, or
            private celebration, our catering brings the warmth of Indian
            hospitality straight to your table. From full-service spreads to
            curated menus, Amrit Palace delivers flavor, style, and care —
            wherever the occasion takes you.
          </p>
        </div>
      </div>
      <div className="w-full h-full overflow-hidden ">
        <div className="h-fit w-screen flex flex-nowrap justify-center items-center gap-6 overflow-x-auto scrollbar-none">
          <div className="w-fit h-fit text-center pt-[1vh] shrink-0">
            <Image
              className="sm:h-140 h-[50vh]  w-[130vw]  sm:w-[30vw] object-cover"
              src={"/p.jpg"}
              width={700}
              height={500}
              alt=""
            />
            <div className="pt-[2vh] sm:w-[26vw]">
              <h2 className="text-[6vw] sm:text-[1.4vw] font-cinzel font-semibold">
                Buffet Displays
              </h2>
              <p>
                Elegant and abundant buffet setups that showcase our dishes
                beautifully while making service smooth.
              </p>
            </div>
          </div>

          <div className="w-fit h-fit text-center pt-[1vh] shrink-0">
            <Image
              className="sm:h-140 h-[50vh]  w-[130vw]  sm:w-[30vw] object-cover"
              src={"/d.jpg"}
              width={700}
              height={500}
              alt=""
            />
            <div className="pt-[2vh] sm:w-[26vw]">
              <h2 className="text-[6vw] sm:text-[1.4vw] font-cinzel font-semibold">
                Professional Service Team
              </h2>
              <p>
                Our experienced staff provides courteous, attentive service so
                your event runs seamlessly.
              </p>
            </div>
          </div>

          <div className="w-fit h-fit text-center pt-[1vh] shrink-0">
            <Image
              className="sm:h-140 h-[50vh]  w-[130vw]  sm:w-[30vw] object-cover"
              src={"/o.jpg"}
              width={700}
              height={500}
              alt=""
            />
            <div className="pt-[2vh] sm:w-[26vw]">
              <h2 className="text-[6vw] sm:text-[1.4vw] font-cinzel font-semibold">
                Years of Experience
              </h2>
              <p>
                Decades of catering knowledge and event expertise to ensure a
                stress-free, memorable experience for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleSec;

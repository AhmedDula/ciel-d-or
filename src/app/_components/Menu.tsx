"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";

function Menu() {
  const container = useRef(null);
  // const isMobile = useIsMobile()
  gsap.registerPlugin(SplitText, ScrollTrigger);
  useGSAP(
    () => {
      const splitText = SplitText.create("h1", {
        smartWrap: true,
        type: "chars",
      });
      const splitTitle = SplitText.create(".q", {
        smartWrap: true,
        type: "chars",
      });
         gsap.from(splitTitle.chars, {
        autoAlpha: 0,
        stagger: 0.04,
        scrollTrigger: {
          trigger: '#W',
          start: `top+=70 bottom`,
         
        },
      });
      gsap.from(splitText.chars, {
        autoAlpha: 0,

        stagger: 0.04,
        scrollTrigger: {
          trigger: '#E',
          start: `top+=70 bottom`,
         
        },
      });
    
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="h-fit sm:h-screen w-full flex flex-col sm:flex-row overflow-hidden"
    >
      <div id="W" className=" sm:w-[45%] p-[1.2vw] bg-[#2c2c2c] text-[#2c2c2c]">
        <div className="w-full h-full flex flex-col rounded-sm bg-[#d49653]">
          <div className="border-b border-[#2c2c2c] h-fit w-full p-[1.2vw] flex items-center justify-between ">
            <h2 className="q text-[6vw] sm:text-[2.3vw] font-cinzel font-semibold">
              SIGNATURE PLATES
            </h2>
            <Image width={70} height={60} src={"/food1.png"} alt="" />
          </div>
          <div className="flex flex-col ">
            <div className="p-[.8vw] border-b border-[#2c2c2c]">
              {" "}
              <div className="flex justify-between">
                <h2>Variety Tray</h2> <h2>$16.99</h2>
              </div>{" "}
              <p>
                A sampler platter perfect for sharing, featuring a mix of
                vegetable and meat samosas, aloo pakora, chicken pakora, cheese
                pakora, bhujia, and papadam.
              </p>
            </div>
            <div className="p-[.8vw] border-b border-[#2c2c2c]">
              {" "}
              <div className="flex justify-between">
                <h2>Butter Chicken</h2> <h2>$18.99</h2>
              </div>{" "}
              <p>
                Chicken cooked in a creamy tomato sauce, a staple dish
                celebrated for its rich and velvety texture.
              </p>
            </div>
            <div className="p-[.8vw] border-b border-[#2c2c2c]">
              {" "}
              <div className="flex justify-between">
                <h2>Lamb Curry</h2> <h2>$18.99</h2>
              </div>{" "}
              <p>
                Lamb simmered in a fragrant curry sauce with onions, garlic,
                ginger, and a hint of fenugreek creating a robust and aromatic
                dish.
              </p>
            </div>
            <div className="p-[.8vw] border-b border-[#2c2c2c]">
              {" "}
              <div className="flex justify-between">
                <h2>Palak Paneer</h2> <h2>$18.79</h2>
              </div>{" "}
              <p>
                Creamy spinach sauce enveloping soft cheese cubes, a rich and
                comforting classic.
              </p>
            </div>
            <div className="p-[.8vw] border-b border-[#2c2c2c]">
              {" "}
              <div className="flex justify-between">
                <h2>Chicken Tandoori</h2> <h2>$17.99 / $30.99</h2>
              </div>{" "}
              <p>
                Chicken marinated in yogurt, ginger, and garlic, then grilled in
                a clay oven for a smoky and succulent finish.
              </p>
            </div>
            <div className="p-[.8vw] border-b border-[#2c2c2c]">
              {" "}
              <div className="flex justify-between">
                <h2>Chicken Tikka Masala</h2> <h2>$20.49</h2>
              </div>{" "}
              <p>
                Chicken chunks cooked in a rich tomato sauce with light cream,
                giving it a magical creamy texture.
              </p>
            </div>
            <div className="p-[.8vw] border-b border-[#2c2c2c]">
              {" "}
              <div className="flex justify-between">
                <h2>Gobhi Manchurian (V)</h2> <h2>$15.79</h2>
              </div>{" "}
              <p>
                Golden fried cauliflower florets tossed in a savory mix of
                onion, garlic, and chili paste.
              </p>
            </div>
            <div className="p-[.8vw] border-b border-[#2c2c2c]">
              {" "}
              <div className="flex justify-between">
                <h2>Aloo Gobhi (V)</h2> <h2></h2>$18.29
              </div>{" "}
              <p>
                Cauliflower and potatoes sautéed with green peas in a
                traditional seasoning, perfect for those who love a hearty
                vegetable dish.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="E" className="h-full sm:w-[55%] flex flex-col ">
        <div className="h-[40%] sm:w-[30vw] p-[1vw] flex flex-col">
          <h1 className="text-[6vw] sm:text-[2.7vw] font-cinzel font-semibold">
            CLASSIC ROOTS .
          </h1>
          <h1 className="text-[6vw] sm:text-[2.7vw] font-cinzel font-semibold">
            SIGNATURE DISHES.
          </h1>
          <p>
            Every item on our menu reflects decades of tradition — recipes
            passed down, refined through experience, and thoughtfully adapted
            for today’s palate. From bold, aromatic curries to delicate tandoori
            finishes, our dishes are crafted to honor heritage while welcoming
            every kind of guest — whether it’s your first taste or a family
            favorite.
          </p>
        </div>
        <div className="h-[60%] overflow-hidden">
          <Image
            src={"/c.jpg"}
            objectFit="cover"
            width={1200}
            height={400}
            alt=""
            className="h-"
          />
        </div>
      </div>
    </div>
  );
}

export default Menu;

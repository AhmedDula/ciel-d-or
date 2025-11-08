"use client";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import React from "react";

function PhotoSec() {
  gsap.registerPlugin(ScrollTrigger,SplitText)
  useGSAP(()=>{
    const Split = SplitText.create('.e',{
      type:'chars',
      smartWrap:true
    })
    gsap.from(Split.chars,{
      autoAlpha:0,
      stagger:.04,
      scrollTrigger:{
        trigger:'#L',
        start:'top+=70 bottom',
        
      }
    })
  })
  return (
    <div id="L" className="relative h-screen text-[#fde7c5]">
      <Image
        src="/mm.avif"
        alt="Room"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className="absolute inset-0 -z-10 "
      />
      <div className="absolute inset-0 bg-black/40 -z-10 " />
      <div className="h-full z-30 p-5 sm:p-7 flex flex-col justify-between items-start">
       <div className="e">
        <h1 className="text-[10vw]  sm:text-[3.7vw] font-cinzel font-semibold">
          Rooted in
        </h1>
        <h1 className="text-[10vw]  sm:text-[3.7vw] font-cinzel font-semibold">
          Experience
        </h1>
       </div>
        <p className="sm:w-[34vw]  sm:text-[1.56vw] md:text-[1vw]  text-[3.5vw] text-[#d8cbb8]">
          Since 1996, Ciel d&apos;or has been more than a destination for Indian
          cuisine. It has been a space for celebration, connection, and
          tradition reimagined. Each visit is a quiet ritual; the warmth of
          spice, the hum of conversation, the comfort of something familiar yet
          elevated. Whether it’s your first time or your fiftieth, we believe
          the best meals are the ones that stay with you long after the last
          bite.
        </p>
      </div>
    </div>
  );
}

export default PhotoSec;

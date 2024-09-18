"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { features } from "@/data";
import Image from "next/image";

export function BackgroundBeamsDemo() {
  return (


    <>
      <div className="py-12 md:py-20 rounded-xl sm:px-10 lg:px-20 xl:px-0 bg-dd-dark dark:bg-background-darkest flex flex-col items-center justify-center relative w-full px-6 shadow-md">
        <h2 className="fade-in opacity-0 relative flex-col z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 ">
          The Digi Difference.
        </h2>
          <p className="fade-in opacity-0 text-center mx-auto  text-xl md:text-2xl text-gray-200">
            We ensure the highest quality of work, with the fastest delivery
            times.
          </p>
  
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="features-item flex flex-col p-6 lg:p-10 bg-neutral-800/90 dark:bg-card/90 rounded-xl cursor-pointer border-[#293956] border dark:border-border shadow-custom-inset"
            >
              <button
                className="
                       w-16 p-4 
                       animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                          from-neutral-700 to-neutral-800 
                      font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <Image
                  src={feature.icon}
                  width={100}
                  height={100}
                  alt="icon"
                  className="w-8 h-8"
                />
              </button>
  
              <h3 className="text-xl font-bold mt-4 text-white">
                {feature.title}
              </h3>
              <p className=" text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
        <BackgroundBeams />

      </div>
      </>
    );
  }
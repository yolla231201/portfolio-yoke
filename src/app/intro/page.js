"use client";

import { ChevronDown } from "lucide-react";
import Orb from "../../components/Orb";

export default function Intro() {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white px-6 bg-[#050712]"
    >
      {/* Orb background */}
      <div className="absolute inset-0">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center flex-1">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4 leading-tight font-[Merriweather]">
          Yohanes Kefi
        </h1>

        <p className="uppercase font-semibold text-sm sm:text-base tracking-wide">
          WEB & GRAPHIC DESIGN
        </p>
      </div>

      {/* Learn More di paling bawah */}
      <a
        href="#about"
        className="absolute bottom-10 flex flex-col items-center space-y-2 animate-bounce cursor-pointer z-10"
      >
        <span className="uppercase text-sm font-semibold tracking-wide">
          Learn More
        </span>
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}

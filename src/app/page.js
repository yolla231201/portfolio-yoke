"use client";
import Intro from "./intro/page";
import About from "./about/page";
import What_i_do from "./what-i-do/page";
import Skills from "./skills/page";
import Experience from "./experience/page";
import Portfolio from "./portfolio/page";
import Contact from "./contact/page";
import Footer from "./footer/page";
import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function HomePage() {
  const sections = [
    { id: "intro", label: "Intro" },
    { id: "about", label: "About" },
    { id: "what-i-do", label: "What I Do" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  const [activeSection, setActiveSection] = useState("intro");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "intro";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop - window.innerHeight / 2 + 50;
          if (window.scrollY >= top) {
            current = section.id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300); // lebih cepat
  };

  return (
    <main className={`scroll-smooth relative ${poppins.className}`}>
      {/* Sidebar Desktop */}
      {activeSection !== "intro" && (
        <div className="hidden md:flex fixed right-10 top-1/2 -translate-y-1/2 flex-col gap-5 z-50">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <div
                key={section.id}
                className="relative flex items-center group"
              >
                <span
                  className={`absolute right-full mr-4 top-1/2 -translate-y-1/2
                    px-3 py-1 rounded bg-blue-500 text-white text-sm whitespace-nowrap
                    transition-all duration-500 ease-in-out
                    ${
                      isActive
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
                    }`}
                >
                  {section.label}
                </span>
                <a
                  href={`#${section.id}`}
                  className={`w-4 h-4 rounded-full transition-all duration-300 transform cursor-pointer
                    ${isActive ? "bg-blue-500 scale-125" : "bg-gray-400"}
                    group-hover:scale-125`}
                  title={section.label}
                ></a>
              </div>
            );
          })}
        </div>
      )}

      {/* Tombol Mobile */}
      <button
        className="md:hidden fixed top-5 right-5 z-50 h-6 flex items-center"
        onClick={toggleMenu}
      >
        {/* Wrapper teks dengan marquee */}
        <div className="relative h-full overflow-hidden flex items-center">
          {isAnimating ? (
            <motion.div
              className="relative h-full overflow-hidden"
              animate={{ y: ["0%", "-100%"] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <div className="flex flex-col">
                {Array(15) // ulang teks 15 kali agar terlihat banyak
                  .fill(0)
                  .map((_, i) => (
                    <span
                      key={i}
                      className="text-black font-bold text-sm tracking-widest"
                    >
                      {menuOpen ? "close" : "open"}
                    </span>
                  ))}
              </div>
            </motion.div>
          ) : (
            <span
              className={`font-bold text-sm tracking-widest transition-colors duration-300 ${
                menuOpen ? "text-black" : "text-white"
              }`}
            >
              {menuOpen ? "close" : "open"}
            </span>
          )}
        </div>

        {/* Icon + */}
        <AiOutlinePlus
          size={16}
          className={`transform transition-transform duration-500 ml-0 ${
            menuOpen ? "rotate-45 text-black" : "rotate-0 text-white"
          }`}
        />
      </button>

      {/* Sidebar Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-white shadow-lg z-40 transform transition-transform duration-500 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <ul className="flex flex-col gap-6 p-10 mt-10 text-lg font-semibold text-gray-800">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={() => setMenuOpen(false)}
                className={`block transition-colors duration-300 ${
                  activeSection === section.id
                    ? "text-blue-500"
                    : "hover:text-blue-500"
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Konten */}
      <Intro />
      <About />
      <What_i_do />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}

"use client";
import React, { useState } from "react";
import {
  FaBook,
  FaPaintBrush,
  FaLaptopCode,
  FaMicrochip,
} from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      title: "Ilmu Komputer - UNWIRA",
      company: "UNWIRA",
      date: "2019 - 2023",
      description:
        "Belajar ilmu komputer, pemrograman, dan dasar-dasar desain grafis.",
      icon: <FaBook size={20} color="#fff" />,
    },
    {
      title: "Tim Promosi & Desain Grafis",
      company: "Pendidikan Biologi UNWIRA",
      date: "Mar 2021 - Mei 2021",
      description: "Membuat desain promosi dan materi visual.",
      icon: <FaPaintBrush size={20} color="#fff" />,
    },
    {
      title: "Desain Grafis & Web Developer",
      company: "Pendidikan Biologi UNWIRA",
      date: "Mar 2023 - Des 2023",
      description: "Mendesain materi digital dan membangun website internal.",
      icon: <FaLaptopCode size={20} color="#fff" />,
    },
    {
      title: "Project Skripsi: IoT & WSN",
      company: "UNWIRA",
      date: "2023",
      description: "Mengembangkan proyek skripsi berbasis IoT dan WSN.",
      icon: <FaMicrochip size={20} color="#fff" />,
    },
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      date: "2023 - Sekarang",
      description: "Membangun website untuk klien dari berbagai bidang.",
      icon: <FaLaptopCode size={20} color="#fff" />,
    },
    {
      title: "Freelance Desain Grafis",
      company: "Self-employed",
      date: "2023 - Sekarang",
      description: "Mendesain branding, poster, dan materi digital.",
      icon: <FaPaintBrush size={20} color="#fff" />,
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="experience" className="relative py-16 bg-gray-400 px-4 sm:px-10">
      <h2 className="text-3xl font-bold text-center mb-20 text-gray-800">
        Experience
      </h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Garis timeline tengah (desktop only) */}
        <div className="hidden md:block absolute left-1/2 top-0 transform -translate-x-1/2 h-full border-l-4 border-indigo-300"></div>

        <div className="space-y-16">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row w-full md:justify-between items-center md:items-start`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card */}
                <div
                  className={`md:w-1/2 ${
                    isLeft
                      ? "md:pr-20 md:justify-end"
                      : "md:pl-20 md:justify-start md:ml-auto"
                  } flex justify-center md:relative`}
                >
                  <div
                    className={`inline-block p-6 rounded-lg shadow-md transition-all duration-300 w-full md:w-auto ${
                      isHovered ? "bg-indigo-500" : "bg-gray-800"
                    }`}
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-300">{exp.company}</p>
                    <p className="text-sm text-gray-200">{exp.date}</p>
                    <p className="mt-2 text-gray-200">{exp.description}</p>

                    {/* Segitiga arah (desktop only) */}
                    {isLeft ? (
                      <div
                        className={`hidden md:block absolute top-5 right-[-25px] w-0 h-0
                          border-t-[28px] border-b-[28px] border-l-[28px]
                          border-t-transparent border-b-transparent
                          ${
                            isHovered
                              ? "border-l-indigo-500"
                              : "border-l-gray-800"
                          }`}
                      ></div>
                    ) : (
                      <div
                        className={`hidden md:block absolute top-5 left-[-25px] w-0 h-0
                          border-t-[28px] border-b-[28px] border-r-[28px]
                          border-t-transparent border-b-transparent
                          ${
                            isHovered
                              ? "border-r-indigo-500"
                              : "border-r-gray-800"
                          }`}
                      ></div>
                    )}
                  </div>
                </div>

                {/* Lingkaran icon */}
                <div
                  className={`absolute md:left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 
                    w-12 h-12 rounded-full flex items-center justify-center mt-6 md:mt-0
                    ${isHovered ? "bg-indigo-500" : "bg-gray-800"}
                    transition-colors duration-300`}
                >
                  {exp.icon}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
                  }
    

"use client";
import React from "react";
import {
  SiReact,
  SiTailwindcss,
  SiVuedotjs,
  SiNextdotjs,
  SiAdobe,
} from "react-icons/si";

export default function Portfolio() {
  const projects = [
    {
      title: "Timor Trans - Travel & Bus Agent",
      description:
        "Website travel & agen bus yang menyediakan informasi rute, jadwal, armada, dan pemesanan tiket online untuk perjalanan antar kota.",
      image: "/timor-trans.jpg",
      tech: [
        <SiNextdotjs key="react" color="#000000" />,
        <SiTailwindcss key="tailwind" color="#06B6D4" />,
      ],
      link: "https://timor-travel.vercel.app/",
    },
    {
      title: "Web Profil & Administrasi Desa",
      description:
        "Platform web untuk profil desa, informasi layanan, dan sistem administrasi desa berbasis digital.",
      image: "/web-profil.jpg",
      tech: [
        <SiReact key="react" color="#61DAFB" />,
        <SiTailwindcss key="tailwind" color="#06B6D4" />,
      ],
      link: "#",
    },
    {
      title: "Web Absensi",
      description:
        "Sistem absensi online untuk karyawan atau siswa, memudahkan monitoring kehadiran secara digital.",
      image: "/web-absensi.jpg",
      tech: [
        <SiReact key="react" color="#61DAFB" />,
        <SiTailwindcss key="tailwind" color="#06B6D4" />,
      ],
      link: "https://crtyokef2025absensi-pemdes-oelneke.vercel.app/",
    },
    {
      title: "Portfolio Desain",
      description:
        "Karya desain grafis profesional untuk branding, promosi, dan keperluan digital maupun cetak.",
      image: "/desain-grafis.jpg",
      tech: [
        <SiAdobe key="Photoshop" color="#001E36" />,
        <SiAdobe key="Illustrator" color="#FF9A00" />,
      ],
      link: "https://drive.google.com/drive/folders/1DxU0Yy3fETrQyB9YPyqsuEFsAxfhKPPi?usp=sharing",
    },
  ];

  return (
    <section id="portfolio" className="p-16 bg-gray-500">
      <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex space-x-2 text-2xl text-gray-700">
                {project.tech.map((icon) => icon)}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

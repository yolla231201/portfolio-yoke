import { Code, Palette, MonitorSmartphone, PenTool } from "lucide-react";

export default function WhatIDo() {
  const services = [
    {
      title: "Web Development",
      desc: "Membangun website modern, responsif, dan cepat menggunakan Next.js & Tailwind CSS.",
      icon: <Code className="w-10 h-10 text-teal-400" />,
    },
    {
      title: "Graphic Design",
      desc: "Membuat desain visual seperti poster, banner, logo, hingga branding untuk bisnis.",
      icon: <Palette className="w-10 h-10 text-teal-400" />,
    },
    {
      title: "UI/UX Design",
      desc: "Mendesain antarmuka yang simple, clean, dan mudah digunakan untuk pengalaman terbaik.",
      icon: <MonitorSmartphone className="w-10 h-10 text-teal-400" />,
    },
    {
      title: "Illustration",
      desc: "Ilustrasi kreatif untuk kebutuhan digital maupun cetak dengan gaya yang unik.",
      icon: <PenTool className="w-10 h-10 text-teal-400" />,
    },
  ];

  return (
    <section
      id="what-i-do"
      className="flex flex-col items-center justify-center bg-gray-800 text-white px-6 py-20"
    >
      <div className="max-w-6xl w-full text-center space-y-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold border-b-4 border-teal-400 inline-block pb-2">
          What I Do
        </h2>
        <p className="text-lg text-gray-300">
          Berikut beberapa hal yang saya kerjakan dalam dunia{" "}
          <span className="text-teal-400">Web & Graphic Design</span>.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            {service.icon}
            <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { Code, Palette, Wrench, Lightbulb } from "lucide-react";
import {
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiVuedotjs,
  SiVite,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiArduino,
} from "react-icons/si";

import arduino from "../../../public/arduino.svg";

export default function Skills() {
  const devSkills = [
    { name: "JavaScript", icon: <SiJavascript size={26} />, color: "#F7DF1E" },
    { name: "HTML5", icon: <SiHtml5 size={26} />, color: "#E34F26" },
    { name: "Tailwind", icon: <SiTailwindcss size={35} />, color: "#06B6D4" },
    { name: "Vue", icon: <SiVuedotjs size={35} />, color: "#42B883" },
    { name: "Vite", icon: <SiVite size={35} />, color: "#646CFF" },
    { name: "React", icon: <SiReact size={35} />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs size={35} />, color: "#ffffff" },
    { name: "Node.js", icon: <SiNodedotjs size={35} />, color: "#339933" },
    { name: "Angular", icon: <SiArduino size={35} />, color: "#06B6D4" },
  ];

  const designSkills = [
    {
      name: "Photoshop",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 511.76 498.97"
          width="60"
          height="60"
        >
          <title>adobe-photoshop</title>
          {/* Background biru gelap */}
          <rect width="511.76" height="498.97" rx="90.62" fill="#001e36" />
          {/* Logo biru terang */}
          <path
            d="M115.24,349.91V130.53c0-1.59.68-2.4,2.06-2.4,3.65,0,7,0,12-.17s10.47-.23,16.31-.34l18.54-.35q9.78-.17,19.39-.17,26.09,0,44,6.52a76.4,76.4,0,0,1,28.66,17.51,67.06,67.06,0,0,1,15.62,24.21A80.31,80.31,0,0,1,276.61,203q0,27.48-12.7,45.32a71.82,71.82,0,0,1-34.33,25.92c-14.42,5.38-30.45,7.2-48.07,7.2-5,0-8.58-.05-10.64-.17s-5.15-.17-9.27-.17v68.49a2.72,2.72,0,0,1-2.32,3.09,2.49,2.49,0,0,1-.77,0H117.64C116,352.65,115.24,351.74,115.24,349.91ZM161.6,169.33v71.55q4.46.35,8.24.34h11.33a80.56,80.56,0,0,0,24.55-3.92A37,37,0,0,0,223.23,226q6.69-7.89,6.69-22a34.74,34.74,0,0,0-5-18.88A32,32,0,0,0,210,172.93,63.68,63.68,0,0,0,185,168.64q-8.25,0-14.59.17t-8.76.52Z"
            fill="#31a8ff"
          />
          <path
            d="M409.35,227.87a80,80,0,0,0-20.43-7.21,108.28,108.28,0,0,0-23.86-2.75,44.38,44.38,0,0,0-12.87,1.55,11.55,11.55,0,0,0-6.7,4.29,10.79,10.79,0,0,0-1.71,5.84,9.08,9.08,0,0,0,2.06,5.49,23.25,23.25,0,0,0,7.21,5.66,141.8,141.8,0,0,0,15.1,7,150,150,0,0,1,32.79,15.62,50,50,0,0,1,16.82,17.68,47.17,47.17,0,0,1,5,22,49.41,49.41,0,0,1-8.24,28.33,54.23,54.23,0,0,1-23.86,19.05Q375,357.3,352,357.3a140.51,140.51,0,0,1-29-2.75,92.44,92.44,0,0,1-21.8-6.87,4.44,4.44,0,0,1-2.41-4.12V306.49a2,2,0,0,1,.86-1.89,1.66,1.66,0,0,1,1.89.17A91.62,91.62,0,0,0,328,315.24a108.66,108.66,0,0,0,25.07,3.26q12,0,17.68-3.09a9.7,9.7,0,0,0,5.66-8.92q0-4.47-5.15-8.59T350.3,288a126.06,126.06,0,0,1-30.38-15.45,52.42,52.42,0,0,1-16.14-18,47.35,47.35,0,0,1-5-21.8A49.21,49.21,0,0,1,306,206.93a52.37,52.37,0,0,1,22.32-19.57q15.1-7.55,37.76-7.55a167.13,167.13,0,0,1,26.44,1.88,69.58,69.58,0,0,1,18.4,5,3.13,3.13,0,0,1,2.06,1.89,9.31,9.31,0,0,1,.34,2.57v34.68a2.3,2.3,0,0,1-1,2.06A3.33,3.33,0,0,1,409.35,227.87Z"
            fill="#31a8ff"
          />
        </svg>
      ),
    },

    {
      name: "Illustrator",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 511.45 498.66"
          width="60"
          height="60"
        >
          <defs>
            <style>{`.a{fill:#300;}.b{fill:#ff9a00;}`}</style>
          </defs>
          <title>adobe-illustrator</title>
          <rect className="a" width="511.45" height="498.66" rx="90.57" />
          <path
            className="b"
            d="M247.84,299.26H168.58l-16.12,50.09a4,4,0,0,1-4.12,3.09H108.2q-3.44,0-2.4-3.78L174.42,151q1-3.09,2.06-7a74.51,74.51,0,0,0,1.37-13.9,2.11,2.11,0,0,1,1.8-2.4,2,2,0,0,1,.6,0H234.8c1.6,0,2.51.57,2.75,1.71L315.43,349c.69,2.28,0,3.43-2.06,3.43h-44.6a3.17,3.17,0,0,1-3.43-2.4ZM180.94,256h54.2q-2.05-6.87-4.8-15.44t-5.83-18.36l-6.18-19.55q-3.09-9.78-5.66-18.88T208,167.17h-.34a276.76,276.76,0,0,1-7.21,27.44q-4.8,15.45-9.78,31.57T180.94,256Z"
          />
          <path
            className="b"
            d="M361.74,164.08a24.9,24.9,0,0,1-18.87-7.55,27.12,27.12,0,0,1-7.2-19.56,25.17,25.17,0,0,1,7.72-19,26.52,26.52,0,0,1,19-7.38q12.35,0,19.38,7.38a26.52,26.52,0,0,1,7,19,26.78,26.78,0,0,1-7.38,19.56A26.32,26.32,0,0,1,361.74,164.08ZM338.07,349V185c0-2.06.91-3.09,2.74-3.09H383c1.82,0,2.74,1,2.74,3.09V349c0,2.28-.91,3.43-2.74,3.43H341.16C339.1,352.44,338.07,351.29,338.07,349Z"
          />
        </svg>
      ),
    },
    {
      name: "Canva",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 508 508"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
        >
          <g transform="matrix(.26718 0 0 .26718 0 0)">
            <circle cx="950" cy="950" r="950" fill="#7d2ae7" />
            <circle cx="950" cy="950" r="950" fill="url(#Radial1)" />
            <circle cx="950" cy="950" r="950" fill="url(#Radial2)" />
            <circle cx="950" cy="950" r="950" fill="url(#Radial3)" />
            <circle cx="950" cy="950" r="950" fill="url(#Radial4)" />
          </g>
          <path
            d="M446.744 276.845c-.665 0-1.271.43-1.584 1.33-4.011 11.446-9.43 18.254-13.891 18.254-2.563 0-3.6-2.856-3.6-7.336 0-11.21 6.71-34.982 10.095-45.82.392-1.312.646-2.485.646-3.483 0-3.15-1.722-4.696-5.987-4.696-4.598 0-9.547 1.8-14.36 10.233-1.663-7.435-6.691-10.683-13.715-10.683-8.12 0-15.965 5.224-22.421 13.696-6.456 8.471-14.048 11.25-19.76 9.88 4.108-10.057 5.634-17.57 5.634-23.145 0-8.746-4.324-14.028-11.308-14.028-10.624 0-16.747 10.134-16.747 20.797 0 8.237 3.736 16.708 11.954 20.817-6.887 15.573-16.943 29.66-20.758 29.66-4.93 0-6.379-24.123-6.105-41.38.176-9.9.998-10.408.998-13.401 0-1.722-1.115-2.896-5.595-2.896-10.448 0-13.676 8.844-14.165 18.998a50.052 50.052 0 01-1.8 11.406c-4.363 15.573-13.363 27.39-19.232 27.39-2.72 0-3.463-2.72-3.463-6.28 0-11.21 6.28-25.219 6.28-37.173 0-8.784-3.854-14.34-11.112-14.34-8.55 0-19.858 10.173-30.56 29.229 3.521-14.595 4.97-28.721-5.459-28.721a14.115 14.115 0 00-6.476 1.683 3.689 3.689 0 00-2.113 3.56c.998 15.535-12.521 55.329-25.336 55.329-2.328 0-3.463-2.524-3.463-6.593 0-11.23 6.691-34.943 10.056-45.801.43-1.409.666-2.622.666-3.678 0-2.974-1.84-4.5-6.007-4.5-4.578 0-9.547 1.741-14.34 10.174-1.683-7.435-6.711-10.683-13.735-10.683-11.523 0-24.397 12.19-30.051 28.076-7.572 21.208-22.832 41.692-43.375 41.692-18.645 0-28.486-15.515-28.486-40.03 0-35.392 25.982-64.308 45.253-64.308 9.215 0 13.617 5.869 13.617 14.869 0 10.897-6.085 15.964-6.085 20.112 0 1.272 1.057 2.524 3.15 2.524 8.374 0 18.234-9.841 18.234-23.262 0-13.422-10.897-23.243-30.168-23.243-31.851 0-63.898 32.047-63.898 73.113 0 32.673 16.121 52.374 44 52.374 19.017 0 35.628-14.79 44.588-32.047 1.018 14.302 7.513 21.776 17.413 21.776 8.804 0 15.925-5.243 21.364-14.458 2.094 9.645 7.65 14.36 14.87 14.36 8.275 0 15.201-5.243 21.794-14.986-.097 7.65 1.644 14.85 8.276 14.85 3.13 0 6.867-.725 7.533-3.464 6.984-28.877 24.24-52.453 29.523-52.453 1.565 0 1.995 1.507 1.995 3.287 0 7.846-5.537 23.928-5.537 34.2 0 11.092 4.716 18.43 14.459 18.43 10.8 0 21.775-13.227 29.092-32.556 2.29 18.058 7.24 32.633 14.987 32.633 9.508 0 26.392-20.014 36.625-41.203 4.01.509 10.036.372 15.827-3.717-2.465 6.241-3.912 13.07-3.912 19.897 0 19.663 9.39 25.18 17.47 25.18 8.785 0 15.907-5.243 21.365-14.458 1.8 8.315 6.398 14.34 14.85 14.34 13.225 0 24.71-13.519 24.71-24.612 0-2.934-1.252-4.715-2.72-4.715z"
            fill="#fff"
          />
          <defs>
            <radialGradient
              id="Radial1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="scale(1469.491) rotate(-49.416 1.37 .302)"
            >
              <stop offset="0" stopColor="#6420ff" />
              <stop offset="1" stopColor="#6420ff" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="Radial2"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="rotate(54.703 42.717 594.194) scale(1657.122)"
            >
              <stop offset="0" stopColor="#00c4cc" />
              <stop offset="1" stopColor="#00c4cc" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="Radial3"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(1023 -1030 473.711 470.491 367 1684)"
            >
              <stop offset="0" stopColor="#6420ff" />
              <stop offset="1" stopColor="#6420ff" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="Radial4"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(595.999 1372 -2298.41 998.431 777 256)"
            >
              <stop offset="0" stopColor="#00c4cc" stopOpacity=".73" />
              <stop offset="0" stopColor="#00c4cc" />
              <stop offset="1" stopColor="#00c4cc" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      ),
    },
  ];

  const tools = [
    "Photoshop, Illustrator, Canva",
    "Git + GitHub",
    "Next.js + Tailwind",
    "Arduino IDE, MQTT",
  ];
  const knowledge = [
    "Responsive Design",
    "Wireless Sensor Networks & Protocols",
    "JavaScript ES6+ / React / Vue / Next.js",
    "Illustration & Digital Painting",
  ];

  return (
    <section id="skills" className="bg-gray-900 text-white px-20 py-28">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">Skills</h2>
        <div className="w-20 h-1 bg-teal-400 mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-20">
          {/* Development */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Code className="w-6 h-6 text-teal-400" />
              <h3 className="text-xl font-semibold uppercase">Development</h3>
            </div>
            <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(69px,auto))] justify-start ml-7">
              {devSkills.map((skill, i) => (
                <div
                  key={i}
                  title={skill.name}
                  className="flex items-center justify-center w-16 h-16 rounded-full border border-gray-500 transition text-2xl cursor-pointer"
                  style={{
                    transition:
                      "background-color 0.3s, color 0.3s, border-color 0.3s",
                    color: skill.color,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = skill.color;
                    e.currentTarget.style.color = "#000"; // icon kontras saat hover
                    e.currentTarget.style.borderColor = "transparent"; // hilangkan border
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = skill.color; // kembali brand color
                    e.currentTarget.style.borderColor = "#6B7280"; // border-gray-500 kembali
                  }}
                >
                  {skill.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Design + Tools + Knowledge */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-4">
              <Palette className="w-6 h-6 text-teal-400" />
              <h3 className="text-xl font-semibold uppercase">Design</h3>
            </div>
            <div className="flex flex-wrap gap-4 mb-6">
              {designSkills.map((skill, i) => (
                <div key={i} title={skill.name}>
                  {skill.icon}
                </div>
              ))}
            </div>

            <div className="flex gap-8 mt-4">
              {/* Tools */}
              <div className="flex flex-col">
                <div className="flex items-center space-x-2 mb-2">
                  <Wrench className="w-6 h-6 text-teal-400" />
                  <h3 className="text-xl font-semibold uppercase">Tools</h3>
                </div>
                <div className="flex flex-col gap-2">
                  {tools.map((tool, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 bg-gray-800 rounded shadow text-gray-300 hover:bg-teal-500 hover:text-white transition"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              {/* Knowledge */}
              <div className="flex flex-col">
                <div className="flex items-center space-x-2 mb-2">
                  <Lightbulb className="w-6 h-6 text-teal-400" />
                  <h3 className="text-xl font-semibold uppercase">Knowledge</h3>
                </div>
                <div className="flex flex-col gap-2">
                  {knowledge.map((item, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 bg-gray-800 rounded shadow text-gray-300 hover:bg-teal-500 hover:text-white transition"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

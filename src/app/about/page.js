import Image from "next/image";
import img1 from "../../../public/yoke.png";
import Lanyard from "../../components/Lanyard";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-56 flex items-center justify-center bg-gray-900 text-white px-20"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Kiri: Tulisan */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold border-b-4 border-teal-400 inline-block pb-2">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Halo 👋 saya <span className="font-semibold">Yohanes Kefi</span>,
            seorang{" "}
            <span className="text-teal-400">Web & Graphic Designer</span>{" "}
            sekaligus developer. Saya suka menggabungkan kreativitas dengan
            teknologi untuk membuat website yang fungsional, menarik, dan mudah
            digunakan.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Fokus saya adalah desain modern, clean UI/UX, dan pengembangan web
            menggunakan{" "}
            <span className="font-semibold">Next.js + Tailwind CSS</span>.
          </p>
        </div>

        {/* Kanan: Foto */}
        <div className="flex justify-center md:justify-end">
          {/* <Image
            src={img1}
            alt="Foto Yohanes Kefi"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg object-cover"
            priority
          /> */}
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} scale={1.2} />
        </div>
      </div>
    </section>
  );
}

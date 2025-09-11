"use client";
import React from "react";
import { SiWhatsapp, SiGmail, SiInstagram, SiFacebook } from "react-icons/si";

export default function Footer() {
  return (
    <section id="footer">
      <footer id="footer" className="bg-gray-800 text-gray-100 py-12 px-10">
        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
          {/* Informasi Kontak */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
            <p className="flex items-center gap-2">
              <SiWhatsapp className="text-green-500" /> +62 81292814505
            </p>
            <p className="flex items-center gap-2">
              <SiGmail className="text-red-500" /> yohaneskefi170845@gamil.com
            </p>
            <p>Desa Oelneke, Kecamatan Muci, TTU, NTT - Indonesia</p>
          </div>

          {/* Media Sosial */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Media Sosial</h4>
            <div className="flex gap-4 text-2xl">
              <a
                href="https://www.instagram.com/_insm___/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiInstagram className="text-pink-500 hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://web.facebook.com/yohaneskefi231201"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiFacebook className="text-blue-600 hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="text-green-500 hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Tentang / Deskripsi */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tentang Portofolio</h4>
            <p>
              Web portofolio ini menampilkan proyek-proyek saya dalam desain
              grafis, web development, dan aplikasi digital. Semua karya dibuat
              dengan profesional dan kreatif.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400 h-5">
          &copy; {new Date().getFullYear()} Yohanes Kefi. Semua hak cipta
          dilindungi.
        </div>
      </footer>
    </section>
  );
}

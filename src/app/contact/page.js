"use client";
import React, { useState } from "react";
import { SiWhatsapp, SiGmail, SiInstagram, SiFacebook } from "react-icons/si";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_n0ob09e"; // Service ID EmailJS
    const templateID = "template_y8wf1bf"; // Template ID EmailJS
    const publicKey = "vVQOF8_JCWB3BIClt"; // Public Key EmailJS

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email, // Email user
      message: formData.message,
      to_email: "yohaneskefi170845@gmail.com", // Email tujuan
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert(`Terima kasih, ${formData.name}! Pesan Anda telah terkirim.`);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Maaf, terjadi kesalahan. Silakan coba lagi nanti.");
        console.log(error.text);
      });
  };

  return (
    <section id="contact" className="p-16 bg-gray-400 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12">Hubungi Kami</h2>
      <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-1">
        {/* Form Kontak */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Nama Anda"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Anda"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Pesan Anda"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
}

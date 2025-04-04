// src/App.js
import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Përshëndetje, unë jam <span className="text-blue-500">Tersh</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-gray-400"
        >
          Zhvillues webi & krijues përmbajtjeje kreative
        </motion.p>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-900">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2 border-gray-700">
          Rreth Meje
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Jam një zhvillues pasionant që krijon faqe të bukura, funksionale dhe të përshtatshme për çdo pajisje.
          Pëlqej të eksperimento me teknologji si React, Tailwind, dhe animacione të smooth me Framer Motion.
        </p>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-semibold mb-6 border-b pb-2 border-gray-700">
          Projektet e Mia
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-bold mb-2">Website Portfolio</h3>
            <p className="text-gray-400">Një faqe personale me dizajn responsive dhe animacione tërheqëse.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-bold mb-2">App për Menaxhimin e Projekteve</h3>
            <p className="text-gray-400">Organizo projektet, cakto detyra dhe ruaj progresin në mënyrë efikase.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 md:px-20 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-4">Kontakto me mua</h2>
        <p className="text-gray-400 mb-6">Email: tersh@example.com</p>
        <a
          href="https://github.com/Aleaalea-code"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition"
        >
          GitHub-i im
        </a>
      </section>
    </div>
  );
}

export default App;

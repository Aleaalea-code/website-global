import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center px-4 text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Mirësevini në Website Global 🌍
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Krijuar me dashni, TailwindCSS & Framer Motion – faqja jote, ndryshe nga të tjerat!
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Shiko më shumë
        </motion.a>
      </motion.div>
    </div>
  );
}

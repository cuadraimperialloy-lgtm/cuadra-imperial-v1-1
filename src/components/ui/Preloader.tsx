"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#141414] flex flex-col items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative w-28 h-28 sm:w-36 sm:h-36">
              <Image
                src="/images/cuadra-imperial-loy-dorado.svg"
                alt="Cuadra Imperial Loy"
                fill
                priority
                className="object-contain drop-shadow-[0_4px_20px_rgba(168,137,79,0.35)]"
              />
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="font-serif tracking-[0.25em] text-[#EFEAE1] text-xs sm:text-sm uppercase font-semibold">
                Cuadra Imperial Loy
              </span>
              <span className="font-mono text-[9px] tracking-[0.3em] text-[#A8894F] uppercase animate-pulse">
                Jalisco · Países Bajos
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

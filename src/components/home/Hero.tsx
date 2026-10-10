"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX, ArrowDown } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLocale();

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      if (!videoRef.current.muted) {
        videoRef.current.play();
      }
    }
  };

  const scrollToHorses = () => {
    const el = document.getElementById("caballos");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-[#141414] text-[#EFEAE1]">
      
      {/* Background Full-Screen Video (Ganadería Favier style) */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.72] contrast-[1.08]"
          poster="/images/hero.jpg"
        >
          <source src="https://cdn.coverr.co/videos/coverr-a-black-horse-running-in-the-snow-3733/1080p.mp4" type="video/mp4" />
        </video>

        {/* Multi-layered luxury vignette & gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-black/50" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#141414]/40 to-[#141414]/80 pointer-events-none" />
      </div>

      {/* Main Full-Screen Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center pt-16">
        
        {/* Eyebrow / Origen */}
        <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#D4AF37] mb-4 sm:mb-6 block drop-shadow-md">
          {t("hero.eyebrow")}
        </span>

        {/* Headline: Dos golpes (Favier style) */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.05] text-[#EFEAE1] font-semibold mb-6 tracking-tight drop-shadow-lg">
          {t("hero.title")}{" "}
          <i className="italic font-serif font-normal text-[#D4AF37] block sm:inline">
            {t("hero.titleItalic")}
          </i>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-sm sm:text-lg text-[#C9C2B5] leading-relaxed max-w-2xl mb-8 font-light drop-shadow">
          {t("hero.subtitle")}
        </p>

        {/* Vocabulario de conocedor en una línea (PDF / Favier) */}
        <div className="py-2.5 px-5 rounded-full bg-[#141414]/80 backdrop-blur-md border border-[#D4AF37]/40 text-[11px] sm:text-xs font-mono text-[#D4AF37] mb-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 shadow-2xl">
          <span>KFPS</span>
          <span className="text-[#9A958B]">•</span>
          <span>Pasaporte de Holanda</span>
          <span className="text-[#9A958B]">•</span>
          <span>Inspección</span>
          <span className="text-[#9A958B]">•</span>
          <span>Alzada</span>
          <span className="text-[#9A958B]">•</span>
          <span>Video sin cortes</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={scrollToHorses}
            className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-[#F5D061] text-[#141414] font-medium text-xs uppercase tracking-widest rounded transition-all duration-300 shadow-[0_4px_25px_rgba(168,137,79,0.3)] flex items-center justify-center gap-2"
          >
            <span>{t("hero.cta")}</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={toggleAudio}
            className="w-full sm:w-auto px-7 py-4 border border-[#D4AF37]/60 hover:border-[#D4AF37] bg-[#141414]/70 backdrop-blur-md text-[#EFEAE1] hover:text-[#D4AF37] font-medium text-xs uppercase tracking-widest rounded transition-all flex items-center justify-center gap-2"
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-[#D4AF37]" /> : <Volume2 className="w-4 h-4 text-[#D4AF37]" />}
            <span>{isMuted ? t("hero.sound") : t("hero.mute")}</span>
          </button>
        </div>

      </div>

      {/* Floating Audio Badge Bottom-Right */}
      <div className="absolute bottom-8 right-6 sm:right-10 z-20 hidden sm:flex items-center gap-3 p-3 rounded-full bg-[#141414]/85 backdrop-blur-md border border-[#34312C]">
        <button
          type="button"
          onClick={toggleAudio}
          className="p-2 rounded-full bg-[#1D1C1A] text-[#D4AF37] hover:text-[#EFEAE1] transition-colors"
          title={isMuted ? "Activar sonido real" : "Silenciar"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
        <span className="font-mono text-[10px] text-[#C9C2B5] pr-2 uppercase tracking-wider">
          {isMuted ? "Sonido de cascos apagado" : "Sonido real activado"}
        </span>
      </div>

      

    </section>
  );
}

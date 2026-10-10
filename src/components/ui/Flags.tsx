"use client";

export function MexicoFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg className={`inline-block rounded-[2px] overflow-hidden shadow-sm border border-white/20 ${className}`} viewBox="0 0 640 480">
      <path fill="#006341" d="M0 0h213.3v480H0z"/>
      <path fill="#ffffff" d="M213.3 0h213.4v480H213.3z"/>
      <path fill="#c8102e" d="M426.7 0H640v480H426.7z"/>
      <circle cx="320" cy="240" r="32" fill="#A8894F"/>
    </svg>
  );
}

export function UsaFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg className={`inline-block rounded-[2px] overflow-hidden shadow-sm border border-white/20 ${className}`} viewBox="0 0 640 480">
      <path fill="#bd3d44" d="M0 0h640v480H0z"/>
      <path stroke="#ffffff" strokeWidth="37" d="M0 55.5h640M0 129.5h640M0 203.5h640M0 277.5h640M0 351.5h640M0 425.5h640"/>
      <path fill="#192f5d" d="M0 0h260v260H0z"/>
      <circle cx="65" cy="65" r="14" fill="#fff"/>
      <circle cx="195" cy="65" r="14" fill="#fff"/>
      <circle cx="130" cy="130" r="14" fill="#fff"/>
      <circle cx="65" cy="195" r="14" fill="#fff"/>
      <circle cx="195" cy="195" r="14" fill="#fff"/>
    </svg>
  );
}

export function NetherlandsFlag({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg className={`inline-block rounded-[2px] overflow-hidden shadow-sm border border-white/20 ${className}`} viewBox="0 0 640 480">
      <path fill="#ae1c28" d="M0 0h640v160H0z"/>
      <path fill="#ffffff" d="M0 160h640v160H0z"/>
      <path fill="#21468b" d="M0 320h640v160H0z"/>
    </svg>
  );
}

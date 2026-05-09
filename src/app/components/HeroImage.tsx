import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="hero-scan px-4 py-4 overflow-hidden relative">
      <style>{`
        @keyframes heroScan {
          0%   { top: -4px; }
          100% { top: 100%; }
        }
        .hero-scan .hero-scan-line {
          position: absolute; left: 0; top: -4px; z-index: 20;
          width: 100%; height: 4px;
          background: linear-gradient(to right, rgba(0,229,255,0), rgba(0,229,255,0.8), rgba(0,229,255,0));
          filter: blur(1px);
          pointer-events: none; opacity: 0;
        }
        .hero-scan:hover .hero-scan-line {
          opacity: 1;
          animation: heroScan 2s linear infinite;
        }
        .hero-scan:hover { background: rgba(0,229,255,0.03); }
      `}</style>

      <div className="hero-scan-line" />

      <div className="relative w-full h-full overflow-hidden">
        <Image
          src="/hero-reference.jpg"
          alt="Muhammad Awais portfolio hero"
          fill
          priority
          className="object-cover object-[50%_15%] opacity-70 grayscale"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#011018]/70 via-transparent to-[#011018]/65" />
        <div className="absolute inset-3 border-2 border-white/60 pointer-events-none" />

        <p className="absolute text-[16px] leading-[24px] font-bold tracking-[0.17em] uppercase text-[#88D7EC] [text-shadow:0_0_8px_rgba(0,229,255,0.4)] top-7 left-8 [font-family:var(--font-orbitron),sans-serif]">
          /FULL_STACK_DEV
        </p>
        <p className="absolute text-[16px] leading-[24px] font-bold tracking-[0.17em] uppercase text-white [text-shadow:0_0_8px_rgba(0,229,255,0.4)] right-8 top-7 [font-family:var(--font-orbitron),sans-serif]">
          V:1(V1.1)
        </p>
        <p className="absolute text-[16px] leading-[24px] font-bold tracking-[0.17em] uppercase text-white [text-shadow:0_0_8px_rgba(0,229,255,0.4)] bottom-8 left-8 [font-family:var(--font-orbitron),sans-serif]">
          DS455DXGFV15454DFFD
        </p>
        <div className="absolute text-[16px] leading-[24px] font-bold tracking-[0.17em] uppercase text-white [text-shadow:0_0_8px_rgba(0,229,255,0.4)] bottom-8 right-8 text-right [font-family:var(--font-orbitron),sans-serif]">
          <p>EXT_CODE_003_TEST_RAW</p>
          <p>ATC 14:33:28:10</p>
        </div>
      </div>
    </div>
  );
}

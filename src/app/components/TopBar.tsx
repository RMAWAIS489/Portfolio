import LiveClock from "./LiveClock";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between bg-[#021114] px-2 lg:px-4 py-0.5 shrink-0">
      <div className="flex items-center gap-3">
        {/* Logo */}
        <div className="shrink-0 border border-[#00E5FF] p-1 bg-[#021320]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-12 h-12"
          >
            {/* Dark background */}
            <rect x="0" y="0" width="48" height="48" fill="#00E5FF" />
            {/* Inner inset border */}
            <rect x="2" y="2" width="44" height="44" fill="none"  strokeWidth="1" />
            {/* A body — cyan */}
            <polygon points="24,6 43,41 5,41" fill="#021114" />
            {/* Left foot */}
            <rect x="3" y="41" width="13" height="4" fill="#021114" />
            {/* Right foot */}
            <rect x="32" y="41" width="13" height="4" fill="#021114" />
            {/* Inner triangle cutout */}
            <polygon points="24,15 36,38 12,38" fill="#021114" />
            {/* Crossbar — cyan bar */}
            <rect x="13" y="29" width="22" height="5" fill="#00E5FF" />
            {/* Crossbar slot — dark gap */}
            <rect x="15" y="30" width="18" height="3" fill="#021320" />
          </svg>
        </div>

        <div className="w-[4px] h-[36px] my-auto  shadow-[0_0_8px_1px_rgba(0,229,255,0.2)]" />

        <div>
          <p className="font-bold text-[18px] text-[#00E5FF]">ACCESS TERMINAL</p>
          <LiveClock />
        </div>
      </div>

      <div className="flex gap-3">
        {/* Minimize */}
        <button
          className="w-[44px] h-[36px] border border-[#00E5FF] flex items-center justify-center"
          aria-label="Minimize"
        >
          <span className="block w-[18px] h-[2px] bg-[#00E5FF]" />
        </button>

        {/* Close */}
        <button
          className="w-[52px] h-[36px] border border-[#00E5FF] flex items-center justify-center"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <line x1="2" y1="2" x2="18" y2="18" stroke="#00E5FF" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="18" y1="2" x2="2" y2="18" stroke="#00E5FF" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

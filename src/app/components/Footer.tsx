export default function Footer() {
  return (
    <footer className="flex items-center justify-between bg-[rgba(2,16,29,0.78)] px-[10px] py-[5px] text-[0.58rem] tracking-[0.16em] uppercase text-[#00E5FF] shrink-0 mt-3 mx-2 lg:mx-6 mb-2">
      <style>{`
        @keyframes blinkWG {
          0%, 49%  { color: #ffffff; }
          50%, 100% { color: #6b7280; }
        }
        .blink-wg { animation: blinkWG 1.5s step-start infinite; }
      `}</style>

      <span className="flex items-center gap-1 text-[14px] font-semibold">
        <span className="relative inline-block overflow-hidden">
          <div className="shimmer-bar" />
          Access Terminal
        </span>
        <a className="text-[12px] font-normal blink-wg [font-family:Consolas,'Courier_New',monospace]">
          © 2024 | Secure Connection
        </a>
      </span>

      <span className="font-normal text-[12px] text-gray-500 [font-family:Consolas,'Courier_New',monospace] border border-[#00E5FF] p-2">
        SYSTFM.STATUS =<a className="text-[#22C55E]"> ONLINE</a>
      </span>
    </footer>
  );
}

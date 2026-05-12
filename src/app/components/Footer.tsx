export default function Footer() {
  return (
    <footer className="mx-2 mb-2 mt-0 flex shrink-0 items-center justify-center  px-[10px] py-[5px] text-[0.58rem] uppercase tracking-[0.16em] text-[#00E5FF] lg:mx-6 lg:mt-3 lg:justify-between">
      <style>{`
        @keyframes termBlink {
          0%, 49%  { color: #ffffff; }
          50%, 100% { color: #6b7280; }
        }
        .footer-blink { animation: termBlink 2s step-start infinite; }
      `}</style>

      <p className="w-full text-center text-[12px] font-normal normal-case tracking-normal [font-family:Consolas,'Courier_New',monospace] lg:hidden">
        <span className="footer-blink">© 2024 | Secure Connection</span>
      </p>

      <span className="hidden items-center gap-1 text-[14px] font-semibold lg:flex">
        <span className="relative inline-block overflow-hidden">
          <div className="shimmer-bar" />
          Access Terminal
        </span>
        <span className="text-[12px] font-normal footer-blink [font-family:Consolas,'Courier_New',monospace]">
          © 2024 | Secure Connection
        </span>
      </span>

      <span className="hidden font-normal text-[12px] text-gray-500 [font-family:Consolas,'Courier_New',monospace] border border-[#00E5FF] p-2 lg:inline">
        SYSTFM.STATUS =<span className="text-[#22C55E]"> ONLINE</span>
      </span>
    </footer>
  );
}

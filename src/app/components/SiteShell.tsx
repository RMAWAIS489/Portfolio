"use client";

import { useState } from "react";
import TopBar from "./TopBar";
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import LoginModal from "./LoginModal";
import ConnectModal from "./ConnectModal";
import { ModalProvider } from "./ModalContext";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);

  return (
    <ModalProvider
      openConnect={() => setConnectOpen(true)}
      openLogin={() => setLoginOpen(true)}
    >
      <div className="bg-[#021114] h-screen flex flex-col text-cyan-100 overflow-hidden">
        <div className="flex flex-col flex-1 min-h-0 mx-auto w-full">

          <TopBar />
          <div className="w-full h-[2px] bg-[#00E5FF] shrink-0" />
          <MenuBar onLoginClick={() => setLoginOpen(true)} />
          <div className="w-full h-[2px] bg-[#00E5FF] shrink-0" />

          {children}

          <div className="w-full h-[2px] bg-[#00E5FF] shrink-0" />
          <Footer />
        </div>

        {loginOpen   && <LoginModal   onClose={() => setLoginOpen(false)}   />}
        {connectOpen && <ConnectModal onClose={() => setConnectOpen(false)} />}
      </div>
    </ModalProvider>
  );
}

"use client";

import { useCallback, useState } from "react";
import TopBar from "./TopBar";
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import LoginModal from "./LoginModal";
import ConnectModal from "./ConnectModal";
import MobileNavDrawer from "./MobileNavDrawer";
import { ModalProvider } from "./ModalContext";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const closeMobileNav = useCallback(() => setMobileNavOpen(false), []);

  return (
    <ModalProvider
      openConnect={() => setConnectOpen(true)}
      openLogin={() => setLoginOpen(true)}
    >
      <div className="flex h-[100dvh] flex-col overflow-hidden bg-[#021114] text-cyan-100">
        <div className="mx-auto flex min-h-0 w-full flex-1 flex-col">
          <TopBar
            menuOpen={mobileNavOpen}
            onMenuClick={() => setMobileNavOpen((o) => !o)}
          />
          <div className="h-[2px] w-full shrink-0 bg-[#00E5FF]" />

          <div className="hidden min-w-0 shrink-0 lg:block">
            <MenuBar onLoginClick={() => setLoginOpen(true)} />
            <div className="h-[2px] w-full shrink-0 bg-[#00E5FF]" />
          </div>

          <main className="flex min-h-0 flex-1 flex-col overflow-hidden">{children}</main>

          <div className="h-[2px] w-full shrink-0 bg-[#00E5FF]" />
          <Footer />
        </div>

        <MobileNavDrawer
          open={mobileNavOpen}
          onClose={closeMobileNav}
          onLoginClick={() => setLoginOpen(true)}
        />

        {loginOpen   && <LoginModal   onClose={() => setLoginOpen(false)}   />}
        {connectOpen && <ConnectModal onClose={() => setConnectOpen(false)} />}
      </div>
    </ModalProvider>
  );
}

"use client";

import { createContext, useContext } from "react";

interface ModalContextValue {
  openConnect: () => void;
  openLogin: () => void;
  openOverride: () => void;
  openContact: () => void;
}

const ModalContext = createContext<ModalContextValue>({
  openConnect: () => {},
  openLogin: () => {},
  openOverride: () => {},
  openContact: () => {},
});

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({
  children,
  openConnect,
  openLogin,
  openOverride,
  openContact,
}: {
  children: React.ReactNode;
  openConnect: () => void;
  openLogin: () => void;
  openOverride: () => void;
  openContact: () => void;
}) {
  return (
    <ModalContext.Provider value={{ openConnect, openLogin, openOverride, openContact }}>
      {children}
    </ModalContext.Provider>
  );
}

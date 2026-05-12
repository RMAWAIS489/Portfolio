"use client";

import { createContext, useContext } from "react";

interface ModalContextValue {
  openConnect: () => void;
  openLogin: () => void;
  openOverride: () => void;
}

const ModalContext = createContext<ModalContextValue>({
  openConnect: () => {},
  openLogin: () => {},
  openOverride: () => {},
});

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({
  children,
  openConnect,
  openLogin,
  openOverride,
}: {
  children: React.ReactNode;
  openConnect: () => void;
  openLogin: () => void;
  openOverride: () => void;
}) {
  return (
    <ModalContext.Provider value={{ openConnect, openLogin, openOverride }}>
      {children}
    </ModalContext.Provider>
  );
}

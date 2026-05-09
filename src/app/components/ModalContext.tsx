"use client";

import { createContext, useContext, useState } from "react";

interface ModalContextValue {
  openConnect: () => void;
  openLogin: () => void;
}

const ModalContext = createContext<ModalContextValue>({
  openConnect: () => {},
  openLogin: () => {},
});

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({
  children,
  openConnect,
  openLogin,
}: {
  children: React.ReactNode;
  openConnect: () => void;
  openLogin: () => void;
}) {
  return (
    <ModalContext.Provider value={{ openConnect, openLogin }}>
      {children}
    </ModalContext.Provider>
  );
}

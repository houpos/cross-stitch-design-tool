'use client';
import React, { createContext, useContext } from 'react';
import useModal from '../hooks/use-modal';
import Modal from '../components/modal';

const ModalContext = createContext<any>(null);

export function ModalProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { showModal, handleModal } = useModal();
  return (
    <ModalContext.Provider value={{ showModal, handleModal }}>
      <Modal />
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('useModalContext must be used within ModalContextProvider');
  }

  return context;
}

"use client";

import React, { createContext, useContext, useState, useCallback, useMemo } from "react";

interface AdmissionsModalContextType {
  isOpen: boolean;
  selectedGrade: string;
  openModal: (defaultGrade?: string) => void;
  closeModal: () => void;
}

const AdmissionsModalContext = createContext<AdmissionsModalContextType | undefined>(undefined);

export const AdmissionsModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState("Nursery");

  const openModal = useCallback((defaultGrade?: string) => {
    if (defaultGrade) {
      setSelectedGrade(defaultGrade);
    }
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({
      isOpen,
      selectedGrade,
      openModal,
      closeModal,
    }),
    [isOpen, selectedGrade, openModal, closeModal]
  );

  return (
    <AdmissionsModalContext.Provider value={value}>
      {children}
    </AdmissionsModalContext.Provider>
  );
};

export function useAdmissionsModal(): AdmissionsModalContextType {
  const context = useContext(AdmissionsModalContext);
  if (!context) {
    throw new Error("useAdmissionsModal must be used within an AdmissionsModalProvider");
  }
  return context;
}

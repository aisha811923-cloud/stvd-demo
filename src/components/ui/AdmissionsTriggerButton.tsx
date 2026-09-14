"use client";

import React from "react";
import { Button, ButtonProps } from "@/components/ui/Button";
import { useAdmissionsModal } from "@/context/AdmissionsModalContext";

export interface AdmissionsTriggerButtonProps extends ButtonProps {
  defaultGrade?: string;
}

export const AdmissionsTriggerButton: React.FC<AdmissionsTriggerButtonProps> = ({
  defaultGrade,
  children,
  onClick,
  ...props
}) => {
  const { openModal } = useAdmissionsModal();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
    openModal(defaultGrade);
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
};

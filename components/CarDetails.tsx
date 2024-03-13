import { CarProps } from "@/types";
import React from "react";
import Image from "next/image";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({isOpen,closeModal,car}:CarDetailsProps) => {
  return <div>CarDetails</div>;
};

export default CarDetails;

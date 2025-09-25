import React from "react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  to: string;
  img: string;
  title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ to, img, title }) => {
  return (
    <Link
      to={to}
      className="flex flex-col items-center p-6 bg-black/30 border border-accent rounded-lg w-48 hover:bg-black/50 text-white transition transform hover:scale-105"
    >
      <img src={img} alt={title} className="h-10 mb-3 object-contain" />
      <h5 className="text-sm font-semibold">{title}</h5>
    </Link>
  );
};

export default ServiceCard;

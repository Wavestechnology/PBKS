import React from 'react';

interface ServiceFeatureProps {
  title: string;
  bgImage: string;
  items: string[];
}

const ServiceFeature: React.FC<ServiceFeatureProps> = ({ title, bgImage, items }) => {
  return (
    <div
      className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition relative overflow-hidden group"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}
    >
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>
      <div className="relative z-10 text-white text-left">
        <h5 className="font-bold text-xl mb-3">{title}</h5>
        <ul className="space-y-2 text-sm opacity-95">
          {items.map((item, index) => (
            <li key={index} className="font-medium">• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceFeature;
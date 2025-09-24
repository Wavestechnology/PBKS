import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Breadcrumb from '../components/Breadcrumb';
import Footer from '../components/Footer';

interface ServicePageProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  services: Array<{
    name: string;
    description: string;
  }>;
}

const ServicePage: React.FC<ServicePageProps> = ({ 
  title, 
  subtitle, 
  imageSrc, 
  imageAlt,
  services 
}) => {
  return (
    <>
      <TopBar />
      <NavBar />
      
      {/* Breadcrumb Section */}
      <Breadcrumb 
        pageTitle={title}
        currentPage={title}
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">{subtitle}</h2>
        </div>
        
        {/* Service Image */}
        <div className="mb-12">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-3">{service.name}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServicePage;
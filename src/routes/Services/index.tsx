import React from "react";
import { Link } from "react-router";
import TopBar from "../../components/TopBar";
import NavBar from "../../components/NavBar";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";

const Services: React.FC = () => {
  // Service categories data
  const serviceCategories = [
    {
      id: "bookkeeping",
      title: "Bookkeeping Services",
      description: "Professional financial record management for businesses of all sizes",
      image: "https://pakbookkeeping.com/wp-content/uploads/2024/10/Online-Bookkeeping-Services-QuickBooks-Xero-Freshbooks.webp",
      imageAlt: "Online Bookkeeping Services - QuickBooks - Xero - Freshbooks",
      link: "/services/bookkeeping"
    },
    {
      id: "tax",
      title: "Tax Consultancy Services",
      description: "Expert tax planning and compliance services",
      image: "https://pakbookkeeping.com/wp-content/uploads/2024/10/Tax-Consultants.webp",
      imageAlt: "Tax Consultancy Services",
      link: "/services/tax-consultancy"
    },
    {
      id: "audit",
      title: "Audit Services",
      description: "Comprehensive auditing and risk management solutions",
      image: "https://pakbookkeeping.com/wp-content/uploads/2024/10/Audit-Services-For-Business.webp",
      imageAlt: "Audit Services For Business",
      link: "/services/audit"
    },
    {
      id: "management",
      title: "Management Consultancy Services",
      description: "Strategic business advisory and performance improvement",
      image: "https://pakbookkeeping.com/wp-content/uploads/2024/10/Management-Consultancy-Services-For-Businesses.webp",
      imageAlt: "Management Consultancy Services",
      link: "/services/management-consultancy"
    }
  ];

  return (
    <>
      <TopBar />
      <NavBar />
      
      {/* Breadcrumb Section */}
      <Breadcrumb 
        pageTitle="Services" 
        currentPage="Services" 
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* <h2 className="text-3xl font-bold text-primary text-center mb-12">Our Services</h2> */}
        
        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img 
                src={category.image} 
                alt={category.imageAlt} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{category.title}</h3>
                <p className="text-gray-700 mb-4">{category.description}</p>
                <Link 
                  to={category.link}
                  className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-accent transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
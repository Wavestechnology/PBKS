import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  pageTitle: string;
  currentPage: string;
  backgroundUrl?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
  pageTitle, 
  currentPage,
  backgroundUrl = 'https://pakbookkeeping.com/wp-content/uploads/2024/10/Internal-Audit-Services.webp'
}) => {
  return (
    <section 
      className="flex items-center py-16 relative"
      style={{ 
        backgroundImage: `url('${backgroundUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-6 text-accent flex flex-col sm:flex-row justify-between items-center">
        <div>
          <h1 className="font-bold text-3xl">{pageTitle}</h1>
        </div>
        <div className="flex items-center mt-4 sm:mt-0">
          <p>
            <Link to="/" className="mx-3 text-decoration-none text-white hover:text-accent transition">Home</Link>
          </p>
          <p className="mx-3">/</p>
          <p className="font-bold text-accent">{currentPage}</p>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
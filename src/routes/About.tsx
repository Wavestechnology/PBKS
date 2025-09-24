import React from "react";
import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

const About: React.FC = () => {
  return (
    <>
      <TopBar />
      <NavBar />
      
      {/* Breadcrumb Section */}
      <Breadcrumb 
        pageTitle="About" 
        currentPage="About" 
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Featured Image */}
        <div className="mb-12">
          <img 
            src="https://pakbookkeeping.com/wp-content/uploads/2024/10/Online-Bookkeeping-Services-QuickBooks-Xero.webp" 
            alt="Online Bookkeeping Services - QuickBooks - Xero" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-primary mb-4">Welcome to Pak Bookkeeping Services</h2>
          <p className="text-gray-700 mb-6">
            Your trusted partner in professional virtual bookkeeping, tax consultancy, audit, and management consultancy services. We cater to businesses of all sizes—from emerging startups to well-established enterprises—providing customized financial solutions that drive growth and ensure compliance.
          </p>
          <p className="text-gray-700 mb-6">
            Our team of experienced professionals is proficient in leading accounting software like <strong>QuickBooks, Xero, FreshBooks, and MS Excel</strong>, which allows us to deliver seamless and accurate financial management tailored to your specific needs. We pride ourselves on being more than just a service provider; we are your strategic ally, dedicated to helping your business thrive in an ever-changing financial landscape.
          </p>

          <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Why Choose Pak Bookkeeping Services?</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li>
              <strong>Global Reach, Personalized Solutions:</strong> We proudly serve a diverse clientele from around the globe, including the US, UK, Canada, Germany, and beyond. Our approach is built around understanding the unique financial challenges faced by businesses in different markets and providing tailored solutions that prioritize your specific requirements.
            </li>
            <li>
              <strong>Expertise in Compliance and Accuracy:</strong> Our commitment to accuracy and adherence to international financial standards ensures that your business remains compliant while maximizing financial efficiency. We handle the complexities of bookkeeping, taxes, and audits, giving you the freedom to focus on what you do best—growing your business.
            </li>
            <li>
              <strong>Innovation and Reliability:</strong> In the world of business, reliable and innovative financial management can be the difference between staying ahead or falling behind. We leverage the latest technologies and best practices to offer efficient, timely, and insightful financial services that support your strategic goals.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary mb-4">Our Services</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Virtual Bookkeeping:</strong> Streamline your financial records with our expert bookkeeping services. Our team maintains your books with precision, ensuring your financial data is up-to-date and ready for decision-making at any moment.
            </li>
            <li>
              <strong>Tax Consultancy:</strong> Navigate the complexities of tax regulations with confidence. We provide comprehensive tax planning, preparation, and compliance services to help minimize liabilities and optimize your tax position.
            </li>
            <li>
              <strong>Audit Services:</strong> Our audit services are designed to provide a clear, comprehensive analysis of your financial statements, ensuring accuracy, transparency, and compliance with regulatory requirements.
            </li>
            <li>
              <strong>Management Consultancy:</strong> Drive business performance with our management consultancy services. We work closely with you to identify opportunities, streamline operations, and implement strategies that foster sustainable growth.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Your Success is Our Priority</h2>
          <p className="text-gray-700">
            Choosing Pak Bookkeeping Services means partnering with a team that values your business as much as you do. Our commitment to delivering high-quality, reliable, and innovative financial solutions has made us a preferred choice for businesses seeking to optimize their financial health and drive success.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;

import React from 'react';
import ServicePage from '../../components/ServicePage';

const AuditServices: React.FC = () => {
  const services = [
    {
      name: "Internal Audit & Risk Management",
      description: "Enhance your internal controls and mitigate business risks with our Internal Audit & Risk Management service. We provide a thorough evaluation of your processes, identify vulnerabilities, and offer recommendations to strengthen your operations."
    },
    {
      name: "Statutory Audits",
      description: "Comply with regulatory requirements through our Statutory Audit services. Our auditors conduct comprehensive financial reviews to ensure that your business meets all legal and statutory obligations."
    },
    {
      name: "Financial Statement Audits",
      description: "Gain confidence in your financial reporting with our Financial Statement Audits. We assess the accuracy and completeness of your financial statements, providing stakeholders with a clear picture of your business's financial health."
    },
    {
      name: "Compliance Audits",
      description: "Ensure your business meets industry-specific regulations with our Compliance Audit services. We evaluate your adherence to applicable standards, helping you maintain compliance and avoid legal complications."
    }
  ];

  return (
    <ServicePage
      title="Audit Services"
      subtitle="Comprehensive Audit Services for Your Business"
      imageSrc="https://pakbookkeeping.com/wp-content/uploads/2024/10/Audit-Services-For-Business.webp"
      imageAlt="Audit Services For Business"
      services={services}
    />
  );
};

export default AuditServices;
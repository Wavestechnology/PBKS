import React from 'react';
import ServicePage from '../../components/ServicePage';

const ManagementConsultancyServices: React.FC = () => {
  const services = [
    {
      name: "Business Strategy & Planning",
      description: "Drive your business growth with our Business Strategy & Planning service. We work with you to develop long-term strategies, set achievable goals, and create action plans that propel your business towards success."
    },
    {
      name: "Operational Efficiency & Cost Reduction",
      description: "Boost profitability by streamlining your operations with our Operational Efficiency & Cost Reduction service. We identify inefficiencies, reduce waste, and help you implement best practices to lower costs without compromising quality."
    },
    {
      name: "Organizational Restructuring",
      description: "Adapt to changing market conditions with our Organizational Restructuring service. We guide you through restructuring processes to enhance productivity, improve employee morale, and align your organizational structure with your strategic goals."
    },
    {
      name: "Performance Management Systems",
      description: "Implement effective performance management systems that track and enhance business performance. We provide the tools and frameworks needed to measure success, align employee efforts with company objectives, and drive continuous improvement."
    },
    {
      name: "Market Entry & Feasibility Studies",
      description: "Expand your business confidently with our Market Entry & Feasibility Studies. We conduct in-depth research, assess market potential, and provide strategic recommendations to ensure your entry into new markets is successful."
    }
  ];

  return (
    <ServicePage
      title="Management Consultancy Services"
      subtitle="Strategic Management Consultancy Services for Business Growth"
      imageSrc="https://pakbookkeeping.com/wp-content/uploads/2024/10/Management-Consultancy-Services-For-Businesses.webp"
      imageAlt="Management Consultancy Services"
      services={services}
    />
  );
};

export default ManagementConsultancyServices;
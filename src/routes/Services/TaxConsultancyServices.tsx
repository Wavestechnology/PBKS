import React from 'react';
import ServicePage from '../../components/ServicePage';

const TaxConsultancyServices: React.FC = () => {
  const services = [
    {
      name: "Tax Planning & Optimization",
      description: "Minimize your tax liabilities and maximize savings with our tailored Tax Planning & Optimization strategies. We analyze your financial situation and develop strategies to reduce your tax burden while complying with current tax laws."
    },
    {
      name: "Corporate & Individual Tax Filing",
      description: "Ensure accurate and timely tax returns with our Corporate & Individual Tax Filing service. Our experts manage all aspects of tax preparation, ensuring compliance and minimizing the risk of audits or penalties."
    },
    {
      name: "VAT/GST Filing & Compliance",
      description: "Stay on top of VAT/GST regulations with our comprehensive Filing & Compliance service. We manage your VAT/GST obligations, ensure timely submissions, and help you avoid costly penalties from missed deadlines or inaccuracies."
    },
    {
      name: "Tax Dispute Resolution & Advisory",
      description: "Resolve tax disputes confidently with our expert advisory services. We provide guidance and representation in tax disputes, ensuring that your interests are protected and that you reach a fair resolution with tax authorities."
    },
    {
      name: "International Tax Consultancy",
      description: "Navigate complex cross-border tax issues with our International Tax Consultancy service. We help businesses and individuals optimize their global tax strategies, ensuring compliance with international tax laws and minimizing liabilities."
    }
  ];

  return (
    <ServicePage
      title="Tax Consultancy Services"
      subtitle="Expert Tax Consultancy Services for Your Business"
      imageSrc="https://pakbookkeeping.com/wp-content/uploads/2024/10/Tax-Consultants.webp"
      imageAlt="Tax Consultancy Services"
      services={services}
    />
  );
};

export default TaxConsultancyServices;
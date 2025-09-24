import React from 'react';
import ServicePage from '../../components/ServicePage';

const BookkeepingServices: React.FC = () => {
  const services = [
    {
      name: "Accounts Receivable Management",
      description: "Ensure your cash flow remains steady with our Accounts Receivable Management service. We handle timely invoicing, efficient collections, and reduce the risk of delayed payments. Our expert team works closely with you to optimize your receivables, improving your overall financial health."
    },
    {
      name: "Accounts Payable Management",
      description: "Keep your supplier relationships strong and streamline your payment processes with our Accounts Payable Management service. We organize, schedule, and process your business's outgoing payments, ensuring you maintain favorable terms with your vendors."
    },
    {
      name: "Expense Categorization And Tracking",
      description: "Gain better financial control with precise expense categorization and tracking. Our service helps you organize, monitor, and manage business expenses, making it easier to understand your spending patterns and make informed financial decisions."
    },
    {
      name: "Bank And Credit Card Reconciliation",
      description: "Our Bank & Credit Card Reconciliation service ensures that your financial records are accurate and up-to-date. We match your bank and credit card statements with your accounting records to identify discrepancies, helping you maintain financial integrity."
    },
    {
      name: "Financial Statement Preparation",
      description: "Get clear insights into your business's financial performance with our Financial Statements Preparation service. We provide detailed balance sheets, income statements, and cash flow reports that comply with accounting standards, aiding in strategic decision-making."
    },
    {
      name: "Payroll Statement Preparation",
      description: "Simplify your payroll processes with our Payroll Management service. We ensure your employees are paid accurately and on time, handle tax withholdings, and manage benefits, keeping your business compliant and your team satisfied."
    }
  ];

  return (
    <ServicePage
      title="Bookkeeping Services"
      subtitle="Professional Online Bookkeeping Services for small, Medium And Large Scale Business"
      imageSrc="https://pakbookkeeping.com/wp-content/uploads/2024/10/Online-Bookkeeping-Services-QuickBooks-Xero-Freshbooks.webp"
      imageAlt="Online Bookkeeping Services - QuickBooks - Xero - Freshbooks"
      services={services}
    />
  );
};

export default BookkeepingServices;
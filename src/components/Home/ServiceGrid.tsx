import ServiceFeature from './ServiceFeature';

const ServiceGrid = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h6 className="text-green-600 font-semibold uppercase tracking-wider">OUR SERVICES</h6>
        <h1 className="text-3xl font-bold mb-16">
          We Offer a Wide Variety of<br /><span className="text-green-600">Financial Services</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceFeature
            title="Bookkeeping Services"
            bgImage="https://pakbookkeeping.com/wp-content/uploads/2024/10/Online-Bookkeeping-Services-For-Businesses.webp"
            items={[
              'Accounts Receivable Management',
              'Accounts Payable Management',
              'Expense Categorization & Tracking',
            ]}
          />
          <ServiceFeature
            title="Management Consulting"
            bgImage="https://pakbookkeeping.com/wp-content/uploads/2024/10/Management-Consultancy-Services.webp"
            items={[
              'Business Strategy & Planning',
              'Operational Efficiency & Cost Reduction',
              'Organizational Restructuring',
            ]}
          />
          <ServiceFeature
            title="Internal Audit Services"
            bgImage="https://pakbookkeeping.com/wp-content/uploads/2024/10/Internal-Audit-Services.webp"
            items={[
              'Financial & Compliance Audits',
              'Risk Assessment',
              'Process Optimization Reviews',
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
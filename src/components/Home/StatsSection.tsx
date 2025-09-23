import React from 'react';

const StatsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h6 className="text-green-600 font-semibold uppercase tracking-wider">WE ARE TRUSTED IN</h6>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-12 text-secondary">
          Serving Clients Across<br /><span className="text-green-600">5+ Countries Worldwide</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          <StatItem number="150+" label="Happy Clients" color="text-green-600" />
          <StatItem number="10+" label="Years of Experience" color="text-secondary" />
          <StatItem number="98%" label="Client Retention" color="text-green-500" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

// Sub-component
interface StatItemProps {
  number: string;
  label: string;
  color: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, color }) => {
  return (
    <div className="text-center">
      <h2 className={`text-5xl font-extrabold ${color}`}>{number}</h2>
      <h6 className="text-gray-700 mt-2">{label}</h6>
    </div>
  );
};
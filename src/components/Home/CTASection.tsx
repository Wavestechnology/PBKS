
const CTASection = () => {
  return (
    <section
      className="py-24 text-center text-white relative"
      style={{
        backgroundImage: "url('https://pakbookkeeping.com/wp-content/uploads/2024/10/Internal-Audit-Services.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container mx-auto">
        <h3 className="text-xl md:text-2xl font-bold mb-2">Drop us a line! We are here to answer your questions 24/7</h3>
        <h1 className="text-4xl font-bold mb-6">NEED A CONSULTATION?</h1>
        <a href="/contact">
          <button className="bg-accent hover:bg-accent/90 text-secondary font-semibold px-10 py-4 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
            Contact Us
          </button>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
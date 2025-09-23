import ServiceCard from "./ServiceCard";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex items-center"
      style={{
        backgroundImage:
          "url('https://pakbookkeeping.com/wp-content/uploads/2024/10/Online-Bookkeeping-Services-For-Businesses.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container mx-auto px-6 pt-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          AFFORDABLE VIRTUAL BOOKKEEPING
        </h1>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          <ServiceCard
            href="/"
            img="/bookkeeping.png"
            title="Virtual Bookkeeping"
          />
          <ServiceCard href="/" img="tax.png" title="Tax Consultancy" />
          <ServiceCard href="/" img="audit.png" title="Audit Services" />
          <ServiceCard
            href="/"
            img="management.png"
            title="Management Consulting"
          />
        </div>
      </div>
    </section>
  );
}

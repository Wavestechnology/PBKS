import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-primary text-accent py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <Link to="/">
              <img
                src="/logo1.png"
                alt="Pak Bookkeeping Logo"
                className="w-23 h-23 mb-4 rounded-full object-contain bg-white p-2"
              />
            </Link>
            <p className="text-primary-light text-sm leading-relaxed">
              Delivering expert virtual bookkeeping, tax, audit, and management
              consultancy services globally since 2015.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="font-semibold mb-4">Company</h5>
            <ul className="space-y-2 text-primary-light">
              <li>
                <Link to="/about" className="hover:text-accent transition">
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link to="/career" className="hover:text-accent transition">
                  Careers
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="hover:text-accent transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-accent transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h5 className="font-semibold mb-4">Services</h5>
            <ul className="space-y-2 text-primary-light">
              <li>
                <Link
                  to="/services/bookkeeping"
                  className="hover:text-accent transition"
                >
                  Virtual Bookkeeping
                </Link>
              </li>
              <li>
                <Link
                  to="/services/tax-consultancy"
                  className="hover:text-accent transition"
                >
                  Tax Consultancy
                </Link>
              </li>
              <li>
                <Link
                  to="/services/audit"
                  className="hover:text-accent transition"
                >
                  Internal Audit
                </Link>
              </li>
              <li>
                <Link
                  to="/services/management-consultancy"
                  className="hover:text-accent transition"
                >
                  Management Consulting
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-accent my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-primary-light text-sm">
          <p>&copy; 2025 Pak Bookkeeping Services. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-accent">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

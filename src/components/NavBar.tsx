import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex flex-wrap justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Pak Bookkeeping Logo" className="h-20" />
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-secondary focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-secondary hover:text-green-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-secondary hover:text-green-600 font-medium"
          >
            About
          </Link>
          <Link
            to="/"
            className="text-secondary hover:text-green-600 font-medium"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-secondary hover:text-green-600 font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Call Info */}
        <div className="hidden md:flex items-center border-l pl-6">
          <i className="fas fa-phone text-green-600 mr-3"></i>
          <div>
            <p className="text-xs text-gray-500">Have Questions?</p>
            <p className="font-bold text-gray-800">+1-XXX-XXX-XXXX</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

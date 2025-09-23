import { Link } from "react-router";

export default function TopBar(){
  return (
    <div className="bg-green-800 text-white text-sm py-2">
      <div className="container mx-auto px-6 flex flex-wrap justify-between items-center">
        {/* Email */}
        <div>
          <Link to="mailto:info@pakbookkeeping.com" className="hover:underline flex items-center">
            <i className="fas fa-envelope mr-1"></i>
            <span>info@pakbookkeeping.com</span>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="space-x-4">
          <Link to="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></Link>
          <Link to="#" className="hover:text-blue-600"><i className="fab fa-facebook"></i></Link>
          <Link to="#" className="hover:text-blue-500"><i className="fab fa-linkedin"></i></Link>
          <Link to="#" className="hover:text-pink-500"><i className="fab fa-instagram"></i></Link>
        </div>
      </div>
    </div>
  );
};
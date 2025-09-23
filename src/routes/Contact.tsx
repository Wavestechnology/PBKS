import React from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/NavBar";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";

const Contact: React.FC = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Breadcrumb 
        pageTitle="Contact Us" 
        currentPage="Contact" 
      />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Contact Details */}
          <div>
            <p className="text-gray-600 mb-8">
              Give us a call or drop by anytime. We aim to answer all enquiries
              within 24 hours on business days. We will be happy to answer your
              questions.
            </p>
            <h6 className="text-blue-600 font-semibold uppercase tracking-wider mb-4">
              Contact Details
            </h6>
            {/* <h2 className="text-3xl font-bold mt-2 mb-4">Contact Us</h2> */}

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 text-2xl">🌍</span>
                <p>
                  <strong>Address:</strong>
                  <br />
                  6211, Summerfield Glade Ln Katy, TX 77494
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-blue-600 text-2xl">📧</span>
                <p>
                  <strong>Mailbox:</strong>
                  <br />
                  info@pakbookkeeping.net
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-blue-600 text-2xl">📞</span>
                <p>
                  <strong>Phone:</strong>
                  <br />
                  +1-954-850-8839
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-gradient-to-r from-black to-green-900 p-8 rounded-lg shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-sm mb-6">
              Your email address will not be published. Required fields are
              marked*
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full px-4 py-3 rounded bg-white text-red-700 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email*"
                className="w-full px-4 py-3 rounded bg-white text-red-700 focus:outline-none"
              />
              <textarea
                placeholder="Enter your Message*"
                className="w-full px-4 py-3 rounded bg-white text-red-700 focus:outline-none"
                rows={4}
              ></textarea>

              <button
                type="submit"
                className="w-full bg-white text-green-700 font-bold py-3 rounded hover:bg-gray-100 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

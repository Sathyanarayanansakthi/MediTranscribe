import React, { useState } from "react";
import { FaGithub, FaEnvelope, FaBars, FaTimes, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Landingpage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-gray-700 py-5 shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">MediTranscribe</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 text-base md:text-lg">
            <li><a href="#home" className="hover:text-teal-300 transition">Home</a></li>
            <li><a href="#features" className="hover:text-teal-300 transition">Features</a></li>
            <li><a href="#contact" className="hover:text-teal-300 transition">Contact</a></li>
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden bg-gray-800 text-center py-4 space-y-4 text-lg">
            <li><a href="#home" className="block hover:text-teal-300">Home</a></li>
            <li><a href="#features" className="block hover:text-teal-300">Features</a></li>
            <li><a href="#contact" className="block hover:text-teal-300">Contact</a></li>
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative text-white pt-32 pb-20 px-4 sm:px-6 md:px-12 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/7581111/pexels-photo-7581111.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-xl px-8 py-10 shadow-lg">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Transform Your Prescription Management
            </h2>
            <p className="text-lg sm:text-xl mb-8">
              A seamless way to convert audio to text and manage prescriptions effortlessly.
            </p>
            <Link
              to="/dashboard"
              className="inline-block bg-gradient-to-r from-teal-500 to-blue-500 hover:from-blue-500 hover:to-teal-500 shadow-lg transition-all duration-300 rounded-full py-3 px-8 text-white font-semibold"
            >
              Convert The Prescription
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-12">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Upload Audio Files",
                desc: "Easily upload your audio files in MP3 or WAV format to generate prescriptions instantly.",
                img: "https://images.pexels.com/photos/8867436/pexels-photo-8867436.jpeg?auto=compress&cs=tinysrgb&w=1600",
              },
              {
                title: "Instant Prescription",
                desc: "The system quickly converts your audio into a dummy prescription text for review and edits.",
                img: "https://images.pexels.com/photos/8376193/pexels-photo-8376193.jpeg?auto=compress&cs=tinysrgb&w=1600",
              },
              {
                title: "Edit & Save",
                desc: "Once generated, easily edit and save the prescription to suit your specific needs.",
                img: "https://images.pexels.com/photos/8376194/pexels-photo-8376194.jpeg?auto=compress&cs=tinysrgb&w=1600",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-800/70 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <img src={feature.img} alt={feature.title} className="w-full h-48 object-cover rounded-t-xl" />
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-teal-400 mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-r from-teal-600 via-blue-700 to-purple-800 text-white py-10 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg mb-4">MediTranscribe</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://github.com/Sathyanarayanansakthi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-200 transition"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="mailto:contact@mediscribe.com"
              className="text-white hover:text-teal-200 transition"
            >
              <FaEnvelope className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com/in/sathya-narayanans"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-200 transition"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/sathyanarayanansakthi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-200 transition"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://www.sathyanarayanan.live"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-200 transition"
            >
              <FaEnvelope className="text-2xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landingpage;

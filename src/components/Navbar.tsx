import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Rocket } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100" id="main-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group" id="logo-link">
              <div className="w-10 h-10 bg-fb-blue rounded-xl flex items-center justify-center text-white shadow-lg shadow-fb-blue/20 group-hover:scale-110 transition-transform">
                <Rocket size={24} />
              </div>
              <span className="text-2xl font-display font-bold text-gray-900">BlueForge</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-600 hover:text-fb-blue transition-colors"
                id={`nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-fb-blue text-white px-6 py-2.5 rounded-full hover:bg-fb-blue-dark transition-all shadow-md shadow-fb-blue/20 active:scale-95"
              id="nav-cta"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-fb-blue"
              id="mobile-menu-btn"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 py-4 px-4"
          id="mobile-nav"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-800 hover:text-fb-blue"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-fb-blue text-white px-6 py-3 rounded-xl text-center font-bold"
            >
              Get Free Consultation
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

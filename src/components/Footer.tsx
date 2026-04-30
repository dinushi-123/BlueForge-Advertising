import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Rocket, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-16" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6" id="footer-logo">
              <div className="w-8 h-8 bg-fb-blue rounded-lg flex items-center justify-center text-white">
                <Rocket size={18} />
              </div>
              <span className="text-xl font-display font-bold text-gray-900">BlueForge</span>
            </Link>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Empowering small businesses in Colombo with cutting-edge digital advertising solutions that drive real growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-fb-blue hover:border-fb-blue transition-all" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-fb-blue hover:border-fb-blue transition-all" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-fb-blue hover:border-fb-blue transition-all" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:text-fb-blue hover:border-fb-blue transition-all" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-500 hover:text-fb-blue transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-fb-blue transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-fb-blue transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-fb-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-500 hover:text-fb-blue transition-colors">Social Media Ads</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-fb-blue transition-colors">Google Ads Management</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-fb-blue transition-colors">Branding & Creative</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-fb-blue transition-colors">Campaign Strategy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-500">
                <MapPin size={18} className="text-fb-blue shrink-0" />
                <span>123 Galle Road, Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Phone size={18} className="text-fb-blue shrink-0" />
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Mail size={18} className="text-fb-blue shrink-0" />
                <span>hello@blueforge.lk</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} BlueForge Advertising. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

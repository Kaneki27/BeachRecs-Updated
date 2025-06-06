import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, GitHub, Linkedin, Send, Waves } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center mb-4">
              <Waves className="h-6 w-6 text-primary-300" />
              <span className="ml-2 text-xl font-heading font-semibold text-white">BeachRecs</span>
            </div>
            <p className="text-primary-100 text-sm mb-4">
              BeachRecs is an AI-powered platform providing real-time information about beaches across India, helping users find safe, suitable, and accessible beaches.
            </p>
            <div className="flex space-x-4 text-primary-300">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-primary-100">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/explore" className="hover:text-white transition-colors">Explore Beaches</Link>
              </li>
              <li>
                <Link to="/safety" className="hover:text-white transition-colors">Safety Guide</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Partners</h3>
            <ul className="space-y-2 text-primary-100">
              <li>
                <a href="#" className="hover:text-white transition-colors">Indian Coast Guard</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Ministry of Tourism</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Ocean Conservation Society</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Beach Safety Alliance</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Marine Research Institute</a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
            <p className="text-primary-100 text-sm mb-4">
              Subscribe to our newsletter for beach safety updates and travel recommendations.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 text-gray-800 bg-white rounded-l-md focus:outline-none w-full"
              />
              <button className="bg-accent-500 hover:bg-accent-600 px-3 py-2 rounded-r-md transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="pt-8 border-t border-primary-800 text-center text-primary-300 text-sm">
          <p>© {new Date().getFullYear()} BeachRecs. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
          <p className="mt-4 text-xs">
            Made with ❤️ for safer beaches in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Waves, LogIn, Search } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close mobile menu when navigating to a new page
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Waves className={`h-7 w-7 ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-heading font-semibold ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              BeachRecs{' '}
              <span className="text-accent-500 font-montserrat font-medium tracking-wider text-lg">New UI</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" label="Home" isScrolled={isScrolled} />
            <NavLink to="/explore" label="Explore" isScrolled={isScrolled} />
            <NavLink to="/safety" label="Safety Guide" isScrolled={isScrolled} />
            <NavLink to="/about" label="About" isScrolled={isScrolled} />
            <NavLink to="/partners" label="Partners" isScrolled={isScrolled} />
          </nav>
          
          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              icon={<Search className="h-4 w-4" />}
              className={isScrolled ? 'text-gray-700' : 'text-white'}
            >
              Search
            </Button>
            <Button 
              variant={isScrolled ? "primary" : "outline"}
              size="sm"
              icon={<LogIn className="h-4 w-4" />}
            >
              Login
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 transition-all duration-300">
          <nav className="flex flex-col space-y-3">
            <MobileNavLink to="/" label="Home" />
            <MobileNavLink to="/explore" label="Explore" />
            <MobileNavLink to="/safety" label="Safety Guide" />
            <MobileNavLink to="/about" label="About" />
            <MobileNavLink to="/partners" label="Partners" />
            <div className="pt-2 flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                fullWidth
                icon={<Search className="h-4 w-4" />}
              >
                Search
              </Button>
              <Button
                variant="primary"
                size="sm"
                fullWidth
                icon={<LogIn className="h-4 w-4" />}
              >
                Login
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  isScrolled: boolean;
}

const NavLink = ({ to, label, isScrolled }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
        isActive
          ? isScrolled 
            ? 'text-primary-600 bg-primary-50' 
            : 'text-white bg-white/20'
          : isScrolled
            ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
            : 'text-white/90 hover:text-white hover:bg-white/20'
      }`}
    >
      {label}
    </Link>
  );
};

interface MobileNavLinkProps {
  to: string;
  label: string;
}

const MobileNavLink = ({ to, label }: MobileNavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        isActive
          ? 'text-primary-600 bg-primary-50'
          : 'text-gray-800 hover:text-primary-600 hover:bg-primary-50'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;
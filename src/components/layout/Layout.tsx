import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatbotWidget from '../ui/ChatbotWidget';

interface LayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
  transparentHeader?: boolean;
}

const Layout = ({ 
  children, 
  hideFooter = false,
  transparentHeader = false
}: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      {!hideFooter && <Footer />}
      <ChatbotWidget />
    </div>
  );
};

export default Layout;
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const TopInfoBar = ({isScrolled}) => {
  return (
    <div className={`${
        isScrolled 
          ? 'bg-primary backdrop-blur-sm py-3' 
          : 'bg-black/30 backdrop-blur-sm py-5'
      } text-gray-200 py-2 px-4 hidden md:block`}>
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <a href="mailto:contact@example.com" className="flex items-center hover:text-white transition-colors duration-300">
            <Mail size={14} className="mr-2" />
            <span>gwenniesevents@gmail.com</span>
          </a>
          <a href="tel:+8881234567890" className="flex items-center hover:text-white transition-colors duration-300">
            <Phone size={14} className="mr-2" />
            <span>+888 (123) 869523</span>
          </a>
          <div className="flex items-center">
            <MapPin size={14} className="mr-2" />
            <span>Jaipur, rajasthan</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-white transition-colors duration-300">
            <Facebook size={14} />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <Twitter size={14} />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <Linkedin size={14} />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <Instagram size={14} />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-300">
            <Youtube size={14} />
          </a>
        </div>
      </div>
    </div>
    
  );
};

export default TopInfoBar;
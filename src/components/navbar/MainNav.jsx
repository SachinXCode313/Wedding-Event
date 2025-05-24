import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { navLinks } from './navData';

const MainNav = ({ isScrolled }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav
            className={`${isScrolled
                    ? 'bg-navbar backdrop-blur-sm py-3 '
                    : 'bg-black/30 backdrop-blur-sm py-5'
                } transition-all duration-300`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-3xl font-light italic">
                    <a href="/" className="flex items-center">
                        Gwennies Events
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.url}
                            className="text-white uppercase text-sm font-medium tracking-wider hover:text-gray-300 transition-colors duration-300"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>

                {/* Right Icons */}
                <div className="flex items-center space-x-6">

                    {/* Mobile Menu Button */}
                    <button
                        className="text-white md:hidden"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-black/95 absolute w-full left-0 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen py-5 opacity-100' : 'max-h-0 py-0 opacity-0 overflow-hidden'
                    }`}
            >
                <div className="container mx-auto px-4 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.url}
                            className="text-white uppercase text-sm font-medium tracking-wider py-2 border-b border-gray-800 hover:text-gray-300 transition-colors duration-300"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.title}
                        </a>
                    ))}
                    <div className="py-4 flex flex-col space-y-4 border-t border-gray-800 mt-2">
                        <a href="mailto:feelings@gmail.com" className="text-gray-300 text-sm flex items-center">
                            <Mail size={14} className="mr-2" />
                            <span>feelings@gmail.com</span>
                        </a>
                        <a href="tel:+8881234567890" className="text-gray-300 text-sm flex items-center">
                            <Phone size={14} className="mr-2" />
                            <span>+888 (123) 869523</span>
                        </a>
                        <div className="text-gray-300 text-sm flex items-center">
                            <MapPin size={14} className="mr-2" />
                            <span>New York — 1075 Firs Avenue</span>
                        </div>
                        <div className="flex items-center space-x-4 pt-2">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                                <Twitter size={16} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                                <Linkedin size={16} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                                <Instagram size={16} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
                                <Youtube size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MainNav;
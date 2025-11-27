import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../images/logo.png';
import React from 'react';

const Footer = () => {
    return (
        <footer className="relative bg-[#e6fff2] text-gray-800 border-t border-gray-200 overflow-hidden">
            {/* Subtle gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-teal-50 to-blue-50 opacity-40 pointer-events-none"></div>

            <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between animate-fade-up">
                
                {/* Logo + Name */}
                <div className="flex items-center mb-6 md:mb-0 group">
                    <img
                        src={logo}
                        alt="MedLink Logo"
                        className="h-16 w-auto mr-3 transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-2xl font-extrabold text-gray-900 tracking-tight group-hover:text-primary transition-colors">
                        MedLink
                    </span>
                </div>

                {/* Navigation */}
                <div className="flex space-x-8 text-lg">
                    {["Home", "About", "Services", "Contact"].map((item, idx) => (
                        <a
                            key={idx}
                            href="/"
                            className="relative text-gray-600 hover:text-primary font-medium
                                       transition-all duration-300 hover:tracking-wide"
                        >
                            {item}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-full hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Social Icons */}
                <div className="flex space-x-4 mt-6 md:mt-0">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                        <a
                            key={idx}
                            href="#"
                            className="p-2 rounded-full border border-gray-300 bg-white shadow-sm
                                       hover:shadow-md transition-all duration-300 hover:-translate-y-1
                                       hover:border-primary hover:text-primary"
                        >
                            <Icon size={22} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Bottom text */}
            <div className="text-center py-4 text-sm text-gray-500 animate-fade-in">
                © {new Date().getFullYear()} MedLink — All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;

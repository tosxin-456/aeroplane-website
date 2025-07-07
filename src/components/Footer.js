// components/Footer.jsx
import React from 'react';
import { Plane } from 'lucide-react';

const Footer = () => {
    const navItems = ['Home', 'About', 'Services', 'FAQs', 'Contact'];

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <div className="flex items-center mb-4">
                            <Plane className="h-8 w-8 text-green-400 mr-3" />
                            <span className="text-2xl font-bold text-green-400">EricAir</span>
                        </div>
                        <p className="text-gray-400 text-lg">
                            Making travel dreams come true, one journey at a time.
                        </p>
                    </div>

                    <div className="md:text-right">
                        <div className="flex flex-wrap justify-start md:justify-end gap-6 mb-4">
                            {navItems.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                        <p className="text-gray-500 text-sm">
                            © 2025 EricAir Travel. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

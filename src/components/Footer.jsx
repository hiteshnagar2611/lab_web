import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="text-3xl"></div>
                            <span className="text-xl font-bold">LT Lab</span>
                        </div>
                        <p className="text-gray-400">
                            Advancing computational structural biology research.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Contact Information</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                <div className="text-gray-400 text-sm">
                                    Lab 202, CSIR-IGIB<br />
                                    Mathura Road Campus<br />
                                    New Delhi, India (110025)
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <a href="mailto:lipi.thukral@igib.in" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    lipi.thukral@igib.in
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <div className="space-y-2">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Research', path: '/research' },
                                { name: 'Publications', path: '/publications' },
                                { name: 'Resources', path: '/resources' },
                                { name: 'News', path: '/news' },
                                { name: 'Team', path: '/team' },
                                { name: 'Contact', path: '/contact' }
                            ].map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Connect With Us</h3>
                        <div className="flex space-x-4 mb-4">
                            <a
                                href="https://x.com/Sci_Lipi?t=WG0KW0GJ1_7pCv9LIbl_nQ&s=09"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Twitter"
                                className="text-gray-400 hover:text-sky-400 transition-colors"
                            >
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a
                                href="https://github.com/CSB-Thukral-Lab"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/lipi-thukral-ph-d-61833229"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn"
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                        <div className="text-gray-400 text-sm">
                            <p className="mb-1">Developed by:</p>
                            <div className="flex flex-wrap gap-x-2 items-center">
                                <a
                                    href="https://www.linkedin.com/in/ekanshjadon"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 underline"
                                >
                                    Ekansh
                                </a>
                                <span className="text-gray-600">&amp;</span>
                                <a
                                    href="https://www.linkedin.com/in/hiteshnagar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-300 underline"
                                >
                                    Hitesh
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p>&copy; 2016-26 LT Lab. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
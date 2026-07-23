import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-10">
                    {/* Branding */}
                    <div>
                        <Link to="/" className="inline-flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">CSB</span>
                            </div>
                            <div>
                                <span className="text-lg font-bold text-slate-900 block leading-tight">CSB Lab</span>
                                <span className="text-xs text-slate-500">CSIR-IGIB</span>
                            </div>
                        </Link>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Computational Structural Biology Lab at CSIR-Institute of Genomics and Integrative Biology, New Delhi.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Quick Links</h3>
                        <div className="space-y-2.5">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Research', path: '/research' },
                                { name: 'Publications', path: '/publications' },
                                { name: 'Team', path: '/team' },
                                { name: 'Contact', path: '/contact' },
                            ].map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="block text-sm text-slate-600 hover:text-blue-600 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Contact</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Lab 202, CSIR-IGIB<br />
                                    Mathura Road Campus<br />
                                    New Delhi 110025, India
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                <a
                                    href="mailto:lipi.thukral@igib.in"
                                    className="text-sm text-slate-600 hover:text-blue-600 transition-colors"
                                >
                                    lipi.thukral@igib.in
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social + Credits */}
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4">Connect</h3>
                        <div className="flex gap-3 mb-6">
                            <a
                                href="https://x.com/Sci_Lipi?t=WG0KW0GJ1_7pCv9LIbl_nQ&s=09"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Twitter / X"
                                className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com/CSB-Thukral-Lab"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub"
                                className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-800 hover:text-white transition-colors"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/lipi-thukral-ph-d-61833229"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn"
                                className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="text-xs text-slate-500">
                            Developed by{' '}
                            <a href="https://www.linkedin.com/in/ekanshjadon" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Ekansh</a>
                            {' & '}
                            <a href="https://www.linkedin.com/in/hiteshnagar" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Hitesh</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-sm text-slate-500">
                        &copy; 2016–{new Date().getFullYear()} Computational Structural Biology Lab. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-blue-600 transition-colors"
                    >
                        Back to top
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

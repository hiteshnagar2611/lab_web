import React from 'react';
import { Mail, MapPin, FlaskConical } from 'lucide-react';

const Contact = () => {
    const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

    return (
        <div className="min-h-screen bg-slate-100 pt-20">
            <section
                className="py-20 bg-cover bg-center relative"
                style={{ backgroundImage: `url('${url('/images/backgrounds/bg66.png')}')` }}
            >
                <div className="absolute inset-0 bg-slate-100 opacity-90"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Interested in collaboration, research opportunities, or have questions? We'd love to hear from you.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {/* Contact Details */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Lab Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <Mail className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                        <a href="mailto:lipi.thukral@igib.in" className="text-blue-600 hover:underline">lipi.thukral@igib.in</a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                                        <p className="text-gray-600">
                                            Lab 202, CSIR-IGIB<br />
                                            Mathura Road Campus<br />
                                            New Delhi, India (110025)
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-blue-100 p-3 rounded-lg">
                                        <FlaskConical className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Principal Investigator</h3>
                                        <p className="text-gray-600">Dr. Lipi Thukral</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-lg hover:bg-blue-100 transition">
                                        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                    </a>
                                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-lg hover:bg-blue-100 transition">
                                        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                    </a>
                                    <a href="https://scholar.google.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-3 rounded-lg hover:bg-blue-100 transition">
                                        <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z"/></svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg mt-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h2>
                            <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
                                <iframe
                                    title="CSIR-IGIB Location"
                                    src="https://maps.google.com/maps?q=H73F%2BGQ+New+Delhi,+Delhi&output=embed&z=17"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;

import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
    const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;


    return (
        <div className="min-h-screen bg-slate-100 pt-20">
            <section
                className="py-20 bg-cover bg-center relative"
                style={{ backgroundImage: `url('${url('/images/backgrounds/bg66.png')}')` }}
            >
                {/* Light overlay */}
                <div className="absolute inset-0 bg-slate-100 opacity-90"></div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Interested in collaboration or have questions? We'd love to hear from you
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        {/* Contact Info */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg space-y-8">
                            <div className="flex items-start space-x-4">
                                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                    <p className="text-gray-600">lipi.thukral@igib.in</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                                    <p className="text-gray-600">
                                        Lab 202, CSIR-IGIB, Mathura road Campus<br />New Delhi, India (110025)
                                    </p>
                                </div>
                            </div>


                            {/* Google Maps Embed */}
                            <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 mt-8">
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
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, ExternalLink, BookOpen, Users, FlaskConical } from 'lucide-react';

const Contact = () => {
    const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `mailto:lipi.thukral@igib.in?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    };

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

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                            placeholder="john@university.edu"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        placeholder="Research Collaboration Inquiry"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                                        placeholder="Tell us about your research interests or collaboration proposal..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info & Map */}
                        <div className="space-y-8">
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

                            {/* Quick Links */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <a href={`${url('/research')}`} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition">
                                        <FlaskConical className="w-5 h-5 text-blue-600" />
                                        <span className="text-gray-700 font-medium">Research</span>
                                    </a>
                                    <a href={`${url('/team')}`} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition">
                                        <Users className="w-5 h-5 text-blue-600" />
                                        <span className="text-gray-700 font-medium">Team</span>
                                    </a>
                                    <a href={`${url('/publications')}`} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition">
                                        <BookOpen className="w-5 h-5 text-blue-600" />
                                        <span className="text-gray-700 font-medium">Publications</span>
                                    </a>
                                    <a href="https://www.igib.res.in/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition">
                                        <ExternalLink className="w-5 h-5 text-blue-600" />
                                        <span className="text-gray-700 font-medium">CSIR-IGIB</span>
                                    </a>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
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
                </div>
            </section>
        </div>
    );
};

export default Contact;

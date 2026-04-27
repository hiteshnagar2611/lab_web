import React, { useState, useRef } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

// ─── EmailJS Config ───────────────────────────────────────────────
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an Email Service (Gmail) → note your SERVICE_ID
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
//    Set the "To Email" in the template to: hiteshnagar.secure@gmail.com
// 4. Copy your PUBLIC_KEY from Account → API Keys
// Replace the three placeholder strings below:
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';   // e.g. 'aBcDeFgHiJkLmNoP'
// ──────────────────────────────────────────────────────────────────

const Contact = () => {
    const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;
    const formRef = useRef();

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <section
                className="py-20 bg-cover bg-center relative"
                style={{ backgroundImage: `url('${url('/images/backgrounds/bg6.png')}')` }}
            >
                {/* Light overlay */}
                <div className="absolute inset-0 bg-gray-50 opacity-90"></div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Interested in collaboration or have questions? We'd love to hear from you
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-6">
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
                            <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
                                <iframe
                                    title="CSIR-IGIB Location"
                                    src="https://maps.google.com/maps?q=H73F%2BGQ+New+Delhi,+Delhi&output=embed&z=17"
                                    width="100%"
                                    height="220"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg">
                            {status === 'success' ? (
                                <div className="flex flex-col items-center justify-center h-full py-8 text-center">
                                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-gray-600 mb-6">
                                        Thanks for reaching out. We'll get back to you soon.
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Send Another
                                    </button>
                                </div>
                            ) : (
                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                                    <input
                                        type="text"
                                        name="from_name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                    />
                                    <input
                                        type="email"
                                        name="from_email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                    />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your Message"
                                        rows="4"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                    ></textarea>

                                    {status === 'error' && (
                                        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                                            <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                            Failed to send message. Please try again or email us directly.
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        {status === 'sending' ? (
                                            <>
                                                <Loader className="w-4 h-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
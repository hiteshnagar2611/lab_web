import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

    const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

    const newsItems = [
        {
            date: "December 10, 2024",
            title: "New Publication in Cell Reports",
            content: "Our latest research on SARS-CoV-2 variant adaptation has been published in Cell Reports.",
            link: "https://doi.org/10.1016/j.celrep.2025.116135"
        },
        {
            date: "November 15, 2024",
            title: "Funding Success: Grant Awarded",
            content: "Our lab has been awarded a significant grant for research on autophagy mechanisms.",
            link: null
        },
        {
            date: "October 30, 2024",
            title: "Conference Presentation",
            content: "Team members presented at IGIB 2024 showcasing our latest findings.",
            link: null
        },
        {
            date: "October 12, 2024",
            title: "New Collaboration",
            content: "Exciting collaboration announced with international research partners.",
            link: null
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentNewsIndex((prevIndex) =>
                prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change news every 5 seconds

        return () => clearInterval(timer);
    }, [newsItems.length]);

    const nextNews = () => {
        setCurrentNewsIndex((prevIndex) =>
            prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevNews = () => {
        setCurrentNewsIndex((prevIndex) =>
            prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="min-h-screen">
            {/* Section 1: Hero with Photo and Text */}
            <section className="relative h-screen flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${url('/images/backgrounds/home_page_background.jpg')}')` }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <img
                        src={url('/images/team/LipiT.jpg')}
                        alt="Dr. Lipi Thukral"
                        className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-white shadow-lg object-cover"
                    />
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Welcome to LT Lab
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Advancing computational structural biology research at CSIR-IGIB
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/projects"
                            className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center justify-center"
                        >
                            Explore Our Work <ChevronRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section 2: Lab Introduction */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Lab</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our laboratory has a long-standing interest in autophagy and, more broadly, maintains a strong focus on dynamic protein–membrane interactions. This problem sits uniquely at the interface of structural biology, genomics, biophysics, and computational biology, and we aim not only to understand these processes mechanistically but also to predict how cells respond to changes in their biochemical and membrane environments.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">Research Areas</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Autophagy Research</h4>
                                        <p className="text-gray-600">Investigating molecular mechanisms of autophagy pathways</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">SARS-CoV-2 Studies</h4>
                                        <p className="text-gray-600">Understanding viral adaptation and host interactions</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Protein Structure Prediction</h4>
                                        <p className="text-gray-600">Using AI and computational methods for structure determination</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Drug Discovery</h4>
                                        <p className="text-gray-600">Computational approaches for therapeutic development</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src={url('/images/backgrounds/Picture1.png')}
                                alt="Lab research"
                                className="rounded-lg shadow-lg object-cover h-48 w-full"
                            />
                            <img
                                src={url('/images/backgrounds/SARS.png')}
                                alt="Team collaboration"
                                className="rounded-lg shadow-lg object-cover h-48 w-full"
                            />
                            <img
                                src={url('/images/backgrounds/protine.jpg')}
                                alt="Lab equipment"
                                className="rounded-lg shadow-lg object-cover h-48 w-full"
                            />
                            <img
                                src={url('/images/backgrounds/drug.webp')}
                                alt="Research discussion"
                                className="rounded-lg shadow-lg object-cover h-48 w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Sliding News */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
                        <p className="text-xl text-gray-600">Stay updated with our recent activities and achievements</p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
                            <div className="flex items-center justify-between mb-6">
                                <button
                                    onClick={prevNews}
                                    className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
                                >
                                    <ChevronLeft className="w-6 h-6 text-blue-600" />
                                </button>

                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Calendar className="w-4 h-4" />
                                    <span>{newsItems[currentNewsIndex].date}</span>
                                </div>

                                <button
                                    onClick={nextNews}
                                    className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
                                >
                                    <ChevronRight className="w-6 h-6 text-blue-600" />
                                </button>
                            </div>

                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {newsItems[currentNewsIndex].title}
                                </h3>
                                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                    {newsItems[currentNewsIndex].content}
                                </p>
                                {newsItems[currentNewsIndex].link && (
                                    <a
                                        href={newsItems[currentNewsIndex].link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                                    >
                                        Read More <ChevronRight className="w-4 h-4 ml-2" />
                                    </a>
                                )}
                            </div>

                            <div className="flex justify-center mt-6 space-x-2">
                                {newsItems.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentNewsIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all ${
                                            index === currentNewsIndex ? 'bg-blue-600' : 'bg-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
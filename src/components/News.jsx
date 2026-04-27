import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';

const News = () => {
    const newsItems = [
        {
            date: "December 10, 2024",
            title: "New Publication in Cell Reports",
            content: "Our latest research on SARS-CoV-2 variant adaptation has been published in Cell Reports. This work reveals signatures of omicron-like adaptation in early variants.",
            link: "https://doi.org/10.1016/j.celrep.2025.116135"
        },
        {
            date: "November 15, 2024",
            title: "Funding Success: xyz Grant Awarded",
            content: "Our lab has been awarded a xyz grant",
            link: null
        },
        {
            date: "October 30, 2024",
            title: "Conference @IGIB 2024",
            content: "xyz presented xyz",
            link: null
        },
        {
            date: "October 12, 2024",
            title: "Collaboration with xyz",
            content: "xyz work",
            link: null
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Lab News</h1>
                        <p className="text-gray-600 mb-8">
                            Latest updates and announcements from our lab
                        </p>
                    </div>
                    <div className="space-y-6">
                        {newsItems.map((news, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                    <Calendar className="w-4 h-4" />
                                    <span>{news.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{news.title}</h3>
                                <p className="text-gray-600 mb-4">{news.content}</p>
                                {news.link && (
                                    <a
                                        href={news.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                                    >
                                        Read Publication
                                        <ExternalLink className="w-4 h-4 ml-2" />
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default News;
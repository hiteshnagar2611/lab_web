import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { newsItems } from '../data/newsData';

const News = () => {

    const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

    return (
        <div className="min-h-screen bg-slate-100 pt-24">
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-14 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Lab News</h1>
                        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                            Latest updates and announcements from our lab
                        </p>
                    </div>
                    <div className="space-y-8 max-w-5xl mx-auto">
                        {newsItems.map((news, idx) => (
                            <div
                                key={idx}
                                className="rounded-[32px] border border-slate-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center"
                            >
                                {/* Image Section */}
                                <div className="w-full md:w-1/3 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-50">
                                    <img 
                                        src={url(news.image)} 
                                        alt={news.title} 
                                        className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="flex-grow w-full">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-2">
                                                <Calendar className="w-4 h-4" />
                                                <span>{news.date}</span>
                                            </div>
                                            <h3 className="text-2xl sm:text-3xl font-semibold text-blue-700">
                                                {news.title}
                                            </h3>
                                        </div>
                                        {news.link && (
                                            <a
                                                href={news.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex flex-shrink-0 items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition"
                                            >
                                                Read More
                                                <ExternalLink className="ml-2 h-4 w-4" />
                                            </a>
                                        )}
                                    </div>
                                    <p className="text-slate-600 leading-8">{news.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default News;
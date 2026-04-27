import React from 'react';
import { Award, BookOpen } from 'lucide-react';

const Research = () => {
    const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <section
                className="py-20 bg-cover bg-center relative"
                style={{ backgroundImage: `url('${url('/images/backgrounds/bg5.png')}')` }}
            >
                {/* White overlay for readability */}
                <div className="absolute inset-0 bg-white opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Research</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            highlights of labs work
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Publication 1',
                                description: 'Investigating mechanisms of xyz',
                                icon: <Award className="w-8 h-8 text-blue-600" />,
                                status: 'Active'
                            },
                            {
                                title: 'Mechanism of XYZ',
                                description: 'Developing xyz',
                                icon: <div className="text-3xl">🧪</div>,
                                status: 'Active'
                            },
                            {
                                title: 'xyz enhancement',
                                description: 'Exploring xyz technique',
                                icon: <BookOpen className="w-8 h-8 text-blue-600" />,
                                status: 'Recruiting'
                            }
                        ].map((project, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                            >
                                <div className="mb-4">{project.icon}</div>
                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-3">
                                    {project.status}
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Research;
import React from 'react';
import { ChevronRight, Calendar, Dna, Microscope, Brain, Atom, Pill } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsItems } from '../data/newsData';

const Home = () => {
    const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

    const researchAreas = [
        {
            icon: Microscope,
            title: 'Autophagy & Membrane Biology',
            description: 'Molecular mechanisms of autophagy pathways and protein–membrane interactions',
            link: '/research',
        },
        {
            icon: Dna,
            title: 'SARS-CoV-2 & Viral Studies',
            description: 'Viral adaptation, spike protein dynamics, and host-pathogen interactions',
            link: '/research',
        },
        {
            icon: Brain,
            title: 'AI-Driven Protein Structure',
            description: 'Leveraging AlphaFold2 to expand structural coverage of disease-related proteins',
            link: '/research',
        },
        {
            icon: Atom,
            title: 'Molecular Dynamics',
            description: 'μs-timescale simulations of protein dynamics and ligand binding',
            link: '/research',
        },
        {
            icon: Pill,
            title: 'Drug Discovery',
            description: 'Computational approaches for identifying drug targets and protein-ligand interactions',
            link: '/research',
        },
    ];

    const stats = [
        { value: '43', label: 'Publications' },
        { value: '15+', label: 'Lab Members' },
        { value: '10+', label: 'Years Active' },
        { value: '5', label: 'Research Areas' },
    ];

    const displayNews = newsItems.slice(0, 3);

    return (
        <div className="min-h-screen">
            {/* Section 1: Hero */}
            <section className="relative h-screen flex items-center justify-center">
                <img
                    src={url('/images/GIF/phagophore_movie_trimmed.gif')}
                    alt="Autophagy animation"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <p className="text-sm sm:text-base font-medium tracking-widest uppercase text-blue-300 mb-4">
                        CSIR-Institute of Genomics and Integrative Biology
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Computational Structural Biology Lab
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
                        Understanding biomolecular interactions through simulations, AI, and structural biology
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/research"
                            className="px-8 py-3.5 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center justify-center"
                        >
                            Explore Our Research <ChevronRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link
                            to="/publications"
                            className="px-8 py-3.5 border-2 border-white/40 text-white rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center"
                        >
                            View Publications
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section 2: Stats Bar */}
            <section className="py-10 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-4xl font-bold text-blue-600 mb-1">{stat.value}</p>
                                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: About Lab */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">About Our Lab</h2>
                        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                            The Computational Structural Biology Lab (CSBL) was established in 2016 at CSIR-Institute of Genomics and Integrative Biology, New Delhi, India.
                            We explore the vast diversity of biomolecular interactions and their association with human diseases through cutting-edge computational approaches.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {researchAreas.map((area) => (
                            <Link
                                key={area.title}
                                to={area.link}
                                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center"
                            >
                                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                                    <area.icon className="h-7 w-7 text-blue-600" />
                                </div>
                                <h3 className="font-semibold text-slate-900 mb-2 text-sm">{area.title}</h3>
                                <p className="text-xs text-slate-500 leading-relaxed">{area.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: Research Areas Detail */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">What We Research</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Our work spans multiple areas of computational biology, from fundamental protein science to applied drug discovery
                        </p>
                    </div>

                    <div className="space-y-6 max-w-4xl mx-auto">
                        <div className="flex items-start gap-5 p-6 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                                <Microscope className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">Autophagy & Membrane Biology</h3>
                                <p className="text-sm text-slate-600">Investigating molecular mechanisms of autophagy pathways and dynamic protein–membrane interactions, including membrane curvature effects on protein binding</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 p-6 bg-slate-50 rounded-2xl hover:bg-red-50 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                                <Dna className="h-6 w-6 text-red-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">SARS-CoV-2 & Viral Studies</h3>
                                <p className="text-sm text-slate-600">Understanding viral adaptation mechanisms, spike protein dynamics, and host-pathogen interactions through molecular dynamics simulations</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 p-6 bg-slate-50 rounded-2xl hover:bg-indigo-50 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                                <Brain className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">AI-Driven Protein Structure Prediction</h3>
                                <p className="text-sm text-slate-600">Leveraging AlphaFold2 and other AI tools to expand structural coverage of the autophagic interactome and other disease-related proteins</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 p-6 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <Atom className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">Molecular Dynamics Simulations</h3>
                                <p className="text-sm text-slate-600">Performing μs-timescale simulations to study protein dynamics, conformational changes, and ligand binding mechanisms</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 p-6 bg-slate-50 rounded-2xl hover:bg-green-50 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                                <Pill className="h-6 w-6 text-green-600" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">Drug Discovery & Therapeutics</h3>
                                <p className="text-sm text-slate-600">Computational approaches for identifying potential drug targets and understanding protein-ligand interactions for therapeutic development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: Latest News */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-2">Latest News</h2>
                            <p className="text-lg text-slate-600">Recent activities and achievements from the lab</p>
                        </div>
                        <Link
                            to="/news"
                            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition text-sm"
                        >
                            View All <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {displayNews.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                {item.image && (
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={url(item.image)}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                )}
                                <div className="p-5">
                                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>{item.date}</span>
                                    </div>
                                    <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600 line-clamp-3 mb-4">{item.content}</p>
                                    {item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                                        >
                                            Read More <ChevronRight className="w-4 h-4 ml-1" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center sm:hidden">
                        <Link
                            to="/news"
                            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition text-sm"
                        >
                            View All News <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

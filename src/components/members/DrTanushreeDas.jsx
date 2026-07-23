import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, FileText, Linkedin, Twitter } from 'lucide-react';

const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

const DrTanushreeDas = () => {
    const member = {
        name: 'Dr. Tanushree Das',
        image: url('/images/team/tanushree.JPG'),
        bio: (
            <>
                <p className="mb-4">
                    I am a CSIR Research Associate at CSIR-IGIB working with{' '}
                    <a
                        href="https://www.igib.res.in/?q=LipiThukral"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                    >
                        Dr. Lipi Thukral
                    </a>{' '}
                    at the intersection of computational biology, molecular simulations, and machine learning. My research focuses on the NOTCH signaling pathway, where I study how protein conformations and mutations influence cell-cell communication and therapeutic targeting. I use molecular dynamics simulations, structural modeling, and advanced AI-driven approaches to investigate receptor-ligand interactions, integrating genomic data to elucidate how mutations influence protein structure and function.
                </p>
                <p className="mb-4">
                    I completed my Ph.D. at Department of Chemistry, University of Calcutta, India, under the supervision of{' '}
                    <a href="https://scholar.google.com/citations?user=JRK4UNwAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                        Prof. Chaitali Mukhopadhyay
                    </a>
                    , where I worked on protein-ligand interactions and membrane-associated systems.
                </p>
                <p className="mb-4">
                    I am broadly interested in applying computational approaches to uncover molecular mechanisms and support drug discovery.
                </p>
            </>
        )
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#ffffff', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
            <header className="py-12 px-8">
                <div className="max-w-4xl mx-auto">
                    <Link to="/team" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 text-sm">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Team
                    </Link>
                    <h1 className="text-4xl font-bold mb-2">
                        <span className="font-bold">{member.name.split(' ')[0]}</span> {member.name.split(' ').slice(1).join(' ')}
                    </h1>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-8 pb-16">
                <div className="clearfix">
                    <div className="profile float-right ml-8 mb-8">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-64 h-64 rounded-lg shadow-lg object-cover"
                            onError={(e) => {
                                e.target.src = url('/images/team/placeholder.jpg');
                            }}
                        />
                        <div className="more-info mt-4 text-sm text-gray-600">
                            <p>Computational Biology Lab</p>
                            <p>CSIR-Institute of Genomics and Integrative Biology</p>
                            <p>Sukhdev Vihar, Mathura Road</p>
                            <p>New Delhi - 110020, India</p>
                        </div>
                    </div>

                    <div className="clearfix text-gray-700 leading-relaxed mb-12">
                        {member.bio}
                    </div>
                </div>

                                <section className="text-center">
                    <div className="contact-icons flex justify-center space-x-8 mb-6">
                        <a href="mailto:tanushreedaschem@gmail.com" title="Email" className="flex flex-col items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors">
                            <Mail className="w-7 h-7" />
                            <span className="text-xs font-medium">Email</span>
                        </a>
                        <a href="https://scholar.google.com/citations?hl=en&user=ArdA0ScAAAAJ" title="Google Scholar" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors">
                            <FileText className="w-7 h-7" />
                            <span className="text-xs font-medium">Scholar</span>
                        </a>
                        <a href="#" title="LinkedIn" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-gray-500 hover:text-blue-700 transition-colors">
                            <Linkedin className="w-7 h-7" />
                            <span className="text-xs font-medium">LinkedIn</span>
                        </a>
                        <a href="#" title="Twitter / X" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-gray-500 hover:text-sky-500 transition-colors">
                            <Twitter className="w-7 h-7" />
                            <span className="text-xs font-medium">Twitter</span>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DrTanushreeDas;

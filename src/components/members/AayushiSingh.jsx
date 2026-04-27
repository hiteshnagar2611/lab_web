import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, FileText, Linkedin, Twitter } from 'lucide-react';

const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

const AayushiSingh = () => {
    const member = {
        name: 'Aayushi Singh',
        role: 'PhD Student',
        image: url('/images/team/aayushis.jpg'),
        bio: `Aayushi is a PhD student specializing in computational approaches to study protein-DNA interactions and gene regulation. Her work combines molecular modeling with genomics data.

Research focus:
• Protein-DNA interaction modeling
• Transcription factor binding
• Gene regulation networks
• Computational genomics
• Systems biology approaches

Her research aims to understand how proteins interact with DNA to regulate gene expression.`,
        education: [
            'B.S. in Computational Biology, IIT Delhi (2024)',
            'Summer Research Intern, Broad Institute (2023)'
        ],
        experience: [
            'PhD Student, CSIR-IGIB, India (2024–present)',
            'Summer Research Intern, Broad Institute, USA (2023)',
            'Undergraduate Researcher, IIT Delhi (2020–2024)'
        ],
        awards: ['Graduate Fellowship', 'IIT Delhi Research Excellence Award'],
        publications: 2,
        joined: '2024'
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
                        {member.bio.split('\n').map((paragraph, index) => (
                            <p key={index} className="mb-4">{paragraph}</p>
                        ))}
                    </div>
                </div>

                                <section className="text-center">
                    <div className="contact-icons flex justify-center space-x-8 mb-6">
                        <a href="mailto:contact@example.com" title="Email" className="flex flex-col items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors">
                            <Mail className="w-7 h-7" />
                            <span className="text-xs font-medium">Email</span>
                        </a>
                        <a href="#" title="Download CV" className="flex flex-col items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors">
                            <FileText className="w-7 h-7" />
                            <span className="text-xs font-medium">CV</span>
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

export default AayushiSingh;

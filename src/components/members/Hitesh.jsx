import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, FileText, Linkedin, Twitter } from 'lucide-react';

const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

const Hitesh = () => {
    const member = {
        name: 'Hitesh Nagar',
        image: url('/images/team/hitesh.jpg'),
        bio: (
            <>
                <p className="mb-4">
                    I am a Project Associate at CSIR-IGIB in New Delhi, where I work with{' '}
                    <a
                        href="https://www.igib.res.in/?q=LipiThukral"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                    >
                        Dr. Lipi Thukral
                    </a>
                    . Currently, My research explores how protein language models can uncover the hidden grammar of life.
                </p>
                <p className="mb-4">
                    I completed my B.E. in Information Technology from{' '}
                    <a href="https://www.mbm.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">MBM University, Jodhpur</a>
                    , India in 2025. I have been fortunate to work with amazing mentors across different institutions. In summer 2024, I worked with{' '}
                    <a href="https://jyothivedurada.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Dr. Jyothi Vedurada</a>
                    {' '}at IIT Hyderabad on API misuse prediction. In summer 2023, I was part of the VL2G team at IIT Jodhpur, led by{' '}
                    <a href="https://anandmishra22.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Prof. Anand Mishra</a>
                    , where I developed a scene-text annotation tool for Indian languages.
                </p>
                <p className="mb-4">
                    My research interests lie in deep learning, natural language processing, and large language models. I am particularly interested in building AI applications across domains, bridging research with real-world impact.
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
                        <a href="mailto:hiteshnagar.work@gmail.com" title="Email" className="flex flex-col items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors">
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

export default Hitesh;

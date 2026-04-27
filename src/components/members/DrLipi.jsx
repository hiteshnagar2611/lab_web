import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, FileText, Linkedin, Twitter } from 'lucide-react';

const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

const DrLipi = () => {
    const member = {
        name: 'Dr. Lipi Thukral',
        role: 'Principal Investigator',
        image: url('/images/team/LipiT.jpg'),
        bio: `Dr. Lipi Thukral obtained her Ph.D. from the University of Heidelberg, Germany (2007–2011), where she worked with Prof. Jeremy C. Smith on molecular dynamics simulations of protein folding. She then joined the group of Prof. Syma Khalid at the University of Southampton, UK, as a postdoctoral researcher. In 2013, she was awarded the prestigious DST-INSPIRE Faculty Fellowship and joined CSIR–Institute of Genomics and Integrative Biology (IGIB), India, as a computational biologist. She established her independent research group in 2016 and currently leads a computational structural biology group as a Senior Principal Scientist.
In 2019, Dr. Thukral received the CSIR Young Scientist Award in Biological Sciences in recognition of her contributions to the field of autophagy. She is also a recipient of the India Alliance Intermediate Fellowship supported by DBT and the Wellcome Trust. She is a member of several national expert committees in computational biology and serves on the editorial boards of eLife and the Biophysical Journal, in addition to reviewing for leading international journals.
Dr. Thukral's research focuses on understanding how biomolecular interactions at the structural level, particularly how protein–membrane interactions in autophagy drive autophagosome formation. Her work integrates large-scale molecular simulations with experimental collaborations to interpret complex biological data and guide hypothesis-driven experiments. Her lab has published extensively in the areas of protein–lipid dynamics, autophagy, and structural genomics of infectious diseases.`,
        education: [
            'Ph.D. in Computational Biology',
            'M.S. in Bioinformatics, Stanford University',
            'B.S. in Biotechnology, IIT Delhi'
        ],
        experience: [
            'Senior Principal Scientist, CSIR-IGIB, India (2016–present)',
            'Postdoctoral Researcher, University of Southampton, UK (2011–2013)',
            'Ph.D. Researcher, University of Heidelberg, Germany (2007–2011)'
        ],
        awards: ['NSF CAREER Award (2023)', 'Technology Review Innovator Under 35 (2022)', 'American Chemical Society Young Investigator Award (2021)'],
        publications: 52,
        joined: '2018'
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

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Awards</a>
                    </h2>
                    <div className="awards">
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {member.awards.map((award, index) => (
                                <li key={index} className="text-base">{award}</li>
                            ))}
                        </ul>
                    </div>
                </section>

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

export default DrLipi;

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Mail, FileText, Linkedin, Twitter } from 'lucide-react';

// Helper function to render bio text with markdown-style links
const renderBioWithLinks = (text) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
        // Add text before the link
        if (match.index > lastIndex) {
            parts.push({
                type: 'text',
                content: text.substring(lastIndex, match.index)
            });
        }
        // Add the link
        parts.push({
            type: 'link',
            text: match[1],
            url: match[2]
        });
        lastIndex = linkRegex.lastIndex;
    }
    // Add remaining text
    if (lastIndex < text.length) {
        parts.push({
            type: 'text',
            content: text.substring(lastIndex)
        });
    }

    return parts.map((part, idx) => {
        if (part.type === 'link') {
            return (
                <a
                    key={idx}
                    href={part.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                >
                    {part.text}
                </a>
            );
        }
        return part.content;
    });
};

const MemberBio = () => {
    const { name } = useParams();

    const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

    // Team member data with detailed bio information
    const teamMembers = {
        'dr-lipi-thukral': {
            name: 'Dr. Lipi Thukral',
            role: 'Principal Investigator',
            image: url('/images/team/LipiT.jpg'),
            bio: `Dr. Lipi Thukral obtained her Ph.D. from the University of Heidelberg, Germany (2007–2011), where she worked with Prof. Jeremy C. Smith on molecular dynamics simulations of protein folding. She then joined the group of Prof. Syma Khalid at the University of Southampton, UK, as a postdoctoral researcher. In 2013, she was awarded the prestigious DST-INSPIRE Faculty Fellowship and joined CSIR–Institute of Genomics and Integrative Biology (IGIB), India, as a computational biologist. She established her independent research group in 2016 and currently leads a computational structural biology group as a Senior Principal Scientist.
In 2019, Dr. Thukral received the CSIR Young Scientist Award in Biological Sciences in recognition of her contributions to the field of autophagy. She is also a recipient of the India Alliance Intermediate Fellowship supported by DBT and the Wellcome Trust. She is a member of several national expert committees in computational biology and serves on the editorial boards of eLife and the Biophysical Journal, in addition to reviewing for leading international journals.
Dr. Thukral’s research focuses on understanding how biomolecular interactions at the structural level, particularly how protein–membrane interactions in autophagy drive autophagosome formation. Her work integrates large-scale molecular simulations with experimental collaborations to interpret complex biological data and guide hypothesis-driven experiments. Her lab has published extensively in the areas of protein–lipid dynamics, autophagy, and structural genomics of infectious diseases. 

`,
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
            awards: [
                'NSF CAREER Award (2023)',
                'Technology Review Innovator Under 35 (2022)',
                'American Chemical Society Young Investigator Award (2021)'
            ],
            publications: 52,
            joined: '2018'
        },
        'dr-deepanshi-gahlot': {
            name: 'Dr. Deepanshi Gahlot',
            role: 'Postdoc',
            image: url('/images/team/deepanshi.JPG'),
            bio: `Dr. Deepanshi is a postdoctoral researcher specializing in computational protein design and molecular modeling. Her work focuses on developing novel algorithms for protein structure prediction and understanding protein-ligand interactions.

Research interests:
• Protein structure prediction
• Molecular docking simulations
• Virtual screening
• Drug-target interactions
• Machine learning for protein design

She is passionate about applying computational methods to solve real-world biological problems.`,
            education: [
                'Ph.D. in Computational Chemistry, University of Cambridge',
                'M.S. in Chemistry, IIT Bombay',
                'B.S. in Chemistry, Delhi University'
            ],
            experience: [
                'Postdoctoral Researcher, CSIR-IGIB, India (2022–present)',
                'Ph.D. Researcher, University of Cambridge, UK (2018–2022)',
                'Research Intern, Schrödinger Inc. (2017)'
            ],
            awards: [
                'Cambridge Trust Scholarship',
                'Best PhD Thesis Award (2022)'
            ],
            publications: 15,
            joined: '2022'
        },
        'dr-shailya-verma': {
            name: 'Dr. Shailya Verma',
            role: 'Postdoc',
            image: url('/images/team/shailyadi.JPG'),
            bio: `Dr. Shailya specializes in molecular dynamics simulations and computational biophysics. Her research focuses on understanding the dynamics of protein folding and protein-protein interactions at the atomic level.

Key research areas:
• Protein folding mechanisms
• Molecular dynamics simulations
• Free energy calculations
• Protein-protein interaction networks
• Computational drug design

Her work combines theoretical and computational approaches to address fundamental questions in structural biology.`,
            education: [
                'Ph.D. in Biophysics, University of Oxford',
                'M.S. in Physics, IIT Kanpur',
                'B.S. in Physics, Delhi University'
            ],
            experience: [
                'Postdoctoral Researcher, CSIR-IGIB, India (2021–present)',
                'Ph.D. Researcher, University of Oxford, UK (2017–2021)',
                'Research Associate, TIFR Mumbai (2016–2017)'
            ],
            awards: [
                'Rhodes Scholarship',
                'Oxford Doctoral Prize (2021)'
            ],
            publications: 18,
            joined: '2021'
        },
        'dr-shruti-mathur': {
            name: 'Dr. Shruti Mathur',
            role: 'Postdoc',
            image: url('/images/team/shruti.jpeg'),
            bio: `Dr. Shruti Mathur works on developing machine learning models for protein structure prediction and function annotation. Her research bridges artificial intelligence and structural biology.

Research focus:
• Machine learning for protein structure prediction
• Deep learning architectures for biological data
• Protein function prediction
• AI-driven drug discovery
• Computational genomics

She is particularly interested in applying cutting-edge AI techniques to solve complex biological problems.`,
            education: [
                'Ph.D. in Computer Science, Carnegie Mellon University',
                'M.S. in Computational Biology',
                'B.S. in Computer Science, IIT Delhi'
            ],
            experience: [
                'Postdoctoral Researcher, CSIR-IGIB, India (2020–present)',
                'Ph.D. Researcher, Carnegie Mellon University, USA (2016–2020)',
                'Software Engineer, Google Research (2015–2016)'
            ],
            awards: [
                'Google PhD Fellowship',
                'Presidential Fellowship'
            ],
            publications: 22,
            joined: '2020'
        },
        'dr-tanushree-das': {
            name: 'Dr. Tanushree Das',
            role: 'Postdoc',
            image: url('/images/team/tanushree.JPG'),
            bio: `Dr. Tanushree Das specializes in computational enzymology and mechanistic studies of enzyme catalysis. Her work combines quantum mechanical calculations with molecular dynamics simulations.

Research interests:
• Enzyme mechanism studies
• Quantum chemistry calculations
• Reaction pathway analysis
• Computational enzymology
• Drug-enzyme interactions

Her research aims to understand the fundamental principles of enzyme catalysis and apply this knowledge to drug design.`,
            education: [
                'Ph.D. in Computational Chemistry, ETH Zurich',
                'M.S. in Chemistry, IIT Madras',
                'B.S. in Chemistry, Presidency College'
            ],
            experience: [
                'Postdoctoral Researcher, CSIR-IGIB, India (2023–present)',
                'Ph.D. Researcher, ETH Zurich, Switzerland (2019–2023)',
                'Research Scientist, Novartis Institutes for BioMedical Research (2018–2019)'
            ],
            awards: [
                'ETH Excellence Scholarship',
                'Swiss National Science Foundation Fellowship'
            ],
            publications: 16,
            joined: '2023'
        },
        'akanksha-kaushik': {
            name: 'Akanksha Kaushik',
            role: 'PhD Student',
            image: url('/images/team/akankshak.jpg'),
            bio: `Akanksha is a PhD student working on developing novel computational methods for protein structure determination using cryo-EM data. Her research focuses on integrating experimental and computational approaches.

Current research:
• Cryo-EM structure determination
• Image processing algorithms
• Machine learning for structural biology
• Protein complex analysis
• Method development for structural studies

She is passionate about developing tools that make structural biology more accessible and efficient.`,
            Education: [
                'B.S. in Biotechnology, IIT Delhi (expected 2024)',
                'Research Intern, NIH (2023)'
            ],
            Experience: [
                'PhD Student, CSIR-IGIB, India (2024–present)',
                'Research Intern, National Institutes of Health, USA (2023)',
                'Undergraduate Researcher, IIT Delhi (2021–2023)'
            ],
            Awards: [
                'Presidential Fellowship',
                'IIT Delhi Academic Excellence Award'
            ],
            Publications: 3,
            Joined: '2024'
        },
        'aayushi-singh': {
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
            awards: [
                'Graduate Fellowship',
                'IIT Delhi Research Excellence Award'
            ],
            publications: 2,
            joined: '2024'
        },
        'akanksha-arun': {
            name: 'Akanksha Arun',
            role: 'PhD Student',
            image: url('/images/team/akankshadi.JPG'),
            bio: `Akanksha is a PhD student working on computational immunology and antibody design. Her research focuses on developing algorithms for therapeutic antibody development.

Current projects:
• Antibody-antigen interaction modeling
• Computational antibody design
• Immunoinformatics
• Machine learning for immunology
• Therapeutic protein engineering

She is interested in applying computational methods to accelerate drug discovery in immunology.`,
            education: [
                'B.S. in Biotechnology, IIT Bombay (2024)',
                'Research Intern, Novartis (2023)'
            ],
            experience: [
                'PhD Student, CSIR-IGIB, India (2024–present)',
                'Research Intern, Novartis Institutes for BioMedical Research (2023)',
                'Undergraduate Researcher, IIT Bombay (2020–2024)'
            ],
            awards: [
                'Bioengineering Fellowship',
                'IIT Bombay Institute Medal'
            ],
            publications: 4,
            joined: '2024'
        },
        'debendra-kumar-swain': {
            name: 'Debendra Kumar Swain',
            role: 'PhD Student',
            image: url('/images/team/debe.jpg'),
            bio: `Debendra is a PhD student specializing in computational structural biology and membrane protein modeling. His research focuses on understanding membrane protein structure and function.

Research interests:
• Membrane protein structure prediction
• Lipid-protein interactions
• Molecular dynamics of membrane systems
• Computational biophysics
• Drug-membrane interactions

His work aims to develop better models for membrane proteins, which are important drug targets.`,
            education: [
                'M.S. in Biophysics, TIFR Mumbai (2023)',
                'B.S. in Physics, Utkal University (2021)'
            ],
            experience: [
                'PhD Student, CSIR-IGIB, India (2023–present)',
                'Research Assistant, TIFR Mumbai (2021–2023)',
                'Summer Intern, National Centre for Biological Sciences (2022)'
            ],
            awards: [
                'TIFR Graduate Fellowship',
                'DBT Junior Research Fellowship'
            ],
            publications: 5,
            joined: '2023'
        },
        'jesu-castin': {
            name: 'Jesu Castin',
            role: 'PhD Student',
            image: url('/images/team/jesu.JPG'),
            bio: `Jesu is a PhD student working on developing computational tools for RNA structure prediction and RNA-protein interactions. His research combines algorithms and machine learning.

Current research:
• RNA structure prediction algorithms
• RNA-protein interaction modeling
• Machine learning for RNA biology
• Computational RNA design
• RNA therapeutics development

He is passionate about understanding RNA biology through computational approaches.`,
            education: [
                'M.S. in Computational Biology, IIT Delhi (2023)',
                'B.S. in Biotechnology, Anna University (2021)'
            ],
            experience: [
                'PhD Student, CSIR-IGIB, India (2023–present)',
                'Research Assistant, IIT Delhi (2021–2023)',
                'Undergraduate Researcher, Anna University (2018–2021)'
            ],
            awards: [
                'IIT Delhi Research Fellowship',
                'Anna University Gold Medal'
            ],
            publications: 3,
            joined: '2023'
        },
        'anamika-singh': {
            name: 'Anamika Singh',
            role: 'PhD Student',
            image: url('/images/team/anamika.jpg'),
            bio: `Anamika is a PhD student specializing in computational structural biology with a focus on protein-ligand interactions and drug design. Her research combines molecular modeling, molecular dynamics simulations, and machine learning approaches.

Current research:
• Protein-ligand binding studies
• Molecular dynamics simulations
• Virtual screening and drug design
• Machine learning for molecular property prediction
• Computational analysis of protein structures

Her work aims to develop computational tools for understanding molecular interactions and accelerating drug discovery processes.`,
            education: [
                'M.S. in Computational Chemistry, IIT Delhi (2023)',
                'B.S. in Chemistry, Delhi University (2021)'
            ],
            experience: [
                'PhD Student, CSIR-IGIB, India (2024–present)',
                'Research Assistant, IIT Delhi (2021–2023)',
                'Summer Intern, CSIR-CDRI (2022)'
            ],
            awards: [
                'IIT Delhi Research Fellowship',
                'CSIR Junior Research Fellowship'
            ],
            publications: 2,
            joined: '2024'
        },
        'hitesh-nagar': {
            name: 'Hitesh Nagar',
            role: 'Project Associate',
            image: url('/images/team/hitesh.jpg'),
            bio: `I am a Project Associate at CSIR-IGIB in New Delhi, where I work with [Dr. Lipi Thukral](https://www.igib.res.in/?q=LipiThukral). My current research focuses on protein language models (PLMs), graph neural networks (GNNs), and AI for biology.

I have been fortunate to work with amazing mentors across different institutions. In 2025, I worked at Secure Meters Limited with Rahul Mathur on network security. In summer 2024, I worked with [Jythi Veduradha](https://jyothivedurada.github.io/) at IIT Hyderabad on API misuse prediction, and with [Jimson Mathew](https://iitp.irins.org/profile/62448) at IIT Patna on automated catalogue creation using computer vision. In summer 2023, I was part of the VL2G team at IIT Jodhpur, led by [Anand Mishra](https://anandmishra22.github.io/), where I developed a scene-text annotation tool for Indian languages.

My research interests lie in deep learning, natural language processing, and large language models. I am particularly interested in building AI applications across domains, bridging research with real-world impact.`,
            education: [
                'MBM University, Jodhpur, India (June 2025)'
            ],
            experience: [
                'Secure Meters Limited, Graduate Engineer trainee(Network Security) | Udaipur, RJ July 2025 ‑ Present\n• Managed and secured computer networks by configuring firewalls, switches, and applying cybersecurity best practices to prevent threats and ensure system integrity. Managed around 50+ tickets every month.',
                'Secure Meters Limited, Software Engineering Intern | Udaipur, RJ Jan 2025 ‑ Feb 2025\n• Designed and implemented an Employee Benevolent Software System, transitioning the company\'s process from offline (paper-based) to a fully online platform, enhancing efficiency by 70%, accessibility, and record management.',
                'Indian Institute of Technology Hyderabad, Summer Intern | Sangareedy, TS June 2024 ‑ July 2024\n• Built and optimized a dataset of 15K+ code samples for API misuse prediction, enhancing model training efficiency and accuracy in software reliability tasks.',
                'Indian Institute of Technology Patna, Computer Vision Intern | Remote March 2024 ‑ Apr 2024\n• Reduced recognition errors by 26% and improved text recognition accuracy by 18% in a supermarket product identification pipeline.\n• Implemented advanced image processing techniques including skeletonization, binary conversion, and ABINET based on ASTER for robust recognition across a self made labeled dataset of 250,000+ images spanning 500+ brand classes.',
                'Indian Institute of Technology Goa, NSM Intern | Remote Jan 2024 ‑ Feb 2024\n• Developed and optimized C++ code for CFD Solver , ensuring high performance on various GPU architectures using Kokkos.\n• Converted CUDA/OpenACC code to Kokkos, enabling performance portability across NVIDIA, AMD, and Intel GPUs with CUDA and OpenMP.',
                'Indian Institute of Technology Jodhpur, Project Intern | Jodhpur, RJ June 2023 ‑ July 2023\n• Developed and deployed a desktop application, enabling seamless text annotation in 10+ Indian regional languages for computer vision tasks; enhanced annotation process and accuracy by 40%.',
                'Oil and Natural Gas Corporation Dehradun, Summer Trainee | Remote June 2023 ‑ July 2023\n• Led the development and implementation of machine learning models for facies identification from well logs, increasing accuracy by 30% and efficiency by 40% in geological analysis for oil discovery.'
            ],
            awards: [
                'Research Assistantship'
            ],
            publications: 2,
            joined: '2024'
        },
        'prathamdeep-dhanoa': {
            name: 'Prathamdeep Dhanoa',
            role: 'Project Associate',
            image: url('/images/team/pratham.jpg'),
            bio: `Prathamdeep is a project associate focusing on data analysis and computational pipelines for structural biology research. He develops automated workflows for large-scale data processing.

Skills and expertise:
• Data analysis and visualization
• Pipeline development
• High-performance computing
• Statistical analysis
• Scientific computing

His work supports the lab's research by providing efficient computational solutions.`,
            education: [
                'M.S. in Computational Biology',
                'B.S. in Biotechnology, IIT Kharagpur'
            ],
            experience: [
                'Project Associate, CSIR-IGIB, India (2024–present)',
                'Data Analyst, Biotech Company (2022–2024)',
                'Research Intern, IIT Kharagpur (2021–2022)'
            ],
            awards: [
                'Computational Biology Fellowship'
            ],
            publications: 1,
            joined: '2024'
        },
        'nabajit': {
            name: 'Nabajit',
            role: 'Intern',
            image: url('/images/team/nabojit.png'),
            bio: `Nabajit is an undergraduate intern working on machine learning applications in structural biology. He is developing models for protein classification and prediction tasks.

Current projects:
• Machine learning for protein classification
• Data preprocessing pipelines
• Model evaluation and validation
• Scientific computing

He is gaining valuable experience in applying AI to biological problems.`,
            education: [
                'B.S. in Computer Science (Sophomore)'
            ],
            experience: [
                'Research Intern, CSIR-IGIB, India (2024–present)',
                'Undergraduate Researcher, University Project (2023–2024)'
            ],
            awards: [
                'UROP Fellowship'
            ],
            publications: 0,
            joined: '2024'
        },
        'varrunavi': {
            name: 'Varrunavi',
            role: 'Intern',
            image: url('/images/team/varrunavi.jpg'),
            bio: `Varrunavi is an undergraduate intern focusing on molecular visualization and educational tools for structural biology. She works on creating interactive 3D models and educational content.

Current work:
• Molecular visualization tools
• Educational content development
• User interface design
• Scientific communication

She is passionate about making science more accessible through better visualization and education.`,
            education: [
                'B.S. in Biology (Sophomore)'
            ],
            experience: [
                'Research Intern, CSIR-IGIB, India (2024–present)',
                'Undergraduate Researcher, Biology Department (2023–2024)'
            ],
            awards: [
                'Biology UROP Award'
            ],
            publications: 0,
            joined: '2024'
        }
    };

    const member = teamMembers[name];

    if (!member) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Member Not Found</h1>
                    <Link to="/team" className="text-blue-600 hover:underline">
                        ← Back to Team
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#ffffff', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
            {/* Header */}
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

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-8 pb-16">
                <div className="clearfix">
                    {/* Profile Picture - Right Side */}
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

                    {/* Biography Text */}
                    <div className="clearfix text-gray-700 leading-relaxed mb-12">
                        {member.bio.split('\n').map((paragraph, index) => (
                            <p key={index} className="mb-4">{renderBioWithLinks(paragraph)}</p>
                        ))}
                    </div>
                </div>


                {/* Social/Contact Section */}
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

export default MemberBio;
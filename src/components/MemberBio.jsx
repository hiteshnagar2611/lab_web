import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Mail, FileText, Linkedin, Twitter } from 'lucide-react';

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
            image: url('/images/team/LipiT.jpg'),
            bio: `Dr. Lipi Thukral obtained her Ph.D. from the University of Heidelberg, Germany (2007–2011), where she worked with Prof. Jeremy C. Smith on molecular dynamics simulations of protein folding. She then joined the group of Prof. Syma Khalid at the University of Southampton, UK, as a postdoctoral researcher. In 2013, she was awarded the prestigious DST-INSPIRE Faculty Fellowship and joined CSIR–Institute of Genomics and Integrative Biology (IGIB), India, as a computational biologist. She established her independent research group in 2016 and currently leads a computational structural biology group as a Senior Principal Scientist.
In 2019, Dr. Thukral received the CSIR Young Scientist Award in Biological Sciences in recognition of her contributions to the field of autophagy. She is also a recipient of the India Alliance Intermediate Fellowship supported by DBT and the Wellcome Trust. She is a member of several national expert committees in computational biology and serves on the editorial boards of eLife and the Biophysical Journal, in addition to reviewing for leading international journals.
Dr. Thukral's research focuses on understanding how biomolecular interactions at the structural level, particularly how protein–membrane interactions in autophagy drive autophagosome formation. Her work integrates large-scale molecular simulations with experimental collaborations to interpret complex biological data and guide hypothesis-driven experiments. Her lab has published extensively in the areas of protein–lipid dynamics, autophagy, and structural genomics of infectious diseases. 

`
        },
        'dr-deepanshi-gahlot': {
            name: 'Dr. Deepanshi Gahlot',
            image: url('/images/team/deepanshi.JPG'),
            bio: `Dr. Deepanshi is a postdoctoral researcher specializing in computational protein design and molecular modeling. Her work focuses on developing novel algorithms for protein structure prediction and understanding protein-ligand interactions.

Research interests:
• Protein structure prediction
• Molecular docking simulations
• Virtual screening
• Drug-target interactions
• Machine learning for protein design

She is passionate about applying computational methods to solve real-world biological problems.`
        },
        'dr-shailya-verma': {
            name: 'Dr. Shailya Verma',
            image: url('/images/team/shailyadi.JPG'),
            bio: `Dr. Shailya specializes in molecular dynamics simulations and computational biophysics. Her research focuses on understanding the dynamics of protein folding and protein-protein interactions at the atomic level.

Key research areas:
• Protein folding mechanisms
• Molecular dynamics simulations
• Free energy calculations
• Protein-protein interaction networks
• Computational drug design

Her work combines theoretical and computational approaches to address fundamental questions in structural biology.`
        },
        'dr-shruti-mathur': {
            name: 'Dr. Shruti Mathur',
            image: url('/images/team/shruti.jpeg'),
            bio: `Dr. Shruti Mathur works on developing machine learning models for protein structure prediction and function annotation. Her research bridges artificial intelligence and structural biology.

Research focus:
• Machine learning for protein structure prediction
• Deep learning architectures for biological data
• Protein function prediction
• AI-driven drug discovery
• Computational genomics

She is particularly interested in applying cutting-edge AI techniques to solve complex biological problems.`
        },
        'dr-tanushree-das': {
            name: 'Dr. Tanushree Das',
            image: url('/images/team/tanushree.JPG'),
            bio: `I am a CSIR Research Associate at CSIR-IGIB working with [Dr. Lipi Thukral](https://www.igib.res.in/?q=LipiThukral) at the intersection of computational biology, molecular simulations, and machine learning. My research focuses on the NOTCH signaling pathway, where I study how protein conformations and mutations influence cell-cell communication and therapeutic targeting. I use molecular dynamics simulations, structural modeling, and advanced AI-driven approaches to investigate receptor-ligand interactions, integrating genomic data to elucidate how mutations influence protein structure and function.

I completed my Ph.D. at Department of Chemistry, University of Calcutta, India, under the supervision of [Prof. Chaitali Mukhopadhyay](https://scholar.google.com/citations?user=JRK4UNwAAAAJ&hl=en), where I worked on protein-ligand interactions and membrane-associated systems.

I am broadly interested in applying computational approaches to uncover molecular mechanisms and support drug discovery.`
        },
        'akanksha-kaushik': {
            name: 'Akanksha Kaushik',
            image: url('/images/team/akankshak.jpg'),
            bio: `Akanksha is a PhD student working on developing novel computational methods for protein structure determination using cryo-EM data. Her research focuses on integrating experimental and computational approaches.

Current research:
• Cryo-EM structure determination
• Image processing algorithms
• Machine learning for structural biology
• Protein complex analysis
• Method development for structural studies

She is passionate about developing tools that make structural biology more accessible and efficient.`
        },
        'aayushi-singh': {
            name: 'Aayushi Singh',
            image: url('/images/team/aayushis.jpg'),
            bio: `Aayushi is a PhD student specializing in computational approaches to study protein-DNA interactions and gene regulation. Her work combines molecular modeling with genomics data.

Research focus:
• Protein-DNA interaction modeling
• Transcription factor binding
• Gene regulation networks
• Computational genomics
• Systems biology approaches

Her research aims to understand how proteins interact with DNA to regulate gene expression.`
        },
        'akanksha-arun': {
            name: 'Akanksha Arun',
            image: url('/images/team/akankshadi.JPG'),
            bio: `Akanksha is a PhD student working on computational immunology and antibody design. Her research focuses on developing algorithms for therapeutic antibody development.

Current projects:
• Antibody-antigen interaction modeling
• Computational antibody design
• Immunoinformatics
• Machine learning for immunology
• Therapeutic protein engineering

She is interested in applying computational methods to accelerate drug discovery in immunology.`
        },
        'debendra-kumar-swain': {
            name: 'Debendra Kumar Swain',
            image: url('/images/team/debe.jpg'),
            bio: `Debendra is a PhD student specializing in computational structural biology and membrane protein modeling. His research focuses on understanding membrane protein structure and function.

Research interests:
• Membrane protein structure prediction
• Lipid-protein interactions
• Molecular dynamics of membrane systems
• Computational biophysics
• Drug-membrane interactions

His work aims to develop better models for membrane proteins, which are important drug targets.`
        },
        'jesu-castin': {
            name: 'Jesu Castin',
            image: url('/images/team/jesu.JPG'),
            bio: `Jesu is a PhD student working on developing computational tools for RNA structure prediction and RNA-protein interactions. His research combines algorithms and machine learning.

Current research:
• RNA structure prediction algorithms
• RNA-protein interaction modeling
• Machine learning for RNA biology
• Computational RNA design
• RNA therapeutics development

He is passionate about understanding RNA biology through computational approaches.`
        },
        'anamika-singh': {
            name: 'Anamika Singh',
            image: url('/images/team/anamika.jpg'),
            bio: `I am currently pursuing my Ph.D. at the CSB Lab, where I work with [Dr. Lipi Thukral](https://www.igib.res.in/?q=LipiThukral), and my research focuses on deciphering the role of autophagy in cancer. My work aims to understand the molecular mechanisms by which autophagy influences cancer initiation, progression, and therapeutic response, with the goal of identifying novel insights into cancer biology.

I completed my Integrated Master's degree at NISER, Bhubaneswar. For my Master's thesis, I worked under the supervision of [Dr. Manjusha Dixit](https://nisersbs.wixsite.com/manjushadixitslab) in the field of Cancer and Molecular Biology. My research investigated the role of FRG1 in the prognosis and tumorigenesis of gastric cancer, exploring its potential contribution to disease progression and its relevance as a prognostic marker.

My research interests lie in cancer biology, molecular biology, and the cellular mechanisms underlying disease progression. I am particularly interested in understanding the molecular pathways that regulate cancer development and in translating these insights toward improved therapeutic strategies.`
        },
        'hitesh-nagar': {
            name: 'Hitesh Nagar',
            image: url('/images/team/hitesh.jpg'),
            bio: `I am a Project Associate at CSIR-IGIB in New Delhi, where I work with [Dr. Lipi Thukral](https://www.igib.res.in/?q=LipiThukral). Currently, My research explores how protein language models can uncover the hidden grammar of life.

I completed my B.E. in Information Technology from [MBM University, Jodhpur](https://www.mbm.ac.in/), India in 2025. I have been fortunate to work with amazing mentors across different institutions. In summer 2024, I worked with [Dr. Jyothi Vedurada](https://jyothivedurada.github.io/) at IIT Hyderabad on API misuse prediction. In summer 2023, I was part of the VL2G team at IIT Jodhpur, led by [Prof. Anand Mishra](https://anandmishra22.github.io/), where I developed a scene-text annotation tool for Indian languages.

My research interests lie in deep learning, natural language processing, and large language models. I am particularly interested in building AI applications across domains, bridging research with real-world impact.`
        },
        'prathamdeep-dhanoa': {
            name: 'Prathamdeep Dhanoa',
            image: url('/images/team/pratham.jpg'),
            bio: `Prathamdeep is a project associate focusing on data analysis and computational pipelines for structural biology research. He develops automated workflows for large-scale data processing.

Skills and expertise:
• Data analysis and visualization
• Pipeline development
• High-performance computing
• Statistical analysis
• Scientific computing

His work supports the lab's research by providing efficient computational solutions.`
        },
        'nabajit': {
            name: 'Nabajit',
            image: url('/images/team/nabojit.png'),
            bio: `Nabajit is an undergraduate intern working on machine learning applications in structural biology. He is developing models for protein classification and prediction tasks.

Current projects:
• Machine learning for protein classification
• Data preprocessing pipelines
• Model evaluation and validation
• Scientific computing

He is gaining valuable experience in applying AI to biological problems.`
        },
        'varrunavi': {
            name: 'Varrunavi',
            image: url('/images/team/varrunavi.jpg'),
            bio: `Varrunavi is an undergraduate intern focusing on molecular visualization and educational tools for structural biology. She works on creating interactive 3D models and educational content.

Current work:
• Molecular visualization tools
• Educational content development
• User interface design
• Scientific communication

She is passionate about making science more accessible through better visualization and education.`
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
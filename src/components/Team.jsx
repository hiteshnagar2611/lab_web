import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, BookOpen, Calendar, GraduationCap, ArrowRight, Mail } from 'lucide-react';

const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

const getMemberUrl = (name) => {
    return name.toLowerCase()
        .replace('dr. ', 'dr-')
        .replace(/\s+/g, '-')
        .replace(/\./g, '');
};

const getTopicColor = (topic) => {
    const colors = {
        'Autophagy': 'bg-purple-100 text-purple-700',
        'SARS-CoV-2': 'bg-red-100 text-red-700',
        'Molecular Dynamics': 'bg-blue-100 text-blue-700',
        'Protein Folding': 'bg-amber-100 text-amber-700',
        'Membrane Biology': 'bg-teal-100 text-teal-700',
        'AI/ML': 'bg-indigo-100 text-indigo-700',
        'Drug Discovery': 'bg-green-100 text-green-700',
        'Protein Structure': 'bg-cyan-100 text-cyan-700',
        'Genomics': 'bg-orange-100 text-orange-700',
        'Mycobacteria': 'bg-rose-100 text-rose-700',
        'NOTCH': 'bg-violet-100 text-violet-700',
        'Bioinformatics': 'bg-sky-100 text-sky-700',
    };
    return colors[topic] || 'bg-slate-100 text-slate-700';
};

const MemberCard = ({ member, size = 'default' }) => {
    return (
        <Link to={`/team/${getMemberUrl(member.name)}`} className="block group">
            <div className={`bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden ${size === 'pi' ? 'p-6 sm:p-8' : 'p-5'}`}>
                <div className="flex flex-col items-center text-center">
                    <div className={`${size === 'pi' ? 'w-36 h-36' : 'w-28 h-28'} mb-4 rounded-full overflow-hidden border-4 border-slate-100 group-hover:border-blue-200 transition-colors`}>
                        <img
                            src={member.img || url('/images/team/placeholder.jpg')}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = url('/images/team/placeholder.jpg');
                            }}
                        />
                    </div>
                    <h4 className={`${size === 'pi' ? 'text-xl' : 'text-base'} font-semibold text-slate-900 mb-1`}>
                        {member.name}
                    </h4>
                    <p className="text-sm text-slate-500 mb-2">{member.role}</p>
                    {member.topics && member.topics.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-1 mt-1">
                            {member.topics.map((topic) => (
                                <span
                                    key={topic}
                                    className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getTopicColor(topic)}`}
                                >
                                    {topic}
                                </span>
                            ))}
                        </div>
                    )}
                    <div className="mt-3 text-blue-600 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        View Profile <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

const AlumniCard = ({ member }) => (
    <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
            {member.img ? (
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 text-lg font-semibold">
                    {member.name.charAt(0)}
                </div>
            )}
        </div>
        <div className="min-w-0">
            <p className="font-semibold text-slate-900 text-sm">{member.name}</p>
            <p className="text-xs text-slate-500">{member.role}</p>
            {member.current && (
                <p className="text-xs text-blue-600 mt-0.5">{member.current}</p>
            )}
        </div>
    </div>
);

const Team = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselImages = [
        url('/images/team/photos/p1.jpg'),
        url('/images/team/photos/p2.jpg'),
        url('/images/team/photos/p3.jpg'),
        url('/images/team/photos/p4.jpg'),
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [carouselImages.length]);

    const principalInvestigator = [
        {
            name: 'Dr. Lipi Thukral',
            img: url('/images/team/LipiT.jpg'),
            role: 'Principal Investigator',
            topics: ['Computational Biology', 'Structural Biology'],
        }
    ];

    const postdocs = [
        {
            name: 'Dr. Deepanshi Gahlot',
            img: url('/images/team/deepanshi.JPG'),
            role: 'Postdoctoral Researcher',
            topics: ['Molecular Dynamics', 'Protein Structure'],
        },
        {
            name: 'Dr. Shailya Verma',
            img: url('/images/team/shailyadi.JPG'),
            role: 'Postdoctoral Researcher',
            topics: ['SARS-CoV-2', 'Genomics'],
        },
        {
            name: 'Dr. Shruti Mathur',
            img: url('/images/team/shruti.jpeg'),
            role: 'Postdoctoral Researcher',
            topics: ['Drug Discovery', 'Bioinformatics'],
        },
        {
            name: 'Dr. Tanushree Das',
            img: url('/images/team/tanushree.JPG'),
            role: 'Postdoctoral Researcher',
            topics: ['NOTCH', 'Molecular Dynamics'],
        }
    ];

    const phdStudents = [
        {
            name: 'Akanksha Kaushik',
            img: url('/images/team/akankshak.jpg'),
            role: 'PhD Student',
            topics: ['Autophagy', 'Protein Structure'],
        },
        {
            name: 'Aayushi Singh',
            img: url('/images/team/aayushis.jpg'),
            role: 'PhD Student',
            topics: ['SARS-CoV-2', 'Genomics'],
        },
        {
            name: 'Akanksha Arun',
            img: url('/images/team/akankshadi.JPG'),
            role: 'PhD Student',
            topics: ['Autophagy', 'AI/ML'],
        },
        {
            name: 'Debendra Kumar Swain',
            img: url('/images/team/debe.jpg'),
            role: 'PhD Student',
            topics: ['Molecular Dynamics', 'Protein Folding'],
        },
        {
            name: 'Jesu Castin',
            img: url('/images/team/jesu.JPG'),
            role: 'PhD Student',
            topics: ['Autophagy', 'Structural Biology'],
        },
        {
            name: 'Anamika Singh',
            img: url('/images/team/anamika.jpg'),
            role: 'PhD Student',
            topics: ['Autophagy', 'Cancer Biology'],
        }
    ];

    const projectAssociates = [
        {
            name: 'Hitesh Nagar',
            img: url('/images/team/hitesh.jpg'),
            role: 'Project Associate',
            topics: ['AI/ML', 'Protein Language Models'],
        },
        {
            name: 'Prathamdeep Dhanoa',
            img: url('/images/team/pratham.jpg'),
            role: 'Project Associate',
            topics: ['Bioinformatics', 'Genomics'],
        }
    ];

    const interns = [
        {
            name: 'Nabajit',
            img: url('/images/team/nabojit.png'),
            role: 'Research Intern',
            topics: ['Computational Biology'],
        },
        {
            name: 'Varrunavi',
            img: url('/images/team/varrunavi.jpg'),
            role: 'Research Intern',
            topics: ['Structural Biology'],
        }
    ];

    const alumniPhd = [
        { name: 'Arjun Ray', role: 'PhD Student', current: 'IIIT Delhi, Assistant Professor' },
    ];

    const alumniFellows = [
        { name: 'Prithvi Singh', role: 'Project Fellow', current: 'Bioinformatics Industry' },
        { name: 'Nikhil Agarwal', role: 'Project Fellow', current: 'Institute of Molecular Biology, Poland' },
        { name: 'Suhani Nagpal', role: 'Project Fellow', current: 'University of California Merced, USA' },
        { name: 'Antara Mazumdar', role: 'Project Fellow', current: 'University of Groningen, Netherlands' },
        { name: 'Shweta Singh', role: 'Project Fellow', current: 'IIIT Hyderabad, India' },
    ];

    const alumniTrainees = [
        { name: 'Rajshri Iyer', role: 'Summer Intern (2014)', current: 'Anna University' },
        { name: 'Sunitha Subhramanian', role: 'Summer Intern (2014)', current: 'Amrita School of Biotechnology' },
        { name: 'Namita Singh', role: 'M.Tech Thesis (2014-15)', current: 'Banasthali Vidyapith' },
        { name: 'Chandel Angad', role: 'Summer Intern (2015)', current: 'IIT Delhi' },
        { name: 'Richa Tripathi', role: 'M.Tech Thesis (2015-16)', current: 'Banasthali Vidyapith' },
        { name: 'Dharm Skandh Jain', role: 'Summer Intern (2016)', current: 'BITS Pilani' },
        { name: 'Mugdha Dhurandhar', role: 'Summer Intern (2016)', current: 'University of Mumbai' },
        { name: 'Vaishali Gupta', role: 'Summer Intern (2016)', current: 'NISER Bhubaneswar' },
        { name: 'Kritika Rajain', role: 'M.Tech Thesis (2016-17)', current: 'Banasthali Vidyapith' },
        { name: 'Jayant Darokar', role: 'Winter Intern (2016)', current: 'IIT Delhi' },
        { name: 'Kriti Karn', role: 'Summer Intern (2017)', current: 'Amity University' },
        { name: 'Joel John', role: 'Winter Intern (2017)', current: 'Manipal Institute of Technology' },
        { name: 'Ashar Ahmad', role: 'Winter Intern (2017)', current: 'IIT Kanpur' },
        { name: 'Saman Fatihi', role: 'Master Thesis (2018)', current: 'Jamia Milia Islamia' },
        { name: 'Afreen Khan', role: 'Master Thesis (2018)', current: 'Jamia Milia Islamia' },
        { name: 'Sanchita Jain', role: 'Master Thesis (2018)', current: 'Jamia Milia Islamia' },
        { name: 'Kiran Mahto', role: 'Summer Intern (2018)', current: 'University of Pune' },
        { name: 'Aditi Sadhu', role: 'Summer Intern (2018)', current: 'IIT Madras' },
        { name: 'Rohit Satyam', role: 'Summer Intern (2018)', current: 'NIET' },
        { name: 'Arvind Iyer', role: 'M.Tech Thesis (2017-18)', current: 'IIIT Delhi' },
        { name: 'Waali Aafaq', role: 'Master Thesis (2018)', current: 'Manav Rachna Institute' },
    ];

    const stats = [
        { label: 'Lab Members', value: '15+', icon: Users },
        { label: 'Publications', value: '43', icon: BookOpen },
        { label: 'Years Active', value: '10+', icon: Calendar },
        { label: 'Alumni', value: '25+', icon: GraduationCap },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero Section */}
            <section className="text-white relative hero-bg flex items-center justify-center">
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-bold">Our Team</h1>
                    <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                        The people behind the Computational Structural Biology Lab
                    </p>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="py-8 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex items-center justify-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                    <stat.icon className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                                    <p className="text-sm text-slate-500">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Image Carousel */}
            <section className="py-10 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                        <div
                            className="flex transition-transform duration-1000 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {carouselImages.map((image, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <img
                                        src={image}
                                        alt={`Lab photo ${index + 1}`}
                                        className="w-full h-80 sm:h-96 object-cover"
                                        onError={(e) => {
                                            e.target.src = url('/images/team/placeholder.jpg');
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {carouselImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${
                                        index === currentSlide ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/75'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Principal Investigator */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Principal Investigator</h2>
                    <div className="flex justify-center">
                        <div className="max-w-sm w-full">
                            <MemberCard member={principalInvestigator[0]} size="pi" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-t border-slate-200"></div>
            </div>

            {/* Postdocs */}
            <section className="py-12 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Postdoctoral Researchers</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {postdocs.map((member, index) => (
                            <MemberCard key={index} member={member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* PhD Students */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">PhD Students</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {phdStudents.map((member, index) => (
                            <MemberCard key={index} member={member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Associates */}
            <section className="py-12 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Project Associates</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        {projectAssociates.map((member, index) => (
                            <MemberCard key={index} member={member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Interns */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Research Interns</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl mx-auto">
                        {interns.map((member, index) => (
                            <MemberCard key={index} member={member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-t border-slate-200"></div>
            </div>

            {/* Join Us CTA */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Join Our Team</h2>
                    <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                        We are always looking for motivated students and researchers interested in computational structural biology, molecular dynamics, and AI-driven drug discovery.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-700 font-semibold hover:bg-blue-50 transition shadow-lg"
                        >
                            <Mail className="h-5 w-5" />
                            Get in Touch
                        </Link>
                        <a
                            href="mailto:lipi_thukral@igib.res.in"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition"
                        >
                            Email PI
                            <ArrowRight className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Alumni */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">Alumni</h2>
                    <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">
                        Our former members who have gone on to make their mark in academia and industry worldwide.
                    </p>

                    {/* Past PhD Students */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold text-slate-800 mb-5 flex items-center gap-2">
                            <GraduationCap className="h-5 w-5 text-blue-600" />
                            Past PhD Students
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {alumniPhd.map((member, index) => (
                                <AlumniCard key={index} member={member} />
                            ))}
                        </div>
                    </div>

                    {/* Past Project Fellows */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold text-slate-800 mb-5 flex items-center gap-2">
                            <Users className="h-5 w-5 text-blue-600" />
                            Past Project Fellows
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {alumniFellows.map((member, index) => (
                                <AlumniCard key={index} member={member} />
                            ))}
                        </div>
                    </div>

                    {/* Past Trainees */}
                    <div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-5 flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-blue-600" />
                            Past Trainees & Interns
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {alumniTrainees.map((member, index) => (
                                <AlumniCard key={index} member={member} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;

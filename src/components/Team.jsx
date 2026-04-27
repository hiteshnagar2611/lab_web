import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

const MemberCard = ({ member }) => {
    // Create URL-friendly name for routing
    const getMemberUrl = (name) => {
        return name.toLowerCase()
            .replace('dr. ', 'dr-')
            .replace(/\s+/g, '-')
            .replace(/\./g, '');
    };

    return (
        <Link to={`/team/${getMemberUrl(member.name)}`} className="block">
            <div className="bg-white border-2 border-white rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white">
                        <img
                            src={member.img || url('/images/team/placeholder.jpg')}
                            alt={member.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = url('/images/team/placeholder.jpg');
                            }}
                        />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h4>
                    <div className="mt-3 text-blue-600 text-sm font-medium flex items-center">
                        View Profile <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

const Team = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselImages = [
        url('/images/team/photos/p1.jpg'),
        url('/images/team/photos/p2.jpg'),
        url('/images/team/photos/p3.jpg'),
        url('/images/team/photos/p4.jpg'),

    ];

    // Auto-slide carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [carouselImages.length]);

    const principalInvestigator = [
        {
            name: 'Dr. Lipi Thukral',
            role: 'Principal Investigator',
            details: 'MIT',
            img: url('/images/team/LipiT.jpg')
        }
    ];

    const postdocs = [
        {
            name: 'Dr. Deepanshi Gahlot',
            role: 'Postdoc',
            details: 'MIT',
            img: url('/images/team/deepanshi.JPG')
        },
        {
            name: 'Dr. Shailya Verma',
            role: 'Postdoc',
            details: 'MIT',
            img: url('/images/team/shailyadi.JPG')
        },
        {
            name: 'Dr. Shruti Mathur',
            role: 'Postdoc',
            details: 'MIT',
            img: url('/images/team/shruti.jpeg')
        },
        {
            name: 'Dr. Tanushree Das',
            role: 'Postdoc',
            details: 'MIT',
            img: url('/images/team/tanushree.JPG')
        }
    ];

    const phdStudents = [
        {
            name: 'Akanksha Kaushik',
            role: 'PhD Student',
            details: 'MIT',
            img: url('/images/team/akankshak.jpg')
        },
        {
            name: 'Aayushi Singh',
            role: 'PhD Student',
            details: 'MIT',
            img: url('/images/team/aayushis.jpg')
        },
        {
            name: 'Akanksha Arun',
            role: 'PhD Student',
            details: 'MIT',
            img: url('/images/team/akankshadi.JPG')
        },
        {
            name: 'Debendra Kumar Swain',
            role: 'PhD Student',
            details: 'MIT',
            img: url('/images/team/debe.jpg')
        },
        {
            name: 'Jesu Castin',
            role: 'PhD Student',
            details: 'MIT',
            img: url('/images/team/jesu.JPG')
        },
        {
            name: 'Anamika Singh',
            role: 'PhD Student',
            details: 'MIT',
            img: url('/images/team/anamika.jpg')
        }
    ];

    const projectAssociates = [
        {
            name: 'Hitesh Nagar',
            role: 'Project Associate',
            details: 'MIT',
            img: url('/images/team/hitesh.jpg')
        },
        {
            name: 'Prathamdeep Dhanoa',
            role: 'Project Associate',
            details: 'MIT',
            img: url('/images/team/pratham.jpg')
        }
    ];

    const interns = [
        {
            name: 'Nabajit',
            role: 'Intern',
            details: 'MIT',
            img: url('/images/team/nabojit.png')
        },
        {
            name: 'Varrunavi',
            role: 'Intern',
            details: 'MIT',
            img: url('/images/team/varrunavi.jpg')
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="text-white relative hero-bg flex items-center justify-center">
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl font-bold">Lab Members</h1>
                </div>
            </section>



            {/* Image Carousel */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <div
                            className="flex transition-transform duration-1000 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {carouselImages.map((image, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <img
                                        src={image}
                                        alt={`Lab photo ${index + 1}`}
                                        className="w-full h-96 object-cover"
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
                                    className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'
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
                    <h2 className="text-3xl font-bold text-center mb-8">Principal Investigator</h2>
                    <div className="flex justify-center">
                        <div className="max-w-sm">
                            <MemberCard member={principalInvestigator[0]} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Postdocs */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Postdocs</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {postdocs.map((member, index) => (
                            <MemberCard key={index} member={member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* PhD Students */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">PhD Students</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {phdStudents.map((member, index) => (
                            <MemberCard key={index} member={member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Associates */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Project Associates</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {projectAssociates.map((member, index) => (
                            <MemberCard key={index} member={member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Interns */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Interns</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {interns.map((member, index) => (
                            <MemberCard key={index} member={member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Alumni */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Alumni</h2>

                    {/* Past PhD Students */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Past PhD Students in CSB Lab</h3>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <ul className="space-y-2 text-gray-700">
                                <li>• Arjun Ray [Presently @ IIIT Delhi, Assistant Professor]</li>
                            </ul>
                        </div>
                    </div>

                    {/* Past Project Fellows */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Past Project Fellows in CSB Lab</h3>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <ul className="space-y-2 text-gray-700">
                                <li>• Prithvi Singh [Presently in bioinfo industry sector]</li>
                                <li>• Nikhil Agarwal [Presently @ Institute of Molecular Biology and Biotechnology, Poland]</li>
                                <li>• Suhani Nagpal [Presently @ University of California Merced, USA]</li>
                                <li>• Antara Mazumdar [Presently @ University of Groningen, Netherlands]</li>
                                <li>• Shweta Singh [Presently @ IIIT Hyderabad, India]</li>
                            </ul>
                        </div>
                    </div>

                    {/* Past Trainees */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Past Trainees in CSB Lab</h3>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Rajshri Iyer, Anna university [Summer 2014]</li>
                                    <li>• Sunitha Subhramanian, Amrita School of Biotechnology [Summer 2014]</li>
                                    <li>• Namita Singh, Banasthali Vidyapith [Mtech thesis 2014 – 2015]</li>
                                    <li>• Chandel Angad, IIT Delhi [Summer 2015]</li>
                                    <li>• Richa Tripathi, Banasthali Vidyapith [Mtech thesis 2015 – 2016]</li>
                                    <li>• Dharm Skandh Jain, BITS Pilani [Summer 2016]</li>
                                    <li>• Mugdha Dhurandhar, University of Mumbai [Summer 2016]</li>
                                    <li>• Vaishali Gupta, NISER Bhubaneswar [Summer 2016]</li>
                                    <li>• Kritika Rajain, Banasthali Vidyapith [Mtech thesis 2016 – 2017]</li>
                                    <li>• Jayant Darokar, IIT Delhi [Winter 2016]</li>
                                    <li>• Kriti Karn, Amity University [Summer 2017]</li>
                                </ul>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• Joel John, Manipal Institute of Technology [Winter 2017]</li>
                                    <li>• Ashar Ahmad, IIT Kanpur [Winter 2017]</li>
                                    <li>• Saman Fatihi, Jamia Milia Islamia [Master thesis 2018]</li>
                                    <li>• Afreen Khan, Jamia Milia Islamia [Master thesis 2018]</li>
                                    <li>• Sanchita Jain, Jamia Milia Islamia [Master thesis 2018]</li>
                                    <li>• Kiran Mahto, University of Pune [Summer 2018]</li>
                                    <li>• Aditi Sadhu, IIT Madras [Summer 2018]</li>
                                    <li>• Rohit Satyam, Noida Institute of Engineering and Technology [Summer 2018]</li>
                                    <li>• Arvind Iyer, IIIT Delhi [Mtech thesis 2017 – 2018]</li>
                                    <li>• Waali Aafaq, Manav Rachna Institute [Master thesis 2018]</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
import React from 'react';

const Blogs = () => {
    const dummyBlogs = [
        {
            id: 1,
            title: 'Understanding Protein Folding Mechanisms',
            date: 'April 10, 2026',
            author: 'Dr. Lipi Thukral',
            tag: 'Research',
            excerpt:
                'Protein folding is one of the most fundamental processes in biology. In this blog, we explore recent advances in computational methods that help us understand how proteins achieve their native structure.',
        },
        {
            id: 2,
            title: 'Advances in Computational Structural Biology',
            date: 'March 22, 2026',
            author: 'Hitesh Nagar',
            tag: 'Science',
            excerpt:
                'Computational structural biology has seen remarkable progress over the past decade. From cryo-EM to AlphaFold, we discuss the tools reshaping how we study molecular structures.',
        },
        {
            id: 3,
            title: 'Lab Life: A Day in the CSB Lab',
            date: 'March 5, 2026',
            author: 'Aayushi Singh',
            tag: 'Lab Life',
            excerpt:
                'Ever wondered what a typical day looks like inside a computational structural biology lab? We take you through the daily routines, challenges, and exciting discoveries.',
        },
    ];

    const tagColors = {
        Research: 'bg-blue-100 text-blue-700',
        Science: 'bg-green-100 text-green-700',
        'Lab Life': 'bg-purple-100 text-purple-700',
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-16">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 py-16 text-white text-center mb-12">
                <h1 className="text-4xl font-bold mb-3">Our Blogs</h1>
                <p className="text-blue-100 text-lg max-w-xl mx-auto">
                    Insights, discoveries, and stories from the CSB Lab
                </p>
            </div>

            {/* Blog Cards */}
            <div className="max-w-4xl mx-auto px-4 space-y-8">
                {dummyBlogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col gap-3"
                    >
                        <div className="flex items-center gap-3">
                            <span
                                className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColors[blog.tag]}`}
                            >
                                {blog.tag}
                            </span>
                            <span className="text-sm text-gray-400">{blog.date}</span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
                        <p className="text-gray-600 leading-relaxed">{blog.excerpt}</p>
                        <div className="flex items-center justify-between mt-2">
                            <span className="text-sm text-gray-500 italic">By {blog.author}</span>
                            <button className="text-blue-600 font-semibold text-sm hover:underline">
                                Read More →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;

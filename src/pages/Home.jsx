import React, { useState } from 'react'
import Navbar from '../component/Navbar/Navbar.jsx';
import { HeroHighlight } from '../component/ui/HeroHighlight.jsx';
import { Highlight } from '../component/ui/HeroHighlight.jsx';
import { CircleArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';
import RealTimeImage from '../assets/IMAGE.jpg';
import ProductivityImage from '../assets/IMAGE1.jpg';
import TaskManageImage from '../assets/IMAGE2.jpg';

const features = [
    {
        image: RealTimeImage,
        title: 'Real-Time Collaboration',
        description: 'Collaborate seamlessly with your team using real-time updates and efficient tools.',
    },
    {
        image: ProductivityImage,
        title: 'Productivity Insights',
        description: 'Access detailed analytics to track productivity and optimize team performance.',
    },
    {
        image: TaskManageImage,
        title: 'Task Management',
        description: 'Organize and prioritize tasks effectively with easy-to-use management tools.',
    },
];

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleScroll = () => {
        window.scrollBy({
            top: window.innerHeight - 80,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <Navbar />
            <div className=' pt-[80px]'>
                <HeroHighlight>
                    <div className='w-full flex flex-col justify-center items-center'>
                        <h1 className="text-center w-4/5 mb-3 text-6xl font-extrabold font-spaceG lg:pb-6 lg:text-[4.5rem] lg:leading-[5rem]">VirtuHub: Seamless <Highlight className={"text-white"}>teamwork</Highlight> and real-time insights </h1>
                        <p className='mx-auto max-w-4xl font-spaceG text-gray-600 lg:text-[1.2rem]'>Our Virtual Office Platform combines task management, team availability, and productivity analytics in a unified, intuitive interface—designed to enhance every aspect of your workday.</p>
                        <div
                            className='flex justify-center items-center gap-2 px-4 py-2 bg-black font-medium text-white rounded-md mt-8 cursor-pointer hover:bg-black/[0.87]'
                            onMouseOver={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onClick={handleScroll}
                        >
                            Explore more
                            <motion.span
                                animate={isHovered ? { y: 2 } : { y: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <CircleArrowDown />
                            </motion.span>
                        </div>
                    </div>
                </HeroHighlight>
            </div>
            <section className="w-full flex flex-col items-center py-8 px-6">
                {/* Centered Heading Section */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Key Features</h2>
                    <p className="text-gray-600 text-[1.2rem]">
                        Discover what makes VirtuHub an ideal solution for modern, remote teams.
                    </p>
                </div>

                {/* Features Cards */}
                <div className="w-full max-w-7xl flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col"
                            >
                                <div className="flex justify-center items-center">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-48 object-contain mt-3 rounded-md" // Change to 'object-contain' to maintain aspect ratio
                                    />
                                </div>
                                <div className="p-6 flex-grow">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full flex flex-col items-center py-8 px-6">
                {/* Centered Heading Section */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Solution</h2>
                    <p className="text-gray-600 text-[1.2rem]">
                        Streamline communications—all in one place
                    </p>
                </div>
                <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6">
                    {/* Text Section */}
                    <div className="w-full md:w-[48%] p-8 flex items-center">
                        <p className="text-[1.1rem] text-gray-700 leading-relaxed">
                            Our virtual office platform is designed to replicate the in-office experience while offering the flexibility of remote work. By implementing these features, we aim to enhance productivity, foster collaboration, and maintain a sense of community among remote teams.
                            As we continue to develop and refine our solution, we look forward to helping organizations adapt to the new normal of remote work.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-[48%] p-6 rounded-lg shadow-md flex justify-center items-center">
                        <div className="w-full h-64 bg-gray-200 rounded-lg flex justify-center items-center">
                            <span className="text-gray-500">Image Placeholder</span>
                        </div>
                    </div>
                </div>

            </section>
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-start">
                        <div className="mb-4 md:mb-0">
                            <h1 className="text-3xl font-bold">VirtuHub</h1>
                            <p className="text-sm">Connecting Teams, Anywhere.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                            <div>
                                <h2 className="text-xl font-semibold">Links</h2>
                                <ul>
                                    <li><a href="#about" className="hover:underline">About Us</a></li>
                                    <li><a href="#features" className="hover:underline">Features</a></li>
                                    <li><a href="#blog" className="hover:underline">Blog</a></li>
                                    <li><a href="#teams" className="hover:underline">Our Team</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">Resources</h2>
                                <ul>
                                    <li><a href="#faq" className="hover:underline">FAQ</a></li>
                                    <li><a href="#support" className="hover:underline">Support</a></li>
                                    <li><a href="#terms" className="hover:underline">Terms of Service</a></li>
                                    <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">Connect</h2>
                                <ul>
                                    <li><a href="#contact" className="hover:underline">Contact Us</a></li>
                                    <li><a href="#careers" className="hover:underline">Careers</a></li>
                                    <li><a href="#events" className="hover:underline">Events</a></li>
                                    <li><a href="#newsletter" className="hover:underline">Newsletter</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook className="w-6 h-6 hover:text-blue-600" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <Twitter className="w-6 h-6 hover:text-blue-400" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="w-6 h-6 hover:text-blue-700" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="w-6 h-6 hover:text-gray-300" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram className="w-6 h-6 hover:text-pink-500" />
                        </a>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-sm">&copy; {new Date().getFullYear()} VirtuHub. All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Hero

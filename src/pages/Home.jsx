import React, { useState } from 'react'
import Navbar from '../component/Navbar/Navbar.jsx';
import { HeroHighlight } from '../component/ui/HeroHighlight.jsx';
import { Highlight } from '../component/ui/HeroHighlight.jsx';
import { CircleArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'

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
        </>
    )
}

export default Hero

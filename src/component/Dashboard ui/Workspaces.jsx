import React from 'react';
import ProjectCard from '../ui/ProjectCards.jsx';

const projects = [
    {
        projectId: 'p001',
        projectTitle: 'Personal Finance Tracker',
        description: 'A web app for tracking personal finance and budgeting.'
    },
    {
        projectId: 'p002',
        projectTitle: 'Photographer’s Social Media',
        description: 'A social media platform for photographers to share and sell their photos.'
    },
    {
        projectId: 'p003',
        projectTitle: 'Fitness Class Finder',
        description: 'A mobile app that helps users find nearby fitness classes and gyms.'
    },
    {
        projectId: 'p004',
        projectTitle: 'Eco-Friendly E-Commerce',
        description: 'An e-commerce site focused on eco-friendly and sustainable products.'
    },
    {
        projectId: 'p005',
        projectTitle: 'Virtual Collaboration Tool',
        description: 'A virtual collaboration tool for remote teams to manage tasks and projects.'
    },
    {
        projectId: 'p006',
        projectTitle: 'Coding Learning Platform',
        description: 'An online learning platform for coding tutorials and challenges.'
    },
    {
        projectId: 'p007',
        projectTitle: 'Secondhand Furniture Marketplace',
        description: 'A marketplace app for buying and selling secondhand furniture.'
    },
    {
        projectId: 'p008',
        projectTitle: 'Personal Diary App',
        description: 'A personal diary app with mood tracking and journaling features.'
    },
    {
        projectId: 'p009',
        projectTitle: 'Freelance Designer Marketplace',
        description: 'A platform that matches freelance designers with small businesses needing branding help.'
    },
    {
        projectId: 'p010',
        projectTitle: 'AI Recipe Suggestion App',
        description: 'An AI-powered recipe app that suggests meals based on ingredients you have at home.'
    }
];


const Workspaces = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Project Workspaces</h2>
            {projects.map((project) => (
                <ProjectCard key={project.projectId} projectTitle={project.projectTitle} description={project.description} />
            ))}
        </div>
    );
};

export default Workspaces;

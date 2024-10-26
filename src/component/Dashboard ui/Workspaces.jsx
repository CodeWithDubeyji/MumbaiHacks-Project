import React, { useState, useEffect } from 'react';
import axios from 'axios';

const projects = [
    {
        projectId: 'p001',
        projectTitle: 'Personal Finance Tracker',
        description: 'A web app for tracking personal finance and budgeting.'
    },
    {
        projectId: 'p010',
        projectTitle: 'Recipe Finder',
        description: 'An AI-powered recipe app that suggests meals based on ingredients you have at home.'
    }
];

// const fetchAIContent = async () => {
//     const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${String(import.meta.env.VITE_REACT_APP_GEMINI_API_KEY)}`;

//     const headers = {
//         'Content-Type': 'application/json',
//     };

//     const data = {
//         contents: [
//             {
//                 parts: [
//                     {
//                         text: `List only the tech stack for the following project: ${projects[0].description}. No comments or explanations, just a simple json of technologies needed no need to bifercate into frontend, backend or any of those kind .`
//                     }
//                 ]
//             }
//         ]
//     };

//     try {
//         const response = await axios.post(url, data, { headers });
//         console.log('AI content:', response.data);
//         return response.data; // Return the data from the response
//     } catch (error) {
//         console.error('Error fetching AI content:', error);
//         return null; // Return null if there is an error
//     }
// };

const Workspaces = () => {
    return (
        <div>
            <h1 className='text-2xl'>Workspaces</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                {projects.map((project) => (
                    <div key={project.projectId}>
                        <h2>{project.projectTitle}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Workspaces;

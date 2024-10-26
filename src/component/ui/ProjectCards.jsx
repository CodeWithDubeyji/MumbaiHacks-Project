import React, { useState, useEffect } from 'react';
import axios from 'axios';
const employees = [
    {
        id: 'e001',
        name: 'Alice Johnson',
        skills: ['JavaScript', 'React', 'Node.js']
    },
    {
        id: 'e002',
        name: 'Bob Smith',
        skills: ['Python', 'Django', 'Machine Learning']
    },
    {
        id: 'e003',
        name: 'Charlie Brown',
        skills: ['Java', 'Spring Boot', 'Microservices']
    },
    {
        id: 'e004',
        name: 'Dana White',
        skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js']
    },
    {
        id: 'e005',
        name: 'Eve Davis',
        skills: ['Ruby', 'Rails', 'PostgreSQL']
    },
    {
        id: 'e006',
        name: 'Frank Miller',
        skills: ['C#', 'ASP.NET', 'SQL Server']
    },
    {
        id: 'e007',
        name: 'Grace Lee',
        skills: ['PHP', 'Laravel', 'MySQL']
    },
    {
        id: 'e008',
        name: 'Henry Wilson',
        skills: ['Go', 'Gin', 'Docker']
    },
    {
        id: 'e009',
        name: 'Ivy Martinez',
        skills: ['Swift', 'iOS Development', 'Xcode']
    },
    {
        id: 'e010',
        name: 'Jack Taylor',
        skills: ['Kotlin', 'Android Development', 'Firebase']
    }
];

const ProjectCard = ({ projectTitle, description }) => {
    const [aiContent, setAIContent] = useState(null);
    const [recommendation, setRecommendation] = useState(null); // State for explanation
    const [error, setError] = useState(null); // State for error handling

    const fetchAIContent = async () => {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_REACT_APP_GEMINI_API_KEY}`;

        const headers = {
            'Content-Type': 'application/json',
        };

        const data = {
            contents: [
                {
                    parts: [
                        {
                            text: `List only the tech stack for the following project: ${description}. No comments or explanations, just a simple list of technologies needed`
                        }
                    ]
                }
            ]
        };

        try {
            const response = await axios.post(url, data, { headers });
            console.log('AI Content Response:', response.data); // Log the first response
            if (response.data && response.data.candidates && response.data.candidates.length > 0) {
                const techStack = response.data.candidates[0]?.content?.parts[0]?.text;

                if (techStack) {
                    setAIContent(response.data);
                    await fetchRecommendation(techStack);
                } else {
                    throw new Error('Tech stack not found in response.');
                }
            } else {
                throw new Error('No candidates found in response.');
            }
        } catch (error) {
            console.error('Error fetching AI content:', error);
            setError('Failed to fetch AI content.');
        }
    };

    const fetchRecommendation = async (techStack) => {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_REACT_APP_GEMINI_API_KEY2}`;

        const headers = {
            'Content-Type': 'application/json',
        };

        const data = {
            contents: [
                {
                    parts: [
                        {
                            text: `Here we have a employee array of employees in which we have array of skillsof those employees ${employees}.I want you to give the sorted list of scores (descending order) of emplyoees with closely related to the ${techStack} which is the project's requirements. Just give me the list of those employees without thier scores and not other text in your response. Just the list is needed`
                        }
                    ]
                }
            ]
        };

        try {
            const response = await axios.post(url, data, { headers });
            console.log('Recommendation Response:', response.data); 
            if (response.data && response.data.candidates && response.data.candidates.length > 0) {
                const recommendationText = response.data.candidates[0]?.content?.parts[0]?.text;
                setRecommendation(recommendationText);
            } else {
                throw new Error('No candidates found in explanation response.');
            }
        } catch (error) {
            console.error('Error fetching explanation:', error);
            setError('Failed to fetch explanation.');
        }
    };

    useEffect(() => {
        fetchAIContent();
    }, [description]);

    const displayText = aiContent?.candidates?.[0]?.content?.parts?.[0]?.text || 'Loading...';
    
    return (
        <div className="p-4 border rounded hover:shadow-lg mb-4 cursor-pointer">
            <h3 className="text-lg font-bold">{projectTitle}</h3>
            <p className="text-sm">{description}</p>
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <>
                    <p className="text-md mt-2">Tech Stack: {displayText}</p>
                    <p className="text-md mt-2">Recommendations: {recommendation || 'Loading recommendations...'}</p>
                </>
            )}
        </div>
    );
};

export default ProjectCard;

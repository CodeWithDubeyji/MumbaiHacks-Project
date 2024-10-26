import React from 'react';
import Card from '../ui/Card'

const Desks = () => {

    const data = [
        { username: "user_1", post: "Front-End Developer", isActive: true, lastActive: "2024-10-24 14:46:33", task: "Complete design updates" },
        { username: "user_2", post: "Back-End Developer", isActive: true, lastActive: "2024-10-24 12:46:33", task: "Review pull requests" },
        { username: "user_3", post: "Full-Stack Engineer", isActive: false, lastActive: "2024-10-24 07:46:33", task: "Deploy new feature" },
        { username: "user_4", post: "Data Scientist", isActive: true, lastActive: "2024-10-25 11:46:33", task: "Analyze user data" },
        { username: "user_5", post: "Product Manager", isActive: false, lastActive: "2024-10-25 09:46:33", task: "Prepare project roadmap" },
        { username: "user_6", post: "Project Manager", isActive: true, lastActive: "2024-10-25 08:46:33", task: "Fix bugs in production" },
        { username: "user_7", post: "UX/UI Designer", isActive: false, lastActive: "2024-10-25 03:46:33", task: "Conduct code review" },
        { username: "user_8", post: "Data Analyst", isActive: true, lastActive: "2024-10-25 08:46:33", task: "Optimize database" },
        { username: "user_9", post: "QA Engineer", isActive: false, lastActive: "2024-10-25 16:46:33", task: "Research new tech stack" },
        { username: "user_10", post: "DevOps Engineer", isActive: false, lastActive: "2024-10-24 07:46:33", task: "Conduct A/B testing" },
        { username: "user_11", post: "Mobile Developer", isActive: false, lastActive: "2024-10-25 09:46:33", task: "Update API documentation" },
        { username: "user_12", post: "Cybersecurity Analyst", isActive: true, lastActive: "2024-10-24 20:46:33", task: "Manage user feedback" },
        { username: "user_13", post: "ML Engineer", isActive: true, lastActive: "2024-10-24 00:46:33", task: "Run test cases" },
        { username: "user_14", post: "Cloud Architect", isActive: false, lastActive: "2024-10-24 13:46:33", task: "Plan team sprints" },
        { username: "user_15", post: "Software Engineer", isActive: true, lastActive: "2024-10-24 09:46:33", task: "Build CI/CD pipeline" },
        { username: "user_16", post: "Technical Writer", isActive: false, lastActive: "2024-10-24 00:46:33", task: "Create training material" },
        { username: "user_17", post: "Business Analyst", isActive: true, lastActive: "2024-10-25 00:46:33", task: "Gather requirements" },
        { username: "user_18", post: "Scrum Master", isActive: false, lastActive: "2024-10-25 11:46:33", task: "Manage server uptime" },
        { username: "user_19", post: "Game Developer", isActive: false, lastActive: "2024-10-24 22:46:33", task: "Create wireframes" },
        { username: "user_20", post: "Support Engineer", isActive: false, lastActive: "2024-10-25 05:46:33", task: null }
    ];

    return (
        <div className='text-center text-3xl'>
            Desk View
            <div className='flex flex-wrap gap-7 justify-center items-center'>

                {
                    data.map((elem, i) => (

                        <Card key={i} usernam={elem.username} pos={elem.post} isActiv={elem.isActive} lastActiv={elem.lastActive} tas={elem.task} ></Card>
                    ))
                }
            </div>
        </div>
    );
};

export default Desks;

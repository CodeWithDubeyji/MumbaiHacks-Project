import React, { useState } from 'react';
import { Menu, Search, User, Users, MessageSquare, FileText, X } from 'lucide-react';
import Desks from '../component/Dashboard ui/Desks';
import Workspaces from '../component/Dashboard ui/Workspaces';
import ChatRoom from '../component/Dashboard ui/ChatRoom';
import Documentation from '../component/Dashboard ui/MeetDoc';

const Sidebar = ({ isOpen, toggleSidebar, onSelect }) => {
    return (
        <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h1 className="text-xl font-bold">VirtuHub</h1>
                <button onClick={toggleSidebar} className="text-white hover:text-gray-300">
                    <X size={24} />
                </button>
            </div>
            <nav className="p-4">
                <SidebarButton icon={<User size={20} />} text="Desks" onClick={() => onSelect('desks')} />
                <SidebarButton icon={<Users size={20} />} text="Workspaces" onClick={() => onSelect('workspaces')} />
                <SidebarButton icon={<MessageSquare size={20} />} text="Chat Room" onClick={() => onSelect('chat')} />
                <SidebarButton icon={<FileText size={20} />} text="Meet Documentation" onClick={() => onSelect('documentation')} />
            </nav>
        </div>
    );
};

const SidebarButton = ({ icon, text, onClick }) => (
    <button onClick={onClick} className="flex items-center w-full p-2 rounded-md hover:bg-gray-700 transition-colors duration-200 mb-2">
        {icon}
        <span className="ml-3">{text}</span>
    </button>
);

const TopBar = ({ toggleSidebar }) => (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center">
            <button onClick={toggleSidebar} className="mr-4 text-gray-600 hover:text-gray-900">
                <Menu size={24} />
            </button>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 border rounded-xl w-96 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
        </div>
        <button className="bg-gray-200 rounded-full p-2">
            <User size={24} />
        </button>
    </div>
);

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeView, setActiveView] = useState('home'); // Default view

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const handleSelect = (view) => {
        setActiveView(view);
        setSidebarOpen(false);
    };

    const renderContent = () => {
        switch (activeView) {
            case 'desks':
                return <Desks />;
            case 'workspaces':
                return <Workspaces />;
            case 'chat':
                return <ChatRoom />;
            case 'documentation':
                return <Documentation />;
            default:
                return (
                    <div className="p-8 text-center mb-8">
                        <h1 className="text-6xl font-bold mb-4">VirtuHub</h1>
                        <p className="text-2xl mb-4">Guiding you to effortless virtual collaboration.</p>
                        <p className="text-gray-600 mb-8">
                            VirtuHub streamlines workspace management, virtual meetings, and team communication,
                            ensuring efficient collaboration for remote teams while assisting in prioritizing tasks.
                        </p>
                    </div>
                );
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} onSelect={handleSelect} />
            <div className="flex-1 flex flex-col">
                <TopBar toggleSidebar={toggleSidebar} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6 ml-0 transition-all duration-300 ease-in-out">
                    {renderContent()} {/* Render content based on active view */}
                </main>
            </div>
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleSidebar}></div>
            )}
        </div>
    );
};

export default Dashboard;

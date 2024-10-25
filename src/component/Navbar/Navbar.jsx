import React, { useState, useEffect } from 'react';
import './Navbar.modules.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isSignupModalOpen, setSignupModalOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const openLoginModal = () => {
        setLoginModalOpen(true);
        setSignupModalOpen(false);
    };

    const openSignupModal = () => {
        setSignupModalOpen(true);
        setLoginModalOpen(false);
    };

    const closeModals = () => {
        setLoginModalOpen(false);
        setSignupModalOpen(false);
    };

    const handleModalClick = (e) => {
        if (e.target.id === 'modal-overlay') {
            closeModals();
        }
    };

    // Handle scrolling to trigger backdrop blur
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            {/* Navbar */}
            <div
                className={`w-full flex items-center justify-between px-16 h-[80px] border-b-2 navbar fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'backdrop-blur-md bg-white/30' : 'bg-transparent'
                    }`}
            >
                <div className="text-4xl font-bold stroke-text cursor-pointer">
                    <Link to={'/'}>VirtuHub</Link>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <button onClick={openLoginModal} className="darkBtn bg-gradient-to-r from-indigo-400 to-purple-500 dark:from-indigo-500">Login</button>
                </div>
            </div>

            {/* Login Modal */}
            {isLoginModalOpen && (
                <div
                    id="modal-overlay"
                    className="fixed inset-0 flex items-center justify-center z-50 fade-in"
                    onClick={handleModalClick}
                >
                    <div className="backdrop-blur-md bg-white shadow-lg rounded-lg p-8 max-w-sm w-full border">
                        <h2 className="text-2xl mb-6 text-center font-semibold">Login</h2>
                        <form className="flex flex-col space-y-4">
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Username:</label>
                                <input
                                    type="email"
                                    placeholder="Enter User Name"
                                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none transition duration-200"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Password:</label>
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none transition duration-200"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className=" text-white bg-purple-500 hover:bg-purple-600 transition duration-300 p-2 rounded-lg font-semibold"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;

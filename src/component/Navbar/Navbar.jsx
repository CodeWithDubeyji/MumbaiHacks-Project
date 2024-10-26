import React, { useState, useEffect } from 'react';
import './Navbar.modules.css'
import LoginModal from '../login/Login';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [LoginModalOpen, setLoginModalOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();


    const openModal = () => setLoginModalOpen(true);
    const closeModal = () => setLoginModalOpen(false);

    const openLoginModal = () => {
        setLoginModalOpen(true);
    };


    const closeModals = () => {
        setLoginModalOpen(false);
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

    useEffect(() => {
        const clearUrl = () => {
            const url = window.location.href;
            if (url.includes('?') || url.includes('#')) {
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        };
        clearUrl();
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
            <LoginModal isOpen={LoginModalOpen} onClose={closeModal} />
        </div>
    );
};

export default Navbar;

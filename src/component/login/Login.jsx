// src/components/LoginModal.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase'; // Adjust the path as necessary

const LoginModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('/');

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in');
            navigate('/dashboard'); // Redirect to home page on successful login
            onClose(); // Close the modal on successful login
        } catch (error) {
            console.error('Login error:', error.message);
            // Handle error (e.g., show error message to user)
        }
    };

    const handleModalClick = (e) => {
        // Close modal when clicking outside the modal content
        if (e.target.id === 'modal-overlay') {
            onClose();
        }
    };

    if (!isOpen) return null; // Don't render if the modal is not open

    return (
        <div
            id="modal-overlay"
            className="fixed inset-0 flex items-center justify-center z-50 fade-in"
            onClick={handleModalClick}
        >
            <div className="backdrop-blur-md bg-white shadow-lg rounded-lg p-8 max-w-sm w-full border">
                <h2 className="text-2xl mb-6 text-center font-semibold">Login</h2>
                <form className="flex flex-col space-y-4" onSubmit={handleLoginSubmit}>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email:</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none transition duration-200"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Password:</label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none transition duration-200"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-purple-500 hover:bg-purple-600 transition duration-300 p-2 rounded-lg font-semibold"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;

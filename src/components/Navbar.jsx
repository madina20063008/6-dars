import React, { useState, useEffect } from 'react';
import search from '../assets/search.png';
import bell from '../assets/bell.png';
import savat from '../assets/savat.png';
import button from '../assets/button.png';
import green from '../assets/green.svg';
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem('loggedInUser');
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, []);

    const handleRegister = () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const existingUser = JSON.parse(localStorage.getItem(email));

        if (existingUser) {
            alert('User already exists with this email!');
            return;
        }

        // ✅ Store surname along with name
        const newUser = { name, surname, email, password };
        localStorage.setItem(email, JSON.stringify(newUser));

        alert('Registration successful! You can now log in.');
        setIsRegister(false);
    };

    const handleLogin = () => {
        const savedUser = JSON.parse(localStorage.getItem(email));

        if (savedUser && savedUser.password === password) {
            setUser(savedUser);
            sessionStorage.setItem('loggedInUser', JSON.stringify(savedUser));
            alert('Login successful!');
            setIsModalOpen(false);
        } else {
            alert('Invalid email or password!');
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem('loggedInUser');
        setUser(null);
    };

    return (
        <div>
            <nav className="w-[1100px] mx-auto flex justify-between items-center bg-white border-b px-6 py-3 fixed top-0 left-1/2 transform -translate-x-1/2 z-20">
                <img src={green} alt="Logo" />
                <div className="space-x-6 font-semibold text-[18px]">
                    <a href="#" className="text-gray-600">Home</a>
                    <a href="#" className="text-gray-600">Blog</a>
                </div>
                <div className="space-x-4 flex items-center">
                    <img src={search} alt="Search" />
                    <img src={bell} alt="Notifications" />
                    <img src={savat} alt="Cart" />
                    <button
                        onClick={() => {
                            if (user) {
                                navigate('/dashboard');
                            } else {
                                setIsModalOpen(true);
                                setIsRegister(false);
                            }
                        }}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center"
                    >
                        <img src={button} alt="User Icon" className="mr-2" />
                        {user ? user.name : 'Login'} {/* ✅ Display only first name */}
                    </button>
                </div>
            </nav>

            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-white p-6 rounded-lg w-[400px] relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                        >
                            ✖
                        </button>
                        <div className="flex justify-center space-x-4 mb-4">
                            <button
                                className={`text-lg font-semibold ${!isRegister ? 'text-green-600' : 'text-gray-500'}`}
                                onClick={() => setIsRegister(false)}
                            >
                                Login
                            </button>
                            <span>|</span>
                            <button
                                className={`text-lg font-semibold ${isRegister ? 'text-green-600' : 'text-gray-500'}`}
                                onClick={() => setIsRegister(true)}
                            >
                                Register
                            </button>
                        </div>

                        {!isRegister ? (
                            <>
                                <p className="text-gray-600 text-sm mb-4 text-center">
                                    Enter your email and password to login.
                                </p>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    className="w-full border px-3 py-2 rounded-md mb-2"
                                />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    className="w-full border px-3 py-2 rounded-md mb-2"
                                />
                                <button onClick={handleLogin} className="w-full bg-green-600 text-white py-2 rounded-md mt-4">
                                    Login
                                </button>
                            </>
                        ) : (
                            <>
                                <p className="text-gray-600 text-sm mb-4 text-center">
                                    Enter your details to create an account.
                                </p>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Name"
                                    className="w-full border px-3 py-2 rounded-md mb-2"
                                />
                                <input
                                    type="text"
                                    value={surname}
                                    onChange={(e) => setSurname(e.target.value)}
                                    placeholder="Surname"
                                    className="w-full border px-3 py-2 rounded-md mb-2"
                                />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="w-full border px-3 py-2 rounded-md mb-2"
                                />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full border px-3 py-2 rounded-md mb-2"
                                />
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm your password"
                                    className="w-full border px-3 py-2 rounded-md mb-2"
                                />
                                <button onClick={handleRegister} className="w-full bg-green-600 text-white py-2 rounded-md mt-4">
                                    Register
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;

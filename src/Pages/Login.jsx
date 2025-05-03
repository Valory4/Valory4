import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#1e2b3e] to-[#3a5275]">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
                {/* Icono de usuario */}
                <div className="flex justify-center mb-6">
                    <div className="bg-gray-800 p-4 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 7l9-5-9-5-9 5 9 5z" />
                        </svg>
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-center text-gray-700">Iniciar Sesión</h2>

                <form className="mt-6">
                    <div className="mb-4 relative">
                        <label className="block text-gray-600">Email ID</label>
                        <div className="flex items-center border rounded-3xl px-4 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M3 8l9 6 9-6M3 8v8a2 2 0 002 2h14a2 2 0 002-2V8M3 8l9 6 9-6" />
                            </svg>
                            <input
                                type="email"
                                className="w-full focus:outline-none"
                                placeholder="tucorreo@example.com"
                            />
                        </div>
                    </div>

                    <div className="mb-4 relative">
                        <label className="block text-gray-600">Password</label>
                        <div className="flex items-center border rounded-3xl px-4 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M12 17v1m0-6v1m5 3v1m-10 0v1M5 11l2-2m12 2l-2-2m2 2l-2 2M5 11l2 2" />
                            </svg>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full focus:outline-none"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                className="absolute right-4 text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <label className="flex items-center text-gray-600">
                            <input type="checkbox" className="mr-2" />
                            Remember me
                        </label>
                        <Link to="#" className="text-gray-600 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>

                    <div className="flex justify-center items-center">
                        <Link to="/home" className="bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 p-4 w-full text-center">
                            L O G I N
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
import React, { useState, useEffect } from 'react';
import drop from '../assets/drop logo 1.png';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);

    // Validation function
    const validateForm = () => {
        const newErrors = { email: '', password: '' };
        let isValid = true;

        // Email validation
        if (!userData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
            newErrors.email = 'Email is invalid';
            isValid = false;
        }

        // Password validation
        if (!userData.password.trim()) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (userData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Clear error when user starts typing
        if (name === 'email') {
            setErrors(prev => ({ ...prev, email: '' }));
        }
        if (name === 'password') {
            setErrors(prev => ({ ...prev, password: '' }));
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate form before submission
        if (validateForm()) {
            setLoading(true);

            // Remember me functionality
            if (userData.rememberMe) {
                localStorage.setItem('rememberedUser', JSON.stringify({
                    email: userData.email
                }));
            } else {
                localStorage.removeItem('rememberedUser');
            }

            try {
                const response = await axios.post('api/login', userData);
                if (response.status === 200) {
                    navigate('/dashboard');
                }
            } catch (error) {
                if (error.response) {
                    setErrors(prev => ({
                        ...prev,
                        general: error.response.data.message || 'Login failed'
                    }));
                } else {
                    setErrors(prev => ({
                        ...prev,
                        general: 'An unexpected error occurred'
                    }));
                }
            } finally {
                setLoading(false);
            }
        }
    };

    // Load remembered user on component mount
    useEffect(() => {
        const storedUser = localStorage.getItem('rememberedUser');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUserData(prev => ({
                ...prev,
                email: parsedUser.email,
                rememberMe: true
            }));
        }
    }, []);

    return (
        <div className='h-screen font-roboto'>
            <div className='flex flex-col'>
                <div className='p-[30px] m-[50px] flex justify-center align-center'>
                    <div>
                        <img src={drop} className='h-[50px] w-[100px]' alt="Drop Logo" />
                    </div>
                </div>
                <div className='rounded-[12px] p-[10px] mt-[10px]'>
                    <div className='text-[16px] py-[10px]'>
                        <h2 className='text-[#808080] text-[24px] font-[300]'>Welcome to the Drop App</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4 pr-[14px]">
                                <label htmlFor='email' className='block text-[#808080] text-[18px] font-bold py-[7px]'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={userData.email}
                                    onChange={handleChange}
                                    className={`
                                        text-[#808080] text-[14px] 
                                        appearance-none border-2 
                                        p-[10px] rounded-[8px] w-full 
                                        focus:outline-none focus:bg-[#ffffff] 
                                        ${errors.email 
                                            ? 'border-red-500' 
                                            : 'border-[#ebc1c1]'}
                                    `}
                                    placeholder='Enter your email'
                                    aria-label="Email"
                                />
                                {errors.email && (
                                    <p className='text-red-500 text-[12px] italic mt-1'>
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div className="mb-[8px] pr-[14px]">
                                <label htmlFor='password' className='block text-[#808080] text-[18px] font-bold py-[7px]'>
                                    Password
                                </label>
                                <input
                                    type='password'
                                    id='password'
                                    name='password'
                                    value={userData.password}
                                    onChange={handleChange}
                                    className={`
                                        text-[#808080] text-[14px] 
                                        appearance-none border-2 
                                        p-[10px] rounded-[8px] w-full 
                                        focus:outline-none focus:bg-[#ffffff] 
                                        ${errors.password 
                                            ? 'border-red-500' 
                                            : 'border-[#ebc1c1]'}
                                    `}
                                    placeholder='Enter your password'
                                    aria-label="Password"
                                />
                                {errors.password && (
                                    <p className='text-red-500 text-[12px] italic mt-1'>
                                        {errors.password}
                                    </p>
                                )}
                                <div className="flex items-center mt-2">
                                    <input
                                        type="checkbox"
                                        id="rememberMe"
                                        name="rememberMe"
                                        checked={userData.rememberMe}
                                        onChange={handleChange}
                                        className="h-[16px] w-[16px] text-[#5975b5] focus:ring-indigo-500 border-[#808080] rounded-[4px]"
                                    />
                                    <label 
                                        htmlFor="rememberMe" 
                                        className="ml-[8px] block text-[14px] text-[#808080]"
                                    >
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            
                            {errors.general && (
                                <div className='text-red-500 text-[12px] italic mb-4 text-center'>
                                    {errors.general}
                                </div>
                            )}
                            
                            <button 
                                type='submit' 
                                className='
                                    w-full font-[1000] bg-[#96842c] 
                                    py-[10px] px-[16px] 
                                    hover:bg-[#718f49] 
                                    my-[20px] text-[16px] 
                                    text-[#ffffff] rounded-[8px] 
                                    text-center 
                                    focus:outline-none 
                                    focus:shadow-outline
                                    disabled:opacity-50
                                    disabled:cursor-not-allowed
                                '
                                disabled={loading}
                            >
                                {loading ? 'Signing In...' : 'Sign In'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Seller from './Seller.jsx';
import Buyer from './Buyer.js';
import PropertyCard from './PropertyCard.jsx';

const Services = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState('');
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            setRole(localStorage.getItem('role'));
        }
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/allProperties");
                const propertiesWithImages = response.data.map(property => ({
                    ...property,
                    imageUrl: `https://source.unsplash.com/random/800x600/?property,house&${Math.random()}`
                }));
                setProperties(propertiesWithImages);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
      
    }, []);

    function Logout() {
        localStorage.clear();
        setIsLoggedIn(false);
    }

    const handleLike = (propertyId, likes) => {
        setProperties(properties.map(property =>
          property._id === propertyId ? { ...property, likes } : property
        ));
      };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    {localStorage.getItem('ID') && role === 'Seller' && <Seller />}
                    {localStorage.getItem('ID') && role==='Buyer' && <Buyer/>}
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <div className="flex flex-col items-center">
                <h2>Properties</h2>
                <div className="container mx-auto p-4">
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {properties.map((property) => (
                                <PropertyCard key={property._id} property={property} />
                            ))}
                        </div>
                    </div>
                    <LoginForm />
                </div>
            )}
        </div>
    );
};



const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const validateForm = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        return newErrors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            try {
                const response = await axios.post('http://localhost:5000/login', { email, password });
                console.log(response.data);
                setSuccessMessage('Login successful!');
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('role', response.data.role);
                localStorage.setItem('ID', response.data.id);
                window.location.reload(); // Reload to update the logged-in state
            } catch (error) {
                console.error(error);
                setErrors({ submit: 'Login failed. Please try again.' });
            }
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto mb-8">
            {successMessage && <p className="text-green-500 mb-4 text-center">{successMessage}</p>}
            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            {errors.submit && <p className="text-red-500 text-sm mb-4">{errors.submit}</p>}
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                Login
            </button>
        </form>
    );
};

export default Services;

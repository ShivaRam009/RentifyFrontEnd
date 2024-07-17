// AddPropertyForm.jsx

import React, { useState } from 'react';
import axios from 'axios';

const AddPropertyForm = ({ onPropertyAdded, onCancel }) => {
    const [formData, setFormData] = useState({
        place: '',
        area: '',
        bedrooms: '',
        bathrooms: '',
        hospitals: '',
        colleges: '',
        parking: 'No',
        propertyType: '',
        description: '',
        price: '',
        yearBuilt: '',
        totalFloors: '',
        amenities: [],
        furnishedStatus: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userID=localStorage.getItem('ID');
        try {
            const token = localStorage.getItem('token'); // Assuming you have token stored in localStorage
            const response = await axios.post(`https://rentify-server-ashen.vercel.app/${userID}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('Property added:', response.data.property);
            // Invoke parent callback to update properties list
            onPropertyAdded(response.data.property);
            window.location.reload();
        } catch (error) {
            console.error('Error adding property:', error);
            // Handle error
        }
    };

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg w-4/5 max-w-md overflow-y-auto max-h-96">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Place</label>
                        <input type="text" name="place" value={formData.place} onChange={handleChange} placeholder="Enter place" required className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Area (sqft)</label>
                        <input type="number" name="area" value={formData.area} onChange={handleChange} placeholder="Enter area in sqft" required className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
                        <input type="number" name="bedrooms" value={formData.bedrooms} onChange={handleChange} placeholder="Enter number of bedrooms" required className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Bathrooms</label>
                        <input type="number" name="bathrooms" value={formData.bathrooms} onChange={handleChange} placeholder="Enter number of bathrooms" required className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Price ($)</label>
                        <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Enter price in dollars" required className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Property Type</label>
                        <select name="propertyType" value={formData.propertyType} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                            <option value="">Select property type</option>
                            <option value="Apartment">Apartment</option>
                            <option value="House">House</option>
                            <option value="Villa">Villa</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Furnished Status</label>
                        <select name="furnishedStatus" value={formData.furnishedStatus} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                            <option value="">Select furnished status</option>
                            <option value="Furnished">Furnished</option>
                            <option value="Unfurnished">Unfurnished</option>
                            <option value="Semi-Furnished">Semi-Furnished</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Enter property description" className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"></textarea>
                    </div>

                    <div className="mt-4 flex justify-between">
                        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                            Save
                        </button>
                        <button type="button" onClick={onCancel} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPropertyForm;

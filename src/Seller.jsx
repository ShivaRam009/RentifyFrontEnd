import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard.jsx';
import AddPropertyForm from './AddPropertyForm.jsx';

export default function Seller() {
    const [properties, setProperties] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const id = localStorage.getItem('ID');

        if (id) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`http://localhost:5000/getUserProperties/${id}`);
                    setProperties(response.data);
                    console.log("Fetched user properties:", response.data);
                } catch (err) {
                    console.log(err);
                }
            };
            fetchData();
        }
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handlePropertyAdded = (newProperty) => {
        // Update properties state with the new property
        setProperties([...properties, newProperty]);
        window.location.reload();
        // Close the modal
        toggleModal();
    };

    return (
        <div>
            <h2>Your Properties</h2>
            <ul>
                <div className="container mx-auto p-4">
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {properties.map((property) => (
                            <PropertyCard key={property._id} property={property} />
                        ))}
                        <button onClick={toggleModal}>Add Property</button>
                    </div>
                </div>
            </ul>

            {/* Modal for adding property */}
            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl mb-4">Add Property</h2>
                        <AddPropertyForm onPropertyAdded={handlePropertyAdded} onCancel={toggleModal} />
                    </div>
                </div>
            )}
        </div>
    );
}

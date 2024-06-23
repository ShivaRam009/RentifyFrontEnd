import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Seller() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('ID');
        //console.log("token", token);
        //console.log("User id ", id);      

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

    return (
        <div>
            <h2>Seller Properties</h2>
            <ul>
                {properties.map((property) => (
                    <li key={property._id}>{property.description}</li>
                ))}
            </ul>
        </div>
    );
}

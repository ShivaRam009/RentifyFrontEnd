import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PropertyCard from './PropertyCard.jsx';

export default function Properties() {
  const [propertiesArray, setPropertiesArray] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      try {
          const response = await axios.get("https://rentify-server-ashen.vercel.app/allProperties");
          setPropertiesArray(response.data);
      } catch (err) {
          console.log(err);
      }
  };
  fetchData();
  },[]);

  const handleLike = (propertyId, likes) => {
    setPropertiesArray(propertiesArray.map(property =>
      property._id === propertyId ? { ...property, likes } : property
    ));
  };

  return (
    <div className="flex flex-col items-center">
      <h2>Properties</h2>
      <div className="container mx-auto p-4">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {propertiesArray.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      </div>
    </div>
  )
}

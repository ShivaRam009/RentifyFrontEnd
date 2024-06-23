import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const PropertyCard = ({ property, onLike }) => {
  const [likes, setLikes] = useState(property.likes);
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/likeProperty/${property._id}`);
      setLikes(response.data.likes);
      setLiked(true);
      if (onLike) onLike(property._id, response.data.likes);
    } catch (err) {
      console.error('Error liking property:', err);
    }
  };

  const randomImageUrl = `https://source.unsplash.com/random/800x600/?property,house&${Math.random()}`;

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={randomImageUrl} alt="property" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{property.place}</h3>
        <p className="text-gray-700">{property.description}</p>
        <div className="mt-4">
          <p><strong>Price:</strong> ${property.price}</p>
          <p><strong>Area:</strong> {property.area} sqft</p>
          <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
          <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
          <p><strong>Likes:</strong> {likes}</p>
          <button
            onClick={handleLike}
            className="mt-2 focus:outline-none"
          >
            <FontAwesomeIcon 
              icon={liked ? solidHeart : regularHeart} 
              size="lg" 
              className={liked ? 'text-red-500' : 'text-gray-500'}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;

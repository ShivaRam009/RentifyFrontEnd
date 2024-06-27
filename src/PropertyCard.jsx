import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import LoginForm from './LoginForm.jsx';

const PropertyCard = ({ property, onLike }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  const [likes, setLikes] = useState(property.likes);
  const [liked, setLiked] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false); // State variable to control LoginForm visibility

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      setRole(localStorage.getItem('role'));

      // Fetch the liked state from the server
      axios.get(`http://localhost:5000/isPropertyLiked/${property._id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        setLiked(response.data.liked);
      }).catch(err => {
        console.error('Error fetching liked state:', err);
      });
    }
  }, [property._id]);

  const handleLike = async () => {
    try {
      if (isLoggedIn) {
        const response = await axios.post(`http://localhost:5000/likeProperty/${property._id}`, {}, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setLikes(response.data.likes);
        setLiked(!liked);
        if (onLike) onLike(property._id, response.data.likes);
      } else {
        setShowLoginForm(true); // Show the LoginForm if not logged in
      }
    } catch (err) {
      console.error('Error liking property:', err);
    }
  };

  const handleDelete=async()=>{
    if(isLoggedIn){
      const response=await axios.delete(`http://localhost:5000/deleteProperty/${property._id}`);
      window.location.reload();
      console.log(response);
    }
  };

  const randomImageUrl = `https://source.unsplash.com/random/800x600/?property,house&${Math.random()}`;

  const Modal = ({ show, onClose }) => {
    if (!show) return null;
  
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 sm:w-3/4 lg:w-1/2 xl:w-1/3 relative">
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-700 hover:text-gray-900">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
          <div className="p-4">
            <LoginForm/>
          </div>
        </div>
      </div>
    );
  };

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
          {role!=='Seller' && <button
            onClick={handleLike}
            className="mt-2 focus:outline-none"
          >
          
            <FontAwesomeIcon 
              icon={liked ? solidHeart : regularHeart} 
              size="lg" 
              className={liked ? 'text-red-500' : 'text-gray-500'}
            />
          </button>}
          {
            role==='Seller' && <button
            onClick={handleDelete}
            className="mt-2 focus:outline-none"
          >Delete</button>
          }
          
          
        </div>
      </div>
      <Modal show={showLoginForm} onClose={() => setShowLoginForm(false)}> {/* Use the Modal component */}
        <LoginForm onClose={() => setShowLoginForm(false)} />
      </Modal>
    </div>
  );
};

export default PropertyCard;

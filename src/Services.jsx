import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm.jsx';
import Seller from './Seller.jsx';
import Buyer from './Buyer.js';


const Services = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState('');
   
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
            setRole(localStorage.getItem('role'));
        }
        
      
    }, []);

    function Logout() {
        localStorage.clear();
        setIsLoggedIn(false);
    }

    
    return (
        <div>
            {isLoggedIn ? (
                <div>
                    {localStorage.getItem('ID') && role === 'Seller' && <Seller />}
                    {localStorage.getItem('ID') && role==='Buyer' && <Buyer/>}
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm/> 
            )}
        </div>
    );
};





export default Services;

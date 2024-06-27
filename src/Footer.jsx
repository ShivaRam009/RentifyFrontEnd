import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className='px-8 py-16 flex'>
        <div className='px-4 py-4'>
            <h1 className="text-4xl font-bold mb-8">Rentify</h1>
            <p className='text-lg'>Our user-friendly interface makes it easy to explore the possibilities and find a home that suits your lifestyle. We are committed to providing you with the highest level of service and support, every step of the way.</p>
        </div>
        <div className='flex px-4 py-4'>
            <div className='px-8 '>
                <ul>
                    <li className='py-2'>Contact Us</li>
                    <li className='pb-2'>Rentify@gmail.com</li>
                    <li>+91 5467737809</li>
                </ul>
                
                
            </div>
            <div className='px-8 '>
            <ul>
                    <li className='py-2'>Headquarters</li>
                    <li className='pb-2'>123 Main Street Hyderabad</li>
                    <li>501510</li>
                </ul>
            </div>
            <div className='px-8'>
            <ul>
                    <li className='py-2'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='pb-2'>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/properties">Properties</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

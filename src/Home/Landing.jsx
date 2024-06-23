import React from 'react';
import Rentifyhome from '../assets/Rentifyhome1.webp';
import Rentify2 from '../assets/Rentify2.webp';
import Rentify3 from '../assets/Rentify3.webp';
import "./Landing.css";


export default function Landing() {
    return (
        <>
        <div className='color-div flex flex-col lg:flex-row justify-center lg:justify-between items-start px-10 pb-2 max-w-7xl mx-auto text-white'>
            <div className='w-full lg:w-1/2 pt-28'>
                <h1 className='text-5xl font-bold mb-4'>Find Your Next</h1>
                <h1 className='text-5xl font-bold mb-4'>Dream Home Rentify</h1>
                <p className='mb-4 text-lg mt-16'>Welcome to Rentify, your trusted partner in the real estate market. Our mission is to provide you with comprehensive and personalized solutions for all your property needs.</p>
            </div>
            <div className='w-2/3 lg:w-1/2 px-10 pt-20 py-10 flex justify-center items-center'>
                <img src={Rentifyhome} alt="Rentify Home" className='max-w-full h-auto' />
            </div>
        </div>


        <div className='px-10 pt-10'>
            <h1 className='font-bold body-heading'>We are Committed </h1>
            <h1 className='font-bold body-heading'>to Excellence in  </h1>
            <h1 className='font-bold body-heading pb-5'>Real Estate</h1>
            <div className='flex space-x-8 mt-10'>
                <div style={{ backgroundColor: '#F5F6F8' }} className='px-10 py-8'>
                <button className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
                    <h1 className='text-4xl font-bold mb-4'>Tenant Matching</h1>
                    <p>We understand the challenges of finding the right tenant for your property or the perfect rental for your needs. That's why we provide a comprehensive tenant matching service, ensuring a seamless and successful rental experience. With our vast network and advanced technology, we match you with the right tenant or rental based on your unique preferences and requirements.</p>

                </div>
                <div style={{ backgroundColor: '#E2E7F7' }}  className='px-10 py-8'>
                <button className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
                    <h1 className='text-4xl font-bold mb-4'>Property Listings</h1>
                    <p>Our property listings feature a diverse range of options to suit your needs, whether you're looking for a cozy apartment or a spacious house. With our user-friendly platform, you can easily browse properties, filter results by location, price, and features, and find your perfect match. Our extensive listings are updated regularly, so you can trust you're getting the most up-to-date information.</p>

                </div>
                <div style={{ backgroundColor: '#EDEDED' }}  className='px-10 py-8'>
                <button className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center mb-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
                    <h1 className='text-4xl font-bold mb-4'>Rental Management</h1>
                    <p>We provide comprehensive rental management services to ensure your property is well-maintained, and you receive timely rent payments. Our team of experts handles everything from rent collection to property inspections, ensuring your investment is in good hands. With our personalized service, you can relax knowing your property is being managed efficiently and effectively.</p>

                </div>
                
            </div>
        </div>
        <div className='px-10 pt-16'>
            <div className='flex w-full'>
                <div className='w-full lg:w-1/2 px-5 py-8 m-auto '>
                <h1 className='text-5xl font-bold mb-4'>Find Your Perfect</h1>
                <h1 className='text-5xl font-bold mb-4'>Match Today</h1>
                <p className='text-xl'>Our innovative and tailored tenant matching services ensure that you find the perfect tenant for your property, all while maximizing your rental income and minimizing your stress.</p>
                <button style={{backgroundColor:"#3A5BCC"}} className='text-white px-4 py-3 mt-5'>Contact Us</button>
                </div>
                <div className='w-full lg:w-1/2 px-10 py-8 flex justify-center'>
                    <img src={Rentify2} alt="" />
                </div>
            </div>
        </div>
        <div className='px-10 pt-16'>
            <div className='flex '>
                <div className='w-full lg:w-1/2 px-5 py-8 flex justify-center'>
                    <img src={Rentify3} alt="" />
                </div>
                <div className='w-full lg:w-1/2 px-5 py-8 m-auto '>
    
                <p className='text-3xl font-bold py-2'>The Rentify team made finding my dream apartment a breeze. They were knowledgeable, responsive, and always went above and beyond to ensure my satisfaction.</p>
                <p className='py-2'>Daniel J. Carr</p>
                <p className=''>Senior Software Engineer</p>
                </div>
                
            </div>
        </div>
        <div className='px-10 mt-16 pt-16 text-center' style={{backgroundColor:"#E2E7F7"}}>
            <h1 className='text-4xl font-bold mb-10'>Ready to Find Your Dream Home?</h1>
            <p className='text-xl'>We offer a comprehensive range of property listings to help you find the perfect</p>
            <p className='text-xl'>home for you and your family. With our cutting-edge search tools and expert</p>
            <p className='text-xl mb-10'>advice, you can rest assured that you will find the right match.</p>
            <button style={{backgroundColor:"#3A5BCC"}} className='text-white px-4 py-3 mt-5 mb-16'>Contact Us</button>
        </div>
        </>
    );
}




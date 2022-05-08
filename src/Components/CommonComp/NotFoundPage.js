import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='h-screen bg-indigo-600 flex flex-col justify-center items-center'>
            <img src={"https://i.ibb.co/9TYYvN6/360-F-452024994-ND0-Bj-BDhdb59v-AJdc-H9-Ee3-Bn-BV2owaou-removebg-preview.png"} alt="" />
            <h1 className='text-white text-4xl md:text-8xl font-bold font-sans'>Not Found</h1>
            <Link to={'/'} className="text-md text-white flex gap-1 items-center mt-2 underline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>Back to Home</Link>
        </div>
    );
};

export default NotFoundPage;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../CommonComp/Footer';
import Header from '../CommonComp/Header';

const AddItems = () => {

    const [item, setItem] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const description = e.target.description.value;
        const image = e.target.image.value;
        const newItem = { name, price, quantity, supplier, description, image };
        const url = 'https://t-fashion-warehouse.herokuapp.com/products';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                setItem(newItem);
            })
        e.target.reset();
    }


    return (
        <div>
            <Header></Header>
            <div className='flex justify-center items-center min-h-screen'>
                <div className="px-4 py-6 sm:grid grid-cols-2 gap-x-8 max-w-5xl mx-auto">
                    <div className='flex items-center'>
                        <form className="mb-8" onSubmit={handleSubmit}>
                            <h2 className="text-center text-4xl font-bold text-blue-800">ADD AN ITEM</h2>
                            <div className="mt-6">
                                <div className="flex-col space-y-4">
                                    <input name='name' type="text" placeholder="Name" className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none" required />
                                    <input name='price' type="number" placeholder="$Price" className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none" required />
                                    <input name='quantity' type="number" placeholder="Quantity" className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none" required />
                                    <input name='supplier' type="text" placeholder="Supplier's name" className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none" required />
                                    <textarea name='description' cols="30" rows="5" placeholder="Description..." className="border-2 w-full px-4 py-2 text-gray-700 outline-none rounded-md text-md" required></textarea>
                                    <input name='image' type="text" placeholder="Image link" className="border-2 w-full px-4 py-2 rounded-md text-md text-gray-700 outline-none" required />
                                </div>
                                <button type='submit'
                                    className="w-full mt-4 bg-gradient-to-tr from-indigo-600 to-purple-600 text-white py-2 rounded-md text-lg font-semibold">Add Item</button>
                            </div>
                            <Link className='flex gap-2 items-center mt-4 text-lg underline text-blue-600' to={'/manageitems'}>Manage all items
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </form>
                    </div>
                    <div className='border-2 px-4 py-6'>
                        {
                            item.name ?
                                <div>
                                    <h1 className='text-center text-4xl font-bold uppercase text-slate-600'>Added Item:</h1>
                                    <div className="mt-4 space-y-4 p-4 ">
                                        <div className='space-y-8'>
                                            <h1 className='text-3xl font-bold text-center'>{item.name}</h1>
                                            <img className='max-w-80 mx-auto' src={item.image} alt="" />
                                        </div>
                                        <div className='space-y-4 text-2xl'>
                                            <p className='text-2xl'>Price:  <span className='font-bold text-blue-600'>${item.price}</span></p>
                                            <p>Available: <span className='text-red-600 font-bold'>{item.quantity}</span>
                                            </p>
                                        </div>
                                        <div className='space-y-4'>
                                            <p>{item.description}</p>
                                            <p className='text-xl'>Supplier: <span className='text-orange-600 font-semibold'>{item.supplier}</span></p>
                                        </div>
                                    </div>
                                </div>
                                :
                                <h1 className='text-3xl font-bold text-center text-slate-600'>Added Item will be shown here</h1>
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddItems;
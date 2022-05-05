import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useSingleItem from '../../Hooks/useSingleItem';
import Footer from '../CommonComp/Footer';
import Header from '../CommonComp/Header';
import CountUp from 'react-countup';

const UpdateItem = () => {

    const [newQuantity, setQuantity] = useState(0);
    const { id } = useParams();
    const [item] = useSingleItem(id);
    const { name, price, quantity, supplier, description, image } = item;

    useEffect(() => {
        setQuantity(parseInt(quantity));
    }, [quantity])

    const handleDelivered = () => {
        const updatedQuantity = parseInt(newQuantity) - 1;
        handleUpdateStock(updatedQuantity);
    }


    const handleRestock = e => {
        e.preventDefault();
        const number = e.target.number.value;
        const updatedQuantity = parseInt(newQuantity) + parseInt(number);

        handleUpdateStock(updatedQuantity);
        e.target.reset();
    }

    const handleUpdateStock = updatedQuantity => {

        const updatedItem = { updatedQuantity };

        const url = `https://t-fashion-warehouse.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json)
            .then(data => {
                setQuantity(updatedQuantity);
                alert('updated successful');
            })
    }


    return (
        <div>
            <Header></Header>
            <div className='grid md:grid-cols-3 min-h-screen font-serif'>

                <div className='md:col-span-2'>
                    <div className="py-8 text-slate-800">
                        <div className="space-y-6">
                            <div className="font-bold text-4xl mb-8 text-center">{name}</div>
                            <img className="mx-auto" src={image} alt="" />

                            <div className='space-y-10 px-16 text-xl font-bold'>
                                <p>Price: <span className='text-blue-600  font-bold'>${price}</span></p>
                                <p className="text-gray-600 text-base">
                                    {description}
                                </p>
                                <p>Supplier: <span className='text-orange-600 font-semibold'>{supplier}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center bg-gray-100'>
                    <div className='text-center py-8'>
                        <h1 className='font-bold text-4xl mb-8 text-slate-800'>Update Stock</h1>
                        <p className='text-xl'>Available: <CountUp className='text-red-600 text-4xl font-bold' end={newQuantity} /></p>
                        <button onClick={handleDelivered} className='my-8 bg-indigo-500 text-white px-4 py-2 rounded-lg '>Delivered</button>
                        <form onSubmit={handleRestock}>
                            <input className='border-2 p-2' type="number" name='number' placeholder='Enter number of item' required />
                            <button type='submit' className='bg-indigo-500 border-indigo-500 border-2 text-white px-4 py-2'>Restock</button>
                        </form>
                        <Link className='flex gap-2 items-center mt-4 text-lg underline text-blue-600' to={'/manageitems'}>Manage all items
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateItem;
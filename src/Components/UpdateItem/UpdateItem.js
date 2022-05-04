import React from 'react';
import { useParams } from 'react-router-dom';
import useSingleItem from '../../Hooks/useSingleItem';
import Footer from '../CommonComp/Footer';
import Header from '../CommonComp/Header';

const UpdateItem = () => {

    const { id } = useParams();
    const [item] = useSingleItem(id);
    const { _id, name, price, quantity, supplier, description, image } = item;

    return (
        <div>
            <Header></Header>
            <div className='grid md:grid-cols-3 min-h-screen font-serif'>
                <div className='text-center py-8'>
                    <h1 className='font-bold text-4xl mb-8 text-slate-800'>Update Stock</h1>
                    <p className='text-xl'>Available: <span className='text-red-600 text-4xl font-bold'>{quantity}</span></p>
                </div>
                <div className='col-span-2'>
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
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateItem;
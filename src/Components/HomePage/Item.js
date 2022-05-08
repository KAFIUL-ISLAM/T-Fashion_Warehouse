import aos from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Item = props => {
    const { _id, name, price, quantity, supplier, description, image } = props.item;

    aos.init();

    let title;
    let about;
    

    if (name.length > 20) {
        title = name.slice(0, 20) + "...";
    }
    else {
         title = name;
    }
    if (description.length > 70) {
        about = description.slice(0, 70) + "...";
    }
    else {
         about = description;
    }

    return (
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="50" className="p-4 text-center cursor-pointer">
            <div className="border-2 border-indigo-500 rounded-lg overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-[#EEF2FF] text-slate-800">
                <div className="space-y-6">
                    <img className="mx-auto h-[380px] w-full border-gray-400 rounded" src={image} alt="" />

                    <div className='flex justify-between px-8'>
                        <p>Price: <span className='text-blue-600  font-bold'>${price}</span></p>
                        <p>Available: <span className='text-red-600 font-bold'>{quantity === 0 ? 'Sold Out': quantity}</span></p>
                    </div>

                    <div className="px-6">
                        <div className="space-y-3">
                            <div className="font-bold text-xl mb-2">{title}</div>
                            <p className="text-gray-700 text-base">
                                {about}
                            </p>
                            <p>Supplier: <span className='text-orange-600 font-semibold'>{supplier}</span></p>
                        </div>
                    </div>
                    <Link to={`/inventory/${_id}`} className="text-white w-full bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300 font-bold text-md py-4 inline-flex justify-center items-center">
                        Update
                        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Item;
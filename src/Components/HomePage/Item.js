import aos from 'aos';
import 'aos/dist/aos.css';
import React from 'react';

const Item = props => {
    const { name, price, quantity, supplier, description, image } = props.item;

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
            <div className="py-8 rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-gray-100 text-slate-800">
                <div className="space-y-10">
                    <img className="mx-auto h-[350px] w-[320px] border-2 border-gray-400 rounded" src={image} alt="" />

                    <div className='flex justify-between px-8'>
                        <p>Price: <span className='text-blue-600  font-bold'>${price}</span></p>
                        <p>Available: <span className='text-red-600 font-bold'>{quantity}</span></p>
                    </div>

                    <div className="px-6">
                        <div className="space-y-5">
                            <div className="font-bold text-xl mb-2">{title}</div>
                            <p className="text-gray-700 text-base">
                                {about}
                            </p>
                            <p>Supplier: <span className='text-orange-600 font-semibold'>{supplier}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
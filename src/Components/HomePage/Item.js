import React from 'react';

const Item = props => {
    const { picture, name } = props.item;

    return (
        <div className="p-2 sm:p-10 text-center cursor-pointer">
            <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500  bg-white">
                <div className="space-y-10">
                    <img src={picture} alt="" />

                    <div className="px-6 py-4">
                        <div className="space-y-5">
                            <div className="font-bold text-xl mb-2">{name}</div>
                            <p className="text-gray-700 text-base">
                                Todo tipo de masajes y técnicas
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
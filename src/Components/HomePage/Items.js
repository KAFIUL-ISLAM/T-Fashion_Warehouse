import React from 'react';
import useItems from '../../Hooks/useItems';
import Item from './Item';

const Items = () => {

    const [items] = useItems([]);

    return (
        <div>
            <div className="bg-green-800 bg-center bg-cover bg-no-repeat h-[500px]" style={{ backgroundImage: "url(https://img.freepik.com/free-photo/warehouse-workers-using-bar-code-scanner-tablet-checking-goods-inventory_342744-1489.jpg?t=st=1651307072~exp=1651307672~hmac=f6f2c1de42298072ee966c769bfc41d2e2c66971b21fb3a6ac4b85a08a513a54&w=740)" }}>
            </div>

            <div className="-mt-64 ">
                <div className="w-full text-center">
                    <p className="text-sm tracking-widest text-white">Subtitle</p>
                    <h1 className="font-bold text-5xl text-white">
                        Title
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
                    {
                        items.slice(0,6).map(item => <Item key={item._id} item={item}></Item>)
                        
                    }
                </div>
            </div>

        </div>
    );
};

export default Items;
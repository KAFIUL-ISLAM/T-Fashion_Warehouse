import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
import Spinner from '../CommonComp/Spinner/Spinner';
import Item from './Item';

const Items = () => {

    const [items, setItems, loading] = useItems([]);

    return (
        <div>
            <div className="bg-fixed bg-center bg-cover bg-no-repeat h-[700px]" style={{ backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://img.freepik.com/free-photo/warehouse-workers-using-bar-code-scanner-tablet-checking-goods-inventory_342744-1489.jpg?t=st=1651307072~exp=1651307672~hmac=f6f2c1de42298072ee966c769bfc41d2e2c66971b21fb3a6ac4b85a08a513a54&w=740)" }}>
            </div>

            <div className="-mt-96">
                <div className="w-full text-center">
                    <p className="text-sm tracking-widest text-white">Welcome to</p>
                    <h1 className="font-bold text-5xl text-white">
                        T-Fashion Warehouse
                    </h1>
                </div>
                {
                    loading ? <Spinner></Spinner>
                        :
                        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 mt-36">
                            {
                                items.slice(0, 6).map(item => <Item key={item._id} item={item}></Item>)
                            }
                        </div>
                }
            </div>
            <div className='w-fit ml-auto mr-4'>
                <Link className='flex gap-2 items-center mt-4 text-lg underline text-blue-600 mb-8' to={'/manageitems'}>Manage all items
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Items;
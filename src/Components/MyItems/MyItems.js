import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useHandleDelete from '../../Hooks/useHandleDelete';
import Footer from '../CommonComp/Footer';
import Header from '../CommonComp/Header';
import Spinner from '../CommonComp/Spinner/Spinner';

const MyItems = () => {

    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const url = `https://t-fashion-warehouse.herokuapp.com/addedproducts?email=${user.email}`;
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res =>
                res.json()
            )
            .then(data => {
                if (!data.message) {
                    setMyItems(data);
                }
                setLoading(false);
            })
    }, [user])

    const handleDelete = useHandleDelete();

    const removeItem = id => {
        const remainItems = myItems.filter(item => item._id !== id);
        setMyItems(remainItems);
    }

    return (
        <div>
            <Header></Header>
            <div className="text-gray-900 bg-gray-100 pt-8 min-h-screen">
                <div className="p-4 text-center text-slate-400">
                    <h1 className="text-3xl uppercase mb-1">
                        My Items
                    </h1>
                    <small>Added by: <span className='text-slate-600'>{user.email}</span></small>
                </div>
                <div>
                    <Link to={'/additems'}>
                        <button className='ml-4 px-2 py-3 rounded text-white font-semibold flex bg-indigo-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>Add New Item
                        </button>
                    </Link>
                </div>
                <div className="mt-2 px-3 py-4 flex justify-center">
                    <table className="w-full text-md bg-white shadow-md rounded mb-4 table-auto">
                        <tbody>
                            <tr className="border-b">
                                <th className="text-left p-3 px-5">Name</th>
                                <th className="text-left p-3 px-5">Quantity</th>
                                <th className="text-left p-3 px-5 hidden md:block">Supplier</th>
                                <th></th>
                            </tr>
                            {
                                loading ? <tr><th colSpan={4}><Spinner></Spinner></th></tr>
                                    :
                                    myItems.map(item =>
                                        <tr className="border-b hover:bg-orange-100" key={item._id}>
                                            <td className="p-3 px-5 flex items-center gap-4"><img className='hidden md:block w-10 h-10 rounded-full' src={item.image} alt="" /><span>{item.name}</span></td>
                                            <td className="p-3 px-5">{item.quantity}</td>
                                            <td className="p-3 px-5 hidden md:table-cell">{item.supplier}</td>
                                            <td className="p-3 px-5 flex justify-end">
                                                <Link to={`/inventory/${item._id}`}>
                                                    <button type="button" className="mr-2 text-sm bg-indigo-500 hover:bg-indigo-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                    </button>
                                                </Link>
                                                <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={() => {
                                                    const proceed = window.confirm('Are you sure?');
                                                    if (proceed) {
                                                        handleDelete(item._id);
                                                        removeItem(item._id);
                                                    }
                                                }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default MyItems;
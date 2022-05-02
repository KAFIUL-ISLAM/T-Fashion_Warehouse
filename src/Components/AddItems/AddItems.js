import React from 'react';
import useHandleDelete from '../../Hooks/useHandleDelete';
import useItems from '../../Hooks/useItems';
import Footer from '../CommonComp/Footer';
import Header from '../CommonComp/Header';
import ItemCard from './ItemCard';

const AddItems = () => {

    const [items, setItems] = useItems([]);
    const handleDelete = useHandleDelete();

    const removeItem = id => {
        const remainItems = items.filter(item => item._id !== id);
        setItems(remainItems);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const description = e.target.description.value;
        const image = e.target.image.value;
        const item = { name, price, quantity, supplier, description, image };
        const url = 'https://t-fashion-warehouse.herokuapp.com/products';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                const updatedItems = [...items, item];
                setItems(updatedItems);
            }
            )
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
                        </form>
                    </div>
                    <div className='border-2 px-4 py-6'>
                        <div className="space-y-4 max-h-[700px] overflow-y-scroll">
                            {
                                items.map(item => <ItemCard key={item._id} item={item} handleDelete={handleDelete} removeItem={removeItem}></ItemCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddItems;
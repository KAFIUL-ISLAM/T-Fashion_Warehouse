import React from 'react';
import { useParams } from 'react-router-dom';
import useSingleItem from '../../Hooks/useSingleItem';
import Footer from '../CommonComp/Footer';
import Header from '../CommonComp/Header';

const UpdateItem = () => {

    const { id } = useParams();
    const [item] = useSingleItem(id);
    
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-3 min-h-screen'>
                <div className=''>
                    <h1>this is update panel</h1>
                </div>
                <div className='col-span-2'>
                    <h1>{item.name}</h1>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateItem;
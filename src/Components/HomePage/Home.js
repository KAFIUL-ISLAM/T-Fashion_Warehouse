import React from 'react';
import Footer from '../CommonComp/Footer';
import Header from '../CommonComp/Header';
import Items from './Items/Items';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Items></Items>
            <Footer></Footer>
        </div>
    );
};

export default Home;
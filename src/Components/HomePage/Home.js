import React from 'react';
import Footer from '../CommonComp/Footer';
import Header from '../CommonComp/Header';
import CounterSection from './CounterSection';
import Items from './Items';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Items></Items>
            <CounterSection></CounterSection>
            <Footer></Footer>
        </div >
    );
};

export default Home;
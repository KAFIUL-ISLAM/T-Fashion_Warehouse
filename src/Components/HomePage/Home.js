import React from 'react';
import Footer from '../CommonComp/Footer';
import Header from '../CommonComp/Header';
import CounterSection from './CounterSection';
import Items from './Items';
import Services from './Services';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Items></Items>
            <CounterSection></CounterSection>
            <Services></Services>
            <Footer></Footer>
        </div >
    );
};

export default Home;
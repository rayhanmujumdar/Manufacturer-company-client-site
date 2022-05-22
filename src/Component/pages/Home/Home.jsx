import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Product from './HomeProduct';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <Footer></Footer>
        </div>
    );
};

export default Home;
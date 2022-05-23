import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Product from './HomeProduct';
import Banner from './Banner';
import Business from './Business';
import CustomerReviews from './CustomerReviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <CustomerReviews></CustomerReviews>
            <Business></Business>
            <Footer></Footer>
        </div>
    );
};

export default Home;
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import HomeProduct from './HomeProduct';
import Banner from './Banner';
import Business from './Business';
import CustomerReviews from './CustomerReviews';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Home = () => {
    return (
        <div>
            <PageTitle title={"Home"}></PageTitle>
            <Banner></Banner>
            <HomeProduct></HomeProduct>
            <CustomerReviews></CustomerReviews>
            <Business></Business>
            <Footer></Footer>
        </div>
    );
};

export default Home;
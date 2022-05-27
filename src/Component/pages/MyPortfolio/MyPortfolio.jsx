import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const MyPortfolio = () => {
    return (
        <div className='bg-cover bg-center bg-no-repeat min-h-screen' style={{'background': 'url(http://demo2.themelexus.com/allegro/wp-content/uploads/2015/01/bg-products.jpg)'}}>
            <PageTitle title='MyPortfolio'></PageTitle>
            <div className=''>
            <h1 className='mt-2 text-4xl relative text-stone-700 font-bold inline-block before:w-full before:h-1 before:bg-black  before:absolute before:-bottom-3'>My Portfolio</h1>
            </div>
        </div>
    );
};

export default MyPortfolio;
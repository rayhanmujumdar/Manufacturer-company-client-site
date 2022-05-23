import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../../image/reviewer/img-1.png'
import img2 from '../../../image/reviewer/img-2.png'
import img3 from '../../../image/reviewer/img-3.png'
import Review from './Review';

const CustomerReviews = () => {
    const navigate = useNavigate()
    const reviews = [
        {   _id: 1,
            img: img1,
            name: 'Shelina hossain',
            describe: 'This site product is very nice.i am satisfied.and this manufacturer behavior is awesome.i will try this company to connected',
            star: 4
        },
        {   _id: 2,
            img: img2,
            name: 'sabbir rahman',
            describe: 'i love this manufacturer company. this company alway satisfied me.thank you brother',
            star: 5
        },
        {   _id: 3,
            img: img3,
            name: 'melina rabeya',
            describe: 'i am not satisfied this company,this company response time is very slow.if this is problem is fixed this company are best 😊',
            star: 4
        },
    ]
    return (
        <div className='sm:container sm:mx-auto mx-4 md:h-[75vh] flex justify-center items-center flex-col md:my-0 my-5'>
            <div>
            <h1 className='uppercase md:text-5xl text-3xl font-bold'>Customer Reviews</h1>
            <button onClick={() => navigate('/reviews')} className='text-3xl mt-2'><i  className="fa-solid fa-arrow-right animate-pulse"></i></button>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-5'>
                {reviews.slice(0,3).map(review => <Review key={review._id} review={review}></Review>)}
            </div>
        </div>
    );
};

export default CustomerReviews;
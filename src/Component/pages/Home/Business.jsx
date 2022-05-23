import React from 'react';

const Business = () => {
    return (
        <div className='sm:container sm:mx-auto mx-3 py-10'>
            <div className='mb-4'>
            <h1 className='text-5xl mt-4 font-bold text-stone-800 uppercase'>Our Business introduction</h1>
            <p className='uppercase my-2 text-xl text-primary'>introduction of our business and user expectation</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                <div className='p-10 bg-slate-200 rounded-md shadow-lg'>
                    <p className='text-4xl text-[#34AFAE]'><i class="fa-solid fa-flag border-2 border-gray-400 w-20  h-20 leading-[80px] rounded-full"></i></p>
                    <div className='mt-3'>
                        <p className='text-5xl font-bold'>30</p>
                        <p className='text-xl text-primary'>Countries</p>
                    </div>
                </div>
                <div className='p-10 bg-slate-200 rounded-md shadow-lg'>
                    <p className='text-4xl text-[#34AFAE]'><i class="fa-solid fa-person-dress border-2 border-gray-400 w-20  h-20 leading-[80px] rounded-full"></i></p>
                    <div className='mt-3'>
                        <p className='text-5xl font-bold'>300+</p>
                        <p className='text-xl text-primary'>Happy Client</p>
                    </div>
                </div>
                <div className='p-10 bg-slate-200 rounded-md shadow-lg'>
                    <p className='text-4xl text-[#34AFAE]'><i class="fa-solid fa-thumbs-up border-2 border-gray-400 w-20  h-20 leading-[80px] rounded-full"></i></p>
                    <div className='mt-3'>
                        <p className='text-5xl font-bold'>400+</p>
                        <p className='text-xl text-primary'>FeedBack</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business;
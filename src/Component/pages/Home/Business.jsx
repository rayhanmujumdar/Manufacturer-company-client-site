const Business = () => {
    return (
        <div className='sm:container sm:mx-auto mx-3 py-10 lg:py-20 flex flex-col justify-center items-center'>
            <div className='mb-4'>
            <h1 className='md:text-5xl text-2xl mt-4 font-bold text-stone-800 uppercase'>Our Business introduction</h1>
            <p className='uppercase my-2 md:text-xl text-sm text-primary'>introduction of our business and user expectation</p>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-2 gap-4'>
                <div data-aos="zoom-in-down" data-aos-duration="1000" className='p-10 bg-slate-200 rounded-md shadow-lg
                 px-14'>
                    <p className='text-4xl text-[#34AFAE]'><i  className="fa-solid fa-flag border-2 border-gray-400 w-20  h-20 leading-[80px] rounded-full"></i></p>
                    <div className='mt-3'>
                        <p className='text-5xl font-bold'>30</p>
                        <p className='text-xl text-gray-700'>Countries</p>
                    </div>
                </div>
                <div data-aos="zoom-in-down" data-aos-duration="1000" className='p-10 bg-slate-200 rounded-md shadow-lg  px-14'>
                    <p className='text-4xl text-[#34AFAE]'><i  className="fa-solid fa-person-dress border-2 border-gray-400 w-20  h-20 leading-[80px] rounded-full"></i></p>
                    <div className='mt-3'>
                        <p className='text-5xl font-bold'>300+</p>
                        <p className='text-xl text-gray-700'>Happy Client</p>
                    </div>
                </div>
                <div data-aos="zoom-in-down" data-aos-duration="1000" className='p-10 bg-slate-200 rounded-md shadow-lg  px-14'>
                    <p className='text-4xl text-[#34AFAE]'><i  className="fa-solid fa-thumbs-up border-2 border-gray-400 w-20  h-20 leading-[80px] rounded-full"></i></p>
                    <div className='mt-3'>
                        <p className='text-5xl font-bold'>400+</p>
                        <p className='text-xl text-gray-700'>FeedBack</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business;
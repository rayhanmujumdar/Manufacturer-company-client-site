import React from 'react';
import useProduct from '../../../Hooks/useProduct'
import Product from '../Product/Product';
// import Product from "../Product/Product";

const Products = () => {
    const {products,isLoading,error,refetch} = useProduct()
    return (
        <div className='container mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
            {
                products?.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
        </div>
    );
};

export default Products;
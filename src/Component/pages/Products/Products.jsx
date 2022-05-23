import React from 'react';
import useProduct from '../../../Hooks/useProduct'
import Product from '../Product/Product';
// import Product from "../Product/Product";

const Products = () => {
    const {products} = useProduct()
    return (
        <div className='container mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 md:mx-0 mx-3'>
            {
                products?.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
        </div>
    );
};

export default Products;
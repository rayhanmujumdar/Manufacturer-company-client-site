import { useState } from 'react';
import { toast } from 'react-hot-toast';
import useProduct from '../../../Hooks/useProduct';
import Footer from '../../Shared/Footer/Footer';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Pagination from '../../Shared/Pagination/Pagination';
import ScrollToTop from '../../Shared/ScrollToTop';
import { ProductCard } from '../Product/ProductCard';

const Products = () => {
    const [page, setPage] = useState(1);
    const [size] = useState(8);
    const { products, isLoading, count, isError, error } =
        useProduct({ page, limit: size }) || {};
    const pages = (count && Math.ceil(Number(count) / size)) || 0;
    let content = null;
    if (isLoading && !isError) {
        return <Loading className="text-black"></Loading>;
    } else if (!isLoading && isError) {
        toast.error(error.message, {
            id: 'error',
        });
    } else if (!isLoading && !isError && products?.length === 0) {
        content = (
            <p className="text-center py-5 text-xl text-red-400">Not Found</p>
        );
    } else {
        content = (
            <div
                id="top"
                className="grid lg:grid-cols-4 md:grid-cols-3 space-y-4 md:mx-0 mx-3 my-5"
            >
                {products?.map(product => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>
                ))}
            </div>
        );
    }
    return (
        <>
            <div className="container mx-auto">
                <PageTitle title={'Products'}></PageTitle>
                <ScrollToTop></ScrollToTop>
                <h1 className="mt-2 text-4xl relative text-stone-700 font-bold before:w-52 before:h-1 before:bg-black  before:absolute before:-bottom-3 text-center">
                    Our Products
                </h1>
                {content}
                <Pagination
                    pages={pages}
                    page={page}
                    setPage={setPage}
                ></Pagination>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Products;

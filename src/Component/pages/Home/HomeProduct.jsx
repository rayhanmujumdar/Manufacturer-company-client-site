import { useNavigate } from 'react-router-dom';
import useProduct from '../../../Hooks/useProduct';
import Loading from '../../Shared/Loading/Loading';
import { ProductCard } from '../Product/ProductCard';
const HomeProduct = () => {
    const { products, isLoading } = useProduct({ page: undefined, limit: 5 });
    const navigate = useNavigate();
    if (isLoading) {
        return <Loading className="text-black"></Loading>;
    }
    return (
        <div
            className="bg-center bg-no-repeat bg-cover"
            // style={{
            //     background: `url(http://demo2.themelexus.com/allegro/wp-content/uploads/2015/01/bg-products.jpg)`,
            // }}
        >
            <div className="md:container md:mx-auto py-20 mx-5">
                <h1 className="text-5xl font-bold mb-5 text-stone-800 uppercase text-center">
                    Our Product
                </h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-4 md:place-content-center">
                    {products?.slice(1, 5).map(product => (
                        <ProductCard
                            key={product._id}
                            product={product}
                        ></ProductCard>
                    ))}
                </div>
                <div className="flex justify-center mt-5">
                    <button
                        onClick={() => navigate('/products')}
                        className="btn btn-sm border-none bg-teal-500"
                    >
                        See Products
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;

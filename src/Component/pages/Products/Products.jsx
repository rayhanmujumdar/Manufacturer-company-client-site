
import useProduct from '../../../Hooks/useProduct'
import Footer from '../../Shared/Footer/Footer';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Product from '../Product/Product';
// import Product from "../Product/Product";

const Products = () => {
    const {products} = useProduct()
    return (
        <>
        <div className='container mx-auto'>
            <PageTitle title={"Products"}></PageTitle>
            <h1 className="mt-2 text-4xl relative text-stone-700 font-bold inline-block before:w-full before:h-1 before:bg-black  before:absolute before:-bottom-3">
            Our Products
          </h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 md:mx-0 mx-3 my-5'>
            {
                products?.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Products;
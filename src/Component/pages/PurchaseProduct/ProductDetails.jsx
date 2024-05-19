import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import useAdmin from '../../../Hooks/useAdmin';
import { getProduct } from '../../../api/productApi';
import auth from '../../../firebase/firebase.init';
import Footer from '../../Shared/Footer/Footer';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import PurchaseModal from './PurchaseModal';
export default function ProductDetails() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [admin] = useAdmin(user);
    const { id } = useParams();
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    // get the single product data
    const {
        data: product,
        isLoading,
        error,
        refetch,
        isError,
    } = useQuery(['single-product', id], () => getProduct({ id, email: user?.email }));
    // handle error
    if (isLoading && !isError) {
        return <Loading className="text-black"></Loading>;
    } else if (!isLoading && isError) {
        if (
            error?.response?.status === 401 ||
            error?.response?.status === 403
        ) {
            signOut(auth);
            navigate('/login');
            toast.error(
                error?.response?.data?.message || 'SameThing was wrong',
                {
                    id: 'error',
                }
            );
        } else if (error?.response?.status === 500) {
            toast.error('Product Not Found', {
                id: 'error',
            });
        }
    }
    const {
        img,
        name,
        description,
        availableQuantity,
        price,
        minimumOrderQuantity,
    } = product?.data || {};
    const quantityCondition = availableQuantity < minimumOrderQuantity;
    return (
        <>
            {product?.data ? (
                <section>
                    <PageTitle title={'Purchase-Product'}></PageTitle>
                    <div className="grid grid-cols-12 container gap-8 justify-items-center">
                        <div className="col-span-12 md:col-span-6">
                            <img
                                src={img}
                                alt="recipe-image"
                                className="w-[600px] h-[600px] rounded-lg object-contain"
                            />
                        </div>
                        <div className="col-span-12 md:col-span-6 py-8 flex flex-col justify-center">
                            <h2 className="font-semibold text-4xl lg:w-8/12 leading-10">
                                {name}
                            </h2>
                            <div className="text-xs text-[#eb4a36] italic my-2">
                                {quantityCondition && (
                                    <p className="text-red-500">
                                        This product quantity is not available
                                    </p>
                                )}
                                {admin && (
                                    <p className="text-red-500">
                                        Admin Not Ordered Product
                                    </p>
                                )}
                            </div>
                            <p className="text-gray-600 text-sm my-6 leading-6">
                                {description}
                            </p>

                            <div className="flex gap-4 justify-center divide-x my-12">
                                <div className="flex-1 text-center">
                                    <h3 className="font-medium text-lg text-gray-700 mt-2">
                                        Price
                                    </h3>
                                    <p className="text-gray-500 text-sm">
                                        {price}$ (per quantity price)
                                    </p>
                                </div>
                                <div className="flex-1 text-center">
                                    <h3 className="font-medium text-lg text-gray-700 mt-2">
                                        MiniMum Order Quantity
                                    </h3>
                                    <p className="text-gray-500 text-sm">
                                        {minimumOrderQuantity} pieces
                                    </p>
                                </div>
                                <div className="flex-1 text-center">
                                    <h3 className="font-medium text-lg text-gray-700 mt-2">
                                        Available Quantity
                                    </h3>
                                    <p className="text-gray-500 text-sm">
                                        {availableQuantity} pieces
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 justify-end">
                                <button
                                    disabled={quantityCondition || admin}
                                    onClick={openModal}
                                    className="btn btn-primary"
                                >
                                    Order
                                </button>
                                <PurchaseModal
                                    refetch={refetch}
                                    product={product.data}
                                    modalIsOpen={modalIsOpen}
                                    setIsOpen={setIsOpen}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <p className="text-xl text-red-400 py-5">
                    Product Details Not Found
                </p>
            )}
            <Footer />
        </>
    );
}

import { Button, Input, Modal } from 'keep-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useDebounce from '../../../Hooks/useDebounce';
import { getProducts } from '../../../api/productApi';
import Loading from '../Loading/Loading';
import SearchProductCard from './SearchProductCard';
export default function SearchModal({ isOpen, openModal, closeModal }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState(null);
    const handleSearchTerm = useDebounce(e => {
        setSearchTerm(e.target.value);
    }, 500);
    useEffect(() => {
        const fetchProductsByQuery = async () => {
            try {
                const response = await getProducts({ searchTerm, limit: 5 });
                if (response.status === 200) {
                    setProducts(response.data);
                } else {
                    setError('Something went wrong');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProductsByQuery();
    }, [searchTerm]);

    let content = null;
    if (isLoading && !error) {
        return <Loading className="text-black"></Loading>;
    } else if (!isLoading && error) {
        toast.error(error.message, {
            id: 'error',
        });
    } else if (!isLoading && !error && products?.length === 0) {
        content = (
            <p className="text-center py-5 text-xl text-red-400">Not Found</p>
        );
    } else {
        content = (
            <Modal.Content className="my-4 text-center w-full space-y-3 h-[350px] overflow-y-auto">
                {products?.map(product => (
                    <Link
                        onClick={() => {
                            closeModal();
                        }}
                        key={product._id}
                        to={`/product/${product._id}`}
                    >
                        <SearchProductCard
                            image={product.img}
                            name={product.name}
                            price={product.price}
                        ></SearchProductCard>
                    </Link>
                ))}
            </Modal.Content>
        );
    }
    return (
        <>
            <Button onClick={openModal}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <Modal.Body className="flex w-[30rem] flex-col items-center p-6 lg:p-8">
                    <Modal.Content>
                        <Input
                            onChange={handleSearchTerm}
                            placeholder="Search product"
                            type="text"
                            className="w-96"
                        />
                    </Modal.Content>
                    {content}
                    <Modal.Footer>
                        <Button
                            onClick={closeModal}
                            size="sm"
                            className="bg-teal-500"
                        >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>
        </>
    );
}

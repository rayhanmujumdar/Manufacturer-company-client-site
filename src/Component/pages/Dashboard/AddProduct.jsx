import axios from 'axios';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../../api/productApi';
import auth from '../../../firebase/firebase.init';
import Loading from '../../Shared/Loading/Loading';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const [loading, setLoading] = useState(false);
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const addProductMutation = useMutation(addProduct, {
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['product'],
            });
        },
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // upload A new product btn
    const onSubmit = async data => {
        setLoading(true);
        const image = data?.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${
            import.meta.env.VITE_IMG_STORE_KEY
        }`;
        const { data: imageUpload } = await axios(url, {
            method: 'POST',
            data: formData,
        });
        const img = imageUpload?.data.url;
        const addProductData = {
            ...data,
            img,
            price: parseInt(data?.price),
            availableQuantity: parseInt(data?.availableQuantity),
            minimumOrderQuantity: parseInt(data?.minimumOrderQuantity),
        };
        const { data: postData } = await addProductMutation.mutateAsync({
            email: user?.email,
            data: addProductData,
        });
        if (postData.insertedId) {
            toast.success('Add To Product', {
                id: 'success',
            });
            navigate('/products');
            setLoading(false);
        }
    };
    return (
        <div
            data-aos="zoom-in-down"
            className="card flex-shrink-0 w-full md:max-w-lg max-w-sm shadow-2xl bg-base-100 mx-auto"
        >
            <PageTitle title="Dashboard/Add-Product" />
            <h1 className="text-2xl font-semibold text-gray-500 text-center pt-3">
                Add A Product
            </h1>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input
                            {...register('name', {
                                required: {
                                    value: true,
                                    message: 'Product Name is required',
                                },
                            })}
                            type="text"
                            placeholder="Product Name"
                            className="input input-bordered"
                            autoComplete="off"
                        />
                        {errors.name?.type === 'required' && (
                            <p className="text-left mt-0.5 text-red-500">
                                {errors.name.message}
                            </p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Total Add Quantity
                            </span>
                        </label>
                        <input
                            {...register('availableQuantity', {
                                required: {
                                    value: true,
                                    message: 'Total Add Quantity is required',
                                },
                                pattern: {
                                    value: /^[0-9]\d*$/,
                                    message: 'Enter A Number No latter',
                                },
                            })}
                            autoComplete="off"
                            type="text"
                            placeholder="Available Quantity"
                            className="input input-bordered"
                        />
                        {errors.availableQuantity?.type === 'pattern' && (
                            <p className="text-left mt-0.5 text-red-500">
                                {errors.availableQuantity.message}
                            </p>
                        )}
                        {errors.availableQuantity?.type === 'required' && (
                            <p className="text-left mt-0.5 text-red-500">
                                {errors.availableQuantity.message}
                            </p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Minimum purchase Quantity
                            </span>
                        </label>
                        <input
                            {...register('minimumOrderQuantity', {
                                required: {
                                    value: true,
                                    message:
                                        'Minimum purchase Quantity is required',
                                },
                                pattern: {
                                    value: /^[0-9]\d*$/,
                                    message: 'Enter A Number No latter',
                                },
                            })}
                            autoComplete="off"
                            type="text"
                            placeholder="MiniMum Purchase Quantity"
                            className="input input-bordered"
                        />
                        {errors.minimumOrderQuantity?.type === 'pattern' && (
                            <p className="text-left mt-0.5 text-red-500">
                                {errors.minimumOrderQuantity.message}
                            </p>
                        )}
                        {errors.minimumOrderQuantity?.type === 'required' && (
                            <p className="text-left mt-0.5 text-red-500">
                                {errors.minimumOrderQuantity.message}
                            </p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Single Quantity price
                            </span>
                        </label>
                        <input
                            {...register('price', {
                                required: {
                                    value: true,
                                    message:
                                        'Single Quantity price is required',
                                },
                                pattern: {
                                    value: /^[0-9]\d*$/,
                                    message: 'Enter A Number No latter',
                                },
                            })}
                            autoComplete="off"
                            type="text"
                            placeholder="Single Quantity price"
                            className="input input-bordered"
                        />
                        {errors.price?.type === 'pattern' && (
                            <p className="text-left mt-0.5 text-red-500">
                                {errors.price.message}
                            </p>
                        )}
                        {errors.price?.type === 'required' && (
                            <p className="text-left mt-0.5 text-red-500">
                                {errors.price.message}
                            </p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Upload</span>
                        </label>
                        <input
                            {...register('img', {
                                required: {
                                    value: true,
                                    message: 'img is required',
                                },
                            })}
                            type="file"
                            className="py-3 border-2 pl-2 rounded-md"
                        />
                        {errors?.img?.type === 'required' && (
                            <p className="text-left text-red-500 ml-4">
                                {errors.img.message}
                            </p>
                        )}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            {...register('description', {
                                required: {
                                    value: true,
                                    message: 'Description is required',
                                },
                            })}
                            autoComplete="off"
                            type="text"
                            placeholder="Description"
                            className="input input-bordered h-32 resize-none"
                        />
                        {errors.description?.type === 'required' && (
                            <p className="text-left mt-0.5 text-red-500">
                                {errors.description.message}
                            </p>
                        )}
                    </div>
                    <div className="form-control mt-6">
                        <button
                            disabled={loading || false}
                            className="btn btn-primary"
                        >
                            upload product
                            {loading && (
                                <Loading className="text-white"></Loading>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;

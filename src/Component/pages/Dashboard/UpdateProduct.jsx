import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axiosPrivate from "../../../axiosPrivate/axiosPrivate";
import auth from "../../../firebase/firebase.init";

const UpdateProduct = ({
  id,
  setUpdate,
  refetch,
  availableQuantity: oldAvailable,
}) => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { availableQuantity, minimumOrderQuantity, price } = data;
    const updateProductData = {
      availableQuantity: parseInt(availableQuantity) + oldAvailable,
      minimumOrderQuantity: parseInt(minimumOrderQuantity),
      price: parseInt(price),
    };
    const url = `${import.meta.env.VITE_SERVER_URL}/product/updateProduct/${id}?email=${user?.email}`;
    const { data: updateData } = await axiosPrivate.put(url, updateProductData);
    if (updateData.modifiedCount > 0) {
      toast.success("Product Quantity updated", {
        id: "success",
      });
      setUpdate(false);
      reset();
      refetch();
    }
  };
  return (
    <div>
      <h6 className="text-center mb-3 text-xl">Product Quantity update</h6>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2.5 justify-center"
      >
        <input
          {...register("availableQuantity", {
            required: {
              value: true,
              message: "Available quantity is Required",
            },
            pattern: {
              value: /^[0-9]\d*$/,
              message: "please type a number value",
            },
          })}
          className="w-full py-1.5 rounded-xl pl-2 outline-none text-black"
          type="text"
          placeholder="Update available Quantity"
          autoComplete="off"
        />
        {errors?.availableQuantity?.type === "required" && (
          <p>
            <small className="text-red-400">
              {errors.availableQuantity.message}
            </small>
          </p>
        )}
        {errors?.availableQuantity?.type === "pattern" && (
          <p>
            <small className="text-red-400">
              {errors.availableQuantity.message}
            </small>
          </p>
        )}
        <input
          {...register("minimumOrderQuantity", {
            required: {
              value: true,
              message: "Minimum order quantity is Required",
            },
            pattern: {
              value: /^[0-9]\d*$/,
              message: "please type a number value",
            },
          })}
          className="w-full py-1.5 rounded-xl pl-2 outline-none text-black"
          type="text"
          placeholder="Update Minimum order Quantity"
          autoComplete="off"
        />
        {errors?.minimumOrderQuantity?.type === "required" && (
          <p>
            <small className="text-red-400">
              {errors.minimumOrderQuantity.message}
            </small>
          </p>
        )}
        {errors?.minimumOrderQuantity?.type === "pattern" && (
          <p>
            <small className="text-red-400">
              {errors.minimumOrderQuantity.message}
            </small>
          </p>
        )}
        <input
          {...register("price", {
            required: {
              value: true,
              message: "Quantity update price is Required",
            },
            pattern: {
              value: /^[0-9]\d*$/,
              message: "please type a number value",
            },
          })}
          className="w-full py-1.5 rounded-xl pl-2 outline-none text-black"
          type="text"
          placeholder="Update Quantity Price"
          autoComplete="off"
        />
        {errors?.price?.type === "required" && (
          <p>
            <small className="text-red-400">{errors.price.message}</small>
          </p>
        )}
        {errors?.price?.type === "pattern" && (
          <p>
            <small className="text-red-400">{errors.price.message}</small>
          </p>
        )}
        <button className="btn btn-sm bg-green-500 border-0 hover:bg-green-400">
          Submit
        </button>
        <button
          onClick={() => setUpdate(false)}
          className="btn btn-sm bg-red-500 border-0 hover:bg-red-400"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;

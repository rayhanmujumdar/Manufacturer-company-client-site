import { Avatar } from 'keep-react';
export default function SearchProductCard({ name, price, image }) {
    return (
        <div className="grid grid-cols-6 items-center justify-between bg-gray-100 p-2 rounded-md">
            <div className="flex items-center gap-3 col-span-4">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 justify-center">
                        <Avatar img={image} />
                        <div>
                            <p className=" text-body-4 font-medium text-metal-600 line-clamp-1">
                                {name}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <p>Price: {price}$</p>
            </div>
        </div>
    );
}

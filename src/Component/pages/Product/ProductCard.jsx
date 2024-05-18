import { Button, Card, Divider } from 'keep-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const {
        _id,
        img,
        name,
        description,
        availableQuantity,
        price,
        minimumOrderQuantity,
    } = product;
    const [isDes, setIsDes] = useState(true);
    const handlePurchase = id => {
        navigate(`/product/${id}`);
    };
    const des = description.slice(0, 100);
    return (
        <Card className="text-start">
            <Card.Header>
                <img src={img} alt="image" className="w-[600px] h-[350px]" />
            </Card.Header>
            <Card.Content className="space-y-3">
                <Card.Title>{name}</Card.Title>
                <Card.Description>
                    {isDes
                        ? des.length < description.length
                            ? des + '...'
                            : des
                        : description}{' '}
                    {description.length > des.length && (
                        <span
                            onClick={() => setIsDes(!isDes)}
                            className="font-bold cursor-pointer"
                        >
                            {' '}
                            {isDes ? 'See more' : 'less'}
                        </span>
                    )}
                </Card.Description>
            </Card.Content>
            <Divider>Or</Divider>
            <Card.Content className="py-2">
                <p className="text-xl">Price: ${price}</p>
                <p>
                    Available Quantity:{' '}
                    <span className="font-semibold">{availableQuantity}/p</span>
                </p>
                <p>
                    Minimum Purchase:{' '}
                    <span className="font-semibold">
                        {minimumOrderQuantity}/p
                    </span>
                </p>
            </Card.Content>
            <Card.Content className="py-4">
                <Button
                    onClick={() => handlePurchase(_id)}
                    size="sm"
                    color="primary"
                    className="bg-teal-500"
                >
                    Buy Now
                </Button>
            </Card.Content>
        </Card>
    );
};

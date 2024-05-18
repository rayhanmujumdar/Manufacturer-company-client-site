import { Avatar, Card } from 'keep-react';

export const ReviewCard = ({ review }) => {
    const { name, img, rating, describe } = review;
    let ratings = [];
    for (let i = 0; i < rating; i++) {
        ratings.push(<i className="fa-solid fa-star text-yellow-600"></i>);
    }
    return (
        <Card data-aos="zoom-in" className="max-w-md">
            <Card.Content className="flex justify-center items-center p-0 pt-3">
                <Avatar shape="circle" img={img ? img : null} size="2xl" />
            </Card.Content>
            <Card.Content className="space-y-3">
                <Card.Title>{name}</Card.Title>
                <Card.Description>{describe}</Card.Description>
                <div>
                    {ratings.map((star, index) => (
                        <span key={index}>{star}</span>
                    ))}
                </div>
            </Card.Content>
        </Card>
    );
};

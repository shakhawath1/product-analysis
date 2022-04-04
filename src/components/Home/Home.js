import React from 'react';
import useReviews from '../../hooks/useReviews';



const Home = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <h2>Home</h2>
            {
                reviews.map(review => <p key={review.id}>{review.name}</p>)
            }
        </div>
    );
};

export default Home;
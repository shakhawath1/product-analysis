import React from 'react';
import useReviews from '../../hooks/useReviews';
// import Reviews from '../Reviews/Reviews';


const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <h2>Reviews</h2>
            {
                reviews.map(review => <p key={review.id}>{review.id}</p>)
            }
        </div>
    );
};


export default Reviews;
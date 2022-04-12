import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewPage from '../ReviewPage/ReviewPage';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <h3 className="text-3xl font-semibold my-10">Customer Reviews -{reviews.length}</h3>
            <div>
                {
                    reviews.map(review => <ReviewPage key={review.id} reviews={review}></ReviewPage>)
                }
            </div>
        </div>
    );
};

export default Reviews;
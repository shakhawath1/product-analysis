import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewPage from '../ReviewPage/ReviewPage';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h1>Reviews</h1>
            <div className=''>
                <h3 className="text-3xl font-semibold my-10">Customer Reviews -{reviews.length}</h3>

                {
                    reviews.map(review => <ReviewPage reviews={review}></ReviewPage>)
                }
            </div>
        </div>
    );
};

export default Reviews;
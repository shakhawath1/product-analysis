import React from 'react';

const HomeReviews = ({ reviews }) => {
    const { picture, name, rating, review } = reviews;
    return (
        <div className='p-3 border-2 rounded-xl bg-emerald-100'>
            <img className='rounded-full w-20 h-20 m-auto mb-10' src={picture} alt=""></img>
            <div className='text-left'>
                <h5 className='font-semibold'>{name}</h5>
                <p><span className='font-semibold'>Rating:</span> {rating}/5</p>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default HomeReviews;
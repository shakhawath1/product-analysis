import React from 'react';

const ReviewPage = ({ reviews }) => {
    const { picture, name, rating, review } = reviews;
    return (
        <div className='flex align-center p-3 mx-60 my-5 px-10 border-2 rounded-xl'>
            <img className='rounded-full w-14 h-14 mr-8 my-auto' src={picture} alt=""></img>
            <div className='text-left'>
                <h5>{name}</h5>
                <p>Rating: {rating}</p>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default ReviewPage;
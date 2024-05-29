// src/components/Reviews/ReviewList.jsx
import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h2 className='bg-dark p-2 text-white '>Customer Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        <ul className="list-group ">
          {reviews.map((review, index) => (
            <li key={index} className="list-group-item bg-secondary p-2 text-white bg-opacity-50">
              <strong className='text-dark text-uppercase'>{review.user.name}:</strong> {review.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewList;

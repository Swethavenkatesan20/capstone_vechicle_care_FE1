// src/pages/ReviewsPage.jsx
import React, { useState, useEffect } from 'react';
import ReviewForm from '../components/Reviews/ReviewForm';
import ReviewList from '../components/Reviews/ReviewList';
import reviewServices from '../services/reviewServices';
import userServices from '../services/userServices';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    reviewServices.getAllReviews()
      .then(response => setReviews(response.data.data))
      .catch(error => console.error('Error fetching reviews:', error));
    
    userServices.getCurrentUser()
      .then(response => setUser(response.data.user))
      .catch(error => console.error('Error fetching user:', error));
  }, []);

  const addReview = (newReview) => {
    const token = userServices.getToken();
    reviewServices.createReview(newReview, token)
      .then(response => setReviews([...reviews, response.data.data]))
      .catch(error => console.error('Error creating review:', error));
  };

  return (
    <div className="container">
      <ReviewForm addReview={addReview} />
      <hr />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default ReviewsPage;

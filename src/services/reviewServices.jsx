import { protectedInstance } from './instance';

const getAllReviews = () => {
  return protectedInstance.get('/reviews');
};

const createReview = (review, token) => {
  return protectedInstance.post('/reviews', { text: review }, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

const reviewServices = { getAllReviews, createReview };
export default reviewServices;

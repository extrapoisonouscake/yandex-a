import { bookshelfs } from '../../constants/mock.js';

export const selectReviewModule = (state) => state.reviews;


//селектор, который возвращает наши reviews 
export const selectReviews = (state) => selectReviewModule(state).entities;

export const selectReviewsByBookId = (state,bookId) => selectReviewModule(state).entities.find(r => r.bookId === bookId).reviews;

// export const selectReviewById = (state, reviewId) => selectReviewModule(state).entities.find(r => r.id === reviewId);

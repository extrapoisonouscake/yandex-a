import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { bookSlice } from './book';
import { cartSlice } from './cart';
import { reviewsSlice } from './reviews';

export const store = configureStore({
	reducer: combineReducers({
		book: bookSlice.reducer,
		cart: cartSlice.reducer,
		reviews: reviewsSlice.reducer,


	}),
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
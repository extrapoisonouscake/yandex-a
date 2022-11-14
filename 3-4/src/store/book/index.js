import { createSlice } from '@reduxjs/toolkit';
import {Statuses} from '../../constants/statuses.js';
import mock from '../../constants/mock.json';

const initialState =  {
		entities: mock.books,
		ids: [],
		status: Statuses.success,
	};

export const bookSlice = createSlice( {

	name: 'book',
	initialState,
	reducers: {
		startLoading: (state) => {
			state.status = Statuses.inProgress;
		},
		successLoading: (state, action) => {
			state.status = Statuses.success;
			state.entities = {... state.entities, ... action.payload.entities};
			state.ids = Array.from(new Set([... state.ids, ... action.payload.ids]));
		},
		failLoading: (state) => {
			state.status = Statuses.failed;
		},

	},
} )

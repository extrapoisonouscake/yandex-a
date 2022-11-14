import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../constants/statuses.js";
import { v4 as uuidv4 } from "uuid";
import mock from "../../constants/mock.json";
const initialState = {
  entities: mock.reviews,
  ids: mock.reviews.map(() => uuidv4()),
  status: Statuses.success,
};
export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.status = Statuses.inProgress;
      state.entities = {};
      state.ids = [];
    },
    successLoading: (state, action) => {
      state.status = Statuses.success;
      state.entities = action.payload.entities;
      state.ids = action.payload.ids;
    },
    failLoading: (state, action) => {
      state.status = Statuses.failed;
      state.entities = {};
      state.ids = [];
    },
  },
});

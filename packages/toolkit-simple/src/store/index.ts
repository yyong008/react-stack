import { configureStore, combineReducers } from "@reduxjs/toolkit";

// slice
import globalData from "./slices/globalSlice";

const reducer = combineReducers({
  globalData,
});

export const createStore = () => {
  return configureStore({
    reducer,
  });
};

const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

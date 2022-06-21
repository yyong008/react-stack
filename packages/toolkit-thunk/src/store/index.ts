import { configureStore, combineReducers } from "@reduxjs/toolkit";

// slice
import globalData from "./slices/globalSlice";
import userInfo from './slices/userInfo';
import aboutData from "./slices/about";

const reducer = combineReducers({
  globalData,
  userInfo,
  aboutData
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

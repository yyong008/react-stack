import type { RootState } from "../index";

import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 1,
};

const { actions, reducer } = createSlice({
  name: "counter",
  initialState,
  reducers: {
    plus(state, action) {
      state.value += action.payload;
    },
    del(state) {
      state.value -= 1;
    },
  },
});

export default reducer;
export const selectGlobalData = (state: RootState) => state.globalData;
export const { plus, del } = actions;

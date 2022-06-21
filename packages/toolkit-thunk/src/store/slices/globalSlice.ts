import type { RootState } from "../index";

import { createSlice } from "@reduxjs/toolkit";

import { getAge } from "@/utils/fetch";

type CounterState = {
  value: number;
  age: number;
};

const initialState: CounterState = {
  value: 1,
  age: 1,
};

let name = "couner";

const { actions, reducer } = createSlice({
  name,
  initialState,
  reducers: {
    plus(state, action) {
      state.value += action.payload;
    },
    del(state) {
      state.value -= 1;
    },
    setAge(state, action) {
      state.age = action.payload;
    },
    agePlus(state) {
      state.age += 1;
    },
    ageDel(state) {
      state.age -= 1;
    },
  },
});

// thunk
export const fetchAgeThunk = () => async (dispatch) => {
  const res: any = await getAge();
  dispatch(setAge(res.data.age));
}

export default reducer;
export const selectGlobalData = (state: RootState) => state.globalData;
export const { plus, del, agePlus, ageDel, setAge } = actions;

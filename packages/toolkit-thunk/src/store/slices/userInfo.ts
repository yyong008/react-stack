import type { RootState } from "../index";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getUserInfo } from "@/utils/fetch";

type UserInfoState = {
  userInfo: any;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
};

const initialState: UserInfoState = {
  userInfo: {},
  loading: 'idle'
};

const name = "userInfo";

const { actions, reducer } = createSlice({
  name,
  initialState,
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    clearUserInfo(state) {
      state.userInfo = {};
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUserInfoThunk.pending, (state) => {
      state.loading = 'pending'
    })
    builder.addCase(fetchUserInfoThunk.fulfilled, (state, action) => {
      state.userInfo = action.payload
      state.loading = "succeeded"
    })
    builder.addCase(fetchUserInfoThunk.rejected, (state) => {
      state.loading = 'failed'
    })
  },
});

export const fetchUserInfoThunk = createAsyncThunk(`${name}/userInfo`, async () => {
  const res: any = await getUserInfo();
  return res.data;
});

export default reducer;
export const selectUserInfo = (state: RootState) => state.userInfo;
export const { setUserInfo, clearUserInfo } = actions;

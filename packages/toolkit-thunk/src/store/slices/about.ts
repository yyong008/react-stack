import { createAction, createReducer } from "@reduxjs/toolkit";
import { RootState } from "..";

export const aboutPlu = createAction<number>("val/plu")
export const aboutDel = createAction<number>("val/del")

type AboutState = {
  val: number
}
const initialState: AboutState= {
  val: 1
}

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(aboutPlu, (state) => {
    state.val += 1;
  })
  builder.addCase(aboutDel, (state) => {
    state.val -= 1;
  })
  builder.addDefaultCase(state => state)
})

export default reducer;
export const selectAboutData = (state: RootState) => state.aboutData;

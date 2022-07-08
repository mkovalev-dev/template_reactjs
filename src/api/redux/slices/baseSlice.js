import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "../../api";

let initialState = {};

/**
 * Получить _.
 */
export const _ = createAsyncThunk(
  "base/_",
  async ({ keyword = undefined }, { rejectWithValue }) => {
    const response = await api.get(`base/_`, {});
    const dataResponse = await response.json();
    if (!response.ok) {
      return rejectWithValue(dataResponse);
    }
    return dataResponse;
  }
);

const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    setSubMenuOpenKeys: (state, action) => {
      state.subMenuKeys = action.payload;
    },
  },
  extraReducers: {
    // [_.pending]: (state) => {
    //   state.rubricListStatus = "loading";
    //   state.rubricListError = null;
    // },
    // [_.fulfilled]: (state, action) => {
    //   state._Status = "succeeded";
    //   state._ = action.payload;
    // },
    // [_.rejected]: (state, action) => {
    //   state._Status = "failed";
    //   state._Error = action.payload.errors;
    // },
  },
});
export default baseSlice.reducer;

// export const _ = (state) => state.base._;
// export const _Status = (state) => state.base._Status;
// export const _Error = (state) => state.base._Error;

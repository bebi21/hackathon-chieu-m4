//import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import publicAxios from "../config/publicAxios";

export interface Question {
  "question-id": number;
  "category-id": number;
  content: string;
  level: number;
}
export interface CounterState {
  value: Question[];
}

const initialState: CounterState = {
  value: [],
};

export const takeQuestion: any = createAsyncThunk(
  "users/TakeQuestion",
  async () => {
    const data = await publicAxios.get("/question");
    return data.data;
  },
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(takeQuestion.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default counterSlice.reducer;

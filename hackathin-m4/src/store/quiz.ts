//import type { PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import publicAxios from "../config/publicAxios";

export interface Question {
  "question-id": number;
  "category-id": number;
  content: string;
  level: number;
}
interface Answer {
  "answer-id": number;
  "question-id": number;
  content: number;
  level: number;
  status: number;
}

export interface CounterState {
  value: Question[];
  answer: Answer[];
}

const initialState: CounterState = {
  value: [],
  answer: [],
};

export const takeQuestion: any = createAsyncThunk(
  "users/TakeQuestion",
  async (quiz) => {
    const data = await publicAxios.post("/question", quiz);
    return data.data.data;
  },
);

export const takeAnswer: any = createAsyncThunk(
  "users/TakeAnswer",
  async () => {
    const data = await publicAxios.get("/answer");

    return data.data.data;
  },
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(takeQuestion.fulfilled, (state, action) => {
        state.value = [...action.payload];
      })
      .addCase(takeAnswer.fulfilled, (state, action) => {
        state.answer = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default counterSlice.reducer;

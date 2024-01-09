import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILesson } from "../../models/lessons";

export interface lessonssState {
  lessons: ILesson[];
}

const initialState: lessonssState = {
  lessons: [],
};

export const lessonssSlice = createSlice({
  name: "lessonss",
  initialState,
  reducers: {
    addLessons: (state, action: PayloadAction<ILesson[]>) => {
      state.lessons = [...action.payload];
    },
  },
});

export const { addLessons } = lessonssSlice.actions;

export default lessonssSlice.reducer;

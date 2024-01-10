import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILesson } from "../../models/lessons";

export interface lessonssState {
  lessons: ILesson[];
  selectedLesson?: ILesson;
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
    selectLessons: (state, action: PayloadAction<ILesson>) => {
      state.selectedLesson = { ...action.payload };
    },
  },
});

export const { addLessons, selectLessons } = lessonssSlice.actions;

export default lessonssSlice.reducer;

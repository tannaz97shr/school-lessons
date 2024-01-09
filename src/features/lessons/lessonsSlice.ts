import { createSlice } from "@reduxjs/toolkit";
import { ILesson } from "../../models/lessons";

export interface lessonssState {
  sources: ILesson[];
}

const initialState: lessonssState = {
  sources: [],
};

export const lessonssSlice = createSlice({
  name: "lessonss",
  initialState,
  reducers: {
    // addSource: (state, action: PayloadAction<ISource>) => {
    //   state.sources = [...state.sources, action.payload];
    // },
    // addCategory: (state, action: PayloadAction<string>) => {
    //   state.category = [...state.category, action.payload];
    // },
    // addAuthor: (state, action: PayloadAction<string>) => {
    //   state.author = [...state.author, action.payload];
    // },
    // removeSource: (state, action: PayloadAction<ISource>) => {
    //   state.sources = state.sources.filter(
    //     (src: ISource) => src.id !== action.payload.id
    //   );
    // },
    // removeCategory: (state, action: PayloadAction<string>) => {
    //   state.category = state.category.filter(
    //     (cat: string) => cat !== action.payload
    //   );
    // },
    // removeAuthor: (state, action: PayloadAction<string>) => {
    //   state.author = state.author.filter(
    //     (author: string) => author !== action.payload
    //   );
    // },
  },
});

export const {} = lessonssSlice.actions;

export default lessonssSlice.reducer;

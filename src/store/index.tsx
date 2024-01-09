import { configureStore } from "@reduxjs/toolkit";
import lessonsReducer from "../features/lessons/lessonsSlice";

// import favoritesReducer from "../features/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    lessons: lessonsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

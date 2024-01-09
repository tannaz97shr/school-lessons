import { ILessonsResponse } from "../models/lessons";

export const getLessons = async (): Promise<ILessonsResponse> => {
  try {
    const response = await fetch("https://app.tarazorg.ir/api/qb/v4/test_unit");
    const lessons = await response.json();
    return { lessons: lessons };
  } catch (e) {
    console.error("fetching error", e);
    return {
      message: "fetching error",
      lessons: [],
    };
  }
};

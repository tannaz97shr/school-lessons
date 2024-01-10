import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLessons } from "./api/lessons";
import LessonDetails from "./components/LessonDetails";
import Slider from "./components/Slider";
import { addLessons } from "./features/lessons/lessonsSlice";
import { StyledContainer } from "./styles";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const result = await getLessons();
      console.log("result.lessons", result.lessons);
      dispatch(addLessons(result.lessons));
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <StyledContainer>
      <LessonDetails />
      <Slider />
    </StyledContainer>
  );
}

export default App;

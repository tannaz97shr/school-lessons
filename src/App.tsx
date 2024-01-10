import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLessons } from "./api/lessons";
import Slider from "./components/Slider";
import { addLessons } from "./features/lessons/lessonsSlice";

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
    <div className="flex min-h-screen">
      <Slider />
    </div>
  );
}

export default App;

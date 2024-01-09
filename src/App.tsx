import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLessons } from "./api/lessons";
import { addLessons } from "./features/lessons/lessonsSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const result = await getLessons();
      console.log("result", result);
      dispatch(addLessons(result.lessons));
    };
    fetchData();
  }, []);
  return <div className="App"></div>;
}

export default App;

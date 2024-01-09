import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function Carousel() {
  const { lessons } = useSelector((state: RootState) => state.lessons);
  console.log("selectors lessons", lessons);
  return <div>the carousel</div>;
}

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  SingleLessonSlideContainer,
  SingleLessonSlideImage,
  SingleLevel,
} from "./styles";

interface SingleLessonSlideProps {
  src: string;
  name: string;
  level: number;
  percent: number;
}

function SingleLessonSlide({
  src,
  name,
  level,
  percent,
}: SingleLessonSlideProps) {
  return (
    <SingleLessonSlideContainer>
      <div style={{ width: 76, height: 76, margin: "auto" }}>
        <CircularProgressbar maxValue={1} value={percent} />
      </div>
      <SingleLessonSlideImage width={70} height={70} src={src} alt={name} />
      <SingleLevel>level {level}</SingleLevel>
      <span className="mx-auto">{name}</span>
    </SingleLessonSlideContainer>
  );
}

export default SingleLessonSlide;

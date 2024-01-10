import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
    <div className="flex flex-col justify-center relative">
      <div style={{ width: 75, height: 75, margin: "auto" }}>
        <CircularProgressbar maxValue={1} value={percent} />
      </div>
      <img
        className="mx-auto absolute top-[2px] left-0 right-0"
        width={70}
        height={70}
        src={src}
        alt={name}
      />
      <span className="rounded w-fit mx-auto px-2 py-1 mt-2 bg-yellow-400">
        level {level}
      </span>
      <span className="mx-auto">{name}</span>
    </div>
  );
}

export default SingleLessonSlide;

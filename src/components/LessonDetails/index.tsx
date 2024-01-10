import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { DetailsContainer, LessonTitle } from "./styles";

export default function LessonDetails() {
  const { selectedLesson } = useSelector((state: RootState) => state.lessons);
  const [lesson, setLesson] = useState(selectedLesson);
  useEffect(() => {
    setLesson(selectedLesson);
  }, [selectedLesson]);
  console.log("selectedLesson", selectedLesson);
  return (
    <DetailsContainer>
      {lesson && (
        <>
          <img
            className={"mx-auto"}
            width={70}
            height={70}
            src={lesson.unit_icon}
            alt={lesson.name}
          />
          <LessonTitle>{lesson.name}</LessonTitle>
        </>
      )}
    </DetailsContainer>
  );
}

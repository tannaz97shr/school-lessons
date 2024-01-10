interface SingleLessonSlideProps {
  src: string;
  name: string;
  level: number;
}

function SingleLessonSlide({ src, name, level }: SingleLessonSlideProps) {
  return (
    <div className="flex flex-col justify-center">
      <img className={"mx-auto"} width={70} height={70} src={src} alt={name} />
      <span className="rounded w-fit mx-auto px-2 py-1 mt-2 bg-yellow-400">
        level {level}
      </span>
      <span className="mx-auto">{name}</span>
    </div>
  );
}

export default SingleLessonSlide;

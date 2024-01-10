import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLessons } from "../../features/lessons/lessonsSlice";
import { RootState } from "../../store";

export default function Slider() {
  const dispatch = useDispatch();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slideChanged(slider) {
      setSelectedIndex(slider.track.details.rel);
    },
    loop: true,
    rtl: true,
    slides: {
      perView: 3,
      spacing: 10,
      origin: "center",
    },
  });
  const { lessons } = useSelector((state: RootState) => state.lessons);
  useEffect(() => {
    dispatch(selectLessons(lessons[selectedIndex]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessons, selectedIndex]);
  return (
    <div className="mt-auto bg-red-300 h-26 w-full">
      <div ref={sliderRef} className="keen-slider">
        {lessons.map((les, i) => (
          <div key={les.id} className="keen-slider__slide flex items-center">
            <img
              className="mx-auto"
              width={selectedIndex === i ? 100 : 70}
              height={selectedIndex === i ? 100 : 70}
              src={les.unit_icon}
              alt={les.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

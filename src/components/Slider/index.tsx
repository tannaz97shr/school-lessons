import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLessons } from "../../features/lessons/lessonsSlice";
import { RootState } from "../../store";
import SingleLessonSlide from "../singleLessoSlide";
import { SliderContainer, SliderImage, SliderImageContainer } from "./styles";

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
      perView: 4,
      spacing: 10,
      origin: "center",
    },
  });
  const { lessons } = useSelector((state: RootState) => state.lessons);
  useEffect(() => {
    dispatch(selectLessons(lessons[selectedIndex]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessons, selectedIndex]);

  // useEffect(() => {
  //   console.log("slide ref", sliderRef.prototype);
  // }, [sliderRef]);

  return (
    <SliderContainer>
      {/* <span className="circle"></span> */}
      <div ref={sliderRef} className="keen-slider">
        {lessons.map((les, i) => (
          <div key={les.id + i} className="keen-slider__slide">
            {selectedIndex === i ? (
              <SingleLessonSlide
                src={les.unit_icon}
                name={les.name}
                level={les.hamdarsUserUnitLevelIndex}
                percent={
                  les.hamdarsUserCurrentUnitLevelPoint /
                  (les.hamdarsUserMaxUnitLevelPoint -
                    les.hamdarsUserMinUnitLevelPoint)
                }
              />
            ) : (
              <SliderImageContainer>
                <SliderImage
                  className={"mx-auto"}
                  width={70}
                  height={70}
                  src={les.unit_icon}
                  alt={les.name}
                />
              </SliderImageContainer>
            )}
          </div>
        ))}
      </div>
    </SliderContainer>
  );
}

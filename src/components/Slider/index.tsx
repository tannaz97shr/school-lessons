import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function Slider() {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      // add plugins here
    ]
  );
  const { lessons } = useSelector((state: RootState) => state.lessons);
  console.log("selectors lessons", lessons);
  return (
    <div className="bg-red-300 w-full">
      <div ref={sliderRef} className="keen-slider">
        {lessons.map((les) => (
          <div className="keen-slider__slide">
            <img src={les.unit_icon} alt={les.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function Slider() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slideChanged(slider) {
      console.log(slider.track.details.rel);
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
  console.log("selectors lessons", lessons);
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

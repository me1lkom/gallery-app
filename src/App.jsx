import { useState } from "react";
import "./App.css";
import Image from "./components/Image.jsx";
import ControlBtnImage from "./components/ControlBtnImage.jsx";

import WinterLandscape from "../public/photo/WinterLandscape.png"
import SummerLandscape from "../public/photo/SummerLandscape.png"
import SummerSea from "../public/photo/SummerSea.png"
import House from "../public/photo/House.png"

function App() {
  const photos = [
    {
      title: "Зимний пейзаж",
      src: WinterLandscape,
    },
    {
      title: "Летний пейзаж",
      src: SummerLandscape,
    },
    {
      title: "Летнее море",
      src: SummerSea,
    },
    {
      title: "Дом",
      src: House,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextPhoto = () => {
    if (activeIndex == photos.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrevPhoto = () => {
    if (activeIndex == 0) {
      setActiveIndex(photos.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="Image_container">
      <ControlBtnImage
        PrevPhoto={handlePrevPhoto}
        NextPhoto={handleNextPhoto}
      />
      <Image photo={photos[activeIndex]} />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Image from "./components/Image.jsx";
import ControlBtnImage from "./components/ControlBtnImage.jsx";

function App() {
  const photos = [
    {
      title: "Зимний пейзаж",
      src: "../../public/photo/WinterLandscape.png",
    },
    {
      title: "Летний пейзаж",
      src: "../../public/photo/SummerLandscape.png",
    },
    {
      title: "Летнее море",
      src: "../../public/photo/SummerSea.png",
    },
    {
      title: "Дом",
      src: "../../public/photo/House.png",
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

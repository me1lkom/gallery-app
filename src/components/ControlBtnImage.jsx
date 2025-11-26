function ControlBtnImage({ PrevPhoto, NextPhoto }) {
  return (
    <div className="ControlBtnImage">
      <button className="ControlBtnImage button" onClick={PrevPhoto}>
        Предыдущее фото
      </button>
      <button className="ControlBtnImage button" onClick={NextPhoto}>
        Следующее фото
      </button>
    </div>
  );
}

export default ControlBtnImage;

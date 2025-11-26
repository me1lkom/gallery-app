function Image({ photo }) {
  return (
    <div className="Image">
      <div className="Image-photo">
        <img className="Image-photo img" src={photo.src} alt={photo.title}></img>
      </div>
      <div className="Image-title">
        <p>{photo.title}</p>
      </div>
    </div>
  );
}

export default Image;

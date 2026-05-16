const PhotoGallery = ({ photos = [] }) => {
  return (
    <section className="container photo-gallery-container">
      <h2 className="photo-title">Photo Gallery</h2>
      <div className="photo-columns">
        {photos.map((photo, index) => {
          if (!photo || !photo.src) return null;
          return (
            <img
              key={index}
              src={photo.src}
              alt={photo.alt || ''}
            />
          );
        })}
      </div>
    </section>
  );
};

export default PhotoGallery;
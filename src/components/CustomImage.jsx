import { useState, useEffect } from "react";

const CustomImage = (props) => {
  const { src, alt, className = "" } = props;

  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {!imageLoaded && (
        <div
          className={`image-loading ${className}`}
          width="100%"
          height="100%"
        />
      )}

      {imageLoaded && (
        <img
          className={`image-loading ${className}`}
          onLoad={() => setImageLoaded(true)}
          src={src}
          alt={alt}
        />
      )}
    </>
  );
};

export default CustomImage;

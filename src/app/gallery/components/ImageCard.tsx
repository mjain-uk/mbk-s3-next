/* eslint-disable @next/next/no-img-element */

import "./image.card.css";

export interface ImageProp {
  id: number;
  src: string;
  alt: string;
  categoryName: string;
}
interface ImageCardProps {
  images: ImageProp[];
}
const ImageCard = ({ images }: ImageCardProps) => {
  return (
    <div className="gallery-container">
      {images.map(({ src, alt, categoryName, id }, index) => (
        <div
          className="image-wrapper"
          key={`image-${categoryName}-${index + 1}-${id}`}
        >
          <img
            src={src}
            alt={alt}
            width={300}
            height={200} // Adjust based on your aspect ratio needs
            className="image"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCard;

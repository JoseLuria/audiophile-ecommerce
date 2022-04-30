import "./ProductGallery.style.scss";
import { Gallery } from "../../../../typescript/interfaces";
import { useResponsiveImages } from "../../../../hooks/useResponsiveImages";

interface ProductGaleryProps {
  gallery: Gallery;
}

const ProductGalery = ({ gallery }: ProductGaleryProps) => {
  const { first, second, third } = gallery;

  const firstImageGallery = useResponsiveImages(first);
  const secondImageGallery = useResponsiveImages(second);
  const thirdImageGallery = useResponsiveImages(third);

  return (
    <section className="product-gallery">
      <div className="gallery-left">
        <img className="first-image-gallery" src={firstImageGallery} alt="First Image Gallery" />
        <img className="second-image-gallery" src={secondImageGallery} alt="Second Image Gallery" />
      </div>
      <img className="third-image-gallery" src={thirdImageGallery} alt="Third Image Gallery" />
    </section>
  );
};

export default ProductGalery;

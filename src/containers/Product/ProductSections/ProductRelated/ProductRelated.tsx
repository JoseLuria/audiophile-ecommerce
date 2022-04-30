import "./ProductRelated.style.scss";
import { OtherProduct } from "../../../../typescript/interfaces";
import { useResponsiveImages } from "../../../../hooks/useResponsiveImages";
import Button from "../../../../components/Button/Button";

const ProductRelated = ({ name, slug, image }: OtherProduct) => {
  const productRelatedImage = useResponsiveImages(image);

  return (
    <div className="individual-related-product">
      <img src={productRelatedImage} alt={`${name}`} />
      <h3>{name}</h3>
      <Button type="link" href={`/product/${slug}`}>
        See Product
      </Button>
    </div>
  );
};

export default ProductRelated;

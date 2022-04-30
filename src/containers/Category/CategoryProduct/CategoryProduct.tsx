import "./CategoryProduct.style.scss";
import { useResponsiveImages } from "../../../hooks/useResponsiveImages";
import { IndividualProductProps } from "../../../typescript/interfaces";
import Text from "../../../components/Text/Text";
import Button from "../../../components/Button/Button";

interface CategoryProductProps extends IndividualProductProps {
  index: number;
}

const CategoryProduct = ({ product, index }: CategoryProductProps) => {
  const { id, name, new: isNew, slug, description, categoryImage } = product;

  const categoryProductImage = useResponsiveImages(categoryImage);

  return (
    <section
      className={`category-product ${index % 2 !== 0 && "category-product-reverse"}`}
      key={id}
    >
      <img className="category-product-image" src={categoryProductImage} alt={name} />
      <div className="category-product-details">
        {isNew && (
          <Text color="beige" type="new">
            New Product
          </Text>
        )}
        <h2 className="category-product-title">{name}</h2>
        <Text>{description}</Text>
        <Button type="link" href={`/product/${slug}`}>
          See Product
        </Button>
      </div>
    </section>
  );
};

export default CategoryProduct;

import "./ProductFeatures.style.scss";
import Text from "../../../../components/Text/Text";
import { StoreProduct } from "../../../../typescript/interfaces";

type ProductFeaturesProps = Pick<StoreProduct, "features" | "includes">;

const ProductFeatures = ({ features, includes }: ProductFeaturesProps) => {
  return (
    <section className="features-section">
      <div className="features-text-section">
        <h2 className="features-title">Features</h2>
        <Text>{features}</Text>
      </div>
      <div className="includes-section">
        <h2 className="features-title">In the box</h2>
        <ul className="includes-list">
          {includes.map(({ quantity, item }) => (
            <li key={item} className="includes-list-item">
              <Text className="quantity-includes" color="beige">
                {quantity}x
              </Text>
              <Text>{item}</Text>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductFeatures;

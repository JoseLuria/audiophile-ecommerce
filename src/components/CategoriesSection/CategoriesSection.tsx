import "./CategoriesSection.style.scss";
import categoriesData from "../../data/categories.json";
import Button from "../Button/Button";
import { OnlyFunctionProps } from "../../typescript/interfaces";

const CategoriesSection = ({ action }: OnlyFunctionProps) => {
  return (
    <section className="categories-section">
      {categoriesData.map(({ name, image, href }, index) => (
        <div key={index} className="category-item">
          <img className="category-image" src={image} alt={`${name}`} />
          <div className="category-content">
            <p className="category-title">{name}</p>
            <Button
              className="category-button"
              action={action}
              type="link"
              href={`/category/${href}`}
              variant="outline"
            >
              Shop
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CategoriesSection;

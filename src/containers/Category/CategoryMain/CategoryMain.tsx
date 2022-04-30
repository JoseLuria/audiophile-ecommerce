import MainContainer from "../../Shared/MainContainer/MainContainer";
import CategoriesSection from "../../../components/CategoriesSection/CategoriesSection";
import BestAudioSection from "../../../components/BestAudioSection/BestAudioSection";
import { MultipleProductsProps } from "../../../typescript/interfaces";
import CategoryProduct from "../CategoryProduct/CategoryProduct";

const CategoryMain = ({ products }: MultipleProductsProps) => {
  return (
    <MainContainer>
      <>
        {products.map((product, index) => (
          <CategoryProduct key={product.id} index={index} product={product} />
        ))}
      </>
      <CategoriesSection />
      <BestAudioSection />
    </MainContainer>
  );
};

export default CategoryMain;

import MainContainer from "../../Shared/MainContainer";
import CategoriesSection from "../../../components/CategoriesSection/CategoriesSection";
import BestAudioSection from "../../../components/BestAudioSection/BestAudioSection";
import { StoreProduct } from "../../../interfaces/componentsInterfaces";
import CategoryProduct from "../CategoryProduct/CategoryProduct";

interface CategoryProps {
  products: StoreProduct[];
}

const CategoryMain = ({ products }: CategoryProps) => {
  return (
    <MainContainer>
      <>
        {products.map((product) => (
          <CategoryProduct key={product.id} product={product} />
        ))}
      </>
      <CategoriesSection />
      <BestAudioSection />
    </MainContainer>
  );
};

export default CategoryMain;

import "./ProductMain.style.scss";
import MainContainer from "../../Shared/MainContainer/MainContainer";
import { IndividualProductProps } from "../../../typescript/interfaces";
import CategoriesSection from "../../../components/CategoriesSection/CategoriesSection";
import BestAudioSection from "../../../components/BestAudioSection/BestAudioSection";
import GoBackButton from "../../../components/GoBackButton/GoBackButton";
import { ProductInfo, ProductFeatures, ProductGalery, ProductRelated } from "../ProductSections";

const ProductMain = ({ product }: IndividualProductProps) => {
  const {
    id,
    name,
    description,
    new: isNew,
    image,
    price,
    features,
    includes,
    gallery,
    others,
  } = product;

  return (
    <MainContainer variant="product">
      <div>
        <GoBackButton />
        <ProductInfo
          id={id}
          name={name}
          description={description}
          new={isNew}
          price={price}
          image={image}
        />
      </div>
      <ProductFeatures features={features} includes={includes} />
      <ProductGalery gallery={gallery} />
      <section className="related-products">
        <h2 className="related-products-title">You may also like</h2>
        <div className="related-products-container">
          {others.map(({ name, slug, image }) => (
            <ProductRelated key={slug} name={name} slug={slug} image={image} />
          ))}
        </div>
      </section>
      <CategoriesSection />
      <BestAudioSection />
    </MainContainer>
  );
};

export default ProductMain;

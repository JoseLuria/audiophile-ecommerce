import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryHeader, CategoryMain } from "../../containers/Category";
import { useParams } from "react-router-dom";
import productData from "../../data/products.json";
import { StoreProduct } from "../../interfaces/componentsInterfaces";

const Category = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const products = productData.filter(({ category }) => category === id);

  useEffect(() => {
    if (products.length <= 0) {
      navigate("/");
    }
  }, [id]);

  return (
    <>
      <CategoryHeader category={id} />
      <CategoryMain products={products as StoreProduct[]} />
    </>
  );
};

export default Category;

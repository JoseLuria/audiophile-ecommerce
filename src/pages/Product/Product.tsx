import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "../../data/products.json";
import { ProductMain } from "../../containers/Product";
import { StoreProduct } from "../../typescript/interfaces";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const individualProductData = productsData.filter(({ slug }) => slug === id);

  useEffect(() => {
    if (individualProductData.length === 0) {
      navigate("/");
    }
  }, [id]);

  return (
    <>
      <ProductMain products={individualProductData as StoreProduct[]} />
    </>
  );
};

export default Product;

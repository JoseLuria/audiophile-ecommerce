import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StoreProduct } from "../typescript/interfaces";
import { productCategory } from "../typescript/types";
import { CategoryHeader, CategoryMain } from "../containers/Category";
import api from "../api";
import LoadingComponent from "../components/LoadingComponent/LoadingComponent";

const Category = () => {
  const { id } = useParams();
  const [productsByCategory, setProductsByCategory] = useState<StoreProduct[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProductsByCategory([]);
    api.productByCategory(id as productCategory).then((res) => {
      res.length <= 0 ? navigate("/") : setProductsByCategory(res);
    });
  }, [id]);

  if (productsByCategory.length > 0) {
    return (
      <>
        <CategoryHeader category={id} />
        <CategoryMain products={productsByCategory as StoreProduct[]} />
      </>
    );
  } else {
    return <LoadingComponent />;
  }
};

export default Category;

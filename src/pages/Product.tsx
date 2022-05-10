import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductMain } from "../containers/Product";
import { StoreProduct } from "../typescript/interfaces";
import LoadingComponent from "../components/LoadingComponent/LoadingComponent";
import api from "../api";

const Product = () => {
  const [productData, setProductData] = useState<StoreProduct>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setProductData(undefined);
      api.productBySlug(id).then((res) => {
        !res ? navigate("/") : setProductData(res);
      });
    }
  }, [id]);

  if (productData) {
    return <ProductMain product={productData} />;
  } else {
    return <LoadingComponent />;
  }
};

export default Product;

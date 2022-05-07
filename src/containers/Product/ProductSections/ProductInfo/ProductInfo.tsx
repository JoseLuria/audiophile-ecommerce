import { useState } from "react";
import "./ProductInfo.style.scss";
import { StoreProduct } from "../../../../typescript/interfaces";
import { useResponsiveImages } from "../../../../hooks/useResponsiveImages";
import Text from "../../../../components/Text/Text";
import Button from "../../../../components/Button/Button";
import PlusIcon from "../../../../assets/shared/desktop/plus-icon.svg";
import MinusIcon from "../../../../assets/shared/desktop/minus-icon.svg";
import { handleFormatPrice } from "../../../../utils/handleFormatPrice";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/cartSlice/cartSlice";
import { toast } from "react-toastify";
import { handleFormatProductName } from "../../../../utils/handleFormatProductName";

type ProductInfoProps = Pick<
  StoreProduct,
  "id" | "name" | "new" | "description" | "price" | "image"
>;

const ProductInfo = ({ id, name, new: isNew, description, price, image }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  const dispatch = useDispatch();

  const mainProductImage = useResponsiveImages(image);

  const handleQuantityChange = (value: number) => {
    const newValue = Math.max(quantity + value, 1);

    setQuantity(newValue);
  };

  const handleAddToCart = () => {
    const newProduct = {
      id,
      name,
      image,
      price,
      quantity,
    };

    dispatch(addToCart(newProduct));
    setQuantity(1);
    toast.success(`${handleFormatProductName(name)} added to cart`);
  };

  return (
    <section className="product-info-section">
      <img className="product-image" src={mainProductImage} alt={`${name}`} />
      <div className="product-info-text">
        {isNew && (
          <Text type="new" color="beige">
            New Product
          </Text>
        )}
        <h1 className="product-title">{name}</h1>
        <Text>{description}</Text>
        <p className="product-price">{handleFormatPrice(price)}</p>
        <div className="product-buttons">
          <div className="quantity-section">
            <button onClick={() => handleQuantityChange(-1)} className="quantity-button">
              <img src={MinusIcon} alt="Minus Icon" />
            </button>
            {quantity}
            <button onClick={() => handleQuantityChange(1)} className="quantity-button">
              <img src={PlusIcon} alt="Plus Icon" />
            </button>
          </div>
          <Button action={handleAddToCart}>Add to cart</Button>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;

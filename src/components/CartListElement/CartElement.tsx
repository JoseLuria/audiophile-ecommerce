import "./CartElement.style.scss";
import { useDispatch } from "react-redux";
import PlusIcon from "../../assets/shared/desktop/plus-icon.svg";
import MinusIcon from "../../assets/shared/desktop/minus-icon.svg";
import { handleFormatPrice } from "../../utils/handleFormatPrice";
import { CartProduct } from "../../typescript/interfaces";
import { changeQuantity, removeFromCart } from "../../redux/cartSlice/cartSlice";
import { useEffect } from "react";
import { handleFormatProductName } from "../../utils/handleFormatProductName";
import { handleShowMessage } from "../../utils/handleShowMessage";

const CartElement = ({ id, name, image, price, quantity }: CartProduct) => {
  const dispatch = useDispatch();

  const handleChangeQuantity = (id: number, value: number) => {
    dispatch(changeQuantity({ id, value }));
  };

  useEffect(() => {
    if (quantity === 0) {
      dispatch(removeFromCart(id));
      handleShowMessage("Remove", name, dispatch);
    }
  }, [quantity]);

  return (
    <div className="cart-list-item" key={id}>
      <img className="product-list-image" src={image.mobile} alt={`${name}`} />
      <div className="product-list-info">
        <p className="product-list-name">{handleFormatProductName(name)}</p>
        <span className="product-list-price">{handleFormatPrice(price)}</span>
      </div>
      <div className="product-list-actions">
        <button onClick={() => handleChangeQuantity(id, -1)} className="product-list-button">
          <img src={MinusIcon} alt="Minus Icon" />
        </button>
        <span>{quantity}</span>
        <button onClick={() => handleChangeQuantity(id, 1)} className="product-list-button">
          <img src={PlusIcon} alt="Plus Icon" />
        </button>
      </div>
    </div>
  );
};

export default CartElement;

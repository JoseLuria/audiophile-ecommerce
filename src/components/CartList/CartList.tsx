import "./CartList.style.scss";
import { useSelector, useDispatch } from "react-redux";
import { CartProduct } from "../../typescript/interfaces";
import CartElement from "../CartListElement/CartElement";
import { handleFormatPrice } from "../../utils/handleFormatPrice";
import { removeAll } from "../../redux/cartSlice/cartSlice";
import { toast } from "react-toastify";
import Text from "../Text/Text";

const CartList = () => {
  const { cartList, totalPrice } = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveAll = () => {
    if (cartList.length > 0) {
      dispatch(removeAll());
      toast.error("Removed all products");
    }
  };

  return (
    <section className="cart-section">
      <div className="cart-section-header">
        <p className="cart-list-size"> cart {`(${cartList.length})`}</p>

        <button className="remove-all-button" onClick={handleRemoveAll}>
          Remove all
        </button>
      </div>
      <div className="cart-list">
        {cartList.length > 0 &&
          cartList.map(({ id, name, image, price, quantity }: CartProduct) => (
            <CartElement
              key={id}
              id={id}
              name={name}
              image={image}
              price={price}
              quantity={quantity}
              type="Cart"
            />
          ))}
        {cartList.length === 0 && <Text className="empty-text">Yor cart is empty</Text>}
      </div>
      <div className="cart-section-footer">
        <Text className="total-text">Total</Text>

        <p className="total-price">{handleFormatPrice(totalPrice)}</p>
      </div>
    </section>
  );
};

export default CartList;

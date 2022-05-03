import "./CheckoutSummary.style.scss";
import { useSelector } from "react-redux";
import Text from "../../../../components/Text/Text";
import CartElement from "../../../../components/CartListElement/CartElement";
import { CartProduct } from "../../../../typescript/interfaces";
import { handleFormatPrice } from "../../../../utils/handleFormatPrice";
import Button from "../../../../components/Button/Button";

const CheckoutSummary = () => {
  const { cartList, totalPrice } = useSelector((state: any) => state.cart);

  const vatPrice = cartList.length > 0 ? totalPrice * 0.2 : 0;
  const shippingPrice = cartList.length > 0 ? 50 : 0;

  return (
    <section className="checkout-product">
      <h2 className="checkout-product-title">Summary</h2>
      <div className="checkout-product-container">
        {cartList.length > 0 &&
          cartList.map(({ id, name, image, price, quantity }: CartProduct) => (
            <CartElement
              key={id}
              id={id}
              name={name}
              image={image}
              price={price}
              quantity={quantity}
              type="Checkout"
            />
          ))}
      </div>
      <div className="checkout-product-prices">
        <Text className="checkout-product-prices-item">
          Total
          <span className="checkout-product-prices-item-span">{handleFormatPrice(totalPrice)}</span>
        </Text>
        <Text className="checkout-product-prices-item">
          Shipping
          <span className="checkout-product-prices-item-span">
            {handleFormatPrice(shippingPrice)}
          </span>
        </Text>
        <Text className="checkout-product-prices-item">
          Vat (Included)
          <span className="checkout-product-prices-item-span">{handleFormatPrice(vatPrice)}</span>
        </Text>
        <Text className="checkout-product-prices-item">
          Grand Total
          <span className="checkout-product-prices-item-span">
            {handleFormatPrice(totalPrice + shippingPrice)}
          </span>
        </Text>
      </div>
      <Button type="submit" className="checkout-button">
        Continue and Pay
      </Button>
    </section>
  );
};

export default CheckoutSummary;

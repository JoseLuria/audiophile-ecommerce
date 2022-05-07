import "./CheckoutMain.styles.scss";
import MainContainer from "../../Shared/MainContainer/MainContainer";
import GoBackButton from "../../../components/GoBackButton/GoBackButton";
import { CheckoutForm, CheckoutSummary } from "../CheckoutSections";
import { useForm } from "react-hook-form";
import { FormResult } from "../../../typescript/interfaces";
import BlackContainer from "../../Shared/BlackContainer/BlackContainer";
import { useState } from "react";
import { handleStopPropagation } from "../../../utils/handleStopPropagation";
import { useSelector, useDispatch } from "react-redux";
import { CheckoutOrder } from "../../../typescript/interfaces";
import Text from "../../../components/Text/Text";
import Button from "../../../components/Button/Button";
import { handleFormatPrice } from "../../../utils/handleFormatPrice";
import { handleFormatProductName } from "../../../utils/handleFormatProductName";
import CheckIcon from "../../../assets/shared/desktop/check-icon.svg";
import { removeAll } from "../../../redux/cartSlice/cartSlice";

const CheckoutMain = () => {
  const { handleSubmit, register, formState, reset } = useForm<FormResult>();
  const [showOrder, setShowOrder] = useState<Boolean>(false);
  const [orderData, setOrderData] = useState<CheckoutOrder>();

  const { cartList, totalPrice } = useSelector((state: any) => state.cart);

  const shippingPrice = cartList.length > 0 ? 50 : 0;
  const grandTotalPrice = totalPrice + shippingPrice;

  const dispatch = useDispatch();

  const handleShowOrder = () => {
    setShowOrder(!showOrder);
    document.body.classList.toggle("no-scroll");
  };

  const checkoutSubmit = handleSubmit((data: FormResult) => {
    const finalOrder = {
      ...data,
      cartList,
      grandTotalPrice,
    };
    setOrderData(finalOrder);
    handleShowOrder();
    dispatch(removeAll());
    reset();
  });

  return (
    <>
      {showOrder && orderData && (
        <BlackContainer className="order-wrapper" action={handleShowOrder}>
          <div onClick={handleStopPropagation} className="order-container">
            <img className="order-icon" src={CheckIcon} alt="Check Icon" />
            <h2 className="order-title">Thank you for your order</h2>
            <Text className="order-text">You will receive an email confirmation shortly.</Text>
            <div className="order-products">
              <section className="order-products-item">
                <div className="order-products-item-data">
                  <img
                    className="order-item-image"
                    src={orderData.cartList[0].image.desktop}
                    alt={orderData.cartList[0].name}
                  />
                  <p className="order-item-info">
                    {handleFormatProductName(orderData.cartList[0].name)}
                    <br />
                    <span>{handleFormatPrice(orderData.cartList[0].price)}</span>
                  </p>
                  <p className="order-item-quantity">x{orderData.cartList[0].quantity}</p>
                </div>
                {orderData.cartList.length > 1 && (
                  <span className="order-item-length">
                    and {orderData.cartList.length - 1} other item(s)
                  </span>
                )}
              </section>
              <section className="order-product-price">
                <p className="order-grand-total">
                  Grand Total
                  <span>{handleFormatPrice(orderData.grandTotalPrice)}</span>
                </p>
              </section>
            </div>
            <Button type="link" href="/" className="order-button" action={handleShowOrder}>
              Back to home
            </Button>
          </div>
        </BlackContainer>
      )}
      <MainContainer className="checkout-main-container" variant="checkout">
        <GoBackButton />
        <form onSubmit={checkoutSubmit} className="checkout-wrapper">
          <CheckoutForm register={register} formState={formState} />
          <CheckoutSummary
            cartList={cartList}
            totalPrice={totalPrice}
            shippingPrice={shippingPrice}
            grandTotalPrice={grandTotalPrice}
          />
        </form>
      </MainContainer>
    </>
  );
};

export default CheckoutMain;

import "./CheckoutMain.styles.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { removeAll } from "../../../redux/cartSlice";
import { FormResult } from "../../../typescript/interfaces";
import { CheckoutResponse } from "../../../typescript/interfaces";
import { useSelector, useDispatch } from "react-redux";
import { CheckoutForm, CheckoutSummary } from "../CheckoutSections";
import { handleFormatPrice, handleFormatProductName } from "../../../utils";
import BlackContainer from "../../Shared/BlackContainer/BlackContainer";
import GoBackButton from "../../../components/GoBackButton/GoBackButton";
import MainContainer from "../../Shared/MainContainer/MainContainer";
import Text from "../../../components/Text/Text";
import Button from "../../../components/Button/Button";
import CheckIcon from "../../../assets/shared/desktop/check-icon.svg";
import api from "../../../api";
import LoadingComponent from "../../../components/LoadingComponent/LoadingComponent";

const CheckoutMain = () => {
  const { handleSubmit, register, formState, reset } = useForm<FormResult>();
  const [showOrder, setShowOrder] = useState<Boolean>(false);
  const [showLoader, setShowLoader] = useState<Boolean>(false);
  const [orderData, setOrderData] = useState<CheckoutResponse>();

  const { cartList, totalPrice } = useSelector((state: any) => state.cart);

  const shippingPrice = cartList.length > 0 ? 50 : 0;
  const grandTotalPrice = totalPrice + shippingPrice;

  const dispatch = useDispatch();

  const handleShowOrder = () => {
    setShowOrder(!showOrder);
    document.body.classList.toggle("no-scroll");
  };

  const checkoutSubmit = handleSubmit((data: FormResult) => {
    setShowLoader(true);
    api.checkoutCart({ ...data, cartList, grandTotalPrice }).then((res) => {
      setShowLoader(false);
      setOrderData(res);
    });
    handleShowOrder();
    dispatch(removeAll());
    reset();
  });

  return (
    <>
      {showOrder && orderData && (
        <BlackContainer className="order-wrapper" action={handleShowOrder}>
          <div onClick={(e) => e.stopPropagation()} className="order-container">
            <img className="order-icon" src={CheckIcon} alt="Check Icon" />
            <h2 className="order-title">Thank you for your order</h2>
            <Text className="order-text">You will receive an email confirmation shortly.</Text>
            <div className="order-products">
              <section className="order-products-item">
                <div className="order-products-item-data">
                  <img
                    className="order-item-image"
                    src={orderData.firstElement.image.desktop}
                    alt={orderData.firstElement.name}
                  />
                  <p className="order-item-info">
                    {handleFormatProductName(orderData.firstElement.name)}
                    <br />
                    <span>{handleFormatPrice(orderData.firstElement.price)}</span>
                  </p>
                  <p className="order-item-quantity">x{orderData.firstElement.quantity}</p>
                </div>
                {orderData.othersLength && (
                  <span className="order-item-length">
                    and {orderData.othersLength} other item(s)
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
      {showLoader && <LoadingComponent />}
    </>
  );
};

export default CheckoutMain;

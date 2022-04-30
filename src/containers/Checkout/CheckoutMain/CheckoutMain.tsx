import "./CheckoutMain.styles.scss";
import MainContainer from "../../Shared/MainContainer/MainContainer";
import GoBackButton from "../../../components/GoBackButton/GoBackButton";

const CheckoutMain = () => {
  return (
    <MainContainer className="checkout-main-container" variant="checkout">
      <GoBackButton />
    </MainContainer>
  );
};

export default CheckoutMain;

import "./CheckoutMain.styles.scss";
import MainContainer from "../../Shared/MainContainer/MainContainer";
import GoBackButton from "../../../components/GoBackButton/GoBackButton";
import { CheckoutForm, CheckoutSummary } from "../CheckoutSections";
import { useForm } from "react-hook-form";
import { FormResult } from "../../../typescript/interfaces";

const CheckoutMain = () => {
  const { handleSubmit, register, formState } = useForm<FormResult>();

  const checkoutSubmit = handleSubmit((data: FormResult) => {
    console.log(data);
  });

  return (
    <MainContainer className="checkout-main-container" variant="checkout">
      <GoBackButton />
      <form onSubmit={checkoutSubmit} className="checkout-wrapper">
        <CheckoutForm register={register} formState={formState} />
        <CheckoutSummary />
      </form>
    </MainContainer>
  );
};

export default CheckoutMain;

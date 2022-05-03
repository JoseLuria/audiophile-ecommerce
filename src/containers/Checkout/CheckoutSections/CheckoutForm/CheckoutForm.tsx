import "./CheckoutForm.style.scss";
import InputContainer from "../../../../components/InputContainer/InputContainer";
import { FormState, UseFormRegister } from "react-hook-form";
import { FormResult } from "../../../../typescript/interfaces";
import {
  InputValues,
  InputZipValues,
  InputEmailValues,
  InputPhoneValue,
} from "./CheckoutForm.validate";

interface CheckoutFormProps {
  register: UseFormRegister<FormResult>;
  formState: FormState<FormResult>;
}

const CheckoutForm = ({ register, formState }: CheckoutFormProps) => {
  const { errors } = formState;

  return (
    <section className="checkout-form-section">
      <h1 className="checkout-form-section-title">Checkout</h1>
      <div className="checkout-form-inputs">
        <section className="form-details">
          <h2 className="form-details-title">Billing Details</h2>
          <div className="form-details-inputs">
            <InputContainer label="Name" error={errors.name} htmlFor="name">
              <input
                {...register("name", InputValues)}
                className="form-input-element"
                id="name"
                placeholder="Alexei Ward"
              />
            </InputContainer>
            <InputContainer label="Email Address" error={errors.email} htmlFor="email">
              <input
                {...register("email", InputEmailValues)}
                className="form-input-element"
                id="email"
                placeholder="alexei@mail.com"
              />
            </InputContainer>
          </div>
          <div className="form-details-inputs">
            <InputContainer label="Phone Number" error={errors.phone} htmlFor="phone">
              <input
                {...register("phone", InputPhoneValue)}
                className="form-input-element"
                id="phone"
                placeholder="+1 202-555-0136"
              />
            </InputContainer>
          </div>
        </section>
        <section className="form-details">
          <h2 className="form-details-title">Shipping Info</h2>
          <div>
            <InputContainer label="Address" error={errors.address} htmlFor="address">
              <input
                {...register("address", InputValues)}
                className="form-input-element"
                id="address"
                placeholder="1137 Williams Avenue"
              />
            </InputContainer>
          </div>
          <div className="form-details-inputs">
            <InputContainer label="ZIP Code" error={errors.zip} htmlFor="zip">
              <input
                {...register("zip", InputZipValues)}
                className="form-input-element"
                id="zip"
                placeholder="10001"
              />
            </InputContainer>
            <InputContainer label="City" error={errors.city} htmlFor="city">
              <input
                {...register("city", InputValues)}
                className="form-input-element"
                id="city"
                placeholder="New York"
              />
            </InputContainer>
          </div>
          <div className="form-details-inputs">
            <InputContainer label="Country" error={errors.country} htmlFor="country">
              <input
                {...register("country", InputValues)}
                className="form-input-element"
                id="country"
                placeholder="United States"
              />
            </InputContainer>
          </div>
        </section>
        <section className="form-details">
          <h2 className="form-details-title">Payment Details</h2>
          <div className="form-details-inputs">
            <p></p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CheckoutForm;

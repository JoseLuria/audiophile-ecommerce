import "./CheckoutForm.style.scss";
import InputContainer from "../../../../components/InputContainer/InputContainer";
import { FormState, UseFormRegister } from "react-hook-form";
import { FormResult } from "../../../../typescript/interfaces";
import {
  InputValues,
  InputZipValues,
  InputEmailValues,
  InputPhoneValue,
  InputEmoneyNumber,
  InputEmoneyPin,
} from "./CheckoutForm.validate";
import { useState } from "react";
import CashIcon from "../../../../assets/shared/desktop/cash-icon.svg";
import Text from "../../../../components/Text/Text";

interface CheckoutFormProps {
  register: UseFormRegister<FormResult>;
  formState: FormState<FormResult>;
}

const CheckoutForm = ({ register, formState }: CheckoutFormProps) => {
  const [showCashSection, setShowCashSection] = useState(true);

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
            <p className="form-input-label">Payment Method</p>
            <div className="form-radio-inputs">
              <label tabIndex={0} className="radio-input-container" htmlFor="pay">
                <input
                  onClick={() => setShowCashSection(false)}
                  {...register("pay")}
                  type="radio"
                  name="pay"
                  value={"e-money"}
                  id="pay"
                />
                e-Money
              </label>
              <label tabIndex={0} className="radio-input-container" htmlFor="pay">
                <input
                  onClick={() => setShowCashSection(true)}
                  {...register("pay")}
                  type="radio"
                  name="pay"
                  value={"cash"}
                  id="pay"
                  defaultChecked
                />
                Cash on Delivery
              </label>
            </div>
          </div>
          {showCashSection ? (
            <div className="cash-section">
              <img src={CashIcon} alt="cash-icon" />
              <Text>
                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier
                arrives at your residence. Just make sure your address is correct so that your order
                will not be cancelled.
              </Text>
            </div>
          ) : (
            <div className="form-details-inputs">
              <InputContainer
                label="e-Money Number"
                error={errors.eMoneyNumber}
                htmlFor="eMoneyNumber"
              >
                <input
                  {...register("eMoneyNumber", InputEmoneyNumber)}
                  className="form-input-element"
                  id="eMoneyNumber"
                  placeholder="238521993"
                />
              </InputContainer>
              <InputContainer label="e-Money PIN" error={errors.eMoneyPin} htmlFor="eMoneyPin">
                <input
                  {...register("eMoneyPin", InputEmoneyPin)}
                  className="form-input-element"
                  id="eMoneyPin"
                  placeholder="6891"
                />
              </InputContainer>
            </div>
          )}
        </section>
      </div>
    </section>
  );
};

export default CheckoutForm;

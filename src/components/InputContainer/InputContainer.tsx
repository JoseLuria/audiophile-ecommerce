import "./InputContainer.style.scss";
import { ComponentProps } from "../../typescript/interfaces";
import { FieldError } from "react-hook-form";

interface InputProps extends ComponentProps {
  label: string;
  htmlFor: string;
  error: FieldError | undefined;
}

const InputContainer = ({ children, label, htmlFor, error }: InputProps) => {
  return (
    <div className={`form-input ${error && "form-error"}`}>
      <label className="form-input-label" htmlFor={htmlFor}>
        {label}
        <span>{error && "Wrong format"}</span>
      </label>
      {children}
    </div>
  );
};

export default InputContainer;

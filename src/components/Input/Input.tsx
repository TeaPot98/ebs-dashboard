import "./Input.scss";

interface InputFieldProps {
  type?: "text" | "email" | "password";
}

export const Input = ({
  className,
  type = "text",
  ...props
}: InputFieldProps & Omit<JSX.IntrinsicElements["input"], "type">) => {
  return (
    <input type={type} className={`input-field ${className}`} {...props} />
  );
};

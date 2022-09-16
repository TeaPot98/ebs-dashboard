import "./Input.scss";

interface InputFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  type?: "text" | "email" | "password";
}

export const Input = ({
  className,
  type = "text",
  ...props
}: InputFieldProps) => {
  return (
    <input type={type} className={`input-field ${className}`} {...props} />
  );
};

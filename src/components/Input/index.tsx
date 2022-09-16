import "./Input.scss";

interface InputFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  type?: "text" | "email" | "password";
}

const Input = ({ className, type = "text", ...props }: InputFieldProps) => {
  return (
    <input type={type} className={`input-field ${className}`} {...props} />
  );
};

export { Input };

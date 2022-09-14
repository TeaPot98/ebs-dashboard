import "./InputField.scss";

interface InputFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  type?: "text" | "email" | "password";
}

const InputField = ({ type = "text", ...props }: InputFieldProps) => {
  return <input className="input-field" {...props} />;
};

export { InputField };

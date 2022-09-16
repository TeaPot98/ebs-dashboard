import "./DateInput.scss";

export const DateInput = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={`date-input ${className}`} type="date" {...props} />;
};

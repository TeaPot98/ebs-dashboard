import "./DateInput.scss";

const DateInput = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={`date-input ${className}`} type="date" {...props} />;
};

export default DateInput;

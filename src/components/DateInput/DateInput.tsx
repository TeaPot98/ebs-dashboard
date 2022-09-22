import "./DateInput.scss";

export const DateInput = ({
  className,
  ...props
}: JSX.IntrinsicElements["input"]) => {
  return <input className={`date-input ${className}`} type="date" {...props} />;
};

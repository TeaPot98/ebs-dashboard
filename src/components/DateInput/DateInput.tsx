import classNames from "classnames";

import "./DateInput.scss";

export const DateInput = ({
  className,
  ...props
}: JSX.IntrinsicElements["input"]) => {
  return (
    <input
      className={`date-input ${classNames(className)}`}
      type="date"
      {...props}
    />
  );
};

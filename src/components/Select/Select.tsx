import classNames from "classnames";

import "./Select.scss";
import { Option } from "./Option";

interface SelectProps {
  id: string;
  labelText: string;
}

export const Select = ({
  id,
  labelText,
  children,
  className,
  ...props
}: SelectProps & JSX.IntrinsicElements["select"]) => {
  return (
    <div className="select">
      <label htmlFor={id}>{labelText}</label>
      <select id={id} className={classNames(className)} {...props}>
        {children}
      </select>
    </div>
  );
};

Select.Option = Option;

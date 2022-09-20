import "./Select.scss";
import { Option } from "./Option";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  labelText: string;
}

export const Select = ({
  id,
  labelText,
  children,
  className,
  ...props
}: React.PropsWithChildren<SelectProps>) => {
  return (
    <div className="select">
      <label htmlFor={id}>{labelText}</label>
      <select id={id} className={className} {...props}>
        {children}
      </select>
    </div>
  );
};

Select.Option = Option;

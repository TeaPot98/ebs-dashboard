import "./Select.scss";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  labelText: string;
}

const Select = ({
  id,
  labelText,
  children,
  ...props
}: React.PropsWithChildren<SelectProps>) => {
  return (
    <div className="select">
      <label htmlFor={id}>{labelText}</label>
      <select id={id} {...props}>
        {children}
      </select>
    </div>
  );
};

export { Select };

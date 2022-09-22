import classNames from "classnames";

export const Option = ({
  className,
  children,
  ...props
}: JSX.IntrinsicElements["option"]) => {
  return (
    <option className={`${classNames(className)}`} {...props}>
      {children}
    </option>
  );
};

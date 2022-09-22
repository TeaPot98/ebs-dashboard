export const Option = ({
  className,
  children,
  ...props
}: JSX.IntrinsicElements["option"]) => {
  return (
    <option className={`${className}`} {...props}>
      {children}
    </option>
  );
};

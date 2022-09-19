export const Option = ({
  className,
  children,
  ...props
}: React.OptionHTMLAttributes<HTMLOptionElement>) => {
  return (
    <option className={`${className}`} {...props}>
      {children}
    </option>
  );
};

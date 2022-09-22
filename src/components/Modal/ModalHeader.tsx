export const ModalHeader = ({
  children,
  className,
  ...props
}: JSX.IntrinsicElements["div"]) => {
  return (
    <div className={`modal__header ${className}`} {...props}>
      {children}
    </div>
  );
};

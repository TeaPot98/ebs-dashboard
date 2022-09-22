export const ModalFooter = ({
  children,
  className,
  ...props
}: JSX.IntrinsicElements["div"]) => {
  return (
    <div className={`modal__footer ${className}`} {...props}>
      {children}
    </div>
  );
};

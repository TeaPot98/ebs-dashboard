export const ModalContent = ({
  children,
  className,
  ...props
}: JSX.IntrinsicElements["div"]) => {
  return (
    <div className={`modal__content ${className}`} {...props}>
      {children}
    </div>
  );
};

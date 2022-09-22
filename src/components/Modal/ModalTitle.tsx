export const ModalTitle = ({
  className,
  children,
  ...props
}: JSX.IntrinsicElements["h4"]) => {
  return <h4 className={`modal__title ${className}`}>{children}</h4>;
};

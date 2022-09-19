export const ModalTitle = ({
  className,
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>>) => {
  return <h4 className={`modal__title ${className}`}>{children}</h4>;
};

export const ModalContent = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div className={`modal__content ${className}`} {...props}>
      {children}
    </div>
  );
};

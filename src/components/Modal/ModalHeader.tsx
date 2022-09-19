export const ModalHeader = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div className={`modal__header ${className}`} {...props}>
      {children}
    </div>
  );
};

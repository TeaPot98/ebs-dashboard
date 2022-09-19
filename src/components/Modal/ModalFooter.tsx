export const ModalFooter = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div className={`modal__footer ${className}`} {...props}>
      {children}
    </div>
  );
};

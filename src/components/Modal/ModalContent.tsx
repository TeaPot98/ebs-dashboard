import classNames from "classnames";

export const ModalContent = ({
  children,
  className,
  ...props
}: JSX.IntrinsicElements["div"]) => {
  return (
    <div className={`modal__content ${classNames(className)}`} {...props}>
      {children}
    </div>
  );
};

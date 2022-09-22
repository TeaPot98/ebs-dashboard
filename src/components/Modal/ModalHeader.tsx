import classNames from "classnames";

export const ModalHeader = ({
  children,
  className,
  ...props
}: JSX.IntrinsicElements["div"]) => {
  return (
    <div className={`modal__header ${classNames(className)}`} {...props}>
      {children}
    </div>
  );
};

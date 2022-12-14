import classNames from "classnames";

export const ModalFooter = ({
  children,
  className,
  ...props
}: JSX.IntrinsicElements["div"]) => {
  return (
    <div className={`modal__footer ${classNames(className)}`} {...props}>
      {children}
    </div>
  );
};

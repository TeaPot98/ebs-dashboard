import classNames from "classnames";

export const ModalTitle = ({
  className,
  children,
  ...props
}: JSX.IntrinsicElements["h4"]) => {
  return (
    <h4 className={`modal__title ${classNames(className)}`}>{children}</h4>
  );
};

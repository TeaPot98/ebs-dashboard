import classNames from "classnames";

export const ContainerHeader = ({
  children,
  ...props
}: JSX.IntrinsicElements["div"]) => {
  return (
    <div
      className={`container__header ${classNames(props.className)}`}
      {...props}
    >
      {children}
    </div>
  );
};

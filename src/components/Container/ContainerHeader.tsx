export const ContainerHeader = ({
  children,
  ...props
}: JSX.IntrinsicElements["div"]) => {
  return (
    <div className="container__header" {...props}>
      {children}
    </div>
  );
};

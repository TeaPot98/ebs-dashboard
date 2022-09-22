export const ContainerHeader = ({
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div className="container__header" {...props}>
      {children}
    </div>
  );
};

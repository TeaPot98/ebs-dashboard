import "./Table.scss";

export const Table = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.TableHTMLAttributes<HTMLTableElement>>) => {
  return (
    <table className={`table ${className}`} {...props}>
      {children}
    </table>
  );
};

import "./Table.scss";

export const Table = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.TableHTMLAttributes<HTMLTableElement>>) => {
  return (
    <div className="table-container">
      <table className={`table ${className}`} {...props}>
        {children}
      </table>
    </div>
  );
};

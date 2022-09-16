import "./Table.scss";

const Table = ({
  children,
  ...props
}: React.PropsWithChildren<React.TableHTMLAttributes<HTMLTableElement>>) => {
  return (
    <table className="table" {...props}>
      {children}
    </table>
  );
};

export { Table };

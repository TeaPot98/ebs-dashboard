import "./Table.scss";

export const Table = ({
  children,
  className,
  ...props
}: JSX.IntrinsicElements["table"]) => {
  return (
    <div className="table-container">
      <table className={`table ${className}`} {...props}>
        {children}
      </table>
    </div>
  );
};

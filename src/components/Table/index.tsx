import React from "react";
import "./Table.scss";

interface TableProps {
  columns: number;
}

const Table = ({
  children,
  columns = 2,
}: React.PropsWithChildren<TableProps>) => {
  return <div className={`table col-${columns}`}>{children}</div>;
};

export default Table;

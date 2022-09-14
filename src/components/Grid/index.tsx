import React from "react";
import "./Grid.scss";

interface GridProps {
  columns: number;
}

const Grid = ({
  children,
  columns = 2,
}: React.PropsWithChildren<GridProps>) => {
  return <div className={`grid col-${columns}`}>{children}</div>;
};

export { Grid };

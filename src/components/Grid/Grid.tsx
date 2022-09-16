import React from "react";
import "./Grid.scss";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns: number;
}

export const Grid = ({
  className,
  children,
  columns = 2,
  ...props
}: React.PropsWithChildren<GridProps>) => {
  return (
    <div className={`grid col-${columns} ${className}`} {...props}>
      {children}
    </div>
  );
};

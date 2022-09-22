import classNames from "classnames";

import "./Table.scss";

export const Table = ({
  children,
  className,
  ...props
}: JSX.IntrinsicElements["table"]) => {
  return (
    <div className="table-container">
      <table className={`table ${classNames(className)}`} {...props}>
        {children}
      </table>
    </div>
  );
};

import "./Grid.scss";

interface GridProps {
  columns: number;
}

export const Grid = ({
  className,
  children,
  columns = 2,
  ...props
}: GridProps & JSX.IntrinsicElements["div"]) => {
  return (
    <div
      className={`grid ${className}`}
      style={{ gridTemplateColumns: "1fr ".repeat(columns) }}
      {...props}
    >
      {children}
    </div>
  );
};

import classNames from "classnames";

interface CheckboxProps {
  labelText: string;
}

export const Checkbox = ({
  labelText,
  id,
  ...props
}: CheckboxProps & JSX.IntrinsicElements["input"]) => {
  return (
    <div>
      <input
        id={id}
        {...props}
        type="checkbox"
        className={classNames(props.className)}
      />
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
};

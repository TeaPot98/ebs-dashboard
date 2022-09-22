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
      <input id={id} {...props} type="checkbox" />
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
};

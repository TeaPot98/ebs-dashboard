interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

export const Checkbox = ({ labelText, id, ...props }: CheckboxProps) => {
  return (
    <div>
      <input id={id} {...props} type="checkbox" />
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
};

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

const Checkbox = ({ labelText, id, ...props }: CheckboxProps) => {
  return (
    <div>
      <input {...props} type="checkbox" />
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
};

export { Checkbox };

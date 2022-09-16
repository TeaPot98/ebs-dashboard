import "./TextArea.scss";

export const TextArea = ({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <textarea className={`text-area ${className}`} {...props} />;
};

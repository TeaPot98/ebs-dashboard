import "./TextArea.scss";

const TextArea = ({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <textarea className={`text-area ${className}`} {...props} />;
};

export default TextArea;

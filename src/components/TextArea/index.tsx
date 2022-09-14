import "./TextArea.scss";

const TextArea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <textarea className="text-area" {...props} />;
};

export default TextArea;

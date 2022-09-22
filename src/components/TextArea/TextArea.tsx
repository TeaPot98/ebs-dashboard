import classNames from "classnames";

import "./TextArea.scss";

export const TextArea = ({
  className,
  ...props
}: JSX.IntrinsicElements["textarea"]) => {
  return (
    <textarea className={`text-area ${classNames(className)}`} {...props} />
  );
};

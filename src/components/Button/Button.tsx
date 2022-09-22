import React from "react";

import "./Button.scss";

interface ButtonProps {
  type?: "primary" | "danger" | "icon";
}

export const Button = ({
  type = "primary",
  children,
  className,
  ...props
}: ButtonProps & Omit<JSX.IntrinsicElements["button"], "type">) => {
  return (
    <button {...props} className={`btn btn--${type} ${className}`}>
      {children}
    </button>
  );
};

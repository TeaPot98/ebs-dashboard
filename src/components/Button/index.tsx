import React from "react";
import "./Button.scss";

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type?: "primary" | "danger";
}

const Button = ({
  type = "primary",
  children,
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button {...props} className={`btn btn--${type}`}>
      {children}
    </button>
  );
};

export { Button };

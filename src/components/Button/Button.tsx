import classNames from "classnames";
import { Button as EbsButton } from "ebs-design";
import { ButtonProps as EbsButtonProps } from "ebs-design/dist/components/atoms/Button/Button";

import "./Button.scss";

export interface ButtonProps extends Omit<EbsButtonProps, "onClick"> {
  color?: "primary" | "danger" | "icon";
  onClick?: any; // !!! To change later
}

export const Button = ({
  color = "primary",
  children,
  className,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <EbsButton
      {...props}
      onClick={onClick}
      buttonClass={`btn btn--${color} ${classNames(className)}`}
    >
      {children}
    </EbsButton>
  );
};

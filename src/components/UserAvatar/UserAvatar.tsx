import classNames from "classnames";

import "./UserAvatar.scss";

interface UserAvatarProps {
  name: string;
  surname: string;
}

export const UserAvatar = ({
  name,
  surname,
  className,
  ...props
}: UserAvatarProps & JSX.IntrinsicElements["div"]) => {
  return (
    <div className={`avatar ${classNames(className)}`} {...props}>
      {name[0]}
      {surname[0]}
    </div>
  );
};

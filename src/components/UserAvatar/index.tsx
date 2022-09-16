import userEvent from "@testing-library/user-event";
import "./UserAvatar.scss";

interface UserAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  surname: string;
}

const UserAvatar = ({
  name,
  surname,
  className,
  ...props
}: UserAvatarProps) => {
  return (
    <div className={`avatar ${className}`} {...props}>
      {name[0]}
      {surname[0]}
    </div>
  );
};

export { UserAvatar };

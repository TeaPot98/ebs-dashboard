import userEvent from "@testing-library/user-event";
import "./UserAvatar.scss";

interface UserAvatarProps {
  name: string;
  surname: string;
}

const UserAvatar = ({ name, surname }: UserAvatarProps) => {
  return (
    <div className="avatar">
      {name[0]}
      {surname[0]}
    </div>
  );
};

export { UserAvatar };

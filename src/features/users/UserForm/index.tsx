import { Select, InputField } from "components";

const UserForm = () => {
  return (
    <form className="auth-form">
      <InputField placeholder="Name" />
      <InputField placeholder="Surname" />
      <InputField type="email" placeholder="Email address" />
      <Select labelText="Gender" id="gender">
        <option value="">None</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>
      <Select labelText="Role" id="role">
        <option value="moderator">Moderator</option>
        <option value="administrator">Administrator</option>
      </Select>
    </form>
  );
};

export default UserForm;

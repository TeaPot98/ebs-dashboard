import { useState } from "react";

import { Select, Input } from "components";
import { User } from "types";

interface UserFormProps {
  user?: User;
}

const UserForm = ({ user }: UserFormProps) => {
  const [name, setName] = useState(user?.name);
  const [surname, setSurname] = useState(user?.surname);
  const [email, setEmail] = useState(user?.email);
  const [gender, setGender] = useState(user?.gender);
  const [role, setRole] = useState(user?.role);

  const handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handleSurnameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSurname(event.currentTarget.value);
  };

  const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handleGenderChange = (event: React.FormEvent<HTMLSelectElement>) => {
    // setGender(event.currentTarget.value);
  };

  const handleRoleChange = (event: React.FormEvent<HTMLSelectElement>) => {};

  return (
    <form className="form">
      <Input
        id="name"
        name="name"
        value={name}
        onChange={handleNameChange}
        placeholder="Name"
      />
      <Input placeholder="Surname" />
      <Input type="email" placeholder="Email address" />
      <Select
        value={gender}
        onChange={handleGenderChange}
        labelText="Gender"
        id="gender"
        name={gender}
      >
        <option value="">None</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>
      <Select
        value={role}
        onChange={handleRoleChange}
        labelText="Role"
        name="role"
        id="role"
      >
        <option value="moderator">Moderator</option>
        <option value="administrator">Administrator</option>
      </Select>
    </form>
  );
};

export default UserForm;

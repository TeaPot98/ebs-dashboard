import { useState } from "react";

import { Select, Input, Button } from "components";
import { User } from "types";
import useSetState from "hooks/useSetState";
import { Roles } from "utils";
import { editUser, registerUser } from "api/users";

interface UserFormProps {
  user?: User;
  onSubmit: () => void;
}

export const UserForm = ({ user, onSubmit = () => {} }: UserFormProps) => {
  const [userForm, setUserForm] = useSetState(
    user
      ? user
      : {
          name: "",
          surname: "",
          email: "",
          gender: "none",
          role: "moderator",
        }
  );

  const submitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (user) {
      editUser({ ...userForm, id: user.id });
    } else {
      registerUser(userForm);
    }
    onSubmit();
  };

  return (
    <form className="form" onSubmit={submitForm}>
      <Input
        id="name"
        name="name"
        value={userForm.name}
        onChange={(event) => setUserForm({ name: event.target.value })}
        placeholder="Name"
        required
      />
      <Input
        id="surname"
        name="surname"
        value={userForm.surname}
        onChange={(event) => setUserForm({ surname: event.target.value })}
        placeholder="Surname"
        required
      />
      <Input
        id="email"
        name="email"
        value={userForm.email}
        onChange={(event) => setUserForm({ email: event.target.value })}
        type="email"
        placeholder="Email address"
        required
      />
      <Select
        id="gender"
        name="gender"
        value={userForm.gender}
        onChange={(event) => setUserForm({ gender: event.target.value })}
        labelText="Gender"
        required
      >
        <Select.Option value="None">None</Select.Option>
        <Select.Option value="Male">Male</Select.Option>
        <Select.Option value="Female">Female</Select.Option>
      </Select>
      <Select
        id="role"
        name="role"
        value={userForm.role}
        onChange={(event) => setUserForm({ role: event.target.value })}
        labelText="Role"
        required
      >
        {Object.entries(Roles).map(([_, role]) => (
          <Select.Option key={role} value={role}>
            {role}
          </Select.Option>
        ))}
      </Select>
      <Button>Submit</Button>
    </form>
  );
};

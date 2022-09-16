import { useState } from "react";

import { Select, Input } from "components";
import { User } from "types";
import useSetState from "hooks/useSetState";

interface UserFormProps {
  user?: User;
}

export const UserForm = ({ user }: UserFormProps) => {
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

  return (
    <form className="form">
      <Input
        id="name"
        name="name"
        value={userForm.name}
        onChange={(event) => setUserForm({ name: event.target.value })}
        placeholder="Name"
      />
      <Input
        id="surname"
        name="surname"
        value={userForm.surname}
        onChange={(event) => setUserForm({ surname: event.target.value })}
        placeholder="Surname"
      />
      <Input
        id="email"
        name="email"
        value={userForm.email}
        onChange={(event) => setUserForm({ email: event.target.value })}
        type="email"
        placeholder="Email address"
      />
      <Select
        id="gender"
        name={userForm.gender}
        value={userForm.gender}
        onChange={(event) => setUserForm({ gender: event.target.value })}
        labelText="Gender"
      >
        <option value="">None</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>
      <Select
        id="role"
        name="role"
        value={userForm.role}
        onChange={(event) => setUserForm({ role: event.target.value })}
        labelText="Role"
      >
        <option value="moderator">Moderator</option>
        <option value="administrator">Administrator</option>
      </Select>
    </form>
  );
};

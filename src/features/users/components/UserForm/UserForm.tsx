import { useState, useContext } from "react";
import { useMutation } from "@tanstack/react-query";

import api from "api";
import { UserContext } from "context/UserContext";
import models from "models";
import useSetState from "hooks/useSetState";
import { Roles } from "utils";

import { Select, Input, Button } from "components";

interface UserFormProps {
  user?: models.User;
  onSubmit: () => void;
}

export const UserForm = ({ user, onSubmit = () => {} }: UserFormProps) => {
  const loggedUser = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [userForm, setUserForm] = useSetState(
    user
      ? user
      : {
          name: "",
          surname: "",
          email: "",
          gender: "none",
          role: "Moderator",
        }
  );

  const mutation = useMutation(
    (userInfo: models.UserRegistration) =>
      user ? api.users.edit(userForm) : api.users.register(userInfo),
    {
      onError: (error: Error) => {
        setErrorMessage(error.message);
      },
      onSuccess: (data) => {
        onSubmit();
      },
    }
  );

  const submitForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    mutation.mutate(user ? { ...userForm, id: user.id } : userForm);
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
        disabled={loggedUser.user?.id === user?.id}
      >
        {Object.entries(Roles).map(([_, role]) => (
          <Select.Option key={role} value={role}>
            {role}
          </Select.Option>
        ))}
      </Select>
      <span className="form__error">{errorMessage}</span>
      <Button submit disabled={mutation.isLoading}>
        {mutation.isLoading ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import models from "models";
import api from "api";
import { UserContext } from "context/UserContext";
import useSetState from "hooks/useSetState";

import { Button, Checkbox, Input, Select } from "components";

const initialState = {
  name: "",
  surname: "",
  email: "",
  password: "",
  passConfirmation: "",
  gender: "",
  role: "",
  agreement: false,
};

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [register, setRegister] = useSetState(initialState);

  const mutation = useMutation(
    (userInfo: models.UserRegistration) => api.users.register(userInfo),
    {
      onError: (error: Error) => {
        setErrorMessage(error.message);
      },
      onSuccess: (data) => {
        setUser(data);
        navigate("/");
      },
    }
  );

  const handleRegistration = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    mutation.mutate({
      name: register.name,
      surname: register.surname,
      email: register.email,
      password: register.password,
      gender: register.gender,
      role: "Moderator",
    });
  };

  const handleChange = ({ target }: any) => {
    setRegister({
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    });
  };

  return (
    <form className="form" onSubmit={handleRegistration}>
      <div className="form__header">
        <h4>Get Started</h4>
        <p>Create your free account</p>
      </div>
      <Input
        id="name"
        name="name"
        onChange={handleChange}
        value={register.name}
        placeholder="Name"
        required
      />
      <Input
        id="surname"
        name="surname"
        onChange={handleChange}
        value={register.surname}
        placeholder="Surname"
        required
      />
      <Input
        id="email"
        name="email"
        onChange={handleChange}
        value={register.email}
        type="email"
        placeholder="Email address"
        required
      />
      <Select
        id="gender"
        name="gender"
        value={register.gender}
        onChange={handleChange}
        labelText="Gender"
      >
        <Select.Option value="None">None</Select.Option>
        <Select.Option value="Male">Male</Select.Option>
        <Select.Option value="Female">Female</Select.Option>
      </Select>
      <Input
        id="password"
        name="password"
        onChange={handleChange}
        value={register.password}
        type="password"
        placeholder="Create a password"
        required
      />
      <Input
        id="passConfirmation"
        name="passConfirmation"
        onChange={handleChange}
        value={register.passConfirmation}
        type="password"
        placeholder="Confirm your password"
        required
      />
      <Checkbox
        id="agreement"
        name="agreement"
        checked={register.agreement}
        onChange={handleChange}
        labelText="I agree with personal data processing"
        required
      />
      <div className="form__footer">
        <span className="form__error">{errorMessage}</span>
        <p>
          Already have an account ? <a href="/login">Login</a>
        </p>
        <Button disabled={mutation.isLoading}>
          {mutation.isLoading ? "Signing up..." : "Sign Up"}
        </Button>
      </div>
    </form>
  );
};

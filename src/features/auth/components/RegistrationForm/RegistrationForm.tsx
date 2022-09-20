import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { UserRegistration } from "types";
import { registerUser } from "api/users";
import { UserContext } from "context/UserContext";
import useSetState from "hooks/useSetState";

import { Button, Checkbox, Input, Select } from "components";

export const RegistrationForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const mutation = useMutation(
    (userInfo: UserRegistration) => registerUser(userInfo),
    {
      onError: (error) => {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        }
        console.error(error);
      },
      onSuccess: (data) => {
        setUser(data);
        navigate("/");
      },
    }
  );
  const [register, setRegister] = useSetState({
    name: "",
    surname: "",
    email: "",
    password: "",
    passConfirmation: "",
    gender: "",
    role: "",
    agreement: false,
  });

  const handleRegistration = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const user: UserRegistration = {
      name: register.name,
      surname: register.surname,
      email: register.email,
      password: register.password,
      gender: register.gender,
      role: "Moderator",
    };

    try {
      mutation.mutate(user);
    } catch (error: any) {
      setErrorMessage(error.message);
    }
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
        onChange={(event) => setRegister({ name: event.target.value })}
        value={register.name}
        placeholder="Name"
        required
      />
      <Input
        id="surname"
        name="surname"
        onChange={(event) => setRegister({ surname: event.target.value })}
        value={register.surname}
        placeholder="Surname"
        required
      />
      <Input
        id="email"
        name="email"
        onChange={(event) => setRegister({ email: event.target.value })}
        value={register.email}
        type="email"
        placeholder="Email address"
        required
      />
      <Select
        id="gender"
        name="gender"
        value={register.gender}
        onChange={(event) => setRegister({ gender: event.target.value })}
        labelText="Gender"
      >
        <Select.Option value="None">None</Select.Option>
        <Select.Option value="Male">Male</Select.Option>
        <Select.Option value="Female">Female</Select.Option>
      </Select>
      <Input
        id="password"
        name="password"
        onChange={(event) => setRegister({ password: event.target.value })}
        value={register.password}
        type="password"
        placeholder="Create a password"
        required
      />
      <Input
        id="password-confirmation"
        name="password-confirmation"
        onChange={(event) =>
          setRegister({ passConfirmation: event.target.value })
        }
        value={register.passConfirmation}
        type="password"
        placeholder="Confirm your password"
        required
      />
      <Checkbox
        id="agreement"
        name="agreement"
        checked={register.agreement}
        onChange={(event) => setRegister({ agreement: event.target.checked })}
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

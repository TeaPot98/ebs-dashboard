import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Checkbox, InputField, Select } from "components";
import { UserRegistration } from "types";
import { registerUser } from "api/users";
import { UserContext } from "context/UserContext";
import useSetState from "hooks/useSetState";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
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
      role: "moderator",
    };

    const loggedUser = await registerUser(user);

    setUser(loggedUser);
    navigate("/");
  };

  return (
    <form className="form" onSubmit={handleRegistration}>
      <div className="form__header">
        <h4>Get Started</h4>
        <p>Create your free account</p>
      </div>
      <InputField
        id="name"
        name="name"
        onChange={(event) => setRegister({ name: event.target.value })}
        value={register.name}
        placeholder="Name"
        required
      />
      <InputField
        id="surname"
        name="surname"
        onChange={(event) => setRegister({ surname: event.target.value })}
        value={register.surname}
        placeholder="Surname"
        required
      />
      <InputField
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
        <option value="none">None</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>
      <InputField
        id="password"
        name="password"
        onChange={(event) => setRegister({ password: event.target.value })}
        value={register.password}
        type="password"
        placeholder="Create a password"
        required
      />
      <InputField
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
        <p>
          Already have an account ? <a href="/login">Login</a>
        </p>
        <Button>Sign Up</Button>
      </div>
    </form>
  );
};

export default RegistrationForm;

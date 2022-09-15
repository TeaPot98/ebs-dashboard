import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Checkbox, InputField, Select } from "components";
import { User } from "types";
import { registerUser } from "api/users";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirmation, setPassConfirmation] = useState("");
  const [gender, setGender] = useState("none");
  const [role, setRole] = useState("");
  const [agreement, setAgreement] = useState(false);
  const navigate = useNavigate();

  const handleRegistration = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target);
    const user: User = {
      name: name,
      surname: surname,
      email: email,
      password: password,
      // passConfirmation: passConfirmation,
      gender: "none",
      role: "moderator",
      // agreement: agreement,
    };
    registerUser(user);
    navigate("/");
    console.log(user);
  };

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
    setGender(event.currentTarget.value);
  };

  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const handlePassConfirmationChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setPassConfirmation(event.currentTarget.value);
  };

  const handleAgreement = (event: React.FormEvent<HTMLInputElement>) => {
    setAgreement(event.currentTarget.checked);
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
        onChange={handleNameChange}
        value={name}
        placeholder="Name"
      />
      <InputField
        id="surname"
        name="surname"
        onChange={handleSurnameChange}
        value={surname}
        placeholder="Surname"
      />
      <InputField
        id="email"
        name="email"
        onChange={handleEmailChange}
        value={email}
        type="email"
        placeholder="Email address"
      />
      <Select
        id="gender"
        name="gender"
        value={gender}
        defaultValue="none"
        onChange={handleGenderChange}
        labelText="Gender"
      >
        <option value="none">None</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </Select>
      <InputField
        id="password"
        name="password"
        onChange={handlePasswordChange}
        value={password}
        type="password"
        placeholder="Create a password"
      />
      <InputField
        id="password-confirmation"
        name="password-confirmation"
        onChange={handlePassConfirmationChange}
        value={passConfirmation}
        type="password"
        placeholder="Confirm your password"
      />
      <Checkbox
        id="agreement"
        name="agreement"
        onChange={handleAgreement}
        labelText="I agree with personal data processing"
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

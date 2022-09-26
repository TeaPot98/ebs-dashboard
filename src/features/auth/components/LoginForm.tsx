import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import api from "api";
import { UserContext } from "context/UserContext";
import useSetState from "hooks/useSetState";
import models from "models";

import { Button, Input } from "components";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [login, setLogin] = useSetState({
    email: "",
    password: "",
  });

  const mutation = useMutation(
    (userCredentials: models.UserCredentials) =>
      api.users.login(userCredentials),
    {
      onError: (error: Error) => {
        setErrorMessage(error.message);
      },
      onSuccess: (data) => {
        setUser(data[0]);
        navigate("/");
      },
    }
  );

  const handleLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    mutation.mutate({
      email: login.email,
      password: login.password,
    });
  };

  const handleChange = ({ target }: { target: HTMLInputElement }) => {
    setLogin({
      [target.name]: target.value,
    });
  };

  return (
    <form onSubmit={handleLogin} className="form">
      <div className="form__header">
        <h4>Welcome back!</h4>
        <p>Login to your account</p>
      </div>
      <Input
        id="email"
        name="email"
        value={login.email}
        onChange={handleChange}
        placeholder="Email Address"
        required
      />
      <Input
        id="password"
        name="password"
        value={login.password}
        onChange={handleChange}
        type="password"
        placeholder="Password"
        required
      />
      <div className="form__footer">
        <span className="form__error">{errorMessage}</span>
        <p>
          Don't have an account ? <a href="/register">Sign Up</a>
        </p>
        <Button submit type="primary" loading={mutation.isLoading}>
          Login
        </Button>
      </div>
    </form>
  );
};

import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { loginUser } from "api/users";
import { UserContext } from "context/UserContext";
import useSetState from "hooks/useSetState";
import { UserCredentials } from "types";

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
    (userCredentials: UserCredentials) => loginUser(userCredentials),
    {
      onError: (error) => {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        }
        console.error(error);
      },
      onSuccess: (data) => {
        setUser(data[0]);
        navigate("/");
      },
    }
  );

  const handleLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const userCredentials: UserCredentials = {
      email: login.email,
      password: login.password,
    };

    try {
      mutation.mutate(userCredentials);
    } catch (error: any) {
      setErrorMessage(error.message);
      console.error(error);
    }
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
        onChange={(event) => setLogin({ email: event.target.value })}
        placeholder="Email Address"
        required
      />
      <Input
        id="password"
        name="password"
        value={login.password}
        onChange={(event) => setLogin({ password: event.target.value })}
        type="password"
        placeholder="Password"
        required
      />
      <div className="form__footer">
        <span className="form__error">{errorMessage}</span>
        <p>
          Don't have an account ? <a href="/register">Sign Up</a>
        </p>
        <Button disabled={mutation.isLoading}>
          {mutation.isLoading ? "Loggin in..." : "Login"}
        </Button>
      </div>
    </form>
  );
};

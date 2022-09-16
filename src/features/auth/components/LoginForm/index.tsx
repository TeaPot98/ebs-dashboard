import { loginUser } from "api/users";
import { Button, InputField } from "components";
import { UserContext } from "context/UserContext";
import useSetState from "hooks/useSetState";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCredentials } from "types";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [login, setLogin] = useSetState({
    email: "",
    password: "",
  });

  const handleLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const userCredentials: UserCredentials = {
      email: login.email,
      password: login.password,
    };

    try {
      const loggedUser = await loginUser(userCredentials);
      setUser(loggedUser[0]);
      navigate("/");
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
      <InputField
        id="email"
        name="email"
        value={login.email}
        onChange={(event) => setLogin({ email: event.target.value })}
        placeholder="Email Address"
      />
      <InputField
        id="password"
        name="password"
        value={login.password}
        onChange={(event) => setLogin({ password: event.target.value })}
        type="password"
        placeholder="Password"
      />
      <div className="form__footer">
        <span className="form__error">{errorMessage}</span>
        <p>
          Don't have an account ? <a href="/register">Sign Up</a>
        </p>
        <Button>Login</Button>
      </div>
    </form>
  );
};

export default LoginForm;

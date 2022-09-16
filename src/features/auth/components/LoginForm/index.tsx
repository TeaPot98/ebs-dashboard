import { loginUser } from "api/users";
import { Button, InputField } from "components";
import { UserContext } from "context/UserContext";
import userReducer from "context/userReducer";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCredentials } from "types";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const userCredentials: UserCredentials = {
      email: email,
      password: password,
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

  const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
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
        value={email}
        onChange={handleEmailChange}
        placeholder="Email Address"
      />
      <InputField
        id="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
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

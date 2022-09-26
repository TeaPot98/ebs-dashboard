import React, { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { Input, Form, useForm } from "ebs-design";

import api from "api";
import { UserContext } from "context/UserContext";
import models from "models";

import { Button } from "components";

export const LoginForm = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleLogin = async (login: models.UserCredentials) => {
    mutation.mutate({
      email: login.email,
      password: login.password,
    });
  };

  return (
    <Form form={form} className="form" onFinish={handleLogin}>
      <div className="form__header">
        <h4>Welcome back!</h4>
        <p>Login to your account</p>
      </div>
      <Form.Field name="email" label="Email" rules={[{ required: true }]}>
        <Input placeholder="Email Address" required />
      </Form.Field>
      <Form.Field name="password" label="Password" rules={[{ required: true }]}>
        <Input type="password" placeholder="Password" required />
      </Form.Field>
      <div className="form__footer">
        <span className="form__error">{errorMessage}</span>
        <p>
          Don't have an account ? <a href="/register">Sign Up</a>
        </p>
        <Button submit type="primary" loading={mutation.isLoading}>
          Login
        </Button>
      </div>
    </Form>
  );
};

import { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { Checkbox, Select, Input, Form, useForm } from "ebs-design";

import models from "models";
import api from "api";
import { UserContext } from "context/UserContext";

import { Button } from "components";

export const RegistrationForm = () => {
  const [form] = useForm();
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [agreement, setAgreement] = useState(false);

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

  const handleRegistration = async (register: models.UserRegistration) => {
    mutation.mutate({
      name: register.name,
      surname: register.surname,
      email: register.email,
      password: register.password,
      gender: register.gender,
      role: "Moderator",
    });
  };

  return (
    <Form form={form} className="form" onFinish={handleRegistration}>
      <div className="form__header">
        <h4>Get Started</h4>
        <p>Create your free account</p>
      </div>
      <Form.Field name="name" label="Name" rules={[{ required: true }]}>
        <Input placeholder="Name" />
      </Form.Field>
      <Form.Field name="surname" label="Surname" rules={[{ required: true }]}>
        <Input placeholder="Surname" />
      </Form.Field>
      <Form.Field name="email" label="Email" rules={[{ required: true }]}>
        <Input type="email" placeholder="Email address" />
      </Form.Field>
      <Form.Field name="gender" label="Gender">
        <Select>
          <Select.Options>
            <Select.Options.Item value="None">None</Select.Options.Item>
            <Select.Options.Item value="Male">Male</Select.Options.Item>
            <Select.Options.Item value="Female">Female</Select.Options.Item>
          </Select.Options>
        </Select>
      </Form.Field>
      <Form.Field name="password" label="Password" rules={[{ required: true }]}>
        <Input type="password" placeholder="Create a password" />
      </Form.Field>
      <Form.Field
        name="passConfirmation"
        label="Password Confirmation"
        rules={[{ required: true }]}
      >
        <Input type="password" placeholder="Confirm your password" />
      </Form.Field>
      <Checkbox
        id="agreement"
        name="agreement"
        checked={agreement}
        onChange={setAgreement}
        text="I agree with personal data processing"
      />
      <div className="form__footer">
        <span className="form__error">{errorMessage}</span>
        <p>
          Already have an account ? <a href="/login">Login</a>
        </p>
        <Button
          submit
          type="primary"
          loading={mutation.isLoading}
          disabled={!agreement}
        >
          Sign Up
        </Button>
      </div>
    </Form>
  );
};

import { useState, useContext } from "react";
import { useMutation } from "@tanstack/react-query";

import { Select, Input, Form, useForm } from "ebs-design";

import api from "api";
import { UserContext } from "context/UserContext";
import models from "models";
import { Roles } from "utils";

import { Button } from "components";

interface UserFormProps {
  user?: models.User;
  onSubmit: () => void;
}

export const UserForm = ({ user, onSubmit = () => {} }: UserFormProps) => {
  const [form] = useForm();
  const loggedUser = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");

  const mutation = useMutation(
    (userInfo: models.UserRegistration) =>
      user
        ? api.users.edit({ ...userInfo, id: user.id })
        : api.users.register(userInfo),
    {
      onError: (error: Error) => {
        setErrorMessage(error.message);
      },
      onSuccess: (data) => {
        onSubmit();
      },
    }
  );

  const submitForm = async (userInfo: models.UserRegistration) => {
    mutation.mutate(userInfo);
  };

  return (
    <Form
      form={form}
      className="form"
      onFinish={submitForm}
      initialValues={
        user
          ? user
          : {
              name: "",
              surname: "",
              email: "",
              gender: "none",
              role: "Moderator",
            }
      }
    >
      <Form.Field name="name" label="Name" rules={[{ required: true }]}>
        <Input placeholder="Name" />
      </Form.Field>
      <Form.Field name="surname" label="Surname" rules={[{ required: true }]}>
        <Input placeholder="Surname" />
      </Form.Field>
      <Form.Field name="email" label="Email" rules={[{ required: true }]}>
        <Input type="email" placeholder="Email address" />
      </Form.Field>
      <Form.Field name="gender">
        <Select>
          <Select.Options>
            <Select.Options.Item value="None">None</Select.Options.Item>
            <Select.Options.Item value="Male">Male</Select.Options.Item>
            <Select.Options.Item value="Female">Female</Select.Options.Item>
          </Select.Options>
        </Select>
      </Form.Field>
      <Form.Field name="role">
        <Select>
          <Select.Options>
            {Object.entries(Roles).map(([_, role]) => (
              <Select.Options.Item key={role} value={role}>
                {role}
              </Select.Options.Item>
            ))}
          </Select.Options>
        </Select>
      </Form.Field>
      <span className="form__error">{errorMessage}</span>
      <Button type="primary" submit disabled={mutation.isLoading}>
        {mutation.isLoading ? "Submitting..." : "Submit"}
      </Button>
    </Form>
  );
};

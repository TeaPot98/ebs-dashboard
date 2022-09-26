import { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import { Select, DatePicker, Input, Textarea, Form, useForm } from "ebs-design";

import api from "api";

import { UserContext } from "context/UserContext";
import { Categories } from "utils";
import models from "models";

import { Button } from "components";

interface PostFormProps {
  formData: models.Post | null;
}

export const PostForm = ({ formData }: PostFormProps) => {
  const [form] = useForm();
  const navigate = useNavigate();
  const { id: postId } = useParams();
  const { user } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");

  const mutation = useMutation(
    (postInfo: models.Post) =>
      postId ? api.posts.edit(postInfo) : api.posts.create(postInfo),
    {
      onError: (error: Error) => {
        setErrorMessage(error.message);
      },
      onSuccess: (data) => {
        navigate("/posts");
      },
    }
  );

  console.log(user);
  const handleSubmit = async (updatedPost: models.Post) => {
    console.log("The updated post from form", updatedPost);
    mutation.mutate(
      postId
        ? { ...updatedPost, id: Number(postId), author: formData!.author }
        : {
            ...updatedPost,
            author: {
              id: user!.id,
              name: user!.name,
              surname: user!.surname,
            },
          }
    );
  };

  return (
    <Form
      form={form}
      className="form"
      onFinish={handleSubmit}
      initialValues={
        formData !== null
          ? formData
          : {
              title: "",
              description: "",
              category: "General",
              imageUrl: "",
              date: new Date(),
              author: {
                id: user!.id,
                name: user!.name,
                surname: user!.surname,
              },
            }
      }
    >
      <Form.Field name="title" label="Title" rules={[{ required: true }]}>
        <Input placeholder="Title" required />
      </Form.Field>
      <Form.Field
        name="description"
        label="Description"
        rules={[{ required: true }]}
      >
        <Textarea placeholder="Description" required />
      </Form.Field>
      <Form.Field name="category">
        <Select>
          <Select.Options>
            {Object.entries(Categories).map(([_, cat]) => (
              <Select.Options.Item key={cat} value={cat}>
                {cat}
              </Select.Options.Item>
            ))}
          </Select.Options>
        </Select>
      </Form.Field>
      <Form.Field
        name="imageUrl"
        label="Image URL"
        rules={[{ required: true }]}
      >
        <Input placeholder="Image URL" />
      </Form.Field>
      <Form.Field name="date">
        <DatePicker />
      </Form.Field>
      <span>{errorMessage}</span>
      <Button type="primary" submit loading={mutation.isLoading}>
        Submit
      </Button>
    </Form>
  );
};

import { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import { Select, DatePicker, Input, Textarea } from "ebs-design";

import api from "api";

import { UserContext } from "context/UserContext";
import { Categories } from "utils";
import useSetState from "hooks/useSetState";
import models from "models";

import { Button } from "components";

interface PostFormProps {
  formData: models.Post | null;
}

export const PostForm = ({ formData }: PostFormProps) => {
  const navigate = useNavigate();
  const { id: postId } = useParams();
  const { user } = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useSetState(
    formData !== null
      ? formData
      : {
          title: "",
          description: "",
          category: "General",
          imageUrl: "",
          date: new Date(),
          author: {
            id: user?.id,
            name: user?.name,
            surname: user?.surname,
          },
        }
  );

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

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    mutation.mutate(postId ? { ...formState, id: postId } : formState);

    console.log("New Post created !");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        id="title"
        name="title"
        value={formState.title}
        onChange={(value) => setFormState({ title: value })}
        placeholder="Title"
        required
      />
      <Textarea
        id="description"
        name="description"
        value={formState.description}
        onChange={(value) => setFormState({ description: value })}
        placeholder="Description"
        required
      />
      <Select
        id="category"
        value={formState.category}
        onChange={(value) => setFormState({ category: value })}
      >
        <Select.Options>
          {Object.entries(Categories).map(([_, cat]) => (
            <Select.Options.Item key={cat} value={cat}>
              {cat}
            </Select.Options.Item>
          ))}
        </Select.Options>
      </Select>
      <Input
        id="imageUrl"
        name="imageUrl"
        value={formState.imageUrl}
        onChange={(value) => setFormState({ imageUrl: value })}
        placeholder="Image URL"
      />
      <DatePicker
        value={formState.date}
        onChange={(value) => setFormState({ date: value })}
      />
      <span>{errorMessage}</span>
      <Button
        type="primary"
        onClick={handleSubmit}
        disabled={mutation.isLoading}
      >
        {mutation.isLoading ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

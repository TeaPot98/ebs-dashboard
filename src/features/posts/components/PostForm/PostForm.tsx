import { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import api from "api";

import { UserContext } from "context/UserContext";
import { Categories, formatDate } from "utils";
import useSetState from "hooks/useSetState";
import models from "models";

import { TextArea } from "components/TextArea/TextArea";
import { DateInput } from "components/DateInput/DateInput";
import { Input, Button, Select } from "components";

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

  const handleChange = ({ target }: any) => {
    setFormState({
      [target.name]:
        target.type === "date" ? new Date(target.value) : target.value,
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        id="title"
        name="title"
        value={formState.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <TextArea
        id="description"
        name="description"
        value={formState.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <Select
        id="category"
        name="category"
        value={formState.category}
        onChange={handleChange}
        labelText="Category"
        required
      >
        {Object.entries(Categories).map(([_, cat]) => (
          <Select.Option key={cat} value={cat}>
            {cat}
          </Select.Option>
        ))}
      </Select>
      <Input
        id="imageUrl"
        name="imageUrl"
        value={formState.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <DateInput
        id="postDate"
        name="date"
        value={formatDate(formState.date)}
        onChange={handleChange}
      />
      <span>{errorMessage}</span>
      <Button onClick={handleSubmit} disabled={mutation.isLoading}>
        {mutation.isLoading ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
};

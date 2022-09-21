import { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";

import { editPost, uploadPost } from "api/posts";

import { UserContext } from "context/UserContext";
import { Categories, formatDate } from "utils";
import useSetState from "hooks/useSetState";
import { Post } from "types";

import { TextArea } from "components/TextArea/TextArea";
import { DateInput } from "components/DateInput/DateInput";
import { Input, Button, Select } from "components";

interface PostFormProps {
  formData: Post | null;
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
  const editMutation = useMutation((postInfo: Post) => editPost(postInfo), {
    onError: (error) => {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
      console.error(error);
    },
    onSuccess: (data) => {
      navigate("/posts");
    },
  });
  const createMutation = useMutation((postInfo: Post) => uploadPost(postInfo), {
    onError: (error) => {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
      console.error(error);
    },
    onSuccess: (data) => {
      navigate("/posts");
    },
  });

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (postId) {
      editMutation.mutate({ ...formState, id: postId });
    } else {
      createMutation.mutate(formState);
    }

    console.log("New Post created !");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        id="title"
        name="title"
        value={formState.title}
        onChange={(event) => setFormState({ title: event.target.value })}
        placeholder="Title"
        required
      />
      <TextArea
        id="description"
        name="description"
        value={formState.description}
        onChange={(event) => setFormState({ description: event.target.value })}
        placeholder="Description"
        required
      />
      <Select
        id="category"
        name="category"
        value={formState.category}
        onChange={(event) => setFormState({ category: event.target.value })}
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
        id="image-url"
        name="image-url"
        value={formState.imageUrl}
        onChange={(event) => setFormState({ imageUrl: event.target.value })}
        placeholder="Image URL"
      />
      <DateInput
        id="post-date"
        name="post-date"
        value={formatDate(formState.date)}
        onChange={(event) =>
          setFormState({ date: new Date(event.target.value) })
        }
      />
      <span>{errorMessage}</span>
      <Button
        onClick={handleSubmit}
        disabled={editMutation.isLoading || createMutation.isLoading}
      >
        {editMutation.isLoading || createMutation.isLoading
          ? "Submitting..."
          : "Submit"}
      </Button>
    </form>
  );
};

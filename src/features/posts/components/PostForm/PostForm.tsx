import { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { editPost, getPost, uploadPost } from "api/posts";

import { UserContext } from "context/UserContext";
import useSetState from "hooks/useSetState";
import { Categories, formatDate } from "utils";
import { Post } from "types";

import { TextArea } from "components/TextArea/TextArea";
import { DateInput } from "components/DateInput/DateInput";
import { Input, Button, Select, LoadingSpinner } from "components";

interface PostFormProps {
  formData: Post | null;
}

export const PostForm = ({ formData }: PostFormProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id: postId } = useParams();
  const { user } = useContext(UserContext);
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

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      if (postId) {
        await editPost({ ...formState, id: postId });
      } else {
        await uploadPost(formState);
      }
      navigate("/posts");
    } catch (error) {
      console.error(error);
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
      <Button onClick={handleSubmit}>Submit</Button>
    </form>
  );
};

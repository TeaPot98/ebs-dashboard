import { useContext, useEffect } from "react";
import { editPost, getPost, uploadPost } from "api/posts";
import { Input, Button, Select, LoadingSpinner } from "components";
import { DateInput } from "components/DateInput/DateInput";
import { TextArea } from "components/TextArea/TextArea";
import { UserContext } from "context/UserContext";
import useSetState from "hooks/useSetState";
import { Categories, formatDate } from "utils";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export const PostForm = () => {
  const { id: postId } = useParams();
  const { isLoading, isSuccess, isError, data, error } = useQuery(
    ["post", postId],
    () => getPost(postId ? postId : ""),
    { enabled: !!postId }
  );
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [formState, setFormState] = useSetState({
    title: "",
    description: "",
    category: "General",
    imageUrl: "",
    date: new Date(),
    author: {
      name: user?.name,
      surname: user?.surname,
    },
  });

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

  // Check if data is available and set initial state for the form
  useEffect(() => {
    if (isSuccess && data) {
      setFormState({
        title: data.title,
        description: data.description,
        category: data.category,
        imageUrl: data.imageUrl,
        date: new Date(data.date),
        author: data.author,
      });
    }
  }, [data]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    if (error instanceof Error) {
      return <span>Error: {error.message}</span>;
    }
    return <span>An unknown error occured</span>;
  }

  if (!data) {
    return <span>Data not found</span>;
  }

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

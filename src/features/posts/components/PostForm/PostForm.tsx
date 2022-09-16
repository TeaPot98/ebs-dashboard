import { Input, Button } from "components";
import { DateInput } from "components/DateInput/DateInput";
import { TextArea } from "components/TextArea/TextArea";

export const PostForm = () => {
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log("New Post created !");
  };

  return (
    <form className="form">
      <Input placeholder="Title" />
      <TextArea placeholder="Description" />
      <Input placeholder="Image URL" />
      <DateInput />
      <Button onClick={handleSubmit}>Create</Button>
    </form>
  );
};

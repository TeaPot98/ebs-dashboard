import { InputField, Button } from "components";
import DateInput from "components/DateInput";
import TextArea from "components/TextArea";

const PostForm = () => {
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log("New Post created !");
  };

  return (
    <form className="form">
      <InputField placeholder="Title" />
      <TextArea placeholder="Description" />
      <DateInput />
      <Button onClick={handleSubmit}>Create</Button>
    </form>
  );
};

export default PostForm;

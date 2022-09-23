import { ComponentStory } from "@storybook/react";
import { Input } from "./Input";

export default {
  component: Input,
};

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: "text",
  placeholder: "Type something...",
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  placeholder: "Password",
  // placeholder: ""
};

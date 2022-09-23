import { ComponentStory } from "@storybook/react";

import { Button } from "./Button";

export default {
  component: Button,
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Press Me",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Don't Press!",
  type: "danger",
};

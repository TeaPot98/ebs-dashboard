import { ComponentStory } from "@storybook/react";
import { Checkbox } from "./Checkbox";

export default {
  component: Checkbox,
};

export const Default: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);
Default.args = {
  labelText: "I'm a checkbox",
};

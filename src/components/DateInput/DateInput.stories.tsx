import { ComponentStory } from "@storybook/react";
import { DateInput } from "./DateInput";

export default {
  component: DateInput,
};

const Template: ComponentStory<typeof DateInput> = (args) => (
  <DateInput {...args} />
);

export const Default = Template.bind({});
Default.args = {};

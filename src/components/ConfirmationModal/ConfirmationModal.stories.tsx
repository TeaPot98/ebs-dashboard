import { ComponentStory } from "@storybook/react";

import { ConfirmationModal } from "./ConfirmationModal";

export default {
  component: ConfirmationModal,
};

const Template: ComponentStory<typeof ConfirmationModal> = (args) => (
  <ConfirmationModal {...args} />
);

export const Confirm = Template.bind({});
Confirm.args = {
  open: true,
  children: "Are you sure you want to delete your account ?",
};

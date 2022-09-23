import { ComponentStory } from "@storybook/react";
import { Modal } from "./Modal";
import * as Input from "../Input/Input.stories";
import * as Button from "../Button/Button.stories";

export default {
  component: Modal,
};

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
  children: (
    <>
      <Modal.Header>
        <h4>Simple Modal</h4>
      </Modal.Header>
      <Modal.Content
        style={{ display: "flex", flexDirection: "column", gap: "8px" }}
      >
        <Input.Text {...Input.Text.args} />
        <Input.Password {...Input.Password.args} />
      </Modal.Content>
      <Modal.Footer>
        <Button.Primary {...Button.Primary.args} children="Close" />
      </Modal.Footer>
    </>
  ),
};

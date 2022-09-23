import { ComponentStory } from "@storybook/react";
import { PostCard as PostCardComponent } from "./PostCard";

export default {
  component: PostCardComponent,
};

const Template: ComponentStory<typeof PostCardComponent> = (args) => (
  <PostCardComponent {...args} />
);

export const PostCard = Template.bind({});
PostCard.args = {};

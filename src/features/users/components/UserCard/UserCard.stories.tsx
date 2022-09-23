import { ComponentStory } from "@storybook/react";
import { UserCard } from "./UserCard";

export default {
  component: UserCard,
};

export const Default: ComponentStory<typeof UserCard> = (args) => <UserCard />;

import { ComponentStory } from "@storybook/react";
import { LoadingSpinner as LoadingSpinnerComponent } from "./LoadingSpinner";

export default {
  components: LoadingSpinnerComponent,
};

export const LoadingSpinner: ComponentStory<typeof LoadingSpinnerComponent> = (
  args
) => <LoadingSpinnerComponent />;

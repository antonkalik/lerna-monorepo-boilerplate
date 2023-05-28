import { StoryFn, Meta } from "@storybook/react";
import { Button } from ".";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const RedButton = Template.bind({});
RedButton.args = {
  label: "Button",
  backgroundColor: "red",
};

export const GreenButton = Template.bind({});
GreenButton.args = {
  label: "Button",
  backgroundColor: "green",
};

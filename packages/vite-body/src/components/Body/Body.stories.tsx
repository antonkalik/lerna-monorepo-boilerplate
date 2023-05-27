import { StoryFn, Meta } from "@storybook/react";
import { Body } from ".";

export default {
  title: "Example/Body",
  component: Body,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Body>;

const Template: StoryFn<typeof Body> = (args) => <Body {...args} />;

export const BodyOne = Template.bind({});
BodyOne.args = {
  title: "Body One",
  subTitle: "SubTitle One",
  message: "Message One",
};

export const BodyTwo = Template.bind({});

BodyTwo.args = {
  title: "Body Two",
  subTitle: "SubTitle Two",
  message: "Message Two",
};

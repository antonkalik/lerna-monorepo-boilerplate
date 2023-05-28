import { StoryFn, Meta } from "@storybook/react";
import { Header } from ".";

export default {
  title: "Example/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;

export const HeaderWithLinks = Template.bind({});
HeaderWithLinks.args = {
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export const HeaderWithOneLink = Template.bind({});
HeaderWithOneLink.args = {
  links: [{ label: "Home", href: "/" }],
};

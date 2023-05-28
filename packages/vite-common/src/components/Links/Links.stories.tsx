import { StoryFn, Meta } from "@storybook/react";
import { Links } from ".";

export default {
  title: "Example/Links",
  component: Links,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta<typeof Links>;

const Template: StoryFn<typeof Links> = (args) => <Links {...args} />;

const mockLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const LinksWithItems = Template.bind({});
LinksWithItems.args = {
  links: mockLinks,
};

export const LinksWithOneItem = Template.bind({});
LinksWithOneItem.args = {
  links: [mockLinks[0]],
};

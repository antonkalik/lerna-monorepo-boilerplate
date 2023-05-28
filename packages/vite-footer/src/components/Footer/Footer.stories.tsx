import { StoryFn, Meta } from "@storybook/react";
import { Footer } from ".";

export default {
  title: "Example/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Footer>;

const mockedLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Template: StoryFn<typeof Footer> = (args) => <Footer {...args} />;

export const FooterWithLinks = Template.bind({});
FooterWithLinks.args = {
  links: mockedLinks,
};

export const FooterWithOneLink = Template.bind({});
FooterWithOneLink.args = {
  links: [mockedLinks[0]],
};

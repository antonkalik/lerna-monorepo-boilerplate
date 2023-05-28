import { StoryFn, Meta } from "@storybook/react";
import { Footer } from ".";

export default {
  title: "Example/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = (args) => <Footer {...args} />;

export const FooterWithLinks = Template.bind({});
FooterWithLinks.args = {
  links: ["Home", "About", "Contact"],
};

export const FooterWithOneLink = Template.bind({});
FooterWithOneLink.args = {
  links: ["Home"],
};

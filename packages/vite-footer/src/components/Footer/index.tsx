import { Button, Links } from "vite-common";

export interface FooterProps {
  links: {
    label: string;
    href: string;
  }[];
}

export const Footer = ({ links }: FooterProps) => {
  return (
    <footer>
      <Links links={links} />
      <Button label="Click Button" backgroundColor="green" />
    </footer>
  );
};

export default Footer;

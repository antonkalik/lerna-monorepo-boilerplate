import { Button } from "vite-common";

export interface FooterProps {
  links: string[];
}

export const Footer = ({ links }: FooterProps) => {
  return (
    <footer>
      <ul>
        {links.map((link) => {
          return <li key={link}>{link}</li>;
        })}
      </ul>
      <Button label="Click Button" backgroundColor="green" />
    </footer>
  );
};

export default Footer;

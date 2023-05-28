import { Button } from "vite-common";

export interface HeaderProps {
  links: { label: string; href: string }[];
}

export const Header = ({ links }: HeaderProps) => (
  <header>
    <div>Logo</div>
    <nav>
      <ul>
        {links.map(({ label, href }) => (
          <li key={href}>{label}</li>
        ))}
      </ul>
    </nav>
    <Button label="Click Me" />
  </header>
);

export default Header;

import { Button, Links } from "vite-common";
import styles from "./styles.module.scss";

export interface HeaderProps {
  links: { label: string; href: string }[];
}

export const Header = ({ links }: HeaderProps) => (
  <header className={styles.header}>
    <div>Logo</div>
    <nav>
      <Links links={links} />
    </nav>
    <Button label="Click Me" />
  </header>
);

export default Header;

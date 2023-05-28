import styles from "./styles.module.scss";

export interface ButtonProps {
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  backgroundColor = "gray",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      style={{ backgroundColor }}
      className={styles.button}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;

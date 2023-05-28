export interface ButtonProps {
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
}

export const Button = ({ backgroundColor = 'gray', label, ...props }: ButtonProps) => {
  return (
    <button type="button" style={{ backgroundColor }} {...props}>
      {label}
    </button>
  );
};

export default Button;

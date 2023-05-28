import { Button } from "vite-common";

export interface BodyProps {
  title: string;
  subTitle: string;
  message: string;
}

export const Body = ({ title, subTitle, message }: BodyProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <p>{message}</p>
      <Button label="Click Here" backgroundColor="red" />
    </div>
  );
};

export default Body;

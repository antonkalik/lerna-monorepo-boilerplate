import { render } from "@testing-library/react";
import { Body } from ".";

jest.mock("vite-common", () => ({
  Button: () => <div>Button</div>,
}));

describe("<Body />", () => {
  it("should render component", () => {
    const { container } = render(
      <Body
        title="Title test"
        subTitle="subtitle test"
        message="message test"
      />
    );

    expect(container).toMatchSnapshot();
  });
});

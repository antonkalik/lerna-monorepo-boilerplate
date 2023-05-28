import { checkMessage } from ".";

describe("checkMessage", () => {
  it('should return "world" if message is "hello"', () => {
    expect(checkMessage("hello")).toBe("world");
  });

  it('should return "error" if message is not "hello"', () => {
    expect(checkMessage("")).toBe("error");
  });
});

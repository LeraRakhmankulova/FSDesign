import { classNames } from "./classNames";

test("adds 1 + 2 to equal 3", () => {
    expect(classNames("color: red")).toBe("color: red");
});
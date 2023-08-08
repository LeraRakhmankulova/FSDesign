import { classNames } from "./classNames";

describe("classNames", () => {
    test("test1", () => {
        expect(classNames("class")).toBe("class")
    })

    test("test2", () => {
        expect(classNames("class1", {}, ["class2", "class3"])).toBe("class1 class2 class3")
    })
});
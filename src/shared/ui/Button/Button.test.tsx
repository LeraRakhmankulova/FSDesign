import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("button test", () => {
    test("test 1", () => {
        render(<Button>test</Button>);
        expect(screen.getByText("test")).toBeInTheDocument()
    })
})
import { render, screen } from "@testing-library/react";
import Textbox from "./Textbox";

describe("Textbox", () => {
  it("shows text", () => {
    const callback = jest.fn();
    render(<Textbox text={"test"} onChange={callback} />);
    const element = screen.getByRole("textbox");
    expect(element).toBeInTheDocument();
  });
});

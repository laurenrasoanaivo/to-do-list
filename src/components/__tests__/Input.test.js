import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Input from "../Input";

describe("Input", () => {
  it("should render doneList component", () => {
    render(<Input />);
    const inputElement = screen.getByTestId("input-1");
    expect(inputElement).toBeInTheDocument();
  });

  it("should call toDo callback", () => {
    const toDo = jest.fn();
    render(<Input toDo={toDo()} />);
    fireEvent.keyPress(screen.getByTestId("input-1"), { key: "Enter", code: 13 });
    expect(toDo).toHaveBeenCalled();
  });
}); 

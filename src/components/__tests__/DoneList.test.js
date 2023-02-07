import React from "react";
import { render, screen } from "@testing-library/react";
import DoneList from "../DoneList";

describe("DoneList", () => {
  it("renders a heading 'Done'", () => {
    const doneList = [];
    render(<DoneList doneList={doneList} />);
    const heading = screen.getByText("Done");
    expect(heading).toBeInTheDocument();
  });

  it("renders the correct number of items in the list", () => {
    const doneList = ["Item 1", "Item 2", "Item 3"];
    render(<DoneList doneList={doneList} />);
    const listItems = screen.getAllByTestId("list-item");
    expect(listItems).toHaveLength(doneList.length);
  });
});

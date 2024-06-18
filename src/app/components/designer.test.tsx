/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Designer from "./designer";

const testChild = (rowIdx: number, cellIdx: number) => (
  <div>
    {rowIdx} - {cellIdx}
  </div>
);

const testGrid = [
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
];

const testTitle = "This is a title";

describe("Design Grid component", () => {
  it("renders grid correctly", () => {
    const { container } = render(
      <Designer grid={testGrid} title={testTitle}>
        {testChild}
      </Designer>
    );
    expect(container.querySelectorAll("tbody tr").length).toEqual(4);
    expect(container.querySelectorAll("td").length).toEqual(16);
    expect(container.querySelectorAll("td > div")[3]).toHaveTextContent(
      "0 - 3"
    );
  });
});

import React from "react";

import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Display from "./Display";

describe("Display component:", () => {
  it("• should render balls count", () => {
    const ballsText = render(<Display balls={3} />).getByText(/Balls: 3/);
    expect(ballsText).toBeInTheDocument();
  });

  it("• should render strikes count", () => {
    const strikesText = render(<Display strikes={2} />).getByText(
      /Strikes: 2/i
    );
    expect(strikesText).toBeInTheDocument();
  });
});

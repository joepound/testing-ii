import React from "react";

import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import App from "./App";

describe("App component:", () => {
  it("• should render without crashing", () => {
    render(<App />);
  });
});

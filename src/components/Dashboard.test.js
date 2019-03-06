import React from "react";

import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

const mockFunc = jest.fn();
const checkButtonClickability = (btnName, componentWithProp, testId) => {
  it(`• should have clickable ${btnName} button`, () => {
    const button = render(componentWithProp).getByTestId(testId);
    fireEvent.click(button);
    expect(mockFunc).toHaveBeenCalled();
  });
};

describe("Dashboard component:", () => {
  checkButtonClickability("Ball", <Dashboard ball={mockFunc} />, "ball-btn");
  checkButtonClickability("Strike", <Dashboard strike={mockFunc} />, "strike-btn");
  checkButtonClickability("Foul", <Dashboard foul={mockFunc} />, "foul-btn");
  checkButtonClickability("Hit", <Dashboard hit={mockFunc} />, "hit-btn");
});

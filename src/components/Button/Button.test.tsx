import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";
import { BtnBrandOptions, BtnTypeOptions } from "./types";

test("it calls the handler when clicked", () => {
  const fn = jest.fn();

  render(<Button onClick={fn}>Click me</Button>);
  fireEvent.click(screen.getByText("Click me"));

  expect(fn).toHaveBeenCalled();
});

test("it render different buttons", () => {
  render(
    <>
      {BtnBrandOptions.map((brand) =>
        BtnTypeOptions.map((type) => (
          <Button
            onClick={() => {}}
            key={`${brand}_${type}`}
            brand={brand}
            type={type}
          >
            {brand} {type}
          </Button>
        ))
      )}
    </>
  );

  BtnBrandOptions.forEach((brand) => {
    BtnTypeOptions.forEach((type) => {
      screen.getByText(`${brand} ${type}`);
    });
  });
});

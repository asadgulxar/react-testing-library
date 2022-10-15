import { render, screen, fireEvent } from "@testing-library/react";
import ColorButton, { replaceCamelWithSpaces } from "./ColorButton";

test("button has correct initial color", () => {
  render(<ColorButton />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  expect(colorButton).toHaveTextContent("Change to red");
});


test('initial conditions', () => {
  render(<ColorButton />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole('button', {
    name: 'Change to blue',
  });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('button enable disable test', () => {
  
  render(<ColorButton />)

  const button = screen.getByRole('button', { name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });

  expect(button).toBeEnabled();

  fireEvent.click(checkbox);

  expect(button).toBeDisabled();
})

test('button disable color', () => {
  
  render(<ColorButton />)

  const button = screen.getByRole('button', { name: 'Change to blue'});
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });

  expect(button).toHaveStyle({ backgroundColor: 'red' })

  fireEvent.click(checkbox);

  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: 'gray' });
  
})


describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
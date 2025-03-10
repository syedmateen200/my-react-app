import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders welcome message after entering a name", () => {
  render(<App />);

  // Ensure the initial welcome message is displayed
  const welcomeMessage = screen.getByText(/welcome user/i);
  expect(welcomeMessage).toBeInTheDocument();

  // Simulate entering a name in the input field
  const inputElement = screen.getByPlaceholderText(/enter your name/i);
  fireEvent.change(inputElement, { target: { value: "John" } });

  // Ensure the personalized welcome message is displayed
  const personalizedMessage = screen.getByText(
    /hello, john! welcome to the app!/i
  );
  expect(personalizedMessage).toBeInTheDocument();
});

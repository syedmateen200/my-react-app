import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  // Test 1: Renders the initial welcome message
  test("renders initial welcome message", () => {
    render(<App />);

    const welcomeMessage = screen.getByText(/welcome user/i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  // Test 2: Renders input field with placeholder
  test("renders input field with placeholder text", () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText(/enter your name/i);
    expect(inputElement).toBeInTheDocument();
  });

  // Test 3: Shows personalized welcome message when a name is entered
  test("shows personalized welcome message after entering a name", () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText(/enter your name/i);
    fireEvent.change(inputElement, { target: { value: "Alice" } });

    const personalizedMessage = screen.getByText(
      /hello, alice! welcome to the app!/i
    );
    expect(personalizedMessage).toBeInTheDocument();
  });

  // Test 4: Shows no personalized message when the input field is empty
  test("does not show personalized message when no name is entered", () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText(/enter your name/i);
    fireEvent.change(inputElement, { target: { value: "" } });

    const personalizedMessage = screen.queryByText(/hello/i);
    expect(personalizedMessage).not.toBeInTheDocument(); // Should not be displayed
  });

  // Test 5: Failure test case (the message is intentionally wrong to fail)
  // test("fails to show the incorrect personalized message", () => {
  //   render(<App />);

  //   const inputElement = screen.getByPlaceholderText(/enter your name/i);
  //   fireEvent.change(inputElement, { target: { value: "Bob" } });

  //   // This is intentionally incorrect. The correct message should be "Hello, Bob! Welcome to the app!"
  //   const incorrectMessage = screen.getByText(
  //     /hello, bob! welcome to the website!/i
  //   ); // Fail because of "website" instead of "app"
  //   expect(incorrectMessage).toBeInTheDocument(); // This will fail
  // });
});

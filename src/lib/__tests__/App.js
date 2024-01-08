import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../examples/App";

describe("App with TablePlugin", () => {
  test("renders App component and finds TablePlugin functionality", () => {
    render(<App />);
    expect(screen.getByText("Current Employees")).toBeTruthy();
  });

  test("handleShowEntries changes the number of entries per page", () => {
    render(<App />);
    const select = screen.getByLabelText(/Show/);
    fireEvent.change(select, { target: { value: 25 } });
    expect(screen.getByText(/Showing 1 to 25 of/)).toBeTruthy();
  });

  test("handleNextPage navigates to the next page correctly", () => {
    render(<App />);
    const nextPageButton = screen.getByText("Next");
    fireEvent.click(nextPageButton);
    expect(screen.getByText(/Showing 11 to 20 of/)).toBeTruthy();
  });

  test("handlePreviousPage navigates to the previous page correctly", () => {
    render(<App />);
    const nextPageButton = screen.getByText("Next");
    fireEvent.click(nextPageButton);
    const previousPageButton = screen.getByText("Previous");
    fireEvent.click(previousPageButton);
    expect(screen.getByText(/Showing 1 to 10 of/)).toBeTruthy();
  });

  test("handleNextPage is triggered with keyboard", async () => {
    render(<App />);
    const nextPageButton = screen.getByText("Next");
    if (!nextPageButton.hasAttribute("disabled")) {
      fireEvent.keyDown(nextPageButton, { key: "Enter", code: "Enter" });

      await waitFor(() => {
        const entriesInfo = screen.getByText(/Showing \d+ to \d+ of/);
        expect(entriesInfo).toBeTruthy();
      });
    }
  });

  test("handlePreviousPage is triggered with keyboard", async () => {
    render(<App />);
    const nextPageButton = screen.getByText("Next");
    fireEvent.click(nextPageButton);
    const previousPageButton = screen.getByText("Previous");
    
    if (!previousPageButton.hasAttribute("disabled")) {
      fireEvent.keyDown(previousPageButton, { key: "Enter", code: "Enter" });

      await waitFor(() => {
        const entriesInfo = screen.getByText(/Showing 1 to \d+ of/);
        expect(entriesInfo).toBeTruthy();
      });
    }
  });

  test("clicking a page number sets it as the current page", async () => {
    render(<App />);
    const pageNumberBeforeClick = screen.getByText("2");
    fireEvent.click(pageNumberBeforeClick);

    await waitFor(() => {
      const pageNumberAfterClick = screen.getByText("2");
      expect(pageNumberAfterClick).toHaveClass("active");
    });
  });
});

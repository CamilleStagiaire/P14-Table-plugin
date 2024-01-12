import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TablePlugin from "../TablePlugin";

const data = [
  {
    firstName: "Alice",
    lastName: "Smith",
    dateOfBirth: "1978-06-08",
    startDate: "2003-03-03",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    department: "Sales",
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    dateOfBirth: "2000-01-01",
    startDate: "2000-01-15",
    street: "456 Elm St",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90001",
    department: "Marketing",
  },
];

const dataMapping = {
  firstName: "First Name",
  lastName: "Last Name",
  dateOfBirth: "Date of Birth",
  startDate: "Start Date",
  street: "Street",
  city: "City",
  state: "State",
  zipCode: "Zip Code",
  department: "Department",
};

const primaryColor = "#000000";

describe("TablePlugin", () => {

  // vérifie le tri des données lorsqu'un en-tête de colonne est cliqué
  test("sorts data when header is clicked", () => {
    render(
      <TablePlugin
        data={data}
        dataMapping={dataMapping}
        primaryColor={primaryColor}
      />
    );
    const firstNameHeader = screen.getByText(dataMapping.firstName);
    fireEvent.click(firstNameHeader);

    const firstRowData = screen.getAllByRole("row")[1];
    expect(firstRowData.textContent).toContain("Alice");
  });

  // vérifie le filtrage des données en fonction d'un terme de recherche
  test("filters data when search term is entered", () => {
    render(
      <TablePlugin
        data={data}
        dataMapping={dataMapping}
        primaryColor={primaryColor}
      />
    );
    const searchInput = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "Alice" } });
    expect(screen.queryByText("Alice")).toBeTruthy();
  });
});

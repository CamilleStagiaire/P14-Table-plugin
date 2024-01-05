import React from "react";
import "./App.css";

import TablePlugin from "../TablePlugin";

function App() {

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

  function generateRandomEmployee() {
    const firstNames = [ "alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Helen", "John", "Jeanne" ];
    const lastNames = [  "smith",  "Johnson", "Brown", "Lee", "Wilson", "Davis", "Taylor", "Evans", "Dupond", "Durand" ];
    const departments = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"];
    const cities = [ "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "San Francisco", "Detroit", "Whashington", "Boston", "Miami" ];
    const states = [ "illinois", "California", "Texas", "Florida", "Arizona", "Hawaii", "Wyoming", "Idaho", "Guam", "Delaware" ];
    const dateOfBirth = ['08/06/1978', '01/01/2000', '25/01/1972', '02/02/2002', '17/03/2003' ]
    const startDate = [ '03/03/2003', '15/01/2000', '04/04/2004', '30/11/2011',  '05/05/2005' ]

    const randomFirstName =
      firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName =
      lastNames[Math.floor(Math.random() * lastNames.length)];

      const randomDateOfBirth = dateOfBirth[Math.floor(Math.random() * dateOfBirth.length)];
      const randomStartDate = startDate[Math.floor(Math.random() * startDate.length)];

    const randomStreet = `${Math.floor(Math.random() * 1000) + 1} Main St`;
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomState = states[Math.floor(Math.random() * states.length)];
    const randomZipCode = `${Math.floor(Math.random() * 90000) + 10000}`;
    const randomDepartment =
      departments[Math.floor(Math.random() * departments.length)];

    return {
      firstName: randomFirstName,
      lastName: randomLastName,
      dateOfBirth: randomDateOfBirth,
      startDate: randomStartDate,
      street: randomStreet,
      city: randomCity,
      state: randomState,
      zipCode: randomZipCode,
      department: randomDepartment,
    };
  }

  const employees = [];

  for (let i = 1; i <= 20; i++) {
    employees.push(generateRandomEmployee(i));
  }

  const primaryColor = "#00000";

  return (
    <main className="employees">
      <div className="container">
        <h1>Current Employees</h1>
        <TablePlugin data={employees} dataMapping={dataMapping} primaryColor = {primaryColor}/>
      </div>
    </main>
  );
}

export default App;

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

  function generateRandomDate(start, end) {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  }

  function generateRandomEmployee(id) {
    const firstNames = [ "Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Helen", "John", "Jeanne",
    ];
    const lastNames = [  "Smith",  "Johnson", "Brown", "Lee", "Wilson", "Davis", "Taylor", "Evans", "Dupond", "Durand",
    ];
    const departments = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"];
    const cities = [ "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "San Francisco", "Détroit", "Whashington", "Boston", "Miami", ];
    const states = [ "Illinois", "California", "Texas", "Florida", "Arizona", "Hawaii", "Wyoming", "Idaho", "Guam", "Delaware", ];
    const randomFirstName =
      firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName =
      lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomDateOfBirth = generateRandomDate(
      new Date(1970, 0, 1),
      new Date(2000, 11, 31)
    )
      .toISOString()
      .split("T")[0];
    const randomStartDate = generateRandomDate(new Date(2000, 0, 1), new Date())
      .toISOString()
      .split("T")[0];
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

  for (let i = 1; i <= 50; i++) {
    employees.push(generateRandomEmployee(i));
  }

  return (
    <main className="employees">
      <div className="container">
        <h1>Current Employees</h1>
        <TablePlugin data={employees} dataMapping={dataMapping} />
      </div>
    </main>
  );
}


export default App;

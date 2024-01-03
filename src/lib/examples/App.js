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
    const firstNames = [ "Alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Helen", "John", "Jeanne",
    ];
    const lastNames = [  "Smith",  "Johnson", "Brown", "Lee", "Wilson", "Davis", "Taylor", "Evans", "Dupond", "Durand",
    ];
    const departments = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"];
    const cities = [ "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "San Francisco", "Detroit", "Whashington", "Boston", "Miami", ];
    const states = [ "Illinois", "California", "Texas", "Florida", "Arizona", "Hawaii", "Wyoming", "Idaho", "Guam", "Delaware", ];
    const dateOfBirth = ['1978-06-08', '2000-01-01', '1972-01-25', '2002-02-02', '2003-03-17' ]
    const startDate = [ '2003-03-03', '2000-01-15', '2004-04-04', '2004-04-04',  '2005-05-05' ]

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

  for (let i = 1; i <= 50; i++) {
    employees.push(generateRandomEmployee(i));
  }

  const primaryColor = "#5a6f08";

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

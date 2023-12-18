

import  TablePlugin  from "../TablePlugin";

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

  const employees = [
    {
      firstName: "Alice",
      lastName: "Smith",
      dateOfBirth: "1990-03-15",
      startDate: "2021-05-10",
      street: "123 Main St",
      city: "New York",
      state: "New York",
      zipCode: "10001",
      department: "Marketing",
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      dateOfBirth: "1985-08-22",
      startDate: "2020-12-05",
      street: "456 Elm St",
      city: "Los Angeles",
      state: "California",
      zipCode: "90001",
      department: "Sales",
    },
  ];
  
  console.log('employees in App:', employees);
  console.log('dataMapping in App:', dataMapping);
  
  return (
    <div className="App">
    <TablePlugin data={employees} dataMapping={dataMapping} />
  
    </div>
  );
}

export default App;

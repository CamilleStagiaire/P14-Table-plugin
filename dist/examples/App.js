"use strict";

var _interopRequireDefault = require("C:/Users/Camille/Desktop/P14/table-plugin/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./App.css");
var _TablePlugin = _interopRequireDefault(require("../TablePlugin"));
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
    department: "Department"
  };
  function generateRandomEmployee() {
    const firstNames = ["alice", "Bob", "Charlie", "David", "Eva", "Frank", "Grace", "Helen", "John", "Jeanne"];
    const lastNames = ["smith", "Johnson", "Brown", "Lee", "Wilson", "Davis", "Taylor", "Evans", "Dupond", "Durand"];
    const departments = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"];
    const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "San Francisco", "Detroit", "Whashington", "Boston", "Miami"];
    const streets = ["4394 Rockwell Lane", "test de rue", "120 Rhode Island Avenue", "2223 Washington Street", "Le village", "rue du centre", "316 North Avenue"];
    const states = ["illinois", "California", "Texas", "Florida", "Arizona", "Hawaii", "Wyoming", "Idaho", "Guam", "Delaware"];
    const dateOfBirth = ['08/06/1978', '01/01/2000', '25/01/1972', '02/02/2002', '17/03/2003'];
    const startDate = ['03/03/2003', '15/01/2000', '04/04/2004', '30/11/2011', '05/05/2005'];
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomDateOfBirth = dateOfBirth[Math.floor(Math.random() * dateOfBirth.length)];
    const randomStartDate = startDate[Math.floor(Math.random() * startDate.length)];
    const randomStreet = streets[Math.floor(Math.random() * streets.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomState = states[Math.floor(Math.random() * states.length)];
    const randomZipCode = "".concat(Math.floor(Math.random() * 90000) + 10000);
    const randomDepartment = departments[Math.floor(Math.random() * departments.length)];
    return {
      firstName: randomFirstName,
      lastName: randomLastName,
      dateOfBirth: randomDateOfBirth,
      startDate: randomStartDate,
      street: randomStreet,
      city: randomCity,
      state: randomState,
      zipCode: randomZipCode,
      department: randomDepartment
    };
  }
  const employees = [];
  for (let i = 1; i <= 50; i++) {
    employees.push(generateRandomEmployee(i));
  }
  const primaryColor = "#00000";
  return /*#__PURE__*/_react.default.createElement("main", {
    className: "employees"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Current Employees"), /*#__PURE__*/_react.default.createElement(_TablePlugin.default, {
    data: employees,
    dataMapping: dataMapping,
    primaryColor: primaryColor
  })));
}
var _default = exports.default = App;
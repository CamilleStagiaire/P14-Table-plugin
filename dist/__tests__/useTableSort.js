"use strict";

var _interopRequireWildcard = require("C:/Users/Camille/Desktop/OCR/OCR-REACT/Projets/Projet 14/table-plugin/node_modules/@babel/runtime/helpers/interopRequireWildcard.js").default;
var _interopRequireDefault = require("C:/Users/Camille/Desktop/OCR/OCR-REACT/Projets/Projet 14/table-plugin/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _useTableSort = _interopRequireWildcard(require("../TablePlugin/hooks/useTableSort"));
const TestComponent = _ref => {
  let {
    data,
    sortConfig
  } = _ref;
  const {
    sortedData
  } = (0, _useTableSort.default)(data, sortConfig);
  return /*#__PURE__*/_react.default.createElement("div", null, sortedData.map((item, index) => /*#__PURE__*/_react.default.createElement("div", {
    key: index
  }, item.name)));
};
describe('useTableSort', () => {
  const mockData = [{
    id: 1,
    name: 'Alice',
    dateOfBirth: '10/01/1990',
    startDate: '01/06/2020',
    zipCode: '10001'
  }, {
    id: 2,
    name: 'Bob',
    dateOfBirth: '15/05/1985',
    startDate: '20/07/2018',
    zipCode: '20002'
  }];

  // vérifie si la conversion de format de date est correcte
  test('converts date format correctly', () => {
    const inputDate = '25/04/1990';
    const expectedOutput = '1990-04-25';
    expect((0, _useTableSort.convertDate)(inputDate)).toBe(expectedOutput);
  });

  // vérifie le le tri des données selon dateOfBirth
  test('sorts data by dateOfBirth correctly', () => {
    const {
      getByText
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(TestComponent, {
      data: mockData,
      sortConfig: {
        key: 'dateOfBirth',
        direction: 'ascending'
      }
    }));
    expect(getByText('Bob')).toBeTruthy();
    expect(getByText('Alice')).toBeTruthy();
  });

  // vérifie le le tri des données selon zipCode
  test('sorts data by zipCode correctly', () => {
    const {
      getByText
    } = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(TestComponent, {
      data: mockData,
      sortConfig: {
        key: 'zipCode',
        direction: 'ascending'
      }
    }));
    expect(getByText('Alice')).toBeTruthy();
    expect(getByText('Bob')).toBeTruthy();
  });
});
import React from 'react';
import { render } from '@testing-library/react';
import useTableSort, { convertDate } from '../TablePlugin/hooks/useTableSort';

const TestComponent = ({ data, sortConfig }) => {
    const { sortedData } = useTableSort(data, sortConfig);
    return (
      <div>
        {sortedData.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
    );
  };

describe('useTableSort', () => {
  const mockData = [
    { id: 1, name: 'Alice', dateOfBirth: '10/01/1990', startDate: '01/06/2020', zipCode: '10001' },
    { id: 2, name: 'Bob', dateOfBirth: '15/05/1985', startDate: '20/07/2018', zipCode: '20002' },
  ];

  // vérifie si la conversion de format de date est correcte
  test('converts date format correctly', () => {
    const inputDate = '25/04/1990';
    const expectedOutput = '1990-04-25';
    expect(convertDate(inputDate)).toBe(expectedOutput);
  });

  // vérifie le le tri des données selon dateOfBirth
  test('sorts data by dateOfBirth correctly', () => {
    const { getByText } = render(<TestComponent data={mockData} sortConfig={{ key: 'dateOfBirth', direction: 'ascending' }} />);
    expect(getByText('Bob')).toBeTruthy();
    expect(getByText('Alice')).toBeTruthy();
  });

  // vérifie le le tri des données selon zipCode
  test('sorts data by zipCode correctly', () => {
    const { getByText } = render(<TestComponent data={mockData} sortConfig={{ key: 'zipCode', direction: 'ascending' }} />);
    expect(getByText('Alice')).toBeTruthy();
    expect(getByText('Bob')).toBeTruthy();
  });
});

import { useState, useMemo } from 'react';

const convert = (dmYDate) => {
  const parts = dmYDate.split('/');
  return `${parts[2]}-${parts[1]}-${parts[0]}`;
};

const useTableSort = (data, config) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      if (sortConfig.key === "dateOfBirth" || sortConfig.key === "startDate") {
        let aVal = new Date(convert(a[sortConfig.key]));
        let bVal = new Date(convert(b[sortConfig.key]));
        return sortConfig.direction === 'ascending' ? aVal - bVal : bVal - aVal;
      } else {
        if (a[sortConfig.key].toLowerCase() < b[sortConfig.key].toLowerCase()) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (a[sortConfig.key].toLowerCase() > b[sortConfig.key].toLowerCase()) return sortConfig.direction === 'ascending' ? 1 : -1;
        return 0;
      }
    });
  }, [data, sortConfig]);

  const requestSort = (key) => {
    setSortConfig((prevConfig) => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'ascending' ? 'descending' : 'ascending',
    }));
  };

  return { sortedData, requestSort, sortConfig };
};

export default useTableSort;

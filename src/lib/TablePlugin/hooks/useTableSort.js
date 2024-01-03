import { useState, useMemo } from 'react';

const useTableSort = (data, config) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      if (sortConfig.key === "dateOfBirth" || sortConfig.key === "startDate") {
        let aVal = new Date(a[sortConfig.key]);
        let bVal = new Date(b[sortConfig.key]);
        return sortConfig.direction === 'ascending' ? aVal - bVal : bVal - aVal;
      } else {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
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
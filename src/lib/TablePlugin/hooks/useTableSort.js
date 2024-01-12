import { useState, useMemo } from 'react';

export const convertDate = (dmYDate) => {
  const parts = dmYDate.split('/');
  return `${parts[2]}-${parts[1]}-${parts[0]}`;
};

const extractNumbers = (str) => {
  const match = str.match(/^(\d+)/);
  return match ? parseInt(match[0], 10) : null;
};

const useTableSort = (data, config) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedData = useMemo(() => {
    const sorter = (a, b) => {
      let aVal = a[sortConfig.key];
      let bVal = b[sortConfig.key];

      if (sortConfig.key === "dateOfBirth" || sortConfig.key === "startDate") {
        aVal = new Date(convertDate(aVal));
        bVal = new Date(convertDate(bVal));
        return sortConfig.direction === 'ascending' ? aVal - bVal : bVal - aVal;
      } else {
        const aNum = extractNumbers(aVal);
        const bNum = extractNumbers(bVal);

        if (aNum !== null && bNum !== null) {
          if (aNum !== bNum) {
            return sortConfig.direction === 'ascending' ? aNum - bNum : bNum - aNum;
          }
        }

        aVal = aVal.toLowerCase();
        bVal = bVal.toLowerCase();
        if (aVal < bVal) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === 'ascending' ? 1 : -1;
        return 0;
      }
    };

    return [...data].sort(sorter);
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

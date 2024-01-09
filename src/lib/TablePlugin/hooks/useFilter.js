import { useMemo } from 'react';

const useFilter = (data, searchTerm) => {
  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    return data.filter(item =>
      Object.keys(item).some(key =>
        key !== '_id' && item[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  console.log(filteredData);

  return filteredData;
};

export default useFilter;


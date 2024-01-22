import { useMemo } from 'react';

/**
 * Hook personnalisé pour filtrer des données en fonction d'un terme de recherche.
 * @param {Array} data 
 * @param {string} searchTerm
 * @returns {Array}
 */
const useFilter = (data, searchTerm) => {
  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    return data.filter(item =>
      Object.keys(item).some(key =>
        key !== '_id' && item[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  return filteredData;
};

export default useFilter;

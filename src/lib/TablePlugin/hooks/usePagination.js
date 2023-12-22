import { useState, useMemo } from 'react';

const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = useMemo(() => Math.ceil(data.length / itemsPerPage), [data.length, itemsPerPage]);
  const totalEntries = data.length; 

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  }, [data, currentPage, itemsPerPage]);

  const startEntry = totalEntries === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endEntry = totalEntries === 0 ? 0 : Math.min(currentPage * itemsPerPage, totalEntries);


  const paginate = (page) => {setCurrentPage(page)};

  const pageNumbers = Array.from({ length: maxPage }, (_, i) => i + 1);
  const handlePreviousPage = () => paginate(Math.max(currentPage - 1, 1));
  const handleNextPage = () => paginate(Math.min(currentPage + 1, maxPage));

  return { currentData, paginate, currentPage, maxPage, startEntry, endEntry, totalEntries, pageNumbers, handlePreviousPage, handleNextPage };
};

export default usePagination;

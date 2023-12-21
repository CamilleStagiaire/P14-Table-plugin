import React, { useState, useMemo } from "react";
import chevronUp from "./assets/chevronUp.svg";
import chevronDown from "./assets/chevronDown.svg";
import "./style.css";

const TablePlugin = ({ data, dataMapping }) => {
  const [sortConfig, setSortConfig] = useState({
    key: "lastName",
    direction: "ascending",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      return Object.keys(dataMapping).some((key) => {
        return item[key]
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
    });
  }, [data, searchTerm, dataMapping]);

  const sortedData = useMemo(() => {
    let sortableItems = [...filteredData];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        const directionMultiplier =
          sortConfig.direction === "ascending" ? 1 : -1;
        return aValue < bValue
          ? directionMultiplier * -1
          : directionMultiplier * 1;
      });
    }
    return sortableItems;
  }, [filteredData, sortConfig]);

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = sortedData.slice(indexOfFirstEntry, indexOfLastEntry);

  const requestSort = (key) => {
    setSortConfig({
      key,
      direction:
        sortConfig?.key === key && sortConfig.direction === "ascending"
          ? "descending"
          : "ascending",
    });
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sortedData.length / entriesPerPage); i++) {
    pageNumbers.push(i);
  }

  const totalEntries = sortedData.length;
  const startEntry = indexOfFirstEntry + 1;
  const endEntry = Math.min(startEntry + entriesPerPage - 1, totalEntries);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pageNumbers.length));
  };

  return (
 
      <div className="container-layout">
        <div className="select">
          <label>
          <span>Show </span>
            <select
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(Number(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span> entries</span>
          </label>
          <label>
          <span>Search: </span>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
        </div>
        <table className="container-layout table">
          <thead>
            <tr className="list-header">
              {Object.keys(dataMapping).map((key) => (
                <th key={key} onClick={() => requestSort(key)}>
                  {dataMapping[key]}
                  <div className="chevron-container">
                    <img
                      src={chevronUp}
                      alt="Asc"
                      className={`ascending ${
                        sortConfig &&
                        sortConfig.key === key &&
                        sortConfig.direction === "ascending"
                          ? "active"
                          : ""
                      }`}
                    />
                    <img
                      src={chevronDown}
                      alt="Desc"
                      className={`descending ${
                        sortConfig &&
                        sortConfig.key === key &&
                        sortConfig.direction === "descending"
                          ? "active"
                          : ""
                      }`}
                    />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentEntries.map((item, index) => (
              <tr className="list-body" key={index}>
                {Object.keys(dataMapping).map((key, cellIndex) => (
                  <td key={cellIndex}>{item[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
        <span>
          Showing {startEntry} to {endEntry} of {totalEntries} entries
        </span>
        <div className="pages">
          <span onClick={handlePreviousPage} disabled={currentPage === 1}>Previous </span>
          {pageNumbers.map((number) => (
            <button key={number} onClick={() => setCurrentPage(number)} className={number === currentPage ? 'active' : ''}>
              {number}
            </button>
          ))}
          <span onClick={handleNextPage} disabled={currentPage === pageNumbers.length}> Next</span>
        </div>
      </div>
      </div>

  );
};

export default TablePlugin;

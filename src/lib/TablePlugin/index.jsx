import React, { useState, useMemo, useCallback } from "react";
import chevronUp from "./assets/chevronUp.svg";
import chevronDown from "./assets/chevronDown.svg";
import useFilter from "./hooks/useFilter";
import usePagination from "./hooks/usePagination";
import useTableSort from "./hooks/useTableSort";
import hexToRgb from "./utils/hexToRgb";
import getStyleFunction from "./utils/getStyle";
import "./styles.css";

/**
 * Composant TablePlugin 
 * @param {Array} props.data
 * @param {Object} props.dataMapping
 * @param {String} props.primaryColor
 * @returns {React.Element}
 */
const TablePlugin = ({ data, dataMapping, primaryColor }) => {
 
  const { r, g, b } = useMemo(() => hexToRgb(primaryColor), [primaryColor]);
  const getStyle = useCallback(
    (isSorted, isOddRow, selectPagination) => { return getStyleFunction(r, g, b)(isSorted, isOddRow, selectPagination); }, [r, g, b] );

  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const filteredData = useFilter(data, searchTerm);
  const { sortedData, requestSort, sortConfig } = useTableSort(filteredData, { key: "lastName", direction: "ascending" });
  const { currentData, paginate, currentPage, startEntry, endEntry, totalEntries, pageNumbers, handlePreviousPage, handleNextPage } = usePagination(sortedData, entriesPerPage );

  /**
   * Gère le changement du nombre d'entrées à afficher par page.
   * @param {Event} e
   */
 const handleShowEntries = (e) =>{
  setEntriesPerPage(Number(e.target.value))
  paginate(1)
 }
 
  return (
    <div className="container-layout">
      <div
        className="select"
        style={getStyle(false, false, "selectPagination")}
      >
        <label>
          <span>Show </span>
          <select
            value={entriesPerPage}
            onChange={(e) => handleShowEntries(e)}
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
              <th
                key={key}
                onClick={() => requestSort(key)}
                className={`${sortConfig.key === key ? "sorted" : ""} ${key}`}
                style={getStyle(sortConfig.key === key, false)}
              >
                {dataMapping[key]}
                <div className="chevron-container">
                  <img
                    src={chevronUp}
                    alt="Asc"
                    className={`ascending ${
                      sortConfig &&
                      sortConfig.key === key &&
                      sortConfig.direction === "ascending" ? "active": "" }`}
                  />
                  <img
                    src={chevronDown}
                    alt="Desc"
                    className={`descending ${
                      sortConfig &&
                      sortConfig.key === key &&
                      sortConfig.direction === "descending" ? "active" : "" }`}
                  />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr
              key={index}
              className="list-body"
              style={getStyle(false, index % 2 !== 0)}
            >
              {Object.keys(dataMapping).map((key, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`${sortConfig.key === key ? "sorted" : ""} ${key}`}
                  style={getStyle(sortConfig.key === key, false)}
                >
                  {item[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className="pagination"
        style={getStyle(false, false, "selectPagination")}
      >
        <span>
          Showing {startEntry} to {endEntry} of {totalEntries} entries
        </span>
        <div className="pages">
          <span
            onClick={handlePreviousPage}
            onKeyDown={(e) => e.key === "Enter" && handlePreviousPage()}
            disabled={currentPage === 1}
            tabIndex="0"
          >
            Previous
          </span>
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`button ${number === currentPage ? "active" : ""}`}
            >
              {number}
            </button>
          ))}
          <span
            onClick={handleNextPage}
            onKeyDown={(e) => e.key === "Enter" && handleNextPage()}
            disabled={currentPage === pageNumbers.length}
            tabIndex="0"
          >
            Next
          </span>
        </div>
      </div>
    </div>
  );
};
export default TablePlugin;

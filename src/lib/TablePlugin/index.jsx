import "./style.css";
import chevronUp from "./assets/chevronUp.svg";
import chevronDown from "./assets/chevronDown.svg";
import React, { useState, useMemo } from "react";

const TablePlugin = ({ data, dataMapping }) => {
  const [sortConfig, setSortConfig] = useState(null);

  const sortedData = useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        const directionMultiplier =
          sortConfig.direction === "ascending" ? 1 : -1;
        if (aValue < bValue) {
          return directionMultiplier * -1;
        }
        if (aValue > bValue) {
          return directionMultiplier * 1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const requestSort = (key) => {
    setSortConfig({
      key,
      direction:
        sortConfig?.key === key && sortConfig.direction === "ascending"
          ? "descending"
          : "ascending",
    });
  };

  return (
    <table className="table">
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
        {sortedData.map((item, index) => (
          <tr className="list-body" key={index}>
            {Object.keys(dataMapping).map((key, cellIndex) => (
              <td key={cellIndex}>{item[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablePlugin;

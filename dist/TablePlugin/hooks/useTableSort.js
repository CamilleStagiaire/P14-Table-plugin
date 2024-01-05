"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
const convert = dmYDate => {
  const parts = dmYDate.split('/');
  return "".concat(parts[2], "-").concat(parts[1], "-").concat(parts[0]);
};
const useTableSort = (data, config) => {
  const [sortConfig, setSortConfig] = (0, _react.useState)(config);
  const sortedData = (0, _react.useMemo)(() => {
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
  const requestSort = key => {
    setSortConfig(prevConfig => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'ascending' ? 'descending' : 'ascending'
    }));
  };
  return {
    sortedData,
    requestSort,
    sortConfig
  };
};
var _default = exports.default = useTableSort;
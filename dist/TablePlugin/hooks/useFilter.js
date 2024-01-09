"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
const useFilter = (data, searchTerm) => {
  const filteredData = (0, _react.useMemo)(() => {
    if (!searchTerm) return data;
    return data.filter(item => Object.keys(item).some(key => key !== '_id' && item[key].toString().toLowerCase().includes(searchTerm.toLowerCase())));
  }, [data, searchTerm]);
  return filteredData;
};
var _default = exports.default = useFilter;
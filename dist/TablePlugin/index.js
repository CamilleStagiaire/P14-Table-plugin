"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _chevronUp = _interopRequireDefault(require("./assets/chevronUp.svg"));
var _chevronDown = _interopRequireDefault(require("./assets/chevronDown.svg"));
var _useFilter = _interopRequireDefault(require("./hooks/useFilter"));
var _usePagination = _interopRequireDefault(require("./hooks/usePagination"));
var _useTableSort = _interopRequireDefault(require("./hooks/useTableSort"));
var _hexToRgb = _interopRequireDefault(require("./utils/hexToRgb"));
var _getStyle = _interopRequireDefault(require("./utils/getStyle"));
require("./styles.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const TablePlugin = _ref => {
  let {
    data,
    dataMapping,
    primaryColor
  } = _ref;
  const {
    r,
    g,
    b
  } = (0, _react.useMemo)(() => (0, _hexToRgb.default)(primaryColor), [primaryColor]);
  const getStyle = (0, _react.useCallback)((isSorted, isOddRow, selectPagination) => {
    return (0, _getStyle.default)(r, g, b)(isSorted, isOddRow, selectPagination);
  }, [r, g, b]);
  const [searchTerm, setSearchTerm] = (0, _react.useState)("");
  const [entriesPerPage, setEntriesPerPage] = (0, _react.useState)(10);
  const filteredData = (0, _useFilter.default)(data, searchTerm);
  const {
    sortedData,
    requestSort,
    sortConfig
  } = (0, _useTableSort.default)(filteredData, {
    key: "lastName",
    direction: "ascending"
  });
  const {
    currentData,
    paginate,
    currentPage,
    startEntry,
    endEntry,
    totalEntries,
    pageNumbers,
    handlePreviousPage,
    handleNextPage
  } = (0, _usePagination.default)(sortedData, entriesPerPage);
  (0, _react.useEffect)(() => {
    paginate(1);
  }, [entriesPerPage, paginate]);
  (0, _react.useEffect)(() => {
    paginate(1);
  }, [searchTerm, paginate]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container-layout"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "select",
    style: getStyle(false, false, "selectPagination")
  }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("span", null, "Show "), /*#__PURE__*/_react.default.createElement("select", {
    value: entriesPerPage,
    onChange: e => setEntriesPerPage(Number(e.target.value))
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: 10
  }, "10"), /*#__PURE__*/_react.default.createElement("option", {
    value: 25
  }, "25"), /*#__PURE__*/_react.default.createElement("option", {
    value: 50
  }, "50"), /*#__PURE__*/_react.default.createElement("option", {
    value: 100
  }, "100")), /*#__PURE__*/_react.default.createElement("span", null, " entries")), /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("span", null, "Search: "), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    placeholder: "Search...",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value)
  }))), /*#__PURE__*/_react.default.createElement("table", {
    className: "container-layout table"
  }, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", {
    className: "list-header"
  }, Object.keys(dataMapping).map(key => /*#__PURE__*/_react.default.createElement("th", {
    key: key,
    onClick: () => requestSort(key),
    className: sortConfig.key === key ? "sorted" : "",
    style: getStyle(sortConfig.key === key, false)
  }, dataMapping[key], /*#__PURE__*/_react.default.createElement("div", {
    className: "chevron-container"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _chevronUp.default,
    alt: "Asc",
    className: "ascending ".concat(sortConfig && sortConfig.key === key && sortConfig.direction === "ascending" ? "active" : "")
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: _chevronDown.default,
    alt: "Desc",
    className: "descending ".concat(sortConfig && sortConfig.key === key && sortConfig.direction === "descending" ? "active" : "")
  })))))), /*#__PURE__*/_react.default.createElement("tbody", null, currentData.map((item, index) => /*#__PURE__*/_react.default.createElement("tr", {
    key: index,
    className: "list-body",
    style: getStyle(false, index % 2 !== 0)
  }, Object.keys(dataMapping).map((key, cellIndex) => /*#__PURE__*/_react.default.createElement("td", {
    key: cellIndex,
    className: sortConfig.key === key ? "sorted" : "",
    style: getStyle(sortConfig.key === key, false)
  }, item[key])))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination",
    style: getStyle(false, false, "selectPagination")
  }, /*#__PURE__*/_react.default.createElement("span", null, "Showing ", startEntry, " to ", endEntry, " of ", totalEntries, " entries"), /*#__PURE__*/_react.default.createElement("div", {
    className: "pages"
  }, /*#__PURE__*/_react.default.createElement("span", {
    onClick: handlePreviousPage,
    onKeyDown: e => e.key === "Enter" && handlePreviousPage(),
    disabled: currentPage === 1,
    tabIndex: "0"
  }, "Previous"), pageNumbers.map(number => /*#__PURE__*/_react.default.createElement("button", {
    key: number,
    onClick: () => paginate(number),
    className: number === currentPage ? "active" : ""
  }, number)), /*#__PURE__*/_react.default.createElement("span", {
    onClick: handleNextPage,
    onKeyDown: e => e.key === "Enter" && handleNextPage(),
    disabled: currentPage === pageNumbers.length,
    tabIndex: "0"
  }, "Next"))));
};
var _default = exports.default = TablePlugin;
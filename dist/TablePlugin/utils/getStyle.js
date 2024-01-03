"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const getStyleFunction = (r, g, b) => (isSorted, isOddRow, selectPagination) => {
  let backgroundColor;
  if (isSorted || isOddRow) {
    backgroundColor = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", 0.1)");
  } else if (selectPagination) {
    backgroundColor = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", 0.9)");
  }
  return {
    backgroundColor
  };
};
var _default = exports.default = getStyleFunction;
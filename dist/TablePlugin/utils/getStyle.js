"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Fonction pour gérer le style
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @returns {Function}
 */
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
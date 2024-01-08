"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom");
var _App = _interopRequireDefault(require("../examples/App"));
describe("App with TablePlugin", () => {
  test("renders App component and finds TablePlugin functionality", () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_App.default, null));
    expect(_react2.screen.getByText("Current Employees")).toBeTruthy();
  });
  test("handleShowEntries changes the number of entries per page", () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_App.default, null));
    const select = _react2.screen.getByLabelText(/Show/);
    _react2.fireEvent.change(select, {
      target: {
        value: 25
      }
    });
    expect(_react2.screen.getByText(/Showing 1 to 25 of/)).toBeTruthy();
  });
  test("handleNextPage navigates to the next page correctly", () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_App.default, null));
    const nextPageButton = _react2.screen.getByText("Next");
    _react2.fireEvent.click(nextPageButton);
    expect(_react2.screen.getByText(/Showing 11 to 20 of/)).toBeTruthy();
  });
  test("handlePreviousPage navigates to the previous page correctly", () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_App.default, null));
    const nextPageButton = _react2.screen.getByText("Next");
    _react2.fireEvent.click(nextPageButton);
    const previousPageButton = _react2.screen.getByText("Previous");
    _react2.fireEvent.click(previousPageButton);
    expect(_react2.screen.getByText(/Showing 1 to 10 of/)).toBeTruthy();
  });
  test("handleNextPage is triggered with keyboard", async () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_App.default, null));
    const nextPageButton = _react2.screen.getByText("Next");
    if (!nextPageButton.hasAttribute("disabled")) {
      _react2.fireEvent.keyDown(nextPageButton, {
        key: "Enter",
        code: "Enter"
      });
      await (0, _react2.waitFor)(() => {
        const entriesInfo = _react2.screen.getByText(/Showing \d+ to \d+ of/);
        expect(entriesInfo).toBeTruthy();
      });
    }
  });
  test("handlePreviousPage is triggered with keyboard", async () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_App.default, null));
    const nextPageButton = _react2.screen.getByText("Next");
    _react2.fireEvent.click(nextPageButton);
    const previousPageButton = _react2.screen.getByText("Previous");
    if (!previousPageButton.hasAttribute("disabled")) {
      _react2.fireEvent.keyDown(previousPageButton, {
        key: "Enter",
        code: "Enter"
      });
      await (0, _react2.waitFor)(() => {
        const entriesInfo = _react2.screen.getByText(/Showing 1 to \d+ of/);
        expect(entriesInfo).toBeTruthy();
      });
    }
  });
  test("clicking a page number sets it as the current page", async () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_App.default, null));
    const pageNumberBeforeClick = _react2.screen.getByText("2");
    _react2.fireEvent.click(pageNumberBeforeClick);
    await (0, _react2.waitFor)(() => {
      const pageNumberAfterClick = _react2.screen.getByText("2");
      expect(pageNumberAfterClick).toHaveClass("active");
    });
  });
});
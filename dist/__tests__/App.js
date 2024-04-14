"use strict";

var _interopRequireDefault = require("C:/Users/Camille/Desktop/OCR/OCR-REACT/Projets/Projet 14/table-plugin/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom");
var _App = _interopRequireDefault(require("../examples/App"));
describe("App with TablePlugin", () => {
  // vérifie que le composant TablePlugin est rendu correctement
  test("renders App component and finds TablePlugin functionality", () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_App.default, null));
    expect(_react2.screen.getByText("Current Employees")).toBeTruthy();
  });

  // vérifie si le changement du nombre d'entrées par page fonctionne
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

  // vérifie handleNextPage navigue correctement vers la page suivante
  test("handleNextPage navigates to the next page correctly", () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_App.default, null));
    const nextPageButton = _react2.screen.getByText("Next");
    _react2.fireEvent.click(nextPageButton);
    expect(_react2.screen.getByText(/Showing 11 to 20 of/)).toBeTruthy();
  });

  // vérifie handlePreviousPage navigue correctement vers la page suivante
  test("handlePreviousPage navigates to the previous page correctly", () => {
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_App.default, null));
    const nextPageButton = _react2.screen.getByText("Next");
    _react2.fireEvent.click(nextPageButton);
    const previousPageButton = _react2.screen.getByText("Previous");
    _react2.fireEvent.click(previousPageButton);
    expect(_react2.screen.getByText(/Showing 1 to 10 of/)).toBeTruthy();
  });

  // vérifie que handleNextPage est déclenché par le clavier
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

  // vérifie que handlePreviousPage est déclenché par le clavier
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

  // vérifie si le clic sur un numéro de page le définit comme page courante
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
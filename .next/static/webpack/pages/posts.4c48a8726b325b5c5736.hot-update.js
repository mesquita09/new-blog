webpackHotUpdate_N_E("pages/posts",{

/***/ "./src/components/Date.tsx":
/*!*********************************!*\
  !*** ./src/components/Date.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Date; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\nvar _jsxFileName = \"/home/adelson/dev/new-blog/src/components/Date.tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction Date(_ref) {\n  var date = _ref.date;\n  return __jsx(\"time\", {\n    dateTime: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"formatISO\"])(date),\n    className: \"jsx-1309027044\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    className: \"jsx-1309027044\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"format\"])(date, \"LLLL d, yyyy\")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"1309027044\",\n    __self: this\n  }, \"span.jsx-1309027044{color:#f8f8f2;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkZWxzb24vZGV2L25ldy1ibG9nL3NyYy9jb21wb25lbnRzL0RhdGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVTLEFBRzJCLGNBQ2hCIiwiZmlsZSI6Ii9ob21lL2FkZWxzb24vZGV2L25ldy1ibG9nL3NyYy9jb21wb25lbnRzL0RhdGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0LCBmb3JtYXRJU08gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgZGF0ZTogRGF0ZTtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlKHsgZGF0ZSB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDx0aW1lIGRhdGVUaW1lPXtmb3JtYXRJU08oZGF0ZSl9PlxuICAgICAgPHNwYW4+e2Zvcm1hdChkYXRlLCBcIkxMTEwgZCwgeXl5eVwiKX08L3NwYW4+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6ICNmOGY4ZjI7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L3RpbWU+XG4gICk7XG59XG4iXX0= */\\n/*@ sourceURL=/home/adelson/dev/new-blog/src/components/Date.tsx */\"));\n}\n_c = Date;\n\nvar _c;\n\n$RefreshReg$(_c, \"Date\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGF0ZS50c3g/ZjMzYiJdLCJuYW1lcyI6WyJEYXRlIiwiZGF0ZSIsImZvcm1hdElTTyIsImZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUtlLFNBQVNBLElBQVQsT0FBK0I7QUFBQSxNQUFmQyxJQUFlLFFBQWZBLElBQWU7QUFDNUMsU0FDRTtBQUFNLFlBQVEsRUFBRUMsMERBQVMsQ0FBQ0QsSUFBRCxDQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT0UsdURBQU0sQ0FBQ0YsSUFBRCxFQUFPLGNBQVAsQ0FBYixDQURGO0FBQUE7QUFBQTtBQUFBLDg3QkFERjtBQVlEO0tBYnVCRCxJIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvRGF0ZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXQsIGZvcm1hdElTTyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG50eXBlIFByb3BzID0ge1xuICBkYXRlOiBEYXRlO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGUoeyBkYXRlIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHRpbWUgZGF0ZVRpbWU9e2Zvcm1hdElTTyhkYXRlKX0+XG4gICAgICA8c3Bhbj57Zm9ybWF0KGRhdGUsIFwiTExMTCBkLCB5eXl5XCIpfTwvc3Bhbj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogI2Y4ZjhmMjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvdGltZT5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Date.tsx\n");

/***/ })

})
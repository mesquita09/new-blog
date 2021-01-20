webpackHotUpdate_N_E("pages/posts/tags/[[...slug]]",{

/***/ "./src/components/TagPostList.tsx":
/*!****************************************!*\
  !*** ./src/components/TagPostList.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TagPostList; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _PostItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostItem */ \"./src/components/PostItem.tsx\");\n/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pagination */ \"./src/components/Pagination.tsx\");\nvar _jsxFileName = \"/home/adelson/dev/new-blog/src/components/TagPostList.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nfunction TagPostList(_ref) {\n  var _this = this;\n\n  var posts = _ref.posts,\n      tag = _ref.tag,\n      pagination = _ref.pagination;\n  return __jsx(\"div\", {\n    className: \"jsx-448467280\" + \" \" + \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: \"jsx-448467280\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, \"All posts / \", __jsx(\"span\", {\n    className: \"jsx-448467280\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 21\n    }\n  }, tag.name)), __jsx(\"ul\", {\n    className: \"jsx-448467280\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, posts.map(function (it, i) {\n    return __jsx(\"li\", {\n      key: i,\n      className: \"jsx-448467280\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }\n    }, __jsx(_PostItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      post: it,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 13\n      }\n    }));\n  })), __jsx(_Pagination__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    current: pagination.current,\n    pages: pagination.pages,\n    link: {\n      href: function href() {\n        return \"/posts/tags/[[...slug]]\";\n      },\n      as: function as(page) {\n        return page === 1 ? \"/posts/tags/\" + tag.slug : \"/posts/tags/\".concat(tag.slug, \"/\").concat(page);\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"448467280\",\n    __self: this\n  }, \".container.jsx-448467280{margin:0 auto;max-width:1200px;width:100%;padding:0 1.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}h1.jsx-448467280{margin:0 0 2rem;padding:0;font-weight:100;font-size:1.75rem;color:#9b9b9b;}h1.jsx-448467280 span.jsx-448467280{font-weight:bold;color:#f8f8f2;}ul.jsx-448467280{margin:0;padding:0;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;}li.jsx-448467280{list-style:none;margin-bottom:1.5rem;}@media (min-width:769px){h1.jsx-448467280{font-size:2rem;}}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FkZWxzb24vZGV2L25ldy1ibG9nL3NyYy9jb21wb25lbnRzL1RhZ1Bvc3RMaXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q1MsQUFHMkIsQUFRRSxBQU9DLEFBSVIsQUFLTyxBQU1DLFNBVlAsS0FuQk8sQ0E4QmpCLENBdEJVLEFBZ0JXLENBVFAsRUFLQSxPQVhFLEtBUkwsQUFlYixNQVNBLEtBdkJtQixBQVFDLGlCQVBMLENBUUMsYUFVaEIsQ0FUQSwyREFSd0IsOEVBQ3hCIiwiZmlsZSI6Ii9ob21lL2FkZWxzb24vZGV2L25ldy1ibG9nL3NyYy9jb21wb25lbnRzL1RhZ1Bvc3RMaXN0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBvc3RDb250ZW50IH0gZnJvbSBcIi4uL2xpYi9wb3N0c1wiO1xuaW1wb3J0IHsgVGFnQ29udGVudCB9IGZyb20gXCIuLi9saWIvdGFnc1wiO1xuaW1wb3J0IFBvc3RJdGVtIGZyb20gXCIuL1Bvc3RJdGVtXCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi9QYWdpbmF0aW9uXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBvc3RzOiBQb3N0Q29udGVudFtdO1xuICB0YWc6IFRhZ0NvbnRlbnQ7XG4gIHBhZ2luYXRpb246IHtcbiAgICBjdXJyZW50OiBudW1iZXI7XG4gICAgcGFnZXM6IG51bWJlcjtcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWdQb3N0TGlzdCh7IHBvc3RzLCB0YWcsIHBhZ2luYXRpb24gfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJjb250YWluZXJcIn0+XG4gICAgICA8aDE+XG4gICAgICAgIEFsbCBwb3N0cyAvIDxzcGFuPnt0YWcubmFtZX08L3NwYW4+XG4gICAgICA8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICB7cG9zdHMubWFwKChpdCwgaSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgPFBvc3RJdGVtIHBvc3Q9e2l0fSAvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgIGN1cnJlbnQ9e3BhZ2luYXRpb24uY3VycmVudH1cbiAgICAgICAgcGFnZXM9e3BhZ2luYXRpb24ucGFnZXN9XG4gICAgICAgIGxpbms9e3tcbiAgICAgICAgICBocmVmOiAoKSA9PiBcIi9wb3N0cy90YWdzL1tbLi4uc2x1Z11dXCIsXG4gICAgICAgICAgYXM6IChwYWdlKSA9PlxuICAgICAgICAgICAgcGFnZSA9PT0gMVxuICAgICAgICAgICAgICA/IFwiL3Bvc3RzL3RhZ3MvXCIgKyB0YWcuc2x1Z1xuICAgICAgICAgICAgICA6IGAvcG9zdHMvdGFncy8ke3RhZy5zbHVnfS8ke3BhZ2V9YCxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxLjVyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMnJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgICAgICAgICAgY29sb3I6ICM5YjliOWI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHNwYW4ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogI2Y4ZjhmMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdfQ== */\\n/*@ sourceURL=/home/adelson/dev/new-blog/src/components/TagPostList.tsx */\"));\n}\n_c = TagPostList;\n\nvar _c;\n\n$RefreshReg$(_c, \"TagPostList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFnUG9zdExpc3QudHN4PzkzMGQiXSwibmFtZXMiOlsiVGFnUG9zdExpc3QiLCJwb3N0cyIsInRhZyIsInBhZ2luYXRpb24iLCJuYW1lIiwibWFwIiwiaXQiLCJpIiwiY3VycmVudCIsInBhZ2VzIiwiaHJlZiIsImFzIiwicGFnZSIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBVWUsU0FBU0EsV0FBVCxPQUF3RDtBQUFBOztBQUFBLE1BQWpDQyxLQUFpQyxRQUFqQ0EsS0FBaUM7QUFBQSxNQUExQkMsR0FBMEIsUUFBMUJBLEdBQTBCO0FBQUEsTUFBckJDLFVBQXFCLFFBQXJCQSxVQUFxQjtBQUNyRSxTQUNFO0FBQUEsdUNBQWdCLFdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ2M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9ELEdBQUcsQ0FBQ0UsSUFBWCxDQURkLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsS0FBSyxDQUFDSSxHQUFOLENBQVUsVUFBQ0MsRUFBRCxFQUFLQyxDQUFMO0FBQUEsV0FDVDtBQUFJLFNBQUcsRUFBRUEsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGlEQUFEO0FBQVUsVUFBSSxFQUFFRCxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEUztBQUFBLEdBQVYsQ0FESCxDQUpGLEVBV0UsTUFBQyxtREFBRDtBQUNFLFdBQU8sRUFBRUgsVUFBVSxDQUFDSyxPQUR0QjtBQUVFLFNBQUssRUFBRUwsVUFBVSxDQUFDTSxLQUZwQjtBQUdFLFFBQUksRUFBRTtBQUNKQyxVQUFJLEVBQUU7QUFBQSxlQUFNLHlCQUFOO0FBQUEsT0FERjtBQUVKQyxRQUFFLEVBQUUsWUFBQ0MsSUFBRDtBQUFBLGVBQ0ZBLElBQUksS0FBSyxDQUFULEdBQ0ksaUJBQWlCVixHQUFHLENBQUNXLElBRHpCLHlCQUVtQlgsR0FBRyxDQUFDVyxJQUZ2QixjQUUrQkQsSUFGL0IsQ0FERTtBQUFBO0FBRkEsS0FIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEY7QUFBQTtBQUFBO0FBQUEsb3FIQURGO0FBK0REO0tBaEV1QlosVyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1RhZ1Bvc3RMaXN0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFBvc3RDb250ZW50IH0gZnJvbSBcIi4uL2xpYi9wb3N0c1wiO1xuaW1wb3J0IHsgVGFnQ29udGVudCB9IGZyb20gXCIuLi9saWIvdGFnc1wiO1xuaW1wb3J0IFBvc3RJdGVtIGZyb20gXCIuL1Bvc3RJdGVtXCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi9QYWdpbmF0aW9uXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHBvc3RzOiBQb3N0Q29udGVudFtdO1xuICB0YWc6IFRhZ0NvbnRlbnQ7XG4gIHBhZ2luYXRpb246IHtcbiAgICBjdXJyZW50OiBudW1iZXI7XG4gICAgcGFnZXM6IG51bWJlcjtcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWdQb3N0TGlzdCh7IHBvc3RzLCB0YWcsIHBhZ2luYXRpb24gfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17XCJjb250YWluZXJcIn0+XG4gICAgICA8aDE+XG4gICAgICAgIEFsbCBwb3N0cyAvIDxzcGFuPnt0YWcubmFtZX08L3NwYW4+XG4gICAgICA8L2gxPlxuICAgICAgPHVsPlxuICAgICAgICB7cG9zdHMubWFwKChpdCwgaSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgPFBvc3RJdGVtIHBvc3Q9e2l0fSAvPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxQYWdpbmF0aW9uXG4gICAgICAgIGN1cnJlbnQ9e3BhZ2luYXRpb24uY3VycmVudH1cbiAgICAgICAgcGFnZXM9e3BhZ2luYXRpb24ucGFnZXN9XG4gICAgICAgIGxpbms9e3tcbiAgICAgICAgICBocmVmOiAoKSA9PiBcIi9wb3N0cy90YWdzL1tbLi4uc2x1Z11dXCIsXG4gICAgICAgICAgYXM6IChwYWdlKSA9PlxuICAgICAgICAgICAgcGFnZSA9PT0gMVxuICAgICAgICAgICAgICA/IFwiL3Bvc3RzL3RhZ3MvXCIgKyB0YWcuc2x1Z1xuICAgICAgICAgICAgICA6IGAvcG9zdHMvdGFncy8ke3RhZy5zbHVnfS8ke3BhZ2V9YCxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxLjVyZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMnJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgICAgICAgICAgY29sb3I6ICM5YjliOWI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHNwYW4ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogI2Y4ZjhmMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TagPostList.tsx\n");

/***/ })

})
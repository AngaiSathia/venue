"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(available-booking-listings)/listing-available-booking-map/wedding-package/page",{

/***/ "(app-client)/./src/shared/HEBPagination.tsx":
/*!**************************************!*\
  !*** ./src/shared/HEBPagination.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_twFocusClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/twFocusClass */ \"(app-client)/./src/utils/twFocusClass.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst DEMO_PAGINATION = [\n    {\n        label: \"1\",\n        href: \"#\"\n    },\n    {\n        label: \"2\",\n        href: \"#\"\n    },\n    {\n        label: \"3\",\n        href: \"#\"\n    },\n    {\n        label: \"4\",\n        href: \"#\"\n    }\n];\nconst Pagination = (param)=>{\n    let { className =\"\" , recordPerPage , totalRecords , paginate , currentPage  } = param;\n    const pageNumbers = [];\n    for(let i = 1; i <= Math.ceil(totalRecords / recordPerPage); i++){\n        pageNumbers.push(i);\n    }\n    const renderItem = (pag, index)=>{\n        if (index === 0) {\n            // RETURN ACTIVE PAGINATION\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white \".concat((0,_utils_twFocusClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()),\n                children: pag.label\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\Guo Chen\\\\Desktop\\\\nus\\\\capstone project\\\\code\\\\venue\\\\customer_portal\\\\src\\\\shared\\\\HEBPagination.tsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, undefined);\n        }\n        // RETURN UNACTIVE PAGINATION\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            className: \"inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 \".concat((0,_utils_twFocusClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()),\n            href: pag.href,\n            children: pag.label\n        }, index, false, {\n            fileName: \"C:\\\\Users\\\\Guo Chen\\\\Desktop\\\\nus\\\\capstone project\\\\code\\\\venue\\\\customer_portal\\\\src\\\\shared\\\\HEBPagination.tsx\",\n            lineNumber: 63,\n            columnNumber: 7\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"nc-Pagination inline-flex space-x-1 text-base font-medium \".concat(className),\n        children: pageNumbers.map((number)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: number === currentPage ? \"inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white \".concat((0,_utils_twFocusClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()) : \"inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 \".concat((0,_utils_twFocusClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    onClick: ()=>paginate(number),\n                    className: \"page-link\",\n                    children: number\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Guo Chen\\\\Desktop\\\\nus\\\\capstone project\\\\code\\\\venue\\\\customer_portal\\\\src\\\\shared\\\\HEBPagination.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 11\n                }, undefined)\n            }, number, false, {\n                fileName: \"C:\\\\Users\\\\Guo Chen\\\\Desktop\\\\nus\\\\capstone project\\\\code\\\\venue\\\\customer_portal\\\\src\\\\shared\\\\HEBPagination.tsx\",\n                lineNumber: 76,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Guo Chen\\\\Desktop\\\\nus\\\\capstone project\\\\code\\\\venue\\\\customer_portal\\\\src\\\\shared\\\\HEBPagination.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3NoYXJlZC9IRUJQYWdpbmF0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUM0QztBQUNJO0FBQ25CO0FBRzdCLE1BQU1HLGtCQUFnQztJQUNwQztRQUNFQyxPQUFPO1FBQ1BDLE1BQU07SUFDUjtJQUNBO1FBQ0VELE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxPQUFPO1FBQ1BDLE1BQU07SUFDUjtDQUNEO0FBVUQsTUFBTUMsYUFBa0MsU0FNbEM7UUFObUMsRUFDdkNDLFdBQVksR0FBRSxFQUNkQyxjQUFhLEVBQ2JDLGFBQVksRUFDWkMsU0FBUSxFQUNSQyxZQUFXLEVBQ1o7SUFDQyxNQUFNQyxjQUFjLEVBQUU7SUFFdEIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLEtBQUtDLEtBQUtDLElBQUksQ0FBQ04sZUFBZUQsZ0JBQWdCSyxJQUFLO1FBQ2pFRCxZQUFZSSxJQUFJLENBQUNIO0lBQ25CO0lBRUEsTUFBTUksYUFBYSxDQUFDQyxLQUFpQkMsUUFBa0I7UUFHckQsSUFBSUEsVUFBVSxHQUFHO1lBQ2YsMkJBQTJCO1lBQzNCLHFCQUNFLDhEQUFDQztnQkFFQ2IsV0FBVyw2RkFBNEcsT0FBZk4sK0RBQVlBOzBCQUVuSGlCLElBQUlkLEtBQUs7ZUFITGU7Ozs7O1FBTVgsQ0FBQztRQUNELDZCQUE2QjtRQUM3QixxQkFDRSw4REFBQ2pCLGtEQUFJQTtZQUVISyxXQUFXLHdPQUF1UCxPQUFmTiwrREFBWUE7WUFDL1BJLE1BQU1hLElBQUliLElBQUk7c0JBRWJhLElBQUlkLEtBQUs7V0FKTGU7Ozs7O0lBT1g7SUFFQSxxQkFDRSw4REFBQ0U7UUFBSWQsV0FBVyw2REFBdUUsT0FBVkE7a0JBQzFFSyxZQUFZVSxHQUFHLENBQUNDLENBQUFBLHVCQUNmLDhEQUFDQztnQkFBZ0JqQixXQUFXZ0IsV0FBV1osY0FDbkMsNkZBQTRHLE9BQWZWLCtEQUFZQSxNQUN6Ryx3T0FBdVAsT0FBZkEsK0RBQVlBLEdBQUk7MEJBQzFQLDRFQUFDd0I7b0JBQUVDLFNBQVMsSUFBTWhCLFNBQVNhO29CQUFTaEIsV0FBVTs4QkFDM0NnQjs7Ozs7O2VBSklBOzs7Ozs7Ozs7O0FBVWpCO0tBcERNakI7QUFzRE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NoYXJlZC9IRUJQYWdpbmF0aW9uLnRzeD8xM2YyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEN1c3RvbUxpbmsgfSBmcm9tIFwiQC9kYXRhL3R5cGVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHR3Rm9jdXNDbGFzcyBmcm9tIFwiQC91dGlscy90d0ZvY3VzQ2xhc3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gXCJAL3JvdXRlcnMvdHlwZXNcIjtcclxuXHJcbmNvbnN0IERFTU9fUEFHSU5BVElPTjogQ3VzdG9tTGlua1tdID0gW1xyXG4gIHtcclxuICAgIGxhYmVsOiBcIjFcIixcclxuICAgIGhyZWY6IFwiI1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6IFwiMlwiLFxyXG4gICAgaHJlZjogXCIjXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogXCIzXCIsXHJcbiAgICBocmVmOiBcIiNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiBcIjRcIixcclxuICAgIGhyZWY6IFwiI1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luYXRpb25Qcm9wcyB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIHJlY29yZFBlclBhZ2U6IG51bWJlcjtcclxuICB0b3RhbFJlY29yZHM6IG51bWJlcjtcclxuICBwYWdpbmF0ZTogYW55O1xyXG4gIGN1cnJlbnRQYWdlOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFBhZ2luYXRpb246IEZDPFBhZ2luYXRpb25Qcm9wcz4gPSAoeyBcclxuICBjbGFzc05hbWUgPSBcIlwiLCBcclxuICByZWNvcmRQZXJQYWdlLCBcclxuICB0b3RhbFJlY29yZHMsIFxyXG4gIHBhZ2luYXRlLFxyXG4gIGN1cnJlbnRQYWdlXHJcbn0pID0+IHtcclxuICBjb25zdCBwYWdlTnVtYmVycyA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBNYXRoLmNlaWwodG90YWxSZWNvcmRzIC8gcmVjb3JkUGVyUGFnZSk7IGkrKykge1xyXG4gICAgcGFnZU51bWJlcnMucHVzaChpKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlckl0ZW0gPSAocGFnOiBDdXN0b21MaW5rLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICBcclxuICAgIFxyXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgIC8vIFJFVFVSTiBBQ1RJVkUgUEFHSU5BVElPTlxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuXHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgaW5saW5lLWZsZXggdy0xMSBoLTExIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctcHJpbWFyeS02MDAwIHRleHQtd2hpdGUgJHt0d0ZvY3VzQ2xhc3MoKX1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwYWcubGFiZWx9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgLy8gUkVUVVJOIFVOQUNUSVZFIFBBR0lOQVRJT05cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMaW5rXHJcbiAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICBjbGFzc05hbWU9e2BpbmxpbmUtZmxleCB3LTExIGgtMTEgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBob3ZlcjpiZy1uZXV0cmFsLTEwMCBib3JkZXIgYm9yZGVyLW5ldXRyYWwtMjAwIHRleHQtbmV1dHJhbC02MDAwIGRhcms6dGV4dC1uZXV0cmFsLTQwMCBkYXJrOmJnLW5ldXRyYWwtOTAwIGRhcms6aG92ZXI6YmctbmV1dHJhbC04MDAgZGFyazpib3JkZXItbmV1dHJhbC03MDAgJHt0d0ZvY3VzQ2xhc3MoKX1gfVxyXG4gICAgICAgIGhyZWY9e3BhZy5ocmVmIGFzIFJvdXRlfVxyXG4gICAgICA+XHJcbiAgICAgICAge3BhZy5sYWJlbH1cclxuICAgICAgPC9MaW5rPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9e2BuYy1QYWdpbmF0aW9uIGlubGluZS1mbGV4IHNwYWNlLXgtMSB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gJHtjbGFzc05hbWV9YH0+XHJcbiAgICAgIHtwYWdlTnVtYmVycy5tYXAobnVtYmVyID0+IChcclxuICAgICAgICA8bGkga2V5PXtudW1iZXJ9IGNsYXNzTmFtZT17bnVtYmVyID09PSBjdXJyZW50UGFnZSBcclxuICAgICAgICAgID8gYGlubGluZS1mbGV4IHctMTEgaC0xMSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLXByaW1hcnktNjAwMCB0ZXh0LXdoaXRlICR7dHdGb2N1c0NsYXNzKCl9YFxyXG4gICAgICAgICAgOiBgaW5saW5lLWZsZXggdy0xMSBoLTExIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgYmctd2hpdGUgaG92ZXI6YmctbmV1dHJhbC0xMDAgYm9yZGVyIGJvcmRlci1uZXV0cmFsLTIwMCB0ZXh0LW5ldXRyYWwtNjAwMCBkYXJrOnRleHQtbmV1dHJhbC00MDAgZGFyazpiZy1uZXV0cmFsLTkwMCBkYXJrOmhvdmVyOmJnLW5ldXRyYWwtODAwIGRhcms6Ym9yZGVyLW5ldXRyYWwtNzAwICR7dHdGb2N1c0NsYXNzKCl9YH0+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBwYWdpbmF0ZShudW1iZXIpfSBjbGFzc05hbWU9J3BhZ2UtbGluayc+XHJcbiAgICAgICAgICAgIHtudW1iZXJ9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgKSl9XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidHdGb2N1c0NsYXNzIiwiTGluayIsIkRFTU9fUEFHSU5BVElPTiIsImxhYmVsIiwiaHJlZiIsIlBhZ2luYXRpb24iLCJjbGFzc05hbWUiLCJyZWNvcmRQZXJQYWdlIiwidG90YWxSZWNvcmRzIiwicGFnaW5hdGUiLCJjdXJyZW50UGFnZSIsInBhZ2VOdW1iZXJzIiwiaSIsIk1hdGgiLCJjZWlsIiwicHVzaCIsInJlbmRlckl0ZW0iLCJwYWciLCJpbmRleCIsInNwYW4iLCJuYXYiLCJtYXAiLCJudW1iZXIiLCJsaSIsImEiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/shared/HEBPagination.tsx\n"));

/***/ })

});
webpackHotUpdate("static\\development\\pages\\register.js",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layouts_TopHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layouts/TopHeader */ "./components/Layouts/TopHeader.js");
/* harmony import */ var _components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layouts/Navbar */ "./components/Layouts/Navbar.js");
/* harmony import */ var _components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Common/PageBanner */ "./components/Common/PageBanner.js");
/* harmony import */ var _components_Common_FacilitySlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Common/FacilitySlider */ "./components/Common/FacilitySlider.js");
/* harmony import */ var _components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layouts/Footer */ "./components/Layouts/Footer.js");
/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../contexts/UserContext */ "./contexts/UserContext.js");
var _jsxFileName = "F:\\N\u0103m 4 h\u1ECDc k\u1EF3 1\\M\xF4 h\xECnh h\xF3a ph\u1EA7n m\u1EC1m\\New folder (2)\\pages\\register.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const Register = () => {
  _s();

  const user = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_8__["UserContext"]);

  const handleRegister = async e => {
    e.pre;
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_components_Layouts_TopHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user: user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), __jsx(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pageTitle: "T\xE0i kho\u1EA3n",
    homePageUrl: "/",
    homePageText: "Trang ch\u1EE7",
    activePageText: "\u0110\u0103ng k\xFD",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx("section", {
    className: "signup-area ptb-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "signup-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, "T\u1EA1o t\xE0i kho\u1EA3n"), __jsx("form", {
    onSubmit: e => handleRegister(e),
    className: "signup-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 33
    }
  }, "Username"), __jsx("input", {
    type: "email",
    className: "form-control",
    id: "username",
    name: "username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 33
    }
  }, "Password"), __jsx("input", {
    type: "password",
    className: "form-control",
    id: "password",
    name: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 33
    }
  })), __jsx("button", {
    type: "submit",
    className: "default-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }, "\u0110\u0103ng k\xFD"), __jsx("div", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 33
    }
  }, __jsx("a", {
    className: "return-store",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 37
    }
  }, "Tr\u1EDF l\u1EA1i trang ch\u1EE7"))))))), __jsx(_components_Common_FacilitySlider__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }));
};

_s(Register, "T/slviYl6xUb2nQaiedYLY1KgOo=");

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInVzZXIiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJoYW5kbGVSZWdpc3RlciIsImUiLCJwcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUFBOztBQUNuQixRQUFNQyxJQUFJLEdBQUdDLHdEQUFVLENBQUNDLGlFQUFELENBQXZCOztBQUNBLFFBQU1DLGNBQWMsR0FBRyxNQUFPQyxDQUFQLElBQWE7QUFDbkNBLEtBQUMsQ0FBQ0MsR0FBRjtBQUNBLEdBRkQ7O0FBSUEsU0FDSSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxRUFBRDtBQUFXLFFBQUksRUFBRUwsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSSxNQUFDLHFFQUFEO0FBQ0ksYUFBUyxFQUFDLG1CQURkO0FBRUksZUFBVyxFQUFDLEdBRmhCO0FBR0ksZ0JBQVksRUFBQyxnQkFIakI7QUFJSSxrQkFBYyxFQUFDLHNCQUpuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFVSTtBQUFTLGFBQVMsRUFBQyxxQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURKLEVBR0k7QUFBTSxZQUFRLEVBQUdJLENBQUQsSUFBTUQsY0FBYyxDQUFDQyxDQUFELENBQXBDO0FBQXlDLGFBQVMsRUFBQyxhQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVJO0FBQU8sUUFBSSxFQUFDLE9BQVo7QUFBb0IsYUFBUyxFQUFDLGNBQTlCO0FBQTZDLE1BQUUsRUFBQyxVQUFoRDtBQUEyRCxRQUFJLEVBQUMsVUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBRkosRUFPSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRUk7QUFBTyxRQUFJLEVBQUMsVUFBWjtBQUF1QixhQUFTLEVBQUMsY0FBakM7QUFBZ0QsTUFBRSxFQUFDLFVBQW5EO0FBQThELFFBQUksRUFBQyxVQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FQSixFQVlJO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFDLGFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBWkosRUFjSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FESixDQURKLENBZEosQ0FISixDQURKLENBREosQ0FWSixFQXVDSSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2Q0osRUF3Q0ksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeENKLENBREo7QUE2Q0gsQ0FuREQ7O0dBQU1MLFE7O0tBQUFBLFE7QUF1RFVBLHVFQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccmVnaXN0ZXIuanMuOThhODhjM2VlZTdhZmM3ZDc0M2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgVG9wSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0cy9Ub3BIZWFkZXInO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0cy9OYXZiYXInO1xyXG5pbXBvcnQgUGFnZUJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9QYWdlQmFubmVyJztcclxuaW1wb3J0IEZhY2lsaXR5U2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0ZhY2lsaXR5U2xpZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dHMvRm9vdGVyJztcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9Vc2VyQ29udGV4dCc7XHJcbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gICAgY29uc3QgaGFuZGxlUmVnaXN0ZXIgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgIGUucHJlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxUb3BIZWFkZXIgdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICA8UGFnZUJhbm5lclxyXG4gICAgICAgICAgICAgICAgcGFnZVRpdGxlPVwiVMOgaSBraG/huqNuXCJcclxuICAgICAgICAgICAgICAgIGhvbWVQYWdlVXJsPVwiL1wiXHJcbiAgICAgICAgICAgICAgICBob21lUGFnZVRleHQ9XCJUcmFuZyBjaOG7p1wiXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlVGV4dD1cIsSQxINuZyBrw71cIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2lnbnVwLWFyZWEgcHRiLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ251cC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5U4bqhbyB0w6BpIGtob+G6o248L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PmhhbmRsZVJlZ2lzdGVyKGUpfSBjbGFzc05hbWU9XCJzaWdudXAtZm9ybVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwidXNlcm5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJkZWZhdWx0LWJ0blwiPsSQxINuZyBrw708L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmV0dXJuLXN0b3JlXCI+VHLhu58gbOG6oWkgdHJhbmcgY2jhu6c8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICA8RmFjaWxpdHlTbGlkZXIgLz5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoUmVnaXN0ZXIpIl0sInNvdXJjZVJvb3QiOiIifQ==
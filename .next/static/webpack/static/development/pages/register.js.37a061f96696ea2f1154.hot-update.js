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
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "F:\\N\u0103m 4 h\u1ECDc k\u1EF3 1\\M\xF4 h\xECnh h\xF3a ph\u1EA7n m\u1EC1m\\New folder (2)\\pages\\register.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Register = () => {
  _s();

  const user = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_8__["UserContext"]);

  const handleRegister = async e => {
    e.preventdefault();
    e.preventDefault();
    const account = {
      username: e.target.elements.username.value,
      password: e.target.elements.password.value
    };
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    await fetch("http://localhost:1337" + '/api/accounts', {
      method: 'POST',
      body: JSON.stringify({
        data: {
          Username: e.target.elements.username.value,
          Password: e.target.elements.password.value
        }
      }),
      headers: myHeaders
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_components_Layouts_TopHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user: user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx("section", {
    className: "signup-area ptb-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "signup-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, "T\u1EA1o t\xE0i kho\u1EA3n"), __jsx("form", {
    onSubmit: e => handleRegister(e),
    className: "signup-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
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
      lineNumber: 55,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
      lineNumber: 60,
      columnNumber: 33
    }
  })), __jsx("button", {
    type: "submit",
    className: "default-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, "\u0110\u0103ng k\xFD"), __jsx("div", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  }, __jsx("a", {
    className: "return-store",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 37
    }
  }, "Tr\u1EDF l\u1EA1i trang ch\u1EE7"))))))), __jsx(_components_Common_FacilitySlider__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInVzZXIiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJoYW5kbGVSZWdpc3RlciIsImUiLCJwcmV2ZW50ZGVmYXVsdCIsInByZXZlbnREZWZhdWx0IiwiYWNjb3VudCIsInVzZXJuYW1lIiwidGFyZ2V0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsInBhc3N3b3JkIiwibXlIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImZldGNoIiwicHJvY2VzcyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsIlVzZXJuYW1lIiwiUGFzc3dvcmQiLCJoZWFkZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0FBQUE7O0FBQ25CLFFBQU1DLElBQUksR0FBR0Msd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FBdkI7O0FBQ0EsUUFBTUMsY0FBYyxHQUFHLE1BQU9DLENBQVAsSUFBYTtBQUNoQ0EsS0FBQyxDQUFDQyxjQUFGO0FBQ0FELEtBQUMsQ0FBQ0UsY0FBRjtBQUNBLFVBQU1DLE9BQU8sR0FBRztBQUNaQyxjQUFRLEVBQUVKLENBQUMsQ0FBQ0ssTUFBRixDQUFTQyxRQUFULENBQWtCRixRQUFsQixDQUEyQkcsS0FEekI7QUFFWkMsY0FBUSxFQUFFUixDQUFDLENBQUNLLE1BQUYsQ0FBU0MsUUFBVCxDQUFrQkUsUUFBbEIsQ0FBMkJEO0FBRnpCLEtBQWhCO0FBSUEsUUFBSUUsU0FBUyxHQUFHLElBQUlDLE9BQUosRUFBaEI7QUFDQUQsYUFBUyxDQUFDRSxNQUFWLENBQWlCLGNBQWpCLEVBQWlDLGtCQUFqQztBQUNBLFVBQU1DLEtBQUssQ0FBQ0MsdUJBQUEsR0FBdUIsZUFBeEIsRUFB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkNKLEVBd0NJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhDSixDQURKO0FBNkNILENBckVEOztHQUFNTCxROztLQUFBQSxRO0FBeUVVQSx1RUFBaEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHJlZ2lzdGVyLmpzLjM3YTA2MWY5NjY5NmVhMmYxMTU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFRvcEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dHMvVG9wSGVhZGVyJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dHMvTmF2YmFyJztcclxuaW1wb3J0IFBhZ2VCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vUGFnZUJhbm5lcic7XHJcbmltcG9ydCBGYWNpbGl0eVNsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9GYWNpbGl0eVNsaWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXRzL0Zvb3Rlcic7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvVXNlckNvbnRleHQnO1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XHJcbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gICAgY29uc3QgaGFuZGxlUmVnaXN0ZXIgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudGRlZmF1bHQoKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IGUudGFyZ2V0LmVsZW1lbnRzLnVzZXJuYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogZS50YXJnZXQuZWxlbWVudHMucGFzc3dvcmQudmFsdWUsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIG15SGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpXHJcbiAgICAgICAgYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX0hPU1QgKyAnL2FwaS9hY2NvdW50cycsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBVc2VybmFtZTogZS50YXJnZXQuZWxlbWVudHMudXNlcm5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmQ6IGUudGFyZ2V0LmVsZW1lbnRzLnBhc3N3b3JkLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgaGVhZGVyczogbXlIZWFkZXJzXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPFRvcEhlYWRlciB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgIDxQYWdlQmFubmVyXHJcbiAgICAgICAgICAgICAgICBwYWdlVGl0bGU9XCJUw6BpIGtob+G6o25cIlxyXG4gICAgICAgICAgICAgICAgaG9tZVBhZ2VVcmw9XCIvXCJcclxuICAgICAgICAgICAgICAgIGhvbWVQYWdlVGV4dD1cIlRyYW5nIGNo4bunXCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2VUZXh0PVwixJDEg25nIGvDvVwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzaWdudXAtYXJlYSBwdGItMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbnVwLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlThuqFvIHTDoGkga2hv4bqjbjwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+aGFuZGxlUmVnaXN0ZXIoZSl9IGNsYXNzTmFtZT1cInNpZ251cC1mb3JtXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuXCI+xJDEg25nIGvDvTwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZXR1cm4tc3RvcmVcIj5UcuG7nyBs4bqhaSB0cmFuZyBjaOG7pzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxGYWNpbGl0eVNsaWRlciAvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChSZWdpc3RlcikiXSwic291cmNlUm9vdCI6IiJ9
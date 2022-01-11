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
    }).then(response => response.json()).then(res => {
      if (res.data && res.data[0] && res.data[0].attributes) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
          icon: 'success',
          title: 'Tạo tài khoản thành công',
          text: 'Bây giờ bạn có thể đăng nhập và đặt hàng'
        });
      }
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(_components_Layouts_TopHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user: user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), __jsx(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx("section", {
    className: "signup-area ptb-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "signup-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 25
    }
  }, "T\u1EA1o t\xE0i kho\u1EA3n"), __jsx("form", {
    onSubmit: e => handleRegister(e),
    className: "signup-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
      lineNumber: 65,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
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
      lineNumber: 70,
      columnNumber: 33
    }
  })), __jsx("button", {
    type: "submit",
    className: "default-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, "\u0110\u0103ng k\xFD"), __jsx("div", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 33
    }
  }, __jsx("a", {
    className: "return-store",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 37
    }
  }, "Tr\u1EDF l\u1EA1i trang ch\u1EE7"))))))), __jsx(_components_Common_FacilitySlider__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInVzZXIiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJoYW5kbGVSZWdpc3RlciIsImUiLCJwcmV2ZW50ZGVmYXVsdCIsInByZXZlbnREZWZhdWx0IiwiYWNjb3VudCIsInVzZXJuYW1lIiwidGFyZ2V0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsInBhc3N3b3JkIiwibXlIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImZldGNoIiwicHJvY2VzcyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsIlVzZXJuYW1lIiwiUGFzc3dvcmQiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlcyIsImF0dHJpYnV0ZXMiLCJTd2FsIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFBQTs7QUFDbkIsUUFBTUMsSUFBSSxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUF2Qjs7QUFDQSxRQUFNQyxjQUFjLEdBQUcsTUFBT0MsQ0FBUCxJQUFhO0FBQ2hDQSxLQUFDLENBQUNDLGNBQUY7QUFDQUQsS0FBQyxDQUFDRSxjQUFGO0FBQ0EsVUFBTUMsT0FBTyxHQUFHO0FBQ1pDLGNBQVEsRUFBRUosQ0FBQyxDQUFDSyxNQUFGLENBQVNDLFFBQVQsQ0FBa0JGLFFBQWxCLENBQTJCRyxLQUR6QjtBQUVaQyxjQUFRLEVBQUVSLENBQUMsQ0FBQ0ssTUFBRixDQUFTQyxRQUFULENBQWtCRSxRQUFsQixDQUEyQkQ7QUFGekIsS0FBaEI7QUFJQSxRQUFJRSxTQUFTLEdBQUcsSUFBSUMsT0FBSixFQUFoQjtBQUNBRCxhQUFT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QUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FQSixFQVlJO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFDLGFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBWkosRUFjSTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FESixDQURKLENBZEosQ0FISixDQURKLENBREosQ0FWSixFQXVDSSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF2Q0osRUF3Q0ksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeENKLENBREo7QUE2Q0gsQ0EvRUQ7O0dBQU1MLFE7O0tBQUFBLFE7QUFtRlVBLHVFQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccmVnaXN0ZXIuanMuMzk0N2E5NTAzZTNhYzk4OGE4NzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgVG9wSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0cy9Ub3BIZWFkZXInO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0cy9OYXZiYXInO1xyXG5pbXBvcnQgUGFnZUJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9QYWdlQmFubmVyJztcclxuaW1wb3J0IEZhY2lsaXR5U2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0ZhY2lsaXR5U2xpZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dHMvRm9vdGVyJztcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9Vc2VyQ29udGV4dCc7XHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgICBjb25zdCBoYW5kbGVSZWdpc3RlciA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50ZGVmYXVsdCgpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogZS50YXJnZXQuZWxlbWVudHMudXNlcm5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBlLnRhcmdldC5lbGVtZW50cy5wYXNzd29yZC52YWx1ZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgbXlIZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIilcclxuICAgICAgICBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5BUElfSE9TVCArICcvYXBpL2FjY291bnRzJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJuYW1lOiBlLnRhcmdldC5lbGVtZW50cy51c2VybmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBQYXNzd29yZDogZS50YXJnZXQuZWxlbWVudHMucGFzc3dvcmQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBteUhlYWRlcnNcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGFbMF0gJiYgcmVzLmRhdGFbMF0uYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdU4bqhbyB0w6BpIGtob+G6o24gdGjDoG5oIGPDtG5nJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQsOieSBnaeG7nSBi4bqhbiBjw7MgdGjhu4MgxJHEg25nIG5o4bqtcCB2w6AgxJHhurd0IGjDoG5nJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPFRvcEhlYWRlciB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgIDxQYWdlQmFubmVyXHJcbiAgICAgICAgICAgICAgICBwYWdlVGl0bGU9XCJUw6BpIGtob+G6o25cIlxyXG4gICAgICAgICAgICAgICAgaG9tZVBhZ2VVcmw9XCIvXCJcclxuICAgICAgICAgICAgICAgIGhvbWVQYWdlVGV4dD1cIlRyYW5nIGNo4bunXCJcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2VUZXh0PVwixJDEg25nIGvDvVwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzaWdudXAtYXJlYSBwdGItMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbnVwLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlThuqFvIHTDoGkga2hv4bqjbjwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+aGFuZGxlUmVnaXN0ZXIoZSl9IGNsYXNzTmFtZT1cInNpZ251cC1mb3JtXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuXCI+xJDEg25nIGvDvTwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJyZXR1cm4tc3RvcmVcIj5UcuG7nyBs4bqhaSB0cmFuZyBjaOG7pzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxGYWNpbGl0eVNsaWRlciAvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChSZWdpc3RlcikiXSwic291cmNlUm9vdCI6IiJ9
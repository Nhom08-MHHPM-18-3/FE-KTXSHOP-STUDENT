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
          text: 'Bây giờ bạn có'
        });
      }
    });

    if (!data) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
        icon: 'error',
        title: 'Đăng nhập không thành công',
        text: 'Username hoặc password không hợp lệ'
      });
      return;
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx(_components_Layouts_TopHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user: user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }), __jsx(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
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
      lineNumber: 57,
      columnNumber: 13
    }
  }), __jsx("section", {
    className: "signup-area ptb-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "signup-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, "T\u1EA1o t\xE0i kho\u1EA3n"), __jsx("form", {
    onSubmit: e => handleRegister(e),
    className: "signup-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
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
      lineNumber: 73,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 29
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 78,
      columnNumber: 33
    }
  })), __jsx("button", {
    type: "submit",
    className: "default-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, "\u0110\u0103ng k\xFD"), __jsx("div", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 33
    }
  }, __jsx("a", {
    className: "return-store",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 37
    }
  }, "Tr\u1EDF l\u1EA1i trang ch\u1EE7"))))))), __jsx(_components_Common_FacilitySlider__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInVzZXIiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJoYW5kbGVSZWdpc3RlciIsImUiLCJwcmV2ZW50ZGVmYXVsdCIsInByZXZlbnREZWZhdWx0IiwiYWNjb3VudCIsInVzZXJuYW1lIiwidGFyZ2V0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsInBhc3N3b3JkIiwibXlIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImZldGNoIiwicHJvY2VzcyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsIlVzZXJuYW1lIiwiUGFzc3dvcmQiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlcyIsImF0dHJpYnV0ZXMiLCJTd2FsIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsUUFBUSxHQUFHLE1BQU07QUFBQTs7QUFDbkIsUUFBTUMsSUFBSSxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUF2Qjs7QUFDQSxRQUFNQyxjQUFjLEdBQUcsTUFBT0MsQ0FBUCxJQUFhO0FBQ2hDQSxLQUFDLENBQUNDLGNBQUY7QUFDQUQsS0FBQyxDQUFDRSxjQUFGO0FBQ0EsVUFBTUMsT0FBTyxHQUFHO0FBQ1pDLGNBQVEsRUFBRUosQ0FBQyxDQUFDSyxNQUFGLENBQVNDLFFBQVQsQ0FBa0JGLFFBQWxCLENBQTJCRyxLQUR6QjtBQUVaQyxjQUFRLEVBQUVSLENBQUMsQ0FBQ0ssTUFBRixDQUFTQyxRQUFULENBQWtCRSxRQUFsQixDQUEyQkQ7QUFGekIsS0FBaEI7QUFJQSxRQUFJRSxTQUFTLEdBQUcsSUFBSUMsT0FBSixFQUFoQjtBQUNBRCxhQUFTLENBQUNFLE1BQVYsQ0FBaUIsY0FBakIsRUFBaUMsa0JBQWpDO0FBQ0EsVUFBTUMsS0FBSyxDQUFDQyx1QkFBQSxHQUF1QixlQUF4QixFQUF5QztBQUNoREMsWUFBTSxFQUFFLE1BRHdDO0FBRWhEQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ2pCQyxZQUFJLEVBQUU7QUFDRkMsa0JBQVEsRUFBRW5CLENBQUMsQ0FBQ0ssTUFBRixDQUFTQyxRQUFULENBQWtCRixRQUFsQixDQUEyQkcsS0FEbkM7QUFFRmEsa0JBQVEsRUFBRXBCLENBQUMsQ0FBQ0ssTUFBRixDQUFTQyxRQUFULENBQWtCRSxRQUFsQixDQUEyQkQ7QUFGbkM7QUFEVyxPQUFmLENBRjBDO0FBUWhEYyxhQUFPLEVBQUVaO0FBUnVDLEtBQXpDLENBQUwsQ0FVTGEsSUFWSyxDQVVBQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQVZaLEVBV0xGLElBWEssQ0FXQUcsR0FBRyxJQUFJO0FBQ1QsVUFBSUEsR0FBRyxDQUFDUCxJQUFKLElBQVlPLEdBQUcsQ0FBQ1AsSUFBSixDQUFTLENBQVQsQ0FBWixJQUEyQk8sR0FBRyxDQUFDUCxJQUFKLENBQVMsQ0FBVCxFQUFZUSxVQUEzQyxFQUF1RDtBQUNuREMsMERBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ05DLGNBQUksRUFBRSxTQURBO0FBRU5DLGVBQUssRUFBRSwwQkFGRDtBQUdOQyxjQUFJLEVBQUU7QUFIQSxTQUFWO0FBS0g7QUFDSixLQW5CSyxDQUFOOztBQW9CSixRQUFJLENBQUNiLElBQUwsRUFBVztBQUNQUyx3REFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsWUFBSSxFQUFFLE9BREE7QUFFTkMsYUFBSyxFQUFFLDRCQUZEO0FBR05DLFlBQUksRUFBRTtBQUhBLE9BQVY7QUFNQTtBQUNIO0FBQ0EsR0F0Q0Q7O0FBd0NBLFNBQ0ksTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMscUVBQUQ7QUFBVyxRQUFJLEVBQUVuQyxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJLE1BQUMscUVBQUQ7QUFDSSxhQUFTLEVBQUMsbUJBRGQ7QUFFSSxlQUFXLEVBQUMsR0FGaEI7QUFHSSxnQkFBWSxFQUFDLGdCQUhqQjtBQUlJLGtCQUFjLEVBQUMsc0JBSm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQVVJO0FBQVMsYUFBUyxFQUFDLHFCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREosRUFHSTtBQUFNLFlBQVEsRUFBR0ksQ0FBRCxJQUFNRCxjQUFjLENBQUNDLENBQUQsQ0FBcEM7QUFBeUMsYUFBUyxFQUFDLGFBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRUk7QUFBTyxRQUFJLEVBQUMsT0FBWjtBQUFvQixhQUFTLEVBQUMsY0FBOUI7QUFBNkMsTUFBRSxFQUFDLFVBQWhEO0FBQTJELFFBQUksRUFBQyxVQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FGSixFQU9JO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFSTtBQUFPLFFBQUksRUFBQyxVQUFaO0FBQXVCLGFBQVMsRUFBQyxjQUFqQztBQUFnRCxNQUFFLEVBQUMsVUFBbkQ7QUFBOEQsUUFBSSxFQUFDLFVBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQVBKLEVBWUk7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUMsYUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFaSixFQWNJO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdDQURKLENBREosQ0FkSixDQUhKLENBREosQ0FESixDQVZKLEVBdUNJLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZDSixFQXdDSSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4Q0osQ0FESjtBQTZDSCxDQXZGRDs7R0FBTUwsUTs7S0FBQUEsUTtBQTJGVUEsdUVBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxyZWdpc3Rlci5qcy42MDQ2NjM4ZjcyYmZiMGVhNTM0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBUb3BIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXRzL1RvcEhlYWRlcic7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXRzL05hdmJhcic7XHJcbmltcG9ydCBQYWdlQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL1BhZ2VCYW5uZXInO1xyXG5pbXBvcnQgRmFjaWxpdHlTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vRmFjaWxpdHlTbGlkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0cy9Gb290ZXInO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1VzZXJDb250ZXh0JztcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICAgIGNvbnN0IGhhbmRsZVJlZ2lzdGVyID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnRkZWZhdWx0KCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBlLnRhcmdldC5lbGVtZW50cy51c2VybmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGUudGFyZ2V0LmVsZW1lbnRzLnBhc3N3b3JkLnZhbHVlLFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBteUhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKVxyXG4gICAgICAgIGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkFQSV9IT1NUICsgJy9hcGkvYWNjb3VudHMnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlcm5hbWU6IGUudGFyZ2V0LmVsZW1lbnRzLnVzZXJuYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkOiBlLnRhcmdldC5lbGVtZW50cy5wYXNzd29yZC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IG15SGVhZGVyc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YVswXSAmJiByZXMuZGF0YVswXS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1ThuqFvIHTDoGkga2hv4bqjbiB0aMOgbmggY8O0bmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdCw6J5IGdp4budIGLhuqFuIGPDsycsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgU3dhbC5maXJlKHtcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICfEkMSDbmcgbmjhuq1wIGtow7RuZyB0aMOgbmggY8O0bmcnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnVXNlcm5hbWUgaG/hurdjIHBhc3N3b3JkIGtow7RuZyBo4bujcCBs4buHJyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8VG9wSGVhZGVyIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPFBhZ2VCYW5uZXJcclxuICAgICAgICAgICAgICAgIHBhZ2VUaXRsZT1cIlTDoGkga2hv4bqjblwiXHJcbiAgICAgICAgICAgICAgICBob21lUGFnZVVybD1cIi9cIlxyXG4gICAgICAgICAgICAgICAgaG9tZVBhZ2VUZXh0PVwiVHJhbmcgY2jhu6dcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZVRleHQ9XCLEkMSDbmcga8O9XCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNpZ251cC1hcmVhIHB0Yi0xMDBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWdudXAtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+VOG6oW8gdMOgaSBraG/huqNuPC9oMj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT5oYW5kbGVSZWdpc3RlcihlKX0gY2xhc3NOYW1lPVwic2lnbnVwLWZvcm1cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VXNlcm5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiZGVmYXVsdC1idG5cIj7EkMSDbmcga8O9PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInJldHVybi1zdG9yZVwiPlRy4bufIGzhuqFpIHRyYW5nIGNo4bunPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgPEZhY2lsaXR5U2xpZGVyIC8+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKFJlZ2lzdGVyKSJdLCJzb3VyY2VSb290IjoiIn0=
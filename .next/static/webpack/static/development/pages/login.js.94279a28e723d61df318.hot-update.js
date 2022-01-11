webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
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
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../contexts/UserContext */ "./contexts/UserContext.js");
var _jsxFileName = "F:\\N\u0103m 4 h\u1ECDc k\u1EF3 1\\M\xF4 h\xECnh h\xF3a ph\u1EA7n m\u1EC1m\\New folder (2)\\pages\\login.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Login = () => {
  _s();

  const user = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_9__["UserContext"]);
  console.log(user);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (user.login === true) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    }
  }, [user.login]);

  const handleLogin = async e => {
    e.preventDefault();
    const account = {
      username: e.target.elements.username.value,
      password: e.target.elements.password.value
    };
    let data;

    const qs = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");

    const query = qs.stringify({
      filters: {
        UserName: {
          $eq: account.username
        }
      },
      populate: '*'
    }, {
      encodeValuesOnly: true
    });
    await fetch("http://localhost:1337" + `/api/accounts?${query}`).then(response => response.json()).then(res => {
      if (res.data && res.data[0] && res.data[0].attributes) {
        if (res.data[0].attributes.password === account.p) data = res.data[0];
      }
    });

    if (!data) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
        icon: 'error',
        title: 'Đăng nhập không thành công',
        text: 'Username hoặc password không hợp lệ'
      });
      return;
    } //user.userLogin(data);

  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(_components_Layouts_TopHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user: user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }), __jsx(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }), __jsx(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pageTitle: "T\xE0i kho\u1EA3n",
    homePageUrl: "/",
    homePageText: "Trang ch\u1EE7",
    activePageText: "\u0110\u0103ng nh\u1EADp",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }), __jsx("section", {
    className: "login-area ptb-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "login-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 33
    }
  }, "\u0110\u0103ng nh\u1EADp"), __jsx("form", {
    onSubmit: handleLogin,
    className: "login-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 37
    }
  }, __jsx("input", {
    type: "username",
    className: "form-control",
    placeholder: "Nh\u1EADp username",
    name: "username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 37
    }
  }, __jsx("input", {
    type: "password",
    className: "form-control",
    placeholder: "Nh\u1EADp password",
    name: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 41
    }
  })), __jsx("button", {
    type: "submit",
    className: "default-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 37
    }
  }, "\u0110\u0103ng nh\u1EADp"), __jsx("div", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 37
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/forgot-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 41
    }
  }, __jsx("a", {
    className: "forgot-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 45
    }
  }, "Qu\xEAn m\u1EADt kh\u1EA9u?")))))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "new-customer-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 33
    }
  }, "Kh\xE1ch h\xE0ng m\u1EDBi"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 33
    }
  }, "T\u1EA1o t\xE0i kho\u1EA3n m\u1EDBi"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 33
    }
  }, "T\u1EA1o t\xE0i kho\u1EA3n m\u1EDBi \u0111\u1EC3 ti\u1EBFn h\xE0nh mua s\u1EA3n ph\u1EA9m m\u1ED9t c\xE1ch d\u1EC5 d\xE0ng"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/register",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 33
    }
  }, __jsx("a", {
    className: "optional-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 37
    }
  }, "T\u1EA1o t\xE0i kho\u1EA3n m\u1EDBi"))))))), __jsx(_components_Common_FacilitySlider__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }));
};

_s(Login, "J31D5DK87DAWtC0w/DAm99MRGEI=");

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZXIiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwibG9naW4iLCJSb3V0ZXIiLCJwdXNoIiwiaGFuZGxlTG9naW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJhY2NvdW50IiwidXNlcm5hbWUiLCJ0YXJnZXQiLCJlbGVtZW50cyIsInZhbHVlIiwicGFzc3dvcmQiLCJkYXRhIiwicXMiLCJyZXF1aXJlIiwicXVlcnkiLCJzdHJpbmdpZnkiLCJmaWx0ZXJzIiwiVXNlck5hbWUiLCIkZXEiLCJwb3B1bGF0ZSIsImVuY29kZVZhbHVlc09ubHkiLCJmZXRjaCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzIiwiYXR0cmlidXRlcyIsInAiLCJTd2FsIiwiZmlyZSIsImljb24iLCJ0aXRsZSIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFBQTs7QUFDaEIsUUFBTUMsSUFBSSxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUF2QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjtBQUNBSyx5REFBUyxDQUFDLE1BQU07QUFDWixRQUFJTCxJQUFJLENBQUNNLEtBQUwsS0FBZSxJQUFuQixFQUF5QjtBQUNyQkMsd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDSDtBQUNKLEdBSlEsRUFJTixDQUFDUixJQUFJLENBQUNNLEtBQU4sQ0FKTSxDQUFUOztBQUtBLFFBQU1HLFdBQVcsR0FBRyxNQUFPQyxDQUFQLElBQWE7QUFDN0JBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQU1DLE9BQU8sR0FBRztBQUNaQyxj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SUFKSixFQU1JLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsY0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQURKLENBTkosQ0FESixDQXpCSixDQURKLENBREosQ0FWSixFQXFESSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyREosRUFzREksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdERKLENBREo7QUEwREgsQ0F2R0Q7O0dBQU1WLEs7O0tBQUFBLEs7QUEwR1VBLG9FQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbG9naW4uanMuOTQyNzlhMjhlNzIzZDYxZGYzMTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBUb3BIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXRzL1RvcEhlYWRlcic7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXRzL05hdmJhcic7XHJcbmltcG9ydCBQYWdlQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL1BhZ2VCYW5uZXInO1xyXG5pbXBvcnQgRmFjaWxpdHlTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vRmFjaWxpdHlTbGlkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0cy9Gb290ZXInO1xyXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dHMvVXNlckNvbnRleHQnO1xyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodXNlci5sb2dpbiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3VzZXIubG9naW5dKVxyXG4gICAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50ID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogZS50YXJnZXQuZWxlbWVudHMudXNlcm5hbWUudmFsdWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBlLnRhcmdldC5lbGVtZW50cy5wYXNzd29yZC52YWx1ZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRhdGE7XHJcbiAgICAgICAgY29uc3QgcXMgPSByZXF1aXJlKCdxcycpO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZmlsdGVyczoge1xyXG4gICAgICAgICAgICAgICAgVXNlck5hbWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAkZXE6IGFjY291bnQudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb3B1bGF0ZTogJyonXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5OiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkFQSV9IT1NUICsgYC9hcGkvYWNjb3VudHM/JHtxdWVyeX1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGFbMF0gJiYgcmVzLmRhdGFbMF0uYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhWzBdLmF0dHJpYnV0ZXMucGFzc3dvcmQgPT09IGFjY291bnQucClcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gcmVzLmRhdGFbMF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnxJDEg25nIG5o4bqtcCBraMO0bmcgdGjDoG5oIGPDtG5nJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdVc2VybmFtZSBob+G6t2MgcGFzc3dvcmQga2jDtG5nIGjhu6NwIGzhu4cnLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy91c2VyLnVzZXJMb2dpbihkYXRhKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8VG9wSGVhZGVyIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPFBhZ2VCYW5uZXJcclxuICAgICAgICAgICAgICAgIHBhZ2VUaXRsZT1cIlTDoGkga2hv4bqjblwiXHJcbiAgICAgICAgICAgICAgICBob21lUGFnZVVybD1cIi9cIlxyXG4gICAgICAgICAgICAgICAgaG9tZVBhZ2VUZXh0PVwiVHJhbmcgY2jhu6dcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZVRleHQ9XCLEkMSDbmcgbmjhuq1wXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImxvZ2luLWFyZWEgcHRiLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+xJDEg25nIG5o4bqtcDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0gY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIk5o4bqtcCB1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJOaOG6rXAgcGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuXCI+xJDEg25nIG5o4bqtcDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mb3Jnb3QtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb3Jnb3QtcGFzc3dvcmRcIj5RdcOqbiBt4bqtdCBraOG6qXU/PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1jdXN0b21lci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPktow6FjaCBow6BuZyBt4bubaTwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlThuqFvIHTDoGkga2hv4bqjbiBt4bubaTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5U4bqhbyB0w6BpIGtob+G6o24gbeG7m2kgxJHhu4MgdGnhur9uIGjDoG5oIG11YSBz4bqjbiBwaOG6qW0gbeG7mXQgY8OhY2ggZOG7hSBkw6BuZzwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJvcHRpb25hbC1idG5cIj5U4bqhbyB0w6BpIGtob+G6o24gbeG7m2k8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxGYWNpbGl0eVNsaWRlciAvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoTG9naW4pOyJdLCJzb3VyY2VSb290IjoiIn0=
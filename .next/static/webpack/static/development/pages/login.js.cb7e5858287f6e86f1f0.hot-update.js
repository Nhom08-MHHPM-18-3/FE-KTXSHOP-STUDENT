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
        if (res.data[0].attributes) data = res.data[0];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZXIiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwibG9naW4iLCJSb3V0ZXIiLCJwdXNoIiwiaGFuZGxlTG9naW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJhY2NvdW50IiwidXNlcm5hbWUiLCJ0YXJnZXQiLCJlbGVtZW50cyIsInZhbHVlIiwicGFzc3dvcmQiLCJkYXRhIiwicXMiLCJyZXF1aXJlIiwicXVlcnkiLCJzdHJpbmdpZnkiLCJmaWx0ZXJzIiwiVXNlck5hbWUiLCIkZXEiLCJwb3B1bGF0ZSIsImVuY29kZVZhbHVlc09ubHkiLCJmZXRjaCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzIiwiYXR0cmlidXRlcyIsIlN3YWwiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUFBOztBQUNoQixRQUFNQyxJQUFJLEdBQUdDLHdEQUFVLENBQUNDLGlFQUFELENBQXZCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaO0FBQ0FLLHlEQUFTLENBQUMsTUFBTTtBQUNaLFFBQUlMLElBQUksQ0FBQ00sS0FBTCxLQUFlLElBQW5CLEVBQXlCO0FBQ3JCQyx3REFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNIO0FBQ0osR0FKUSxFQUlOLENBQUNSLElBQUksQ0FBQ00sS0FBTixDQUpNLENBQVQ7O0FBS0EsUUFBTUcsV0FBVyxHQUFHLE1BQU9DLENBQVAsSUFBYTtBQUM3QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBTUMsT0FBTyxHQUFHO0FBQ1pDLGNBQVEs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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkNBREosQ0FOSixDQURKLENBekJKLENBREosQ0FESixDQVZKLEVBcURJLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJESixFQXNESSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0REosQ0FESjtBQTBESCxDQXZHRDs7R0FBTVYsSzs7S0FBQUEsSztBQTBHVUEsb0VBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxsb2dpbi5qcy5jYjdlNTg1ODI4N2Y2ZTg2ZjFmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFRvcEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dHMvVG9wSGVhZGVyJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dHMvTmF2YmFyJztcclxuaW1wb3J0IFBhZ2VCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vUGFnZUJhbm5lcic7XHJcbmltcG9ydCBGYWNpbGl0eVNsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9GYWNpbGl0eVNsaWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXRzL0Zvb3Rlcic7XHJcbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9Vc2VyQ29udGV4dCc7XHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyLmxvZ2luID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICB9XHJcbiAgICB9LCBbdXNlci5sb2dpbl0pXHJcbiAgICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBlLnRhcmdldC5lbGVtZW50cy51c2VybmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGUudGFyZ2V0LmVsZW1lbnRzLnBhc3N3b3JkLnZhbHVlLFxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZGF0YTtcclxuICAgICAgICBjb25zdCBxcyA9IHJlcXVpcmUoJ3FzJyk7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBxcy5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBmaWx0ZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBVc2VyTmFtZToge1xyXG4gICAgICAgICAgICAgICAgICAgICRlcTogYWNjb3VudC51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvcHVsYXRlOiAnKidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHk6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX0hPU1QgKyBgL2FwaS9hY2NvdW50cz8ke3F1ZXJ5fWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YVswXSAmJiByZXMuZGF0YVswXS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGFbMF0uYXR0cmlidXRlcylcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gcmVzLmRhdGFbMF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnxJDEg25nIG5o4bqtcCBraMO0bmcgdGjDoG5oIGPDtG5nJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdVc2VybmFtZSBob+G6t2MgcGFzc3dvcmQga2jDtG5nIGjhu6NwIGzhu4cnLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy91c2VyLnVzZXJMb2dpbihkYXRhKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8VG9wSGVhZGVyIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPFBhZ2VCYW5uZXJcclxuICAgICAgICAgICAgICAgIHBhZ2VUaXRsZT1cIlTDoGkga2hv4bqjblwiXHJcbiAgICAgICAgICAgICAgICBob21lUGFnZVVybD1cIi9cIlxyXG4gICAgICAgICAgICAgICAgaG9tZVBhZ2VUZXh0PVwiVHJhbmcgY2jhu6dcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZVRleHQ9XCLEkMSDbmcgbmjhuq1wXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImxvZ2luLWFyZWEgcHRiLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+xJDEg25nIG5o4bqtcDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0gY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIk5o4bqtcCB1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJOaOG6rXAgcGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuXCI+xJDEg25nIG5o4bqtcDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mb3Jnb3QtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb3Jnb3QtcGFzc3dvcmRcIj5RdcOqbiBt4bqtdCBraOG6qXU/PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1jdXN0b21lci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPktow6FjaCBow6BuZyBt4bubaTwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlThuqFvIHTDoGkga2hv4bqjbiBt4bubaTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5U4bqhbyB0w6BpIGtob+G6o24gbeG7m2kgxJHhu4MgdGnhur9uIGjDoG5oIG11YSBz4bqjbiBwaOG6qW0gbeG7mXQgY8OhY2ggZOG7hSBkw6BuZzwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJvcHRpb25hbC1idG5cIj5U4bqhbyB0w6BpIGtob+G6o24gbeG7m2k8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxGYWNpbGl0eVNsaWRlciAvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoTG9naW4pOyJdLCJzb3VyY2VSb290IjoiIn0=
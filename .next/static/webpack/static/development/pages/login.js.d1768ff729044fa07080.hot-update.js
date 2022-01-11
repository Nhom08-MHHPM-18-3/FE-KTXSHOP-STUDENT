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
        if (res.data[0].attributes.password === account.password) {
          data = res.data[0];
        }
      }
    });

    if (!data) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
        icon: 'error',
        title: 'Đăng nhập không thành công',
        text: 'Username hoặc password không hợp lệ'
      });
      return;
    }

    user.userLogin(data);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx(_components_Layouts_TopHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    user: user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }), __jsx(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
      lineNumber: 62,
      columnNumber: 13
    }
  }), __jsx("section", {
    className: "login-area ptb-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "login-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 29
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 33
    }
  }, "\u0110\u0103ng nh\u1EADp"), __jsx("form", {
    onSubmit: handleLogin,
    className: "login-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
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
      lineNumber: 78,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
      lineNumber: 82,
      columnNumber: 41
    }
  })), __jsx("button", {
    type: "submit",
    className: "default-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 37
    }
  }, "\u0110\u0103ng nh\u1EADp"), __jsx("div", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 37
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/forgot-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 41
    }
  }, __jsx("a", {
    className: "forgot-password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 45
    }
  }, "Qu\xEAn m\u1EADt kh\u1EA9u?")))))), __jsx("div", {
    className: "col-lg-6 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "new-customer-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 33
    }
  }, "Kh\xE1ch h\xE0ng m\u1EDBi"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 33
    }
  }, "T\u1EA1o t\xE0i kho\u1EA3n m\u1EDBi"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 33
    }
  }, "T\u1EA1o t\xE0i kho\u1EA3n m\u1EDBi \u0111\u1EC3 ti\u1EBFn h\xE0nh mua s\u1EA3n ph\u1EA9m m\u1ED9t c\xE1ch d\u1EC5 d\xE0ng"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/register",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 33
    }
  }, __jsx("a", {
    className: "optional-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 37
    }
  }, "T\u1EA1o t\xE0i kho\u1EA3n m\u1EDBi"))))))), __jsx(_components_Common_FacilitySlider__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZXIiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwibG9naW4iLCJSb3V0ZXIiLCJwdXNoIiwiaGFuZGxlTG9naW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJhY2NvdW50IiwidXNlcm5hbWUiLCJ0YXJnZXQiLCJlbGVtZW50cyIsInZhbHVlIiwicGFzc3dvcmQiLCJkYXRhIiwicXMiLCJyZXF1aXJlIiwicXVlcnkiLCJzdHJpbmdpZnkiLCJmaWx0ZXJzIiwiVXNlck5hbWUiLCIkZXEiLCJwb3B1bGF0ZSIsImVuY29kZVZhbHVlc09ubHkiLCJmZXRjaCIsInByb2Nlc3MiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzIiwiYXR0cmlidXRlcyIsIlN3YWwiLCJmaXJlIiwiaWNvbiIsInRpdGxlIiwidGV4dCIsInVzZXJMb2dpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUFBOztBQUNoQixRQUFNQyxJQUFJLEdBQUdDLHdEQUFVLENBQUNDLGlFQUFELENBQXZCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaO0FBQ0FLLHlEQUFTLENBQUMsTUFBTTtBQUNaLFFBQUlMLElBQUksQ0FBQ00sS0FBTCxLQUFlLElBQW5CLEVBQXlCO0FBQ3JCQyx3REFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNIO0FBQ0osR0FKUSxFQUlOLENBQUNSLElBQUksQ0FBQ00sS0FBTixDQUpNLENBQVQ7O0FBS0EsUUFBTUcsV0FBVyxHQUFHLE1BQU9DLENBQVAsSUFBYTtBQUM3QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBTUMsT0FBTyxHQUFH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QUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0lBSkosRUFNSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLGNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FESixDQU5KLENBREosQ0F6QkosQ0FESixDQURKLENBVkosRUFxREksTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckRKLEVBc0RJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRESixDQURKO0FBMERILENBekdEOztHQUFNVixLOztLQUFBQSxLO0FBNEdVQSxvRUFBaEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxvZ2luLmpzLmQxNzY4ZmY3MjkwNDRmYTA3MDgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgVG9wSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0cy9Ub3BIZWFkZXInO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0cy9OYXZiYXInO1xyXG5pbXBvcnQgUGFnZUJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9QYWdlQmFubmVyJztcclxuaW1wb3J0IEZhY2lsaXR5U2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0ZhY2lsaXR5U2xpZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dHMvRm9vdGVyJztcclxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1VzZXJDb250ZXh0JztcclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIubG9naW4gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFt1c2VyLmxvZ2luXSlcclxuICAgIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudCA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IGUudGFyZ2V0LmVsZW1lbnRzLnVzZXJuYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogZS50YXJnZXQuZWxlbWVudHMucGFzc3dvcmQudmFsdWUsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkYXRhO1xyXG4gICAgICAgIGNvbnN0IHFzID0gcmVxdWlyZSgncXMnKTtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IHFzLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGZpbHRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFVzZXJOYW1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGVxOiBhY2NvdW50LnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9wdWxhdGU6ICcqJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5BUElfSE9TVCArIGAvYXBpL2FjY291bnRzPyR7cXVlcnl9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhICYmIHJlcy5kYXRhWzBdICYmIHJlcy5kYXRhWzBdLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGFbMF0uYXR0cmlidXRlcy5wYXNzd29yZCA9PT0gYWNjb3VudC5wYXNzd29yZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gcmVzLmRhdGFbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfEkMSDbmcgbmjhuq1wIGtow7RuZyB0aMOgbmggY8O0bmcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1VzZXJuYW1lIGhv4bq3YyBwYXNzd29yZCBraMO0bmcgaOG7o3AgbOG7hycsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1c2VyLnVzZXJMb2dpbihkYXRhKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8VG9wSGVhZGVyIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPFBhZ2VCYW5uZXJcclxuICAgICAgICAgICAgICAgIHBhZ2VUaXRsZT1cIlTDoGkga2hv4bqjblwiXHJcbiAgICAgICAgICAgICAgICBob21lUGFnZVVybD1cIi9cIlxyXG4gICAgICAgICAgICAgICAgaG9tZVBhZ2VUZXh0PVwiVHJhbmcgY2jhu6dcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZVRleHQ9XCLEkMSDbmcgbmjhuq1wXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImxvZ2luLWFyZWEgcHRiLTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+xJDEg25nIG5o4bqtcDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0gY2xhc3NOYW1lPVwibG9naW4tZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIk5o4bqtcCB1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJOaOG6rXAgcGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuXCI+xJDEg25nIG5o4bqtcDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mb3Jnb3QtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmb3Jnb3QtcGFzc3dvcmRcIj5RdcOqbiBt4bqtdCBraOG6qXU/PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ldy1jdXN0b21lci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPktow6FjaCBow6BuZyBt4bubaTwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlThuqFvIHTDoGkga2hv4bqjbiBt4bubaTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5U4bqhbyB0w6BpIGtob+G6o24gbeG7m2kgxJHhu4MgdGnhur9uIGjDoG5oIG11YSBz4bqjbiBwaOG6qW0gbeG7mXQgY8OhY2ggZOG7hSBkw6BuZzwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJvcHRpb25hbC1idG5cIj5U4bqhbyB0w6BpIGtob+G6o24gbeG7m2k8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgIDxGYWNpbGl0eVNsaWRlciAvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoTG9naW4pOyJdLCJzb3VyY2VSb290IjoiIn0=
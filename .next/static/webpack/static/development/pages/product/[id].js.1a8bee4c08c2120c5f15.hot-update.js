webpackHotUpdate("static\\development\\pages\\product\\[id].js",{

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layouts_TopHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layouts/TopHeader */ "./components/Layouts/TopHeader.js");
/* harmony import */ var _components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layouts/Navbar */ "./components/Layouts/Navbar.js");
/* harmony import */ var _components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Common/PageBanner */ "./components/Common/PageBanner.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ProductDetails_ProductDetailsStyleOne__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ProductDetails/ProductDetailsStyleOne */ "./components/ProductDetails/ProductDetailsStyleOne.js");
/* harmony import */ var _components_Common_FacilitySlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Common/FacilitySlider */ "./components/Common/FacilitySlider.js");
/* harmony import */ var _components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layouts/Footer */ "./components/Layouts/Footer.js");
/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../contexts/UserContext */ "./contexts/UserContext.js");
/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../contexts/CartContext */ "./contexts/CartContext.js");
var _jsxFileName = "F:\\N\u0103m 4 h\u1ECDc k\u1EF3 1\\M\xF4 h\xECnh h\xF3a ph\u1EA7n m\u1EC1m\\New folder (2)\\pages\\product\\[id].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Product = () => {
  _s();

  const user = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_8__["UserContext"]);
  const cart = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_9__["default"]);
  const {
    0: product,
    1: setProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: idProduct,
    1: setIdProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  let {
    id
  } = router.query;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const qs = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");

    const query = qs.stringify({
      filters: {
        id: {
          $eq: id
        }
      },
      populate: '*'
    }, {
      encodeValuesOnly: true
    });
    await fetch("http://localhost:1337" + `/api/products?${query}`).then(response => response.json()).then(res => {
      setID;
      setProduct(res.data[0].attributes);
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_components_Layouts_TopHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    user: user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }), __jsx(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pageTitle: "Chi ti\u1EBFt s\u1EA3n ph\u1EA9m",
    homePageUrl: "/",
    homePageText: "Trang ch\u1EE7",
    activePageText: product.ProductName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }), __jsx(_components_ProductDetails_ProductDetailsStyleOne__WEBPACK_IMPORTED_MODULE_5__["default"], {
    product: product,
    cart: cart,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }), __jsx(_components_Common_FacilitySlider__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }));
};

_s(Product, "nTLazk97EYl0EL+Rs0/jnx3rH/o=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = Product;
/* harmony default export */ __webpack_exports__["default"] = (Product);

var _c;

$RefreshReg$(_c, "Product");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0Ly5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0IiwidXNlciIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsImNhcnQiLCJDYXJ0Q29udGV4dCIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwidXNlU3RhdGUiLCJpZFByb2R1Y3QiLCJzZXRJZFByb2R1Y3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlRWZmZWN0IiwiZmV0Y2hQcm9kdWN0IiwicXMiLCJyZXF1aXJlIiwic3RyaW5naWZ5IiwiZmlsdGVycyIsIiRlcSIsInBvcHVsYXRlIiwiZW5jb2RlVmFsdWVzT25seSIsImZldGNoIiwicHJvY2VzcyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXMiLCJzZXRJRCIsImRhdGEiLCJhdHRyaWJ1dGVzIiwiUHJvZHVjdE5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE9BQU8sR0FBRyxNQUFNO0FBQUE7O0FBQ2xCLFFBQU1DLElBQUksR0FBR0Msd0RBQVUsQ0FBQ0MsaUVBQUQsQ0FBdkI7QUFDQSxRQUFNQyxJQUFJLEdBQUdGLHdEQUFVLENBQUNHLDZEQUFELENBQXZCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLEVBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJGLHNEQUFRLEVBQTFDO0FBQ0EsUUFBTUcsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQUk7QUFBRUM7QUFBRixNQUFTRixNQUFNLENBQUNHLEtBQXBCO0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUNaQyxnQkFBWTtBQUNmLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBR0EsUUFBTUEsWUFBWSxHQUFHLFlBQVc7QUFDNUIsVUFBTUMsRUFBRSxHQUFHQyxtQkFBTyxDQUFDLDBDQUFELENBQWxCOztBQUNBLFVBQU1KLEtBQUssR0FBR0csRUFBRSxDQUFDRSxTQUFILENBQWE7QUFDdkJDLGFBQU8sRUFBRTtBQUNMUCxVQUFFLEVBQUU7QUFDQVEsYUFBRyxFQUFFUjtBQURMO0FBREMsT0FEYztBQU12QlMsY0FBUSxFQUFFO0FBTmEsS0FBYixFQU9YO0FBQ0NDLHNCQUFnQixFQUFFO0FBRG5CLEtBUFcsQ0FBZDtBQVVBLFVBQU1DLEtBQUssQ0FBQ0MsdUJBQUEsR0FBd0IsaUJBQWdCWCxLQUFNLEVBQS9DLENBQUwsQ0FDRFksSUFEQyxDQUNJQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQURoQixFQUVERixJQUZDLENBRUlHLEdBQUcsSUFBSTtBQUNUQyxXQUFLO0FBQ0x2QixnQkFBVSxDQUFDc0IsR0FBRyxDQUFDRSxJQUFKLENBQVMsQ0FBVCxFQUFZQyxVQUFiLENBQVY7QUFDSCxLQUxDLENBQU47QUFNSCxHQWxCRDs7QUFtQkEsU0FDSSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxRUFBRDtBQUFXLFFBQUksRUFBRS9CLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQyxxRUFBRDtBQUNJLGFBQVMsRUFBQyxrQ0FEZDtBQUVJLGVBQVcsRUFBQyxHQUZoQjtBQUdJLGdCQUFZLEVBQUMsZ0JBSGpCO0FBSUksa0JBQWMsRUFBRUssT0FBTyxDQUFDMkIsV0FKNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBU0ksTUFBQyx5RkFBRDtBQUF3QixXQUFPLEVBQUUzQixPQUFqQztBQUEwQyxRQUFJLEVBQUVGLElBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFUSixFQVVJLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLEVBV0ksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEosQ0FESjtBQWVILENBNUNEOztHQUFNSixPO1VBS2FZLHFEOzs7S0FMYlosTztBQStDU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHByb2R1Y3RcXFtpZF0uanMuMWE4YmVlNGMwOGMyMTIwYzVmMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVG9wSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0cy9Ub3BIZWFkZXInO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0cy9OYXZiYXInO1xyXG5pbXBvcnQgUGFnZUJhbm5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbW1vbi9QYWdlQmFubmVyJztcclxuaW1wb3J0IHsgdXNlUm91dGVyLCB1c2VQYXJhbXMgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlsc1N0eWxlT25lIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdERldGFpbHMvUHJvZHVjdERldGFpbHNTdHlsZU9uZSc7XHJcbmltcG9ydCBGYWNpbGl0eVNsaWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbW1vbi9GYWNpbGl0eVNsaWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXRzL0Zvb3Rlcic7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvVXNlckNvbnRleHQnO1xyXG5pbXBvcnQgQ2FydENvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dHMvQ2FydENvbnRleHQnO1xyXG5cclxuY29uc3QgUHJvZHVjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICAgIGNvbnN0IGNhcnQgPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcclxuICAgIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKHt9KVxyXG4gICAgY29uc3QgW2lkUHJvZHVjdCwgc2V0SWRQcm9kdWN0XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGxldCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoUHJvZHVjdCgpO1xyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCBmZXRjaFByb2R1Y3QgPSBhc3luYyAoKSA9PntcclxuICAgICAgICBjb25zdCBxcyA9IHJlcXVpcmUoJ3FzJyk7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBxcy5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBmaWx0ZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBpZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICRlcTogaWQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwb3B1bGF0ZTogJyonXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5OiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkFQSV9IT1NUICsgYC9hcGkvcHJvZHVjdHM/JHtxdWVyeX1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRJRFxyXG4gICAgICAgICAgICAgICAgc2V0UHJvZHVjdChyZXMuZGF0YVswXS5hdHRyaWJ1dGVzKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8VG9wSGVhZGVyIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPFBhZ2VCYW5uZXJcclxuICAgICAgICAgICAgICAgIHBhZ2VUaXRsZT1cIkNoaSB0aeG6v3Qgc+G6o24gcGjhuqltXCJcclxuICAgICAgICAgICAgICAgIGhvbWVQYWdlVXJsPVwiL1wiXHJcbiAgICAgICAgICAgICAgICBob21lUGFnZVRleHQ9XCJUcmFuZyBjaOG7p1wiXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlVGV4dD17cHJvZHVjdC5Qcm9kdWN0TmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxzU3R5bGVPbmUgcHJvZHVjdD17cHJvZHVjdH0gY2FydD17Y2FydH0vPlxyXG4gICAgICAgICAgICA8RmFjaWxpdHlTbGlkZXIgLz5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDsiXSwic291cmNlUm9vdCI6IiJ9
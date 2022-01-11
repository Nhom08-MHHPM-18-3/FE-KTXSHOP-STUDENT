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
      setIdProduct(res.data.id);
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
    id: id,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0Ly5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0IiwidXNlciIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsImNhcnQiLCJDYXJ0Q29udGV4dCIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwidXNlU3RhdGUiLCJpZFByb2R1Y3QiLCJzZXRJZFByb2R1Y3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlRWZmZWN0IiwiZmV0Y2hQcm9kdWN0IiwicXMiLCJyZXF1aXJlIiwic3RyaW5naWZ5IiwiZmlsdGVycyIsIiRlcSIsInBvcHVsYXRlIiwiZW5jb2RlVmFsdWVzT25seSIsImZldGNoIiwicHJvY2VzcyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXMiLCJkYXRhIiwiYXR0cmlidXRlcyIsIlByb2R1Y3ROYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUFBOztBQUNsQixRQUFNQyxJQUFJLEdBQUdDLHdEQUFVLENBQUNDLGlFQUFELENBQXZCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHRix3REFBVSxDQUFDRyw2REFBRCxDQUF2QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCRixzREFBUSxFQUExQztBQUNBLFFBQU1HLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFJO0FBQUVDO0FBQUYsTUFBU0YsTUFBTSxDQUFDRyxLQUFwQjtBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDWkMsZ0JBQVk7QUFDZixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUdBLFFBQU1BLFlBQVksR0FBRyxZQUFXO0FBQzVCLFVBQU1DLEVBQUUsR0FBR0MsbUJBQU8sQ0FBQywwQ0FBRCxDQUFsQjs7QUFDQSxVQUFNSixLQUFLLEdBQUdHLEVBQUUsQ0FBQ0UsU0FBSCxDQUFhO0FBQ3ZCQyxhQUFPLEVBQUU7QUFDTFAsVUFBRSxFQUFFO0FBQ0FRLGFBQUcsRUFBRVI7QUFETDtBQURDLE9BRGM7QUFNdkJTLGNBQVEsRUFBRTtBQU5hLEtBQWIsRUFPWDtBQUNDQyxzQkFBZ0IsRUFBRTtBQURuQixLQVBXLENBQWQ7QUFVQSxVQUFNQyxLQUFLLENBQUNDLHVCQUFBLEdBQXdCLGlCQUFnQlgsS0FBTSxFQUEvQyxDQUFMLENBQ0RZLElBREMsQ0FDSUMsUUFBUSxJQUFJQSxRQUFRLENBQUNDLElBQVQsRUFEaEIsRUFFREYsSUFGQyxDQUVJRyxHQUFHLElBQUk7QUFDVG5CLGtCQUFZLENBQUNtQixHQUFHLENBQUNDLElBQUosQ0FBU2pCLEVBQVYsQ0FBWjtBQUNBTixnQkFBVSxDQUFDc0IsR0FBRyxDQUFDQyxJQUFKLENBQVMsQ0FBVCxFQUFZQyxVQUFiLENBQVY7QUFDSCxLQUxDLENBQU47QUFNSCxHQWxCRDs7QUFtQkEsU0FDSSxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxRUFBRDtBQUFXLFFBQUksRUFBRTlCLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0ksTUFBQyxxRUFBRDtBQUNJLGFBQVMsRUFBQyxrQ0FEZDtBQUVJLGVBQVcsRUFBQyxHQUZoQjtBQUdJLGdCQUFZLEVBQUMsZ0JBSGpCO0FBSUksa0JBQWMsRUFBRUssT0FBTyxDQUFDMEIsV0FKNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBU0ksTUFBQyx5RkFBRDtBQUF3QixXQUFPLEVBQUUxQixPQUFqQztBQUEwQyxRQUFJLEVBQUVGLElBQWhEO0FBQXNELE1BQUUsRUFBRVMsRUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLEVBVUksTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkosRUFXSSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYSixDQURKO0FBZUgsQ0E1Q0Q7O0dBQU1iLE87VUFLYVkscUQ7OztLQUxiWixPO0FBK0NTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccHJvZHVjdFxcW2lkXS5qcy43MGZmN2Y4NWJiZjZlOWE0ZjA1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUb3BIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXRzL1RvcEhlYWRlcic7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXRzL05hdmJhcic7XHJcbmltcG9ydCBQYWdlQmFubmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tbW9uL1BhZ2VCYW5uZXInO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZVBhcmFtcyB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFByb2R1Y3REZXRhaWxzU3R5bGVPbmUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9kdWN0RGV0YWlscy9Qcm9kdWN0RGV0YWlsc1N0eWxlT25lJztcclxuaW1wb3J0IEZhY2lsaXR5U2xpZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tbW9uL0ZhY2lsaXR5U2xpZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dHMvRm9vdGVyJztcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cy9Vc2VyQ29udGV4dCc7XHJcbmltcG9ydCBDYXJ0Q29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0cy9DYXJ0Q29udGV4dCc7XHJcblxyXG5jb25zdCBQcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gICAgY29uc3QgY2FydCA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xyXG4gICAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoe30pXHJcbiAgICBjb25zdCBbaWRQcm9kdWN0LCBzZXRJZFByb2R1Y3RdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgbGV0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hQcm9kdWN0KCk7XHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnN0IGZldGNoUHJvZHVjdCA9IGFzeW5jICgpID0+e1xyXG4gICAgICAgIGNvbnN0IHFzID0gcmVxdWlyZSgncXMnKTtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IHFzLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGZpbHRlcnM6IHtcclxuICAgICAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGVxOiBpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvcHVsYXRlOiAnKidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHk6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX0hPU1QgKyBgL2FwaS9wcm9kdWN0cz8ke3F1ZXJ5fWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHNldElkUHJvZHVjdChyZXMuZGF0YS5pZClcclxuICAgICAgICAgICAgICAgIHNldFByb2R1Y3QocmVzLmRhdGFbMF0uYXR0cmlidXRlcylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPFRvcEhlYWRlciB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgIDxQYWdlQmFubmVyXHJcbiAgICAgICAgICAgICAgICBwYWdlVGl0bGU9XCJDaGkgdGnhur90IHPhuqNuIHBo4bqpbVwiXHJcbiAgICAgICAgICAgICAgICBob21lUGFnZVVybD1cIi9cIlxyXG4gICAgICAgICAgICAgICAgaG9tZVBhZ2VUZXh0PVwiVHJhbmcgY2jhu6dcIlxyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZVRleHQ9e3Byb2R1Y3QuUHJvZHVjdE5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxQcm9kdWN0RGV0YWlsc1N0eWxlT25lIHByb2R1Y3Q9e3Byb2R1Y3R9IGNhcnQ9e2NhcnR9IGlkPXtpZH0vPlxyXG4gICAgICAgICAgICA8RmFjaWxpdHlTbGlkZXIgLz5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDsiXSwic291cmNlUm9vdCI6IiJ9
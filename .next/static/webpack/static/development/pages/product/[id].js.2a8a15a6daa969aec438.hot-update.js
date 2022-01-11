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
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
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
      console.log(res.data);
      setProduct(res.data[0].attributes);
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(_components_Layouts_TopHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    user: user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }), __jsx(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }), __jsx(_components_Common_PageBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pageTitle: "Chi ti\u1EBFt s\u1EA3n ph\u1EA9m",
    homePageUrl: "/",
    homePageText: "Trang ch\u1EE7",
    activePageText: product.attributes.ProductName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }), __jsx(_components_ProductDetails_ProductDetailsStyleOne__WEBPACK_IMPORTED_MODULE_5__["default"], {
    product: product.attributes,
    cart: cart,
    id: product.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }), __jsx(_components_Common_FacilitySlider__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }));
};

_s(Product, "vk+Og7WpRnb/+629zQJKjqc3IFw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0Ly5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0IiwidXNlciIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsImNhcnQiLCJDYXJ0Q29udGV4dCIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwidXNlU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwidXNlRWZmZWN0IiwiZmV0Y2hQcm9kdWN0IiwicXMiLCJyZXF1aXJlIiwic3RyaW5naWZ5IiwiZmlsdGVycyIsIiRlcSIsInBvcHVsYXRlIiwiZW5jb2RlVmFsdWVzT25seSIsImZldGNoIiwicHJvY2VzcyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImF0dHJpYnV0ZXMiLCJQcm9kdWN0TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE1BQU07QUFBQTs7QUFDbEIsUUFBTUMsSUFBSSxHQUFHQyx3REFBVSxDQUFDQyxpRUFBRCxDQUF2QjtBQUNBLFFBQU1DLElBQUksR0FBR0Ysd0RBQVUsQ0FBQ0csNkRBQUQsQ0FBdkI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFJO0FBQUVDO0FBQUYsTUFBU0YsTUFBTSxDQUFDRyxLQUFwQjtBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDWkMsZ0JBQVk7QUFDZixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUdBLFFBQU1BLFlBQVksR0FBRyxZQUFXO0FBQzVCLFVBQU1DLEVBQUUsR0FBR0MsbUJBQU8sQ0FBQywwQ0FBRCxDQUFsQjs7QUFDQSxVQUFNSixLQUFLLEdBQUdHLEVBQUUsQ0FBQ0UsU0FBSCxDQUFhO0FBQ3ZCQyxhQUFPLEVBQUU7QUFDTFAsVUFBRSxFQUFFO0FBQ0FRLGFBQUcsRUFBRVI7QUFETDtBQURDLE9BRGM7QUFNdkJTLGNBQVEsRUFBRTtBQU5hLEtBQWIsRUFPWDtBQUNDQyxzQkFBZ0IsRUFBRTtBQURuQixLQVBXLENBQWQ7QUFVQSxVQUFNQyxLQUFLLENBQUNDLHVCQUFBLEdBQXdCLGlCQUFnQlgsS0FBTSxFQUEvQyxDQUFMLENBQ0RZLElBREMsQ0FDSUMsUUFBUSxJQUFJQSxRQUFRLENBQUNDLElBQVQsRUFEaEIsRUFFREYsSUFGQyxDQUVJRyxHQUFHLElBQUk7QUFDVEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csSUFBaEI7QUFDQXZCLGdCQUFVLENBQUNvQixHQUFHLENBQUNHLElBQUosQ0FBUyxDQUFULEVBQVlDLFVBQWIsQ0FBVjtBQUNILEtBTEMsQ0FBTjtBQU1ILEdBbEJEOztBQW1CQSxTQUNJLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHFFQUFEO0FBQVcsUUFBSSxFQUFFOUIsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSSxNQUFDLHFFQUFEO0FBQ0ksYUFBUyxFQUFDLGtDQURkO0FBRUksZUFBVyxFQUFDLEdBRmhCO0FBR0ksZ0JBQVksRUFBQyxnQkFIakI7QUFJSSxrQkFBYyxFQUFFSyxPQUFPLENBQUN5QixVQUFSLENBQW1CQyxXQUp2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFTSSxNQUFDLHlGQUFEO0FBQXdCLFdBQU8sRUFBRTFCLE9BQU8sQ0FBQ3lCLFVBQXpDO0FBQXFELFFBQUksRUFBRTNCLElBQTNEO0FBQWlFLE1BQUUsRUFBRUUsT0FBTyxDQUFDSyxFQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosRUFVSSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixFQVdJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhKLENBREo7QUFlSCxDQTNDRDs7R0FBTVgsTztVQUlhVSxxRDs7O0tBSmJWLE87QUE4Q1NBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwcm9kdWN0XFxbaWRdLmpzLjJhOGExNWE2ZGFhOTY5YWVjNDM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRvcEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dHMvVG9wSGVhZGVyJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dHMvTmF2YmFyJztcclxuaW1wb3J0IFBhZ2VCYW5uZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db21tb24vUGFnZUJhbm5lcic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciwgdXNlUGFyYW1zIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbHNTdHlsZU9uZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3REZXRhaWxzL1Byb2R1Y3REZXRhaWxzU3R5bGVPbmUnO1xyXG5pbXBvcnQgRmFjaWxpdHlTbGlkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db21tb24vRmFjaWxpdHlTbGlkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0cy9Gb290ZXInO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1VzZXJDb250ZXh0JztcclxuaW1wb3J0IENhcnRDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHRzL0NhcnRDb250ZXh0JztcclxuXHJcbmNvbnN0IFByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgICBjb25zdCBjYXJ0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XHJcbiAgICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgbGV0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hQcm9kdWN0KCk7XHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnN0IGZldGNoUHJvZHVjdCA9IGFzeW5jICgpID0+e1xyXG4gICAgICAgIGNvbnN0IHFzID0gcmVxdWlyZSgncXMnKTtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IHFzLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGZpbHRlcnM6IHtcclxuICAgICAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGVxOiBpZCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBvcHVsYXRlOiAnKidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHk6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX0hPU1QgKyBgL2FwaS9wcm9kdWN0cz8ke3F1ZXJ5fWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgc2V0UHJvZHVjdChyZXMuZGF0YVswXS5hdHRyaWJ1dGVzKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8VG9wSGVhZGVyIHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPFBhZ2VCYW5uZXJcclxuICAgICAgICAgICAgICAgIHBhZ2VUaXRsZT1cIkNoaSB0aeG6v3Qgc+G6o24gcGjhuqltXCJcclxuICAgICAgICAgICAgICAgIGhvbWVQYWdlVXJsPVwiL1wiXHJcbiAgICAgICAgICAgICAgICBob21lUGFnZVRleHQ9XCJUcmFuZyBjaOG7p1wiXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlVGV4dD17cHJvZHVjdC5hdHRyaWJ1dGVzLlByb2R1Y3ROYW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UHJvZHVjdERldGFpbHNTdHlsZU9uZSBwcm9kdWN0PXtwcm9kdWN0LmF0dHJpYnV0ZXN9IGNhcnQ9e2NhcnR9IGlkPXtwcm9kdWN0LmlkfS8+XHJcbiAgICAgICAgICAgIDxGYWNpbGl0eVNsaWRlciAvPlxyXG4gICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0OyJdLCJzb3VyY2VSb290IjoiIn0=
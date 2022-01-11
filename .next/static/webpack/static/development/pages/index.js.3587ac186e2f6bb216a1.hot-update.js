webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Common/SingleProduct.js":
/*!********************************************!*\
  !*** ./components/Common/SingleProduct.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\N\u0103m 4 h\u1ECDc k\u1EF3 1\\M\xF4 h\xECnh h\xF3a ph\u1EA7n m\u1EC1m\\New folder (2)\\components\\Common\\SingleProduct.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class SingleProduct extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      QuickViewModal: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "toggleModal", () => {
      this.setState({
        QuickViewModal: !this.state.QuickViewModal
      });
      this.props.ontoggleModal(this.state.QuickViewModal);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleModalProduct", product => {
      this.props.onhandleModalProduct(product);
    });
  }

  render() {
    let {
      product,
      styleCls,
      styleClsTwo,
      onHandleAddToCart,
      id
    } = this.props;
    return __jsx("div", {
      className: styleCls,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: styleClsTwo || "single-products-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "products-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: `/product/${id}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 25
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: `${product.imageUrl}`,
      className: "main-image",
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 33
      }
    }), __jsx("img", {
      src: `${product.imageUrl}`,
      className: "hover-image",
      alt: "image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 33
      }
    }))), __jsx("div", {
      className: "products-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 25
      }
    }, __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 29
      }
    })), product.onSale ? __jsx("div", {
      className: "sale-tag",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 33
      }
    }, "Sale!") : null, product.newProduct ? __jsx("div", {
      className: "new-tag",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 33
      }
    }, "New!") : null), __jsx("div", {
      className: "products-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: `/product/${id}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 29
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 59
      }
    }, product.ProductName))), __jsx("div", {
      className: "price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 25
      }
    }, product.offer ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 37
      }
    }, __jsx("span", {
      className: "old-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 41
      }
    }, product.oldPrice, " \u0111"), __jsx("span", {
      className: "new-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 41
      }
    }, product.Price, " \u0111")) : __jsx("span", {
      className: "new-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 37
      }
    }, Intl.NumberFormat().format(product.Price), " \u0111")), __jsx("div", {
      className: "star-rating",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 25
      }
    }, __jsx("i", {
      className: "bx bxs-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 29
      }
    }), __jsx("i", {
      className: "bx bxs-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 29
      }
    }), __jsx("i", {
      className: "bx bxs-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 29
      }
    }), __jsx("i", {
      className: "bx bxs-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 29
      }
    }), __jsx("i", {
      className: "bx bxs-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 29
      }
    })), __jsx("a", {
      className: "add-to-cart",
      onClick: e => {
        e.preventDefault();
        onHandleAddToCart(id, 1);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 25
      }
    }, "Th\xEAm v\xE0o gi\u1ECF")), product.discount ? __jsx("span", {
      className: "products-discount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 29
      }
    }, "Gi\u1EA3m", product.discountOff, "%")) : null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SingleProduct);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1vbi9TaW5nbGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIlNpbmdsZVByb2R1Y3QiLCJDb21wb25lbnQiLCJRdWlja1ZpZXdNb2RhbCIsInNldFN0YXRlIiwic3RhdGUiLCJwcm9wcyIsIm9udG9nZ2xlTW9kYWwiLCJwcm9kdWN0Iiwib25oYW5kbGVNb2RhbFByb2R1Y3QiLCJyZW5kZXIiLCJzdHlsZUNscyIsInN0eWxlQ2xzVHdvIiwib25IYW5kbGVBZGRUb0NhcnQiLCJpZCIsImltYWdlVXJsIiwib25TYWxlIiwibmV3UHJvZHVjdCIsIlByb2R1Y3ROYW1lIiwib2ZmZXIiLCJvbGRQcmljZSIsIlByaWNlIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc2NvdW50IiwiZGlzY291bnRPZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLGFBQU4sU0FBNEJDLCtDQUE1QixDQUFzQztBQUFBO0FBQUE7O0FBQUEsNkdBQzFCO0FBQ0pDLG9CQUFjLEVBQUU7QUFEWixLQUQwQjs7QUFBQSxtSEFLcEIsTUFBTTtBQUNoQixXQUFLQyxRQUFMLENBQWM7QUFDVkQsc0JBQWMsRUFBRSxDQUFDLEtBQUtFLEtBQUwsQ0FBV0Y7QUFEbEIsT0FBZDtBQUdBLFdBQUtHLEtBQUwsQ0FBV0MsYUFBWCxDQUF5QixLQUFLRixLQUFMLENBQVdGLGNBQXBDO0FBQ0gsS0FWaUM7O0FBQUEsMEhBWVpLLE9BQUQsSUFBYTtBQUM5QixXQUFLRixLQUFMLENBQVdHLG9CQUFYLENBQWdDRCxPQUFoQztBQUNILEtBZGlDO0FBQUE7O0FBZWxDRSxRQUFNLEdBQUc7QUFFTCxRQUFJO0FBQUVGLGFBQUY7QUFBV0csY0FBWDtBQUFxQkMsaUJBQXJCO0FBQWtDQyx1QkFBbEM7QUFBcURDO0FBQXJELFFBQTRELEtBQUtSLEtBQXJFO0FBQ0EsV0FD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QUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosRUFHSTtBQUFHLGVBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFISixFQUlJO0FBQUcsZUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpKLEVBS0k7QUFBRyxlQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTEosQ0FkSixFQXFCSTtBQUNJLGVBQVMsRUFBQyxhQURkO0FBRUksYUFBTyxFQUFHSSxDQUFELElBQU87QUFDWkEsU0FBQyxDQUFDQyxjQUFGO0FBQW9CYix5QkFBaUIsQ0FBQ0MsRUFBRCxFQUFJLENBQUosQ0FBakI7QUFDdkIsT0FKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQXJCSixDQTdDSixFQTJFS04sT0FBTyxDQUFDbUIsUUFBUixHQUNHO0FBQU0sZUFBUyxFQUFDLG1CQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDU25CLE9BQU8sQ0FBQ29CLFdBRGpCLE1BREosQ0FESCxHQU1HLElBakZSLENBREosQ0FESjtBQXVGSDs7QUF6R2lDOztBQTRHdkIzQiw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMzU4N2FjMTg2ZTJmNmJiMjE2YTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jbGFzcyBTaW5nbGVQcm9kdWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIFF1aWNrVmlld01vZGFsOiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBRdWlja1ZpZXdNb2RhbDogIXRoaXMuc3RhdGUuUXVpY2tWaWV3TW9kYWxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnByb3BzLm9udG9nZ2xlTW9kYWwodGhpcy5zdGF0ZS5RdWlja1ZpZXdNb2RhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlTW9kYWxQcm9kdWN0ID0gKHByb2R1Y3QpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uaGFuZGxlTW9kYWxQcm9kdWN0KHByb2R1Y3QpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IHsgcHJvZHVjdCwgc3R5bGVDbHMsIHN0eWxlQ2xzVHdvLCBvbkhhbmRsZUFkZFRvQ2FydCwgaWQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlQ2xzfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZUNsc1R3byB8fCBcInNpbmdsZS1wcm9kdWN0cy1ib3hcIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtpZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHtwcm9kdWN0LmltYWdlVXJsfWB9IGNsYXNzTmFtZT1cIm1haW4taW1hZ2VcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake3Byb2R1Y3QuaW1hZ2VVcmx9YH0gY2xhc3NOYW1lPVwiaG92ZXItaW1hZ2VcIiBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVpY2stdmlldy1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdD9pZD0ke3Byb2R1Y3QuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTW9kYWxQcm9kdWN0KHByb2R1Y3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC1zZWFyY2gtYWx0Jz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvb2x0aXAtbGFiZWxcIj5YZW0gbmhhbmg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5vblNhbGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYWxlLXRhZ1wiPlNhbGUhPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm5ld1Byb2R1Y3QgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXctdGFnXCI+TmV3ITwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz48TGluayBocmVmPXtgL3Byb2R1Y3QvJHtpZH1gfT48YT57cHJvZHVjdC5Qcm9kdWN0TmFtZX08L2E+PC9MaW5rPjwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm9mZmVyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbGQtcHJpY2VcIj57cHJvZHVjdC5vbGRQcmljZX0gxJE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj57cHJvZHVjdC5QcmljZX0gxJE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmV3LXByaWNlXCI+e0ludGwuTnVtYmVyRm9ybWF0KCkuZm9ybWF0KHByb2R1Y3QuUHJpY2UpfSDEkTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXItcmF0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyJz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyJz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyJz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyJz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyJz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkLXRvLWNhcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IG9uSGFuZGxlQWRkVG9DYXJ0KGlkLDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGjDqm0gdsOgbyBnaeG7j1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuZGlzY291bnQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3RzLWRpc2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHaeG6o217cHJvZHVjdC5kaXNjb3VudE9mZn0lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVByb2R1Y3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==
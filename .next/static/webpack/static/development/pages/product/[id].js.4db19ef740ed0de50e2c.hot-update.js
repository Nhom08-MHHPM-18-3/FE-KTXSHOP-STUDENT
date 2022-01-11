webpackHotUpdate("static\\development\\pages\\product\\[id].js",{

/***/ "./components/ProductDetails/ProductDetailsStyleOne.js":
/*!*************************************************************!*\
  !*** ./components/ProductDetails/ProductDetailsStyleOne.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _ProductDetailsTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductDetailsTab */ "./components/ProductDetails/ProductDetailsTab.js");
/* harmony import */ var _ProductImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductImage */ "./components/ProductDetails/ProductImage.js");



var _jsxFileName = "F:\\N\u0103m 4 h\u1ECDc k\u1EF3 1\\M\xF4 h\xECnh h\xF3a ph\u1EA7n m\u1EC1m\\New folder (2)\\components\\ProductDetails\\ProductDetailsStyleOne.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







const hookClass = props => {
  _s();

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  let {
    id
  } = router.query;
  return __jsx(ProductDetailsStyleOne, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    router: router,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }
  }));
};

_s(hookClass, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

class ProductDetailsStyleOne extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      qty: 1,
      max: 10,
      min: 1
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleAddToCart", () => {
      let {
        id
      } = this.props.router.query;
      let {
        qty
      } = this.state;
      this.props.cart.addToCart(id, qty);
      react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success('Added to the cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "incrementItem", () => {
      this.setState(prevState => {
        if (prevState.qty < 10) {
          return {
            qty: prevState.qty + 1
          };
        } else {
          return null;
        }
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "decreaseItem", () => {
      this.setState(prevState => {
        if (prevState.qty > 1) {
          return {
            qty: prevState.qty - 1
          };
        } else {
          return null;
        }
      });
    });
  }

  render() {
    console.log(this.props);
    const offer = false;
    return __jsx("section", {
      className: "product-details-area pt-100 pb-70",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_5__["ToastContainer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "col-lg-5 col-md-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 25
      }
    }, this.props.product.Image == undefined ? __jsx(_ProductImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
      imageUrl: `${"http://localhost:1337"}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 70
      }
    }) : __jsx(_ProductImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
      imageUrl: `${"http://localhost:1337"}${this.props.product.Image.data[0].attributes.url}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 125
      }
    })), __jsx("div", {
      className: "col-lg-7 col-md-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "products-details-desc",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 29
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 33
      }
    }, this.props.product.ProductName), __jsx("div", {
      className: "price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 33
      }
    }, offer ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 41
      }
    }, __jsx("span", {
      className: "old-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 45
      }
    }, Intl.NumberFormat().format(this.props.product.Price)), __jsx("span", {
      className: "new-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 45
      }
    }, Intl.NumberFormat().format(this.props.product.Price))) : __jsx("span", {
      className: "new-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 41
      }
    }, Intl.NumberFormat().format(this.props.product.Price))), __jsx("div", {
      className: "products-review",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "rating",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 37
      }
    }, __jsx("i", {
      className: "bx bx-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 41
      }
    }), __jsx("i", {
      className: "bx bx-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 41
      }
    }), __jsx("i", {
      className: "bx bx-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 41
      }
    }), __jsx("i", {
      className: "bx bx-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 41
      }
    }), __jsx("i", {
      className: "bx bx-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 41
      }
    }))), __jsx("ul", {
      className: "products-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 33
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 41
      }
    }, "S\u1ED1 l\u01B0\u1EE3ng h\xE0ng c\xF2n: "), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 41
      }
    }, __jsx("a", {
      onClick: e => e.preventDefault(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 45
      }
    }, this.props.product.Quantity)))), __jsx("div", {
      className: "products-info-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 33
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 37
      }
    }, __jsx("a", {
      onClick: e => e.preventDefault(),
      "data-toggle": "modal",
      "data-target": "#productsShippingModal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 41
      }
    }, __jsx("i", {
      className: "bx bxs-truck",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 45
      }
    }), "Shipping"))), __jsx("div", {
      className: "products-add-to-cart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "input-counter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 37
      }
    }, __jsx("span", {
      className: "minus-btn",
      onClick: this.decreaseItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 41
      }
    }, __jsx("i", {
      className: "bx bx-minus",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 45
      }
    })), __jsx("input", {
      type: "text",
      value: this.state.qty,
      min: this.state.min,
      max: this.state.max,
      onChange: e => this.setState({
        qty: e.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 41
      }
    }), __jsx("span", {
      className: "plus-btn",
      onClick: this.incrementItem,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 41
      }
    }, __jsx("i", {
      className: "bx bx-plus",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 45
      }
    }))), __jsx("button", {
      className: "default-btn",
      onClick: this.handleAddToCart,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 37
      }
    }, __jsx("i", {
      className: "fas fa-cart-plus",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 41
      }
    }), "Th\xEAm v\xE0o gi\u1ECF")), __jsx("div", {
      className: "buy-checkbox-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 37
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/checkout",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 41
      }
    }, __jsx("a", {
      onClick: this.handleAddToCart,
      className: "default-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 45
      }
    }, "Thanh to\xE1n ngay"))))))), __jsx(_ProductDetailsTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
      product: this.props.product,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (hookClass);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3REZXRhaWxzL1Byb2R1Y3REZXRhaWxzU3R5bGVPbmUuanMiXSwibmFtZXMiOlsiaG9va0NsYXNzIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiUHJvZHVjdERldGFpbHNTdHlsZU9uZSIsIkNvbXBvbmVudCIsInF0eSIsIm1heCIsIm1pbiIsInN0YXRlIiwiY2FydCIsImFkZFRvQ2FydCIsInRvYXN0Iiwic3VjY2VzcyIsInBvc2l0aW9uIiwiYXV0b0Nsb3NlIiwiaGlkZVByb2dyZXNzQmFyIiwiY2xvc2VPbkNsaWNrIiwicGF1c2VPbkhvdmVyIiwiZHJhZ2dhYmxlIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJyZW5kZXIiLCJjb25zb2xlIiwibG9nIiwib2ZmZXIiLCJwcm9kdWN0IiwiSW1hZ2UiLCJ1bmRlZmluZWQiLCJwcm9jZXNzIiwiZGF0YSIsImF0dHJpYnV0ZXMiLCJ1cmwiLCJQcm9kdWN0TmFtZSIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJQcmljZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIlF1YW50aXR5IiwiZGVjcmVhc2VJdGVtIiwidGFyZ2V0IiwidmFsdWUiLCJpbmNyZW1lbnRJdGVtIiwiaGFuZGxlQWRkVG9DYXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUlDLEtBQUQsSUFBVztBQUFBOztBQUN6QixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBSTtBQUFFQztBQUFGLE1BQVNGLE1BQU0sQ0FBQ0csS0FBcEI7QUFDQSxTQUFPLE1BQUMsc0JBQUQseUZBQTRCSixLQUE1QjtBQUFtQyxVQUFNLEVBQUVDLE1BQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUDtB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STtBQUFHLGVBQVMsRUFBQyxrQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkosNEJBekJKLENBbkRKLEVBc0ZJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FFSTtBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUcsYUFBTyxFQUFFLEtBQUtBLGVBQWpCO0FBQWtDLGVBQVMsRUFBQyxhQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURKLENBREosQ0FGSixDQXRGSixDQURKLENBTkosQ0FESixFQTJHSSxNQUFDLDBEQUFEO0FBQW1CLGFBQU8sRUFBRSxLQUFLOUMsS0FBTCxDQUFXMkIsT0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQTNHSixDQUZKLENBREo7QUFtSEg7O0FBcEswQzs7QUF3Sy9CNUIsd0VBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwcm9kdWN0XFxbaWRdLmpzLjRkYjE5ZWY3NDBlZDBkZTUwZTJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IFByb2R1Y3REZXRhaWxzVGFiIGZyb20gJy4vUHJvZHVjdERldGFpbHNUYWInO1xyXG5pbXBvcnQgUHJvZHVjdEltYWdlIGZyb20gJy4vUHJvZHVjdEltYWdlJztcclxuXHJcbmNvbnN0IGhvb2tDbGFzcyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBsZXQgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgcmV0dXJuIDxQcm9kdWN0RGV0YWlsc1N0eWxlT25lIHsuLi5wcm9wc30gcm91dGVyPXtyb3V0ZXJ9IC8+XHJcbn1cclxuXHJcbmNsYXNzIFByb2R1Y3REZXRhaWxzU3R5bGVPbmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgcXR5OiAxLFxyXG4gICAgICAgIG1heDogMTAsXHJcbiAgICAgICAgbWluOiAxXHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUFkZFRvQ2FydCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgeyBpZCB9ID0gdGhpcy5wcm9wcy5yb3V0ZXIucXVlcnk7XHJcbiAgICAgICAgbGV0IHsgcXR5IH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHRoaXMucHJvcHMuY2FydC5hZGRUb0NhcnQoaWQsIHF0eSk7ICBcclxuXHJcbiAgICAgICAgdG9hc3Quc3VjY2VzcygnQWRkZWQgdG8gdGhlIGNhcnQnLCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1sZWZ0XCIsXHJcbiAgICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluY3JlbWVudEl0ZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgICAgICBpZihwcmV2U3RhdGUucXR5IDwgMTApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXR5OiBwcmV2U3RhdGUucXR5ICsgMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWNyZWFzZUl0ZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgICAgICBpZihwcmV2U3RhdGUucXR5ID4gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBxdHk6IHByZXZTdGF0ZS5xdHkgLSAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgICAgICBjb25zdCBvZmZlciA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlscy1hcmVhIHB0LTEwMCBwYi03MFwiPlxyXG4gICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5wcm9kdWN0LkltYWdlID09IHVuZGVmaW5lZCA/IDxQcm9kdWN0SW1hZ2UgaW1hZ2VVcmw9e2Ake3Byb2Nlc3MuZW52LkFQSV9IT1NUfWB9IC8+IDo8UHJvZHVjdEltYWdlIGltYWdlVXJsPXtgJHtwcm9jZXNzLmVudi5BUElfSE9TVH0ke3RoaXMucHJvcHMucHJvZHVjdC5JbWFnZS5kYXRhWzBdLmF0dHJpYnV0ZXMudXJsfWB9IC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNyBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtZGV0YWlscy1kZXNjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnt0aGlzLnByb3BzLnByb2R1Y3QuUHJvZHVjdE5hbWV9PC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2ZmZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib2xkLXByaWNlXCI+e0ludGwuTnVtYmVyRm9ybWF0KCkuZm9ybWF0KHRoaXMucHJvcHMucHJvZHVjdC5QcmljZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5ldy1wcmljZVwiPntJbnRsLk51bWJlckZvcm1hdCgpLmZvcm1hdCh0aGlzLnByb3BzLnByb2R1Y3QuUHJpY2UpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXctcHJpY2VcIj57SW50bC5OdW1iZXJGb3JtYXQoKS5mb3JtYXQodGhpcy5wcm9wcy5wcm9kdWN0LlByaWNlKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtcmV2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4LXN0YXInPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtc3Rhcic+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC1zdGFyJz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4LXN0YXInPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtc3Rhcic+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17ZSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IGNsYXNzTmFtZT1cInJhdGluZy1jb3VudFwiPjMgcmV2aWV3czwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2R1Y3RzLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U+G7kSBsxrDhu6NuZyBow6BuZyBjw7JuOiA8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtlID0+IGUucHJldmVudERlZmF1bHQoKX0+e3RoaXMucHJvcHMucHJvZHVjdC5RdWFudGl0eX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtaW5mby1idG5cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtlID0+IGUucHJldmVudERlZmF1bHQoKX0gZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI3Byb2R1Y3RzU2hpcHBpbmdNb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXRydWNrJz48L2k+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNoaXBwaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtYWRkLXRvLWNhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb3VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtaW51cy1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGVjcmVhc2VJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtbWludXMnPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5xdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXt0aGlzLnN0YXRlLm1pbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9e3RoaXMuc3RhdGUubWF4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyBxdHk6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbHVzLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5pbmNyZW1lbnRJdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtcGx1cyc+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWZhdWx0LWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFRvQ2FydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNhcnQtcGx1c1wiPjwvaT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaMOqbSB2w6BvIGdp4buPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXktY2hlY2tib3gtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY2hlY2tvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZFRvQ2FydH0gY2xhc3NOYW1lPVwiZGVmYXVsdC1idG5cIj5UaGFuaCB0b8OhbiBuZ2F5PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFByb2R1Y3QgRGV0YWlscyBUYWIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxzVGFiIHByb2R1Y3Q9e3RoaXMucHJvcHMucHJvZHVjdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoaG9va0NsYXNzKTsiXSwic291cmNlUm9vdCI6IiJ9
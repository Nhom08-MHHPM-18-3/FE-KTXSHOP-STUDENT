webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Modals/ShoppingCartModal.js":
/*!************************************************!*\
  !*** ./components/Modals/ShoppingCartModal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _Contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Contexts/CartContext */ "./Contexts/CartContext.js");

var _jsxFileName = "F:\\N\u0103m 4 h\u1ECDc k\u1EF3 1\\M\xF4 h\xECnh h\xF3a ph\u1EA7n m\u1EC1m\\New folder (2)\\components\\Modals\\ShoppingCartModal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // import { removeItem } from '../../store/actions/cartActions';

class ShoppingCartModal extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      modal: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleRemove", id => {
      // this.props.removeItem(id);
      react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].error('Removed from cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "closeModal", () => {
      this.props.onClick(this.state.modal);
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: `shoppingCartModal right ${this.props.active}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "modal-innter-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }
    }, __jsx("button", {
      type: "button",
      className: "close",
      onClick: this.closeModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }
    }, __jsx("span", {
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 29
      }
    }, __jsx("i", {
      className: "bx bx-x",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 33
      }
    }))), __jsx("div", {
      className: "modal-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 25
      }
    }, __jsx(_Contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__["default"].Consumer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }
    }, ({
      cart
    }) => __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 65
      }
    }, cart.products.length)), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 29
      }
    }, "Gi\u1ECF h\xE0ng c\u1EE7a t\xF4i (2)"), __jsx("div", {
      className: "products-cart-subtotal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 29
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 33
      }
    }, "T\u1ED5ng ti\u1EC1n"), __jsx("span", {
      className: "subtotal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 33
      }
    }, "$", this.props.total)), __jsx("div", {
      className: "products-cart-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 29
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/checkout",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 33
      }
    }, __jsx("a", {
      className: "default-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 37
      }
    }, "Ti\u1EBFn h\xE0nh thanh to\xE1n")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/cart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 33
      }
    }, __jsx("a", {
      className: "optional-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 37
      }
    }, "Xem gi\u1ECF h\xE0ng")))))));
  }

}

const mapStateToProps = state => {
  return {// products: state.addedItems,
    // total: state.total
  };
}; // const mapDispatchToProps = (dispatch) => {
//     return {
//         removeItem: (id) => {dispatch(removeItem(id))}
//     }
// }


/* harmony default export */ __webpack_exports__["default"] = (ShoppingCartModal);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vZGFscy9TaG9wcGluZ0NhcnRNb2RhbC5qcyJdLCJuYW1lcyI6WyJTaG9wcGluZ0NhcnRNb2RhbCIsIkNvbXBvbmVudCIsIm1vZGFsIiwiaWQiLCJ0b2FzdCIsImVycm9yIiwicG9zaXRpb24iLCJhdXRvQ2xvc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJjbG9zZU9uQ2xpY2siLCJwYXVzZU9uSG92ZXIiLCJkcmFnZ2FibGUiLCJwcm9wcyIsIm9uQ2xpY2siLCJzdGF0ZSIsInJlbmRlciIsImFjdGl2ZSIsImNsb3NlTW9kYWwiLCJjYXJ0IiwicHJvZHVjdHMiLCJsZW5ndGgiLCJ0b3RhbCIsIm1hcFN0YXRlVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBRUEsTUFBTUEsaUJBQU4sU0FBZ0NDLCtDQUFoQyxDQUEwQztBQUFBO0FBQUE7O0FBQUEsNkdBRTlCO0FBQ0pDLFdBQUssRUFBRTtBQURILEtBRjhCOztBQUFBLG9IQU10QkMsRUFBRCxJQUFRO0FBQ25CO0FBQ0FDLDBEQUFLLENBQUNDLEtBQU4sQ0FBWSxtQkFBWixFQUFpQztBQUM3QkMsZ0JBQVEsRUFBRSxhQURtQjtBQUU3QkMsaUJBQVMsRUFBRSxJQUZrQjtBQUc3QkMsdUJBQWUsRUFBRSxLQUhZO0FBSTdCQyxvQkFBWSxFQUFFLElBSmU7QUFLN0JDLG9CQUFZLEVBQUUsSUFMZTtBQU03QkMsaUJBQVMsRUFBRTtBQU5rQixPQUFqQztBQVFILEtBaEJxQzs7QUFBQSxrSEFrQnpCLE1BQU07QUFDZixXQUFLQyxLQUFMLENBQVdDLE9BQVgsQ0FBbUIsS0FBS0MsS0FBTCxDQUFXWixLQUE5QjtBQUNILEtBcEJxQztBQUFBOztBQXVCdENhLFFBQU0sR0FBRztBQUVMLFdBQ0ksTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFHLDJCQUEwQixLQUFLSCxLQUFMLENBQVdJLE1BQU8sRUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFRLFVBQUksRUFBQyxRQUFiO0FBQXNCLGVBQVMsRUFBQyxPQUFoQztBQUF3QyxhQUFPLEVBQUUsS0FBS0MsVUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQU0scUJBQVksTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUcsZUFBUyxFQUFDLFNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREosQ0FESixFQU9JO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBLE1BQUMsNkRBQUQsQ0FBYSxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDcUMsQ0FBQztBQUFFQztBQUFGLEtBQUQsS0FDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9BLElBQUksQ0FBQ0MsUUFBTCxDQUFjQyxNQUFyQixDQUZ4QyxDQURBLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FOSixFQVFJO0FBQUssZUFBUyxFQUFDLHdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURKLEVBRUk7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUE2QixLQUFLUixLQUFMLENBQVdTLEtBQXhDLENBRkosQ0FSSixFQWFJO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUcsZUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FESixDQURKLEVBS0ksTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFHLGVBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREosQ0FMSixDQWJKLENBUEosQ0FESixDQURKLENBREo7QUFzQ0g7O0FBL0RxQzs7QUFrRTFDLE1BQU1DLGVBQWUsR0FBSVIsS0FBRCxJQUFXO0FBQy9CLFNBQU8sQ0FDSDtBQUNBO0FBRkcsR0FBUDtBQUlILENBTEQsQyxDQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVnQmQsZ0ZBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy43Y2I5YTVkOWQ0YWJjMDY4MjZmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBDYXJ0Q29udGV4dCBmcm9tICcuLi8uLi9Db250ZXh0cy9DYXJ0Q29udGV4dCc7XHJcbi8vIGltcG9ydCB7IHJlbW92ZUl0ZW0gfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2NhcnRBY3Rpb25zJztcclxuXHJcbmNsYXNzIFNob3BwaW5nQ2FydE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBtb2RhbDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlUmVtb3ZlID0gKGlkKSA9PiB7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9wcy5yZW1vdmVJdGVtKGlkKTtcclxuICAgICAgICB0b2FzdC5lcnJvcignUmVtb3ZlZCBmcm9tIGNhcnQnLCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbS1sZWZ0XCIsXHJcbiAgICAgICAgICAgIGF1dG9DbG9zZTogNTAwMCxcclxuICAgICAgICAgICAgaGlkZVByb2dyZXNzQmFyOiBmYWxzZSxcclxuICAgICAgICAgICAgY2xvc2VPbkNsaWNrOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMuc3RhdGUubW9kYWwpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2hvcHBpbmdDYXJ0TW9kYWwgcmlnaHQgJHt0aGlzLnByb3BzLmFjdGl2ZX1gfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWlubnRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17dGhpcy5jbG9zZU1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngteCc+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FydENvbnRleHQuQ29uc3VtZXIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHsgY2FydCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57Y2FydC5wcm9kdWN0cy5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FydENvbnRleHQuQ29uc3VtZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+R2nhu48gaMOgbmcgY+G7p2EgdMO0aSAoMik8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzLWNhcnQtc3VidG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5U4buVbmcgdGnhu4FuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1YnRvdGFsXCI+JHt0aGlzLnByb3BzLnRvdGFsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtY2FydC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NoZWNrb3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRlZmF1bHQtYnRuXCI+VGnhur9uIGjDoG5oIHRoYW5oIHRvw6FuPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm9wdGlvbmFsLWJ0blwiPlhlbSBnaeG7jyBow6BuZzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIHByb2R1Y3RzOiBzdGF0ZS5hZGRlZEl0ZW1zLFxyXG4gICAgICAgIC8vIHRvdGFsOiBzdGF0ZS50b3RhbFxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgcmVtb3ZlSXRlbTogKGlkKSA9PiB7ZGlzcGF0Y2gocmVtb3ZlSXRlbShpZCkpfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoU2hvcHBpbmdDYXJ0TW9kYWwpIl0sInNvdXJjZVJvb3QiOiIifQ==
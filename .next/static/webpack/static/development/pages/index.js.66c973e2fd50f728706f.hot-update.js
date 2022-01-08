webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/HomeOne/RecentProducts.js":
/*!**********************************************!*\
  !*** ./components/HomeOne/RecentProducts.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modals_QuickViewModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modals/QuickViewModal */ "./components/Modals/QuickViewModal.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _Common_SingleProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/SingleProduct */ "./components/Common/SingleProduct.js");

var _jsxFileName = "F:\\N\u0103m 4 h\u1ECDc k\u1EF3 1\\M\xF4 h\xECnh h\xF3a ph\u1EA7n m\u1EC1m\\New folder (2)\\components\\HomeOne\\RecentProducts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // import { addToCart } from '../../store/actions/cartActions';

class RecentProducts extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      QuickViewModal: false,
      modalProduct: {},
      products: []
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "toggleModal", () => {
      this.setState({
        QuickViewModal: !this.state.QuickViewModal
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "handleAddToCart", id => {
      this.props.addToCart(id);
      react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"].success('Added to the cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "passDataToModal", product => {
      this.setState({
        modalProduct: product
      });
    });
  }

  componentDidMount() {
    this.setState({
      products: this.props.products
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }, __jsx("section", {
      className: "products-area pt-100 pb-70",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }
    }), __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "section-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "sub-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 29
      }
    }, "See Our Collection"), __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 29
      }
    }, "Recent Products")), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 25
      }
    }, !!this.state.products.length && this.state.products.map((product, idx) => __jsx(_Common_SingleProduct__WEBPACK_IMPORTED_MODULE_4__["default"], {
      styleCls: "col-lg-4 col-sm-6",
      product: product,
      key: idx,
      onHandleAddToCart: this.handleAddToCart,
      onhandleModalProduct: this.passDataToModal,
      ontoggleModal: this.toggleModal,
      addToCart: this.pros.addToCart,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 33
      }
    }))))), __jsx(_Modals_QuickViewModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onClick: this.toggleModal,
      active: this.state.QuickViewModal ? 'active' : '',
      product: this.state.modalProduct,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }));
  }

} // const mapDispatchToProps = (dispatch) => {
//     return {
//         addToCart: (id) => { dispatch(addToCart(id)) }
//     }
// }


/* harmony default export */ __webpack_exports__["default"] = (RecentProducts);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWVPbmUvUmVjZW50UHJvZHVjdHMuanMiXSwibmFtZXMiOlsiUmVjZW50UHJvZHVjdHMiLCJDb21wb25lbnQiLCJRdWlja1ZpZXdNb2RhbCIsIm1vZGFsUHJvZHVjdCIsInByb2R1Y3RzIiwic2V0U3RhdGUiLCJzdGF0ZSIsImlkIiwicHJvcHMiLCJhZGRUb0NhcnQiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJwb3NpdGlvbiIsImF1dG9DbG9zZSIsImhpZGVQcm9ncmVzc0JhciIsImNsb3NlT25DbGljayIsInBhdXNlT25Ib3ZlciIsImRyYWdnYWJsZSIsInByb2R1Y3QiLCJjb21wb25lbnREaWRNb3VudCIsInJlbmRlciIsImxlbmd0aCIsIm1hcCIsImlkeCIsImhhbmRsZUFkZFRvQ2FydCIsInBhc3NEYXRhVG9Nb2RhbCIsInRvZ2dsZU1vZGFsIiwicHJvcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQSxNQUFNQSxjQUFOLFNBQTZCQywrQ0FBN0IsQ0FBdUM7QUFBQTtBQUFBOztBQUFBLDZHQUUzQjtBQUNKQyxvQkFBYyxFQUFFLEtBRFo7QUFFSkMsa0JBQVksRUFBRSxFQUZWO0FBR0pDLGNBQVEsRUFBRTtBQUhOLEtBRjJCOztBQUFBLG1IQWNyQixNQUFNO0FBQ2hCLFdBQUtDLFFBQUwsQ0FBYztBQUNWSCxzQkFBYyxFQUFFLENBQUMsS0FBS0ksS0FBTCxDQUFXSjtBQURsQixPQUFkO0FBR0gsS0FsQmtDOztBQUFBLHVIQW9CaEJLLEVBQUQsSUFBUTtBQUN0QixXQUFLQyxLQUFMLENBQVdDLFNBQVgsQ0FBcUJGLEVBQXJCO0FBQ0FHLDBEQUFLLENBQUNDLE9BQU4sQ0FBYyxtQkFBZCxFQUFtQztBQUMvQkMsZ0JBQVEsRUFBRSxhQURxQjtBQUUvQkMsaUJBQVMsRUFBRSxJQUZvQjtBQUcvQkMsdUJBQWUsRUFBRSxLQUhjO0FBSS9CQyxvQkFBWSxFQUFFLElBSmlCO0FBSy9CQyxvQkFBWSxFQUFFLElBTGlCO0FBTS9CQyxpQkFBUyxFQUFFO0FBTm9CLE9BQW5DO0FBUUgsS0E5QmtDOztBQUFBLHVIQWdDaEJDLE9BQUQsSUFBYTtBQUMzQixXQUFLYixRQUFMLENBQWM7QUFDVkYsb0JBQVksRUFBRWU7QUFESixPQUFkO0FBR0gsS0FwQ2tDO0FBQUE7O0FBUW5DQyxtQkFBaUIsR0FBRTtBQUNmLFNBQUtkLFFBQUwsQ0FBYztBQUNWRCxjQUFRLEVBQUUsS0FBS0ksS0FBTCxDQUFXSjtBQURYLEtBQWQ7QUFHSDs7QUEwQkRnQixRQUFNLEdBQUc7QUFDTCxXQUNJLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFTLGVBQVMsRUFBQyw0QkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBRUk7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBTSxlQUFTLEVBQUMsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkosQ0FESixFQU1JO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLLENBQUMsQ0FBQyxLQUFLZCxLQUFMLENBQVdGLFFBQVgsQ0FBb0JpQixNQUF0QixJQUFnQyxLQUFLZixLQUFMLENBQVdGLFFBQVgsQ0FBb0JrQixHQUFwQixDQUF3QixDQUFDSixPQUFELEVBQVVLLEdBQVYsS0FDckQsTUFBQyw2REFBRDtBQUNJLGNBQVEsRUFBQyxtQkFEYjtBQUVJLGFBQU8sRUFBRUwsT0FGYjtBQUdJLFNBQUcsRUFBRUssR0FIVDtBQUlJLHVCQUFpQixFQUFFLEtBQUtDLGVBSjVCO0FBS0ksMEJBQW9CLEVBQUUsS0FBS0MsZUFML0I7QUFNSSxtQkFBYSxFQUFFLEtBQUtDLFdBTnhCO0FBT0ksZUFBUyxFQUFFLEtBQUtDLElBQUwsQ0FBVWxCLFNBUHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFENkIsQ0FEckMsQ0FOSixDQUZKLENBREosRUEwQkksTUFBQyw4REFBRDtBQUNJLGFBQU8sRUFBRSxLQUFLaUIsV0FEbEI7QUFDK0IsWUFBTSxFQUFFLEtBQUtwQixLQUFMLENBQVdKLGNBQVgsR0FBNEIsUUFBNUIsR0FBdUMsRUFEOUU7QUFFSSxhQUFPLEVBQUUsS0FBS0ksS0FBTCxDQUFXSCxZQUZ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BMUJKLENBREo7QUFpQ0g7O0FBeEVrQyxDLENBMkV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZ0JILDZFQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNjZjOTczZTJmZDUwZjcyODcwNmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBRdWlja1ZpZXdNb2RhbCBmcm9tICcuLi9Nb2RhbHMvUXVpY2tWaWV3TW9kYWwnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciwgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBTaW5nbGVQcm9kdWN0IGZyb20gJy4uL0NvbW1vbi9TaW5nbGVQcm9kdWN0JztcclxuLy8gaW1wb3J0IHsgYWRkVG9DYXJ0IH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9jYXJ0QWN0aW9ucyc7XHJcbmNsYXNzIFJlY2VudFByb2R1Y3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIFxyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgUXVpY2tWaWV3TW9kYWw6IGZhbHNlLFxyXG4gICAgICAgIG1vZGFsUHJvZHVjdDoge30sXHJcbiAgICAgICAgcHJvZHVjdHM6IFtdXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHByb2R1Y3RzOiB0aGlzLnByb3BzLnByb2R1Y3RzXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgUXVpY2tWaWV3TW9kYWw6ICF0aGlzLnN0YXRlLlF1aWNrVmlld01vZGFsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQWRkVG9DYXJ0ID0gKGlkKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5hZGRUb0NhcnQoaWQpOyBcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKCdBZGRlZCB0byB0aGUgY2FydCcsIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tLWxlZnRcIixcclxuICAgICAgICAgICAgYXV0b0Nsb3NlOiA1MDAwLFxyXG4gICAgICAgICAgICBoaWRlUHJvZ3Jlc3NCYXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBjbG9zZU9uQ2xpY2s6IHRydWUsXHJcbiAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFzc0RhdGFUb01vZGFsID0gKHByb2R1Y3QpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbW9kYWxQcm9kdWN0OiBwcm9kdWN0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2R1Y3RzLWFyZWEgcHQtMTAwIHBiLTcwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWItdGl0bGVcIj5TZWUgT3VyIENvbGxlY3Rpb248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+UmVjZW50IFByb2R1Y3RzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhdGhpcy5zdGF0ZS5wcm9kdWN0cy5sZW5ndGggJiYgdGhpcy5zdGF0ZS5wcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaW5nbGVQcm9kdWN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUNscz1cImNvbC1sZy00IGNvbC1zbS02XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGFuZGxlQWRkVG9DYXJ0PXt0aGlzLmhhbmRsZUFkZFRvQ2FydH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25oYW5kbGVNb2RhbFByb2R1Y3Q9e3RoaXMucGFzc0RhdGFUb01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbnRvZ2dsZU1vZGFsPXt0aGlzLnRvZ2dsZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRUb0NhcnQ9e3RoaXMucHJvcy5hZGRUb0NhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogUXVpY2sgVmlldyBNb2RhbCAqL31cclxuICAgICAgICAgICAgICAgIDxRdWlja1ZpZXdNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTW9kYWx9IGFjdGl2ZT17dGhpcy5zdGF0ZS5RdWlja1ZpZXdNb2RhbCA/ICdhY3RpdmUnIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17dGhpcy5zdGF0ZS5tb2RhbFByb2R1Y3R9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgICBhZGRUb0NhcnQ6IChpZCkgPT4geyBkaXNwYXRjaChhZGRUb0NhcnQoaWQpKSB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChSZWNlbnRQcm9kdWN0cyk7Il0sInNvdXJjZVJvb3QiOiIifQ==
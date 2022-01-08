webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layouts_TopHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layouts/TopHeader */ "./components/Layouts/TopHeader.js");
/* harmony import */ var _components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layouts/Navbar */ "./components/Layouts/Navbar.js");
/* harmony import */ var _components_HomeOne_MainBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HomeOne/MainBanner */ "./components/HomeOne/MainBanner.js");
/* harmony import */ var _components_HomeOne_RecentProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HomeOne/RecentProducts */ "./components/HomeOne/RecentProducts.js");
/* harmony import */ var _components_Common_OfferStyleOne__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Common/OfferStyleOne */ "./components/Common/OfferStyleOne.js");
/* harmony import */ var _components_Common_FacilitySlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Common/FacilitySlider */ "./components/Common/FacilitySlider.js");
/* harmony import */ var _components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Layouts/Footer */ "./components/Layouts/Footer.js");
/* harmony import */ var _components_HomeOne_PopularProducts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/HomeOne/PopularProducts */ "./components/HomeOne/PopularProducts.js");
/* harmony import */ var _components_HomeOne_BestSellingProducts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/HomeOne/BestSellingProducts */ "./components/HomeOne/BestSellingProducts.js");
/* harmony import */ var _Contexts_CartContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Contexts/CartContext */ "./Contexts/CartContext.js");
var _jsxFileName = "F:\\N\u0103m 4 h\u1ECDc k\u1EF3 1\\M\xF4 h\xECnh h\xF3a ph\u1EA7n m\u1EC1m\\New folder (2)\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const data = [{
  description: "Long Sleeve Leopard T-Shirt",
  discount: false,
  discountOff: 10,
  id: "5DAcUDDd4t8xWgl9kvXl",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover1-1588704436043.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img1-1588704428273.jpg",
  newPrice: 320,
  newProduct: false,
  offer: true,
  oldPrice: 250,
  onSale: false,
  title: "Long Sleeve Leopard T-Shirt",
  type: "T-Shirt"
}, {
  description: "Sunnyme Women's Ponchos",
  discount: false,
  discountOff: 0,
  id: "81tgigL0U2zUHoTj85Ht",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover8-1588705468374.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img8-1588705462376.jpg",
  newPrice: 200,
  newProduct: false,
  offer: true,
  oldPrice: 210,
  onSale: true,
  title: "Sunnyme Women's Ponchos",
  type: "Women Clothes"
}, {
  description: "Women's Modern-Skinny",
  discount: true,
  discountOff: 20,
  id: "9Gkmfo4HjW4tKvMYlpX9",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover12-1588705972392.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img12-1588705966818.jpg",
  newPrice: 100,
  newProduct: false,
  offer: true,
  oldPrice: 150,
  onSale: false,
  title: "Women's Modern-Skinny",
  type: "T-Shirt"
}, {
  description: "Block Striped Draped",
  discount: false,
  discountOff: 0,
  id: "D9wwa2ZDu281HV5s95b9",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover11-1588705905171.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img11-1588705899677.jpg",
  newPrice: 210,
  newProduct: false,
  offer: false,
  oldPrice: 220,
  onSale: false,
  title: "Block Striped Draped",
  type: "T-Shirt"
}, {
  description: "Gildan Men's Crew T-Shirt",
  discount: false,
  discountOff: 0,
  id: "EzJtxvc9Zr7iG8k7eIlB",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover4-1588705109913.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img4-1588705104640.jpg",
  newPrice: 150,
  newProduct: false,
  offer: false,
  oldPrice: 150,
  onSale: false,
  title: "Gildan Men's Crew T-Shirt",
  type: "T-Shirt"
}, {
  description: "Yidarton Women's Comfy",
  discount: false,
  discountOff: 0,
  id: "Hddr7Vh0vM0i5D0JIh7o",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover5-1588705177941.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img5-1588705171063.jpg",
  newPrice: 240,
  newProduct: false,
  offer: false,
  oldPrice: 240,
  onSale: false,
  title: "Yidarton Women's Comfy",
  type: "Women Clothes"
}, {
  description: "Chest Cutout Tunics Long",
  discount: true,
  discountOff: 20,
  id: "N14nGR4yn5g526TdTJNU",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover15-1588706198456.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img15-1588706193731.jpg",
  newPrice: 200,
  newProduct: false,
  offer: true,
  oldPrice: 210,
  onSale: false,
  title: "Chest Cutout Tunics Long",
  type: "T-Shirt"
}, {
  description: "T-Shirt Casual Stripe Tunic",
  discount: true,
  discountOff: 20,
  id: "S4xjmGV8IiWH9Vb9JnWq",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover14-1588706135870.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img14-1588706130023.jpg",
  newPrice: 200,
  newProduct: false,
  offer: true,
  oldPrice: 210,
  onSale: false,
  title: "T-Shirt Casual Stripe Tunic",
  type: "T-Shirt"
}, {
  description: "Causal V-Neck Soft Raglan",
  discount: false,
  discountOff: 0,
  id: "VTcZrUJDHqq8ftDYFbV8",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover2-1588704656583.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img2-1588704648214.jpg",
  newPrice: 200,
  newProduct: false,
  offer: true,
  oldPrice: 210,
  onSale: true,
  title: "Causal V-Neck Soft Raglan",
  type: "Women Clothes"
}];

const Index = ({
  products
}) => {
  return __jsx(_Contexts_CartContext__WEBPACK_IMPORTED_MODULE_10__["default"].Consumer, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }, ({
    cart
  }) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, __jsx(_components_Layouts_TopHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }), __jsx(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }), __jsx(_components_HomeOne_MainBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }), __jsx(_components_HomeOne_RecentProducts__WEBPACK_IMPORTED_MODULE_4__["default"], {
    products: data,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }), __jsx(_components_Common_OfferStyleOne__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }), __jsx(_components_HomeOne_PopularProducts__WEBPACK_IMPORTED_MODULE_8__["default"], {
    products: data,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }), __jsx(_components_Common_FacilitySlider__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }), __jsx(_components_HomeOne_BestSellingProducts__WEBPACK_IMPORTED_MODULE_9__["default"], {
    products: data,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  })));
}; // const mapStateToProps = (state) => {
//     return {
//         products: state.products.filter( product => product.type == 'Women Clothes' )
//     }
// }


_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiZGVzY3JpcHRpb24iLCJkaXNjb3VudCIsImRpc2NvdW50T2ZmIiwiaWQiLCJpbWFnZUhvdmVyVXJsIiwiaW1hZ2VVcmwiLCJuZXdQcmljZSIsIm5ld1Byb2R1Y3QiLCJvZmZlciIsIm9sZFByaWNlIiwib25TYWxlIiwidGl0bGUiLCJ0eXBlIiwiSW5kZXgiLCJwcm9kdWN0cyIsImNhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsSUFBSSxHQUFHLENBQ1Q7QUFDSUMsYUFBVyxFQUFFLDZCQURqQjtBQUVJQyxVQUFRLEVBQUUsS0FGZDtBQUdJQyxhQUFXLEVBQUUsRUFIakI7QUFJSUMsSUFBRSxFQUFFLHNCQUpSO0FBS0lDLGVBQWEsRUFBRSwwRUFMbkI7QUFNSUMsVUFBUSxFQUFFLG9FQU5kO0FBT0lDLFVBQVEsRUFBRSxHQVBkO0FBUUlDLFlBQVUsRUFBRSxLQVJoQjtBQVNJQyxPQUFLLEVBQUUsSUFUWDtBQVVJQyxVQUFRLEVBQUUsR0FWZDtBQVdJQyxRQUFNLEVBQUUsS0FYWjtBQVlJQyxPQUFLLEVBQUUsNkJBWlg7QUFhSUMsTUFBSSxFQUFFO0FBYlYsQ0FEUyxFQWdCVDtBQUNJWixhQUFXLEVBQUUseUJBRGpCO0FBRUlDLFVBQVEsRUFBRSxLQUZkO0FBR0lDLGFBQVcsRUFBRSxDQUhqQjtBQUlJQyxJQUFFLEVBQUUsc0JBSlI7QUFLSUMsZUFBYSxFQUFFLDBFQUxuQjtBQU1JQyxVQUFRLEVBQUUsb0VBTmQ7QUFPSUMsVUFBUSxFQUFFLEdBUGQ7QUFRSUMsWUFBVSxFQUFFLEtBUmhCO0FBU0lDLE9BQUssRUFBRSxJQVRYO0FBVUlDLFVBQVEsRUFBRSxHQVZkO0FBV0lDLFFBQU0sRUFBRSxJQVhaO0FBWUlDLE9BQUssRUFB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QUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLEVBUUksTUFBQywrRUFBRDtBQUFxQixZQUFRLEVBQUVBLElBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixFQVNJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLENBSEEsQ0FESjtBQWtCSCxDQW5CRCxDLENBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztLQXpCTWMsSztBQTJCVUEsb0VBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5lZGI4MDMwNzg3MmYwYTg4YjI5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRvcEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dHMvVG9wSGVhZGVyJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dHMvTmF2YmFyJztcclxuaW1wb3J0IE1haW5CYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lT25lL01haW5CYW5uZXInO1xyXG5pbXBvcnQgUmVjZW50UHJvZHVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lT25lL1JlY2VudFByb2R1Y3RzJztcclxuaW1wb3J0IE9mZmVyU3R5bGVPbmUgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vT2ZmZXJTdHlsZU9uZSc7XHJcbmltcG9ydCBGYWNpbGl0eVNsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9GYWNpbGl0eVNsaWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXRzL0Zvb3Rlcic7XHJcbmltcG9ydCBQb3B1bGFyUHJvZHVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lT25lL1BvcHVsYXJQcm9kdWN0cyc7XHJcbmltcG9ydCBCZXN0U2VsbGluZ1Byb2R1Y3RzIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZU9uZS9CZXN0U2VsbGluZ1Byb2R1Y3RzJztcclxuaW1wb3J0IENhcnRDb250ZXh0IGZyb20gJy4uL0NvbnRleHRzL0NhcnRDb250ZXh0JztcclxuY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb25nIFNsZWV2ZSBMZW9wYXJkIFQtU2hpcnRcIixcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDEwLFxyXG4gICAgICAgIGlkOiBcIjVEQWNVRERkNHQ4eFdnbDlrdlhsXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjEtMTU4ODcwNDQzNjA0My5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzEtMTU4ODcwNDQyODI3My5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMzIwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyNTAsXHJcbiAgICAgICAgb25TYWxlOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJMb25nIFNsZWV2ZSBMZW9wYXJkIFQtU2hpcnRcIixcclxuICAgICAgICB0eXBlOiBcIlQtU2hpcnRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTdW5ueW1lIFdvbWVuJ3MgUG9uY2hvc1wiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBpZDogXCI4MXRnaWdMMFUyelVIb1RqODVIdFwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXI4LTE1ODg3MDU0NjgzNzQuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWc4LTE1ODg3MDU0NjIzNzYuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDIwMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMjEwLFxyXG4gICAgICAgIG9uU2FsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogXCJTdW5ueW1lIFdvbWVuJ3MgUG9uY2hvc1wiLFxyXG4gICAgICAgIHR5cGU6IFwiV29tZW4gQ2xvdGhlc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIldvbWVuJ3MgTW9kZXJuLVNraW5ueVwiLFxyXG4gICAgICAgIGRpc2NvdW50OiB0cnVlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAyMCxcclxuICAgICAgICBpZDogXCI5R2ttZm80SGpXNHRLdk1ZbHBYOVwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXIxMi0xNTg4NzA1OTcyMzkyLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nMTItMTU4ODcwNTk2NjgxOC5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMTAwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgIG9sZFByaWNlOiAxNTAsXHJcbiAgICAgICAgb25TYWxlOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJXb21lbidzIE1vZGVybi1Ta2lubnlcIixcclxuICAgICAgICB0eXBlOiBcIlQtU2hpcnRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJCbG9jayBTdHJpcGVkIERyYXBlZFwiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBpZDogXCJEOXd3YTJaRHUyODFIVjVzOTViOVwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXIxMS0xNTg4NzA1OTA1MTcxLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nMTEtMTU4ODcwNTg5OTY3Ny5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMjEwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiBmYWxzZSxcclxuICAgICAgICBvbGRQcmljZTogMjIwLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiQmxvY2sgU3RyaXBlZCBEcmFwZWRcIixcclxuICAgICAgICB0eXBlOiBcIlQtU2hpcnRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJHaWxkYW4gTWVuJ3MgQ3JldyBULVNoaXJ0XCIsXHJcbiAgICAgICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAwLFxyXG4gICAgICAgIGlkOiBcIkV6SnR4dmM5WnI3aUc4azdlSWxCXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjQtMTU4ODcwNTEwOTkxMy5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzQtMTU4ODcwNTEwNDY0MC5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMTUwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiBmYWxzZSxcclxuICAgICAgICBvbGRQcmljZTogMTUwLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiR2lsZGFuIE1lbidzIENyZXcgVC1TaGlydFwiLFxyXG4gICAgICAgIHR5cGU6IFwiVC1TaGlydFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIllpZGFydG9uIFdvbWVuJ3MgQ29tZnlcIixcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDAsXHJcbiAgICAgICAgaWQ6IFwiSGRkcjdWaDB2TTBpNUQwSkloN29cIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyNS0xNTg4NzA1MTc3OTQxLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nNS0xNTg4NzA1MTcxMDYzLmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAyNDAsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IGZhbHNlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyNDAsXHJcbiAgICAgICAgb25TYWxlOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJZaWRhcnRvbiBXb21lbidzIENvbWZ5XCIsXHJcbiAgICAgICAgdHlwZTogXCJXb21lbiBDbG90aGVzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ2hlc3QgQ3V0b3V0IFR1bmljcyBMb25nXCIsXHJcbiAgICAgICAgZGlzY291bnQ6IHRydWUsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDIwLFxyXG4gICAgICAgIGlkOiBcIk4xNG5HUjR5bjVnNTI2VGRUSk5VXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjE1LTE1ODg3MDYxOTg0NTYuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWcxNS0xNTg4NzA2MTkzNzMxLmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAyMDAsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IHRydWUsXHJcbiAgICAgICAgb2xkUHJpY2U6IDIxMCxcclxuICAgICAgICBvblNhbGU6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBcIkNoZXN0IEN1dG91dCBUdW5pY3MgTG9uZ1wiLFxyXG4gICAgICAgIHR5cGU6IFwiVC1TaGlydFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlQtU2hpcnQgQ2FzdWFsIFN0cmlwZSBUdW5pY1wiLFxyXG4gICAgICAgIGRpc2NvdW50OiB0cnVlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAyMCxcclxuICAgICAgICBpZDogXCJTNHhqbUdWOElpV0g5VmI5Sm5XcVwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXIxNC0xNTg4NzA2MTM1ODcwLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nMTQtMTU4ODcwNjEzMDAyMy5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMjAwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyMTAsXHJcbiAgICAgICAgb25TYWxlOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJULVNoaXJ0IENhc3VhbCBTdHJpcGUgVHVuaWNcIixcclxuICAgICAgICB0eXBlOiBcIlQtU2hpcnRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDYXVzYWwgVi1OZWNrIFNvZnQgUmFnbGFuXCIsXHJcbiAgICAgICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAwLFxyXG4gICAgICAgIGlkOiBcIlZUY1pyVUpESHFxOGZ0RFlGYlY4XCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjItMTU4ODcwNDY1NjU4My5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzItMTU4ODcwNDY0ODIxNC5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMjAwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyMTAsXHJcbiAgICAgICAgb25TYWxlOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIkNhdXNhbCBWLU5lY2sgU29mdCBSYWdsYW5cIixcclxuICAgICAgICB0eXBlOiBcIldvbWVuIENsb3RoZXNcIlxyXG4gICAgfSxcclxuXVxyXG5jb25zdCBJbmRleCA9ICh7IHByb2R1Y3RzIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcnRDb250ZXh0LkNvbnN1bWVyID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGNhcnQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8VG9wSGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPE1haW5CYW5uZXIgLz5cclxuICAgICAgICAgICAgPFJlY2VudFByb2R1Y3RzIHByb2R1Y3RzPXtkYXRhfSAvPlxyXG4gICAgICAgICAgICA8T2ZmZXJTdHlsZU9uZSAvPlxyXG4gICAgICAgICAgICA8UG9wdWxhclByb2R1Y3RzIHByb2R1Y3RzPXtkYXRhfSAvPlxyXG4gICAgICAgICAgICA8RmFjaWxpdHlTbGlkZXIgLz5cclxuICAgICAgICAgICAgPEJlc3RTZWxsaW5nUHJvZHVjdHMgcHJvZHVjdHM9e2RhdGF9IC8+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FydENvbnRleHQuQ29uc3VtZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLmZpbHRlciggcHJvZHVjdCA9PiBwcm9kdWN0LnR5cGUgPT0gJ1dvbWVuIENsb3RoZXMnIClcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKEluZGV4KTsiXSwic291cmNlUm9vdCI6IiJ9
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
/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../contexts/CartContext */ "./contexts/CartContext.js");
var _jsxFileName = "F:\\N\u0103m 4 h\u1ECDc k\u1EF3 1\\M\xF4 h\xECnh h\xF3a ph\u1EA7n m\u1EC1m\\New folder (2)\\pages\\index.js",
    _s = $RefreshSig$();

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
  _s();

  const cart = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_10__["default"]);
  console.log(cart);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, __jsx(_components_Layouts_TopHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }), __jsx(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }), __jsx(_components_HomeOne_MainBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }), __jsx(_components_HomeOne_RecentProducts__WEBPACK_IMPORTED_MODULE_4__["default"], {
    products: data,
    addToCart: cart.addToCart,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }), __jsx(_components_Common_OfferStyleOne__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }), __jsx(_components_HomeOne_PopularProducts__WEBPACK_IMPORTED_MODULE_8__["default"], {
    products: data,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }), __jsx(_components_Common_FacilitySlider__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }), __jsx(_components_HomeOne_BestSellingProducts__WEBPACK_IMPORTED_MODULE_9__["default"], {
    products: data,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 13
    }
  }), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }));
}; // const mapStateToProps = (state) => {
//     return {
//         products: state.products.filter( product => product.type == 'Women Clothes' )
//     }
// }


_s(Index, "QchebOVKze+CH1FRHiU38Fd0/kM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiZGVzY3JpcHRpb24iLCJkaXNjb3VudCIsImRpc2NvdW50T2ZmIiwiaWQiLCJpbWFnZUhvdmVyVXJsIiwiaW1hZ2VVcmwiLCJuZXdQcmljZSIsIm5ld1Byb2R1Y3QiLCJvZmZlciIsIm9sZFByaWNlIiwib25TYWxlIiwidGl0bGUiLCJ0eXBlIiwiSW5kZXgiLCJwcm9kdWN0cyIsImNhcnQiLCJ1c2VDb250ZXh0IiwiQ2FydENvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiYWRkVG9DYXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsSUFBSSxHQUFHLENBQ1Q7QUFDSUMsYUFBVyxFQUFFLDZCQURqQjtBQUVJQyxVQUFRLEVBQUUsS0FGZDtBQUdJQyxhQUFXLEVBQUUsRUFIakI7QUFJSUMsSUFBRSxFQUFFLHNCQUpSO0FBS0lDLGVBQWEsRUFBRSwwRUFMbkI7QUFNSUMsVUFBUSxFQUFFLG9FQU5kO0FBT0lDLFVBQVEsRUFBRSxHQVBkO0FBUUlDLFlBQVUsRUFBRSxLQVJoQjtBQVNJQyxPQUFLLEVBQUUsSUFUWDtBQVVJQyxVQUFRLEVBQUUsR0FWZDtBQVdJQyxRQUFNLEVBQUUsS0FYWjtBQVlJQyxPQUFLLEVBQUUsNkJBWlg7QUFhSUMsTUFBSSxFQUFFO0FBYlYsQ0FEUyxFQWdCVDtBQUNJWixhQUFXLEVBQUUseUJBRGpCO0FBRUlDLFVBQVEsRUFBRSxLQUZkO0FBR0lDLGFBQVcsRUFBRSxDQUhqQjtBQUlJQyxJQUFFLEVBQUUsc0JBSlI7QUFLSUMsZUFBYSxFQUFFLDBFQUxuQjtBQU1JQyxVQUFRLEVBQUUsb0VBTmQ7QUFPSUMsVUFBUSxFQUFFLEdBUGQ7QUFRSUMsWUFBVSxFQUFFLEtBUmhCO0FBU0lDLE9BQUssRUFBRSxJQVRY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LE1BQUMsMkVBQUQ7QUFBaUIsWUFBUSxFQUFFckIsSUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5KLEVBT0ksTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEosRUFRSSxNQUFDLCtFQUFEO0FBQXFCLFlBQVEsRUFBRUEsSUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJKLEVBU0ksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosQ0FESjtBQWFILENBaEJELEMsQ0FrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBdEJNYyxLOztLQUFBQSxLO0FBd0JVQSxvRUFBaEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmQ5N2E5ODY2Yjg4Yzc4YWY5YTkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUb3BIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXRzL1RvcEhlYWRlcic7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXRzL05hdmJhcic7XHJcbmltcG9ydCBNYWluQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZU9uZS9NYWluQmFubmVyJztcclxuaW1wb3J0IFJlY2VudFByb2R1Y3RzIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZU9uZS9SZWNlbnRQcm9kdWN0cyc7XHJcbmltcG9ydCBPZmZlclN0eWxlT25lIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL09mZmVyU3R5bGVPbmUnO1xyXG5pbXBvcnQgRmFjaWxpdHlTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vRmFjaWxpdHlTbGlkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0cy9Gb290ZXInO1xyXG5pbXBvcnQgUG9wdWxhclByb2R1Y3RzIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZU9uZS9Qb3B1bGFyUHJvZHVjdHMnO1xyXG5pbXBvcnQgQmVzdFNlbGxpbmdQcm9kdWN0cyBmcm9tICcuLi9jb21wb25lbnRzL0hvbWVPbmUvQmVzdFNlbGxpbmdQcm9kdWN0cyc7XHJcbmltcG9ydCBDYXJ0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0cy9DYXJ0Q29udGV4dCc7XHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9uZyBTbGVldmUgTGVvcGFyZCBULVNoaXJ0XCIsXHJcbiAgICAgICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAxMCxcclxuICAgICAgICBpZDogXCI1REFjVUREZDR0OHhXZ2w5a3ZYbFwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXIxLTE1ODg3MDQ0MzYwNDMuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWcxLTE1ODg3MDQ0MjgyNzMuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDMyMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMjUwLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiTG9uZyBTbGVldmUgTGVvcGFyZCBULVNoaXJ0XCIsXHJcbiAgICAgICAgdHlwZTogXCJULVNoaXJ0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU3VubnltZSBXb21lbidzIFBvbmNob3NcIixcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDAsXHJcbiAgICAgICAgaWQ6IFwiODF0Z2lnTDBVMnpVSG9Uajg1SHRcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyOC0xNTg4NzA1NDY4Mzc0LmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nOC0xNTg4NzA1NDYyMzc2LmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAyMDAsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IHRydWUsXHJcbiAgICAgICAgb2xkUHJpY2U6IDIxMCxcclxuICAgICAgICBvblNhbGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiU3VubnltZSBXb21lbidzIFBvbmNob3NcIixcclxuICAgICAgICB0eXBlOiBcIldvbWVuIENsb3RoZXNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJXb21lbidzIE1vZGVybi1Ta2lubnlcIixcclxuICAgICAgICBkaXNjb3VudDogdHJ1ZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMjAsXHJcbiAgICAgICAgaWQ6IFwiOUdrbWZvNEhqVzR0S3ZNWWxwWDlcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyMTItMTU4ODcwNTk3MjM5Mi5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzEyLTE1ODg3MDU5NjY4MTguanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDEwMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMTUwLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiV29tZW4ncyBNb2Rlcm4tU2tpbm55XCIsXHJcbiAgICAgICAgdHlwZTogXCJULVNoaXJ0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQmxvY2sgU3RyaXBlZCBEcmFwZWRcIixcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDAsXHJcbiAgICAgICAgaWQ6IFwiRDl3d2EyWkR1MjgxSFY1czk1YjlcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyMTEtMTU4ODcwNTkwNTE3MS5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzExLTE1ODg3MDU4OTk2NzcuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDIxMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogZmFsc2UsXHJcbiAgICAgICAgb2xkUHJpY2U6IDIyMCxcclxuICAgICAgICBvblNhbGU6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBcIkJsb2NrIFN0cmlwZWQgRHJhcGVkXCIsXHJcbiAgICAgICAgdHlwZTogXCJULVNoaXJ0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiR2lsZGFuIE1lbidzIENyZXcgVC1TaGlydFwiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBpZDogXCJFekp0eHZjOVpyN2lHOGs3ZUlsQlwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXI0LTE1ODg3MDUxMDk5MTMuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWc0LTE1ODg3MDUxMDQ2NDAuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDE1MCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogZmFsc2UsXHJcbiAgICAgICAgb2xkUHJpY2U6IDE1MCxcclxuICAgICAgICBvblNhbGU6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBcIkdpbGRhbiBNZW4ncyBDcmV3IFQtU2hpcnRcIixcclxuICAgICAgICB0eXBlOiBcIlQtU2hpcnRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJZaWRhcnRvbiBXb21lbidzIENvbWZ5XCIsXHJcbiAgICAgICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAwLFxyXG4gICAgICAgIGlkOiBcIkhkZHI3Vmgwdk0waTVEMEpJaDdvXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjUtMTU4ODcwNTE3Nzk0MS5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzUtMTU4ODcwNTE3MTA2My5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMjQwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiBmYWxzZSxcclxuICAgICAgICBvbGRQcmljZTogMjQwLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiWWlkYXJ0b24gV29tZW4ncyBDb21meVwiLFxyXG4gICAgICAgIHR5cGU6IFwiV29tZW4gQ2xvdGhlc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNoZXN0IEN1dG91dCBUdW5pY3MgTG9uZ1wiLFxyXG4gICAgICAgIGRpc2NvdW50OiB0cnVlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAyMCxcclxuICAgICAgICBpZDogXCJOMTRuR1I0eW41ZzUyNlRkVEpOVVwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXIxNS0xNTg4NzA2MTk4NDU2LmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nMTUtMTU4ODcwNjE5MzczMS5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMjAwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyMTAsXHJcbiAgICAgICAgb25TYWxlOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJDaGVzdCBDdXRvdXQgVHVuaWNzIExvbmdcIixcclxuICAgICAgICB0eXBlOiBcIlQtU2hpcnRcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJULVNoaXJ0IENhc3VhbCBTdHJpcGUgVHVuaWNcIixcclxuICAgICAgICBkaXNjb3VudDogdHJ1ZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMjAsXHJcbiAgICAgICAgaWQ6IFwiUzR4am1HVjhJaVdIOVZiOUpuV3FcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyMTQtMTU4ODcwNjEzNTg3MC5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzE0LTE1ODg3MDYxMzAwMjMuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDIwMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMjEwLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiVC1TaGlydCBDYXN1YWwgU3RyaXBlIFR1bmljXCIsXHJcbiAgICAgICAgdHlwZTogXCJULVNoaXJ0XCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ2F1c2FsIFYtTmVjayBTb2Z0IFJhZ2xhblwiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBpZDogXCJWVGNaclVKREhxcThmdERZRmJWOFwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXIyLTE1ODg3MDQ2NTY1ODMuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWcyLTE1ODg3MDQ2NDgyMTQuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDIwMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMjEwLFxyXG4gICAgICAgIG9uU2FsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogXCJDYXVzYWwgVi1OZWNrIFNvZnQgUmFnbGFuXCIsXHJcbiAgICAgICAgdHlwZTogXCJXb21lbiBDbG90aGVzXCJcclxuICAgIH0sXHJcbl1cclxuY29uc3QgSW5kZXggPSAoeyBwcm9kdWN0cyB9KSA9PiB7XHJcbiAgICBjb25zdCBjYXJ0ID0gdXNlQ29udGV4dChDYXJ0Q29udGV4dCk7XHJcbiAgICBjb25zb2xlLmxvZyhjYXJ0KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8VG9wSGVhZGVyIC8+XHJcbiAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgPE1haW5CYW5uZXIgLz5cclxuICAgICAgICAgICAgPFJlY2VudFByb2R1Y3RzIHByb2R1Y3RzPXtkYXRhfSBhZGRUb0NhcnQ9e2NhcnQuYWRkVG9DYXJ0fS8+XHJcbiAgICAgICAgICAgIDxPZmZlclN0eWxlT25lIC8+XHJcbiAgICAgICAgICAgIDxQb3B1bGFyUHJvZHVjdHMgcHJvZHVjdHM9e2RhdGF9IC8+XHJcbiAgICAgICAgICAgIDxGYWNpbGl0eVNsaWRlciAvPlxyXG4gICAgICAgICAgICA8QmVzdFNlbGxpbmdQcm9kdWN0cyBwcm9kdWN0cz17ZGF0YX0gLz5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgcHJvZHVjdHM6IHN0YXRlLnByb2R1Y3RzLmZpbHRlciggcHJvZHVjdCA9PiBwcm9kdWN0LnR5cGUgPT0gJ1dvbWVuIENsb3RoZXMnIClcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKEluZGV4KTsiXSwic291cmNlUm9vdCI6IiJ9
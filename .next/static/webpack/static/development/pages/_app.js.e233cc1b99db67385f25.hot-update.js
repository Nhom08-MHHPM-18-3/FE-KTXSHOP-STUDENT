webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Cart/CartProvider.js":
/*!*****************************************!*\
  !*** ./components/Cart/CartProvider.js ***!
  \*****************************************/
/*! exports provided: CartProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProvider", function() { return CartProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/CartContext */ "./contexts/CartContext.js");


var _jsxFileName = "F:\\N\u0103m 4 h\u1ECDc k\u1EF3 1\\M\xF4 h\xECnh h\xF3a ph\u1EA7n m\u1EC1m\\New folder (2)\\components\\Cart\\CartProvider.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



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
  type: "T-Shirt",
  quantity: 1
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
  type: "Women Clothes",
  quantity: 1
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
  type: "Women Clothes",
  quantity: 1
}];

const cartReducer = (state, action) => {
  // User Logout
  if (action.type === 'USRER_LOGOUT') {
    cookie.remove('_livani_token_');
    return _objectSpread(_objectSpread({}, state), {}, {
      login: false
    });
  } // Check if user login


  if (action.type === 'CHECK_USRER_LOGIN') {
    const getToken = cookie.get('_livani_token_');

    if (getToken == token) {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: true
      });
    } else {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: false
      });
    }
  } // User Login


  if (action.type === 'USRER_LOGIN') {
    cookie.set('_livani_token_', token);
    const getToken = cookie.get('_livani_token_'); // console.log('token', getToken)

    if (getToken == token) {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: true
      });
    } else {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: false
      });
    }
  }

  if (action.type === 'ADD_PRODUCTS') {
    let productsArray = [];
    productsArray = action.payload; // console.log('www', productsArray)

    return _objectSpread(_objectSpread({}, state), {}, {
      products: productsArray
    });
  }

  if (action.type === 'INIT_CART') {
    let productsArray = [];
    productsArray = action.payload;
    let newTotal = 0;

    for (let i = 0; i < productsArray.length; i++) {
      newTotal += productsArray[i].newPrice;
    }

    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: productsArray,
      total: newTotal
    });
  }

  if (action.type === 'ADD_TO_CART') {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += 1;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.newPrice
      });
    } else {
      addedItem.quantity = 1; //calculating the total

      let newTotal = state.total + addedItem.newPrice;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === 'ADD_QUANTITY_WITH_NUMBER') {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.newPrice * action.qty
      });
    } else {
      addedItem.quantity = action.qty; //calculating the total

      let newTotal = state.total + addedItem.newPrice * action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === 'REMOVE_ITEM') {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id); //calculating the total

    let newTotal = state.total - itemToRemove.newPrice * itemToRemove.quantity;
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: new_items,
      total: newTotal
    });
  }

  if (action.type === 'ADD_QUANTITY') {
    let addedItem = state.products.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.newPrice;
    return _objectSpread(_objectSpread({}, state), {}, {
      total: newTotal
    });
  }

  if (action.type === 'SUB_QUANTITY') {
    let addedItem = state.products.find(item => item.id === action.id); //if the qt == 0 then it should be removed

    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.newPrice;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: new_items,
        total: newTotal
      });
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.newPrice;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: newTotal
      });
    }
  }

  if (action.type === 'ADD_SHIPPING') {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping += 30
    });
  }

  if (action.type === 'SUB_SHIPPING') {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping -= 30
    });
  }

  if (action.type === 'RESET_CART') {
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: [],
      total: 0,
      shipping: 0
    });
  } else {
    return state;
  }
};

const CartProvider = ({
  children
}) => {
  _s();

  const {
    0: cart,
    1: dispatchCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(cartReducer, {
    products: [],
    addedItems: [],
    total: 0,
    shipping: 0,
    login: false
  });

  const removeItem = id => {
    dispatchCart({
      type: 'REMOVE_ITEM',
      id: id
    });
  };

  const addToCart = id => {
    dispatchCart({
      type: 'ADD_TO_CART',
      id: id
    });
  };

  const addQuantity = id => {
    dispatchCart({
      type: 'ADD_QUANTITY',
      id: id
    });
  };

  const subQuantity = id => {
    dispatchCart({
      type: 'SUB_QUANTITY',
      id: id
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatchCart({
      type: 'ADD_PRODUCTS',
      payload: data
    });
    dispatchCart({
      type: 'INIT_CART',
      payload: data
    });
  }, []);
  return __jsx(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: {
      cart: cart,
      removeItem: removeItem,
      addToCart: addToCart
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 9
    }
  }, children);
};

_s(CartProvider, "BSCU9tbf3jBnCGGRp1AQCVfN9ac=");

_c = CartProvider;

var _c;

$RefreshReg$(_c, "CartProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvQ2FydFByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJkZXNjcmlwdGlvbiIsImRpc2NvdW50IiwiZGlzY291bnRPZmYiLCJpZCIsImltYWdlSG92ZXJVcmwiLCJpbWFnZVVybCIsIm5ld1ByaWNlIiwibmV3UHJvZHVjdCIsIm9mZmVyIiwib2xkUHJpY2UiLCJvblNhbGUiLCJ0aXRsZSIsInR5cGUiLCJxdWFudGl0eSIsImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb29raWUiLCJyZW1vdmUiLCJsb2dpbiIsImdldFRva2VuIiwiZ2V0IiwidG9rZW4iLCJzZXQiLCJwcm9kdWN0c0FycmF5IiwicGF5bG9hZCIsInByb2R1Y3RzIiwibmV3VG90YWwiLCJpIiwibGVuZ3RoIiwiYWRkZWRJdGVtcyIsInRvdGFsIiwiYWRkZWRJdGVtIiwiZmluZCIsIml0ZW0iLCJleGlzdGVkX2l0ZW0iLCJxdHkiLCJpdGVtVG9SZW1vdmUiLCJuZXdfaXRlbXMiLCJmaWx0ZXIiLCJzaGlwcGluZyIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwiY2FydCIsImRpc3BhdGNoQ2FydCIsInVzZVJlZHVjZXIiLCJyZW1vdmVJdGVtIiwiYWRkVG9DYXJ0IiwiYWRkUXVhbnRpdHkiLCJzdWJRdWFudGl0eSIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBLE1BQU1BLElBQUksR0FBRyxDQUNUO0FBQ0lDLGFBQVcsRUFBRSw2QkFEakI7QUFFSUMsVUFBUSxFQUFFLEtBRmQ7QUFHSUMsYUFBVyxFQUFFLEVBSGpCO0FBSUlDLElBQUUsRUFBRSxzQkFKUjtBQUtJQyxlQUFhLEVBQUUsMEVBTG5CO0FBTUlDLFVBQVEsRUFBRSxvRUFOZDtBQU9JQyxVQUFRLEVBQUUsR0FQZDtBQVFJQyxZQUFVLEVBQUUsS0FSaEI7QUFTSUMsT0FBSyxFQUFFLElBVFg7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QTtBQUFBO0FBQUEsS0FPS0wsUUFQTCxDQURKO0FBWUgsQ0FyQ007O0dBQU1ELFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuZTIzM2NjMWI5OWRiNjczODVmMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVkdWNlciwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ2FydENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHRzL0NhcnRDb250ZXh0XCI7XHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9uZyBTbGVldmUgTGVvcGFyZCBULVNoaXJ0XCIsXHJcbiAgICAgICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAxMCxcclxuICAgICAgICBpZDogXCI1REFjVUREZDR0OHhXZ2w5a3ZYbFwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXIxLTE1ODg3MDQ0MzYwNDMuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWcxLTE1ODg3MDQ0MjgyNzMuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDMyMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMjUwLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiTG9uZyBTbGVldmUgTGVvcGFyZCBULVNoaXJ0XCIsXHJcbiAgICAgICAgdHlwZTogXCJULVNoaXJ0XCIsXHJcbiAgICAgICAgcXVhbnRpdHk6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU3VubnltZSBXb21lbidzIFBvbmNob3NcIixcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDAsXHJcbiAgICAgICAgaWQ6IFwiODF0Z2lnTDBVMnpVSG9Uajg1SHRcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyOC0xNTg4NzA1NDY4Mzc0LmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nOC0xNTg4NzA1NDYyMzc2LmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAyMDAsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IHRydWUsXHJcbiAgICAgICAgb2xkUHJpY2U6IDIxMCxcclxuICAgICAgICBvblNhbGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiU3VubnltZSBXb21lbidzIFBvbmNob3NcIixcclxuICAgICAgICB0eXBlOiBcIldvbWVuIENsb3RoZXNcIixcclxuICAgICAgICBxdWFudGl0eTogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTdW5ueW1lIFdvbWVuJ3MgUG9uY2hvc1wiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBpZDogXCI4MXRnaWdMMFUyelVIb1RqODVIdFwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXI4LTE1ODg3MDU0NjgzNzQuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWc4LTE1ODg3MDU0NjIzNzYuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDIwMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMjEwLFxyXG4gICAgICAgIG9uU2FsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogXCJTdW5ueW1lIFdvbWVuJ3MgUG9uY2hvc1wiLFxyXG4gICAgICAgIHR5cGU6IFwiV29tZW4gQ2xvdGhlc1wiLFxyXG4gICAgICAgIHF1YW50aXR5OiAxXHJcbiAgICB9LFxyXG5dXHJcbmNvbnN0IGNhcnRSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHJcbiAgICAvLyBVc2VyIExvZ291dFxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnVVNSRVJfTE9HT1VUJykge1xyXG4gICAgICAgIGNvb2tpZS5yZW1vdmUoJ19saXZhbmlfdG9rZW5fJylcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgbG9naW46IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHVzZXIgbG9naW5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0NIRUNLX1VTUkVSX0xPR0lOJykge1xyXG4gICAgICAgIGNvbnN0IGdldFRva2VuID0gY29va2llLmdldCgnX2xpdmFuaV90b2tlbl8nKVxyXG5cclxuICAgICAgICBpZiAoZ2V0VG9rZW4gPT0gdG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9naW46IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFVzZXIgTG9naW5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1VTUkVSX0xPR0lOJykge1xyXG4gICAgICAgIGNvb2tpZS5zZXQoJ19saXZhbmlfdG9rZW5fJywgdG9rZW4pO1xyXG5cclxuICAgICAgICBjb25zdCBnZXRUb2tlbiA9IGNvb2tpZS5nZXQoJ19saXZhbmlfdG9rZW5fJylcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Rva2VuJywgZ2V0VG9rZW4pXHJcblxyXG4gICAgICAgIGlmIChnZXRUb2tlbiA9PSB0b2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dpbjogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9naW46IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FERF9QUk9EVUNUUycpIHtcclxuICAgICAgICBsZXQgcHJvZHVjdHNBcnJheSA9IFtdO1xyXG4gICAgICAgIHByb2R1Y3RzQXJyYXkgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3d3dycsIHByb2R1Y3RzQXJyYXkpXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdHNBcnJheVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0lOSVRfQ0FSVCcpIHtcclxuICAgICAgICBsZXQgcHJvZHVjdHNBcnJheSA9IFtdO1xyXG4gICAgICAgIHByb2R1Y3RzQXJyYXkgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2R1Y3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbmV3VG90YWwgKz0gcHJvZHVjdHNBcnJheVtpXS5uZXdQcmljZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBwcm9kdWN0c0FycmF5LFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1RPX0NBUlQnKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYgKGV4aXN0ZWRfaXRlbSkge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gMVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IDE7XHJcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVInKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYgKGV4aXN0ZWRfaXRlbSkge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gYWN0aW9uLnF0eVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgKiBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSBhY3Rpb24ucXR5O1xyXG4gICAgICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSAqIGFjdGlvbi5xdHlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdSRU1PVkVfSVRFTScpIHtcclxuICAgICAgICBsZXQgaXRlbVRvUmVtb3ZlID0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW0gPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtID0+IGFjdGlvbi5pZCAhPT0gaXRlbS5pZClcclxuXHJcbiAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIChpdGVtVG9SZW1vdmUubmV3UHJpY2UgKiBpdGVtVG9SZW1vdmUucXVhbnRpdHkpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1FVQU5USVRZJykge1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1NVQl9RVUFOVElUWScpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2lmIHRoZSBxdCA9PSAwIHRoZW4gaXQgc2hvdWxkIGJlIHJlbW92ZWRcclxuICAgICAgICBpZiAoYWRkZWRJdGVtLnF1YW50aXR5ID09PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5pZClcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgLT0gMVxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1NISVBQSU5HJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgKz0gMzBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnU1VCX1NISVBQSU5HJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgLT0gMzBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnUkVTRVRfQ0FSVCcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogW10sXHJcbiAgICAgICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgW2NhcnQsIGRpc3BhdGNoQ2FydF0gPSB1c2VSZWR1Y2VyKGNhcnRSZWR1Y2VyLCB7XHJcbiAgICAgICAgcHJvZHVjdHM6IFtdLFxyXG4gICAgICAgIGFkZGVkSXRlbXM6IFtdLFxyXG4gICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgIHNoaXBwaW5nOiAwLFxyXG4gICAgICAgIGxvZ2luOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCByZW1vdmVJdGVtID0gKGlkKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ1JFTU9WRV9JVEVNJywgaWQ6IGlkIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBhZGRUb0NhcnQgPSAoaWQpID0+IHtcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnQUREX1RPX0NBUlQnLCBpZDogaWQgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFF1YW50aXR5ID0gKGlkKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ0FERF9RVUFOVElUWScsIGlkOiBpZCB9KVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3ViUXVhbnRpdHkgPSAoaWQpID0+IHtcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnU1VCX1FVQU5USVRZJywgaWQ6IGlkIH0pXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdBRERfUFJPRFVDVFMnLCBwYXlsb2FkOiBkYXRhIH0pXHJcbiAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ0lOSVRfQ0FSVCcsIHBheWxvYWQ6IGRhdGEgfSlcclxuICAgIH0sIFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FydENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIGNhcnQ6IGNhcnQsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtOiByZW1vdmVJdGVtLFxyXG4gICAgICAgICAgICAgICAgYWRkVG9DYXJ0OiBhZGRUb0NhcnRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
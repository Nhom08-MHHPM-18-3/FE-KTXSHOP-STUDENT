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
    let newTotal;

    for (let i; i < productsArray.length; i++) {
      newTotal += productsArray.newPrice;
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

  const updateNumber = () => {
    setNumber({
      number: Math.random()
    });
  };

  const removeItem = id => {
    dispatchCart({
      type: 'REMOVE_ITEM',
      id: data
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
      updateNumber: updateNumber
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvQ2FydFByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJkZXNjcmlwdGlvbiIsImRpc2NvdW50IiwiZGlzY291bnRPZmYiLCJpZCIsImltYWdlSG92ZXJVcmwiLCJpbWFnZVVybCIsIm5ld1ByaWNlIiwibmV3UHJvZHVjdCIsIm9mZmVyIiwib2xkUHJpY2UiLCJvblNhbGUiLCJ0aXRsZSIsInR5cGUiLCJxdWFudGl0eSIsImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb29raWUiLCJyZW1vdmUiLCJsb2dpbiIsImdldFRva2VuIiwiZ2V0IiwidG9rZW4iLCJzZXQiLCJwcm9kdWN0c0FycmF5IiwicGF5bG9hZCIsInByb2R1Y3RzIiwibmV3VG90YWwiLCJpIiwibGVuZ3RoIiwiYWRkZWRJdGVtcyIsInRvdGFsIiwiYWRkZWRJdGVtIiwiZmluZCIsIml0ZW0iLCJleGlzdGVkX2l0ZW0iLCJxdHkiLCJpdGVtVG9SZW1vdmUiLCJuZXdfaXRlbXMiLCJmaWx0ZXIiLCJzaGlwcGluZyIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwiY2FydCIsImRpc3BhdGNoQ2FydCIsInVzZVJlZHVjZXIiLCJ1cGRhdGVOdW1iZXIiLCJzZXROdW1iZXIiLCJudW1iZXIiLCJNYXRoIiwicmFuZG9tIiwicmVtb3ZlSXRlbSIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBLE1BQU1BLElBQUksR0FBRyxDQUNUO0FBQ0lDLGFBQVcsRUFBRSw2QkFEakI7QUFFSUMsVUFBUSxFQUFFLEtBRmQ7QUFHSUMsYUFBVyxFQUFFLEVBSGpCO0FBSUlDLElBQUUsRUFBRSxzQkFKUjtBQUtJQyxlQUFhLEVBQUUsMEVBTG5CO0FBTUlDLFVBQVEsRUFBRSxvRUFOZDtBQU9JQyxVQUFRLEVBQUUsR0FQZDtBQVFJQyxZQUFVLEVBQUUsS0FSaEI7QUFTSUMsT0FB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RFMsWUFBUSxFQUFFLENBSnVDO0FBS2pEckIsU0FBSyxFQUFFO0FBTDBDLEdBQWQsQ0FBdkM7O0FBUUEsUUFBTTJCLFlBQVksR0FBRyxNQUFNO0FBQ3ZCQyxhQUFTLENBQUM7QUFDTkMsWUFBTSxFQUFFQyxJQUFJLENBQUNDLE1BQUw7QUFERixLQUFELENBQVQ7QUFHSCxHQUpEOztBQUtBLFFBQU1DLFVBQVUsR0FBSWhELEVBQUQsSUFBTztBQUN0QnlDLGdCQUFZLENBQUM7QUFBRWhDLFVBQUksRUFBRSxhQUFSO0FBQXVCVCxRQUFFLEVBQUVKO0FBQTNCLEtBQUQsQ0FBWjtBQUNILEdBRkQ7O0FBR0FxRCx5REFBUyxDQUFDLE1BQU07QUFDWlIsZ0JBQVksQ0FBQztBQUFFaEMsVUFBSSxFQUFFLGNBQVI7QUFBd0JhLGFBQU8sRUFBRTFCO0FBQWpDLEtBQUQsQ0FBWjtBQUNBNkMsZ0JBQVksQ0FBQztBQUFFaEMsVUFBSSxFQUFFLFdBQVI7QUFBcUJhLGFBQU8sRUFBRTFCO0FBQTlCLEtBQUQsQ0FBWjtBQUNILEdBSFEsRUFHTixFQUhNLENBQVQ7QUFJQSxTQUNJLE1BQUMsNkRBQUQsQ0FBYSxRQUFiO0FBQ0ksU0FBSyxFQUFFO0FBQ0g0QyxVQUFJLEVBQUVBLElBREg7QUFFSEcsa0JBQVksRUFBRUE7QUFGWCxLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNS0osUUFOTCxDQURKO0FBV0gsQ0FoQ007O0dBQU1ELFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuODgxZjIzZWNhOTRkOTM1NDY5M2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVkdWNlciwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ2FydENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHRzL0NhcnRDb250ZXh0XCI7XHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTG9uZyBTbGVldmUgTGVvcGFyZCBULVNoaXJ0XCIsXHJcbiAgICAgICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAxMCxcclxuICAgICAgICBpZDogXCI1REFjVUREZDR0OHhXZ2w5a3ZYbFwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXIxLTE1ODg3MDQ0MzYwNDMuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWcxLTE1ODg3MDQ0MjgyNzMuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDMyMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMjUwLFxyXG4gICAgICAgIG9uU2FsZTogZmFsc2UsXHJcbiAgICAgICAgdGl0bGU6IFwiTG9uZyBTbGVldmUgTGVvcGFyZCBULVNoaXJ0XCIsXHJcbiAgICAgICAgdHlwZTogXCJULVNoaXJ0XCIsXHJcbiAgICAgICAgcXVhbnRpdHk6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU3VubnltZSBXb21lbidzIFBvbmNob3NcIixcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDAsXHJcbiAgICAgICAgaWQ6IFwiODF0Z2lnTDBVMnpVSG9Uajg1SHRcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyOC0xNTg4NzA1NDY4Mzc0LmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nOC0xNTg4NzA1NDYyMzc2LmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAyMDAsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IHRydWUsXHJcbiAgICAgICAgb2xkUHJpY2U6IDIxMCxcclxuICAgICAgICBvblNhbGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiU3VubnltZSBXb21lbidzIFBvbmNob3NcIixcclxuICAgICAgICB0eXBlOiBcIldvbWVuIENsb3RoZXNcIixcclxuICAgICAgICBxdWFudGl0eTogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTdW5ueW1lIFdvbWVuJ3MgUG9uY2hvc1wiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBpZDogXCI4MXRnaWdMMFUyelVIb1RqODVIdFwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXI4LTE1ODg3MDU0NjgzNzQuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWc4LTE1ODg3MDU0NjIzNzYuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDIwMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMjEwLFxyXG4gICAgICAgIG9uU2FsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogXCJTdW5ueW1lIFdvbWVuJ3MgUG9uY2hvc1wiLFxyXG4gICAgICAgIHR5cGU6IFwiV29tZW4gQ2xvdGhlc1wiLFxyXG4gICAgICAgIHF1YW50aXR5OiAxXHJcbiAgICB9LFxyXG5dXHJcbmNvbnN0IGNhcnRSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHJcbiAgICAvLyBVc2VyIExvZ291dFxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnVVNSRVJfTE9HT1VUJykge1xyXG4gICAgICAgIGNvb2tpZS5yZW1vdmUoJ19saXZhbmlfdG9rZW5fJylcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgbG9naW46IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoZWNrIGlmIHVzZXIgbG9naW5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0NIRUNLX1VTUkVSX0xPR0lOJykge1xyXG4gICAgICAgIGNvbnN0IGdldFRva2VuID0gY29va2llLmdldCgnX2xpdmFuaV90b2tlbl8nKVxyXG5cclxuICAgICAgICBpZiAoZ2V0VG9rZW4gPT0gdG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9naW46IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFVzZXIgTG9naW5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1VTUkVSX0xPR0lOJykge1xyXG4gICAgICAgIGNvb2tpZS5zZXQoJ19saXZhbmlfdG9rZW5fJywgdG9rZW4pO1xyXG5cclxuICAgICAgICBjb25zdCBnZXRUb2tlbiA9IGNvb2tpZS5nZXQoJ19saXZhbmlfdG9rZW5fJylcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Rva2VuJywgZ2V0VG9rZW4pXHJcblxyXG4gICAgICAgIGlmIChnZXRUb2tlbiA9PSB0b2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dpbjogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9naW46IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FERF9QUk9EVUNUUycpIHtcclxuICAgICAgICBsZXQgcHJvZHVjdHNBcnJheSA9IFtdO1xyXG4gICAgICAgIHByb2R1Y3RzQXJyYXkgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3d3dycsIHByb2R1Y3RzQXJyYXkpXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdHNBcnJheVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0lOSVRfQ0FSVCcpIHtcclxuICAgICAgICBsZXQgcHJvZHVjdHNBcnJheSA9IFtdO1xyXG4gICAgICAgIHByb2R1Y3RzQXJyYXkgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsO1xyXG4gICAgICAgIGZvciAobGV0IGk7IGkgPCBwcm9kdWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5ld1RvdGFsICs9IHByb2R1Y3RzQXJyYXkubmV3UHJpY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBwcm9kdWN0c0FycmF5LFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1RPX0NBUlQnKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYgKGV4aXN0ZWRfaXRlbSkge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gMVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IDE7XHJcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVInKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYgKGV4aXN0ZWRfaXRlbSkge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gYWN0aW9uLnF0eVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgKiBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSBhY3Rpb24ucXR5O1xyXG4gICAgICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSAqIGFjdGlvbi5xdHlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdSRU1PVkVfSVRFTScpIHtcclxuICAgICAgICBsZXQgaXRlbVRvUmVtb3ZlID0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW0gPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtID0+IGFjdGlvbi5pZCAhPT0gaXRlbS5pZClcclxuXHJcbiAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIChpdGVtVG9SZW1vdmUubmV3UHJpY2UgKiBpdGVtVG9SZW1vdmUucXVhbnRpdHkpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1FVQU5USVRZJykge1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1NVQl9RVUFOVElUWScpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2lmIHRoZSBxdCA9PSAwIHRoZW4gaXQgc2hvdWxkIGJlIHJlbW92ZWRcclxuICAgICAgICBpZiAoYWRkZWRJdGVtLnF1YW50aXR5ID09PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5pZClcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgLT0gMVxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1NISVBQSU5HJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgKz0gMzBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnU1VCX1NISVBQSU5HJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgLT0gMzBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnUkVTRVRfQ0FSVCcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogW10sXHJcbiAgICAgICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgW2NhcnQsIGRpc3BhdGNoQ2FydF0gPSB1c2VSZWR1Y2VyKGNhcnRSZWR1Y2VyLCB7XHJcbiAgICAgICAgcHJvZHVjdHM6IFtdLFxyXG4gICAgICAgIGFkZGVkSXRlbXM6IFtdLFxyXG4gICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgIHNoaXBwaW5nOiAwLFxyXG4gICAgICAgIGxvZ2luOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB1cGRhdGVOdW1iZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TnVtYmVyKHtcclxuICAgICAgICAgICAgbnVtYmVyOiBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVJdGVtID0gKGlkKSA9PntcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnUkVNT1ZFX0lURU0nLCBpZDogZGF0YSB9KVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnQUREX1BST0RVQ1RTJywgcGF5bG9hZDogZGF0YSB9KVxyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdJTklUX0NBUlQnLCBwYXlsb2FkOiBkYXRhIH0pXHJcbiAgICB9LCBbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcnRDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBjYXJ0OiBjYXJ0LFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlTnVtYmVyOiB1cGRhdGVOdW1iZXJcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
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

    for (let i; i < productsArray.length; i++) {
      newTotal += productsArray[I].newPrice;
    }

    console.log("hii", newTotal);
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
      updateNumber: updateNumber,
      removeItem: removeItem
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvQ2FydFByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJkZXNjcmlwdGlvbiIsImRpc2NvdW50IiwiZGlzY291bnRPZmYiLCJpZCIsImltYWdlSG92ZXJVcmwiLCJpbWFnZVVybCIsIm5ld1ByaWNlIiwibmV3UHJvZHVjdCIsIm9mZmVyIiwib2xkUHJpY2UiLCJvblNhbGUiLCJ0aXRsZSIsInR5cGUiLCJxdWFudGl0eSIsImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb29raWUiLCJyZW1vdmUiLCJsb2dpbiIsImdldFRva2VuIiwiZ2V0IiwidG9rZW4iLCJzZXQiLCJwcm9kdWN0c0FycmF5IiwicGF5bG9hZCIsInByb2R1Y3RzIiwibmV3VG90YWwiLCJpIiwibGVuZ3RoIiwiSSIsImNvbnNvbGUiLCJsb2ciLCJhZGRlZEl0ZW1zIiwidG90YWwiLCJhZGRlZEl0ZW0iLCJmaW5kIiwiaXRlbSIsImV4aXN0ZWRfaXRlbSIsInF0eSIsIml0ZW1Ub1JlbW92ZSIsIm5ld19pdGVtcyIsImZpbHRlciIsInNoaXBwaW5nIiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYXJ0IiwiZGlzcGF0Y2hDYXJ0IiwidXNlUmVkdWNlciIsInVwZGF0ZU51bWJlciIsInNldE51bWJlciIsIm51bWJlciIsIk1hdGgiLCJyYW5kb20iLCJyZW1vdmVJdGVtIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0EsTUFBTUEsSUFBSSxHQUFHLENBQ1Q7QUFDSUMsYUFBVyxFQUFFLDZCQURqQjtBQUVJQyxVQUFRLEVBQUUsS0FGZDtBQUdJQyxhQUFXLEVBQUUsRUFIakI7QUFJSUMsSUFBRSxFQUFFLHNCQUpSO0FBS0lDLGVBQWEsRUFBRSwwRUFMbkI7QUFNSUMsVUFBUSxFQUFFLG9FQU5kO0FBT0lDLFVBQVEsRUFBRSxHQVBkO0FBUUlDLFlBQVUs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QUFBUCxNQUF1QkMsd0RBQVUsQ0FBQ2xDLFdBQUQsRUFBYztBQUNqRFksWUFBUSxFQUFFLEVBRHVDO0FBRWpETyxjQUFVLEVBQUUsRUFGcUM7QUFHakRDLFNBQUssRUFBRSxDQUgwQztBQUlqRFMsWUFBUSxFQUFFLENBSnVDO0FBS2pEeEIsU0FBSyxFQUFFO0FBTDBDLEdBQWQsQ0FBdkM7O0FBUUEsUUFBTThCLFlBQVksR0FBRyxNQUFNO0FBQ3ZCQyxhQUFTLENBQUM7QUFDTkMsWUFBTSxFQUFFQyxJQUFJLENBQUNDLE1BQUw7QUFERixLQUFELENBQVQ7QUFHSCxHQUpEOztBQUtBLFFBQU1DLFVBQVUsR0FBSW5ELEVBQUQsSUFBTztBQUN0QjRDLGdCQUFZLENBQUM7QUFBRW5DLFVBQUksRUFBRSxhQUFSO0FBQXVCVCxRQUFFLEVBQUVBO0FBQTNCLEtBQUQsQ0FBWjtBQUNILEdBRkQ7O0FBR0FvRCx5REFBUyxDQUFDLE1BQU07QUFDWlIsZ0JBQVksQ0FBQztBQUFFbkMsVUFBSSxFQUFFLGNBQVI7QUFBd0JhLGFBQU8sRUFBRTFCO0FBQWpDLEtBQUQsQ0FBWjtBQUNBZ0QsZ0JBQVksQ0FBQztBQUFFbkMsVUFBSSxFQUFFLFdBQVI7QUFBcUJhLGFBQU8sRUFBRTFCO0FBQTlCLEtBQUQsQ0FBWjtBQUNILEdBSFEsRUFHTixFQUhNLENBQVQ7QUFJQSxTQUNJLE1BQUMsNkRBQUQsQ0FBYSxRQUFiO0FBQ0ksU0FBSyxFQUFFO0FBQ0grQyxVQUFJLEVBQUVBLElBREg7QUFFSEcsa0JBQVksRUFBRUEsWUFGWDtBQUdISyxnQkFBVSxFQUFFQTtBQUhULEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9LVCxRQVBMLENBREo7QUFZSCxDQWpDTTs7R0FBTUQsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy45MjA3Y2I1MmI3ZGEwNDc2M2NmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBDYXJ0Q29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dHMvQ2FydENvbnRleHRcIjtcclxuY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb25nIFNsZWV2ZSBMZW9wYXJkIFQtU2hpcnRcIixcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDEwLFxyXG4gICAgICAgIGlkOiBcIjVEQWNVRERkNHQ4eFdnbDlrdlhsXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjEtMTU4ODcwNDQzNjA0My5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzEtMTU4ODcwNDQyODI3My5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMzIwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyNTAsXHJcbiAgICAgICAgb25TYWxlOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJMb25nIFNsZWV2ZSBMZW9wYXJkIFQtU2hpcnRcIixcclxuICAgICAgICB0eXBlOiBcIlQtU2hpcnRcIixcclxuICAgICAgICBxdWFudGl0eTogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTdW5ueW1lIFdvbWVuJ3MgUG9uY2hvc1wiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBpZDogXCI4MXRnaWdMMFUyelVIb1RqODVIdFwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXI4LTE1ODg3MDU0NjgzNzQuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWc4LTE1ODg3MDU0NjIzNzYuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDIwMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMjEwLFxyXG4gICAgICAgIG9uU2FsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogXCJTdW5ueW1lIFdvbWVuJ3MgUG9uY2hvc1wiLFxyXG4gICAgICAgIHR5cGU6IFwiV29tZW4gQ2xvdGhlc1wiLFxyXG4gICAgICAgIHF1YW50aXR5OiAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlN1bm55bWUgV29tZW4ncyBQb25jaG9zXCIsXHJcbiAgICAgICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAwLFxyXG4gICAgICAgIGlkOiBcIjgxdGdpZ0wwVTJ6VUhvVGo4NUh0XCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjgtMTU4ODcwNTQ2ODM3NC5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzgtMTU4ODcwNTQ2MjM3Ni5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMjAwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyMTAsXHJcbiAgICAgICAgb25TYWxlOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIlN1bm55bWUgV29tZW4ncyBQb25jaG9zXCIsXHJcbiAgICAgICAgdHlwZTogXCJXb21lbiBDbG90aGVzXCIsXHJcbiAgICAgICAgcXVhbnRpdHk6IDFcclxuICAgIH0sXHJcbl1cclxuY29uc3QgY2FydFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cclxuICAgIC8vIFVzZXIgTG9nb3V0XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdVU1JFUl9MT0dPVVQnKSB7XHJcbiAgICAgICAgY29va2llLnJlbW92ZSgnX2xpdmFuaV90b2tlbl8nKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBsb2dpbjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdXNlciBsb2dpblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQ0hFQ0tfVVNSRVJfTE9HSU4nKSB7XHJcbiAgICAgICAgY29uc3QgZ2V0VG9rZW4gPSBjb29raWUuZ2V0KCdfbGl2YW5pX3Rva2VuXycpXHJcblxyXG4gICAgICAgIGlmIChnZXRUb2tlbiA9PSB0b2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dpbjogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9naW46IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXNlciBMb2dpblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnVVNSRVJfTE9HSU4nKSB7XHJcbiAgICAgICAgY29va2llLnNldCgnX2xpdmFuaV90b2tlbl8nLCB0b2tlbik7XHJcblxyXG4gICAgICAgIGNvbnN0IGdldFRva2VuID0gY29va2llLmdldCgnX2xpdmFuaV90b2tlbl8nKVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygndG9rZW4nLCBnZXRUb2tlbilcclxuXHJcbiAgICAgICAgaWYgKGdldFRva2VuID09IHRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dpbjogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1BST0RVQ1RTJykge1xyXG4gICAgICAgIGxldCBwcm9kdWN0c0FycmF5ID0gW107XHJcbiAgICAgICAgcHJvZHVjdHNBcnJheSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnd3d3JywgcHJvZHVjdHNBcnJheSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0c0FycmF5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnSU5JVF9DQVJUJykge1xyXG4gICAgICAgIGxldCBwcm9kdWN0c0FycmF5ID0gW107XHJcbiAgICAgICAgcHJvZHVjdHNBcnJheSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgICBsZXQgbmV3VG90YWwgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGk7IGkgPCBwcm9kdWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5ld1RvdGFsICs9IHByb2R1Y3RzQXJyYXlbSV0ubmV3UHJpY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGlpXCIsbmV3VG90YWwpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBwcm9kdWN0c0FycmF5LFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1RPX0NBUlQnKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYgKGV4aXN0ZWRfaXRlbSkge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gMVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IDE7XHJcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVInKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYgKGV4aXN0ZWRfaXRlbSkge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gYWN0aW9uLnF0eVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgKiBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSBhY3Rpb24ucXR5O1xyXG4gICAgICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSAqIGFjdGlvbi5xdHlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdSRU1PVkVfSVRFTScpIHtcclxuICAgICAgICBsZXQgaXRlbVRvUmVtb3ZlID0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW0gPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtID0+IGFjdGlvbi5pZCAhPT0gaXRlbS5pZClcclxuXHJcbiAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIChpdGVtVG9SZW1vdmUubmV3UHJpY2UgKiBpdGVtVG9SZW1vdmUucXVhbnRpdHkpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1FVQU5USVRZJykge1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1NVQl9RVUFOVElUWScpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2lmIHRoZSBxdCA9PSAwIHRoZW4gaXQgc2hvdWxkIGJlIHJlbW92ZWRcclxuICAgICAgICBpZiAoYWRkZWRJdGVtLnF1YW50aXR5ID09PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5pZClcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgLT0gMVxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1NISVBQSU5HJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgKz0gMzBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnU1VCX1NISVBQSU5HJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgLT0gMzBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnUkVTRVRfQ0FSVCcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogW10sXHJcbiAgICAgICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgW2NhcnQsIGRpc3BhdGNoQ2FydF0gPSB1c2VSZWR1Y2VyKGNhcnRSZWR1Y2VyLCB7XHJcbiAgICAgICAgcHJvZHVjdHM6IFtdLFxyXG4gICAgICAgIGFkZGVkSXRlbXM6IFtdLFxyXG4gICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgIHNoaXBwaW5nOiAwLFxyXG4gICAgICAgIGxvZ2luOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB1cGRhdGVOdW1iZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TnVtYmVyKHtcclxuICAgICAgICAgICAgbnVtYmVyOiBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZW1vdmVJdGVtID0gKGlkKSA9PntcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnUkVNT1ZFX0lURU0nLCBpZDogaWQgfSlcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ0FERF9QUk9EVUNUUycsIHBheWxvYWQ6IGRhdGEgfSlcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnSU5JVF9DQVJUJywgcGF5bG9hZDogZGF0YSB9KVxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgY2FydDogY2FydCxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU51bWJlcjogdXBkYXRlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbTogcmVtb3ZlSXRlbVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
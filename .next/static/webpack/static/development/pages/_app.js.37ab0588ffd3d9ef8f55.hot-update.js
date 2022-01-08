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
    let total;

    for (let i; i < productsArray.length; i++) {
      t;
    }

    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: productsArray
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
      lineNumber: 270,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvQ2FydFByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJkZXNjcmlwdGlvbiIsImRpc2NvdW50IiwiZGlzY291bnRPZmYiLCJpZCIsImltYWdlSG92ZXJVcmwiLCJpbWFnZVVybCIsIm5ld1ByaWNlIiwibmV3UHJvZHVjdCIsIm9mZmVyIiwib2xkUHJpY2UiLCJvblNhbGUiLCJ0aXRsZSIsInR5cGUiLCJxdWFudGl0eSIsImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb29raWUiLCJyZW1vdmUiLCJsb2dpbiIsImdldFRva2VuIiwiZ2V0IiwidG9rZW4iLCJzZXQiLCJwcm9kdWN0c0FycmF5IiwicGF5bG9hZCIsInByb2R1Y3RzIiwidG90YWwiLCJpIiwibGVuZ3RoIiwidCIsImFkZGVkSXRlbXMiLCJhZGRlZEl0ZW0iLCJmaW5kIiwiaXRlbSIsImV4aXN0ZWRfaXRlbSIsIm5ld1RvdGFsIiwicXR5IiwiaXRlbVRvUmVtb3ZlIiwibmV3X2l0ZW1zIiwiZmlsdGVyIiwic2hpcHBpbmciLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImNhcnQiLCJkaXNwYXRjaENhcnQiLCJ1c2VSZWR1Y2VyIiwidXBkYXRlTnVtYmVyIiwic2V0TnVtYmVyIiwibnVtYmVyIiwiTWF0aCIsInJhbmRvbSIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBLE1BQU1BLElBQUksR0FBRyxDQUNUO0FBQ0lDLGFBQVcsRUFBRSw2QkFEakI7QUFFSUMsVUFBUSxFQUFFLEtBRmQ7QUFHSUMsYUFBVyxFQUFFLEVBSGpCO0FBSUlDLElBQUUsRUFBRSxzQkFKUjtBQUtJQyxlQUFhLEVBQUUsMEVBTG5CO0FBTUlDLFVBQVEsRUFBRSxvRUFOZDtBQU9JQyxVQUFRLEVBQUUsR0FQZDtBQVFJQyxZQUFVLEVBQUUsS0FSaEI7QUFTSUMsT0FBSyxFQUFFLElB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MEMsR0FBZCxDQUF2Qzs7QUFRQSxRQUFNNEIsWUFBWSxHQUFHLE1BQU07QUFDdkJDLGFBQVMsQ0FBQztBQUNOQyxZQUFNLEVBQUVDLElBQUksQ0FBQ0MsTUFBTDtBQURGLEtBQUQsQ0FBVDtBQUdILEdBSkQ7O0FBS0FDLHlEQUFTLENBQUMsTUFBTTtBQUNaUCxnQkFBWSxDQUFDO0FBQUVqQyxVQUFJLEVBQUUsY0FBUjtBQUF3QmEsYUFBTyxFQUFFMUI7QUFBakMsS0FBRCxDQUFaO0FBQ0E4QyxnQkFBWSxDQUFDO0FBQUVqQyxVQUFJLEVBQUUsV0FBUjtBQUFxQmEsYUFBTyxFQUFFMUI7QUFBOUIsS0FBRCxDQUFaO0FBQ0gsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUlBLFNBQ0ksTUFBQyw2REFBRCxDQUFhLFFBQWI7QUFDSSxTQUFLLEVBQUU7QUFDSDZDLFVBQUksRUFBRUEsSUFESDtBQUVIRyxrQkFBWSxFQUFFQTtBQUZYLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1LSixRQU5MLENBREo7QUFXSCxDQTdCTTs7R0FBTUQsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy4zN2FiMDU4OGZmZDNkOWVmOGY1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBDYXJ0Q29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dHMvQ2FydENvbnRleHRcIjtcclxuY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb25nIFNsZWV2ZSBMZW9wYXJkIFQtU2hpcnRcIixcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDEwLFxyXG4gICAgICAgIGlkOiBcIjVEQWNVRERkNHQ4eFdnbDlrdlhsXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjEtMTU4ODcwNDQzNjA0My5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzEtMTU4ODcwNDQyODI3My5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMzIwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyNTAsXHJcbiAgICAgICAgb25TYWxlOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJMb25nIFNsZWV2ZSBMZW9wYXJkIFQtU2hpcnRcIixcclxuICAgICAgICB0eXBlOiBcIlQtU2hpcnRcIixcclxuICAgICAgICBxdWFudGl0eTogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTdW5ueW1lIFdvbWVuJ3MgUG9uY2hvc1wiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBpZDogXCI4MXRnaWdMMFUyelVIb1RqODVIdFwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXI4LTE1ODg3MDU0NjgzNzQuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWc4LTE1ODg3MDU0NjIzNzYuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDIwMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMjEwLFxyXG4gICAgICAgIG9uU2FsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogXCJTdW5ueW1lIFdvbWVuJ3MgUG9uY2hvc1wiLFxyXG4gICAgICAgIHR5cGU6IFwiV29tZW4gQ2xvdGhlc1wiLFxyXG4gICAgICAgIHF1YW50aXR5OiAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlN1bm55bWUgV29tZW4ncyBQb25jaG9zXCIsXHJcbiAgICAgICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAwLFxyXG4gICAgICAgIGlkOiBcIjgxdGdpZ0wwVTJ6VUhvVGo4NUh0XCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjgtMTU4ODcwNTQ2ODM3NC5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzgtMTU4ODcwNTQ2MjM3Ni5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMjAwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyMTAsXHJcbiAgICAgICAgb25TYWxlOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIlN1bm55bWUgV29tZW4ncyBQb25jaG9zXCIsXHJcbiAgICAgICAgdHlwZTogXCJXb21lbiBDbG90aGVzXCIsXHJcbiAgICAgICAgcXVhbnRpdHk6IDFcclxuICAgIH0sXHJcbl1cclxuY29uc3QgY2FydFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cclxuICAgIC8vIFVzZXIgTG9nb3V0XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdVU1JFUl9MT0dPVVQnKSB7XHJcbiAgICAgICAgY29va2llLnJlbW92ZSgnX2xpdmFuaV90b2tlbl8nKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBsb2dpbjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdXNlciBsb2dpblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQ0hFQ0tfVVNSRVJfTE9HSU4nKSB7XHJcbiAgICAgICAgY29uc3QgZ2V0VG9rZW4gPSBjb29raWUuZ2V0KCdfbGl2YW5pX3Rva2VuXycpXHJcblxyXG4gICAgICAgIGlmIChnZXRUb2tlbiA9PSB0b2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dpbjogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9naW46IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXNlciBMb2dpblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnVVNSRVJfTE9HSU4nKSB7XHJcbiAgICAgICAgY29va2llLnNldCgnX2xpdmFuaV90b2tlbl8nLCB0b2tlbik7XHJcblxyXG4gICAgICAgIGNvbnN0IGdldFRva2VuID0gY29va2llLmdldCgnX2xpdmFuaV90b2tlbl8nKVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygndG9rZW4nLCBnZXRUb2tlbilcclxuXHJcbiAgICAgICAgaWYgKGdldFRva2VuID09IHRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dpbjogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1BST0RVQ1RTJykge1xyXG4gICAgICAgIGxldCBwcm9kdWN0c0FycmF5ID0gW107XHJcbiAgICAgICAgcHJvZHVjdHNBcnJheSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnd3d3JywgcHJvZHVjdHNBcnJheSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0c0FycmF5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnSU5JVF9DQVJUJykge1xyXG4gICAgICAgIGxldCBwcm9kdWN0c0FycmF5ID0gW107XHJcbiAgICAgICAgcHJvZHVjdHNBcnJheSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgICBsZXQgdG90YWwgO1xyXG4gICAgICAgIGZvcihsZXQgaSA7IGkgPCBwcm9kdWN0c0FycmF5Lmxlbmd0aDsgaSsrKXtcclxudFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogcHJvZHVjdHNBcnJheVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfVE9fQ0FSVCcpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXHJcbiAgICAgICAgbGV0IGV4aXN0ZWRfaXRlbSA9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtID0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICBpZiAoZXhpc3RlZF9pdGVtKSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ID0gMTtcclxuICAgICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FERF9RVUFOVElUWV9XSVRIX05VTUJFUicpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXHJcbiAgICAgICAgbGV0IGV4aXN0ZWRfaXRlbSA9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtID0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICBpZiAoZXhpc3RlZF9pdGVtKSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSAqIGFjdGlvbi5xdHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IGFjdGlvbi5xdHk7XHJcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlICogYWN0aW9uLnF0eVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogWy4uLnN0YXRlLmFkZGVkSXRlbXMsIGFkZGVkSXRlbV0sXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1JFTU9WRV9JVEVNJykge1xyXG4gICAgICAgIGxldCBpdGVtVG9SZW1vdmUgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW0gPT4gYWN0aW9uLmlkICE9PSBpdGVtLmlkKVxyXG5cclxuICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gKGl0ZW1Ub1JlbW92ZS5uZXdQcmljZSAqIGl0ZW1Ub1JlbW92ZS5xdWFudGl0eSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXHJcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfUVVBTlRJVFknKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IDFcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnU1VCX1FVQU5USVRZJykge1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIC8vaWYgdGhlIHF0ID09IDAgdGhlbiBpdCBzaG91bGQgYmUgcmVtb3ZlZFxyXG4gICAgICAgIGlmIChhZGRlZEl0ZW0ucXVhbnRpdHkgPT09IDEpIHtcclxuICAgICAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gYWN0aW9uLmlkKVxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSAtPSAxXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gYWRkZWRJdGVtLm5ld1ByaWNlXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfU0hJUFBJTkcnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyArPSAzMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdTVUJfU0hJUFBJTkcnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyAtPSAzMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdSRVNFVF9DQVJUJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBbXSxcclxuICAgICAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBDYXJ0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbY2FydCwgZGlzcGF0Y2hDYXJ0XSA9IHVzZVJlZHVjZXIoY2FydFJlZHVjZXIsIHtcclxuICAgICAgICBwcm9kdWN0czogW10sXHJcbiAgICAgICAgYWRkZWRJdGVtczogW10sXHJcbiAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgc2hpcHBpbmc6IDAsXHJcbiAgICAgICAgbG9naW46IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZU51bWJlciA9ICgpID0+IHtcclxuICAgICAgICBzZXROdW1iZXIoe1xyXG4gICAgICAgICAgICBudW1iZXI6IE1hdGgucmFuZG9tKClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ0FERF9QUk9EVUNUUycsIHBheWxvYWQ6IGRhdGEgfSlcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnSU5JVF9DQVJUJywgcGF5bG9hZDogZGF0YSB9KVxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgY2FydDogY2FydCxcclxuICAgICAgICAgICAgICAgIHVwZGF0ZU51bWJlcjogdXBkYXRlTnVtYmVyXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
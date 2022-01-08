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
      removeItem: removeItem
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvQ2FydFByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJkZXNjcmlwdGlvbiIsImRpc2NvdW50IiwiZGlzY291bnRPZmYiLCJpZCIsImltYWdlSG92ZXJVcmwiLCJpbWFnZVVybCIsIm5ld1ByaWNlIiwibmV3UHJvZHVjdCIsIm9mZmVyIiwib2xkUHJpY2UiLCJvblNhbGUiLCJ0aXRsZSIsInR5cGUiLCJxdWFudGl0eSIsImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb29raWUiLCJyZW1vdmUiLCJsb2dpbiIsImdldFRva2VuIiwiZ2V0IiwidG9rZW4iLCJzZXQiLCJwcm9kdWN0c0FycmF5IiwicGF5bG9hZCIsInByb2R1Y3RzIiwibmV3VG90YWwiLCJpIiwibGVuZ3RoIiwiYWRkZWRJdGVtcyIsInRvdGFsIiwiYWRkZWRJdGVtIiwiZmluZCIsIml0ZW0iLCJleGlzdGVkX2l0ZW0iLCJxdHkiLCJpdGVtVG9SZW1vdmUiLCJuZXdfaXRlbXMiLCJmaWx0ZXIiLCJzaGlwcGluZyIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwiY2FydCIsImRpc3BhdGNoQ2FydCIsInVzZVJlZHVjZXIiLCJyZW1vdmVJdGVtIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0EsTUFBTUEsSUFBSSxHQUFHLENBQ1Q7QUFDSUMsYUFBVyxFQUFFLDZCQURqQjtBQUVJQyxVQUFRLEVBQUUsS0FGZDtBQUdJQyxhQUFXLEVBQUUsRUFIakI7QUFJSUMsSUFBRSxFQUFFLHNCQUpSO0FBS0lDLGVBQWEsRUFBRSwwRUFMbkI7QUFNSUMsVUFBUSxFQUFFLG9FQU5kO0FBT0lDLFVBQVEsRUFBRSxHQVBkO0FBUUlDLFlBQVUsRUFBRSxLQVJoQjtBQVNJQyxPQUFLLEVBQUUsSUFUWDtBQVVJQyxVQUFRLEVBQUUsR0FWZDtBQVdJQyxRQUFNLEVBQUUsS0FY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QUp1QztBQUtqRHJCLFNBQUssRUFBRTtBQUwwQyxHQUFkLENBQXZDOztBQVFBLFFBQU0yQixVQUFVLEdBQUkzQyxFQUFELElBQVE7QUFDdkJ5QyxnQkFBWSxDQUFDO0FBQUVoQyxVQUFJLEVBQUUsYUFBUjtBQUF1QlQsUUFBRSxFQUFFQTtBQUEzQixLQUFELENBQVo7QUFDSCxHQUZEOztBQUdBNEMseURBQVMsQ0FBQyxNQUFNO0FBQ1pILGdCQUFZLENBQUM7QUFBRWhDLFVBQUksRUFBRSxjQUFSO0FBQXdCYSxhQUFPLEVBQUUxQjtBQUFqQyxLQUFELENBQVo7QUFDQTZDLGdCQUFZLENBQUM7QUFBRWhDLFVBQUksRUFBRSxXQUFSO0FBQXFCYSxhQUFPLEVBQUUxQjtBQUE5QixLQUFELENBQVo7QUFDSCxHQUhRLEVBR04sRUFITSxDQUFUO0FBSUEsU0FDSSxNQUFDLDZEQUFELENBQWEsUUFBYjtBQUNJLFNBQUssRUFBRTtBQUNINEMsVUFBSSxFQUFFQSxJQURIO0FBRUhHLGdCQUFVLEVBQUVBO0FBRlQsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUtKLFFBTkwsQ0FESjtBQVdILENBM0JNOztHQUFNRCxZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmM5NzhjYTI3NjdmM2Y1MzczZWU2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IENhcnRDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0cy9DYXJ0Q29udGV4dFwiO1xyXG5jb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvbmcgU2xlZXZlIExlb3BhcmQgVC1TaGlydFwiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMTAsXHJcbiAgICAgICAgaWQ6IFwiNURBY1VERGQ0dDh4V2dsOWt2WGxcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyMS0xNTg4NzA0NDM2MDQzLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nMS0xNTg4NzA0NDI4MjczLmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAzMjAsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IHRydWUsXHJcbiAgICAgICAgb2xkUHJpY2U6IDI1MCxcclxuICAgICAgICBvblNhbGU6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBcIkxvbmcgU2xlZXZlIExlb3BhcmQgVC1TaGlydFwiLFxyXG4gICAgICAgIHR5cGU6IFwiVC1TaGlydFwiLFxyXG4gICAgICAgIHF1YW50aXR5OiAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlN1bm55bWUgV29tZW4ncyBQb25jaG9zXCIsXHJcbiAgICAgICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAwLFxyXG4gICAgICAgIGlkOiBcIjgxdGdpZ0wwVTJ6VUhvVGo4NUh0XCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjgtMTU4ODcwNTQ2ODM3NC5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzgtMTU4ODcwNTQ2MjM3Ni5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMjAwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyMTAsXHJcbiAgICAgICAgb25TYWxlOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIlN1bm55bWUgV29tZW4ncyBQb25jaG9zXCIsXHJcbiAgICAgICAgdHlwZTogXCJXb21lbiBDbG90aGVzXCIsXHJcbiAgICAgICAgcXVhbnRpdHk6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU3VubnltZSBXb21lbidzIFBvbmNob3NcIixcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDAsXHJcbiAgICAgICAgaWQ6IFwiODF0Z2lnTDBVMnpVSG9Uajg1SHRcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyOC0xNTg4NzA1NDY4Mzc0LmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nOC0xNTg4NzA1NDYyMzc2LmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAyMDAsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IHRydWUsXHJcbiAgICAgICAgb2xkUHJpY2U6IDIxMCxcclxuICAgICAgICBvblNhbGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiU3VubnltZSBXb21lbidzIFBvbmNob3NcIixcclxuICAgICAgICB0eXBlOiBcIldvbWVuIENsb3RoZXNcIixcclxuICAgICAgICBxdWFudGl0eTogMVxyXG4gICAgfSxcclxuXVxyXG5jb25zdCBjYXJ0UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG4gICAgLy8gVXNlciBMb2dvdXRcclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1VTUkVSX0xPR09VVCcpIHtcclxuICAgICAgICBjb29raWUucmVtb3ZlKCdfbGl2YW5pX3Rva2VuXycpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGxvZ2luOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiB1c2VyIGxvZ2luXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDSEVDS19VU1JFUl9MT0dJTicpIHtcclxuICAgICAgICBjb25zdCBnZXRUb2tlbiA9IGNvb2tpZS5nZXQoJ19saXZhbmlfdG9rZW5fJylcclxuXHJcbiAgICAgICAgaWYgKGdldFRva2VuID09IHRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dpbjogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2VyIExvZ2luXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdVU1JFUl9MT0dJTicpIHtcclxuICAgICAgICBjb29raWUuc2V0KCdfbGl2YW5pX3Rva2VuXycsIHRva2VuKTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0VG9rZW4gPSBjb29raWUuZ2V0KCdfbGl2YW5pX3Rva2VuXycpXHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0b2tlbicsIGdldFRva2VuKVxyXG5cclxuICAgICAgICBpZiAoZ2V0VG9rZW4gPT0gdG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9naW46IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfUFJPRFVDVFMnKSB7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RzQXJyYXkgPSBbXTtcclxuICAgICAgICBwcm9kdWN0c0FycmF5ID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd3d3cnLCBwcm9kdWN0c0FycmF5KVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzQXJyYXlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdJTklUX0NBUlQnKSB7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RzQXJyYXkgPSBbXTtcclxuICAgICAgICBwcm9kdWN0c0FycmF5ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9kdWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5ld1RvdGFsICs9IHByb2R1Y3RzQXJyYXlbaV0ubmV3UHJpY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogcHJvZHVjdHNBcnJheSxcclxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FERF9UT19DQVJUJykge1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIC8vY2hlY2sgaWYgdGhlIGFjdGlvbiBpZCBleGlzdHMgaW4gdGhlIGFkZGVkSXRlbXNcclxuICAgICAgICBsZXQgZXhpc3RlZF9pdGVtID0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW0gPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICAgIGlmIChleGlzdGVkX2l0ZW0pIHtcclxuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IDFcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSAxO1xyXG4gICAgICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogWy4uLnN0YXRlLmFkZGVkSXRlbXMsIGFkZGVkSXRlbV0sXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSJykge1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIC8vY2hlY2sgaWYgdGhlIGFjdGlvbiBpZCBleGlzdHMgaW4gdGhlIGFkZGVkSXRlbXNcclxuICAgICAgICBsZXQgZXhpc3RlZF9pdGVtID0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW0gPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICAgIGlmIChleGlzdGVkX2l0ZW0pIHtcclxuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IGFjdGlvbi5xdHlcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlICogYWN0aW9uLnF0eVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ID0gYWN0aW9uLnF0eTtcclxuICAgICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgKiBhY3Rpb24ucXR5XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnUkVNT1ZFX0lURU0nKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1Ub1JlbW92ZSA9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtID0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICBsZXQgbmV3X2l0ZW1zID0gc3RhdGUuYWRkZWRJdGVtcy5maWx0ZXIoaXRlbSA9PiBhY3Rpb24uaWQgIT09IGl0ZW0uaWQpXHJcblxyXG4gICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSAoaXRlbVRvUmVtb3ZlLm5ld1ByaWNlICogaXRlbVRvUmVtb3ZlLnF1YW50aXR5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IG5ld19pdGVtcyxcclxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FERF9RVUFOVElUWScpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gMVxyXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdTVUJfUVVBTlRJVFknKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9pZiB0aGUgcXQgPT0gMCB0aGVuIGl0IHNob3VsZCBiZSByZW1vdmVkXHJcbiAgICAgICAgaWYgKGFkZGVkSXRlbS5xdWFudGl0eSA9PT0gMSkge1xyXG4gICAgICAgICAgICBsZXQgbmV3X2l0ZW1zID0gc3RhdGUuYWRkZWRJdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gYWRkZWRJdGVtLm5ld1ByaWNlXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IG5ld19pdGVtcyxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5IC09IDFcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FERF9TSElQUElORycpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nICs9IDMwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1NVQl9TSElQUElORycpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nIC09IDMwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1JFU0VUX0NBUlQnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IFtdLFxyXG4gICAgICAgICAgICB0b3RhbDogMCxcclxuICAgICAgICAgICAgc2hpcHBpbmc6IDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtjYXJ0LCBkaXNwYXRjaENhcnRdID0gdXNlUmVkdWNlcihjYXJ0UmVkdWNlciwge1xyXG4gICAgICAgIHByb2R1Y3RzOiBbXSxcclxuICAgICAgICBhZGRlZEl0ZW1zOiBbXSxcclxuICAgICAgICB0b3RhbDogMCxcclxuICAgICAgICBzaGlwcGluZzogMCxcclxuICAgICAgICBsb2dpbjogZmFsc2VcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9IChpZCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdSRU1PVkVfSVRFTScsIGlkOiBpZCB9KVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnQUREX1BST0RVQ1RTJywgcGF5bG9hZDogZGF0YSB9KVxyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdJTklUX0NBUlQnLCBwYXlsb2FkOiBkYXRhIH0pXHJcbiAgICB9LCBbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcnRDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBjYXJ0OiBjYXJ0LFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbTogcmVtb3ZlSXRlbVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
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
    cons;
    let newTotal = 0;

    for (let i; i < productsArray.length; i++) {
      newTotal += productsArray[i].newPrice;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvQ2FydFByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJkZXNjcmlwdGlvbiIsImRpc2NvdW50IiwiZGlzY291bnRPZmYiLCJpZCIsImltYWdlSG92ZXJVcmwiLCJpbWFnZVVybCIsIm5ld1ByaWNlIiwibmV3UHJvZHVjdCIsIm9mZmVyIiwib2xkUHJpY2UiLCJvblNhbGUiLCJ0aXRsZSIsInR5cGUiLCJxdWFudGl0eSIsImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb29raWUiLCJyZW1vdmUiLCJsb2dpbiIsImdldFRva2VuIiwiZ2V0IiwidG9rZW4iLCJzZXQiLCJwcm9kdWN0c0FycmF5IiwicGF5bG9hZCIsInByb2R1Y3RzIiwiY29ucyIsIm5ld1RvdGFsIiwiaSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJhZGRlZEl0ZW1zIiwidG90YWwiLCJhZGRlZEl0ZW0iLCJmaW5kIiwiaXRlbSIsImV4aXN0ZWRfaXRlbSIsInF0eSIsIml0ZW1Ub1JlbW92ZSIsIm5ld19pdGVtcyIsImZpbHRlciIsInNoaXBwaW5nIiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYXJ0IiwiZGlzcGF0Y2hDYXJ0IiwidXNlUmVkdWNlciIsInVwZGF0ZU51bWJlciIsInNldE51bWJlciIsIm51bWJlciIsIk1hdGgiLCJyYW5kb20iLCJyZW1vdmVJdGVtIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0EsTUFBTUEsSUFBSSxHQUFHLENBQ1Q7QUFDSUMsYUFBVyxFQUFFLDZCQURqQjtBQUVJQyxVQUFRLEVBQUUsS0FGZDtBQUdJQyxhQUFXLEVBQUUsRUFIakI7QUFJSUMsSUFBRSxFQUFFLHNCQUpSO0FBS0lDLGVBQWEsRUFBRSwwRUFMbkI7QUFNSUMsVUFBUSxFQUFFLG9FQU5kO0FBT0lDLFVBQVEsRUFBRSxHQVBkO0FBUUlDLFlB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QUQ7QUFBQSxPQUFPQztBQUFQLE1BQXVCQyx3REFBVSxDQUFDbEMsV0FBRCxFQUFjO0FBQ2pEWSxZQUFRLEVBQUUsRUFEdUM7QUFFakRPLGNBQVUsRUFBRSxFQUZxQztBQUdqREMsU0FBSyxFQUFFLENBSDBDO0FBSWpEUyxZQUFRLEVBQUUsQ0FKdUM7QUFLakR4QixTQUFLLEVBQUU7QUFMMEMsR0FBZCxDQUF2Qzs7QUFRQSxRQUFNOEIsWUFBWSxHQUFHLE1BQU07QUFDdkJDLGFBQVMsQ0FBQztBQUNOQyxZQUFNLEVBQUVDLElBQUksQ0FBQ0MsTUFBTDtBQURGLEtBQUQsQ0FBVDtBQUdILEdBSkQ7O0FBS0EsUUFBTUMsVUFBVSxHQUFJbkQsRUFBRCxJQUFPO0FBQ3RCNEMsZ0JBQVksQ0FBQztBQUFFbkMsVUFBSSxFQUFFLGFBQVI7QUFBdUJULFFBQUUsRUFBRUE7QUFBM0IsS0FBRCxDQUFaO0FBQ0gsR0FGRDs7QUFHQW9ELHlEQUFTLENBQUMsTUFBTTtBQUNaUixnQkFBWSxDQUFDO0FBQUVuQyxVQUFJLEVBQUUsY0FBUjtBQUF3QmEsYUFBTyxFQUFFMUI7QUFBakMsS0FBRCxDQUFaO0FBQ0FnRCxnQkFBWSxDQUFDO0FBQUVuQyxVQUFJLEVBQUUsV0FBUjtBQUFxQmEsYUFBTyxFQUFFMUI7QUFBOUIsS0FBRCxDQUFaO0FBQ0gsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUlBLFNBQ0ksTUFBQyw2REFBRCxDQUFhLFFBQWI7QUFDSSxTQUFLLEVBQUU7QUFDSCtDLFVBQUksRUFBRUEsSUFESDtBQUVIRyxrQkFBWSxFQUFFQSxZQUZYO0FBR0hLLGdCQUFVLEVBQUVBO0FBSFQsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0tULFFBUEwsQ0FESjtBQVlILENBakNNOztHQUFNRCxZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmVmMzljMzE1ZTg5N2NhOWE5MTEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IENhcnRDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0cy9DYXJ0Q29udGV4dFwiO1xyXG5jb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvbmcgU2xlZXZlIExlb3BhcmQgVC1TaGlydFwiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMTAsXHJcbiAgICAgICAgaWQ6IFwiNURBY1VERGQ0dDh4V2dsOWt2WGxcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyMS0xNTg4NzA0NDM2MDQzLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nMS0xNTg4NzA0NDI4MjczLmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAzMjAsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IHRydWUsXHJcbiAgICAgICAgb2xkUHJpY2U6IDI1MCxcclxuICAgICAgICBvblNhbGU6IGZhbHNlLFxyXG4gICAgICAgIHRpdGxlOiBcIkxvbmcgU2xlZXZlIExlb3BhcmQgVC1TaGlydFwiLFxyXG4gICAgICAgIHR5cGU6IFwiVC1TaGlydFwiLFxyXG4gICAgICAgIHF1YW50aXR5OiAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlN1bm55bWUgV29tZW4ncyBQb25jaG9zXCIsXHJcbiAgICAgICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAwLFxyXG4gICAgICAgIGlkOiBcIjgxdGdpZ0wwVTJ6VUhvVGo4NUh0XCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjgtMTU4ODcwNTQ2ODM3NC5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzgtMTU4ODcwNTQ2MjM3Ni5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMjAwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyMTAsXHJcbiAgICAgICAgb25TYWxlOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIlN1bm55bWUgV29tZW4ncyBQb25jaG9zXCIsXHJcbiAgICAgICAgdHlwZTogXCJXb21lbiBDbG90aGVzXCIsXHJcbiAgICAgICAgcXVhbnRpdHk6IDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiU3VubnltZSBXb21lbidzIFBvbmNob3NcIixcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDAsXHJcbiAgICAgICAgaWQ6IFwiODF0Z2lnTDBVMnpVSG9Uajg1SHRcIixcclxuICAgICAgICBpbWFnZUhvdmVyVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nLWhvdmVyOC0xNTg4NzA1NDY4Mzc0LmpwZ1wiLFxyXG4gICAgICAgIGltYWdlVXJsOiBcImh0dHBzOi8vZGVtYXhpbi5zMy5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb20vaW1nOC0xNTg4NzA1NDYyMzc2LmpwZ1wiLFxyXG4gICAgICAgIG5ld1ByaWNlOiAyMDAsXHJcbiAgICAgICAgbmV3UHJvZHVjdDogZmFsc2UsXHJcbiAgICAgICAgb2ZmZXI6IHRydWUsXHJcbiAgICAgICAgb2xkUHJpY2U6IDIxMCxcclxuICAgICAgICBvblNhbGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IFwiU3VubnltZSBXb21lbidzIFBvbmNob3NcIixcclxuICAgICAgICB0eXBlOiBcIldvbWVuIENsb3RoZXNcIixcclxuICAgICAgICBxdWFudGl0eTogMVxyXG4gICAgfSxcclxuXVxyXG5jb25zdCBjYXJ0UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG4gICAgLy8gVXNlciBMb2dvdXRcclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1VTUkVSX0xPR09VVCcpIHtcclxuICAgICAgICBjb29raWUucmVtb3ZlKCdfbGl2YW5pX3Rva2VuXycpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGxvZ2luOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayBpZiB1c2VyIGxvZ2luXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDSEVDS19VU1JFUl9MT0dJTicpIHtcclxuICAgICAgICBjb25zdCBnZXRUb2tlbiA9IGNvb2tpZS5nZXQoJ19saXZhbmlfdG9rZW5fJylcclxuXHJcbiAgICAgICAgaWYgKGdldFRva2VuID09IHRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dpbjogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2VyIExvZ2luXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdVU1JFUl9MT0dJTicpIHtcclxuICAgICAgICBjb29raWUuc2V0KCdfbGl2YW5pX3Rva2VuXycsIHRva2VuKTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0VG9rZW4gPSBjb29raWUuZ2V0KCdfbGl2YW5pX3Rva2VuXycpXHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0b2tlbicsIGdldFRva2VuKVxyXG5cclxuICAgICAgICBpZiAoZ2V0VG9rZW4gPT0gdG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9naW46IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfUFJPRFVDVFMnKSB7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RzQXJyYXkgPSBbXTtcclxuICAgICAgICBwcm9kdWN0c0FycmF5ID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd3d3cnLCBwcm9kdWN0c0FycmF5KVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzQXJyYXlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdJTklUX0NBUlQnKSB7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RzQXJyYXkgPSBbXTtcclxuICAgICAgICBwcm9kdWN0c0FycmF5ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgY29uc1xyXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaTsgaSA8IHByb2R1Y3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbmV3VG90YWwgKz0gcHJvZHVjdHNBcnJheVtpXS5uZXdQcmljZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoaWlcIixuZXdUb3RhbCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IHByb2R1Y3RzQXJyYXksXHJcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfVE9fQ0FSVCcpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXHJcbiAgICAgICAgbGV0IGV4aXN0ZWRfaXRlbSA9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtID0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICBpZiAoZXhpc3RlZF9pdGVtKSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ID0gMTtcclxuICAgICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FERF9RVUFOVElUWV9XSVRIX05VTUJFUicpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXHJcbiAgICAgICAgbGV0IGV4aXN0ZWRfaXRlbSA9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtID0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICBpZiAoZXhpc3RlZF9pdGVtKSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSAqIGFjdGlvbi5xdHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IGFjdGlvbi5xdHk7XHJcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlICogYWN0aW9uLnF0eVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogWy4uLnN0YXRlLmFkZGVkSXRlbXMsIGFkZGVkSXRlbV0sXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1JFTU9WRV9JVEVNJykge1xyXG4gICAgICAgIGxldCBpdGVtVG9SZW1vdmUgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW0gPT4gYWN0aW9uLmlkICE9PSBpdGVtLmlkKVxyXG5cclxuICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gKGl0ZW1Ub1JlbW92ZS5uZXdQcmljZSAqIGl0ZW1Ub1JlbW92ZS5xdWFudGl0eSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXHJcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfUVVBTlRJVFknKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IDFcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnU1VCX1FVQU5USVRZJykge1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIC8vaWYgdGhlIHF0ID09IDAgdGhlbiBpdCBzaG91bGQgYmUgcmVtb3ZlZFxyXG4gICAgICAgIGlmIChhZGRlZEl0ZW0ucXVhbnRpdHkgPT09IDEpIHtcclxuICAgICAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gYWN0aW9uLmlkKVxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSAtPSAxXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gYWRkZWRJdGVtLm5ld1ByaWNlXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfU0hJUFBJTkcnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyArPSAzMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdTVUJfU0hJUFBJTkcnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyAtPSAzMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdSRVNFVF9DQVJUJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBbXSxcclxuICAgICAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBDYXJ0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbY2FydCwgZGlzcGF0Y2hDYXJ0XSA9IHVzZVJlZHVjZXIoY2FydFJlZHVjZXIsIHtcclxuICAgICAgICBwcm9kdWN0czogW10sXHJcbiAgICAgICAgYWRkZWRJdGVtczogW10sXHJcbiAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgc2hpcHBpbmc6IDAsXHJcbiAgICAgICAgbG9naW46IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZU51bWJlciA9ICgpID0+IHtcclxuICAgICAgICBzZXROdW1iZXIoe1xyXG4gICAgICAgICAgICBudW1iZXI6IE1hdGgucmFuZG9tKClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAoaWQpID0+e1xyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdSRU1PVkVfSVRFTScsIGlkOiBpZCB9KVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnQUREX1BST0RVQ1RTJywgcGF5bG9hZDogZGF0YSB9KVxyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdJTklUX0NBUlQnLCBwYXlsb2FkOiBkYXRhIH0pXHJcbiAgICB9LCBbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcnRDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBjYXJ0OiBjYXJ0LFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlTnVtYmVyOiB1cGRhdGVOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtOiByZW1vdmVJdGVtXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
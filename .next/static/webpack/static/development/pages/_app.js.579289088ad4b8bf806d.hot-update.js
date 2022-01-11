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
/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts/UserContext */ "./contexts/UserContext.js");
/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/CartContext */ "./contexts/CartContext.js");


var _jsxFileName = "F:\\N\u0103m 4 h\u1ECDc k\u1EF3 1\\M\xF4 h\xECnh h\xF3a ph\u1EA7n m\u1EC1m\\New folder (2)\\components\\Cart\\CartProvider.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





const cartReducer = (state, action) => {
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
    const temp = action.payload;
    let cart = [];

    for (let i = 0; i < action.payload.length; i++) {
      const product = state.products.find(item => item.id === temp[i].attributes.ProductID);
      newTotal += temp[i].attributes.Subtotal;
      cart.push(_objectSpread(_objectSpread({}, temp[i]), {}, {
        product
      }));
    }

    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: cart,
      total: newTotal
    });
  }

  if (action.type === 'ADD_TO_CART') {
    const product = action.product;
    console.log(product);
    const cart = state.addedItems;
    cart.push(_objectSpread(_objectSpread({}, action.data), {}, {
      product
    }));
    let newTotal = state.total + action.product.attributes.Price;
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: cart,
      total: newTotal
    });
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
    fetch("http://localhost:1337" + `/api/shopping-carts/${action.id}`, {
      method: 'DELETE'
    });
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id); //calculating the total

    let newTotal = state.total - itemToRemove.attributes.Subtotal;
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
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: shoppingCart,
    1: setShoppingCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: cart,
    1: dispatchCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(cartReducer, {
    products: [],
    addedItems: [],
    total: 0,
    shipping: 0
  });

  const removeItem = id => {
    dispatchCart({
      type: 'REMOVE_ITEM',
      id: id
    });
  };

  const addToCart = async (id, quantity) => {
    let product = cart.products.find(item => item.id === id);
    const jwt = localStorage.getItem('jwt-ktxshop');
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    await fetch("http://localhost:1337" + '/api/shopping-carts', {
      method: 'POST',
      body: JSON.stringify({
        data: {
          AccountID: jwt,
          ProductID: product.id,
          Quantity: quantity || 1,
          UnitCost: product.attributes.Price,
          Subtotal: product.attributes.Price * quantity
        }
      }),
      headers: myHeaders
    }).then(response => response.json()).then(result => {
      dispatchCart({
        type: 'ADD_TO_CART',
        data: result.data,
        product: product
      });
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
    fecthProduct();
  }, []);

  const fecthProduct = async () => {
    const qs = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");

    const query = qs.stringify({
      sort: ['id:desc'],
      populate: '*'
    }, {
      encodeValuesOnly: true
    });
    await fetch("http://localhost:1337" + `/api/products?${query}`).then(response => response.json()).then(res => {
      if (res.data && res.data[0] && res.data[0].attributes) {
        const dataProduct = res.data;
        dataProduct.map((item, index) => {
          data.push(item);
          setData([...data]);
          dispatchCart({
            type: 'ADD_PRODUCTS',
            payload: data
          }); //dispatchCart({ type: 'INIT_CART', payload: data })
        });
      }
    });
    const jwt = localStorage.getItem('jwt-ktxshop');
    const qry = qs.stringify({
      filters: {
        AccountID: {
          $eq: Number(jwt)
        }
      }
    }, {
      encodeValuesOnly: true
    });
    await fetch("http://localhost:1337" + `/api/shopping-carts?${qry}`).then(response => response.json()).then(res => {
      if (res.data && res.data[0] && res.data[0].attributes) {
        const dataCart = res.data;
        dataCart.map((item, index) => {
          shoppingCart.push(item);
          setShoppingCart([...shoppingCart]);
          dispatchCart({
            type: 'INIT_CART',
            payload: shoppingCart
          });
        });
      }
    });
  };

  return __jsx(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
    value: {
      cart: cart,
      removeItem: removeItem,
      addToCart: addToCart,
      addQuantity: addQuantity,
      subQuantity: subQuantity
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 9
    }
  }, children);
};

_s(CartProvider, "R2IsBsF1aBngdxr0iOQLhYaePug=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvQ2FydFByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicHJvZHVjdHNBcnJheSIsInBheWxvYWQiLCJwcm9kdWN0cyIsIm5ld1RvdGFsIiwidGVtcCIsImNhcnQiLCJpIiwibGVuZ3RoIiwicHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiaWQiLCJhdHRyaWJ1dGVzIiwiUHJvZHVjdElEIiwiU3VidG90YWwiLCJwdXNoIiwiYWRkZWRJdGVtcyIsInRvdGFsIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJQcmljZSIsImFkZGVkSXRlbSIsImV4aXN0ZWRfaXRlbSIsInF1YW50aXR5IiwicXR5IiwibmV3UHJpY2UiLCJmZXRjaCIsInByb2Nlc3MiLCJtZXRob2QiLCJpdGVtVG9SZW1vdmUiLCJuZXdfaXRlbXMiLCJmaWx0ZXIiLCJzaGlwcGluZyIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwic2V0RGF0YSIsInVzZVN0YXRlIiwic2hvcHBpbmdDYXJ0Iiwic2V0U2hvcHBpbmdDYXJ0IiwiZGlzcGF0Y2hDYXJ0IiwidXNlUmVkdWNlciIsInJlbW92ZUl0ZW0iLCJhZGRUb0NhcnQiLCJqd3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibXlIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiQWNjb3VudElEIiwiUXVhbnRpdHkiLCJVbml0Q29zdCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwiYWRkUXVhbnRpdHkiLCJzdWJRdWFudGl0eSIsInVzZUVmZmVjdCIsImZlY3RoUHJvZHVjdCIsInFzIiwicmVxdWlyZSIsInF1ZXJ5Iiwic29ydCIsInBvcHVsYXRlIiwiZW5jb2RlVmFsdWVzT25seSIsInJlcyIsImRhdGFQcm9kdWN0IiwibWFwIiwiaW5kZXgiLCJxcnki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Q0osS0FYQyxDQUFOO0FBWUgsR0E1Q0Q7O0FBNkNBLFNBQ0ksTUFBQyw2REFBRCxDQUFhLFFBQWI7QUFDSSxTQUFLLEVBQUU7QUFDSGpDLFVBQUksRUFBRUEsSUFESDtBQUVIcUMsZ0JBQVUsRUFBRUEsVUFGVDtBQUdIQyxlQUFTLEVBQUVBLFNBSFI7QUFJSGtCLGlCQUFXLEVBQUVBLFdBSlY7QUFLSEMsaUJBQVcsRUFBRUE7QUFMVixLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVSzNCLFFBVkwsQ0FESjtBQWVILENBM0dNOztHQUFNRCxZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjU3OTI4OTA4OGFkNGI4YmY4MDZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9Vc2VyQ29udGV4dFwiO1xyXG5pbXBvcnQgQ2FydENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHRzL0NhcnRDb250ZXh0XCI7XHJcblxyXG5jb25zdCBjYXJ0UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FERF9QUk9EVUNUUycpIHtcclxuICAgICAgICBsZXQgcHJvZHVjdHNBcnJheSA9IFtdO1xyXG4gICAgICAgIHByb2R1Y3RzQXJyYXkgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3d3dycsIHByb2R1Y3RzQXJyYXkpXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdHNBcnJheVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0lOSVRfQ0FSVCcpIHtcclxuICAgICAgICBsZXQgcHJvZHVjdHNBcnJheSA9IFtdO1xyXG4gICAgICAgIHByb2R1Y3RzQXJyYXkgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSAwO1xyXG4gICAgICAgIGNvbnN0IHRlbXAgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBsZXQgY2FydCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uLnBheWxvYWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSB0ZW1wW2ldLmF0dHJpYnV0ZXMuUHJvZHVjdElEKTtcclxuICAgICAgICAgICAgbmV3VG90YWwgKz0gdGVtcFtpXS5hdHRyaWJ1dGVzLlN1YnRvdGFsO1xyXG4gICAgICAgICAgICBjYXJ0LnB1c2goeyAuLi50ZW1wW2ldLCBwcm9kdWN0IH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBjYXJ0LFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1RPX0NBUlQnKSB7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGFjdGlvbi5wcm9kdWN0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpXHJcbiAgICAgICAgY29uc3QgY2FydCA9IHN0YXRlLmFkZGVkSXRlbXNcclxuICAgICAgICBjYXJ0LnB1c2goeyAuLi5hY3Rpb24uZGF0YSwgcHJvZHVjdCB9KVxyXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWN0aW9uLnByb2R1Y3QuYXR0cmlidXRlcy5QcmljZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IGNhcnQsXHJcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVInKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYgKGV4aXN0ZWRfaXRlbSkge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gYWN0aW9uLnF0eVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgKiBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSBhY3Rpb24ucXR5O1xyXG4gICAgICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSAqIGFjdGlvbi5xdHlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdSRU1PVkVfSVRFTScpIHtcclxuICAgICAgICBcclxuICAgICAgICBmZXRjaChwcm9jZXNzLmVudi5BUElfSE9TVCArIGAvYXBpL3Nob3BwaW5nLWNhcnRzLyR7YWN0aW9uLmlkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBpdGVtVG9SZW1vdmUgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW0gPT4gYWN0aW9uLmlkICE9PSBpdGVtLmlkKVxyXG5cclxuICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gaXRlbVRvUmVtb3ZlLmF0dHJpYnV0ZXMuU3VidG90YWw7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXHJcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfUVVBTlRJVFknKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IDFcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnU1VCX1FVQU5USVRZJykge1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIC8vaWYgdGhlIHF0ID09IDAgdGhlbiBpdCBzaG91bGQgYmUgcmVtb3ZlZFxyXG4gICAgICAgIGlmIChhZGRlZEl0ZW0ucXVhbnRpdHkgPT09IDEpIHtcclxuICAgICAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gYWN0aW9uLmlkKVxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSAtPSAxXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gYWRkZWRJdGVtLm5ld1ByaWNlXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfU0hJUFBJTkcnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyArPSAzMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdTVUJfU0hJUFBJTkcnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyAtPSAzMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdSRVNFVF9DQVJUJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBbXSxcclxuICAgICAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzaG9wcGluZ0NhcnQsIHNldFNob3BwaW5nQ2FydF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY2FydCwgZGlzcGF0Y2hDYXJ0XSA9IHVzZVJlZHVjZXIoY2FydFJlZHVjZXIsIHtcclxuICAgICAgICBwcm9kdWN0czogW10sXHJcbiAgICAgICAgYWRkZWRJdGVtczogW10sXHJcbiAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgc2hpcHBpbmc6IDAsXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAoaWQpID0+IHtcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnUkVNT1ZFX0lURU0nLCBpZDogaWQgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFRvQ2FydCA9IGFzeW5jIChpZCwgcXVhbnRpdHkpID0+IHtcclxuICAgICAgICBsZXQgcHJvZHVjdCA9IGNhcnQucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKVxyXG4gICAgICAgIGNvbnN0IGp3dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3Qta3R4c2hvcCcpO1xyXG5cclxuICAgICAgICBsZXQgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBteUhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKVxyXG4gICAgICAgIGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkFQSV9IT1NUICsgJy9hcGkvc2hvcHBpbmctY2FydHMnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudElEOiBqd3QsXHJcbiAgICAgICAgICAgICAgICAgICAgUHJvZHVjdElEOiBwcm9kdWN0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIFF1YW50aXR5OiBxdWFudGl0eSB8fCAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFVuaXRDb3N0OiBwcm9kdWN0LmF0dHJpYnV0ZXMuUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgU3VidG90YWw6IHByb2R1Y3QuYXR0cmlidXRlcy5QcmljZSpxdWFudGl0eSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IG15SGVhZGVyc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdBRERfVE9fQ0FSVCcsIGRhdGE6IHJlc3VsdC5kYXRhLCBwcm9kdWN0OiBwcm9kdWN0IH0pXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkUXVhbnRpdHkgPSAoaWQpID0+IHtcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnQUREX1FVQU5USVRZJywgaWQ6IGlkIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdWJRdWFudGl0eSA9IChpZCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdTVUJfUVVBTlRJVFknLCBpZDogaWQgfSlcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmVjdGhQcm9kdWN0KCk7XHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnN0IGZlY3RoUHJvZHVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBxcyA9IHJlcXVpcmUoJ3FzJyk7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBxcy5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBzb3J0OiBbJ2lkOmRlc2MnLF0sXHJcbiAgICAgICAgICAgIHBvcHVsYXRlOiAnKidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHk6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkFQSV9IT1NUICsgYC9hcGkvcHJvZHVjdHM/JHtxdWVyeX1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGFbMF0gJiYgcmVzLmRhdGFbMF0uYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFQcm9kdWN0ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVByb2R1Y3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShbLi4uZGF0YV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdBRERfUFJPRFVDVFMnLCBwYXlsb2FkOiBkYXRhIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ0lOSVRfQ0FSVCcsIHBheWxvYWQ6IGRhdGEgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBqd3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0LWt0eHNob3AnKTtcclxuICAgICAgICBjb25zdCBxcnkgPSBxcy5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBmaWx0ZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBY2NvdW50SUQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAkZXE6IE51bWJlcihqd3QpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHk6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX0hPU1QgKyBgL2FwaS9zaG9wcGluZy1jYXJ0cz8ke3FyeX1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGFbMF0gJiYgcmVzLmRhdGFbMF0uYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFDYXJ0ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUNhcnQubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0NhcnQucHVzaChpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG9wcGluZ0NhcnQoWy4uLnNob3BwaW5nQ2FydF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdJTklUX0NBUlQnLCBwYXlsb2FkOiBzaG9wcGluZ0NhcnQgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcnRDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBjYXJ0OiBjYXJ0LFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbTogcmVtb3ZlSXRlbSxcclxuICAgICAgICAgICAgICAgIGFkZFRvQ2FydDogYWRkVG9DYXJ0LFxyXG4gICAgICAgICAgICAgICAgYWRkUXVhbnRpdHk6IGFkZFF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgc3ViUXVhbnRpdHk6IHN1YlF1YW50aXR5LFxyXG5cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
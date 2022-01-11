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
    let newTotal = state.total + action.product.attributes.Price * action.quantity;
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
        product: product,
        quantity: quantity
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvQ2FydFByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicHJvZHVjdHNBcnJheSIsInBheWxvYWQiLCJwcm9kdWN0cyIsIm5ld1RvdGFsIiwidGVtcCIsImNhcnQiLCJpIiwibGVuZ3RoIiwicHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiaWQiLCJhdHRyaWJ1dGVzIiwiUHJvZHVjdElEIiwiU3VidG90YWwiLCJwdXNoIiwiYWRkZWRJdGVtcyIsInRvdGFsIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJQcmljZSIsInF1YW50aXR5IiwiYWRkZWRJdGVtIiwiZXhpc3RlZF9pdGVtIiwicXR5IiwibmV3UHJpY2UiLCJmZXRjaCIsInByb2Nlc3MiLCJtZXRob2QiLCJpdGVtVG9SZW1vdmUiLCJuZXdfaXRlbXMiLCJmaWx0ZXIiLCJzaGlwcGluZyIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwic2V0RGF0YSIsInVzZVN0YXRlIiwic2hvcHBpbmdDYXJ0Iiwic2V0U2hvcHBpbmdDYXJ0IiwiZGlzcGF0Y2hDYXJ0IiwidXNlUmVkdWNlciIsInJlbW92ZUl0ZW0iLCJhZGRUb0NhcnQiLCJqd3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibXlIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiQWNjb3VudElEIiwiUXVhbnRpdHkiLCJVbml0Q29zdCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwiYWRkUXVhbnRpdHkiLCJzdWJRdWFudGl0eSIsInVzZUVmZmVjdCIsImZlY3RoUHJvZHVjdCIsInFzIiwicmVxdWlyZSIsInF1ZXJ5Iiwic29ydCIsInBvcHVsYXRlIiwiZW5jb2RlVmFsdWVzT25seSIsInJlcyIsImRhdGFQcm9kdWN0IiwibWFwIiwiaW5kZXgiLCJxcnki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cUJFLG1CQUFPLEVBQUVxQztBQUE5QixXQUFELENBQVo7QUFDSCxTQUpEO0FBS0g7QUFDSixLQVhDLENBQU47QUFZSCxHQTVDRDs7QUE2Q0EsU0FDSSxNQUFDLDZEQUFELENBQWEsUUFBYjtBQUNJLFNBQUssRUFBRTtBQUNIakMsVUFBSSxFQUFFQSxJQURIO0FBRUhxQyxnQkFBVSxFQUFFQSxVQUZUO0FBR0hDLGVBQVMsRUFBRUEsU0FIUjtBQUlIa0IsaUJBQVcsRUFBRUEsV0FKVjtBQUtIQyxpQkFBVyxFQUFFQTtBQUxWLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVLM0IsUUFWTCxDQURKO0FBZUgsQ0EzR007O0dBQU1ELFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuM2RiYmQwYjUwNzlhMGNkOTVmMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVkdWNlciwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL1VzZXJDb250ZXh0XCI7XHJcbmltcG9ydCBDYXJ0Q29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dHMvQ2FydENvbnRleHRcIjtcclxuXHJcbmNvbnN0IGNhcnRSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1BST0RVQ1RTJykge1xyXG4gICAgICAgIGxldCBwcm9kdWN0c0FycmF5ID0gW107XHJcbiAgICAgICAgcHJvZHVjdHNBcnJheSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnd3d3JywgcHJvZHVjdHNBcnJheSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0c0FycmF5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnSU5JVF9DQVJUJykge1xyXG4gICAgICAgIGxldCBwcm9kdWN0c0FycmF5ID0gW107XHJcbiAgICAgICAgcHJvZHVjdHNBcnJheSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IDA7XHJcbiAgICAgICAgY29uc3QgdGVtcCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIGxldCBjYXJ0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb24ucGF5bG9hZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHRlbXBbaV0uYXR0cmlidXRlcy5Qcm9kdWN0SUQpO1xyXG4gICAgICAgICAgICBuZXdUb3RhbCArPSB0ZW1wW2ldLmF0dHJpYnV0ZXMuU3VidG90YWw7XHJcbiAgICAgICAgICAgIGNhcnQucHVzaCh7IC4uLnRlbXBbaV0sIHByb2R1Y3QgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IGNhcnQsXHJcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfVE9fQ0FSVCcpIHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gYWN0aW9uLnByb2R1Y3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdClcclxuICAgICAgICBjb25zdCBjYXJ0ID0gc3RhdGUuYWRkZWRJdGVtc1xyXG4gICAgICAgIGNhcnQucHVzaCh7IC4uLmFjdGlvbi5kYXRhLCBwcm9kdWN0IH0pXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhY3Rpb24ucHJvZHVjdC5hdHRyaWJ1dGVzLlByaWNlKmFjdGlvbi5xdWFudGl0eTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IGNhcnQsXHJcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVInKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYgKGV4aXN0ZWRfaXRlbSkge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gYWN0aW9uLnF0eVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgKiBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSBhY3Rpb24ucXR5O1xyXG4gICAgICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSAqIGFjdGlvbi5xdHlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdSRU1PVkVfSVRFTScpIHtcclxuICAgICAgICBcclxuICAgICAgICBmZXRjaChwcm9jZXNzLmVudi5BUElfSE9TVCArIGAvYXBpL3Nob3BwaW5nLWNhcnRzLyR7YWN0aW9uLmlkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBpdGVtVG9SZW1vdmUgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW0gPT4gYWN0aW9uLmlkICE9PSBpdGVtLmlkKVxyXG5cclxuICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gaXRlbVRvUmVtb3ZlLmF0dHJpYnV0ZXMuU3VidG90YWw7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXHJcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfUVVBTlRJVFknKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IDFcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnU1VCX1FVQU5USVRZJykge1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIC8vaWYgdGhlIHF0ID09IDAgdGhlbiBpdCBzaG91bGQgYmUgcmVtb3ZlZFxyXG4gICAgICAgIGlmIChhZGRlZEl0ZW0ucXVhbnRpdHkgPT09IDEpIHtcclxuICAgICAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gYWN0aW9uLmlkKVxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSAtPSAxXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gYWRkZWRJdGVtLm5ld1ByaWNlXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfU0hJUFBJTkcnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyArPSAzMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdTVUJfU0hJUFBJTkcnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyAtPSAzMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdSRVNFVF9DQVJUJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBbXSxcclxuICAgICAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzaG9wcGluZ0NhcnQsIHNldFNob3BwaW5nQ2FydF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY2FydCwgZGlzcGF0Y2hDYXJ0XSA9IHVzZVJlZHVjZXIoY2FydFJlZHVjZXIsIHtcclxuICAgICAgICBwcm9kdWN0czogW10sXHJcbiAgICAgICAgYWRkZWRJdGVtczogW10sXHJcbiAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgc2hpcHBpbmc6IDAsXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAoaWQpID0+IHtcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnUkVNT1ZFX0lURU0nLCBpZDogaWQgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFRvQ2FydCA9IGFzeW5jIChpZCwgcXVhbnRpdHkpID0+IHtcclxuICAgICAgICBsZXQgcHJvZHVjdCA9IGNhcnQucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKVxyXG4gICAgICAgIGNvbnN0IGp3dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3Qta3R4c2hvcCcpO1xyXG5cclxuICAgICAgICBsZXQgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBteUhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKVxyXG4gICAgICAgIGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkFQSV9IT1NUICsgJy9hcGkvc2hvcHBpbmctY2FydHMnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudElEOiBqd3QsXHJcbiAgICAgICAgICAgICAgICAgICAgUHJvZHVjdElEOiBwcm9kdWN0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIFF1YW50aXR5OiBxdWFudGl0eSB8fCAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFVuaXRDb3N0OiBwcm9kdWN0LmF0dHJpYnV0ZXMuUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgU3VidG90YWw6IHByb2R1Y3QuYXR0cmlidXRlcy5QcmljZSpxdWFudGl0eSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IG15SGVhZGVyc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdBRERfVE9fQ0FSVCcsIGRhdGE6IHJlc3VsdC5kYXRhLCBwcm9kdWN0OiBwcm9kdWN0LCBxdWFudGl0eTogcXVhbnRpdHkgfSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICBjb25zdCBhZGRRdWFudGl0eSA9IChpZCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdBRERfUVVBTlRJVFknLCBpZDogaWQgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IHN1YlF1YW50aXR5ID0gKGlkKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ1NVQl9RVUFOVElUWScsIGlkOiBpZCB9KVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZWN0aFByb2R1Y3QoKTtcclxuICAgIH0sIFtdKVxyXG4gICAgY29uc3QgZmVjdGhQcm9kdWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHFzID0gcmVxdWlyZSgncXMnKTtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IHFzLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHNvcnQ6IFsnaWQ6ZGVzYycsXSxcclxuICAgICAgICAgICAgcG9wdWxhdGU6ICcqJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX0hPU1QgKyBgL2FwaS9wcm9kdWN0cz8ke3F1ZXJ5fWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YVswXSAmJiByZXMuZGF0YVswXS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YVByb2R1Y3QgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhUHJvZHVjdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKFsuLi5kYXRhXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ0FERF9QUk9EVUNUUycsIHBheWxvYWQ6IGRhdGEgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9kaXNwYXRjaENhcnQoeyB0eXBlOiAnSU5JVF9DQVJUJywgcGF5bG9hZDogZGF0YSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGp3dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3Qta3R4c2hvcCcpO1xyXG4gICAgICAgIGNvbnN0IHFyeSA9IHFzLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIGZpbHRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEFjY291bnRJRDoge1xyXG4gICAgICAgICAgICAgICAgICAgICRlcTogTnVtYmVyKGp3dCksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5BUElfSE9TVCArIGAvYXBpL3Nob3BwaW5nLWNhcnRzPyR7cXJ5fWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YVswXSAmJiByZXMuZGF0YVswXS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YUNhcnQgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhQ2FydC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3BwaW5nQ2FydC5wdXNoKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3BwaW5nQ2FydChbLi4uc2hvcHBpbmdDYXJ0XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ0lOSVRfQ0FSVCcsIHBheWxvYWQ6IHNob3BwaW5nQ2FydCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FydENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIGNhcnQ6IGNhcnQsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtOiByZW1vdmVJdGVtLFxyXG4gICAgICAgICAgICAgICAgYWRkVG9DYXJ0OiBhZGRUb0NhcnQsXHJcbiAgICAgICAgICAgICAgICBhZGRRdWFudGl0eTogYWRkUXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICBzdWJRdWFudGl0eTogc3ViUXVhbnRpdHksXHJcblxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
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
    let newTotal = state.total + action.product.attributes.Price * action.quan;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvQ2FydFByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicHJvZHVjdHNBcnJheSIsInBheWxvYWQiLCJwcm9kdWN0cyIsIm5ld1RvdGFsIiwidGVtcCIsImNhcnQiLCJpIiwibGVuZ3RoIiwicHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiaWQiLCJhdHRyaWJ1dGVzIiwiUHJvZHVjdElEIiwiU3VidG90YWwiLCJwdXNoIiwiYWRkZWRJdGVtcyIsInRvdGFsIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJQcmljZSIsInF1YW4iLCJhZGRlZEl0ZW0iLCJleGlzdGVkX2l0ZW0iLCJxdWFudGl0eSIsInF0eSIsIm5ld1ByaWNlIiwiZmV0Y2giLCJwcm9jZXNzIiwibWV0aG9kIiwiaXRlbVRvUmVtb3ZlIiwibmV3X2l0ZW1zIiwiZmlsdGVyIiwic2hpcHBpbmciLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInNldERhdGEiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsImRpc3BhdGNoQ2FydCIsInVzZVJlZHVjZXIiLCJyZW1vdmVJdGVtIiwiYWRkVG9DYXJ0Iiwiand0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm15SGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIkFjY291bnRJRCIsIlF1YW50aXR5IiwiVW5pdENvc3QiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsImFkZFF1YW50aXR5Iiwic3ViUXVhbnRpdHkiLCJ1c2VFZmZlY3QiLCJmZWN0aFByb2R1Y3QiLCJxcyIsInJlcXVpcmUiLCJxdWVyeSIsInNvcnQiLCJwb3B1bGF0ZSIsImVuY29kZVZhbHVlc09ubHkiLCJyZXMiLCJkYXRhUHJvZHVjdCIsIm1hcCIsImluZGV4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QUFFLFdBQVI7QUFBcUJFLG1CQUFPLEVBQUVzQztBQUE5QixXQUFELENBQVo7QUFDSCxTQUpEO0FBS0g7QUFDSixLQVhDLENBQU47QUFZSCxHQTVDRDs7QUE2Q0EsU0FDSSxNQUFDLDZEQUFELENBQWEsUUFBYjtBQUNJLFNBQUssRUFBRTtBQUNIbEMsVUFBSSxFQUFFQSxJQURIO0FBRUhzQyxnQkFBVSxFQUFFQSxVQUZUO0FBR0hDLGVBQVMsRUFBRUEsU0FIUjtBQUlIa0IsaUJBQVcsRUFBRUEsV0FKVjtBQUtIQyxpQkFBVyxFQUFFQTtBQUxWLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVLM0IsUUFWTCxDQURKO0FBZUgsQ0EzR007O0dBQU1ELFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuYjgyMWY4OTg3OTdlNGQ3NGUxM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVkdWNlciwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL1VzZXJDb250ZXh0XCI7XHJcbmltcG9ydCBDYXJ0Q29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dHMvQ2FydENvbnRleHRcIjtcclxuXHJcbmNvbnN0IGNhcnRSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1BST0RVQ1RTJykge1xyXG4gICAgICAgIGxldCBwcm9kdWN0c0FycmF5ID0gW107XHJcbiAgICAgICAgcHJvZHVjdHNBcnJheSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnd3d3JywgcHJvZHVjdHNBcnJheSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0c0FycmF5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnSU5JVF9DQVJUJykge1xyXG4gICAgICAgIGxldCBwcm9kdWN0c0FycmF5ID0gW107XHJcbiAgICAgICAgcHJvZHVjdHNBcnJheSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IDA7XHJcbiAgICAgICAgY29uc3QgdGVtcCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIGxldCBjYXJ0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb24ucGF5bG9hZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHRlbXBbaV0uYXR0cmlidXRlcy5Qcm9kdWN0SUQpO1xyXG4gICAgICAgICAgICBuZXdUb3RhbCArPSB0ZW1wW2ldLmF0dHJpYnV0ZXMuU3VidG90YWw7XHJcbiAgICAgICAgICAgIGNhcnQucHVzaCh7IC4uLnRlbXBbaV0sIHByb2R1Y3QgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IGNhcnQsXHJcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfVE9fQ0FSVCcpIHtcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gYWN0aW9uLnByb2R1Y3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdClcclxuICAgICAgICBjb25zdCBjYXJ0ID0gc3RhdGUuYWRkZWRJdGVtc1xyXG4gICAgICAgIGNhcnQucHVzaCh7IC4uLmFjdGlvbi5kYXRhLCBwcm9kdWN0IH0pXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhY3Rpb24ucHJvZHVjdC5hdHRyaWJ1dGVzLlByaWNlKmFjdGlvbi5xdWFuO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogY2FydCxcclxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FERF9RVUFOVElUWV9XSVRIX05VTUJFUicpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXHJcbiAgICAgICAgbGV0IGV4aXN0ZWRfaXRlbSA9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtID0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICBpZiAoZXhpc3RlZF9pdGVtKSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSAqIGFjdGlvbi5xdHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IGFjdGlvbi5xdHk7XHJcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlICogYWN0aW9uLnF0eVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogWy4uLnN0YXRlLmFkZGVkSXRlbXMsIGFkZGVkSXRlbV0sXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1JFTU9WRV9JVEVNJykge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZldGNoKHByb2Nlc3MuZW52LkFQSV9IT1NUICsgYC9hcGkvc2hvcHBpbmctY2FydHMvJHthY3Rpb24uaWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGl0ZW1Ub1JlbW92ZSA9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtID0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICBsZXQgbmV3X2l0ZW1zID0gc3RhdGUuYWRkZWRJdGVtcy5maWx0ZXIoaXRlbSA9PiBhY3Rpb24uaWQgIT09IGl0ZW0uaWQpXHJcblxyXG4gICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBpdGVtVG9SZW1vdmUuYXR0cmlidXRlcy5TdWJ0b3RhbDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IG5ld19pdGVtcyxcclxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FERF9RVUFOVElUWScpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gMVxyXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdTVUJfUVVBTlRJVFknKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9pZiB0aGUgcXQgPT0gMCB0aGVuIGl0IHNob3VsZCBiZSByZW1vdmVkXHJcbiAgICAgICAgaWYgKGFkZGVkSXRlbS5xdWFudGl0eSA9PT0gMSkge1xyXG4gICAgICAgICAgICBsZXQgbmV3X2l0ZW1zID0gc3RhdGUuYWRkZWRJdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gYWRkZWRJdGVtLm5ld1ByaWNlXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IG5ld19pdGVtcyxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5IC09IDFcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FERF9TSElQUElORycpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nICs9IDMwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1NVQl9TSElQUElORycpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nIC09IDMwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1JFU0VUX0NBUlQnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IFtdLFxyXG4gICAgICAgICAgICB0b3RhbDogMCxcclxuICAgICAgICAgICAgc2hpcHBpbmc6IDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Nob3BwaW5nQ2FydCwgc2V0U2hvcHBpbmdDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjYXJ0LCBkaXNwYXRjaENhcnRdID0gdXNlUmVkdWNlcihjYXJ0UmVkdWNlciwge1xyXG4gICAgICAgIHByb2R1Y3RzOiBbXSxcclxuICAgICAgICBhZGRlZEl0ZW1zOiBbXSxcclxuICAgICAgICB0b3RhbDogMCxcclxuICAgICAgICBzaGlwcGluZzogMCxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9IChpZCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdSRU1PVkVfSVRFTScsIGlkOiBpZCB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkVG9DYXJ0ID0gYXN5bmMgKGlkLCBxdWFudGl0eSkgPT4ge1xyXG4gICAgICAgIGxldCBwcm9kdWN0ID0gY2FydC5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpXHJcbiAgICAgICAgY29uc3Qgand0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dC1rdHhzaG9wJyk7XHJcblxyXG4gICAgICAgIGxldCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIG15SGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpXHJcbiAgICAgICAgYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX0hPU1QgKyAnL2FwaS9zaG9wcGluZy1jYXJ0cycsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50SUQ6IGp3dCxcclxuICAgICAgICAgICAgICAgICAgICBQcm9kdWN0SUQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgUXVhbnRpdHk6IHF1YW50aXR5IHx8IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgVW5pdENvc3Q6IHByb2R1Y3QuYXR0cmlidXRlcy5QcmljZSxcclxuICAgICAgICAgICAgICAgICAgICBTdWJ0b3RhbDogcHJvZHVjdC5hdHRyaWJ1dGVzLlByaWNlKnF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgaGVhZGVyczogbXlIZWFkZXJzXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ0FERF9UT19DQVJUJywgZGF0YTogcmVzdWx0LmRhdGEsIHByb2R1Y3Q6IHByb2R1Y3QsIHF1YW50aXR5OiBxdWFudGl0eSB9KVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFF1YW50aXR5ID0gKGlkKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ0FERF9RVUFOVElUWScsIGlkOiBpZCB9KVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3ViUXVhbnRpdHkgPSAoaWQpID0+IHtcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnU1VCX1FVQU5USVRZJywgaWQ6IGlkIH0pXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZlY3RoUHJvZHVjdCgpO1xyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCBmZWN0aFByb2R1Y3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcXMgPSByZXF1aXJlKCdxcycpO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgc29ydDogWydpZDpkZXNjJyxdLFxyXG4gICAgICAgICAgICBwb3B1bGF0ZTogJyonXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5OiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5BUElfSE9TVCArIGAvYXBpL3Byb2R1Y3RzPyR7cXVlcnl9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhICYmIHJlcy5kYXRhWzBdICYmIHJlcy5kYXRhWzBdLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhUHJvZHVjdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFQcm9kdWN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoWy4uLmRhdGFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnQUREX1BST0RVQ1RTJywgcGF5bG9hZDogZGF0YSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2Rpc3BhdGNoQ2FydCh7IHR5cGU6ICdJTklUX0NBUlQnLCBwYXlsb2FkOiBkYXRhIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgand0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dC1rdHhzaG9wJyk7XHJcbiAgICAgICAgY29uc3QgcXJ5ID0gcXMuc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgZmlsdGVyczoge1xyXG4gICAgICAgICAgICAgICAgQWNjb3VudElEOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGVxOiBOdW1iZXIoand0KSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5OiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkFQSV9IT1NUICsgYC9hcGkvc2hvcHBpbmctY2FydHM/JHtxcnl9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhICYmIHJlcy5kYXRhWzBdICYmIHJlcy5kYXRhWzBdLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhQ2FydCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFDYXJ0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdDYXJ0LnB1c2goaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvcHBpbmdDYXJ0KFsuLi5zaG9wcGluZ0NhcnRdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnSU5JVF9DQVJUJywgcGF5bG9hZDogc2hvcHBpbmdDYXJ0IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgY2FydDogY2FydCxcclxuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0sXHJcbiAgICAgICAgICAgICAgICBhZGRUb0NhcnQ6IGFkZFRvQ2FydCxcclxuICAgICAgICAgICAgICAgIGFkZFF1YW50aXR5OiBhZGRRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgIHN1YlF1YW50aXR5OiBzdWJRdWFudGl0eSxcclxuXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
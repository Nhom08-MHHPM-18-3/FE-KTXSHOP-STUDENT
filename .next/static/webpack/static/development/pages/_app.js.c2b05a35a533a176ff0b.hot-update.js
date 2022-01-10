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
    productsArray = action.payload; // console.log(action.payload)

    let newTotal = 0; // for (let i = 0; i < productsArray.length; i++) {
    //     newTotal += productsArray[i].attributes.Price;
    // }

    const temp = action.payload;
    let cart = [];

    for (let i = 0; i < action.payload.length; i++) {
      const product = state.products.find(item => item.id === temp[i].attributes.AccountID);
      newTotal += temp[i].attributes.Subtotal;
      cart.push(_objectSpread(_objectSpread({}, temp[i]), {}, {
        product
      }));
    }

    console.log(cart);
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: cart,
      total: newTotal
    });
  }

  if (action.type === 'ADD_TO_CART') {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems
    // let existed_item = state.addedItems.find(item => action.id === item.id)
    // if (existed_item) {
    //     addedItem.quantity += 1
    //     return {
    //         ...state,
    //         total: state.total + addedItem.newPrice
    //     }
    // } else {
    //     addedItem.quantity = 1;
    //calculating the total

    const jwt = localStorage.getItem('jwt-ktxshop');
    handleAddToCart(addedItem, Number(jwt), action.quanity);
    let newTotal = state.total + addedItem.newPrice;
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: [...state.addedItems, addedItem],
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

const handleAddToCart = async (product, accountID, quantity) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  await fetch("http://localhost:1337" + '/api/shopping-carts', {
    method: 'POST',
    body: JSON.stringify({
      data: {
        accountID: accountID,
        ProductID: product.id,
        Quantity: quantity || 1,
        UnitCost: product.attributes.Price,
        Subtotal: product.attributes.Price
      }
    }),
    headers: myHeaders
  }).then(response => response.json()).then(result => {});
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

  const addToCart = id => {
    dispatchCart({
      type: 'ADD_TO_CART',
      id: id,
      quanity: quantity
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
      lineNumber: 258,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvQ2FydFByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicHJvZHVjdHNBcnJheSIsInBheWxvYWQiLCJwcm9kdWN0cyIsIm5ld1RvdGFsIiwidGVtcCIsImNhcnQiLCJpIiwibGVuZ3RoIiwicHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiaWQiLCJhdHRyaWJ1dGVzIiwiQWNjb3VudElEIiwiU3VidG90YWwiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImFkZGVkSXRlbXMiLCJ0b3RhbCIsImFkZGVkSXRlbSIsImp3dCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoYW5kbGVBZGRUb0NhcnQiLCJOdW1iZXIiLCJxdWFuaXR5IiwibmV3UHJpY2UiLCJleGlzdGVkX2l0ZW0iLCJxdWFudGl0eSIsInF0eSIsIml0ZW1Ub1JlbW92ZSIsIm5ld19pdGVtcyIsImZpbHRlciIsInNoaXBwaW5nIiwiYWNjb3VudElEIiwibXlIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImZldGNoIiwicHJvY2VzcyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsIlByb2R1Y3RJRCIsIlF1YW50aXR5IiwiVW5pdENvc3QiLCJQcmljZSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZXREYXRhIiwidXNlU3RhdGUiLCJzaG9wcGluZ0NhcnQiLCJzZXRTaG9wcGluZ0NhcnQiLCJkaXNwYXRjaENhcnQiLCJ1c2VSZWR1Y2VyIiwicmVtb3ZlSXRlbSIsImFkZFRvQ2FydCIsImFkZFF1YW50aXR5Iiwic3ViUXVhbnRpdHkiLCJ1c2VFZmZlY3QiLCJmZWN0aFByb2R1Y3QiLCJxcyIsInJlcXVpcmUiLCJxdWVyeSIsInNvcnQiLCJwb3B1bGF0ZSIsImVuY29kZVZhbHVlc09ubHkiLCJyZXMiLCJkYXRhUHJvZHVjdCIsIm1hcCIsImluZGV4IiwicXJ5IiwiZmlsdGVycyIsIiRlcSIsImRhdGFDYXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFdBQVcsR0FBRyxDQUFDQyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFHbkMsTUFBSUEsTUFBTSxDQUFDQyxJQUFQLEtBQWdCLGNBQXBCLEVBQW9DO0FBQ2hDLFFBQUlDLGFBQWEsR0FBRyxFQUFwQjtBQUNBQSxpQkFBYSxHQUFHRixNQUFNLENBQUNHLE9BQXZCLENBRmdDLENBSWhDOztBQUVBLDJDQUNPSixLQURQO0FBRUlLLGNBQVEsRUFBRUY7QUFGZDtBQUlIOztBQUNELE1BQUlGLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQixXQUFwQixFQUFpQztBQUM3QixRQUFJQyxhQUFhLEdBQUcsRUFBcEI7QUFDQUEsaUJBQWEsR0FBR0YsTUFBTSxDQUFDRyxPQUF2QixDQUY2QixDQUc3Qjs7QUFDQSxRQUFJRSxRQUFRLEdBQUcsQ0FBZixDQUo2QixDQUs3QjtBQUNBO0FBQ0E7O0FBQ0EsVUFBTUMsSUFBSSxHQUFHTixNQUFNLENBQUNHLE9BQXBCO0FBQ0EsUUFBSUksSUFBSSxHQUFHLEVBQVg7O0FBQ0EsU0FBSSxJQUFJQyxDQUFDLEdBQUUsQ0FBWCxFQUFjQSxDQUFDLEdBQUVSLE1BQU0sQ0FBQ0csT0FBUCxDQUFlTSxNQUFoQyxFQUF1Q0QsQ0FBQyxFQUF4QyxFQUEyQztBQUN2QyxZQUFNRSxPQUFPLEdBQUVYLEtBQUssQ0FBQ0ssUUFBTixDQUFlTyxJQUFmLENBQW9CQyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsRUFBTCxLQUFZUCxJQUFJLENBQUNFLENBQUQsQ0FBSixDQUFRTSxVQUFSLENBQW1CQyxTQUEzRCxDQUFmO0FBQ0lWLGNBQVEsSUFBSUMsSUFBSSxDQUFDRSxDQUFELENBQUosQ0FBUU0sVUFBUixDQUFtQkUsUUFBL0I7QUFDSlQsVUFBSSxDQUFDVSxJQUFMLGlDQUFjWCxJQUFJLENBQUNFLENBQUQsQ0FBbEI7QUFBdUJFO0FBQXZCO0FBQ0g7O0FBQ0RRLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWixJQUFaO0FBQ0EsMkNBQ09SLEtBRFA7QUFFSXFCLGdCQUFVLEVBQUViLElBRmhCO0FBR0ljLFdBQUssRUFBRWhCO0FBSFg7QUFLSDs7QUFFRCxNQUFJTCxNQUFNLENBQUNDLElBQVAsS0FBZ0IsYUFBcEIsRUFBbUM7QUFDL0IsUUFBSXFCLFNBQVMsR0FBR3ZCLEtBQUssQ0FBQ0ssUUFBTixDQUFlTyxJQUFmLENBQW9CQyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsRUFBTCxLQUFZYixNQUFNLENBQUNhLEVBQS9DLENBQWhCLENBRCtCLENBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0k7O0FBQ0EsVUFBTVUsR0FBRyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsYUFBckIsQ0FBWjtBQUNBQyxtQkFBZSxDQUFDSixTQUFELEVBQVlLLE1BQU0sQ0FBQ0osR0FBRCxDQUFsQixFQUF5QnZCLE1BQU0sQ0FBQzRCLE9BQWhDLENBQWY7QUFDQSxRQUFJdkIsUUFBUSxHQUFHTixLQUFLLENBQUNzQixLQUFOLEdBQWNDLFNBQVMsQ0FBQ08sUUFBdkM7QUFFQSwyQ0FDTzlCLEtBRFA7QUFFSXFCLGdCQUFVLEVBQUUsQ0FBQyxHQUFHckIsS0FBSyxDQUFDcUIsVUFBVixFQUFzQkUsU0FBdEIsQ0FGaEI7QUFHSUQsV0FBSyxFQUFFaEI7QUFIWDtBQUtQOztBQUVELE1BQUlMLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQiwwQkFBcEIsRUFBZ0Q7QUFDNUMsUUFBSXFCLFNBQVMsR0FBR3ZCLEtBQUssQ0FBQ0ssUUFBTixDQUFlTyxJQUFmLENBQW9CQyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsRUFBTCxLQUFZYixNQUFNLENBQUNhLEVBQS9DLENBQWhCLENBRDRDLENBRTVDOztBQUNBLFFBQUlpQixZQUFZLEdBQUcvQixLQUFLLENBQUNxQixVQUFOLENBQWlCVCxJQUFqQixDQUFzQkMsSUFBSSxJQUFJWixNQUFNLENBQUNhLEVBQVAsS0FBY0QsSUFBSSxDQUFDQyxFQUFqRCxDQUFuQjs7QUFDQSxRQUFJaUIsWUFBSixFQUFrQjtBQUNkUixlQUFTLENBQUNTLFFBQVYsSUFBc0IvQixNQUFNLENBQUNnQyxHQUE3QjtBQUNBLDZDQUNPakMsS0FEUDtBQUVJc0IsYUFBSyxFQUFFdEIsS0FBSyxDQUFDc0IsS0FBTixHQUFjQyxTQUFTLENBQUNPLFFBQVYsR0FBcUI3QixNQUFNLENBQUNnQztBQUZyRDtBQUlILEtBTkQsTUFNTztBQUNIVixlQUFTLENBQUNTLFFBQVYsR0FBcUIvQixNQUFNLENBQUNnQyxHQUE1QixDQURHLENBRUg7O0FBQ0EsVUFBSTNCLFFBQVEsR0FBR04sS0FBSyxDQUFDc0IsS0FBTixHQUFjQyxTQUFTLENBQUNPLFFBQVYsR0FBcUI3QixNQUFNLENBQUNnQyxHQUF6RDtBQUVBLDZDQUNPakMsS0FEUDtBQUVJcUIsa0JBQVUsRUFBRSxDQUFDLEdBQUdyQixLQUFLLENBQUNxQixVQUFWLEVBQXNCRSxTQUF0QixDQUZoQjtBQUdJRCxhQUFLLEVBQUVoQjtBQUhYO0FBTUg7QUFDSjs7QUFHRCxNQUFJTCxNQUFNLENBQUNDLElBQVAsS0FBZ0IsYUFBcEIsRUFBbUM7QUFDL0IsUUFBSWdDLFlBQVksR0FBR2xDLEtBQUssQ0FBQ3FCLFVBQU4sQ0FBaUJULElBQWpCLENBQXNCQyxJQUFJLElBQUlaLE1BQU0sQ0FBQ2EsRUFBUCxLQUFjRCxJQUFJLENBQUNDLEVBQWpELENBQW5CO0FBQ0EsUUFBSXFCLFNBQVMsR0FBR25DLEtBQUssQ0FBQ3FCLFVBQU4sQ0FBaUJlLE1BQWpCLENBQXdCdkIsSUFBSSxJQUFJWixNQUFNLENBQUNhLEVBQVAsS0FBY0QsSUFBSSxDQUFDQyxFQUFuRCxDQUFoQixDQUYrQixDQUkvQjs7QUFDQSxRQUFJUixRQUFRLEdBQUdOLEtBQUssQ0FBQ3NCLEtBQU4sR0FBZVksWUFBWSxDQUFDSixRQUFiLEdBQXdCSSxZQUFZLENBQUNGLFFBQW5FO0FBRUEsMkNBQ09oQyxLQURQO0FBRUlxQixnQkFBVSxFQUFFYyxTQUZoQjtBQUdJYixXQUFLLEVBQUVoQjtBQUhYO0FBS0g7O0FBRUQsTUFBSUwsTUFBTSxDQUFDQyxJQUFQLEtBQWdCLGNBQXBCLEVBQW9DO0FBQ2hDLFFBQUlxQixTQUFTLEdBQUd2QixLQUFLLENBQUNLLFFBQU4sQ0FBZU8sSUFBZixDQUFvQkMsSUFBSSxJQUFJQSxJQUFJLENBQUNDLEVBQUwsS0FBWWIsTUFBTSxDQUFDYSxFQUEvQyxDQUFoQjtBQUNBUyxhQUFTLENBQUNTLFFBQVYsSUFBc0IsQ0FBdEI7QUFDQSxRQUFJMUIsUUFBUSxHQUFHTixLQUFLLENBQUNzQixLQUFOLEdBQWNDLFNBQVMsQ0FBQ08sUUFBdkM7QUFDQSwyQ0FDTzlCLEtBRFA7QUFFSXNCLFdBQUssRUFBRWhCO0FBRlg7QUFJSDs7QUFFRCxNQUFJTCxNQUFNLENBQUNDLElBQVAsS0FBZ0IsY0FBcEIsRUFBb0M7QUFDaEMsUUFBSXFCLFNBQVMsR0FBR3ZCLEtBQUssQ0FBQ0ssUUFBTixDQUFlTyxJQUFmLENBQW9CQyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsRUFBTCxLQUFZYixNQUFNLENBQUNhLEVBQS9DLENBQWhCLENBRGdDLENBRWhDOztBQUNBLFFBQUlTLFNBQVMsQ0FBQ1MsUUFBVixLQUF1QixDQUEzQixFQUE4QjtBQUMxQixVQUFJRyxTQUFTLEdBQUduQyxLQUFLLENBQUNxQixVQUFOLENBQWlCZSxNQUFqQixDQUF3QnZCLElBQUksSUFBSUEsSUFBSSxDQUFDQyxFQUFMLEtBQVliLE1BQU0sQ0FBQ2EsRUFBbkQsQ0FBaEI7QUFDQSxVQUFJUixRQUFRLEdBQUdOLEtBQUssQ0FBQ3NCLEtBQU4sR0FBY0MsU0FBUyxDQUFDTyxRQUF2QztBQUNBLDZDQUNPOUIsS0FEUDtBQUVJcUIsa0JBQVUsRUFBRWMsU0FGaEI7QUFHSWIsYUFBSyxFQUFFaEI7QUFIWDtBQUtILEtBUkQsTUFRTztBQUNIaUIsZUFBUyxDQUFDUyxRQUFWLElBQXNCLENBQXRCO0FBQ0EsVUFBSTFCLFFBQVEsR0FBR04sS0FBSyxDQUFDc0IsS0FBTixHQUFjQyxTQUFTLENBQUNPLFFBQXZDO0FBQ0EsNkNBQ085QixLQURQO0FBRUlzQixhQUFLLEVBQUVoQjtBQUZYO0FBSUg7QUFFSjs7QUFFRCxNQUFJTCxNQUFNLENBQUNDLElBQVAsS0FBZ0IsY0FBcEIsRUFBb0M7QUFDaEMsMkNBQ09GLEtBRFA7QUFFSXFDLGNBQVEsRUFBRXJDLEtBQUssQ0FBQ3FDLFFBQU4sSUFBa0I7QUFGaEM7QUFJSDs7QUFFRCxNQUFJcEMsTUFBTSxDQUFDQyxJQUFQLEtBQWdCLGNBQXBCLEVBQW9DO0FBQ2hDLDJDQUNPRixLQURQO0FBRUlxQyxjQUFRLEVBQUVyQyxLQUFLLENBQUNxQyxRQUFOLElBQWtCO0FBRmhDO0FBSUg7O0FBRUQsTUFBSXBDLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQixZQUFwQixFQUFrQztBQUM5QiwyQ0FDT0YsS0FEUDtBQUVJcUIsZ0JBQVUsRUFBRSxFQUZoQjtBQUdJQyxXQUFLLEVBQUUsQ0FIWDtBQUlJZSxjQUFRLEVBQUU7QUFKZDtBQU1ILEdBUEQsTUFTSztBQUNELFdBQU9yQyxLQUFQO0FBQ0g7QUFDSixDQTlKRDs7QUErSkEsTUFBTTJCLGVBQWUsR0FBRyxPQUFPaEIsT0FBUCxFQUFnQjJCLFNBQWhCLEVBQTJCTixRQUEzQixLQUF1QztBQUMzRCxNQUFJTyxTQUFTLEdBQUcsSUFBSUMsT0FBSixFQUFoQjtBQUNJRCxXQUFTLENBQUNFLE1BQVYsQ0FBaUIsY0FBakIsRUFBaUMsa0JBQWpDO0FBQ0EsUUFBTUMsS0FBSyxDQUFDQyx1QkFBQSxHQUF1QixxQkFBeEIsRUFBK0M7QUFDdERDLFVBQU0sRUFBRSxNQUQ4QztBQUV0REMsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQkMsVUFBSSxFQUFFO0FBQ0ZWLGlCQUFTLEVBQUVBLFNBRFQ7QUFFRlcsaUJBQVMsRUFBRXRDLE9BQU8sQ0FBQ0csRUFGakI7QUFHRm9DLGdCQUFRLEVBQUVsQixRQUFRLElBQUksQ0FIcEI7QUFJRm1CLGdCQUFRLEVBQUV4QyxPQUFPLENBQUNJLFVBQVIsQ0FBbUJxQyxLQUozQjtBQUtGbkMsZ0JBQVEsRUFBR04sT0FBTyxDQUFDSSxVQUFSLENBQW1CcUM7QUFMNUI7QUFEVyxLQUFmLENBRmdEO0FBV3REQyxXQUFPLEVBQUVkO0FBWDZDLEdBQS9DLENBQUwsQ0FhRGUsSUFiQyxDQWFJQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQWJoQixFQWNERixJQWRDLENBY0lHLE1BQU0sSUFBSSxDQUVmLENBaEJDLENBQU47QUFrQlAsQ0FyQkQ7O0FBdUJPLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUFBOztBQUMxQyxRQUFNO0FBQUEsT0FBQ1gsSUFBRDtBQUFBLE9BQU9ZO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0Ysc0RBQVEsQ0FBQyxFQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNyRCxJQUFEO0FBQUEsT0FBT3dEO0FBQVAsTUFBdUJDLHdEQUFVLENBQUNsRSxXQUFELEVBQWM7QUFDakRNLFlBQVEsRUFBRSxFQUR1QztBQUVqRGdCLGNBQVUsRUFBRSxFQUZxQztBQUdqREMsU0FBSyxFQUFFLENBSDBDO0FBSWpEZSxZQUFRLEVBQUU7QUFKdUMsR0FBZCxDQUF2Qzs7QUFPQSxRQUFNNkIsVUFBVSxHQUFJcEQsRUFBRCxJQUFRO0FBQ3ZCa0QsZ0JBQVksQ0FBQztBQUFFOUQsVUFBSSxFQUFFLGFBQVI7QUFBdUJZLFFBQUUsRUFBRUE7QUFBM0IsS0FBRCxDQUFaO0FBQ0gsR0FGRDs7QUFHQSxRQUFNcUQsU0FBUyxHQUFJckQsRUFBRCxJQUFRO0FBQ3RCa0QsZ0JBQVksQ0FBQztBQUFFOUQsVUFBSSxFQUFFLGFBQVI7QUFBdUJZLFFBQUUsRUFBRUEsRUFBM0I7QUFBK0JlLGFBQU8sRUFBRUc7QUFBeEMsS0FBRCxDQUFaO0FBQ0gsR0FGRDs7QUFHQSxRQUFNb0MsV0FBVyxHQUFJdEQsRUFBRCxJQUFRO0FBQ3hCa0QsZ0JBQVksQ0FBQztBQUFFOUQsVUFBSSxFQUFFLGNBQVI7QUFBd0JZLFFBQUUsRUFBRUE7QUFBNUIsS0FBRCxDQUFaO0FBQ0gsR0FGRDs7QUFHQSxRQUFNdUQsV0FBVyxHQUFJdkQsRUFBRCxJQUFRO0FBQ3hCa0QsZ0JBQVksQ0FBQztBQUFFOUQsVUFBSSxFQUFFLGNBQVI7QUFBd0JZLFFBQUUsRUFBRUE7QUFBNUIsS0FBRCxDQUFaO0FBQ0gsR0FGRDs7QUFHQXdELHlEQUFTLENBQUMsTUFBTTtBQUNaQyxnQkFBWTtBQUNmLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBR0EsUUFBTUEsWUFBWSxHQUFHLFlBQVk7QUFDN0IsVUFBTUMsRUFBRSxHQUFHQyxtQkFBTyxDQUFDLDBDQUFELENBQWxCOztBQUNBLFVBQU1DLEtBQUssR0FBR0YsRUFBRSxDQUFDekIsU0FBSCxDQUFhO0FBQ3ZCNEIsVUFBSSxFQUFFLENBQUMsU0FBRCxDQURpQjtBQUV2QkMsY0FBUSxFQUFFO0FBRmEsS0FBYixFQUdYO0FBQ0NDLHNCQUFnQixFQUFFO0FBRG5CLEtBSFcsQ0FBZDtBQU9BLFVBQU1uQyxLQUFLLENBQUNDLHVCQUFBLEdBQXdCLGlCQUFnQitCLEtBQU0sRUFBL0MsQ0FBTCxDQUNEcEIsSUFEQyxDQUNJQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQURoQixFQUVERixJQUZDLENBRUl3QixHQUFHLElBQUk7QUFDVCxVQUFJQSxHQUFHLENBQUM5QixJQUFKLElBQVk4QixHQUFHLENBQUM5QixJQUFKLENBQVMsQ0FBVCxDQUFaLElBQTJCOEIsR0FBRyxDQUFDOUIsSUFBSixDQUFTLENBQVQsRUFBWWpDLFVBQTNDLEVBQXVEO0FBQ25ELGNBQU1nRSxXQUFXLEdBQUdELEdBQUcsQ0FBQzlCLElBQXhCO0FBQ0ErQixtQkFBVyxDQUFDQyxHQUFaLENBQWdCLENBQUNuRSxJQUFELEVBQU9vRSxLQUFQLEtBQWlCO0FBQzdCakMsY0FBSSxDQUFDOUIsSUFBTCxDQUFVTCxJQUFWO0FBQ0ErQyxpQkFBTyxDQUFDLENBQUMsR0FBR1osSUFBSixDQUFELENBQVA7QUFDQWdCLHNCQUFZLENBQUM7QUFBRTlELGdCQUFJLEVBQUUsY0FBUjtBQUF3QkUsbUJBQU8sRUFBRTRDO0FBQWpDLFdBQUQsQ0FBWixDQUg2QixDQUk3QjtBQUNILFNBTEQ7QUFNSDtBQUNKLEtBWkMsQ0FBTjtBQWFJLFVBQU14QixHQUFHLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixhQUFyQixDQUFaO0FBQ0EsVUFBTXdELEdBQUcsR0FBR1YsRUFBRSxDQUFDekIsU0FBSCxDQUFhO0FBQ3JCb0MsYUFBTyxFQUFFO0FBQ0xuRSxpQkFBUyxFQUFFO0FBQ1BvRSxhQUFHLEVBQUV4RCxNQUFNLENBQUNKLEdBQUQ7QUFESjtBQUROO0FBRFksS0FBYixFQU1UO0FBQ0NxRCxzQkFBZ0IsRUFBRTtBQURuQixLQU5TLENBQVo7QUFTQSxVQUFNbkMsS0FBSyxDQUFDQyx1QkFBQSxHQUF3Qix1QkFBc0J1QyxHQUFJLEVBQW5ELENBQUwsQ0FDTDVCLElBREssQ0FDQUMsUUFBUSxJQUFJQSxRQUFRLENBQUNDLElBQVQsRUFEWixFQUVMRixJQUZLLENBRUF3QixHQUFHLElBQUk7QUFDVCxVQUFJQSxHQUFHLENBQUM5QixJQUFKLElBQVk4QixHQUFHLENBQUM5QixJQUFKLENBQVMsQ0FBVCxDQUFaLElBQTJCOEIsR0FBRyxDQUFDOUIsSUFBSixDQUFTLENBQVQsRUFBWWpDLFVBQTNDLEVBQXVEO0FBQ25ELGNBQU1zRSxRQUFRLEdBQUdQLEdBQUcsQ0FBQzlCLElBQXJCO0FBQ0FxQyxnQkFBUSxDQUFDTCxHQUFULENBQWEsQ0FBQ25FLElBQUQsRUFBT29FLEtBQVAsS0FBaUI7QUFDMUJuQixzQkFBWSxDQUFDNUMsSUFBYixDQUFrQkwsSUFBbEI7QUFDQWtELHlCQUFlLENBQUMsQ0FBQyxHQUFHRCxZQUFKLENBQUQsQ0FBZjtBQUNBRSxzQkFBWSxDQUFDO0FBQUU5RCxnQkFBSSxFQUFFLFdBQVI7QUFBcUJFLG1CQUFPLEVBQUUwRDtBQUE5QixXQUFELENBQVo7QUFDSCxTQUpEO0FBS0g7QUFDSixLQVhLLENBQU47QUFZUCxHQTVDRDs7QUE2Q0EsU0FDSSxNQUFDLDZEQUFELENBQWEsUUFBYjtBQUNJLFNBQUssRUFBRTtBQUNIdEQsVUFBSSxFQUFFQSxJQURIO0FBRUgwRCxnQkFBVSxFQUFFQSxVQUZUO0FBR0hDLGVBQVMsRUFBRUEsU0FIUjtBQUlIQyxpQkFBVyxFQUFFQSxXQUpWO0FBS0hDLGlCQUFXLEVBQUVBO0FBTFYsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUtWLFFBVkwsQ0FESjtBQWVILENBckZNOztHQUFNRCxZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmMyYjA1YTM1YTUzM2ExNzZmZjBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9Vc2VyQ29udGV4dFwiO1xyXG5pbXBvcnQgQ2FydENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHRzL0NhcnRDb250ZXh0XCI7XHJcblxyXG5jb25zdCBjYXJ0UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FERF9QUk9EVUNUUycpIHtcclxuICAgICAgICBsZXQgcHJvZHVjdHNBcnJheSA9IFtdO1xyXG4gICAgICAgIHByb2R1Y3RzQXJyYXkgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3d3dycsIHByb2R1Y3RzQXJyYXkpXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdHNBcnJheVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0lOSVRfQ0FSVCcpIHtcclxuICAgICAgICBsZXQgcHJvZHVjdHNBcnJheSA9IFtdO1xyXG4gICAgICAgIHByb2R1Y3RzQXJyYXkgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSAwO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZHVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBuZXdUb3RhbCArPSBwcm9kdWN0c0FycmF5W2ldLmF0dHJpYnV0ZXMuUHJpY2U7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGNvbnN0IHRlbXAgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBsZXQgY2FydCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9MDsgaTwgYWN0aW9uLnBheWxvYWQubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPXN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSB0ZW1wW2ldLmF0dHJpYnV0ZXMuQWNjb3VudElEKTtcclxuICAgICAgICAgICAgICAgIG5ld1RvdGFsICs9IHRlbXBbaV0uYXR0cmlidXRlcy5TdWJ0b3RhbDtcclxuICAgICAgICAgICAgY2FydC5wdXNoKHsuLi50ZW1wW2ldLCBwcm9kdWN0fSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coY2FydClcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogY2FydCAsXHJcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfVE9fQ0FSVCcpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXHJcbiAgICAgICAgLy8gbGV0IGV4aXN0ZWRfaXRlbSA9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtID0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICAvLyBpZiAoZXhpc3RlZF9pdGVtKSB7XHJcbiAgICAgICAgLy8gICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxXHJcbiAgICAgICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgYWRkZWRJdGVtLnF1YW50aXR5ID0gMTtcclxuICAgICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgICAgICAgICAgY29uc3Qgand0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dC1rdHhzaG9wJyk7XHJcbiAgICAgICAgICAgIGhhbmRsZUFkZFRvQ2FydChhZGRlZEl0ZW0sIE51bWJlcihqd3QpLCBhY3Rpb24ucXVhbml0eSk7XHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSJykge1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIC8vY2hlY2sgaWYgdGhlIGFjdGlvbiBpZCBleGlzdHMgaW4gdGhlIGFkZGVkSXRlbXNcclxuICAgICAgICBsZXQgZXhpc3RlZF9pdGVtID0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW0gPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICAgIGlmIChleGlzdGVkX2l0ZW0pIHtcclxuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IGFjdGlvbi5xdHlcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlICogYWN0aW9uLnF0eVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ID0gYWN0aW9uLnF0eTtcclxuICAgICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgKiBhY3Rpb24ucXR5XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnUkVNT1ZFX0lURU0nKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1Ub1JlbW92ZSA9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtID0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICBsZXQgbmV3X2l0ZW1zID0gc3RhdGUuYWRkZWRJdGVtcy5maWx0ZXIoaXRlbSA9PiBhY3Rpb24uaWQgIT09IGl0ZW0uaWQpXHJcblxyXG4gICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSAoaXRlbVRvUmVtb3ZlLm5ld1ByaWNlICogaXRlbVRvUmVtb3ZlLnF1YW50aXR5KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IG5ld19pdGVtcyxcclxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FERF9RVUFOVElUWScpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gMVxyXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdTVUJfUVVBTlRJVFknKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9pZiB0aGUgcXQgPT0gMCB0aGVuIGl0IHNob3VsZCBiZSByZW1vdmVkXHJcbiAgICAgICAgaWYgKGFkZGVkSXRlbS5xdWFudGl0eSA9PT0gMSkge1xyXG4gICAgICAgICAgICBsZXQgbmV3X2l0ZW1zID0gc3RhdGUuYWRkZWRJdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gYWRkZWRJdGVtLm5ld1ByaWNlXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IG5ld19pdGVtcyxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5IC09IDFcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FERF9TSElQUElORycpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nICs9IDMwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1NVQl9TSElQUElORycpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgc2hpcHBpbmc6IHN0YXRlLnNoaXBwaW5nIC09IDMwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1JFU0VUX0NBUlQnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IFtdLFxyXG4gICAgICAgICAgICB0b3RhbDogMCxcclxuICAgICAgICAgICAgc2hpcHBpbmc6IDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuY29uc3QgaGFuZGxlQWRkVG9DYXJ0ID0gYXN5bmMgKHByb2R1Y3QsIGFjY291bnRJRCwgcXVhbnRpdHkpID0+e1xyXG4gICAgdmFyIG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgbXlIZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIilcclxuICAgICAgICBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5BUElfSE9TVCArICcvYXBpL3Nob3BwaW5nLWNhcnRzJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJRDogYWNjb3VudElELFxyXG4gICAgICAgICAgICAgICAgICAgIFByb2R1Y3RJRDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBRdWFudGl0eTogcXVhbnRpdHkgfHwgMSxcclxuICAgICAgICAgICAgICAgICAgICBVbml0Q29zdDogcHJvZHVjdC5hdHRyaWJ1dGVzLlByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFN1YnRvdGFsOiAgcHJvZHVjdC5hdHRyaWJ1dGVzLlByaWNlLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgaGVhZGVyczogbXlIZWFkZXJzXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzaG9wcGluZ0NhcnQsIHNldFNob3BwaW5nQ2FydF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY2FydCwgZGlzcGF0Y2hDYXJ0XSA9IHVzZVJlZHVjZXIoY2FydFJlZHVjZXIsIHtcclxuICAgICAgICBwcm9kdWN0czogW10sXHJcbiAgICAgICAgYWRkZWRJdGVtczogW10sXHJcbiAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgc2hpcHBpbmc6IDAsXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAoaWQpID0+IHtcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnUkVNT1ZFX0lURU0nLCBpZDogaWQgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFRvQ2FydCA9IChpZCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdBRERfVE9fQ0FSVCcsIGlkOiBpZCwgcXVhbml0eTogcXVhbnRpdHkgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFF1YW50aXR5ID0gKGlkKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ0FERF9RVUFOVElUWScsIGlkOiBpZCB9KVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3ViUXVhbnRpdHkgPSAoaWQpID0+IHtcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnU1VCX1FVQU5USVRZJywgaWQ6IGlkIH0pXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZlY3RoUHJvZHVjdCgpO1xyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCBmZWN0aFByb2R1Y3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcXMgPSByZXF1aXJlKCdxcycpO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgc29ydDogWydpZDpkZXNjJyxdLFxyXG4gICAgICAgICAgICBwb3B1bGF0ZTogJyonXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5OiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkFQSV9IT1NUICsgYC9hcGkvcHJvZHVjdHM/JHtxdWVyeX1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGFbMF0gJiYgcmVzLmRhdGFbMF0uYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFQcm9kdWN0ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVByb2R1Y3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShbLi4uZGF0YV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdBRERfUFJPRFVDVFMnLCBwYXlsb2FkOiBkYXRhIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ0lOSVRfQ0FSVCcsIHBheWxvYWQ6IGRhdGEgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3Qgand0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dC1rdHhzaG9wJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHFyeSA9IHFzLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudElEOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRlcTogTnVtYmVyKGp3dCksXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHk6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5BUElfSE9TVCArIGAvYXBpL3Nob3BwaW5nLWNhcnRzPyR7cXJ5fWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YVswXSAmJiByZXMuZGF0YVswXS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YUNhcnQgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhQ2FydC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3BwaW5nQ2FydC5wdXNoKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3BwaW5nQ2FydChbLi4uc2hvcHBpbmdDYXJ0XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ0lOSVRfQ0FSVCcsIHBheWxvYWQ6IHNob3BwaW5nQ2FydCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FydENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIGNhcnQ6IGNhcnQsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtOiByZW1vdmVJdGVtLFxyXG4gICAgICAgICAgICAgICAgYWRkVG9DYXJ0OiBhZGRUb0NhcnQsXHJcbiAgICAgICAgICAgICAgICBhZGRRdWFudGl0eTogYWRkUXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICBzdWJRdWFudGl0eTogc3ViUXVhbnRpdHksXHJcblxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
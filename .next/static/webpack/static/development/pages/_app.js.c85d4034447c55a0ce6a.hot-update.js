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

    handleAddToCart(addedItem, state.user.id, action.quanity);
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

  const user = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_2__["UserContext"]);
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
    shipping: 0,
    user: user.account
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
      lineNumber: 261,
      columnNumber: 9
    }
  }, children);
};

_s(CartProvider, "N584V2Se3yTvgr92QJtQqvMNfuk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvQ2FydFByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicHJvZHVjdHNBcnJheSIsInBheWxvYWQiLCJwcm9kdWN0cyIsIm5ld1RvdGFsIiwidGVtcCIsImNhcnQiLCJpIiwibGVuZ3RoIiwicHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiaWQiLCJhdHRyaWJ1dGVzIiwiQWNjb3VudElEIiwiU3VidG90YWwiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImFkZGVkSXRlbXMiLCJ0b3RhbCIsImFkZGVkSXRlbSIsImhhbmRsZUFkZFRvQ2FydCIsInVzZXIiLCJxdWFuaXR5IiwibmV3UHJpY2UiLCJleGlzdGVkX2l0ZW0iLCJxdWFudGl0eSIsInF0eSIsIml0ZW1Ub1JlbW92ZSIsIm5ld19pdGVtcyIsImZpbHRlciIsInNoaXBwaW5nIiwiYWNjb3VudElEIiwibXlIZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsImZldGNoIiwicHJvY2VzcyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsIlByb2R1Y3RJRCIsIlF1YW50aXR5IiwiVW5pdENvc3QiLCJQcmljZSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJzZXREYXRhIiwidXNlU3RhdGUiLCJzaG9wcGluZ0NhcnQiLCJzZXRTaG9wcGluZ0NhcnQiLCJkaXNwYXRjaENhcnQiLCJ1c2VSZWR1Y2VyIiwiYWNjb3VudCIsInJlbW92ZUl0ZW0iLCJhZGRUb0NhcnQiLCJhZGRRdWFudGl0eSIsInN1YlF1YW50aXR5IiwidXNlRWZmZWN0IiwiZmVjdGhQcm9kdWN0IiwicXMiLCJyZXF1aXJlIiwicXVlcnkiLCJzb3J0IiwicG9wdWxhdGUiLCJlbmNvZGVWYWx1ZXNPbmx5IiwicmVzIiwiZGF0YVByb2R1Y3QiLCJtYXAiLCJpbmRleCIsImp3dCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJxcnkiLCJmaWx0ZXJzIiwiJGVxIiwiTnVtYmVyIiwiZGF0YUNhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUduQyxNQUFJQSxNQUFNLENBQUNDLElBQVAsS0FBZ0IsY0FBcEIsRUFBb0M7QUFDaEMsUUFBSUMsYUFBYSxHQUFHLEVBQXBCO0FBQ0FBLGlCQUFhLEdBQUdGLE1BQU0sQ0FBQ0csT0FBdkIsQ0FGZ0MsQ0FJaEM7O0FBRUEsMkNBQ09KLEtBRFA7QUFFSUssY0FBUSxFQUFFRjtBQUZkO0FBSUg7O0FBQ0QsTUFBSUYsTUFBTSxDQUFDQyxJQUFQLEtBQWdCLFdBQXBCLEVBQWlDO0FBQzdCLFFBQUlDLGFBQWEsR0FBRyxFQUFwQjtBQUNBQSxpQkFBYSxHQUFHRixNQUFNLENBQUNHLE9BQXZCLENBRjZCLENBRzdCOztBQUNBLFFBQUlFLFFBQVEsR0FBRyxDQUFmLENBSjZCLENBSzdCO0FBQ0E7QUFDQTs7QUFDQSxVQUFNQyxJQUFJLEdBQUdOLE1BQU0sQ0FBQ0csT0FBcEI7QUFDQSxRQUFJSSxJQUFJLEdBQUcsRUFBWDs7QUFDQSxTQUFJLElBQUlDLENBQUMsR0FBRSxDQUFYLEVBQWNBLENBQUMsR0FBRVIsTUFBTSxDQUFDRyxPQUFQLENBQWVNLE1BQWhDLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTJDO0FBQ3ZDLFlBQU1FLE9BQU8sR0FBRVgsS0FBSyxDQUFDSyxRQUFOLENBQWVPLElBQWYsQ0FBb0JDLElBQUksSUFBSUEsSUFBSSxDQUFDQyxFQUFMLEtBQVlQLElBQUksQ0FBQ0UsQ0FBRCxDQUFKLENBQVFNLFVBQVIsQ0FBbUJDLFNBQTNELENBQWY7QUFDSVYsY0FBUSxJQUFJQyxJQUFJLENBQUNFLENB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R0QsWUFBSixDQUFELENBQWY7QUFDQUUsc0JBQVksQ0FBQztBQUFFN0QsZ0JBQUksRUFBRSxXQUFSO0FBQXFCRSxtQkFBTyxFQUFFeUQ7QUFBOUIsV0FBRCxDQUFaO0FBQ0gsU0FKRDtBQUtIO0FBQ0osS0FYSyxDQUFOO0FBWVAsR0E1Q0Q7O0FBNkNBLFNBQ0ksTUFBQyw2REFBRCxDQUFhLFFBQWI7QUFDSSxTQUFLLEVBQUU7QUFDSHJELFVBQUksRUFBRUEsSUFESDtBQUVIMEQsZ0JBQVUsRUFBRUEsVUFGVDtBQUdIQyxlQUFTLEVBQUVBLFNBSFI7QUFJSEMsaUJBQVcsRUFBRUEsV0FKVjtBQUtIQyxpQkFBVyxFQUFFQTtBQUxWLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVLYixRQVZMLENBREo7QUFlSCxDQXZGTTs7R0FBTUQsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5jODVkNDAzNDQ0N2M1NWEwY2U2YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvVXNlckNvbnRleHRcIjtcclxuaW1wb3J0IENhcnRDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0cy9DYXJ0Q29udGV4dFwiO1xyXG5cclxuY29uc3QgY2FydFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfUFJPRFVDVFMnKSB7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RzQXJyYXkgPSBbXTtcclxuICAgICAgICBwcm9kdWN0c0FycmF5ID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd3d3cnLCBwcm9kdWN0c0FycmF5KVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzQXJyYXlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdJTklUX0NBUlQnKSB7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RzQXJyYXkgPSBbXTtcclxuICAgICAgICBwcm9kdWN0c0FycmF5ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gMDtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHByb2R1Y3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbmV3VG90YWwgKz0gcHJvZHVjdHNBcnJheVtpXS5hdHRyaWJ1dGVzLlByaWNlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBjb25zdCB0ZW1wID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgbGV0IGNhcnQgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPTA7IGk8IGFjdGlvbi5wYXlsb2FkLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID1zdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGVtcFtpXS5hdHRyaWJ1dGVzLkFjY291bnRJRCk7XHJcbiAgICAgICAgICAgICAgICBuZXdUb3RhbCArPSB0ZW1wW2ldLmF0dHJpYnV0ZXMuU3VidG90YWw7XHJcbiAgICAgICAgICAgIGNhcnQucHVzaCh7Li4udGVtcFtpXSwgcHJvZHVjdH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNhcnQpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IGNhcnQgLFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1RPX0NBUlQnKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgICAgIC8vIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgLy8gaWYgKGV4aXN0ZWRfaXRlbSkge1xyXG4gICAgICAgIC8vICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gMVxyXG4gICAgICAgIC8vICAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLy8gICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IDE7XHJcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgICAgIGhhbmRsZUFkZFRvQ2FydChhZGRlZEl0ZW0sIHN0YXRlLnVzZXIuaWQsIGFjdGlvbi5xdWFuaXR5KVxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogWy4uLnN0YXRlLmFkZGVkSXRlbXMsIGFkZGVkSXRlbV0sXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVInKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYgKGV4aXN0ZWRfaXRlbSkge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gYWN0aW9uLnF0eVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgKiBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSBhY3Rpb24ucXR5O1xyXG4gICAgICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSAqIGFjdGlvbi5xdHlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdSRU1PVkVfSVRFTScpIHtcclxuICAgICAgICBsZXQgaXRlbVRvUmVtb3ZlID0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW0gPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtID0+IGFjdGlvbi5pZCAhPT0gaXRlbS5pZClcclxuXHJcbiAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIChpdGVtVG9SZW1vdmUubmV3UHJpY2UgKiBpdGVtVG9SZW1vdmUucXVhbnRpdHkpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1FVQU5USVRZJykge1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1NVQl9RVUFOVElUWScpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2lmIHRoZSBxdCA9PSAwIHRoZW4gaXQgc2hvdWxkIGJlIHJlbW92ZWRcclxuICAgICAgICBpZiAoYWRkZWRJdGVtLnF1YW50aXR5ID09PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5pZClcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgLT0gMVxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1NISVBQSU5HJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgKz0gMzBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnU1VCX1NISVBQSU5HJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgLT0gMzBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnUkVTRVRfQ0FSVCcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogW10sXHJcbiAgICAgICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5jb25zdCBoYW5kbGVBZGRUb0NhcnQgPSBhc3luYyAocHJvZHVjdCwgYWNjb3VudElELCBxdWFudGl0eSkgPT57XHJcbiAgICB2YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBteUhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKVxyXG4gICAgICAgIGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkFQSV9IT1NUICsgJy9hcGkvc2hvcHBpbmctY2FydHMnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudElEOiBhY2NvdW50SUQsXHJcbiAgICAgICAgICAgICAgICAgICAgUHJvZHVjdElEOiBwcm9kdWN0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIFF1YW50aXR5OiBxdWFudGl0eSB8fCAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFVuaXRDb3N0OiBwcm9kdWN0LmF0dHJpYnV0ZXMuUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgU3VidG90YWw6ICBwcm9kdWN0LmF0dHJpYnV0ZXMuUHJpY2UsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBteUhlYWRlcnNcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Nob3BwaW5nQ2FydCwgc2V0U2hvcHBpbmdDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjYXJ0LCBkaXNwYXRjaENhcnRdID0gdXNlUmVkdWNlcihjYXJ0UmVkdWNlciwge1xyXG4gICAgICAgIHByb2R1Y3RzOiBbXSxcclxuICAgICAgICBhZGRlZEl0ZW1zOiBbXSxcclxuICAgICAgICB0b3RhbDogMCxcclxuICAgICAgICBzaGlwcGluZzogMCxcclxuICAgICAgICB1c2VyOiB1c2VyLmFjY291bnRcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9IChpZCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdSRU1PVkVfSVRFTScsIGlkOiBpZCB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkVG9DYXJ0ID0gKGlkKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ0FERF9UT19DQVJUJywgaWQ6IGlkIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBhZGRRdWFudGl0eSA9IChpZCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdBRERfUVVBTlRJVFknLCBpZDogaWQgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IHN1YlF1YW50aXR5ID0gKGlkKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ1NVQl9RVUFOVElUWScsIGlkOiBpZCB9KVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZWN0aFByb2R1Y3QoKTtcclxuICAgIH0sIFtdKVxyXG4gICAgY29uc3QgZmVjdGhQcm9kdWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHFzID0gcmVxdWlyZSgncXMnKTtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IHFzLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHNvcnQ6IFsnaWQ6ZGVzYycsXSxcclxuICAgICAgICAgICAgcG9wdWxhdGU6ICcqJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5BUElfSE9TVCArIGAvYXBpL3Byb2R1Y3RzPyR7cXVlcnl9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhICYmIHJlcy5kYXRhWzBdICYmIHJlcy5kYXRhWzBdLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhUHJvZHVjdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFQcm9kdWN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoWy4uLmRhdGFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnQUREX1BST0RVQ1RTJywgcGF5bG9hZDogZGF0YSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2Rpc3BhdGNoQ2FydCh7IHR5cGU6ICdJTklUX0NBUlQnLCBwYXlsb2FkOiBkYXRhIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGp3dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3Qta3R4c2hvcCcpO1xyXG4gICAgICAgICAgICBjb25zdCBxcnkgPSBxcy5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRJRDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZXE6IE51bWJlcihqd3QpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX0hPU1QgKyBgL2FwaS9zaG9wcGluZy1jYXJ0cz8ke3FyeX1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGFbMF0gJiYgcmVzLmRhdGFbMF0uYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFDYXJ0ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUNhcnQubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0NhcnQucHVzaChpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG9wcGluZ0NhcnQoWy4uLnNob3BwaW5nQ2FydF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdJTklUX0NBUlQnLCBwYXlsb2FkOiBzaG9wcGluZ0NhcnQgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcnRDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBjYXJ0OiBjYXJ0LFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbTogcmVtb3ZlSXRlbSxcclxuICAgICAgICAgICAgICAgIGFkZFRvQ2FydDogYWRkVG9DYXJ0LFxyXG4gICAgICAgICAgICAgICAgYWRkUXVhbnRpdHk6IGFkZFF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgc3ViUXVhbnRpdHk6IHN1YlF1YW50aXR5LFxyXG5cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
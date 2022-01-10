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

const handleAddToCart = async (product, accountID) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  await fetch("http://localhost:1337" + '/api/shopping-carts', {
    method: 'POST',
    body: JSON.stringify({
      data: {
        accountID: accountID,
        ProductID: product.id,
        Quantity: 1,
        UnitCost: product.attributes.Price,
        Subtotal: product.attributes.Price
      }
    }),
    headers: myHeaders
  }).then(response => response.json()).then(result => {});
};

const handleUpToCart = async (product, accountID) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  await fetch("http://localhost:1337" + '/api/shopping-carts', {
    method: 'POST',
    body: JSON.stringify({
      data: {
        accountID: accountID,
        ProductID: product.id,
        Quantity: 1,
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
      lineNumber: 281,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvQ2FydFByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicHJvZHVjdHNBcnJheSIsInBheWxvYWQiLCJwcm9kdWN0cyIsIm5ld1RvdGFsIiwidGVtcCIsImNhcnQiLCJpIiwibGVuZ3RoIiwicHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiaWQiLCJhdHRyaWJ1dGVzIiwiQWNjb3VudElEIiwiU3VidG90YWwiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImFkZGVkSXRlbXMiLCJ0b3RhbCIsImFkZGVkSXRlbSIsImV4aXN0ZWRfaXRlbSIsInF1YW50aXR5IiwibmV3UHJpY2UiLCJxdHkiLCJpdGVtVG9SZW1vdmUiLCJuZXdfaXRlbXMiLCJmaWx0ZXIiLCJzaGlwcGluZyIsImhhbmRsZUFkZFRvQ2FydCIsImFjY291bnRJRCIsIm15SGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJmZXRjaCIsInByb2Nlc3MiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJQcm9kdWN0SUQiLCJRdWFudGl0eSIsIlVuaXRDb3N0IiwiUHJpY2UiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsImhhbmRsZVVwVG9DYXJ0IiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwidXNlQ29udGV4dCIsIlVzZXJDb250ZXh0Iiwic2V0RGF0YSIsInVzZVN0YXRlIiwic2hvcHBpbmdDYXJ0Iiwic2V0U2hvcHBpbmdDYXJ0IiwiZGlzcGF0Y2hDYXJ0IiwidXNlUmVkdWNlciIsImFjY291bnQiLCJyZW1vdmVJdGVtIiwiYWRkVG9DYXJ0IiwiYWRkUXVhbnRpdHkiLCJzdWJRdWFudGl0eSIsInVzZUVmZmVjdCIsImZlY3RoUHJvZHVjdCIsInFzIiwicmVxdWlyZSIsInF1ZXJ5Iiwic29ydCIsInBvcHVsYXRlIiwiZW5jb2RlVmFsdWVzT25seSIsInJlcyIsImRhdGFQcm9kdWN0IiwibWFwIiwiaW5kZXgiLCJqd3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicXJ5IiwiZmlsdGVycyIsIiRlcSIsIk51bWJlciIsImRhdGFDYXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFdBQVcsR0FBRyxDQUFDQyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFHbkMsTUFBSUEsTUFBTSxDQUFDQyxJQUFQLEtBQWdCLGNBQXBCLEVBQW9DO0FBQ2hDLFFBQUlDLGFBQWEsR0FBRyxFQUFwQjtBQUNBQSxpQkFBYSxHQUFHRixNQUFNLENBQUNHLE9BQXZCLENBRmdDLENBSWhDOztBQUVBLDJDQUNPSixLQURQO0FBRUlLLGNBQVEsRUFBRUY7QUFGZDtBQUlIOztBQUNELE1BQUlGLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQixXQUFwQixFQUFpQztBQUM3QixRQUFJQyxhQUFhLEdBQUcsRUFBcEI7QUFDQUEsaUJBQWEsR0FBR0YsTUFBTSxDQUFDRyxPQUF2QixDQUY2QixDQUc3Qjs7QUFDQSxRQUFJRSxRQUFRLEdBQUcsQ0FBZixDQUo2QixDQUs3QjtBQUNBO0FBQ0E7O0FBQ0EsVUFBTUMsSUFBSSxHQUFHTixNQUFNLENBQUNHLE9BQXBCO0FBQ0EsUUFBSUksSUFBSSxHQUFHLEVBQVg7O0FBQ0EsU0FBSSxJQUFJQyxDQUFDLEdBQUUsQ0FBWCxFQUFjQSxDQUFDLEdBQUVSLE1BQU0sQ0FBQ0csT0FBUCxDQUFlTSxNQUFoQyxFQUF1Q0QsQ0FBQyxFQUF4QyxFQUEyQztBQUN2QyxZQUFNRSxPQUFPLEdBQUVYLEtBQUssQ0FBQ0ssUUFBTixDQUFlTyxJQUFmLENBQW9CQyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsRUFBTCxLQUFZUCxJQUFJLENBQUNFLENBQUQsQ0FBSixDQUFRTSxVQUFSLENBQW1CQyxTQUEzRCxDQUFmO0FBQ0lWLGNBQVEsSUFBSUMsSUFBSSxD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LFNBQ0ksTUFBQyw2REFBRCxDQUFhLFFBQWI7QUFDSSxTQUFLLEVBQUU7QUFDSHJELFVBQUksRUFBRUEsSUFESDtBQUVIMEQsZ0JBQVUsRUFBRUEsVUFGVDtBQUdIQyxlQUFTLEVBQUVBLFNBSFI7QUFJSEMsaUJBQVcsRUFBRUEsV0FKVjtBQUtIQyxpQkFBVyxFQUFFQTtBQUxWLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVLZCxRQVZMLENBREo7QUFlSCxDQXZGTTs7R0FBTUQsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy42Y2ZhZTBiMDgwOWFhY2FkMjRlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvVXNlckNvbnRleHRcIjtcclxuaW1wb3J0IENhcnRDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0cy9DYXJ0Q29udGV4dFwiO1xyXG5cclxuY29uc3QgY2FydFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfUFJPRFVDVFMnKSB7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RzQXJyYXkgPSBbXTtcclxuICAgICAgICBwcm9kdWN0c0FycmF5ID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd3d3cnLCBwcm9kdWN0c0FycmF5KVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzQXJyYXlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdJTklUX0NBUlQnKSB7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RzQXJyYXkgPSBbXTtcclxuICAgICAgICBwcm9kdWN0c0FycmF5ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gMDtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHByb2R1Y3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbmV3VG90YWwgKz0gcHJvZHVjdHNBcnJheVtpXS5hdHRyaWJ1dGVzLlByaWNlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBjb25zdCB0ZW1wID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgbGV0IGNhcnQgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPTA7IGk8IGFjdGlvbi5wYXlsb2FkLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID1zdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGVtcFtpXS5hdHRyaWJ1dGVzLkFjY291bnRJRCk7XHJcbiAgICAgICAgICAgICAgICBuZXdUb3RhbCArPSB0ZW1wW2ldLmF0dHJpYnV0ZXMuU3VidG90YWw7XHJcbiAgICAgICAgICAgIGNhcnQucHVzaCh7Li4udGVtcFtpXSwgcHJvZHVjdH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNhcnQpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IGNhcnQgLFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1RPX0NBUlQnKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYgKGV4aXN0ZWRfaXRlbSkge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gMVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IDE7XHJcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVInKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYgKGV4aXN0ZWRfaXRlbSkge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gYWN0aW9uLnF0eVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgKiBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSBhY3Rpb24ucXR5O1xyXG4gICAgICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSAqIGFjdGlvbi5xdHlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdSRU1PVkVfSVRFTScpIHtcclxuICAgICAgICBsZXQgaXRlbVRvUmVtb3ZlID0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW0gPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtID0+IGFjdGlvbi5pZCAhPT0gaXRlbS5pZClcclxuXHJcbiAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIChpdGVtVG9SZW1vdmUubmV3UHJpY2UgKiBpdGVtVG9SZW1vdmUucXVhbnRpdHkpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1FVQU5USVRZJykge1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1NVQl9RVUFOVElUWScpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2lmIHRoZSBxdCA9PSAwIHRoZW4gaXQgc2hvdWxkIGJlIHJlbW92ZWRcclxuICAgICAgICBpZiAoYWRkZWRJdGVtLnF1YW50aXR5ID09PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5pZClcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgLT0gMVxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1NISVBQSU5HJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgKz0gMzBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnU1VCX1NISVBQSU5HJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgLT0gMzBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnUkVTRVRfQ0FSVCcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogW10sXHJcbiAgICAgICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5jb25zdCBoYW5kbGVBZGRUb0NhcnQgPSBhc3luYyAocHJvZHVjdCwgYWNjb3VudElEKSA9PntcclxuICAgIHZhciBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIG15SGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpXHJcbiAgICAgICAgYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX0hPU1QgKyAnL2FwaS9zaG9wcGluZy1jYXJ0cycsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SUQ6IGFjY291bnRJRCxcclxuICAgICAgICAgICAgICAgICAgICBQcm9kdWN0SUQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgUXVhbnRpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgVW5pdENvc3Q6IHByb2R1Y3QuYXR0cmlidXRlcy5QcmljZSxcclxuICAgICAgICAgICAgICAgICAgICBTdWJ0b3RhbDogIHByb2R1Y3QuYXR0cmlidXRlcy5QcmljZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IG15SGVhZGVyc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgXHJcbn1cclxuY29uc3QgaGFuZGxlVXBUb0NhcnQgPSBhc3luYyAocHJvZHVjdCwgYWNjb3VudElEKSA9PntcclxuICAgIHZhciBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIG15SGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpXHJcbiAgICAgICAgYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX0hPU1QgKyAnL2FwaS9zaG9wcGluZy1jYXJ0cycsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SUQ6IGFjY291bnRJRCxcclxuICAgICAgICAgICAgICAgICAgICBQcm9kdWN0SUQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgUXVhbnRpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgVW5pdENvc3Q6IHByb2R1Y3QuYXR0cmlidXRlcy5QcmljZSxcclxuICAgICAgICAgICAgICAgICAgICBTdWJ0b3RhbDogIHByb2R1Y3QuYXR0cmlidXRlcy5QcmljZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IG15SGVhZGVyc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgXHJcbn1cclxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzaG9wcGluZ0NhcnQsIHNldFNob3BwaW5nQ2FydF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY2FydCwgZGlzcGF0Y2hDYXJ0XSA9IHVzZVJlZHVjZXIoY2FydFJlZHVjZXIsIHtcclxuICAgICAgICBwcm9kdWN0czogW10sXHJcbiAgICAgICAgYWRkZWRJdGVtczogW10sXHJcbiAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgc2hpcHBpbmc6IDAsXHJcbiAgICAgICAgdXNlcjogdXNlci5hY2NvdW50XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAoaWQpID0+IHtcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnUkVNT1ZFX0lURU0nLCBpZDogaWQgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFRvQ2FydCA9IChpZCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdBRERfVE9fQ0FSVCcsIGlkOiBpZCB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkUXVhbnRpdHkgPSAoaWQpID0+IHtcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnQUREX1FVQU5USVRZJywgaWQ6IGlkIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdWJRdWFudGl0eSA9IChpZCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdTVUJfUVVBTlRJVFknLCBpZDogaWQgfSlcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmVjdGhQcm9kdWN0KCk7XHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnN0IGZlY3RoUHJvZHVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBxcyA9IHJlcXVpcmUoJ3FzJyk7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBxcy5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBzb3J0OiBbJ2lkOmRlc2MnLF0sXHJcbiAgICAgICAgICAgIHBvcHVsYXRlOiAnKidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHk6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX0hPU1QgKyBgL2FwaS9wcm9kdWN0cz8ke3F1ZXJ5fWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YVswXSAmJiByZXMuZGF0YVswXS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YVByb2R1Y3QgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhUHJvZHVjdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKFsuLi5kYXRhXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ0FERF9QUk9EVUNUUycsIHBheWxvYWQ6IGRhdGEgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9kaXNwYXRjaENhcnQoeyB0eXBlOiAnSU5JVF9DQVJUJywgcGF5bG9hZDogZGF0YSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBqd3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0LWt0eHNob3AnKTtcclxuICAgICAgICAgICAgY29uc3QgcXJ5ID0gcXMuc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50SUQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGVxOiBOdW1iZXIoand0KSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkFQSV9IT1NUICsgYC9hcGkvc2hvcHBpbmctY2FydHM/JHtxcnl9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhICYmIHJlcy5kYXRhWzBdICYmIHJlcy5kYXRhWzBdLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhQ2FydCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFDYXJ0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdDYXJ0LnB1c2goaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvcHBpbmdDYXJ0KFsuLi5zaG9wcGluZ0NhcnRdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnSU5JVF9DQVJUJywgcGF5bG9hZDogc2hvcHBpbmdDYXJ0IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgY2FydDogY2FydCxcclxuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0sXHJcbiAgICAgICAgICAgICAgICBhZGRUb0NhcnQ6IGFkZFRvQ2FydCxcclxuICAgICAgICAgICAgICAgIGFkZFF1YW50aXR5OiBhZGRRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgIHN1YlF1YW50aXR5OiBzdWJRdWFudGl0eSxcclxuXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
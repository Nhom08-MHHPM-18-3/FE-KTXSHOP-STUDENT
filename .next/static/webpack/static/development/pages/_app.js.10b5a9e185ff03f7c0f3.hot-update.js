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
      lineNumber: 260,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvQ2FydFByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicHJvZHVjdHNBcnJheSIsInBheWxvYWQiLCJwcm9kdWN0cyIsIm5ld1RvdGFsIiwidGVtcCIsImNhcnQiLCJpIiwibGVuZ3RoIiwicHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiaWQiLCJhdHRyaWJ1dGVzIiwiQWNjb3VudElEIiwiU3VidG90YWwiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImFkZGVkSXRlbXMiLCJ0b3RhbCIsImFkZGVkSXRlbSIsImV4aXN0ZWRfaXRlbSIsInF1YW50aXR5IiwibmV3UHJpY2UiLCJxdHkiLCJpdGVtVG9SZW1vdmUiLCJuZXdfaXRlbXMiLCJmaWx0ZXIiLCJzaGlwcGluZyIsImhhbmRsZUFkZFRvQ2FydCIsImFjY291bnRJRCIsIm15SGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJmZXRjaCIsInByb2Nlc3MiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJQcm9kdWN0SUQiLCJRdWFudGl0eSIsIlVuaXRDb3N0IiwiUHJpY2UiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInNldERhdGEiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsImRpc3BhdGNoQ2FydCIsInVzZVJlZHVjZXIiLCJhY2NvdW50IiwicmVtb3ZlSXRlbSIsImFkZFRvQ2FydCIsImFkZFF1YW50aXR5Iiwic3ViUXVhbnRpdHkiLCJ1c2VFZmZlY3QiLCJmZWN0aFByb2R1Y3QiLCJxcyIsInJlcXVpcmUiLCJxdWVyeSIsInNvcnQiLCJwb3B1bGF0ZSIsImVuY29kZVZhbHVlc09ubHkiLCJyZXMiLCJkYXRhUHJvZHVjdCIsIm1hcCIsImluZGV4Iiwiand0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInFyeSIsImZpbHRlcnMiLCIkZXEiLCJOdW1iZXIiLCJkYXRhQ2FydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBR25DLE1BQUlBLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQixjQUFwQixFQUFvQztBQUNoQyxRQUFJQyxhQUFhLEdBQUcsRUFBcEI7QUFDQUEsaUJBQWEsR0FBR0YsTUFBTSxDQUFDRyxPQUF2QixDQUZnQyxDQUloQzs7QUFFQSwyQ0FDT0osS0FEUDtBQUVJSyxjQUFRLEVBQUVGO0FBRmQ7QUFJSDs7QUFDRCxNQUFJRixNQUFNLENBQUNDLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDN0IsUUFBSUMsYUFBYSxHQUFHLEVBQXBCO0FBQ0FBLGlCQUFhLEdBQUdGLE1BQU0sQ0FBQ0csT0FBdkIsQ0FGNkIsQ0FHN0I7O0FBQ0EsUUFBSUUsUUFBUSxHQUFHLENBQWYsQ0FKNkIsQ0FLN0I7QUFDQTtBQUNBOztBQUNBLFVBQU1DLElBQUksR0FBR04sTUFBTSxDQUFDRyxPQUFwQjtBQUNBLFFBQUlJLElBQUksR0FBRyxFQUFYOztBQUNBLFNBQUksSUFBSUMsQ0FBQyxHQUFFLENBQVgsRUFBY0EsQ0FBQyxHQUFFUixNQUFNLENBQUNHLE9BQVAsQ0FBZU0sTUFBaEMsRUFBdUNELENBQUMsRUFBeEMsRUFBMkM7QUFDdkMsWUFBTUUsT0FBTyxHQUFFWCxLQUFLLENBQUNLLFFBQU4sQ0FBZU8sSUFBZixDQUFvQkMsSUFBSSxJQUFJQSxJQUFJLENBQUNDLEVBQUwsS0FBWVAsSUFBSSxDQUFDRSxDQUFELENBQUosQ0FBUU0sVUFBUixDQUFtQkMsU0FBM0QsQ0FBZjtBQUNJVixjQUFRLElBQUlDLElBQUksQ0FBQ0UsQ0FBRCxDQUFKLENB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Q0FBQ2xDLElBQXJCO0FBQ0E2QyxnQkFBUSxDQUFDVCxHQUFULENBQWEsQ0FBQ2xFLElBQUQsRUFBT21FLEtBQVAsS0FBaUI7QUFDMUJwQixzQkFBWSxDQUFDMUMsSUFBYixDQUFrQkwsSUFBbEI7QUFDQWdELHlCQUFlLENBQUMsQ0FBQyxHQUFHRCxZQUFKLENBQUQsQ0FBZjtBQUNBRSxzQkFBWSxDQUFDO0FBQUU1RCxnQkFBSSxFQUFFLFdBQVI7QUFBcUJFLG1CQUFPLEVBQUV3RDtBQUE5QixXQUFELENBQVo7QUFDSCxTQUpEO0FBS0g7QUFDSixLQVhLLENBQU47QUFZUCxHQTVDRDs7QUE2Q0EsU0FDSSxNQUFDLDZEQUFELENBQWEsUUFBYjtBQUNJLFNBQUssRUFBRTtBQUNIcEQsVUFBSSxFQUFFQSxJQURIO0FBRUh5RCxnQkFBVSxFQUFFQSxVQUZUO0FBR0hDLGVBQVMsRUFBRUEsU0FIUjtBQUlIQyxpQkFBVyxFQUFFQSxXQUpWO0FBS0hDLGlCQUFXLEVBQUVBO0FBTFYsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUtkLFFBVkwsQ0FESjtBQWVILENBdkZNOztHQUFNRCxZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjEwYjVhOWUxODVmZjAzZjdjMGYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9Vc2VyQ29udGV4dFwiO1xyXG5pbXBvcnQgQ2FydENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHRzL0NhcnRDb250ZXh0XCI7XHJcblxyXG5jb25zdCBjYXJ0UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FERF9QUk9EVUNUUycpIHtcclxuICAgICAgICBsZXQgcHJvZHVjdHNBcnJheSA9IFtdO1xyXG4gICAgICAgIHByb2R1Y3RzQXJyYXkgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3d3dycsIHByb2R1Y3RzQXJyYXkpXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdHNBcnJheVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0lOSVRfQ0FSVCcpIHtcclxuICAgICAgICBsZXQgcHJvZHVjdHNBcnJheSA9IFtdO1xyXG4gICAgICAgIHByb2R1Y3RzQXJyYXkgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSAwO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZHVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBuZXdUb3RhbCArPSBwcm9kdWN0c0FycmF5W2ldLmF0dHJpYnV0ZXMuUHJpY2U7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGNvbnN0IHRlbXAgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBsZXQgY2FydCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9MDsgaTwgYWN0aW9uLnBheWxvYWQubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPXN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSB0ZW1wW2ldLmF0dHJpYnV0ZXMuQWNjb3VudElEKTtcclxuICAgICAgICAgICAgICAgIG5ld1RvdGFsICs9IHRlbXBbaV0uYXR0cmlidXRlcy5TdWJ0b3RhbDtcclxuICAgICAgICAgICAgY2FydC5wdXNoKHsuLi50ZW1wW2ldLCBwcm9kdWN0fSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coY2FydClcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogY2FydCAsXHJcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfVE9fQ0FSVCcpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXHJcbiAgICAgICAgbGV0IGV4aXN0ZWRfaXRlbSA9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtID0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICBpZiAoZXhpc3RlZF9pdGVtKSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ID0gMTtcclxuICAgICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FERF9RVUFOVElUWV9XSVRIX05VTUJFUicpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXHJcbiAgICAgICAgbGV0IGV4aXN0ZWRfaXRlbSA9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtID0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICBpZiAoZXhpc3RlZF9pdGVtKSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSAqIGFjdGlvbi5xdHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IGFjdGlvbi5xdHk7XHJcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlICogYWN0aW9uLnF0eVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogWy4uLnN0YXRlLmFkZGVkSXRlbXMsIGFkZGVkSXRlbV0sXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1JFTU9WRV9JVEVNJykge1xyXG4gICAgICAgIGxldCBpdGVtVG9SZW1vdmUgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW0gPT4gYWN0aW9uLmlkICE9PSBpdGVtLmlkKVxyXG5cclxuICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gKGl0ZW1Ub1JlbW92ZS5uZXdQcmljZSAqIGl0ZW1Ub1JlbW92ZS5xdWFudGl0eSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXHJcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfUVVBTlRJVFknKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IDFcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnU1VCX1FVQU5USVRZJykge1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIC8vaWYgdGhlIHF0ID09IDAgdGhlbiBpdCBzaG91bGQgYmUgcmVtb3ZlZFxyXG4gICAgICAgIGlmIChhZGRlZEl0ZW0ucXVhbnRpdHkgPT09IDEpIHtcclxuICAgICAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gYWN0aW9uLmlkKVxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSAtPSAxXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gYWRkZWRJdGVtLm5ld1ByaWNlXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfU0hJUFBJTkcnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyArPSAzMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdTVUJfU0hJUFBJTkcnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyAtPSAzMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdSRVNFVF9DQVJUJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBbXSxcclxuICAgICAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcbmNvbnN0IGhhbmRsZUFkZFRvQ2FydCA9IGFzeW5jIChwcm9kdWN0LCBhY2NvdW50SUQpID0+e1xyXG4gICAgdmFyIG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgbXlIZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIilcclxuICAgICAgICBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5BUElfSE9TVCArICcvYXBpL3Nob3BwaW5nLWNhcnRzJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnRJRDogYWNjb3VudElELFxyXG4gICAgICAgICAgICAgICAgICAgIFByb2R1Y3RJRDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBRdWFudGl0eTogMSxcclxuICAgICAgICAgICAgICAgICAgICBVbml0Q29zdDogcHJvZHVjdC5hdHRyaWJ1dGVzLlByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIFN1YnRvdGFsOiAgcHJvZHVjdC5hdHRyaWJ1dGVzLlByaWNlLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgaGVhZGVyczogbXlIZWFkZXJzXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzaG9wcGluZ0NhcnQsIHNldFNob3BwaW5nQ2FydF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY2FydCwgZGlzcGF0Y2hDYXJ0XSA9IHVzZVJlZHVjZXIoY2FydFJlZHVjZXIsIHtcclxuICAgICAgICBwcm9kdWN0czogW10sXHJcbiAgICAgICAgYWRkZWRJdGVtczogW10sXHJcbiAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgc2hpcHBpbmc6IDAsXHJcbiAgICAgICAgdXNlcjogdXNlci5hY2NvdW50XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAoaWQpID0+IHtcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnUkVNT1ZFX0lURU0nLCBpZDogaWQgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFRvQ2FydCA9IChpZCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdBRERfVE9fQ0FSVCcsIGlkOiBpZCB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkUXVhbnRpdHkgPSAoaWQpID0+IHtcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnQUREX1FVQU5USVRZJywgaWQ6IGlkIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdWJRdWFudGl0eSA9IChpZCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdTVUJfUVVBTlRJVFknLCBpZDogaWQgfSlcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmVjdGhQcm9kdWN0KCk7XHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnN0IGZlY3RoUHJvZHVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBxcyA9IHJlcXVpcmUoJ3FzJyk7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBxcy5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBzb3J0OiBbJ2lkOmRlc2MnLF0sXHJcbiAgICAgICAgICAgIHBvcHVsYXRlOiAnKidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHk6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX0hPU1QgKyBgL2FwaS9wcm9kdWN0cz8ke3F1ZXJ5fWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YVswXSAmJiByZXMuZGF0YVswXS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YVByb2R1Y3QgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhUHJvZHVjdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKFsuLi5kYXRhXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ0FERF9QUk9EVUNUUycsIHBheWxvYWQ6IGRhdGEgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9kaXNwYXRjaENhcnQoeyB0eXBlOiAnSU5JVF9DQVJUJywgcGF5bG9hZDogZGF0YSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBqd3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0LWt0eHNob3AnKTtcclxuICAgICAgICAgICAgY29uc3QgcXJ5ID0gcXMuc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50SUQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGVxOiBOdW1iZXIoand0KSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkFQSV9IT1NUICsgYC9hcGkvc2hvcHBpbmctY2FydHM/JHtxcnl9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhICYmIHJlcy5kYXRhWzBdICYmIHJlcy5kYXRhWzBdLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhQ2FydCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFDYXJ0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdDYXJ0LnB1c2goaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvcHBpbmdDYXJ0KFsuLi5zaG9wcGluZ0NhcnRdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnSU5JVF9DQVJUJywgcGF5bG9hZDogc2hvcHBpbmdDYXJ0IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgY2FydDogY2FydCxcclxuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0sXHJcbiAgICAgICAgICAgICAgICBhZGRUb0NhcnQ6IGFkZFRvQ2FydCxcclxuICAgICAgICAgICAgICAgIGFkZFF1YW50aXR5OiBhZGRRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgIHN1YlF1YW50aXR5OiBzdWJRdWFudGl0eSxcclxuXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
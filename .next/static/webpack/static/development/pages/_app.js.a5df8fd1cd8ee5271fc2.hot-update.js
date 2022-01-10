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

const handleUpDateToCart = async (product, accountID) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvQ2FydFByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicHJvZHVjdHNBcnJheSIsInBheWxvYWQiLCJwcm9kdWN0cyIsIm5ld1RvdGFsIiwidGVtcCIsImNhcnQiLCJpIiwibGVuZ3RoIiwicHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiaWQiLCJhdHRyaWJ1dGVzIiwiQWNjb3VudElEIiwiU3VidG90YWwiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImFkZGVkSXRlbXMiLCJ0b3RhbCIsImFkZGVkSXRlbSIsImV4aXN0ZWRfaXRlbSIsInF1YW50aXR5IiwibmV3UHJpY2UiLCJxdHkiLCJpdGVtVG9SZW1vdmUiLCJuZXdfaXRlbXMiLCJmaWx0ZXIiLCJzaGlwcGluZyIsImhhbmRsZUFkZFRvQ2FydCIsImFjY291bnRJRCIsIm15SGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJmZXRjaCIsInByb2Nlc3MiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJQcm9kdWN0SUQiLCJRdWFudGl0eSIsIlVuaXRDb3N0IiwiUHJpY2UiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsImhhbmRsZVVwRGF0ZVRvQ2FydCIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInNldERhdGEiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsImRpc3BhdGNoQ2FydCIsInVzZVJlZHVjZXIiLCJhY2NvdW50IiwicmVtb3ZlSXRlbSIsImFkZFRvQ2FydCIsImFkZFF1YW50aXR5Iiwic3ViUXVhbnRpdHkiLCJ1c2VFZmZlY3QiLCJmZWN0aFByb2R1Y3QiLCJxcyIsInJlcXVpcmUiLCJxdWVyeSIsInNvcnQiLCJwb3B1bGF0ZSIsImVuY29kZVZhbHVlc09ubHkiLCJyZXMiLCJkYXRhUHJvZHVjdCIsIm1hcCIsImluZGV4Iiwiand0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInFyeSIsImZpbHRlcnMiLCIkZXEiLCJOdW1iZXIiLCJkYXRhQ2FydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBR25DLE1BQUlBLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQixjQUFwQixFQUFvQztBQUNoQyxRQUFJQyxhQUFhLEdBQUcsRUFBcEI7QUFDQUEsaUJBQWEsR0FBR0YsTUFBTSxDQUFDRyxPQUF2QixDQUZnQyxDQUloQzs7QUFFQSwyQ0FDT0osS0FEUDtBQUVJSyxjQUFRLEVBQUVGO0FBRmQ7QUFJSDs7QUFDRCxNQUFJRixNQUFNLENBQUNDLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDN0IsUUFBSUMsYUFBYSxHQUFHLEVBQXBCO0FBQ0FBLGlCQUFhLEdBQUdGLE1BQU0sQ0FBQ0csT0FBdkIsQ0FGNkIsQ0FHN0I7O0FBQ0EsUUFBSUUsUUFBUSxHQUFHLENBQWYsQ0FKNkIsQ0FLN0I7QUFDQTtBQUNBOztBQUNBLFVBQU1DLElBQUksR0FBR04sTUFBTSxDQUFDRyxPQUFwQjtBQUNBLFFBQUlJLElBQUksR0FBRyxFQUFYOztBQUNBLFNBQUksSUFBSUMsQ0FBQyxHQUFFLENBQVgsRUFBY0EsQ0FBQyxHQUFFUixNQUFNLENBQUNHLE9BQVAsQ0FBZU0sTUFBaEMsRUFBdUNELENBQUMsRUFBeEMsRUFBMkM7QUFDdkMsWUFBTUUsT0FBTyxHQUFFWCxLQUFLLENBQUNLLFFBQU4sQ0FBZU8sSUFBZixDQUFvQkMsSUFBSSxJQUFJQSxJQUFJLENBQUNDLEVBQUwsS0FBWVAsSUFBSSxDQUFDRSxDQUFELENBQUosQ0FBUU0sVUFBUixDQUFtQkMsU0FBM0QsQ0FBZjtBQUNJVixjQUFRLElBQUlDLElB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O0FBNkNBLFNBQ0ksTUFBQyw2REFBRCxDQUFhLFFBQWI7QUFDSSxTQUFLLEVBQUU7QUFDSHJELFVBQUksRUFBRUEsSUFESDtBQUVIMEQsZ0JBQVUsRUFBRUEsVUFGVDtBQUdIQyxlQUFTLEVBQUVBLFNBSFI7QUFJSEMsaUJBQVcsRUFBRUEsV0FKVjtBQUtIQyxpQkFBVyxFQUFFQTtBQUxWLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVLZCxRQVZMLENBREo7QUFlSCxDQXZGTTs7R0FBTUQsWTs7S0FBQUEsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5hNWRmOGZkMWNkOGVlNTI3MWZjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvVXNlckNvbnRleHRcIjtcclxuaW1wb3J0IENhcnRDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0cy9DYXJ0Q29udGV4dFwiO1xyXG5cclxuY29uc3QgY2FydFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfUFJPRFVDVFMnKSB7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RzQXJyYXkgPSBbXTtcclxuICAgICAgICBwcm9kdWN0c0FycmF5ID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd3d3cnLCBwcm9kdWN0c0FycmF5KVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzQXJyYXlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdJTklUX0NBUlQnKSB7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RzQXJyYXkgPSBbXTtcclxuICAgICAgICBwcm9kdWN0c0FycmF5ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gMDtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHByb2R1Y3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbmV3VG90YWwgKz0gcHJvZHVjdHNBcnJheVtpXS5hdHRyaWJ1dGVzLlByaWNlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBjb25zdCB0ZW1wID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgbGV0IGNhcnQgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPTA7IGk8IGFjdGlvbi5wYXlsb2FkLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0ID1zdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gdGVtcFtpXS5hdHRyaWJ1dGVzLkFjY291bnRJRCk7XHJcbiAgICAgICAgICAgICAgICBuZXdUb3RhbCArPSB0ZW1wW2ldLmF0dHJpYnV0ZXMuU3VidG90YWw7XHJcbiAgICAgICAgICAgIGNhcnQucHVzaCh7Li4udGVtcFtpXSwgcHJvZHVjdH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNhcnQpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IGNhcnQgLFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1RPX0NBUlQnKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYgKGV4aXN0ZWRfaXRlbSkge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gMVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IDE7XHJcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVInKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYgKGV4aXN0ZWRfaXRlbSkge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gYWN0aW9uLnF0eVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgKiBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSBhY3Rpb24ucXR5O1xyXG4gICAgICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSAqIGFjdGlvbi5xdHlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdSRU1PVkVfSVRFTScpIHtcclxuICAgICAgICBsZXQgaXRlbVRvUmVtb3ZlID0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW0gPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtID0+IGFjdGlvbi5pZCAhPT0gaXRlbS5pZClcclxuXHJcbiAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIChpdGVtVG9SZW1vdmUubmV3UHJpY2UgKiBpdGVtVG9SZW1vdmUucXVhbnRpdHkpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1FVQU5USVRZJykge1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1NVQl9RVUFOVElUWScpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2lmIHRoZSBxdCA9PSAwIHRoZW4gaXQgc2hvdWxkIGJlIHJlbW92ZWRcclxuICAgICAgICBpZiAoYWRkZWRJdGVtLnF1YW50aXR5ID09PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5pZClcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgLT0gMVxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1NISVBQSU5HJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgKz0gMzBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnU1VCX1NISVBQSU5HJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgLT0gMzBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnUkVTRVRfQ0FSVCcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogW10sXHJcbiAgICAgICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5jb25zdCBoYW5kbGVBZGRUb0NhcnQgPSBhc3luYyAocHJvZHVjdCwgYWNjb3VudElEKSA9PntcclxuICAgIHZhciBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIG15SGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpXHJcbiAgICAgICAgYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX0hPU1QgKyAnL2FwaS9zaG9wcGluZy1jYXJ0cycsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SUQ6IGFjY291bnRJRCxcclxuICAgICAgICAgICAgICAgICAgICBQcm9kdWN0SUQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgUXVhbnRpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgVW5pdENvc3Q6IHByb2R1Y3QuYXR0cmlidXRlcy5QcmljZSxcclxuICAgICAgICAgICAgICAgICAgICBTdWJ0b3RhbDogIHByb2R1Y3QuYXR0cmlidXRlcy5QcmljZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IG15SGVhZGVyc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgXHJcbn1cclxuY29uc3QgaGFuZGxlVXBEYXRlVG9DYXJ0ID0gYXN5bmMgKHByb2R1Y3QsIGFjY291bnRJRCkgPT57XHJcbiAgICB2YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBteUhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKVxyXG4gICAgICAgIGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkFQSV9IT1NUICsgJy9hcGkvc2hvcHBpbmctY2FydHMnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudElEOiBhY2NvdW50SUQsXHJcbiAgICAgICAgICAgICAgICAgICAgUHJvZHVjdElEOiBwcm9kdWN0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIFF1YW50aXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFVuaXRDb3N0OiBwcm9kdWN0LmF0dHJpYnV0ZXMuUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgU3VidG90YWw6ICBwcm9kdWN0LmF0dHJpYnV0ZXMuUHJpY2UsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBteUhlYWRlcnNcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgIFxyXG59XHJcbmV4cG9ydCBjb25zdCBDYXJ0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2hvcHBpbmdDYXJ0LCBzZXRTaG9wcGluZ0NhcnRdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NhcnQsIGRpc3BhdGNoQ2FydF0gPSB1c2VSZWR1Y2VyKGNhcnRSZWR1Y2VyLCB7XHJcbiAgICAgICAgcHJvZHVjdHM6IFtdLFxyXG4gICAgICAgIGFkZGVkSXRlbXM6IFtdLFxyXG4gICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgIHNoaXBwaW5nOiAwLFxyXG4gICAgICAgIHVzZXI6IHVzZXIuYWNjb3VudFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCByZW1vdmVJdGVtID0gKGlkKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ1JFTU9WRV9JVEVNJywgaWQ6IGlkIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBhZGRUb0NhcnQgPSAoaWQpID0+IHtcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnQUREX1RPX0NBUlQnLCBpZDogaWQgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFF1YW50aXR5ID0gKGlkKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ0FERF9RVUFOVElUWScsIGlkOiBpZCB9KVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3ViUXVhbnRpdHkgPSAoaWQpID0+IHtcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnU1VCX1FVQU5USVRZJywgaWQ6IGlkIH0pXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZlY3RoUHJvZHVjdCgpO1xyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCBmZWN0aFByb2R1Y3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcXMgPSByZXF1aXJlKCdxcycpO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgc29ydDogWydpZDpkZXNjJyxdLFxyXG4gICAgICAgICAgICBwb3B1bGF0ZTogJyonXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5OiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkFQSV9IT1NUICsgYC9hcGkvcHJvZHVjdHM/JHtxdWVyeX1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGFbMF0gJiYgcmVzLmRhdGFbMF0uYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFQcm9kdWN0ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVByb2R1Y3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShbLi4uZGF0YV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdBRERfUFJPRFVDVFMnLCBwYXlsb2FkOiBkYXRhIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ0lOSVRfQ0FSVCcsIHBheWxvYWQ6IGRhdGEgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3Qgand0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2p3dC1rdHhzaG9wJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHFyeSA9IHFzLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQWNjb3VudElEOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRlcTogTnVtYmVyKGp3dCksXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHk6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5BUElfSE9TVCArIGAvYXBpL3Nob3BwaW5nLWNhcnRzPyR7cXJ5fWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YVswXSAmJiByZXMuZGF0YVswXS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YUNhcnQgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhQ2FydC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3BwaW5nQ2FydC5wdXNoKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3BwaW5nQ2FydChbLi4uc2hvcHBpbmdDYXJ0XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ0lOSVRfQ0FSVCcsIHBheWxvYWQ6IHNob3BwaW5nQ2FydCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FydENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIGNhcnQ6IGNhcnQsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVJdGVtOiByZW1vdmVJdGVtLFxyXG4gICAgICAgICAgICAgICAgYWRkVG9DYXJ0OiBhZGRUb0NhcnQsXHJcbiAgICAgICAgICAgICAgICBhZGRRdWFudGl0eTogYWRkUXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICBzdWJRdWFudGl0eTogc3ViUXVhbnRpdHksXHJcblxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=
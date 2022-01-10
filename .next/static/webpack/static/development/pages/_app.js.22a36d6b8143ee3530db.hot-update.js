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

    handleAddToCart(addedItem);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvQ2FydFByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicHJvZHVjdHNBcnJheSIsInBheWxvYWQiLCJwcm9kdWN0cyIsIm5ld1RvdGFsIiwidGVtcCIsImNhcnQiLCJpIiwibGVuZ3RoIiwicHJvZHVjdCIsImZpbmQiLCJpdGVtIiwiaWQiLCJhdHRyaWJ1dGVzIiwiQWNjb3VudElEIiwiU3VidG90YWwiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImFkZGVkSXRlbXMiLCJ0b3RhbCIsImFkZGVkSXRlbSIsImhhbmRsZUFkZFRvQ2FydCIsIm5ld1ByaWNlIiwiZXhpc3RlZF9pdGVtIiwicXVhbnRpdHkiLCJxdHkiLCJpdGVtVG9SZW1vdmUiLCJuZXdfaXRlbXMiLCJmaWx0ZXIiLCJzaGlwcGluZyIsImFjY291bnRJRCIsIm15SGVhZGVycyIsIkhlYWRlcnMiLCJhcHBlbmQiLCJmZXRjaCIsInByb2Nlc3MiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJQcm9kdWN0SUQiLCJRdWFudGl0eSIsIlVuaXRDb3N0IiwiUHJpY2UiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInNldERhdGEiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsImRpc3BhdGNoQ2FydCIsInVzZVJlZHVjZXIiLCJhY2NvdW50IiwicmVtb3ZlSXRlbSIsImFkZFRvQ2FydCIsImFkZFF1YW50aXR5Iiwic3ViUXVhbnRpdHkiLCJ1c2VFZmZlY3QiLCJmZWN0aFByb2R1Y3QiLCJxcyIsInJlcXVpcmUiLCJxdWVyeSIsInNvcnQiLCJwb3B1bGF0ZSIsImVuY29kZVZhbHVlc09ubHkiLCJyZXMiLCJkYXRhUHJvZHVjdCIsIm1hcCIsImluZGV4Iiwiand0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInFyeSIsImZpbHRlcnMiLCIkZXEiLCJOdW1iZXIiLCJkYXRhQ2FydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBR25DLE1BQUlBLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQixjQUFwQixFQUFvQztBQUNoQyxRQUFJQyxhQUFhLEdBQUcsRUFBcEI7QUFDQUEsaUJBQWEsR0FBR0YsTUFBTSxDQUFDRyxPQUF2QixDQUZnQyxDQUloQzs7QUFFQSwyQ0FDT0osS0FEUDtBQUVJSyxjQUFRLEVBQUVGO0FBRmQ7QUFJSDs7QUFDRCxNQUFJRixNQUFNLENBQUNDLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDN0IsUUFBSUMsYUFBYSxHQUFHLEVBQXBCO0FBQ0FBLGlCQUFhLEdBQUdGLE1BQU0sQ0FBQ0csT0FBdkIsQ0FGNkIsQ0FHN0I7O0FBQ0EsUUFBSUUsUUFBUSxHQUFHLENBQWYsQ0FKNkIsQ0FLN0I7QUFDQTtBQUNBOztBQUNBLFVBQU1DLElBQUksR0FBR04sTUFBTSxDQUFDRyxPQUFwQjtBQUNBLFFBQUlJLElBQUksR0FBRyxFQUFYOztBQUNBLFNBQUksSUFBSUMsQ0FBQyxHQUFFLENBQVgsRUFBY0EsQ0FBQyxHQUFFUixNQUFNLENBQUNHLE9BQVAsQ0FBZU0sTUFBaEMsRUFBdUNELENBQUMsRUFBeEMsRUFBMkM7QUFDdkMsWUFBTUUsT0FBTyxHQUFFWCxLQUFLLENBQUNLLFFBQU4sQ0FBZU8sSUFBZixDQUFvQkMsSUFBSSxJQUFJQSxJQUFJLENBQUNDLEVBQUwsS0FBWVAsSUFBSSxDQUFDRSxDQUFELENBQUosQ0FBUU0sVUFBUixDQUFtQkMsU0FBM0QsQ0FBZjtBQUNJVixjQUFRLElBQUlDLElBQUksQ0FBQ0UsQ0FBRCxDQUFKLENB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QUV3RDtBQUE5QixXQUFELENBQVo7QUFDSCxTQUpEO0FBS0g7QUFDSixLQVhLLENBQU47QUFZUCxHQTVDRDs7QUE2Q0EsU0FDSSxNQUFDLDZEQUFELENBQWEsUUFBYjtBQUNJLFNBQUssRUFBRTtBQUNIcEQsVUFBSSxFQUFFQSxJQURIO0FBRUh5RCxnQkFBVSxFQUFFQSxVQUZUO0FBR0hDLGVBQVMsRUFBRUEsU0FIUjtBQUlIQyxpQkFBVyxFQUFFQSxXQUpWO0FBS0hDLGlCQUFXLEVBQUVBO0FBTFYsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBVUtkLFFBVkwsQ0FESjtBQWVILENBdkZNOztHQUFNRCxZOztLQUFBQSxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjIyYTM2ZDZiODE0M2VlMzUzMGRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZHVjZXIsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9Vc2VyQ29udGV4dFwiO1xyXG5pbXBvcnQgQ2FydENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHRzL0NhcnRDb250ZXh0XCI7XHJcblxyXG5jb25zdCBjYXJ0UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcblxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FERF9QUk9EVUNUUycpIHtcclxuICAgICAgICBsZXQgcHJvZHVjdHNBcnJheSA9IFtdO1xyXG4gICAgICAgIHByb2R1Y3RzQXJyYXkgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3d3dycsIHByb2R1Y3RzQXJyYXkpXHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBwcm9kdWN0czogcHJvZHVjdHNBcnJheVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0lOSVRfQ0FSVCcpIHtcclxuICAgICAgICBsZXQgcHJvZHVjdHNBcnJheSA9IFtdO1xyXG4gICAgICAgIHByb2R1Y3RzQXJyYXkgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSAwO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZHVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBuZXdUb3RhbCArPSBwcm9kdWN0c0FycmF5W2ldLmF0dHJpYnV0ZXMuUHJpY2U7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGNvbnN0IHRlbXAgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBsZXQgY2FydCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9MDsgaTwgYWN0aW9uLnBheWxvYWQubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPXN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSB0ZW1wW2ldLmF0dHJpYnV0ZXMuQWNjb3VudElEKTtcclxuICAgICAgICAgICAgICAgIG5ld1RvdGFsICs9IHRlbXBbaV0uYXR0cmlidXRlcy5TdWJ0b3RhbDtcclxuICAgICAgICAgICAgY2FydC5wdXNoKHsuLi50ZW1wW2ldLCBwcm9kdWN0fSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coY2FydClcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogY2FydCAsXHJcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfVE9fQ0FSVCcpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXHJcbiAgICAgICAgLy8gbGV0IGV4aXN0ZWRfaXRlbSA9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtID0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICAvLyBpZiAoZXhpc3RlZF9pdGVtKSB7XHJcbiAgICAgICAgLy8gICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxXHJcbiAgICAgICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgYWRkZWRJdGVtLnF1YW50aXR5ID0gMTtcclxuICAgICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgICAgICAgICAgaGFuZGxlQWRkVG9DYXJ0KGFkZGVkSXRlbSwgKVxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogWy4uLnN0YXRlLmFkZGVkSXRlbXMsIGFkZGVkSXRlbV0sXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVInKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYgKGV4aXN0ZWRfaXRlbSkge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gYWN0aW9uLnF0eVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgKiBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSBhY3Rpb24ucXR5O1xyXG4gICAgICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSAqIGFjdGlvbi5xdHlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdSRU1PVkVfSVRFTScpIHtcclxuICAgICAgICBsZXQgaXRlbVRvUmVtb3ZlID0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW0gPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtID0+IGFjdGlvbi5pZCAhPT0gaXRlbS5pZClcclxuXHJcbiAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIChpdGVtVG9SZW1vdmUubmV3UHJpY2UgKiBpdGVtVG9SZW1vdmUucXVhbnRpdHkpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1FVQU5USVRZJykge1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1NVQl9RVUFOVElUWScpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2lmIHRoZSBxdCA9PSAwIHRoZW4gaXQgc2hvdWxkIGJlIHJlbW92ZWRcclxuICAgICAgICBpZiAoYWRkZWRJdGVtLnF1YW50aXR5ID09PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5pZClcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgLT0gMVxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1NISVBQSU5HJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgKz0gMzBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnU1VCX1NISVBQSU5HJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgLT0gMzBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnUkVTRVRfQ0FSVCcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogW10sXHJcbiAgICAgICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5jb25zdCBoYW5kbGVBZGRUb0NhcnQgPSBhc3luYyAocHJvZHVjdCwgYWNjb3VudElELCBxdWFudGl0eSkgPT57XHJcbiAgICB2YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBteUhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKVxyXG4gICAgICAgIGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkFQSV9IT1NUICsgJy9hcGkvc2hvcHBpbmctY2FydHMnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudElEOiBhY2NvdW50SUQsXHJcbiAgICAgICAgICAgICAgICAgICAgUHJvZHVjdElEOiBwcm9kdWN0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIFF1YW50aXR5OiBxdWFudGl0eSB8fCAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFVuaXRDb3N0OiBwcm9kdWN0LmF0dHJpYnV0ZXMuUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgU3VidG90YWw6ICBwcm9kdWN0LmF0dHJpYnV0ZXMuUHJpY2UsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBteUhlYWRlcnNcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Nob3BwaW5nQ2FydCwgc2V0U2hvcHBpbmdDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjYXJ0LCBkaXNwYXRjaENhcnRdID0gdXNlUmVkdWNlcihjYXJ0UmVkdWNlciwge1xyXG4gICAgICAgIHByb2R1Y3RzOiBbXSxcclxuICAgICAgICBhZGRlZEl0ZW1zOiBbXSxcclxuICAgICAgICB0b3RhbDogMCxcclxuICAgICAgICBzaGlwcGluZzogMCxcclxuICAgICAgICB1c2VyOiB1c2VyLmFjY291bnRcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9IChpZCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdSRU1PVkVfSVRFTScsIGlkOiBpZCB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkVG9DYXJ0ID0gKGlkKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ0FERF9UT19DQVJUJywgaWQ6IGlkIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBhZGRRdWFudGl0eSA9IChpZCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdBRERfUVVBTlRJVFknLCBpZDogaWQgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IHN1YlF1YW50aXR5ID0gKGlkKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ1NVQl9RVUFOVElUWScsIGlkOiBpZCB9KVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZWN0aFByb2R1Y3QoKTtcclxuICAgIH0sIFtdKVxyXG4gICAgY29uc3QgZmVjdGhQcm9kdWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHFzID0gcmVxdWlyZSgncXMnKTtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IHFzLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHNvcnQ6IFsnaWQ6ZGVzYycsXSxcclxuICAgICAgICAgICAgcG9wdWxhdGU6ICcqJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5BUElfSE9TVCArIGAvYXBpL3Byb2R1Y3RzPyR7cXVlcnl9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhICYmIHJlcy5kYXRhWzBdICYmIHJlcy5kYXRhWzBdLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhUHJvZHVjdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFQcm9kdWN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEoWy4uLmRhdGFdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnQUREX1BST0RVQ1RTJywgcGF5bG9hZDogZGF0YSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2Rpc3BhdGNoQ2FydCh7IHR5cGU6ICdJTklUX0NBUlQnLCBwYXlsb2FkOiBkYXRhIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGp3dCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqd3Qta3R4c2hvcCcpO1xyXG4gICAgICAgICAgICBjb25zdCBxcnkgPSBxcy5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEFjY291bnRJRDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZXE6IE51bWJlcihqd3QpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX0hPU1QgKyBgL2FwaS9zaG9wcGluZy1jYXJ0cz8ke3FyeX1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGFbMF0gJiYgcmVzLmRhdGFbMF0uYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFDYXJ0ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YUNhcnQubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG9wcGluZ0NhcnQucHVzaChpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG9wcGluZ0NhcnQoWy4uLnNob3BwaW5nQ2FydF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdJTklUX0NBUlQnLCBwYXlsb2FkOiBzaG9wcGluZ0NhcnQgfSlcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcnRDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBjYXJ0OiBjYXJ0LFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlSXRlbTogcmVtb3ZlSXRlbSxcclxuICAgICAgICAgICAgICAgIGFkZFRvQ2FydDogYWRkVG9DYXJ0LFxyXG4gICAgICAgICAgICAgICAgYWRkUXVhbnRpdHk6IGFkZFF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgc3ViUXVhbnRpdHk6IHN1YlF1YW50aXR5LFxyXG5cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9
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
    // let newTotal = 0;
    // for (let i = 0; i < productsArray.length; i++) {
    //     newTotal += productsArray[i].attributes.Price;
    // }

    const temp = action.payload;
    let cart = [];

    for (let i = 0; i < action.payload.length; i++) {
      const product = state.products.find(item => item.id === temp[i].attributes.AccountID);
      cart.push(_objectSpread(_objectSpread({}, temp[i]), {}, {
        product
      }));
    }

    console.log(cart);
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

const addToCart = async (product, accountID) => {
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
      lineNumber: 258,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcnQvQ2FydFByb3ZpZGVyLmpzIl0sIm5hbWVzIjpbImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicHJvZHVjdHNBcnJheSIsInBheWxvYWQiLCJwcm9kdWN0cyIsInRlbXAiLCJjYXJ0IiwiaSIsImxlbmd0aCIsInByb2R1Y3QiLCJmaW5kIiwiaXRlbSIsImlkIiwiYXR0cmlidXRlcyIsIkFjY291bnRJRCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiYWRkZWRJdGVtcyIsInRvdGFsIiwibmV3VG90YWwiLCJhZGRlZEl0ZW0iLCJleGlzdGVkX2l0ZW0iLCJxdWFudGl0eSIsIm5ld1ByaWNlIiwicXR5IiwiaXRlbVRvUmVtb3ZlIiwibmV3X2l0ZW1zIiwiZmlsdGVyIiwic2hpcHBpbmciLCJhZGRUb0NhcnQiLCJhY2NvdW50SUQiLCJteUhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwiZmV0Y2giLCJwcm9jZXNzIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiUHJvZHVjdElEIiwiUXVhbnRpdHkiLCJVbml0Q29zdCIsIlByaWNlIiwiU3VidG90YWwiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlc3VsdCIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInNldERhdGEiLCJ1c2VTdGF0ZSIsInNob3BwaW5nQ2FydCIsInNldFNob3BwaW5nQ2FydCIsImRpc3BhdGNoQ2FydCIsInVzZVJlZHVjZXIiLCJhY2NvdW50IiwicmVtb3ZlSXRlbSIsImFkZFF1YW50aXR5Iiwic3ViUXVhbnRpdHkiLCJ1c2VFZmZlY3QiLCJmZWN0aFByb2R1Y3QiLCJxcyIsInJlcXVpcmUiLCJxdWVyeSIsInNvcnQiLCJwb3B1bGF0ZSIsImVuY29kZVZhbHVlc09ubHkiLCJyZXMiLCJkYXRhUHJvZHVjdCIsIm1hcCIsImluZGV4Iiwiand0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInFyeSIsImZpbHRlcnMiLCIkZXEiLCJOdW1iZXIiLCJkYXRhQ2FydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBR25DLE1BQUlBLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQixjQUFwQixFQUFvQztBQUNoQyxRQUFJQyxhQUFhLEdBQUcsRUFBcEI7QUFDQUEsaUJBQWEsR0FBR0YsTUFBTSxDQUFDRyxPQUF2QixDQUZnQyxDQUloQzs7QUFFQSwyQ0FDT0osS0FEUDtBQUVJSyxjQUFRLEVBQUVGO0FBRmQ7QUFJSDs7QUFDRCxNQUFJRixNQUFNLENBQUNDLElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDN0IsUUFBSUMsYUFBYSxHQUFHLEVBQXBCO0FBQ0FBLGlCQUFhLEdBQUdGLE1BQU0sQ0FBQ0csT0FBdkIsQ0FGNkIsQ0FHN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxVQUFNRSxJQUFJLEdBQUdMLE1BQU0sQ0FBQ0csT0FBcEI7QUFDQSxRQUFJRyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxTQUFJLElBQUlDLENBQUMsR0FBRSxDQUFYLEVBQWNBLENBQUMsR0FBRVAsTUFBTSxDQUFDRyxPQUFQLENBQWVLLE1BQWhDLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTJDO0FBQ3ZDLFlBQU1FLE9BQU8sR0FBRVYsS0FBSyxDQUFDSyxRQUFOLENBQWVNLElBQWYsQ0FBb0JDLElBQUksSUFBSUEsSUFBSSxDQUFDQyxFQUFMLEtBQVlQLElBQUksQ0FBQ0UsQ0FBRCxDQUFKLENBQVFNLFVBQVIsQ0FBbUJDLFNBQTNELENBQWY7QUFDQVIsVUFBSSxDQUFDUyxJQUFMLGlDQUFjVixJQUFJLENBQUNFLENBQUQsQ0FBbEI7QUFBdUJFO0FBQXZCO0FBQ0g7O0FBQ0RPLFdBQU8sQ0FBQ0Ms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SUFBbEI7QUFDQWlELHlCQUFlLENBQUMsQ0FBQyxHQUFHRCxZQUFKLENBQUQsQ0FBZjtBQUNBRSxzQkFBWSxDQUFDO0FBQUU1RCxnQkFBSSxFQUFFLFdBQVI7QUFBcUJFLG1CQUFPLEVBQUV3RDtBQUE5QixXQUFELENBQVo7QUFDSCxTQUpEO0FBS0g7QUFDSixLQVhLLENBQU47QUFZUCxHQTVDRDs7QUE2Q0EsU0FDSSxNQUFDLDZEQUFELENBQWEsUUFBYjtBQUNJLFNBQUssRUFBRTtBQUNIckQsVUFBSSxFQUFFQSxJQURIO0FBRUgwRCxnQkFBVSxFQUFFQSxVQUZUO0FBR0hsQyxlQUFTLEVBQUVBLFNBSFI7QUFJSG1DLGlCQUFXLEVBQUVBLFdBSlY7QUFLSEMsaUJBQVcsRUFBRUE7QUFMVixLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FVS2IsUUFWTCxDQURKO0FBZUgsQ0F2Rk07O0dBQU1ELFk7O0tBQUFBLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuOTQxZTkzODllZGJkZDI4NjNjMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVkdWNlciwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL1VzZXJDb250ZXh0XCI7XHJcbmltcG9ydCBDYXJ0Q29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dHMvQ2FydENvbnRleHRcIjtcclxuXHJcbmNvbnN0IGNhcnRSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuXHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1BST0RVQ1RTJykge1xyXG4gICAgICAgIGxldCBwcm9kdWN0c0FycmF5ID0gW107XHJcbiAgICAgICAgcHJvZHVjdHNBcnJheSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnd3d3JywgcHJvZHVjdHNBcnJheSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0c0FycmF5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnSU5JVF9DQVJUJykge1xyXG4gICAgICAgIGxldCBwcm9kdWN0c0FycmF5ID0gW107XHJcbiAgICAgICAgcHJvZHVjdHNBcnJheSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICAgIC8vIGxldCBuZXdUb3RhbCA9IDA7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9kdWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIG5ld1RvdGFsICs9IHByb2R1Y3RzQXJyYXlbaV0uYXR0cmlidXRlcy5QcmljZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgY29uc3QgdGVtcCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIGxldCBjYXJ0ID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0wOyBpPCBhY3Rpb24ucGF5bG9hZC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9c3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IHRlbXBbaV0uYXR0cmlidXRlcy5BY2NvdW50SUQpXHJcbiAgICAgICAgICAgIGNhcnQucHVzaCh7Li4udGVtcFtpXSwgcHJvZHVjdH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNhcnQpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IHByb2R1Y3RzQXJyYXkgLFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1RPX0NBUlQnKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYgKGV4aXN0ZWRfaXRlbSkge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gMVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IDE7XHJcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlXHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVInKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW0gPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYgKGV4aXN0ZWRfaXRlbSkge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgKz0gYWN0aW9uLnF0eVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2UgKiBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSBhY3Rpb24ucXR5O1xyXG4gICAgICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSAqIGFjdGlvbi5xdHlcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdSRU1PVkVfSVRFTScpIHtcclxuICAgICAgICBsZXQgaXRlbVRvUmVtb3ZlID0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW0gPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtID0+IGFjdGlvbi5pZCAhPT0gaXRlbS5pZClcclxuXHJcbiAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIChpdGVtVG9SZW1vdmUubmV3UHJpY2UgKiBpdGVtVG9SZW1vdmUucXVhbnRpdHkpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1FVQU5USVRZJykge1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1NVQl9RVUFOVElUWScpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2lmIHRoZSBxdCA9PSAwIHRoZW4gaXQgc2hvdWxkIGJlIHJlbW92ZWRcclxuICAgICAgICBpZiAoYWRkZWRJdGVtLnF1YW50aXR5ID09PSAxKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5pZClcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogbmV3X2l0ZW1zLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgLT0gMVxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1NISVBQSU5HJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgKz0gMzBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnU1VCX1NISVBQSU5HJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogc3RhdGUuc2hpcHBpbmcgLT0gMzBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnUkVTRVRfQ0FSVCcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogW10sXHJcbiAgICAgICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5jb25zdCBhZGRUb0NhcnQgPSBhc3luYyAocHJvZHVjdCwgYWNjb3VudElEKSA9PntcclxuICAgIHZhciBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIG15SGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpXHJcbiAgICAgICAgYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX0hPU1QgKyAnL2FwaS9zaG9wcGluZy1jYXJ0cycsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50SUQ6IGFjY291bnRJRCxcclxuICAgICAgICAgICAgICAgICAgICBQcm9kdWN0SUQ6IHByb2R1Y3QuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgUXVhbnRpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgVW5pdENvc3Q6IHByb2R1Y3QuYXR0cmlidXRlcy5QcmljZSxcclxuICAgICAgICAgICAgICAgICAgICBTdWJ0b3RhbDogIHByb2R1Y3QuYXR0cmlidXRlcy5QcmljZSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IG15SGVhZGVyc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgXHJcbn1cclxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzaG9wcGluZ0NhcnQsIHNldFNob3BwaW5nQ2FydF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY2FydCwgZGlzcGF0Y2hDYXJ0XSA9IHVzZVJlZHVjZXIoY2FydFJlZHVjZXIsIHtcclxuICAgICAgICBwcm9kdWN0czogW10sXHJcbiAgICAgICAgYWRkZWRJdGVtczogW10sXHJcbiAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgc2hpcHBpbmc6IDAsXHJcbiAgICAgICAgdXNlcjogdXNlci5hY2NvdW50XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAoaWQpID0+IHtcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnUkVNT1ZFX0lURU0nLCBpZDogaWQgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFRvQ2FydCA9IChpZCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdBRERfVE9fQ0FSVCcsIGlkOiBpZCB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkUXVhbnRpdHkgPSAoaWQpID0+IHtcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnQUREX1FVQU5USVRZJywgaWQ6IGlkIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdWJRdWFudGl0eSA9IChpZCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdTVUJfUVVBTlRJVFknLCBpZDogaWQgfSlcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmVjdGhQcm9kdWN0KCk7XHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnN0IGZlY3RoUHJvZHVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBxcyA9IHJlcXVpcmUoJ3FzJyk7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBxcy5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBzb3J0OiBbJ2lkOmRlc2MnLF0sXHJcbiAgICAgICAgICAgIHBvcHVsYXRlOiAnKidcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGVuY29kZVZhbHVlc09ubHk6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuQVBJX0hPU1QgKyBgL2FwaS9wcm9kdWN0cz8ke3F1ZXJ5fWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YSAmJiByZXMuZGF0YVswXSAmJiByZXMuZGF0YVswXS5hdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YVByb2R1Y3QgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhUHJvZHVjdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChpdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREYXRhKFsuLi5kYXRhXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ0FERF9QUk9EVUNUUycsIHBheWxvYWQ6IGRhdGEgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9kaXNwYXRjaENhcnQoeyB0eXBlOiAnSU5JVF9DQVJUJywgcGF5bG9hZDogZGF0YSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBqd3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnand0LWt0eHNob3AnKTtcclxuICAgICAgICAgICAgY29uc3QgcXJ5ID0gcXMuc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBY2NvdW50SUQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGVxOiBOdW1iZXIoand0KSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZW5jb2RlVmFsdWVzT25seTogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKHByb2Nlc3MuZW52LkFQSV9IT1NUICsgYC9hcGkvc2hvcHBpbmctY2FydHM/JHtxcnl9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhICYmIHJlcy5kYXRhWzBdICYmIHJlcy5kYXRhWzBdLmF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhQ2FydCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFDYXJ0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvcHBpbmdDYXJ0LnB1c2goaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvcHBpbmdDYXJ0KFsuLi5zaG9wcGluZ0NhcnRdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnSU5JVF9DQVJUJywgcGF5bG9hZDogc2hvcHBpbmdDYXJ0IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgY2FydDogY2FydCxcclxuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0sXHJcbiAgICAgICAgICAgICAgICBhZGRUb0NhcnQ6IGFkZFRvQ2FydCxcclxuICAgICAgICAgICAgICAgIGFkZFF1YW50aXR5OiBhZGRRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgIHN1YlF1YW50aXR5OiBzdWJRdWFudGl0eSxcclxuXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
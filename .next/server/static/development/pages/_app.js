module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Cart/CartProvider.js":
/*!*****************************************!*\
  !*** ./components/Cart/CartProvider.js ***!
  \*****************************************/
/*! exports provided: CartProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProvider", function() { return CartProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/CartContext */ "./contexts/CartContext.js");
var _jsxFileName = "F:\\N\u0103m 4 h\u1ECDc k\u1EF3 1\\M\xF4 h\xECnh h\xF3a ph\u1EA7n m\u1EC1m\\New folder (2)\\components\\Cart\\CartProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const data = [{
  description: "Long Sleeve Leopard T-Shirt",
  discount: false,
  discountOff: 10,
  id: "5DAcUDDd4t8xWgl9kvXl",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover1-1588704436043.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img1-1588704428273.jpg",
  newPrice: 320,
  newProduct: false,
  offer: true,
  oldPrice: 250,
  onSale: false,
  title: "Long Sleeve Leopard T-Shirt",
  type: "T-Shirt",
  quantity: 1
}, {
  description: "Sunnyme Women's Ponchos",
  discount: false,
  discountOff: 0,
  id: "81tgigL0U2zUHoTj85Ht",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover8-1588705468374.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img8-1588705462376.jpg",
  newPrice: 200,
  newProduct: false,
  offer: true,
  oldPrice: 210,
  onSale: true,
  title: "Sunnyme Women's Ponchos",
  type: "Women Clothes",
  quantity: 1
}, {
  description: "Sunnyme Women's Ponchos",
  discount: false,
  discountOff: 0,
  id: "81tgigL0U2zUHoTj85Ht",
  imageHoverUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img-hover8-1588705468374.jpg",
  imageUrl: "https://demaxin.s3.ap-south-1.amazonaws.com/img8-1588705462376.jpg",
  newPrice: 200,
  newProduct: false,
  offer: true,
  oldPrice: 210,
  onSale: true,
  title: "Sunnyme Women's Ponchos",
  type: "Women Clothes",
  quantity: 1
}];

const cartReducer = (state, action) => {
  // User Logout
  if (action.type === 'USRER_LOGOUT') {
    cookie.remove('_livani_token_');
    return _objectSpread(_objectSpread({}, state), {}, {
      login: false
    });
  } // Check if user login


  if (action.type === 'CHECK_USRER_LOGIN') {
    const getToken = cookie.get('_livani_token_');

    if (getToken == token) {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: true
      });
    } else {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: false
      });
    }
  } // User Login


  if (action.type === 'USRER_LOGIN') {
    cookie.set('_livani_token_', token);
    const getToken = cookie.get('_livani_token_'); // console.log('token', getToken)

    if (getToken == token) {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: true
      });
    } else {
      return _objectSpread(_objectSpread({}, state), {}, {
        login: false
      });
    }
  }

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

    for (let i = 0; i < productsArray.length; i++) {
      newTotal += productsArray[i].newPrice;
    }

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

const CartProvider = ({
  children
}) => {
  const {
    0: cart,
    1: dispatchCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(cartReducer, {
    products: [],
    addedItems: [],
    total: 0,
    shipping: 0,
    login: false
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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatchCart({
      type: 'ADD_PRODUCTS',
      payload: data
    });
    dispatchCart({
      type: 'INIT_CART',
      payload: data
    });
  }, []);
  return __jsx(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
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
      lineNumber: 279,
      columnNumber: 9
    }
  }, children);
};

/***/ }),

/***/ "./components/Shared/GoTop.js":
/*!************************************!*\
  !*** ./components/Shared/GoTop.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const GoTop = props => {
  const [thePosition, setThePosition] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const timeoutRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(timeoutRef.current);
    }

    window.scroll(0, window.pageYOffset - props.scrollStepInPx);
  };

  const scrollToTop = () => {
    timeoutRef.current = setInterval(onScrollStep, props.delayInMs);
  };

  const renderGoTopIcon = () => {
    return __jsx("div", {
      className: `go-top ${thePosition ? 'active' : ''}`,
      onClick: scrollToTop
    }, __jsx("i", {
      className: "bx bx-up-arrow-alt"
    }));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, renderGoTopIcon());
};

/* harmony default export */ __webpack_exports__["default"] = (GoTop);

/***/ }),

/***/ "./components/_App/Layout.js":
/*!***********************************!*\
  !*** ./components/_App/Layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_GoTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/GoTop */ "./components/Shared/GoTop.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = ({
  children
}) => {
  const [loader, setLoader] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    setTimeout(() => setLoader(false), 2000);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "KTXShop"), __jsx("meta", {
    name: "description",
    content: "N\u01A1i bu\xF4n b\xE1n nh\u1EEFng m\u1EB7t h\xE0ng c\u1EA7n thi\u1EBFt"
  }), __jsx("meta", {
    name: "og:title",
    property: "og:title",
    content: "KTXShop"
  }), __jsx("meta", {
    name: "twitter:card",
    content: "KTXShop"
  }), __jsx("link", {
    rel: "canonical",
    href: "https://livani-react.envytheme.com/"
  }), __jsx("meta", {
    property: "og:image",
    content: "https://demaxin.s3.ap-south-1.amazonaws.com/cd19-2-1589216093113.jpg"
  })), loader ? 'Loading' : children, __jsx(_Shared_GoTop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    scrollStepInPx: "100",
    delayInMs: "10.50"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./contexts/CartContext.js":
/*!*********************************!*\
  !*** ./contexts/CartContext.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CartContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
/* harmony default export */ __webpack_exports__["default"] = (CartContext);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.scss */ "./styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_App_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/_App/Layout */ "./components/_App/Layout.js");
/* harmony import */ var _components_Cart_CartProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Cart/CartProvider */ "./components/Cart/CartProvider.js");
var _jsxFileName = "F:\\N\u0103m 4 h\u1ECDc k\u1EF3 1\\M\xF4 h\xECnh h\xF3a ph\u1EA7n m\u1EC1m\\New folder (2)\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const MyApp = ({
  Component,
  pageProps
}) => {
  return __jsx(_components_Cart_CartProvider__WEBPACK_IMPORTED_MODULE_4__["CartProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_components_App_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__["ToastContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }), __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }))));
};

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJ0L0NhcnRQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NoYXJlZC9Hb1RvcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL19BcHAvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHRzL0NhcnRDb250ZXh0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIl0sIm5hbWVzIjpbImRhdGEiLCJkZXNjcmlwdGlvbiIsImRpc2NvdW50IiwiZGlzY291bnRPZmYiLCJpZCIsImltYWdlSG92ZXJVcmwiLCJpbWFnZVVybCIsIm5ld1ByaWNlIiwibmV3UHJvZHVjdCIsIm9mZmVyIiwib2xkUHJpY2UiLCJvblNhbGUiLCJ0aXRsZSIsInR5cGUiLCJxdWFudGl0eSIsImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb29raWUiLCJyZW1vdmUiLCJsb2dpbiIsImdldFRva2VuIiwiZ2V0IiwidG9rZW4iLCJzZXQiLCJwcm9kdWN0c0FycmF5IiwicGF5bG9hZCIsInByb2R1Y3RzIiwibmV3VG90YWwiLCJpIiwibGVuZ3RoIiwiYWRkZWRJdGVtcyIsInRvdGFsIiwiYWRkZWRJdGVtIiwiZmluZCIsIml0ZW0iLCJleGlzdGVkX2l0ZW0iLCJxdHkiLCJpdGVtVG9SZW1vdmUiLCJuZXdfaXRlbXMiLCJmaWx0ZXIiLCJzaGlwcGluZyIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwiY2FydCIsImRpc3BhdGNoQ2FydCIsInVzZVJlZHVjZXIiLCJyZW1vdmVJdGVtIiwiYWRkVG9DYXJ0IiwiYWRkUXVhbnRpdHkiLCJzdWJRdWFudGl0eSIsInVzZUVmZmVjdCIsIkdvVG9wIiwicHJvcHMiLCJ0aGVQb3NpdGlvbiIsInNldFRoZVBvc2l0aW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInRpbWVvdXRSZWYiLCJ1c2VSZWYiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJzY3JvbGxZIiwib25TY3JvbGxTdGVwIiwicGFnZVlPZmZzZXQiLCJjbGVhckludGVydmFsIiwiY3VycmVudCIsInNjcm9sbCIsInNjcm9sbFN0ZXBJblB4Iiwic2Nyb2xsVG9Ub3AiLCJzZXRJbnRlcnZhbCIsImRlbGF5SW5NcyIsInJlbmRlckdvVG9wSWNvbiIsIkxheW91dCIsImxvYWRlciIsInNldExvYWRlciIsInNldFRpbWVvdXQiLCJDYXJ0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsImN0eCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNB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QStCO0FBQzNCRCxhQUFTLEdBQUcsTUFBTUQsU0FBUyxDQUFDRSxlQUFWLENBQTBCQyxHQUExQixDQUFsQjtBQUNIOztBQUNELFNBQU87QUFBRUY7QUFBRixHQUFQO0FBQ0gsQ0FORDs7QUFTZ0JGLG9FQUFoQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBDYXJ0Q29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dHMvQ2FydENvbnRleHRcIjtcclxuY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb25nIFNsZWV2ZSBMZW9wYXJkIFQtU2hpcnRcIixcclxuICAgICAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICAgICAgZGlzY291bnRPZmY6IDEwLFxyXG4gICAgICAgIGlkOiBcIjVEQWNVRERkNHQ4eFdnbDlrdlhsXCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjEtMTU4ODcwNDQzNjA0My5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzEtMTU4ODcwNDQyODI3My5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMzIwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyNTAsXHJcbiAgICAgICAgb25TYWxlOiBmYWxzZSxcclxuICAgICAgICB0aXRsZTogXCJMb25nIFNsZWV2ZSBMZW9wYXJkIFQtU2hpcnRcIixcclxuICAgICAgICB0eXBlOiBcIlQtU2hpcnRcIixcclxuICAgICAgICBxdWFudGl0eTogMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTdW5ueW1lIFdvbWVuJ3MgUG9uY2hvc1wiLFxyXG4gICAgICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgICAgICBkaXNjb3VudE9mZjogMCxcclxuICAgICAgICBpZDogXCI4MXRnaWdMMFUyelVIb1RqODVIdFwiLFxyXG4gICAgICAgIGltYWdlSG92ZXJVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWctaG92ZXI4LTE1ODg3MDU0NjgzNzQuanBnXCIsXHJcbiAgICAgICAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9pbWc4LTE1ODg3MDU0NjIzNzYuanBnXCIsXHJcbiAgICAgICAgbmV3UHJpY2U6IDIwMCxcclxuICAgICAgICBuZXdQcm9kdWN0OiBmYWxzZSxcclxuICAgICAgICBvZmZlcjogdHJ1ZSxcclxuICAgICAgICBvbGRQcmljZTogMjEwLFxyXG4gICAgICAgIG9uU2FsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogXCJTdW5ueW1lIFdvbWVuJ3MgUG9uY2hvc1wiLFxyXG4gICAgICAgIHR5cGU6IFwiV29tZW4gQ2xvdGhlc1wiLFxyXG4gICAgICAgIHF1YW50aXR5OiAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlN1bm55bWUgV29tZW4ncyBQb25jaG9zXCIsXHJcbiAgICAgICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgICAgIGRpc2NvdW50T2ZmOiAwLFxyXG4gICAgICAgIGlkOiBcIjgxdGdpZ0wwVTJ6VUhvVGo4NUh0XCIsXHJcbiAgICAgICAgaW1hZ2VIb3ZlclVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZy1ob3ZlcjgtMTU4ODcwNTQ2ODM3NC5qcGdcIixcclxuICAgICAgICBpbWFnZVVybDogXCJodHRwczovL2RlbWF4aW4uczMuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2ltZzgtMTU4ODcwNTQ2MjM3Ni5qcGdcIixcclxuICAgICAgICBuZXdQcmljZTogMjAwLFxyXG4gICAgICAgIG5ld1Byb2R1Y3Q6IGZhbHNlLFxyXG4gICAgICAgIG9mZmVyOiB0cnVlLFxyXG4gICAgICAgIG9sZFByaWNlOiAyMTAsXHJcbiAgICAgICAgb25TYWxlOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBcIlN1bm55bWUgV29tZW4ncyBQb25jaG9zXCIsXHJcbiAgICAgICAgdHlwZTogXCJXb21lbiBDbG90aGVzXCIsXHJcbiAgICAgICAgcXVhbnRpdHk6IDFcclxuICAgIH0sXHJcbl1cclxuY29uc3QgY2FydFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG5cclxuICAgIC8vIFVzZXIgTG9nb3V0XHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdVU1JFUl9MT0dPVVQnKSB7XHJcbiAgICAgICAgY29va2llLnJlbW92ZSgnX2xpdmFuaV90b2tlbl8nKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBsb2dpbjogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdXNlciBsb2dpblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQ0hFQ0tfVVNSRVJfTE9HSU4nKSB7XHJcbiAgICAgICAgY29uc3QgZ2V0VG9rZW4gPSBjb29raWUuZ2V0KCdfbGl2YW5pX3Rva2VuXycpXHJcblxyXG4gICAgICAgIGlmIChnZXRUb2tlbiA9PSB0b2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dpbjogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9naW46IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXNlciBMb2dpblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnVVNSRVJfTE9HSU4nKSB7XHJcbiAgICAgICAgY29va2llLnNldCgnX2xpdmFuaV90b2tlbl8nLCB0b2tlbik7XHJcblxyXG4gICAgICAgIGNvbnN0IGdldFRva2VuID0gY29va2llLmdldCgnX2xpdmFuaV90b2tlbl8nKVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygndG9rZW4nLCBnZXRUb2tlbilcclxuXHJcbiAgICAgICAgaWYgKGdldFRva2VuID09IHRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ2luOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dpbjogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREX1BST0RVQ1RTJykge1xyXG4gICAgICAgIGxldCBwcm9kdWN0c0FycmF5ID0gW107XHJcbiAgICAgICAgcHJvZHVjdHNBcnJheSA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnd3d3JywgcHJvZHVjdHNBcnJheSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHByb2R1Y3RzOiBwcm9kdWN0c0FycmF5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnSU5JVF9DQVJUJykge1xyXG4gICAgICAgIGxldCBwcm9kdWN0c0FycmF5ID0gW107XHJcbiAgICAgICAgcHJvZHVjdHNBcnJheSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZHVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBuZXdUb3RhbCArPSBwcm9kdWN0c0FycmF5W2ldLm5ld1ByaWNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZGVkSXRlbXM6IHByb2R1Y3RzQXJyYXksXHJcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfVE9fQ0FSVCcpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXHJcbiAgICAgICAgbGV0IGV4aXN0ZWRfaXRlbSA9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtID0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICBpZiAoZXhpc3RlZF9pdGVtKSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ID0gMTtcclxuICAgICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ubmV3UHJpY2VcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ0FERF9RVUFOVElUWV9XSVRIX05VTUJFUicpIHtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXHJcbiAgICAgICAgbGV0IGV4aXN0ZWRfaXRlbSA9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtID0+IGFjdGlvbi5pZCA9PT0gaXRlbS5pZClcclxuICAgICAgICBpZiAoZXhpc3RlZF9pdGVtKSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZSAqIGFjdGlvbi5xdHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSA9IGFjdGlvbi5xdHk7XHJcbiAgICAgICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLm5ld1ByaWNlICogYWN0aW9uLnF0eVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtczogWy4uLnN0YXRlLmFkZGVkSXRlbXMsIGFkZGVkSXRlbV0sXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gJ1JFTU9WRV9JVEVNJykge1xyXG4gICAgICAgIGxldCBpdGVtVG9SZW1vdmUgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbmQoaXRlbSA9PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW0gPT4gYWN0aW9uLmlkICE9PSBpdGVtLmlkKVxyXG5cclxuICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gKGl0ZW1Ub1JlbW92ZS5uZXdQcmljZSAqIGl0ZW1Ub1JlbW92ZS5xdWFudGl0eSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXHJcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfUVVBTlRJVFknKSB7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IDFcclxuICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnU1VCX1FVQU5USVRZJykge1xyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIC8vaWYgdGhlIHF0ID09IDAgdGhlbiBpdCBzaG91bGQgYmUgcmVtb3ZlZFxyXG4gICAgICAgIGlmIChhZGRlZEl0ZW0ucXVhbnRpdHkgPT09IDEpIHtcclxuICAgICAgICAgICAgbGV0IG5ld19pdGVtcyA9IHN0YXRlLmFkZGVkSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gYWN0aW9uLmlkKVxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCAtIGFkZGVkSXRlbS5uZXdQcmljZVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSAtPSAxXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gYWRkZWRJdGVtLm5ld1ByaWNlXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdBRERfU0hJUFBJTkcnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyArPSAzMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdTVUJfU0hJUFBJTkcnKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyAtPSAzMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdSRVNFVF9DQVJUJykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBbXSxcclxuICAgICAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiAwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBDYXJ0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbY2FydCwgZGlzcGF0Y2hDYXJ0XSA9IHVzZVJlZHVjZXIoY2FydFJlZHVjZXIsIHtcclxuICAgICAgICBwcm9kdWN0czogW10sXHJcbiAgICAgICAgYWRkZWRJdGVtczogW10sXHJcbiAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgc2hpcHBpbmc6IDAsXHJcbiAgICAgICAgbG9naW46IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAoaWQpID0+IHtcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnUkVNT1ZFX0lURU0nLCBpZDogaWQgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IGFkZFRvQ2FydCA9IChpZCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdBRERfVE9fQ0FSVCcsIGlkOiBpZCB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgYWRkUXVhbnRpdHkgPSAoaWQpID0+IHtcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnQUREX1FVQU5USVRZJywgaWQ6IGlkIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBzdWJRdWFudGl0eSA9IChpZCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoQ2FydCh7IHR5cGU6ICdTVUJfUVVBTlRJVFknLCBpZDogaWQgfSlcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2hDYXJ0KHsgdHlwZTogJ0FERF9QUk9EVUNUUycsIHBheWxvYWQ6IGRhdGEgfSlcclxuICAgICAgICBkaXNwYXRjaENhcnQoeyB0eXBlOiAnSU5JVF9DQVJUJywgcGF5bG9hZDogZGF0YSB9KVxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgY2FydDogY2FydCxcclxuICAgICAgICAgICAgICAgIHJlbW92ZUl0ZW06IHJlbW92ZUl0ZW0sXHJcbiAgICAgICAgICAgICAgICBhZGRUb0NhcnQ6IGFkZFRvQ2FydCxcclxuICAgICAgICAgICAgICAgIGFkZFF1YW50aXR5OiBhZGRRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgIHN1YlF1YW50aXR5OiBzdWJRdWFudGl0eVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG5cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBHb1RvcCA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt0aGVQb3NpdGlvbiwgc2V0VGhlUG9zaXRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdGltZW91dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxNzApIHtcclxuICAgICAgICAgICAgICAgIHNldFRoZVBvc2l0aW9uKHRydWUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaGVQb3NpdGlvbihmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKVxyXG4gICAgXHJcbiAgICBjb25zdCBvblNjcm9sbFN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA9PT0gMCl7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZW91dFJlZi5jdXJyZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LnNjcm9sbCgwLCB3aW5kb3cucGFnZVlPZmZzZXQgLSBwcm9wcy5zY3JvbGxTdGVwSW5QeCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsVG9Ub3AgPSAoKSA9PiB7XHJcbiAgICAgICAgdGltZW91dFJlZi5jdXJyZW50ID0gc2V0SW50ZXJ2YWwob25TY3JvbGxTdGVwLCBwcm9wcy5kZWxheUluTXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbmRlckdvVG9wSWNvbiA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGdvLXRvcCAke3RoZVBvc2l0aW9uID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXtzY3JvbGxUb1RvcH0+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJieCBieC11cC1hcnJvdy1hbHRcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAge3JlbmRlckdvVG9wSWNvbigpfVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdvVG9wOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEdvVG9wIGZyb20gJy4uL1NoYXJlZC9Hb1RvcCc7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gICAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0TG9hZGVyKGZhbHNlKSwgMjAwMCk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5LVFhTaG9wPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJOxqFpIGJ1w7RuIGLDoW4gbmjhu69uZyBt4bq3dCBow6BuZyBj4bqnbiB0aGnhur90XCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJvZzp0aXRsZVwiIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiS1RYU2hvcFwiPjwvbWV0YT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwiS1RYU2hvcFwiPjwvbWV0YT5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL2xpdmFuaS1yZWFjdC5lbnZ5dGhlbWUuY29tL1wiPjwvbGluaz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly9kZW1heGluLnMzLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbS9jZDE5LTItMTU4OTIxNjA5MzExMy5qcGdcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIHtsb2FkZXIgPyAnTG9hZGluZycgOiBjaGlsZHJlbn1cclxuICAgICAgICAgICAgPEdvVG9wIHNjcm9sbFN0ZXBJblB4PVwiMTAwXCIgZGVsYXlJbk1zPVwiMTAuNTBcIiAvPlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQ2FydENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmV4cG9ydCBkZWZhdWx0IENhcnRDb250ZXh0O1xyXG4iLCJpbXBvcnQgJy4uL3N0eWxlcy5zY3NzJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9fQXBwL0xheW91dCc7XHJcbmltcG9ydCB7Q2FydFByb3ZpZGVyfSBmcm9tICcuLi9jb21wb25lbnRzL0NhcnQvQ2FydFByb3ZpZGVyJztcclxuXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcnRQcm92aWRlcj5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L0NhcnRQcm92aWRlcj5cclxuXHJcbiAgICApO1xyXG59XHJcblxyXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBDb21wb25lbnQsIGN0eCB9KSA9PiB7XHJcbiAgICBsZXQgcGFnZVByb3BzID0ge307XHJcbiAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgcGFnZVByb3BzIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoTXlBcHApIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
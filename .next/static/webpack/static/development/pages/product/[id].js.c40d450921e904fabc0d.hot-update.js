webpackHotUpdate("static\\development\\pages\\product\\[id].js",{

/***/ "./components/ProductDetails/ProductDetailsTab.js":
/*!********************************************************!*\
  !*** ./components/ProductDetails/ProductDetailsTab.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\N\u0103m 4 h\u1ECDc k\u1EF3 1\\M\xF4 h\xECnh h\xF3a ph\u1EA7n m\u1EC1m\\New folder (2)\\components\\ProductDetails\\ProductDetailsTab.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class ProductDetailsTab extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "openTabSection", (evt, tabNmae) => {
      let i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabs-item");

      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("fadeInUp");
        tabcontent[i].style.display = "none";
      }

      tablinks = document.getElementsByTagName("li");

      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("current", "");
      }

      document.getElementById(tabNmae).style.display = "block";
      document.getElementById(tabNmae).className += " fadeInUp animated";
      evt.currentTarget.className += "current";
    });
  }

  render() {
    return __jsx("div", {
      className: "tab products-details-tab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }, __jsx("ul", {
      className: "tabs",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }, __jsx("li", {
      onClick: e => {
        e.preventDefault();
        this.openTabSection(e, 'tab1');
      },
      className: "current",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "dot",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 29
      }
    }), " M\xF4 t\u1EA3"))), __jsx("div", {
      className: "tab-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }, __jsx("div", {
      id: "tab1",
      className: "tabs-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "products-details-tab-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 25
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 29
      }
    }, this.props.product.description))), __jsx("div", {
      id: "tab2",
      className: "tabs-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "products-details-tab-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "table-responsive",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 29
      }
    }, __jsx("table", {
      className: "table table-striped",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 33
      }
    }, __jsx("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 37
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 41
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 45
      }
    }, "Color:"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 45
      }
    }, "Blue, Purple, White")), __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 41
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 45
      }
    }, "Size:"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 45
      }
    }, "20, 24")), __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 41
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 45
      }
    }, "Material:"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 45
      }
    }, "100% Polyester")), __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 41
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 45
      }
    }, "Height:"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 45
      }
    }, "180 cm - 5' 11\u201D")), __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 41
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 45
      }
    }, "Bust:"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 45
      }
    }, "83 cm - 32\u201D")), __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 41
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 45
      }
    }, "Waist:"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 45
      }
    }, "57 cm - 22\u201D")), __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 41
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 45
      }
    }, "Hips:"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 45
      }
    }, "88 cm - 35")), __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 41
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 45
      }
    }, "Shipping:"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 45
      }
    }, "Free"))))))), __jsx("div", {
      id: "tab3",
      className: "tabs-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "products-details-tab-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "table-responsive",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 29
      }
    }, __jsx("table", {
      className: "table table-bordered",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 33
      }
    }, __jsx("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 37
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 41
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 45
      }
    }, "Shipping"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 45
      }
    }, "This item Ship to USA")), __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 41
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 45
      }
    }, "Delivery"), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 45
      }
    }, "Estimated between Wednesday 07/31/2020 and Monday 08/05/2020 ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 110
      }
    }), "Will usually ship within 1 bussiness day."))))))), __jsx("div", {
      id: "tab4",
      className: "tabs-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "products-details-tab-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 25
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 29
      }
    }, "N\u1EBFu b\u1EA1n \u0111ang t\xECm ki\u1EBFm m\u1ED9t trang web \u0111\u1EC3 mua v\xE0 b\xE1n h\xE0ng tr\u1EF1c tuy\u1EBFn th\xEC Shopee.vn l\xE0 m\u1ED9t s\u1EF1 l\u1EF1a ch\u1ECDn tuy\u1EC7t v\u1EDDi d\xE0nh cho b\u1EA1n. B\u1EA3n ch\u1EA5t c\u1EE7a Shopee l\xE0 m\u1ED9t social E-commerce platform - n\u1EC1n t\u1EA3ng trang web th\u01B0\u01A1ng m\u1EA1i \u0111i\u1EC7n t\u1EED t\xEDch h\u1EE3p m\u1EA1ng x\xE3 h\u1ED9i. \u0110i\u1EC1u n\xE0y cho ph\xE9p ng\u01B0\u1EDDi mua v\xE0 ng\u01B0\u1EDDi b\xE1n h\xE0ng d\u1EC5 d\xE0ng t\u01B0\u01A1ng t\xE1c, trao \u0111\u1ED5i th\xF4ng tin v\u1EC1 s\u1EA3n ph\u1EA9m v\xE0 ch\u01B0\u01A1ng tr\xECnh khuy\u1EBFn m\xE3i c\u1EE7a shop. Nh\u1EDD n\u1EC1n t\u1EA3ng \u0111\xF3, vi\u1EC7c mua b\xE1n tr\xEAn Shopee tr\u1EDF n\xEAn nhanh ch\xF3ng v\xE0 \u0111\u01A1n gi\u1EA3n h\u01A1n. B\u1EA1n c\xF3 th\u1EC3 tr\xF2 chuy\u1EC7n tr\u1EF1c ti\u1EBFp v\u1EDBi nh\xE0 b\xE1n h\xE0ng \u0111\u1EC3 h\u1ECFi tr\u1EF1c ti\u1EBFp v\u1EC1 m\u1EB7t h\xE0ng c\u1EA7n mua. C\xF2n n\u1EBFu b\u1EA1n mu\u1ED1n t\xECm mua nh\u1EEFng d\xF2ng s\u1EA3n ph\u1EA9m ch\xEDnh h\xE3ng, uy t\xEDn, Shopee Mall ch\xEDnh l\xE0 s\u1EF1 l\u1EF1a ch\u1ECDn l\xED t\u01B0\u1EDFng d\xE0nh cho b\u1EA1n. \u0110\u1EC3 b\u1EA1n c\xF3 th\u1EC3 d\u1EC5 d\xE0ng khi t\xECm hi\u1EC3u v\xE0 s\u1EED d\u1EE5ng s\u1EA3n ph\u1EA9m, Shopee Blog - trang blog th\xF4ng tin ch\xEDnh th\u1EE9c c\u1EE7a Shopee - s\u1EBD gi\xFAp b\u1EA1n c\xF3 th\u1EC3 t\xECm \u0111\u01B0\u1EE3c cho m\xECnh c\xE1c ki\u1EBFn th\u1EE9c v\u1EC1 xu h\u01B0\u1EDBng th\u1EDDi trang, review c\xF4ng ngh\u1EC7, m\u1EB9o l\xE0m \u0111\u1EB9p, tin t\u1EE9c ti\xEAu d\xF9ng v\xE0 deal gi\xE1 t\u1ED1t b\u1EA5t ng\u1EDD. \u0110\u1EBFn v\u1EDBi Shopee, c\u01A1 h\u1ED9i \u0111\u1EC3 tr\u1EDF th\xE0nh m\u1ED9t nh\xE0 b\xE1n h\xE0ng d\u1EC5 d\xE0ng h\u01A1n bao gi\u1EDD h\u1EBFt. Ch\u1EC9 v\u1EDBi v\xE0i thao t\xE1c tr\xEAn \u1EE9ng d\u1EE5ng, b\u1EA1n \u0111\xE3 c\xF3 th\u1EC3 \u0111\u0103ng b\xE1n ngay nh\u1EEFng s\u1EA3n ph\u1EA9m c\u1EE7a m\xECnh. Kh\xF4ng nh\u1EEFng th\u1EBF, c\xE1c nh\xE0 b\xE1n h\xE0ng c\xF3 th\u1EC3 t\u1EF1 t\u1EA1o ch\u01B0\u01A1ng tr\xECnh khuy\u1EBFn m\xE3i tr\xEAn Shopee \u0111\u1EC3 thu h\xFAt ng\u01B0\u1EDDi mua v\u1EDBi nh\u1EEFng s\u1EA3n ph\u1EA9m c\xF3 m\u1EE9c gi\xE1 h\u1EA5p d\u1EABn. Khi \u0111\u0103ng nh\u1EADp t\u1EA1i Shopee K\xEAnh ng\u01B0\u1EDDi b\xE1n, b\u1EA1n c\xF3 th\u1EC3 d\u1EC5 d\xE0ng ph\xE2n lo\u1EA1i s\u1EA3n ph\u1EA9m, theo d\xF5i \u0111\u01A1n h\xE0ng, ch\u0103m s\xF3c kh\xE1ch h\xE0ng v\xE0 c\u1EADp nh\u1EADp ngay c\xE1c ho\u1EA1t \u0111\u1ED9ng c\u1EE7a shop."))), __jsx("div", {
      id: "tab5",
      className: "tabs-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "products-details-tab-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "products-review-form",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 29
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 33
      }
    }, "Customer Reviews"), __jsx("div", {
      className: "review-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "rating",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 37
      }
    }, __jsx("i", {
      className: "bx bxs-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 41
      }
    }), __jsx("i", {
      className: "bx bxs-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 41
      }
    }), __jsx("i", {
      className: "bx bxs-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 41
      }
    }), __jsx("i", {
      className: "bx bxs-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 41
      }
    }), __jsx("i", {
      className: "bx bx-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 41
      }
    })), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 37
      }
    }, "Based on 3 reviews"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 37
      }
    }, __jsx("a", {
      className: "default-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 41
      }
    }, "Write a Review"))), __jsx("div", {
      className: "review-comments",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "review-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "rating",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 41
      }
    }, __jsx("i", {
      className: "bx bxs-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "bx bxs-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "bx bxs-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "bx bxs-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "bx bx-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 45
      }
    })), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 41
      }
    }, "Good"), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 41
      }
    }, __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 47
      }
    }, "Admin"), " on ", __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 73
      }
    }, "Sep 21, 2019")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 41
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.")), __jsx("div", {
      className: "review-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "rating",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 41
      }
    }, __jsx("i", {
      className: "bx bxs-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "bx bxs-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "bx bxs-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "bx bxs-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "bx bx-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 45
      }
    })), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 41
      }
    }, "Good"), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 41
      }
    }, __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 47
      }
    }, "Admin"), " on ", __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 73
      }
    }, "Sep 21, 2019")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 41
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.")), __jsx("div", {
      className: "review-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "rating",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 41
      }
    }, __jsx("i", {
      className: "bx bxs-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "bx bxs-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "bx bxs-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "bx bxs-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 45
      }
    }), __jsx("i", {
      className: "bx bx-star",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 45
      }
    })), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 41
      }
    }, "Good"), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 41
      }
    }, __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 47
      }
    }, "Admin"), " on ", __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 73
      }
    }, "Sep 21, 2019")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 41
      }
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."))), __jsx("div", {
      className: "review-form",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 33
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 37
      }
    }, "Write a Review"), __jsx("form", {
      onSubmit: e => e.preventDefault(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "col-lg-6 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 49
      }
    }, __jsx("input", {
      type: "text",
      id: "name",
      name: "name",
      placeholder: "Enter your name",
      className: "form-control",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 53
      }
    }))), __jsx("div", {
      className: "col-lg-6 col-md-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 49
      }
    }, __jsx("input", {
      type: "email",
      id: "email",
      name: "email",
      placeholder: "Enter your email",
      className: "form-control",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 53
      }
    }))), __jsx("div", {
      className: "col-lg-12 col-md-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 49
      }
    }, __jsx("input", {
      type: "text",
      id: "review-title",
      name: "review-title",
      placeholder: "Enter your review a title",
      className: "form-control",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 53
      }
    }))), __jsx("div", {
      className: "col-lg-12 col-md-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 45
      }
    }, __jsx("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 49
      }
    }, __jsx("textarea", {
      name: "review-body",
      id: "review-body",
      cols: "30",
      rows: "6",
      placeholder: "Write your comments here",
      className: "form-control",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 53
      }
    }))), __jsx("div", {
      className: "col-lg-12 col-md-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 45
      }
    }, __jsx("button", {
      type: "submit",
      className: "default-btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 49
      }
    }, "Submit Review"))))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProductDetailsTab);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3REZXRhaWxzL1Byb2R1Y3REZXRhaWxzVGFiLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxzVGFiIiwiQ29tcG9uZW50IiwiZXZ0IiwidGFiTm1hZSIsImkiLCJ0YWJjb250ZW50IiwidGFibGlua3MiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzdHlsZSIsImRpc3BsYXkiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJnZXRFbGVtZW50QnlJZCIsImN1cnJlbnRUYXJnZXQiLCJyZW5kZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJvcGVuVGFiU2VjdGlvbiIsInByb3BzIiwicHJvZHVjdCIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxpQkFBTixTQUFnQ0MsK0NBQWhDLENBQTBDO0FBQUE7QUFBQTs7QUFBQSxzSEFFckIsQ0FBQ0MsR0FBRCxFQUFNQyxPQUFOLEtBQWtCO0FBQy9CLFVBQUlDLENBQUosRUFBT0MsVUFBUCxFQUFtQkMsUUFBbkI7QUFDQUQsZ0JBQVUsR0FBR0UsUUFBUSxDQUFDQyxzQkFBVCxDQUFnQyxXQUFoQyxDQUFiOztBQUNBLFdBQUtKLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR0MsVUFBVSxDQUFDSSxNQUEzQixFQUFtQ0wsQ0FBQyxFQUFwQyxFQUF3QztBQUNwQ0Msa0JBQVUsQ0FBQ0QsQ0FBRCxDQUFWLENBQWNNLFNBQWQsQ0FBd0JDLE1BQXhCLENBQStCLFVBQS9CO0FBQ0FOLGtCQUFVLENBQUNELENBQUQsQ0FBVixDQUFjUSxLQUFkLENBQW9CQyxPQUFwQixHQUE4QixNQUE5QjtBQUNIOztBQUVEUCxjQUFRLEdBQUdDLFFBQVEsQ0FBQ08sb0JBQVQsQ0FBOEIsSUFB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cUM7O0FBOE8zQnJCLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwcm9kdWN0XFxbaWRdLmpzLmM0MGQ0NTA5MjFlOTA0ZmFiYzBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY2xhc3MgUHJvZHVjdERldGFpbHNUYWIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIG9wZW5UYWJTZWN0aW9uID0gKGV2dCwgdGFiTm1hZSkgPT4ge1xyXG4gICAgICAgIGxldCBpLCB0YWJjb250ZW50LCB0YWJsaW5rcztcclxuICAgICAgICB0YWJjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYnMtaXRlbVwiKTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGFiY29udGVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0YWJjb250ZW50W2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJmYWRlSW5VcFwiKTtcclxuICAgICAgICAgICAgdGFiY29udGVudFtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0YWJsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwibGlcIik7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHRhYmxpbmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRhYmxpbmtzW2ldLmNsYXNzTmFtZSA9IHRhYmxpbmtzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiY3VycmVudFwiLCBcIlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYk5tYWUpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFiTm1hZSkuY2xhc3NOYW1lICs9IFwiIGZhZGVJblVwIGFuaW1hdGVkXCI7XHJcbiAgICAgICAgZXZ0LmN1cnJlbnRUYXJnZXQuY2xhc3NOYW1lICs9IFwiY3VycmVudFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYiBwcm9kdWN0cy1kZXRhaWxzLXRhYlwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRhYnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpOyB0aGlzLm9wZW5UYWJTZWN0aW9uKGUsICd0YWIxJyl9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJyZW50XCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdFwiPjwvZGl2PiBNw7QgdOG6o1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7LyogPGxpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge2UucHJldmVudERlZmF1bHQoKTsgdGhpcy5vcGVuVGFiU2VjdGlvbihlLCAndGFiMicpfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdFwiPjwvZGl2PiBUaMO0bmcgdGluIHRow6ptXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpOyB0aGlzLm9wZW5UYWJTZWN0aW9uKGUsICd0YWI1Jyl9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG90XCI+PC9kaXY+IMSQw6FuaCBnacOhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YWIxXCIgY2xhc3NOYW1lPVwidGFicy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtZGV0YWlscy10YWItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMucHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInRhYjJcIiBjbGFzc05hbWU9XCJ0YWJzLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1kZXRhaWxzLXRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkNvbG9yOjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkJsdWUsIFB1cnBsZSwgV2hpdGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+U2l6ZTo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yMCwgMjQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+TWF0ZXJpYWw6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTAwJSBQb2x5ZXN0ZXI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+SGVpZ2h0OjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE4MCBjbSAtIDUnIDEx4oCdPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkJ1c3Q6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+ODMgY20gLSAzMuKAnTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5XYWlzdDo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD41NyBjbSAtIDIy4oCdPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkhpcHM6PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+ODggY20gLSAzNTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5TaGlwcGluZzo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5GcmVlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInRhYjNcIiBjbGFzc05hbWU9XCJ0YWJzLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1kZXRhaWxzLXRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5TaGlwcGluZzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlRoaXMgaXRlbSBTaGlwIHRvIFVTQTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+RGVsaXZlcnk8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXN0aW1hdGVkIGJldHdlZW4gV2VkbmVzZGF5IDA3LzMxLzIwMjAgYW5kIE1vbmRheSAwOC8wNS8yMDIwIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaWxsIHVzdWFsbHkgc2hpcCB3aXRoaW4gMSBidXNzaW5lc3MgZGF5LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0YWI0XCIgY2xhc3NOYW1lPVwidGFicy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtZGV0YWlscy10YWItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TuG6v3UgYuG6oW4gxJFhbmcgdMOsbSBraeG6v20gbeG7mXQgdHJhbmcgd2ViIMSR4buDIG11YSB2w6AgYsOhbiBow6BuZyB0cuG7sWMgdHV54bq/biB0aMOsIFNob3BlZS52biBsw6AgbeG7mXQgc+G7sSBs4buxYSBjaOG7jW4gdHV54buHdCB24budaSBkw6BuaCBjaG8gYuG6oW4uIELhuqNuIGNo4bqldCBj4bunYSBTaG9wZWUgbMOgIG3hu5l0IHNvY2lhbCBFLWNvbW1lcmNlIHBsYXRmb3JtIC0gbuG7gW4gdOG6o25nIHRyYW5nIHdlYiB0aMawxqFuZyBt4bqhaSDEkWnhu4duIHThu60gdMOtY2ggaOG7o3AgbeG6oW5nIHjDoyBo4buZaS4gxJBp4buBdSBuw6B5IGNobyBwaMOpcCBuZ8aw4budaSBtdWEgdsOgIG5nxrDhu51pIGLDoW4gaMOgbmcgZOG7hSBkw6BuZyB0xrDGoW5nIHTDoWMsIHRyYW8gxJHhu5VpIHRow7RuZyB0aW4gduG7gSBz4bqjbiBwaOG6qW0gdsOgIGNoxrDGoW5nIHRyw6xuaCBraHV54bq/biBtw6NpIGPhu6dhIHNob3AuIE5o4budIG7hu4FuIHThuqNuZyDEkcOzLCB2aeG7h2MgbXVhIGLDoW4gdHLDqm4gU2hvcGVlIHRy4bufIG7Dqm4gbmhhbmggY2jDs25nIHbDoCDEkcahbiBnaeG6o24gaMahbi4gQuG6oW4gY8OzIHRo4buDIHRyw7IgY2h1eeG7h24gdHLhu7FjIHRp4bq/cCB24bubaSBuaMOgIGLDoW4gaMOgbmcgxJHhu4MgaOG7j2kgdHLhu7FjIHRp4bq/cCB24buBIG3hurd0IGjDoG5nIGPhuqduIG11YS4gQ8OybiBu4bq/dSBi4bqhbiBtdeG7kW4gdMOsbSBtdWEgbmjhu69uZyBkw7JuZyBz4bqjbiBwaOG6qW0gY2jDrW5oIGjDo25nLCB1eSB0w61uLCBTaG9wZWUgTWFsbCBjaMOtbmggbMOgIHPhu7EgbOG7sWEgY2jhu41uIGzDrSB0xrDhu59uZyBkw6BuaCBjaG8gYuG6oW4uIMSQ4buDIGLhuqFuIGPDsyB0aOG7gyBk4buFIGTDoG5nIGtoaSB0w6xtIGhp4buDdSB2w6Agc+G7rSBk4bulbmcgc+G6o24gcGjhuqltLCBTaG9wZWUgQmxvZyAtIHRyYW5nIGJsb2cgdGjDtG5nIHRpbiBjaMOtbmggdGjhu6ljIGPhu6dhIFNob3BlZSAtIHPhur0gZ2nDunAgYuG6oW4gY8OzIHRo4buDIHTDrG0gxJHGsOG7o2MgY2hvIG3DrG5oIGPDoWMga2nhur9uIHRo4bupYyB24buBIHh1IGjGsOG7m25nIHRo4budaSB0cmFuZywgcmV2aWV3IGPDtG5nIG5naOG7hywgbeG6uW8gbMOgbSDEkeG6uXAsIHRpbiB04bupYyB0acOqdSBkw7luZyB2w6AgZGVhbCBnacOhIHThu5F0IGLhuqV0IG5n4budLlxyXG5cclxuxJDhur9uIHbhu5tpIFNob3BlZSwgY8ahIGjhu5lpIMSR4buDIHRy4bufIHRow6BuaCBt4buZdCBuaMOgIGLDoW4gaMOgbmcgZOG7hSBkw6BuZyBoxqFuIGJhbyBnaeG7nSBo4bq/dC4gQ2jhu4kgduG7m2kgdsOgaSB0aGFvIHTDoWMgdHLDqm4g4bupbmcgZOG7pW5nLCBi4bqhbiDEkcOjIGPDsyB0aOG7gyDEkcSDbmcgYsOhbiBuZ2F5IG5o4buvbmcgc+G6o24gcGjhuqltIGPhu6dhIG3DrG5oLiBLaMO0bmcgbmjhu69uZyB0aOG6vywgY8OhYyBuaMOgIGLDoW4gaMOgbmcgY8OzIHRo4buDIHThu7EgdOG6oW8gY2jGsMahbmcgdHLDrG5oIGtodXnhur9uIG3Do2kgdHLDqm4gU2hvcGVlIMSR4buDIHRodSBow7p0IG5nxrDhu51pIG11YSB24bubaSBuaOG7r25nIHPhuqNuIHBo4bqpbSBjw7MgbeG7qWMgZ2nDoSBo4bqlcCBk4bqrbi4gS2hpIMSRxINuZyBuaOG6rXAgdOG6oWkgU2hvcGVlIEvDqm5oIG5nxrDhu51pIGLDoW4sIGLhuqFuIGPDsyB0aOG7gyBk4buFIGTDoG5nIHBow6JuIGxv4bqhaSBz4bqjbiBwaOG6qW0sIHRoZW8gZMO1aSDEkcahbiBow6BuZywgY2jEg20gc8OzYyBraMOhY2ggaMOgbmcgdsOgIGPhuq1wIG5o4bqtcCBuZ2F5IGPDoWMgaG/huqF0IMSR4buZbmcgY+G7p2Egc2hvcC48L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInRhYjVcIiBjbGFzc05hbWU9XCJ0YWJzLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1kZXRhaWxzLXRhYi1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzLXJldmlldy1mb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkN1c3RvbWVyIFJldmlld3M8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3Rhcic+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3Rhcic+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3Rhcic+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3Rhcic+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC1zdGFyJz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5CYXNlZCBvbiAzIHJldmlld3M8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZGVmYXVsdC1idG5cIj5Xcml0ZSBhIFJldmlldzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1jb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlldy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXN0YXInPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyJz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3Rhcic+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXN0YXInPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4LXN0YXInPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkdvb2Q8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PHN0cm9uZz5BZG1pbjwvc3Ryb25nPiBvbiA8c3Ryb25nPlNlcCAyMSwgMjAxOTwvc3Ryb25nPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyJz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3Rhcic+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXN0YXInPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyJz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieC1zdGFyJz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Hb29kPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxzdHJvbmc+QWRtaW48L3N0cm9uZz4gb24gPHN0cm9uZz5TZXAgMjEsIDIwMTk8L3N0cm9uZz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3Rhcic+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYnhzLXN0YXInPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2J4IGJ4cy1zdGFyJz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdieCBieHMtc3Rhcic+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT0nYnggYngtc3Rhcic+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+R29vZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48c3Ryb25nPkFkbWluPC9zdHJvbmc+IG9uIDxzdHJvbmc+U2VwIDIxLCAyMDE5PC9zdHJvbmc+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3LWZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPldyaXRlIGEgUmV2aWV3PC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtlID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInJldmlldy10aXRsZVwiIG5hbWU9XCJyZXZpZXctdGl0bGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcmV2aWV3IGEgdGl0bGVcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJyZXZpZXctYm9keVwiIGlkPVwicmV2aWV3LWJvZHlcIiBjb2xzPVwiMzBcIiByb3dzPVwiNlwiIHBsYWNlaG9sZGVyPVwiV3JpdGUgeW91ciBjb21tZW50cyBoZXJlXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJkZWZhdWx0LWJ0blwiPlN1Ym1pdCBSZXZpZXc8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHNUYWI7Il0sInNvdXJjZVJvb3QiOiIifQ==
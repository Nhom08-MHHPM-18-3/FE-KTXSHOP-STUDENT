webpackHotUpdate("static\\development\\pages\\checkout.js",{

/***/ "./components/Checkout/CheckoutContent.js":
/*!************************************************!*\
  !*** ./components/Checkout/CheckoutContent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _userForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userForm */ "./components/Checkout/userForm.js");
/* harmony import */ var _OrderSummary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderSummary */ "./components/Checkout/OrderSummary.js");
var _jsxFileName = "F:\\N\u0103m 4 h\u1ECDc k\u1EF3 1\\M\xF4 h\xECnh h\xF3a ph\u1EA7n m\u1EC1m\\New folder (2)\\components\\Checkout\\CheckoutContent.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CheckoutContent = ({
  cart
}) => {
  _s();

  function handleSubmit() {
    console.log("Form submitted.");
  }

  const stateSchema = {
    fullName: {
      value: "",
      error: ""
    },
    address: {
      value: "",
      error: ""
    },
    wards: {
      value: "",
      error: ""
    },
    city: {
      value: "",
      error: ""
    },
    city: {
      value: "",
      error: ""
    },
    state: {
      value: "",
      error: ""
    },
    zip: {
      value: "",
      error: ""
    },
    email: {
      value: "",
      error: ""
    },
    phone: {
      value: "",
      error: ""
    }
  };
  const validationStateSchema = {
    fullName: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: "Vui lòng điền họ tên"
      }
    },
    address: {
      required: true,
      validator: {
        error: "Vui lòng điền địa chỉ"
      }
    },
    city: {
      required: true,
      validator: {
        error: "Invalid last name format."
      }
    },
    state: {
      required: true,
      validator: {
        error: "Invalid last name format."
      }
    },
    // email: {
    //     required: true,
    //     validator: {
    //         regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //         error: "Invalid email format."
    //     }
    // },
    phone: {
      required: true,
      validator: {
        regEx: /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{9})$/,
        error: "Số điện thoại hợp lệ như 07999999999."
      }
    }
  };
  const {
    state,
    handleOnChange,
    handleOnSubmit,
    disable
  } = Object(_userForm__WEBPACK_IMPORTED_MODULE_1__["default"])(stateSchema, validationStateSchema, handleSubmit);
  const errorStyle = {
    color: "red",
    fontSize: "13px"
  };
  return __jsx("section", {
    className: "checkout-area ptb-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "user-actions",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icofont-ui-file",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 29
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 29
    }
  }, "Ch\xFAng t\xF4i ch\u1EC9 nh\u1EADn \u0111\u01A1n h\xE0ng v\u1EDBi \u0111\u1ECBa ch\u1EC9 trong l\xE0ng \u0111\u1EA1i h\u1ECDc!", __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 94
    }
  }))))), __jsx("form", {
    onSubmit: handleOnSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-lg-6 col-md-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "billing-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }, __jsx("h3", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 33
    }
  }, "Th\xF4ng tin c\xE1 nh\xE2n"), __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 45
    }
  }, "H\u1ECD v\xE0 t\xEAn", __jsx("span", {
    className: "required",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 61
    }
  }, "*")), __jsx("input", {
    type: "text",
    name: "firstName",
    className: "form-control",
    placeholder: "Ex: Nguy\u1EC5n V\u0103n A",
    onChange: handleOnChange,
    value: state.fullName.value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 45
    }
  }), state.fullName.error && __jsx("p", {
    style: errorStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 70
    }
  }, state.fullName.error))), __jsx("div", {
    className: "col-lg-12 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 45
    }
  }, "S\u1ED1 nh\xE0/ \u0111\u01B0\u1EDDng/ t\xF2a / khu k\xED t\xFAc x\xE1", __jsx("span", {
    className: "required",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 86
    }
  }, "*")), __jsx("input", {
    type: "text",
    name: "address",
    className: "form-control",
    onChange: handleOnChange,
    placeholder: "Ex: t\xF2a D5 KTX khu B",
    value: state.address.value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 45
    }
  }), state.address.error && __jsx("p", {
    style: errorStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 69
    }
  }, state.address.error))), __jsx("div", {
    className: "col-lg-12 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 45
    }
  }, "X\xE3/ Ph\u01B0\u1EDDng", __jsx("span", {
    className: "required",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 62
    }
  }, "*")), __jsx("input", {
    type: "text",
    name: "city",
    className: "form-control",
    onChange: handleOnChange,
    value: state.city.value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 45
    }
  }), state.city.error && __jsx("p", {
    style: errorStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 66
    }
  }, state.city.error))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 45
    }
  }, "Qu\u1EADn/Huy\u1EC7n", __jsx("span", {
    className: "required",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 62
    }
  }, "*")), __jsx("input", {
    type: "text",
    name: "state",
    className: "form-control",
    onChange: handleOnChange,
    value: state.state.value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 45
    }
  }), state.state.error && __jsx("p", {
    style: errorStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 67
    }
  }, state.state.error))), __jsx("div", {
    className: "col-lg-12 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 45
    }
  }, "T\u1EC9nh/Th\xE0nh ph\u1ED1", __jsx("span", {
    className: "required",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 66
    }
  }, "*")), __jsx("input", {
    type: "text",
    name: "city",
    className: "form-control",
    onChange: handleOnChange,
    value: state.city.value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 45
    }
  }), state.city.error && __jsx("p", {
    style: errorStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 66
    }
  }, state.city.error))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 45
    }
  }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ", __jsx("span", {
    className: "required",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 66
    }
  }, "*")), __jsx("input", {
    type: "text",
    name: "phone",
    className: "form-control",
    onChange: handleOnChange,
    value: state.phone.value,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 45
    }
  }), state.phone.error && __jsx("p", {
    style: errorStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 67
    }
  }, state.phone.error))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 41
    }
  }, __jsx("textarea", {
    name: "notes",
    id: "notes",
    cols: "30",
    rows: "4",
    placeholder: "Ghi ch\xFA v\u1EDBi \u0111\u01A1n h\xE0ng",
    className: "form-control",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 45
    }
  })))))), __jsx(_OrderSummary__WEBPACK_IMPORTED_MODULE_2__["default"], {
    disabled: disable,
    stateData: cart,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 25
    }
  })))));
};

_s(CheckoutContent, "TJwydCSN0z/x09ht3aUZVL9ZvgI=", false, function () {
  return [_userForm__WEBPACK_IMPORTED_MODULE_1__["default"]];
});

_c = CheckoutContent;
/* harmony default export */ __webpack_exports__["default"] = (CheckoutContent);

var _c;

$RefreshReg$(_c, "CheckoutContent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoZWNrb3V0L0NoZWNrb3V0Q29udGVudC5qcyJdLCJuYW1lcyI6WyJDaGVja291dENvbnRlbnQiLCJjYXJ0IiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsInN0YXRlU2NoZW1hIiwiZnVsbE5hbWUiLCJ2YWx1ZSIsImVycm9yIiwiYWRkcmVzcyIsIndhcmRzIiwiY2l0eSIsInN0YXRlIiwiemlwIiwiZW1haWwiLCJwaG9uZSIsInZhbGlkYXRpb25TdGF0ZVNjaGVtYSIsInJlcXVpcmVkIiwidmFsaWRhdG9yIiwicmVnRXgiLCJoYW5kbGVPbkNoYW5nZSIsImhhbmRsZU9uU3VibWl0IiwiZGlzYWJsZSIsInVzZUZvcm0iLCJlcnJvclN0eWxlIiwiY29sb3IiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxlQUFlLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBYztBQUFBOztBQUNsQyxXQUFTQyxZQUFULEdBQXdCO0FBQ3BCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNIOztBQUdELFFBQU1DLFdBQVcsR0FBRztBQUNoQkMsWUFBUSxFQUFFO0FBQUVDLFdBQUssRUFBRSxFQUFUO0FBQWFDLFdBQUssRUFBRTtBQUFwQixLQURNO0FBRWhCQyxXQUFPLEVBQUU7QUFBRUYsV0FBSyxFQUFFLEVBQVQ7QUFBYUMsV0FBSyxFQUFFO0FBQXBCLEtBRk87QUFHaEJFLFNBQUssRUFBRTtBQUFFSCxXQUFLLEVBQUUsRUFBVDtBQUFhQyxXQUFLLEVBQUU7QUFBcEIsS0FIUztBQUtoQkcsUUFBSSxFQUFFO0FBQUVKLFdBQUssRUFBRSxFQUFUO0FBQWFDLFdBQUssRUFBRTtBQUFwQixLQUxVO0FBTWhCRyxRQUFJLEVBQUU7QUFBRUosV0FBSyxFQUFFLEVBQVQ7QUFBYUMsV0FBSyxFQUFFO0FBQXBCLEtBTlU7QUFPaEJJLFNB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBVSxRQUFJLEVBQUMsT0FBZjtBQUF1QixNQUFFLEVBQUMsT0FBMUI7QUFBa0MsUUFBSSxFQUFDLElBQXZDO0FBQTRDLFFBQUksRUFBQyxHQUFqRDtBQUFxRCxlQUFXLEVBQUMsMkNBQWpFO0FBQXdGLGFBQVMsRUFBQyxjQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQTFGSixDQUhKLENBREosQ0FESixFQXVHSSxNQUFDLHFEQUFEO0FBQWMsWUFBUSxFQUFFYyxPQUF4QjtBQUFpQyxhQUFTLEVBQUVyQixJQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkdKLENBREosQ0FWSixDQURKLENBREo7QUEwSEgsQ0F0TUQ7O0dBQU1ELGU7VUFrRXlEdUIsaUQ7OztLQWxFekR2QixlO0FBd01TQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY2hlY2tvdXQuanMuNTM0ODQ1ZDJiNjM3ZjA2MjI5NjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4vdXNlckZvcm0nO1xyXG5pbXBvcnQgT3JkZXJTdW1tYXJ5IGZyb20gJy4vT3JkZXJTdW1tYXJ5JztcclxuXHJcbmNvbnN0IENoZWNrb3V0Q29udGVudCA9ICh7IGNhcnQgfSkgPT4ge1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRm9ybSBzdWJtaXR0ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBzdGF0ZVNjaGVtYSA9IHtcclxuICAgICAgICBmdWxsTmFtZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgICAgICBhZGRyZXNzOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgICAgIHdhcmRzOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgIGNpdHk6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICAgICAgY2l0eTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgICAgICBzdGF0ZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgICAgICB6aXA6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICAgICAgZW1haWw6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICAgICAgcGhvbmU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdmFsaWRhdGlvblN0YXRlU2NoZW1hID0ge1xyXG4gICAgICAgIGZ1bGxOYW1lOiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgICAgICAgICAgIHJlZ0V4OiAvXlthLXpBLVpdKyQvLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiVnVpIGzDsm5nIMSRaeG7gW4gaOG7jSB0w6puXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGFkZHJlc3M6IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiVnVpIGzDsm5nIMSRaeG7gW4gxJHhu4thIGNo4buJXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNpdHk6IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBsYXN0IG5hbWUgZm9ybWF0LlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzdGF0ZToge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGxhc3QgbmFtZSBmb3JtYXQuXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIGVtYWlsOiB7XHJcbiAgICAgICAgLy8gICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgIC8vICAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgICAvLyAgICAgICAgIHJlZ0V4OiAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyxcclxuICAgICAgICAvLyAgICAgICAgIGVycm9yOiBcIkludmFsaWQgZW1haWwgZm9ybWF0LlwiXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG5cclxuICAgICAgICBwaG9uZToge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgICAgICAgICByZWdFeDogL15cXCtbMC05XT8oKVswLTldKFxcc3xcXFMpKFxcZFswLTldezl9KSQvLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiU+G7kSDEkWnhu4duIHRob+G6oWkgaOG7o3AgbOG7hyBuaMawIDA3OTk5OTk5OTk5LlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHsgc3RhdGUsIGhhbmRsZU9uQ2hhbmdlLCBoYW5kbGVPblN1Ym1pdCwgZGlzYWJsZSB9ID0gdXNlRm9ybShcclxuICAgICAgICBzdGF0ZVNjaGVtYSxcclxuICAgICAgICB2YWxpZGF0aW9uU3RhdGVTY2hlbWEsXHJcbiAgICAgICAgaGFuZGxlU3VibWl0XHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGVycm9yU3R5bGUgPSB7XHJcbiAgICAgICAgY29sb3I6IFwicmVkXCIsXHJcbiAgICAgICAgZm9udFNpemU6IFwiMTNweFwiXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjaGVja291dC1hcmVhIHB0Yi0xMDBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlci1hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29mb250LXVpLWZpbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5DaMO6bmcgdMO0aSBjaOG7iSBuaOG6rW4gxJHGoW4gaMOgbmcgduG7m2kgxJHhu4thIGNo4buJIHRyb25nIGzDoG5nIMSR4bqhaSBo4buNYyE8YSBocmVmPVwiI1wiPjwvYT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU9uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiaWxsaW5nLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5UaMO0bmcgdGluIGPDoSBuaMOibjwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5I4buNIHbDoCB0w6puPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXg6IE5ndXnhu4VuIFbEg24gQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmZ1bGxOYW1lLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmZ1bGxOYW1lLmVycm9yICYmIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuZnVsbE5hbWUuZXJyb3J9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U+G7kSBuaMOgLyDEkcaw4budbmcvIHTDsmEgLyBraHUga8OtIHTDumMgeMOhPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXg6IHTDsmEgRDUgS1RYIGtodSBCXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmFkZHJlc3MudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuYWRkcmVzcy5lcnJvciAmJiA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLmFkZHJlc3MuZXJyb3J9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+WMOjLyBQaMaw4budbmc8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmNpdHkudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuY2l0eS5lcnJvciAmJiA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLmNpdHkuZXJyb3J9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlF14bqtbi9IdXnhu4duPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuc3RhdGUuZXJyb3IgJiYgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5zdGF0ZS5lcnJvcn08L3A+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlThu4luaC9UaMOgbmggcGjhu5E8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZFwiPio8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2l0eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLmNpdHkudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUuY2l0eS5lcnJvciAmJiA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLmNpdHkuZXJyb3J9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U+G7kSDEkWnhu4duIHRob+G6oWkgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdGUucGhvbmUudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUucGhvbmUuZXJyb3IgJiYgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5waG9uZS5lcnJvcn08L3A+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm5vdGVzXCIgaWQ9XCJub3Rlc1wiIGNvbHM9XCIzMFwiIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCJHaGkgY2jDuiB24bubaSDEkcahbiBow6BuZ1wiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPcmRlclN1bW1hcnkgZGlzYWJsZWQ9e2Rpc2FibGV9IHN0YXRlRGF0YT17Y2FydH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRDb250ZW50OyJdLCJzb3VyY2VSb290IjoiIn0=
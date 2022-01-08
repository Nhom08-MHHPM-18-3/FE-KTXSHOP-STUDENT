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
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "user-actions",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "icofont-ui-file",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }, "Ch\xFAng t\xF4i ch\u1EC9 nh\u1EADn \u0111\u01A1n h\xE0ng v\u1EDBi \u0111\u1ECBa ch\u1EC9 trong l\xE0ng \u0111\u1EA1i h\u1ECDc!", __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 94
    }
  }))))), __jsx("form", {
    onSubmit: handleOnSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-lg-6 col-md-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "billing-details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  }, __jsx("h3", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 33
    }
  }, "Th\xF4ng tin c\xE1 nh\xE2n"), __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 41
    }
  })), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 45
    }
  }, "H\u1ECD v\xE0 t\xEAn", __jsx("span", {
    className: "required",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
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
      lineNumber: 105,
      columnNumber: 45
    }
  }), state.fullName.error && __jsx("p", {
    style: errorStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 70
    }
  }, state.fullName.error))), __jsx("div", {
    className: "col-lg-12 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 45
    }
  }, "S\u1ED1 nh\xE0/ \u0111\u01B0\u1EDDng/ t\xF2a / khu k\xED t\xFAc x\xE1", __jsx("span", {
    className: "required",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
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
      lineNumber: 120,
      columnNumber: 45
    }
  }), state.address.error && __jsx("p", {
    style: errorStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 69
    }
  }, state.address.error))), __jsx("div", {
    className: "col-lg-12 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 45
    }
  }, "X\xE3/ Ph\u01B0\u1EDDng", __jsx("span", {
    className: "required",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
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
      lineNumber: 135,
      columnNumber: 45
    }
  }), state.city.error && __jsx("p", {
    style: errorStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 66
    }
  }, state.city.error))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 45
    }
  }, "Qu\u1EADn/Huy\u1EC7n", __jsx("span", {
    className: "required",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
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
      lineNumber: 149,
      columnNumber: 45
    }
  }), state.state.error && __jsx("p", {
    style: errorStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 67
    }
  }, state.state.error))), __jsx("div", {
    className: "col-lg-12 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 45
    }
  }, "T\u1EC9nh/Th\xE0nh ph\u1ED1", __jsx("span", {
    className: "required",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
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
      lineNumber: 162,
      columnNumber: 45
    }
  }), state.city.error && __jsx("p", {
    style: errorStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 66
    }
  }, state.city.error))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 41
    }
  }, __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 45
    }
  }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i ", __jsx("span", {
    className: "required",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
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
      lineNumber: 175,
      columnNumber: 45
    }
  }), state.phone.error && __jsx("p", {
    style: errorStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 67
    }
  }, state.phone.error))), __jsx("div", {
    className: "col-lg-12 col-md-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
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
      lineNumber: 188,
      columnNumber: 45
    }
  })))))), __jsx(_OrderSummary__WEBPACK_IMPORTED_MODULE_2__["default"], {
    disabled: disable,
    stateData: cart,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoZWNrb3V0L0NoZWNrb3V0Q29udGVudC5qcyJdLCJuYW1lcyI6WyJDaGVja291dENvbnRlbnQiLCJjYXJ0IiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsInN0YXRlU2NoZW1hIiwiZnVsbE5hbWUiLCJ2YWx1ZSIsImVycm9yIiwiYWRkcmVzcyIsImNpdHkiLCJzdGF0ZSIsInppcCIsImVtYWlsIiwicGhvbmUiLCJ2YWxpZGF0aW9uU3RhdGVTY2hlbWEiLCJyZXF1aXJlZCIsInZhbGlkYXRvciIsInJlZ0V4IiwiaGFuZGxlT25DaGFuZ2UiLCJoYW5kbGVPblN1Ym1pdCIsImRpc2FibGUiLCJ1c2VGb3JtIiwiZXJyb3JTdHlsZSIsImNvbG9yIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsZUFBZSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWM7QUFBQTs7QUFDbEMsV0FBU0MsWUFBVCxHQUF3QjtBQUNwQkMsV0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDSDs7QUFHRCxRQUFNQyxXQUFXLEdBQUc7QUFDaEJDLFlBQVEsRUFBRTtBQUFFQyxXQUFLLEVBQUUsRUFBVDtBQUFhQyxXQUFLLEVBQUU7QUFBcEIsS0FETTtBQUVoQkMsV0FBTyxFQUFFO0FBQUVGLFdBQUssRUFBRSxFQUFUO0FBQWFDLFdBQUssRUFBRTtBQUFwQixLQUZPO0FBR2hCRSxRQUFJLEVBQUU7QUFBRUgsV0FBSyxFQUFFLEVBQVQ7QUFBYUMsV0FBSyxFQUFFO0FBQXBCLEtBSFU7QUFJaEJHLFNBQUssRUFBRTtBQUFFSixXQUFLLEVBQUUsRUFBVDtBQUFhQyxXQUFLLEVBQUU7QUFBcEIsS0FKUztBQUtoQkksT0FBRyxFQUFFO0FBQUVMLFdBQUssRUFBRSxFQUFUO0FBQWFDLFdBQUssRUFBRTtBQUFwQixLQUxXO0FBTWhCSyxTQUFLLEVBQUU7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LElBQXZDO0FBQTRDLFFBQUksRUFBQyxHQUFqRDtBQUFxRCxlQUFXLEVBQUMsMkNBQWpFO0FBQXdGLGFBQVMsRUFBQyxjQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQTFGSixDQUhKLENBREosQ0FESixFQXVHSSxNQUFDLHFEQUFEO0FBQWMsWUFBUSxFQUFFYSxPQUF4QjtBQUFpQyxhQUFTLEVBQUVwQixJQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkdKLENBREosQ0FWSixDQURKLENBREo7QUEwSEgsQ0FuTUQ7O0dBQU1ELGU7VUErRHlEc0IsaUQ7OztLQS9EekR0QixlO0FBcU1TQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY2hlY2tvdXQuanMuNGQ5ZGEzYWU5YmNlMWFkNzE4NjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4vdXNlckZvcm0nO1xyXG5pbXBvcnQgT3JkZXJTdW1tYXJ5IGZyb20gJy4vT3JkZXJTdW1tYXJ5JztcclxuXHJcbmNvbnN0IENoZWNrb3V0Q29udGVudCA9ICh7IGNhcnQgfSkgPT4ge1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRm9ybSBzdWJtaXR0ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBzdGF0ZVNjaGVtYSA9IHtcclxuICAgICAgICBmdWxsTmFtZTogeyB2YWx1ZTogXCJcIiwgZXJyb3I6IFwiXCIgfSxcclxuICAgICAgICBhZGRyZXNzOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgICAgIGNpdHk6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICAgICAgc3RhdGU6IHsgdmFsdWU6IFwiXCIsIGVycm9yOiBcIlwiIH0sXHJcbiAgICAgICAgemlwOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgICAgIGVtYWlsOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9LFxyXG4gICAgICAgIHBob25lOiB7IHZhbHVlOiBcIlwiLCBlcnJvcjogXCJcIiB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHZhbGlkYXRpb25TdGF0ZVNjaGVtYSA9IHtcclxuICAgICAgICBmdWxsTmFtZToge1xyXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgICAgICAgICByZWdFeDogL15bYS16QS1aXSskLyxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlZ1aSBsw7JuZyDEkWnhu4FuIGjhu40gdMOqblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhZGRyZXNzOiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlZ1aSBsw7JuZyDEkWnhu4FuIMSR4buLYSBjaOG7iVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjaXR5OiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIkludmFsaWQgbGFzdCBuYW1lIGZvcm1hdC5cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc3RhdGU6IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgZXJyb3I6IFwiSW52YWxpZCBsYXN0IG5hbWUgZm9ybWF0LlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBlbWFpbDoge1xyXG4gICAgICAgIC8vICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgICAgLy8gICAgICAgICByZWdFeDogL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8sXHJcbiAgICAgICAgLy8gICAgICAgICBlcnJvcjogXCJJbnZhbGlkIGVtYWlsIGZvcm1hdC5cIlxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuXHJcbiAgICAgICAgcGhvbmU6IHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbGlkYXRvcjoge1xyXG4gICAgICAgICAgICAgICAgcmVnRXg6IC9eXFwrWzAtOV0/KClbMC05XShcXHN8XFxTKShcXGRbMC05XXs5fSkkLyxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBcIlPhu5EgxJFp4buHbiB0aG/huqFpIGjhu6NwIGzhu4cgbmjGsCAwNzk5OTk5OTk5OS5cIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB7IHN0YXRlLCBoYW5kbGVPbkNoYW5nZSwgaGFuZGxlT25TdWJtaXQsIGRpc2FibGUgfSA9IHVzZUZvcm0oXHJcbiAgICAgICAgc3RhdGVTY2hlbWEsXHJcbiAgICAgICAgdmFsaWRhdGlvblN0YXRlU2NoZW1hLFxyXG4gICAgICAgIGhhbmRsZVN1Ym1pdFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBlcnJvclN0eWxlID0ge1xyXG4gICAgICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjEzcHhcIlxyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2hlY2tvdXQtYXJlYSBwdGItMTAwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvZm9udC11aS1maWxlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+Q2jDum5nIHTDtGkgY2jhu4kgbmjhuq1uIMSRxqFuIGjDoG5nIHbhu5tpIMSR4buLYSBjaOG7iSB0cm9uZyBsw6BuZyDEkeG6oWkgaOG7jWMhPGEgaHJlZj1cIiNcIj48L2E+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVPblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmlsbGluZy1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+VGjDtG5nIHRpbiBjw6EgbmjDom48L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+SOG7jSB2w6AgdMOqbjxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4OiBOZ3V54buFbiBWxINuIEFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5mdWxsTmFtZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS5mdWxsTmFtZS5lcnJvciAmJiA8cCBzdHlsZT17ZXJyb3JTdHlsZX0+e3N0YXRlLmZ1bGxOYW1lLmVycm9yfTwvcD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlPhu5EgbmjDoC8gxJHGsOG7nW5nLyB0w7JhIC8ga2h1IGvDrSB0w7pjIHjDoTxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4OiB0w7JhIEQ1IEtUWCBraHUgQlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5hZGRyZXNzLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmFkZHJlc3MuZXJyb3IgJiYgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5hZGRyZXNzLmVycm9yfTwvcD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPljDoy8gUGjGsOG7nW5nPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5jaXR5LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmNpdHkuZXJyb3IgJiYgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5jaXR5LmVycm9yfTwvcD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5RdeG6rW4vSHV54buHbjxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnN0YXRlLmVycm9yICYmIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUuc3RhdGUuZXJyb3J9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5U4buJbmgvVGjDoG5oIHBo4buRPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWRcIj4qPC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5jaXR5LnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLmNpdHkuZXJyb3IgJiYgPHAgc3R5bGU9e2Vycm9yU3R5bGV9PntzdGF0ZS5jaXR5LmVycm9yfTwvcD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlPhu5EgxJFp4buHbiB0aG/huqFpIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnBob25lLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLnBob25lLmVycm9yICYmIDxwIHN0eWxlPXtlcnJvclN0eWxlfT57c3RhdGUucGhvbmUuZXJyb3J9PC9wPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJub3Rlc1wiIGlkPVwibm90ZXNcIiBjb2xzPVwiMzBcIiByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPVwiR2hpIGNow7ogduG7m2kgxJHGoW4gaMOgbmdcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8T3JkZXJTdW1tYXJ5IGRpc2FibGVkPXtkaXNhYmxlfSBzdGF0ZURhdGE9e2NhcnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0Q29udGVudDsiXSwic291cmNlUm9vdCI6IiJ9
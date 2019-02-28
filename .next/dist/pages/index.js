"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require("semantic-ui-react");

var _Token = require("../ethereum/Token");

var _Token2 = _interopRequireDefault(_Token);

var _TokenSale = require("../ethereum/TokenSale");

var _TokenSale2 = _interopRequireDefault(_TokenSale);

var _Layout = require("../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/jerry/Raccion/pages/index.js?entry";


var Token = function (_Component) {
  (0, _inherits3.default)(Token, _Component);

  function Token() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Token);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Token.__proto__ || (0, _getPrototypeOf2.default)(Token)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      account: "",
      tokenNumber: 1,
      open: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var account, tokenPrice2;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                // const account = await web3.eth.getAccounts();
                // const tokenSupply = await token.methods.totalSupply().call();
                // const tokenBalance = await token.methods.balanceOf(account[0]).call();
                // console.log("List: ", tokenSupply);
                // console.log("Account balance is: ", tokenBalance);
                // console.log("Account is: ", account);
                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                account = _context.sent;
                _context.next = 6;
                return _Token2.default.methods.balanceOf("0xDAc40A947834341B3e18A0D8D1B1cb04D26606F9").call();

              case 6:
                tokenPrice2 = _context.sent;

                console.log("balance of Contract: ", tokenPrice2);
              // const tokenPrice3 = await token.methods.balanceOf(account[0]).call();
              // console.log("balance of admin: ", tokenPrice3);
              // } else {
              //   alert("error occured!!");
              // }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.show = function (dimmer) {
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var account;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                account = _context2.sent;

                if (account == '') {
                  _this.setState({ account: "Please unlock Metamask !!" });
                } else {
                  _this.setState({ account: account[0] });
                  console.log("account", _this.state.account);
                }
                _this.setState({ dimmer: dimmer, open: true });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));
    }, _this.close = function () {
      return _this.setState({ open: false });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  // static async getInitialProps(props) {
  //     const tokenSupply = await token.methods.totalSupply().call();
  //     return (tokenSupply);
  // }

  (0, _createClass3.default)(Token, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          open = _state.open,
          dimmer = _state.dimmer;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), _react2.default.createElement("h1", {
        as: "h1",
        style: {
          textAlign: "center",
          marginTop: "34px",
          marginBottom: "20px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "chain", size: "huge", __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), "Raccion Token ICO sale"), _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), _react2.default.createElement("h3", {
        style: {
          textAlign: "center",
          marginTop: "34px",
          marginBottom: "20px",
          marginLeft: "30px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, "Introducing \"Raccion Token\" (RAC) || Token price is 0.001 Ether. || You currently have 0 RAC."), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement(_semanticUiReact.Input, {
        action: {
          color: "blue",
          labelPosition: "right",
          icon: "cart",
          content: "Buy Token",
          type: "submit"
        },
        min: "1",
        type: "number",
        pattern: "[0-9]",
        size: "massive",
        onChange: function onChange(event) {
          return _this3.setState({ tokenNumber: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react2.default.createElement(_semanticUiReact.Progress, { percent: 10000 / 3000, indicating: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, "3000/1000000 Tokens sold")), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react2.default.createElement(_semanticUiReact.Message, { info: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, _react2.default.createElement(_semanticUiReact.Message.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "info", __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }), " Notice")), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, "This token sale uses the Rinkeby Test Network with fake ether. Use a browser extension like Metamask to connect to the test network and participate in the ICO. Please be patient if the test network runs slowly.")))), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }), _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { onClick: this.show("blurring"), color: "brown", __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, "My Account")), _react2.default.createElement(_semanticUiReact.Modal, { dimmer: dimmer, open: open, onClose: this.close, __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, "Account address"), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, _react2.default.createElement("h1", { style: { textAlign: "center" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, this.state.account))), _react2.default.createElement(_semanticUiReact.Modal.Actions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: "blue", content: "Okay", onClick: this.close, __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }))));
    }
  }]);

  return Token;
}(_react.Component);

exports.default = Token;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2ViMyIsIkltYWdlIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkNoZWNrYm94IiwiSWNvbiIsIlByb2dyZXNzIiwiSGVhZGVyIiwiTW9kYWwiLCJ0b2tlbiIsInRva2VuU2FsZSIsIkxheW91dCIsIlRva2VuIiwic3RhdGUiLCJhY2NvdW50IiwidG9rZW5OdW1iZXIiLCJvcGVuIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJtZXRob2RzIiwiYmFsYW5jZU9mIiwiY2FsbCIsInRva2VuUHJpY2UyIiwiY29uc29sZSIsImxvZyIsInNob3ciLCJzZXRTdGF0ZSIsImRpbW1lciIsImNsb3NlIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsImNvbG9yIiwibGFiZWxQb3NpdGlvbiIsImljb24iLCJjb250ZW50IiwidHlwZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBVTs7OztBQUNqQixBQUNFLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOztBQUVGLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7Ozs7Ozs7ME1BTUosQTtlQUFRLEFBQ0csQUFDVDttQkFGTSxBQUVPLEFBQ2I7WUFITSxBQUdBLEE7QUFIQSxBQUNOLGEsQUFLRjsyRkFBVyxpQkFBQSxBQUFNLE9BQU47cUJBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBTO2dD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QSxBQUFPOztvQkFBUDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUEsUUFBSSxPQUFPLEVBQUUsV0FBYixBQUFXLEFBQWE7b0JBQXhCO3NCQUFBLEFBQXFDO0FBQXJDO2NBQXFDLEFBQUssTUFKaEQsQUFFRSxBQUNFLEFBQ0UsQUFBZ0QsQUFHcEQsNEJBQUMsY0FBRCx1QkFBQSxBQUFPOztvQkFBUDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxRQUFPLFNBQXJCLEFBQTZCLFFBQU8sU0FBUyxLQUE3QyxBQUFrRDtvQkFBbEQ7c0JBekZSLEFBQ0UsQUFnRkUsQUFPRSxBQUNFLEFBS1Q7QUFMUzs7Ozs7O0FBcEpRLEEsQUE0SnBCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2plcnJ5L1JhY2Npb24ifQ==
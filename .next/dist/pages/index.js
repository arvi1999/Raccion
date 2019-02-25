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
      tokenNumber: "",
      open: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var account, tokenSupply, tokenBalance;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _context.next = 3;
                return _web2.default.eth.getAccounts();

              case 3:
                account = _context.sent;
                _context.next = 6;
                return _Token2.default.methods.totalSupply().call();

              case 6:
                tokenSupply = _context.sent;
                _context.next = 9;
                return _Token2.default.methods.balanceOf(account[0]).call();

              case 9:
                tokenBalance = _context.sent;

                console.log("List: ", tokenSupply);
                console.log("Account balance is: ", tokenBalance);
                console.log("Account is: ", account);

              case 13:
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

                _this.setState({ account: account[0] });
                console.log("account", _this.state.account);
                _this.setState({ dimmer: dimmer, open: true });

              case 6:
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

  // show = dimmer => () => this.setState({ dimmer, open: true });


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
          lineNumber: 53
        }
      }, _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
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
          lineNumber: 55
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "chain", size: "huge", __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), "Raccion Token ICO sale"), _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
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
          lineNumber: 69
        }
      }, "Introducing \"Raccion Token\" (RAC) || Token price is 0.001 Ether. || You currently have 0 RAC."), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
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
          lineNumber: 85
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement(_semanticUiReact.Progress, { percent: 10000 / 3000, indicating: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, "3000/1000000 Tokens sold")), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement(_semanticUiReact.Message, { info: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement(_semanticUiReact.Message.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "info", __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }), " Notice")), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, "This token sale uses the Rinkeby Test Network with fake ether. Use a browser extension like Metamask to connect to the test network and participate in the ICO. Please be patient if the test network runs slowly.")))), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }), _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { onClick: this.show("blurring"), color: "brown", __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, "My Account")), _react2.default.createElement(_semanticUiReact.Modal, { dimmer: dimmer, open: open, onClose: this.close, __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, "Account address"), _react2.default.createElement(_semanticUiReact.Modal.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react2.default.createElement(_semanticUiReact.Modal.Description, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, _react2.default.createElement("h1", { style: { textAlign: "center" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, this.state.account))), _react2.default.createElement(_semanticUiReact.Modal.Actions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        color: "blue",
        content: "Okay",
        onClick: this.close,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }))));
    }
  }]);

  return Token;
}(_react.Component);

exports.default = Token;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2ViMyIsIkltYWdlIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkNoZWNrYm94IiwiSWNvbiIsIlByb2dyZXNzIiwiSGVhZGVyIiwiTW9kYWwiLCJ0b2tlbiIsIkxheW91dCIsIlRva2VuIiwic3RhdGUiLCJhY2NvdW50IiwidG9rZW5OdW1iZXIiLCJvcGVuIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJtZXRob2RzIiwidG90YWxTdXBwbHkiLCJjYWxsIiwidG9rZW5TdXBwbHkiLCJiYWxhbmNlT2YiLCJ0b2tlbkJhbGFuY2UiLCJjb25zb2xlIiwibG9nIiwic2hvdyIsInNldFN0YXRlIiwiZGltbWVyIiwiY2xvc2UiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwiY29sb3IiLCJsYWJlbFBvc2l0aW9uIiwiaWNvbiIsImNvbnRlbnQiLCJ0eXBlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQ0UsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7O0FBRUYsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBWTs7Ozs7Ozs7O0lBRWIsQTs7Ozs7Ozs7Ozs7Ozs7OzBNQU1KLEE7ZUFBUSxBQUNHLEFBQ1Q7bUJBRk0sQUFFTyxBQUNiO1ksQUFITSxBQUdBO0FBSEEsQUFDTixhLEFBS0Y7MkZBQVcsaUJBQUEsQUFBTSxPQUFOO2tDQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQURTLEFBQ1QsQUFBTTtnQ0FERzt1QkFFYSxjQUFBLEFBQUssSUFGbEIsQUFFYSxB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QyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsdUJBQUEsQUFBTzs7b0JBQVA7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQSxRQUFJLE9BQU8sRUFBQyxXQUFaLEFBQVcsQUFBVztvQkFBdEI7c0JBQUEsQUFBa0M7QUFBbEM7Y0FBa0MsQUFBSyxNQUo3QyxBQUVFLEFBQ0UsQUFDRSxBQUE2QyxBQUdqRCw0QkFBQyxjQUFELHVCQUFBLEFBQU87O29CQUFQO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7ZUFBRCxBQUNRLEFBQ047aUJBRkYsQUFFVSxBQUNSO2lCQUFTLEtBSFgsQUFHZ0I7O29CQUhoQjtzQkF6RlIsQUFDRSxBQWdGRSxBQU9FLEFBQ0UsQUFTVDtBQVRTO0FBQ0U7Ozs7O0FBNUhNLEEsQUF1SXBCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2plcnJ5L1JhY2Npb24ifQ==
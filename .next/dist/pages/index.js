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
    (0, _classCallCheck3.default)(this, Token);

    return (0, _possibleConstructorReturn3.default)(this, (Token.__proto__ || (0, _getPrototypeOf2.default)(Token)).apply(this, arguments));
  }

  (0, _createClass3.default)(Token, [{
    key: "render",
    value: function render() {
      var yourAccount = this.props.account[0];
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
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
          lineNumber: 33
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "chain", size: "huge", __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), "Raccion Token ICO sale"), _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
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
          lineNumber: 47
        }
      }, "Introducing \"Raccion Token\" (RAC) || Token price is 0.001 Ether. || You currently have 0 RAC."), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_semanticUiReact.Input, {
        action: {
          color: "blue",
          labelPosition: "right",
          icon: "cart",
          content: "Buy Token"
        },
        min: "1",
        type: "number",
        pattern: "[0-9]",
        size: "massive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_semanticUiReact.Progress, { percent: 10000 / 3000, indicating: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "3000/1000000 Tokens sold")), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_semanticUiReact.Message, { info: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_semanticUiReact.Message.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "info", __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), " Notice")), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, "This token sale uses the Rinkeby Test Network with fake ether. Use a browser extension like Metamask to connect to the test network and participate in the ICO. Please be patient if the test network runs slowly.")))), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
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
          lineNumber: 102
        }
      }, "Your Account :", yourAccount));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var account, tokenSupply;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new _web2.default.eth.getAccounts();

              case 2:
                account = _context.sent;
                _context.next = 5;
                return _Token2.default.methods.totalSupply().call();

              case 5:
                tokenSupply = _context.sent;

                console.log("List: ", tokenSupply);
                return _context.abrupt("return", {
                  account: account
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Token;
}(_react.Component);

exports.default = Token;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50Iiwid2ViMyIsIkltYWdlIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkNoZWNrYm94IiwiSWNvbiIsIlByb2dyZXNzIiwiSGVhZGVyIiwidG9rZW4iLCJMYXlvdXQiLCJUb2tlbiIsInlvdXJBY2NvdW50IiwicHJvcHMiLCJhY2NvdW50IiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsImNvbG9yIiwibGFiZWxQb3NpdGlvbiIsImljb24iLCJjb250ZW50IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJtZXRob2RzIiwidG90YWxTdXBwbHkiLCJjYWxsIiwidG9rZW5TdXBwbHkiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBVTs7OztBQUNqQixBQUNFLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFPLEFBQVc7Ozs7QUFFbEIsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7Ozs2QkFVSyxBQUNQO1VBQU0sY0FBYyxLQUFBLEFBQUssTUFBTCxBQUFXLFFBQS9CLEFBQW9CLEFBQW1CLEFBQ3ZDOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUE7O29CQUNFO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsY0FBQTtZQUFBLEFBQ0ssQUFDSDs7cUJBQU8sQUFDTSxBQUNYO3FCQUZLLEFBRU0sQUFDWDt3QkFMSixBQUVTLEFBR1M7QUFIVCxBQUNMOztvQkFISjtzQkFBQSxBQVFFO0FBUkY7QUFDRSx5QkFPQSxBQUFDLHVDQUFLLE1BQU4sQUFBVyxTQUFRLE1BQW5CLEFBQXdCO29CQUF4QjtzQkFSRixBQVFFLEFBQ0E7QUFEQTs7O29CQUNBO3NCQVRGLEFBU0UsQUFDQTtBQURBO0FBQUE7O29CQUNBO3NCQVZGLEFBVUU7QUFBQTtBQUFBLFVBWkosQUFFRSxBQWFBOztvQkFBQTtzQkFmRixBQWVFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLGNBQUE7O3FCQUNTLEFBQ00sQUFDWDtxQkFGSyxBQUVNLEFBQ1g7d0JBSEssQUFHUyxBQUNkO3NCQUxKLEFBQ1MsQUFJTztBQUpQLEFBQ0w7O29CQUZKO3NCQUFBO0FBQUE7QUFDRSxTQWpCSixBQWdCRSxBQVlBOztvQkFBQTtzQkE1QkYsQUE0QkUsQUFFQTtBQUZBO0FBQUEsMEJBRUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDOztpQkFDUyxBQUNDLEFBQ1A7eUJBRk0sQUFFUyxBQUNmO2dCQUhNLEFBR0EsQUFDTjttQkFMSixBQUNVLEFBSUcsQUFFWDtBQU5RLEFBQ047YUFGSixBQU9NLEFBQ0o7Y0FSRixBQVFPLEFBQ0w7aUJBVEYsQUFTVSxBQUNSO2NBVkYsQUFVTzs7b0JBVlA7c0JBRkosQUFDRSxBQUNFLEFBYUY7QUFiRTtBQUNFLDJCQVlILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQywyQ0FBUyxTQUFTLFFBQW5CLEFBQTJCLE1BQU0sWUFBakM7b0JBQUE7c0JBQUE7QUFBQTtTQWhCSixBQWVFLEFBQ0UsQUFJRjs7b0JBQUE7c0JBcEJGLEFBb0JFLEFBQ0E7QUFEQTtBQUFBOztvQkFDQTtzQkFyQkYsQUFxQkUsQUFDQTtBQURBO0FBQUEsMEJBQ0MsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDBDQUFRLE1BQVQ7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQseUJBQUEsQUFBUzs7b0JBQVQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBREYsQUFDRTtBQUFBO1VBSE4sQUFDRSxBQUNFLEFBSUYsNkJBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBM0RSLEFBOEJFLEFBc0JFLEFBQ0UsQUFNRSxBQVNOOztvQkFBQTtzQkFwRUYsQUFvRUUsQUFDQTtBQURBO0FBQUE7O29CQUNBO3NCQXJFRixBQXFFRSxBQUNBO0FBREE7QUFBQTs7b0JBQ0E7c0JBdEVGLEFBc0VFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLGNBQUE7O3FCQUNTLEFBQ00sQUFDWDtxQkFGSyxBQUVNLEFBQ1g7d0JBSEssQUFHUyxBQUNkO3NCQUxKLEFBQ1MsQUFJTztBQUpQLEFBQ0w7O29CQUZKO3NCQUFBO0FBQUE7QUFDRSxTQU9lLGtCQWhGckIsQUFDRSxBQXVFRSxBQVlMOzs7OzsyRyxBQS9GNEI7Ozs7Ozs7dUJBQ0wsSUFBSSxjQUFBLEFBQUssSUFBVCxBQUFhLEE7O21CQUE3QjtBOzt1QkFDb0IsZ0JBQUEsQUFBTSxRQUFOLEFBQWMsY0FBYyxBLEFBQTVCOzttQkFBcEI7QSx1Q0FDTjs7d0JBQUEsQUFBUSxJQUFSLEFBQVksVUFBWixBQUFzQjs7MkIsQUFDZjtBQUFBLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFOYyxBLEFBbUdwQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9qZXJyeS9SYWNjaW9uIn0=
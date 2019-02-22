"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _semanticUiReact = require("semantic-ui-react");

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
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement(_semanticUiReact.Header, {
        as: "h1",
        style: {
          textAlign: "center",
          marginTop: "34px",
          marginBottom: "20px",
          marginLeft: "418px"
        },
        icon: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "chain", __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), "Raccion Token ICO sale"), _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement(_semanticUiReact.Header, {
        as: "h3",
        style: {
          textAlign: "center",
          marginTop: "34px",
          marginBottom: "20px",
          marginLeft: "30px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement("h3", {
        style: {
          textAlign: "center",
          marginTop: "34px",
          marginBottom: "20px",
          marginLeft: "30px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Introducing \"Raccion Token\" (RAC) || Token price is 0.001 Ether. || You currently have 0 RAC.")), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement(_semanticUiReact.Form, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_semanticUiReact.Input, {
        action: {
          color: "blue",
          labelPosition: "right",
          icon: "cart",
          content: "Buy Token"
        },
        actionPosition: "right",
        min: "1",
        type: "number",
        pattern: "[0-9]",
        size: "massive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement(_semanticUiReact.Progress, { percent: 10000 / 3000, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "3000/1000000 Tokens sold")), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_semanticUiReact.Message, { info: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_semanticUiReact.Message.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "info", __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), " Notice")), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, "This token sale uses the Rinkeby Test Network with fake ether. Use a browser extension like Metamask to connect to the test network and participate in the ICO. Please be patient if the test network runs slowly.")))), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), _react2.default.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), _react2.default.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
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
          lineNumber: 99
        }
      }, "Your Account :", " "));
    }
  }]);

  return Token;
}(_react.Component);

exports.default = Token;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSW1hZ2UiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQ2hlY2tib3giLCJJY29uIiwiUHJvZ3Jlc3MiLCJIZWFkZXIiLCJMYXlvdXQiLCJUb2tlbiIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJjb2xvciIsImxhYmVsUG9zaXRpb24iLCJpY29uIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7O0FBR0YsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQUViOzs7Ozs7Ozs7Ozs2QkFDSyxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUE7O29CQUNFO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQztZQUFELEFBQ0ssQUFDSDs7cUJBQU8sQUFDTSxBQUNYO3FCQUZLLEFBRU0sQUFDWDt3QkFISyxBQUdTLEFBQ2Q7c0JBTkosQUFFUyxBQUlPLEFBRWQ7QUFOTyxBQUNMO2NBSEo7O29CQUFBO3NCQUFBLEFBVUU7QUFWRjtBQUNFLHlCQVNBLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQVZGLEFBVUUsQUFDQTtBQURBOzs7b0JBQ0E7c0JBWEYsQUFXRTtBQUFBO0FBQUEsVUFiSixBQUVFLEFBY0E7O29CQUFBO3NCQWhCRixBQWdCRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDO1lBQUQsQUFDSyxBQUNIOztxQkFBTyxBQUNNLEFBQ1g7cUJBRkssQUFFTSxBQUNYO3dCQUhLLEFBR1MsQUFDZDtzQkFOSixBQUVTLEFBSU87QUFKUCxBQUNMOztvQkFISjtzQkFBQSxBQVNFO0FBVEY7QUFDRSx5QkFRQSxjQUFBOztxQkFDUyxBQUNNLEFBQ1g7cUJBRkssQUFFTSxBQUNYO3dCQUhLLEFBR1MsQUFDZDtzQkFMSixBQUNTLEFBSU87QUFKUCxBQUNMOztvQkFGSjtzQkFBQTtBQUFBO0FBQ0UsU0EzQk4sQUFpQkUsQUFTRSxBQVlGOztvQkFBQTtzQkF0Q0YsQUFzQ0UsQUFFQTtBQUZBO0FBQUEsMEJBRUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDOztpQkFDUyxBQUNDLEFBQ1A7eUJBRk0sQUFFUyxBQUNmO2dCQUhNLEFBR0EsQUFDTjttQkFMSixBQUNVLEFBSUcsQUFFWDtBQU5RLEFBQ047d0JBRkosQUFPaUIsQUFDZjthQVJGLEFBUU0sQUFDSjtjQVRGLEFBU08sQUFDTDtpQkFWRixBQVVVLEFBQ1I7Y0FYRixBQVdPOztvQkFYUDtzQkFGSixBQUNFLEFBQ0UsQUFjRjtBQWRFO0FBQ0UsMkJBYUgsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDJDQUFTLFNBQVMsUUFBbkIsQUFBMkI7b0JBQTNCO3NCQUFBO0FBQUE7U0FqQkosQUFnQkUsQUFDRSxBQUVGOztvQkFBQTtzQkFuQkYsQUFtQkUsQUFDQTtBQURBO0FBQUE7O29CQUNBO3NCQXBCRixBQW9CRSxBQUNBO0FBREE7QUFBQSwwQkFDQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsMENBQVEsTUFBVDtvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCx5QkFBQSxBQUFTOztvQkFBVDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFERixBQUNFO0FBQUE7VUFITixBQUNFLEFBQ0UsQUFJRiw2QkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FwRVIsQUF3Q0UsQUFxQkUsQUFDRSxBQU1FLEFBU047O29CQUFBO3NCQTdFRixBQTZFRSxBQUNBO0FBREE7QUFBQTs7b0JBQ0E7c0JBOUVGLEFBOEVFLEFBQ0E7QUFEQTtBQUFBOztvQkFDQTtzQkEvRUYsQUErRUUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsY0FBQTs7cUJBQ1MsQUFDTSxBQUNYO3FCQUZLLEFBRU0sQUFDWDt3QkFISyxBQUdTLEFBQ2Q7c0JBTEosQUFDUyxBQUlPO0FBSlAsQUFDTDs7b0JBRko7c0JBQUE7QUFBQTtBQUNFLFNBT2Usa0JBekZyQixBQUNFLEFBZ0ZFLEFBWUw7Ozs7O0FBL0ZpQixBLEFBa0dwQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9qZXJyeS9SYWNjaW9uIn0=
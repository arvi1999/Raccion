'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _TokenSale = require('./build/TokenSale.json');

var _TokenSale2 = _interopRequireDefault(_TokenSale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_TokenSale2.default.interface), '0xDAc40A947834341B3e18A0D8D1B1cb04D26606F9');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL1Rva2VuU2FsZS5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiVG9rZW5TYWxlIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQXNCLEFBQXRCOzs7Ozs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ2YsS0FBSyxBQUFMLE1BQVcsb0JBQVUsQUFBckIsQUFEZSxZQUVmLEFBRmUsQUFBakIsQUFLQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJUb2tlblNhbGUuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvamVycnkvUmFjY2lvbiJ9
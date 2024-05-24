"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _app = _interopRequireDefault(require("./app"));
const style = {
  height: 300,
  border: '1px solid green'
};
const svg = '<svg width="100" height="100">' + '<circle cx="50" cy="50" r="40" fill="yellow" />' + '</svg>';

// - - - DOM - - -
_reactDom.default.render( /*#__PURE__*/_react.default.createElement("div", {
  style: style
}, /*#__PURE__*/_react.default.createElement(_app.default, {
  svg: svg,
  duration: 300,
  resize: true
})), document.getElementById('root'));
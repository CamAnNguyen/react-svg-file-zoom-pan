"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _react2 = require("@storybook/react");
var _App = _interopRequireDefault(require("../App"));
require("./style.css");
const style = {
  height: 300,
  border: '1px solid green'
};
const path = 'https://upload.wikimedia.org/' + 'wikipedia/commons/e/e4/' + 'World_Map_Blank_-_with_blue_sea.svg';
const svg = '<svg width="100" height="100">' + '<circle cx="50" cy="50" r="40" fill="yellow" />' + '</svg>';
(0, _react2.storiesOf)('Load SVG string', module).add('single', () => /*#__PURE__*/_react.default.createElement("div", {
  style: style
}, /*#__PURE__*/_react.default.createElement(_App.default, {
  svg: svg,
  duration: 300,
  resize: true
})));
(0, _react2.storiesOf)('Load SVG files', module).add('single', () => /*#__PURE__*/_react.default.createElement("div", {
  style: style
}, /*#__PURE__*/_react.default.createElement(_App.default, {
  svgPath: path,
  duration: 300,
  resize: true
}))).add('multiple', () => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
  style: style
}, /*#__PURE__*/_react.default.createElement(_App.default, {
  svgPath: path,
  duration: 300,
  resize: true
})), /*#__PURE__*/_react.default.createElement("div", {
  style: style
}, /*#__PURE__*/_react.default.createElement(_App.default, {
  svgPath: path,
  duration: 300,
  resize: true
}))));
(0, _react2.storiesOf)('General loading SVG', module).add('svg string', () => /*#__PURE__*/_react.default.createElement("div", {
  style: style
}, /*#__PURE__*/_react.default.createElement(_App.default, {
  svg: svg,
  duration: 300,
  resize: true
}))).add('svg file', () => /*#__PURE__*/_react.default.createElement("div", {
  style: style
}, /*#__PURE__*/_react.default.createElement(_App.default, {
  svg: path,
  duration: 300,
  resize: true
})));
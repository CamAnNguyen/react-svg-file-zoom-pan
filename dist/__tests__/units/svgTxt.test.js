"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _app = _interopRequireDefault(require("../../app"));
var _params = require("../helper/params");
let wrapped;
beforeEach(() => {
  wrapped = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_app.default, {
    svg: _params.svgContent,
    duration: 300,
    resize: true
  }));
});
it('shows .svg-file-zoom-pan', () => {
  expect(wrapped.find('.svg-file-zoom-pan').length).toEqual(1);
});
it('shows circle', () => {
  expect(wrapped.html()).toContain(_params.svgContent);
});
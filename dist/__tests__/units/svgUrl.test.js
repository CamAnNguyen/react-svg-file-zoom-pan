"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = _interopRequireDefault(require("react"));
var _enzyme = require("enzyme");
var _app = _interopRequireDefault(require("../../app"));
var _params = require("../helper/params");
let wrapped;
beforeEach(() => {
  wrapped = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_app.default, {
    svg: _params.pathContent,
    duration: 300,
    resize: true
  }));
});
it('shows path', () => {
  expect(wrapped.props().svg).toBe(_params.pathContent);
});
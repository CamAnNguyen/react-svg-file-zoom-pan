"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _svg_wrapper = _interopRequireDefault(require("./components/svg_wrapper"));
/* eslint-disable no-unused-vars, import/no-extraneous-dependencies, react/require-default-props */

class SvgFileZoomPan extends _react.default.Component {
  constructor(props) {
    super(props);
    this.main = new _svg_wrapper.default();
    this.d3Ref = /*#__PURE__*/_react.default.createRef();
  }
  componentDidMount() {
    const {
      svgPath,
      svg,
      duration,
      resize
    } = this.props;
    const el = this.d3Ref.current;
    this.chart = this.main.update({
      svgPath,
      svg,
      duration,
      resize,
      el
    });
  }
  componentDidUpdate(prevProps) {
    const {
      svgPath,
      svg,
      duration,
      resize
    } = this.props;
    const el = this.d3Ref.current;
    this.main.update({
      svgPath,
      svg,
      duration,
      resize,
      el
    });
  }
  componentWillUnmount() {
    const el = this.d3Ref.current;
    this.main.destroy(el);
  }
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "svg-file-zoom-pan",
      ref: this.d3Ref
    });
  }
}
SvgFileZoomPan.propTypes = {
  svgPath: _propTypes.default.string,
  svg: _propTypes.default.string,
  duration: _propTypes.default.number,
  resize: _propTypes.default.bool
};
var _default = exports.default = SvgFileZoomPan;
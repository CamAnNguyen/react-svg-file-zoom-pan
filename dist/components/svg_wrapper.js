"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _zoomable = _interopRequireDefault(require("./zoomable"));
/* eslint-disable no-unused-vars, no-use-before-define */

const d3 = require('d3');
class SvgWrapper {
  constructor(props) {
    this.setSvg = this.setSvg.bind(this);
    this.standardlizeSvgStr = this.standardlizeSvgStr.bind(this);
  }
  setSvg(props) {
    this.svg = (0, _zoomable.default)(props);
  }
  update(input) {
    this.destroy(input.el);
    this.setSvg(input);
    this.draw(input);
  }
  destroy(el) {
    d3.select(el).selectAll('svg').remove();
  }
  draw(props) {
    const {
      svg,
      svgPath
    } = props;
    if (svg && svg.includes('<svg')) {
      this.renderStr(props, svg);
    } else {
      const path = svg || svgPath;
      if (path) {
        d3.xml(path).then(file => this.renderFile(props, file)).catch(err => console.log(err)); // eslint-disable-line
      }
    }
  }
  renderFile(props, file) {
    const {
      resize
    } = props;
    const node = file.getElementsByTagName('svg')[0];
    if (node) {
      if (resize) {
        node.setAttribute('width', '100%');
        node.setAttribute('height', '100%');
      }

      // this.svg.node().innerHTML = '';
      // this.svg.node().appendChild(node);
      this.renderStr(props, node.outerHTML);
    }
  }
  standardlizeSvgStr(str) {
    let svgStr = str;
    if (svgStr) {
      svgStr = svgStr.replaceAll('gradient', 'Gradient');
    }
    return svgStr;
  }
  renderStr(props, str) {
    const svgStr = this.standardlizeSvgStr(str);
    const dom = new DOMParser().parseFromString(svgStr, 'image/svg+xml');
    const {
      resize
    } = props;
    const node = dom.getElementsByTagName('svg')[0];
    if (node) {
      if (resize) {
        node.setAttribute('width', '100%');
        node.setAttribute('height', '100%');
      }
      this.svg.node().innerHTML = '';
      this.svg.node().appendChild(node);
    }
  }
}
var _default = exports.default = SvgWrapper;
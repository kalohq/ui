'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/ap/Projects/design-system/ui/site/components/with-documentation/with-documentation.js';
exports.default = withDocumentation;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _documentation = require('../../layouts/documentation');

var _documentation2 = _interopRequireDefault(_documentation);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function withDocumentation(options) {
  return function withContent(content) {
    var DocPage = function DocPage(props) {
      var currentPath = props.url.pathname;
      return _react2.default.createElement(_documentation2.default, {
        currentPath: currentPath,
        category: options.category,
        pageTitle: options.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, content);
    };

    return DocPage;
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2l0aC1kb2N1bWVudGF0aW9uL3dpdGgtZG9jdW1lbnRhdGlvbi5qcyJdLCJuYW1lcyI6WyJ3aXRoRG9jdW1lbnRhdGlvbiIsIm9wdGlvbnMiLCJ3aXRoQ29udGVudCIsImNvbnRlbnQiLCJEb2NQYWdlIiwiY3VycmVudFBhdGgiLCJwcm9wcyIsInVybCIsInBhdGhuYW1lIiwiY2F0ZWdvcnkiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUl3QixBOztBQUp4Qjs7OztBQUVBOzs7Ozs7OztBQUVlLFNBQUEsQUFBUyxrQkFBVCxBQUEyQixTQUFTLEFBQ2pEO1NBQU8sU0FBQSxBQUFTLFlBQVQsQUFBcUIsU0FBUyxBQUNuQztRQUFNLFVBQVUsU0FBVixBQUFVLGVBQVMsQUFDdkI7VUFBTSxjQUFjLE1BQUEsQUFBTSxJQUExQixBQUE4QixBQUM5Qjs2QkFDRSw4QkFBQTtxQkFBQSxBQUNlLEFBQ2I7a0JBQVUsUUFGWixBQUVvQixBQUNsQjttQkFBVyxRQUhiLEFBR3FCOztvQkFIckI7c0JBQUEsQUFLRztBQUxIO0FBQ0UsT0FERixFQURGLEFBQ0UsQUFRSDtBQVhELEFBYUE7O1dBQUEsQUFBTyxBQUNSO0FBZkQsQUFnQkQiLCJmaWxlIjoid2l0aC1kb2N1bWVudGF0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hcC9Qcm9qZWN0cy9kZXNpZ24tc3lzdGVtL3VpL3NpdGUifQ==
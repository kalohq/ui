'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _jsxFileName = '/Users/ap/Projects/design-system/ui/site/layouts/page/page.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  * {\n    -webkit-font-smoothing: antialiased;\n    box-sizing: border-box;\n  } \n  body,\n  html {\n    margin: 0;\n    padding: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;\n  }\n'], ['\n  * {\n    -webkit-font-smoothing: antialiased;\n    box-sizing: border-box;\n  } \n  body,\n  html {\n    margin: 0;\n    padding: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;\n  }\n']);

exports.default = Page;
exports.PageWrapper = PageWrapper;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _globalNavigation = require('../../components/global-navigation');

var _globalNavigation2 = _interopRequireDefault(_globalNavigation);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

(0, _styledComponents.injectGlobal)(_templateObject);

var Container = _styledComponents2.default.div.withConfig({
  displayName: 'page__Container',
  componentId: 's1w1ce9h-0'
})(['width:100%;min-height:100vh;']);

function Page(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children']);

  return _react2.default.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, _react2.default.createElement(_globalNavigation2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), children);
}

var PageFlexContainer = _styledComponents2.default.div.withConfig({
  displayName: 'page__PageFlexContainer',
  componentId: 's1w1ce9h-1'
})(['display:flex;']);

function PageWrapper(_ref2) {
  var children = _ref2.children;

  return _react2.default.createElement(PageFlexContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, children);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvcGFnZS9wYWdlLmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJQYWdlV3JhcHBlciIsIkNvbnRhaW5lciIsImRpdiIsImNoaWxkcmVuIiwicHJvcHMiLCJQYWdlRmxleENvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQXVCd0IsQTtRQVdSLEEsY0FBQSxBOztBQWxDaEI7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7OztBQUVBOztBQWFBLElBQU0sdUNBQUEsQUFBbUI7ZUFBbkI7ZUFBQTtBQUFBLENBQVksR0FBbEI7O0FBS2UsU0FBQSxBQUFTLFdBQTJCO01BQXJCLEFBQXFCLGdCQUFyQixBQUFxQjtNQUFSLEFBQVEsc0RBQ2pEOzt5QkFDRyxjQUFEOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBOztnQkFDRTtrQkFERixBQUNFLEFBQ0M7QUFERDtBQUFBLE1BRkosQUFDRSxBQUtIOzs7QUFFRCxJQUFNLCtDQUFBLEFBQTJCO2VBQTNCO2VBQUE7QUFBQSxDQUFvQixHQUExQjs7QUFFTyxTQUFBLEFBQVMsbUJBQXdCO01BQVgsQUFBVyxpQkFBWCxBQUFXLEFBQ3RDOzt5QkFBUSxjQUFEOztnQkFBQTtrQkFBQSxBQUFvQjtBQUFwQjtBQUFBLEdBQUEsRUFBUCxBQUFPLEFBQ1IiLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYXAvUHJvamVjdHMvZGVzaWduLXN5c3RlbS91aS9zaXRlIn0=
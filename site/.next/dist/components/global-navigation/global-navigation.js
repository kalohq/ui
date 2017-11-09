'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/ap/Projects/design-system/ui/site/components/global-navigation/global-navigation.js';
exports.default = GlobalNavigation;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var StyledBar = _styledComponents2.default.header.withConfig({
  displayName: 'global-navigation__StyledBar',
  componentId: 'k3k34o-0'
})(['width:100%;height:56px;background-color:#374561;position:fixed;top:0;left:0;z-index:99;']);

var StyledLogo = _styledComponents2.default.div.withConfig({
  displayName: 'global-navigation__StyledLogo',
  componentId: 'k3k34o-1'
})(['color:white;font-size:14px;font-weight:500;display:block;a{color:inherit;text-decoration:none;}']);

var StyledSearch = _styledComponents2.default.div.withConfig({
  displayName: 'global-navigation__StyledSearch',
  componentId: 'k3k34o-2'
})(['width:250px;height:30px;background-color:#374561;border-radius:40px;']);

var Inner = _styledComponents2.default.div.withConfig({
  displayName: 'global-navigation__Inner',
  componentId: 'k3k34o-3'
})(['width:100%;padding:0 32px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;']);

var StyledNav = _styledComponents2.default.ul.withConfig({
  displayName: 'global-navigation__StyledNav',
  componentId: 'k3k34o-4'
})(['list-style:none;margin:0;padding:0;display:flex;align-items:center;height:56px;li{padding:4px 8px;a{color:#fff;font-size:14px;font-weight:500;text-decoration:none;}}']);
function GlobalNavigation(_ref) {
  var props = _ref.props;

  return _react2.default.createElement(StyledBar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, _react2.default.createElement(Inner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }, _react2.default.createElement(StyledLogo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, 'Kalo Design System')), _react2.default.createElement(StyledNav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, _react2.default.createElement(_link2.default, { href: '/product/glossary', __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, 'Product')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, _react2.default.createElement(_link2.default, { href: '/brand/color', __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, 'Brand')), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, _react2.default.createElement(_link2.default, { href: '/components/button', __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, 'Components')))));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2xvYmFsLW5hdmlnYXRpb24vZ2xvYmFsLW5hdmlnYXRpb24uanMiXSwibmFtZXMiOlsiR2xvYmFsTmF2aWdhdGlvbiIsIlN0eWxlZEJhciIsImhlYWRlciIsIlN0eWxlZExvZ28iLCJkaXYiLCJTdHlsZWRTZWFyY2giLCJJbm5lciIsIlN0eWxlZE5hdiIsInVsIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkE4RHdCLEE7O0FBOUR4Qjs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7O0FBRUEsSUFBTSx1Q0FBQSxBQUFtQjtlQUFuQjtlQUFBO0FBQUEsQ0FBWSxHQUFsQjs7QUFVQSxJQUFNLHdDQUFBLEFBQW9CO2VBQXBCO2VBQUE7QUFBQSxDQUFhLEdBQW5COztBQVlBLElBQU0sMENBQUEsQUFBc0I7ZUFBdEI7ZUFBQTtBQUFBLENBQWUsR0FBckI7O0FBT0EsSUFBTSxtQ0FBQSxBQUFlO2VBQWY7ZUFBQTtBQUFBLENBQVEsR0FBZDs7QUFTQSxJQUFNLHVDQUFBLEFBQW1CO2VBQW5CO2VBQUE7QUFBQSxDQUFZLEdBQWxCO0FBbUJlLFNBQUEsQUFBUyx1QkFBMEI7TUFBUixBQUFRLGFBQVIsQUFBUSxBQUNoRDs7eUJBQ0csY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRyxjQUFEOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRyxjQUFEOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxxQkFBQSxXQUFNLE1BQU4sQUFBVztnQkFBWDtrQkFBQTtBQUFBO0tBRkosQUFDRSxBQUNFLEFBRUYsd0NBQUMsY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UscUJBQUEsV0FBTSxNQUFOLEFBQVc7Z0JBQVg7a0JBQUE7QUFBQTtLQUZKLEFBQ0UsQUFDRSxBQUVGLDZCQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLHFCQUFBLFdBQU0sTUFBTixBQUFXO2dCQUFYO2tCQUFBO0FBQUE7S0FMSixBQUlFLEFBQ0UsQUFFRiwyQkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxxQkFBQSxXQUFNLE1BQU4sQUFBVztnQkFBWDtrQkFBQTtBQUFBO0tBZFYsQUFDRSxBQUNFLEFBSUUsQUFPRSxBQUNFLEFBTVgiLCJmaWxlIjoiZ2xvYmFsLW5hdmlnYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FwL1Byb2plY3RzL2Rlc2lnbi1zeXN0ZW0vdWkvc2l0ZSJ9
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/ap/Projects/design-system/ui/site/components/aside/aside.js';
exports.default = Aside;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

var AsideContainer = _styledComponents2.default.aside.withConfig({
  displayName: 'aside__AsideContainer',
  componentId: 'v8xfb8-0'
})(['width:auto;height:100%;min-width:320px;background-color:#f9fafc;min-height:100vh;padding:80px 20px;']);

var Title = _styledComponents2.default.h1.withConfig({
  displayName: 'aside__Title',
  componentId: 'v8xfb8-1'
})(['font-size:18px;font-weight:500;']);

var LinkGroup = _styledComponents2.default.ul.withConfig({
  displayName: 'aside__LinkGroup',
  componentId: 'v8xfb8-2'
})(['list-style:none;margin:0;padding:0;']);

var LinkItem = _styledComponents2.default.li.withConfig({
  displayName: 'aside__LinkItem',
  componentId: 'v8xfb8-3'
})(['width:100%;display:flex;color:#374561;padding:4px 16px;font-size:16px;font-weight:400;a{text-decoration:none;color:inherit;}']);

function Aside(_ref) {
  var data = _ref.data;

  return React.createElement(AsideContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, React.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, data.groupTitle), data ? React.createElement(LinkGroup, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, data.links.map(function (item) {
    return React.createElement(LinkItem, { key: item.title, __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      }
    }, React.createElement(_link2.default, { href: item.path, __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      }
    }, item.title));
  })) : null);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXNpZGUvYXNpZGUuanMiXSwibmFtZXMiOlsiQXNpZGUiLCJSZWFjdCIsIkFzaWRlQ29udGFpbmVyIiwiYXNpZGUiLCJUaXRsZSIsImgxIiwiTGlua0dyb3VwIiwidWwiLCJMaW5rSXRlbSIsImxpIiwiZGF0YSIsImdyb3VwVGl0bGUiLCJsaW5rcyIsIm1hcCIsIml0ZW0iLCJ0aXRsZSIsInBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkF1Q3dCLEE7O0FBdEN4Qjs7SUFBWSxBOztBQUNaOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTSw0Q0FBQSxBQUF3QjtlQUF4QjtlQUFBO0FBQUEsQ0FBaUIsR0FBdkI7O0FBU0EsSUFBTSxtQ0FBQSxBQUFlO2VBQWY7ZUFBQTtBQUFBLENBQVEsR0FBZDs7QUFLQSxJQUFNLHVDQUFBLEFBQW1CO2VBQW5CO2VBQUE7QUFBQSxDQUFZLEdBQWxCOztBQU1BLElBQU0sc0NBQUEsQUFBa0I7ZUFBbEI7ZUFBQTtBQUFBLENBQVcsR0FBakI7O0FBY2UsU0FBQSxBQUFTLFlBQWM7TUFBUCxBQUFPLFlBQVAsQUFBTyxBQUNwQzs7ZUFDRyxjQUFEOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLFFBQ0csY0FBRDs7Z0JBQUE7a0JBQUEsQUFBUTtBQUFSO0FBQUEsVUFERixBQUNFLEFBQWEsQUFDWiwwQkFDRSxjQUFEOztnQkFBQTtrQkFBQSxBQUNHO0FBREg7QUFBQSxHQUFBLE9BQ0csQUFBSyxNQUFMLEFBQVcsSUFBSSxnQkFBUSxBQUN0QjtpQkFDRyxjQUFELFlBQVUsS0FBSyxLQUFmLEFBQW9CO2tCQUFwQjtvQkFBQSxBQUNFO0FBREY7S0FBQSxRQUNFLHFCQUFBLFdBQU0sTUFBTSxLQUFaLEFBQWlCO2tCQUFqQjtvQkFBQSxBQUF3QjtBQUF4QjtZQUZKLEFBQ0UsQUFDRSxBQUE2QixBQUdsQztBQVJKLEFBQ0MsQUFDRyxRQUxULEFBQ0UsQUFZTSxBQUdUIiwiZmlsZSI6ImFzaWRlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hcC9Qcm9qZWN0cy9kZXNpZ24tc3lzdGVtL3VpL3NpdGUifQ==
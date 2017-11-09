'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _find2 = require('lodash/find');

var _find3 = _interopRequireDefault(_find2);

var _jsxFileName = '/Users/ap/Projects/design-system/ui/site/layouts/documentation/documentation.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _component = require('react-pure-render/component');

var _component2 = _interopRequireDefault(_component);

var _page = require('../page');

var _page2 = _interopRequireDefault(_page);

var _aside = require('../../components/aside');

var _aside2 = _interopRequireDefault(_aside);

var _markdownContent = require('../../components/markdown-content');

var _markdownContent2 = _interopRequireDefault(_markdownContent);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var routes = [{
  groupTitle: 'Brand',
  category: 'brand',
  links: [{
    title: 'Colors',
    path: '/brand/color'
  }, {
    title: 'Typography',
    path: '/brand/typography'
  }, {
    title: 'Illustrations',
    path: '/brand/illustrations'
  }, {
    title: 'Logos',
    path: '/brand/logos'
  }]
}, {
  groupTitle: 'Product',
  category: 'product',
  links: [{
    title: 'Personas',
    path: '/product/personas'
  }, {
    title: 'Glossary',
    path: '/product/glossary'
  }]
}];

var Container = _styledComponents2.default.div.withConfig({
  displayName: 'documentation__Container',
  componentId: 's1sk04wt-0'
})(['width:100%;min-height:100vh;display:flex;']);

var Main = _styledComponents2.default.main.withConfig({
  displayName: 'documentation__Main',
  componentId: 's1sk04wt-1'
})(['padding:80px 60px;max-width:920px;']);

var Documentation = function (_PureComponent) {
  (0, _inherits3.default)(Documentation, _PureComponent);

  function Documentation(props) {
    (0, _classCallCheck3.default)(this, Documentation);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Documentation.__proto__ || (0, _getPrototypeOf2.default)(Documentation)).call(this, props));

    _this.state = {
      routes: routes
    };
    return _this;
  }

  (0, _createClass3.default)(Documentation, [{
    key: 'componentWillMount',
    value: function componentWillMount(props) {
      var currentGroup = (0, _find3.default)(this.state.routes, ['category', this.props.category]);
      if (currentGroup) {
        this.setState({
          data: currentGroup
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          pageTitle = _props.pageTitle,
          children = _props.children;

      return _react2.default.createElement(_page2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement(_aside2.default, { data: this.state.data, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }), _react2.default.createElement(Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, pageTitle), _react2.default.createElement(_markdownContent2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, children))));
    }
  }]);
  return Documentation;
}(_component2.default);

exports.default = Documentation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dHMvZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsImdyb3VwVGl0bGUiLCJjYXRlZ29yeSIsImxpbmtzIiwidGl0bGUiLCJwYXRoIiwiQ29udGFpbmVyIiwiZGl2IiwiTWFpbiIsIm1haW4iLCJEb2N1bWVudGF0aW9uIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJlbnRHcm91cCIsInNldFN0YXRlIiwiZGF0YSIsInBhZ2VUaXRsZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNO2NBQ0osQUFDYyxBQUNaO1lBRkYsQUFFWSxBQUNWOztXQUNFLEFBQ1MsQUFDUDtVQUhHLEFBQ0wsQUFFUTtBQUZSLEFBQ0UsR0FGRztXQUtMLEFBQ1MsQUFDUDtVQVBHLEFBS0wsQUFFUTtBQUZSLEFBQ0U7V0FHRixBQUNTLEFBQ1A7VUFYRyxBQVNMLEFBRVE7QUFGUixBQUNFO1dBR0YsQUFDUyxBQUNQO1VBbkJPLEFBQ2IsQUFHUyxBQWFMLEFBRVE7QUFGUixBQUNFO0FBakJOLEFBQ0UsQ0FGVztjQXVCYixBQUNjLEFBQ1o7WUFGRixBQUVZLEFBQ1Y7O1dBQ0UsQUFDUyxBQUNQO1VBSEcsQUFDTCxBQUVRO0FBRlIsQUFDRSxHQUZHO1dBS0wsQUFDUyxBQUNQO1VBakNSLEFBQWUsQUF1QmIsQUFHUyxBQUtMLEFBRVE7QUFGUixBQUNFO0FBVE4sQUFDRTs7QUFlSixJQUFNLHVDQUFBLEFBQW1CO2VBQW5CO2VBQUE7QUFBQSxDQUFZLEdBQWxCOztBQU1BLElBQU0sa0NBQUEsQUFBYztlQUFkO2VBQUE7QUFBQSxDQUFPLEdBQWI7O0ksQUFLcUI7eUNBQ25COzt5QkFBQSxBQUFZLE9BQU87d0NBQUE7O29KQUFBLEFBQ1gsQUFFTjs7VUFBQSxBQUFLO2NBSFksQUFHakIsQUFBYTtBQUFBLEFBQ1g7V0FFSDs7Ozs7dUMsQUFFa0IsT0FBTyxBQUN4QjtVQUFNLGVBQWUsb0JBQUssS0FBQSxBQUFLLE1BQVYsQUFBZ0IsUUFBUSxDQUFBLEFBQzNDLFlBQ0EsS0FBQSxBQUFLLE1BRlAsQUFBcUIsQUFBd0IsQUFFaEMsQUFFYjtVQUFBLEFBQUksY0FBYyxBQUNoQjthQUFBLEFBQUs7Z0JBQUwsQUFBYyxBQUNOLEFBRVQ7QUFIZSxBQUNaO0FBR0w7Ozs7NkJBRVE7bUJBQ3VCLEtBRHZCLEFBQzRCO1VBRDVCLEFBQ0EsbUJBREEsQUFDQTtVQURBLEFBQ1csa0JBRFgsQUFDVyxBQUNsQjs7NkJBQ0UscUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsMERBQ1MsTUFBTSxLQUFBLEFBQUssTUFBbEIsQUFBd0I7b0JBQXhCO3NCQURGLEFBQ0UsQUFDQTtBQURBOzBCQUNDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLFNBREYsQUFDRSxBQUNBLDRCQUFBLGdDQUFBOztvQkFBQTtzQkFBQSxBQUFrQjtBQUFsQjtBQUFBLFNBTlIsQUFDRSxBQUNFLEFBRUUsQUFFRSxBQUtUOzs7Ozs7a0JBbENrQixBIiwiZmlsZSI6ImRvY3VtZW50YXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FwL1Byb2plY3RzL2Rlc2lnbi1zeXN0ZW0vdWkvc2l0ZSJ9
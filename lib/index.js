'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

require('react-select/dist/react-select.css');

var _data = require('./data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactCountrySelect = function (_Component) {
    _inherits(ReactCountrySelect, _Component);

    function ReactCountrySelect(props) {
        _classCallCheck(this, ReactCountrySelect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.state = {
            tag: props.value || null
        };
        _this.logChange = _this.logChange.bind(_this);
        _this.CountryRenderValue = _this.CountryRenderValue.bind(_this);
        _this.CountryOptionRenderer = _this.CountryOptionRenderer.bind(_this);
        return _this;
    }

    ReactCountrySelect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (this.props.value !== nextProps.value) {
            this.setState({ tag: nextProps.value });
        }
    };

    ReactCountrySelect.prototype.logChange = function logChange(val) {
        this.setState({ tag: val });
        if (typeof this.props.onSelect === 'function') {
            this.props.onSelect(val);
        }
    };

    ReactCountrySelect.prototype.CountryOptionRenderer = function CountryOptionRenderer(option) {
        return option.label;
    };

    ReactCountrySelect.prototype.CountryRenderValue = function CountryRenderValue(option) {
        if (option.value === undefined) {
            return null;
        } else {
            return _react2.default.createElement(
                'span',
                null,
                option.label
            );
        }
    };

    ReactCountrySelect.prototype.render = function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_reactSelect2.default, { value: this.state.tag,
                options: _data.countries,
                optionRenderer: this.CountryOptionRenderer,
                backspaceRemoves: true,
                onChange: this.logChange,
                valueRenderer: this.CountryRenderValue,
                multi: this.props.multi })
        );
    };

    return ReactCountrySelect;
}(_react.Component);

exports.default = ReactCountrySelect;
module.exports = exports['default'];
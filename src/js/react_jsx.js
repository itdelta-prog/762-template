'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _React = React,
    useState = _React.useState;

function LikeButton(_ref) {
    var dataForm = _ref.dataForm;

    var _useState = useState(dataForm),
        _useState2 = _slicedToArray(_useState, 2),
        text = _useState2[0],
        setText = _useState2[1];

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h2',
            { className: 'text-[59px] text-white' },
            '1111111111'
        ),
        React.createElement(
            'h4',
            null,
            text
        ),
        React.createElement(
            'button',
            { onClick: function onClick() {
                    return setText('gjhgj');
                } },
            '222222222222'
        )
    );
}

var domContainer = document.querySelector('#like_button_container');
ReactDOM.render(React.createElement(LikeButton, { dataForm: ddd }), domContainer);
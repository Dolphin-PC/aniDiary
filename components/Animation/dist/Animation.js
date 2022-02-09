"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styled_1 = require("@emotion/styled");
var lottie_web_1 = require("lottie-web");
var Animation = function (_a) {
    var animationName = _a.animationName, _b = _a.width, width = _b === void 0 ? 100 : _b, _c = _a.height, height = _c === void 0 ? 100 : _c;
    var ref = react_1.useRef(null);
    react_1.useEffect(function () {
        lottie_web_1["default"].loadAnimation({
            container: ref.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            // path to your animation file, place it inside public folder
            path: "/animation/" + animationName + ".json"
        });
    }, [animationName]);
    return (React.createElement(React.Fragment, null,
        React.createElement(AnimationContainer, { ref: ref, width: width, height: height })));
};
var AnimationContainer = styled_1["default"].div({
    margin: '0 auto'
}, function (props) { return ({
    width: props.width + 'px',
    height: props.height + 'px'
}); });
exports["default"] = Animation;

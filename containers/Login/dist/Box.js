"use strict";
exports.__esModule = true;
var material_1 = require("@mui/material");
var Animation_1 = require("../../components/Animation/Animation");
var Box = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.Container, { component: "main", maxWidth: "md" },
            React.createElement(Animation_1["default"], { animationName: 'animal', width: 150, height: 150 }))));
};
exports["default"] = Box;

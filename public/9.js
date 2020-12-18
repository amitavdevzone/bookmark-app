(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./resources/js/Pages/Bookmark/View/index.tsx":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Bookmark/View/index.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var async_creatable_1 = __importDefault(__webpack_require__(/*! react-select/async-creatable */ "./node_modules/react-select/async-creatable/dist/react-select.browser.esm.js"));
var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/js/route.min.js"));
var layout_1 = __importDefault(__webpack_require__(/*! ../../../components/common/layout */ "./resources/js/components/common/layout/index.tsx"));
var defaltOptions = [
    { label: "Amitav", value: "Amitav" }
];
var BookmarkViewPage = function (_a) {
    var bookmark = _a.bookmark;
    var _b = react_1.useState({
        tags: defaltOptions
    }), state = _b[0], setState = _b[1];
    react_1.useEffect(function () {
        var bookmarkTags = bookmark.tags.map(function (_a) {
            var label = _a.name;
            return { label: label, value: label };
        });
        setState({ tags: bookmarkTags });
    }, []);
    var handleSave = function (event) {
        event.preventDefault();
        if (!bookmark.is_active) {
            inertia_1.Inertia.post("/bookmark/make-active", {
                id: bookmark.id,
                tags: state.tags
            });
        }
        else {
            inertia_1.Inertia.post(ziggy_js_1.default("bookmark.update").url(), {
                tags: state.tags,
                id: bookmark.id
            });
        }
    };
    return (react_1.default.createElement(layout_1.default, null,
        react_1.default.createElement("div", { className: "row" },
            react_1.default.createElement("div", { className: "col-md-6" }, bookmark.title && (react_1.default.createElement("div", { className: "card" },
                react_1.default.createElement("div", { className: "card-header" }, bookmark.title),
                react_1.default.createElement("div", { className: "card-body" },
                    react_1.default.createElement("p", null,
                        "Url: ",
                        bookmark.url),
                    react_1.default.createElement("p", null, bookmark.description),
                    react_1.default.createElement("div", { className: "mb-3" },
                        react_1.default.createElement("img", { src: bookmark.img_url, alt: bookmark.title, width: "100%" })),
                    react_1.default.createElement("div", { className: "mb-3" },
                        react_1.default.createElement("div", null,
                            react_1.default.createElement("p", null, "Tags:"),
                            react_1.default.createElement(async_creatable_1.default, { value: state.tags, getOptionLabel: function (_a) {
                                    var label = _a.label;
                                    return label;
                                }, getOptionValue: function (_a) {
                                    var value = _a.value;
                                    return value;
                                }, defaultOptions: defaltOptions, loadOptions: function (value) {
                                    return fetch("/api/tags?tag=" + value)
                                        .then(function (response) { return response.json(); })
                                        .then(function (data) {
                                        return data.map(function (_a) {
                                            var name = _a.name;
                                            return { label: name, value: name };
                                        });
                                    });
                                }, onChange: function (value, action) { return setState(__assign(__assign({}, state), { tags: value })); }, isMulti: true }))),
                    react_1.default.createElement("button", { className: "btn btn-primary", onClick: handleSave }, "Save"))))))));
};
exports.default = BookmarkViewPage;


/***/ }),

/***/ "./resources/js/components/common/layout/index.tsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/common/layout/index.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var nav_1 = __importDefault(__webpack_require__(/*! ../nav */ "./resources/js/components/common/nav/index.tsx"));
var Layout = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "mb-3" },
            react_1.default.createElement(nav_1.default, null)),
        react_1.default.createElement("div", { className: "container" }, children),
        react_1.default.createElement("div", { className: "mt-3 p-2" },
            react_1.default.createElement("p", { style: { textAlign: "center" } }, "Copyright \u00A9 2020"))));
};
exports.default = Layout;


/***/ }),

/***/ "./resources/js/components/common/nav/index.tsx":
/*!******************************************************!*\
  !*** ./resources/js/components/common/nav/index.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var ziggy_js_1 = __importDefault(__webpack_require__(/*! ziggy-js */ "./node_modules/ziggy-js/dist/js/route.min.js"));
var Menu = function () {
    return (react_1.default.createElement("nav", { className: "navbar navbar-expand-md navbar-light bg-white shadow-sm" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement(inertia_react_1.InertiaLink, { className: "navbar-brand", href: ziggy_js_1.default("home").url() }, "Bookmarks"),
            react_1.default.createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "nav" },
                react_1.default.createElement("span", { className: "navbar-toggler-icon" })),
            react_1.default.createElement("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                react_1.default.createElement("ul", { className: "navbar-nav mr-auto" },
                    react_1.default.createElement("li", { className: "nav-item" },
                        react_1.default.createElement(inertia_react_1.InertiaLink, { className: "nav-link", href: ziggy_js_1.default("bookmark.index").url() }, "Bookmarks")),
                    react_1.default.createElement("li", { className: "nav-item" },
                        react_1.default.createElement(inertia_react_1.InertiaLink, { className: "nav-link", href: ziggy_js_1.default("bookmark.add").url() }, "Bookmark add"))),
                react_1.default.createElement("ul", { className: "navbar-nav ml-auto" },
                    react_1.default.createElement("li", { className: "nav-item dropdown" },
                        react_1.default.createElement("a", { id: "navbarDropdown", className: "nav-link dropdown-toggle", href: "#", role: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, "Amitav Roy"),
                        react_1.default.createElement("div", { className: "dropdown-menu dropdown-menu-right", "aria-labelledby": "navbarDropdown" },
                            react_1.default.createElement(inertia_react_1.InertiaLink, { method: "post", href: ziggy_js_1.default("logout").url(), className: "dropdown-item" }, "Logout"))))))));
};
exports.default = Menu;


/***/ })

}]);
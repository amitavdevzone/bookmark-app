(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{11:function(e,a,t){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});var r=l(t(0)),n=l(t(48)),u=l(t(6));a.default=function(e){var a=e.bookmarks;return r.default.createElement(u.default,null,r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-sm-8"},r.default.createElement("ul",{className:"list-group"},a.length>0&&a.map((function(e,a){return r.default.createElement(n.default,{key:a,bookmark:e})}))))))}},42:function(e,a,t){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});var r=t(9),n=l(t(0)),u=l(t(15));a.default=function(){return n.default.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-white shadow-sm"},n.default.createElement("div",{className:"container"},n.default.createElement(r.InertiaLink,{className:"navbar-brand",href:u.default("home").url()},"Bookmarks"),n.default.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"nav"},n.default.createElement("span",{className:"navbar-toggler-icon"})),n.default.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.default.createElement("ul",{className:"navbar-nav mr-auto"},n.default.createElement("li",{className:"nav-item"},n.default.createElement(r.InertiaLink,{className:"nav-link",href:u.default("bookmark.index").url()},"Bookmarks")),n.default.createElement("li",{className:"nav-item"},n.default.createElement(r.InertiaLink,{className:"nav-link",href:u.default("bookmark.add").url()},"Bookmark add"))),n.default.createElement("ul",{className:"navbar-nav ml-auto"},n.default.createElement("li",{className:"nav-item dropdown"},n.default.createElement("a",{id:"navbarDropdown",className:"nav-link dropdown-toggle",href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Amitav Roy"),n.default.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"navbarDropdown"},n.default.createElement(r.InertiaLink,{method:"post",href:u.default("logout").url(),className:"dropdown-item"},"Logout")))))))}},48:function(e,a,t){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});var r=t(9),n=l(t(0)),u=l(t(15)),d=t(21),o=t(22);a.default=function(e){var a=e.bookmark;return n.default.createElement("li",{className:"list-group-item"},n.default.createElement("div",{className:"row"},""!=a.img_url&&n.default.createElement("div",{className:"col-md-2"},n.default.createElement(r.InertiaLink,{href:u.default("bookmark.view",{bookmark:a.id}).url()},n.default.createElement("img",{src:a.img_url,alt:a.title,width:"100%"}))),n.default.createElement("div",{className:"col-md-9"},n.default.createElement("span",null,n.default.createElement(r.InertiaLink,{href:u.default("bookmark.view",{bookmark:a.id}).url()},a.title)),n.default.createElement("br",null),n.default.createElement("span",null,a.description),n.default.createElement("br",null),n.default.createElement(d.FontAwesomeIcon,{icon:o.faEye})," ",a.views),n.default.createElement("div",{className:"col-md-1"},n.default.createElement("a",{href:u.default("bookmark.redirect",{bookmark:a.id}).url(),target:"_blank"},"Visit"))))}},6:function(e,a,t){"use strict";var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});var r=l(t(0)),n=l(t(42));a.default=function(e){var a=e.children;return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:"mb-3"},r.default.createElement(n.default,null)),r.default.createElement("div",{className:"container"},a),r.default.createElement("div",{className:"mt-3 p-2"},r.default.createElement("p",{style:{textAlign:"center"}},"Copyright © 2020")))}}}]);
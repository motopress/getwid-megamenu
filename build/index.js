(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/custom-controls/color-palette.js":
/*!**********************************************!*\
  !*** ./src/custom-controls/color-palette.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    ColorIndicator = _wp$components.ColorIndicator;
var ColorPalette = wp.blockEditor.ColorPalette;

function MPMegaMenuColorPalette(args) {
  var label = args.label,
      color = args.color,
      disableCustomColors = args.disableCustomColors,
      clearable = args.clearable,
      onChange = args.onChange;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BaseControl.VisualLabel, null, label, color && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorIndicator, {
    colorValue: color,
    style: {
      verticalAlign: 'text-bottom',
      background: color
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
    value: color,
    onChange: onChange,
    disableCustomColors: disableCustomColors,
    clearable: clearable
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MPMegaMenuColorPalette);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu/index.js");
/* harmony import */ var _menu_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-item */ "./src/menu-item/index.js");
/* harmony import */ var _plain_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plain-menu */ "./src/plain-menu/index.js");
/* harmony import */ var _plain_menu_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plain-menu-item */ "./src/plain-menu-item/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_5__);







/***/ }),

/***/ "./src/menu-item/block.json":
/*!**********************************!*\
  !*** ./src/menu-item/block.json ***!
  \**********************************/
/*! exports provided: name, category, parent, attributes, supports, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"getwid-megamenu/menu-item\",\"category\":\"layout\",\"parent\":[\"getwid-megamenu/menu\"],\"attributes\":{\"url\":{\"type\":\"string\",\"default\":\"\"},\"text\":{\"type\":\"string\"},\"linkTarget\":{\"type\":\"string\"},\"rel\":{\"type\":\"string\"},\"textColor\":{\"type\":\"string\"},\"customTextColor\":{\"type\":\"string\"},\"fontSize\":{\"type\":\"string\"},\"customFontSize\":{\"type\":\"string\"}},\"supports\":{\"anchor\":false,\"align\":false,\"alignWide\":false,\"reusable\":false,\"lightBlockWrapper\":true}}");

/***/ }),

/***/ "./src/menu-item/controls.js":
/*!***********************************!*\
  !*** ./src/menu-item/controls.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



/**
 * WordPress dependencies
 */
var _lodash = lodash,
    escape = _lodash.escape;
var __ = wp.i18n.__;
var _wp$element = wp.element,
    useCallback = _wp$element.useCallback,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    ToolbarButton = _wp$components.ToolbarButton,
    ToolbarGroup = _wp$components.ToolbarGroup,
    Popover = _wp$components.Popover;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    __experimentalLinkControl = _wp$blockEditor.__experimentalLinkControl;
var NEW_TAB_REL = 'noreferrer noopener';

function Controls(args) {
  var isSelected = args.isSelected,
      attributes = args.attributes,
      setAttributes = args.setAttributes,
      toggleItemDropdown = args.toggleItemDropdown;
  var linkTarget = attributes.linkTarget,
      rel = attributes.rel,
      text = attributes.text,
      url = attributes.url;

  var _useState = useState(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isURLPickerOpen = _useState2[0],
      setIsURLPickerOpen = _useState2[1];

  var isURLSet = !(url === undefined || url.trim().length === 0);

  var openLinkControl = function openLinkControl() {
    setIsURLPickerOpen(true);
    return false;
  };

  var unlinkItem = function unlinkItem() {
    setAttributes({
      url: undefined,
      linkTarget: undefined,
      rel: undefined
    });
    setIsURLPickerOpen(false);
  };

  var onToggleOpenInNewTab = useCallback(function (value) {
    var newLinkTarget = value ? '_blank' : undefined;
    var updatedRel = rel;

    if (newLinkTarget && !rel) {
      updatedRel = NEW_TAB_REL;
    } else if (!newLinkTarget && rel === NEW_TAB_REL) {
      updatedRel = undefined;
    }

    setAttributes({
      linkTarget: newLinkTarget,
      rel: updatedRel
    });
  }, [rel, setAttributes]);
  var onSetLinkRel = useCallback(function (value) {
    setAttributes({
      rel: value
    });
  }, [setAttributes]);
  useEffect(function () {
    if (isSelected && !url) {
      setIsURLPickerOpen(true);
    }
  }, [isSelected]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolbarGroup, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolbarButton, {
    name: "link",
    icon: "admin-links",
    title: __('Edit Link'),
    onClick: openLinkControl,
    isActive: isURLSet
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolbarButton, {
    name: "unlink",
    icon: "editor-unlink",
    title: __('Unlink'),
    onClick: unlinkItem,
    isDisabled: !isURLSet
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolbarGroup, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolbarButton, {
    name: "submenu",
    icon: "download",
    title: __('Add submenu'),
    onClick: toggleItemDropdown
  }))), isURLPickerOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Popover, {
    position: "top center",
    onClose: function onClose() {
      return setIsURLPickerOpen(false);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(__experimentalLinkControl, {
    className: "wp-block-navigation-link__inline-link-input",
    value: {
      url: url,
      opensInNewTab: linkTarget === '_blank'
    },
    onChange: function onChange(_ref) {
      var _ref$title = _ref.title,
          newTitle = _ref$title === void 0 ? '' : _ref$title,
          _ref$url = _ref.url,
          newURL = _ref$url === void 0 ? '' : _ref$url,
          newOpensInNewTab = _ref.opensInNewTab;
      setAttributes({
        url: newURL,
        text: function () {
          if (text) {
            return text;
          }

          if (newTitle !== '' && text !== newTitle) {
            return escape(newTitle);
          }
        }()
      });

      if (linkTarget === "_blank" !== newOpensInNewTab) {
        onToggleOpenInNewTab(newOpensInNewTab);
      }

      setIsURLPickerOpen(false);
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Link settings')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __('Open in new tab'),
    onChange: onToggleOpenInNewTab,
    checked: linkTarget === '_blank'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: __('Link rel'),
    value: rel || '',
    onChange: onSetLinkRel
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Controls);

/***/ }),

/***/ "./src/menu-item/edit.js":
/*!*******************************!*\
  !*** ./src/menu-item/edit.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls */ "./src/menu-item/controls.js");





/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

var _lodash = lodash,
    head = _lodash.head,
    isEqual = _lodash.isEqual;
var __ = wp.i18n.__;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var compose = wp.compose.compose;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
/**
 * Internal dependencies
 */

function MenuItemEdit(props) {
  var _classnames2;

  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      isSelected = props.isSelected,
      onReplace = props.onReplace,
      mergeBlocks = props.mergeBlocks,
      isParentOfSelectedBlock = props.isParentOfSelectedBlock,
      hasDescendants = props.hasDescendants,
      updateInnerBlocks = props.updateInnerBlocks,
      rootBlockClientId = props.rootBlockClientId,
      clientId = props.clientId,
      parentAttributes = props.parentAttributes;
  var text = attributes.text;

  var itemLabelPlaceholder = __('Add link…');

  var _useState = useState(hasDescendants),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      isItemDropdownOpened = _useState2[0],
      setIsItemDropdownOpened = _useState2[1];

  var isMenuItemSelected = isSelected || isParentOfSelectedBlock;
  var menuItemHasChildrens = isItemDropdownOpened || hasDescendants;
  var showDropdown = isMenuItemSelected && menuItemHasChildrens;

  var _useState3 = useState({
    left: 0,
    width: 'auto'
  }),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),
      dropdownPosition = _useState4[0],
      setDropdownPosition = _useState4[1];

  var toggleItemDropdown = function toggleItemDropdown() {
    setIsItemDropdownOpened(!isItemDropdownOpened);

    if (hasDescendants) {
      updateInnerBlocks();
    }

    return false;
  };

  var updateDropdownPosition = function updateDropdownPosition() {
    var newDropdownPosition = {};
    var rootBlockNode;
    var blockNode = document.querySelector('[data-block="' + clientId + '"]');
    var blockCoords = blockNode.getBoundingClientRect();

    if (parentAttributes.expandDropdown) {
      rootBlockNode = document.querySelector('.editor-styles-wrapper');
    } else {
      rootBlockNode = document.querySelector('[data-block="' + rootBlockClientId + '"] .wp-block-getwid-megamenu');
    }

    var rootCoords = rootBlockNode.getBoundingClientRect();
    var left = -(blockCoords.x - rootCoords.x);

    if (parentAttributes.dropdownMaxWidth && rootCoords.width > parentAttributes.dropdownMaxWidth) {
      left = left + (rootCoords.width - parentAttributes.dropdownMaxWidth) / 2;
    }

    newDropdownPosition = {
      left: left,
      width: rootCoords.width
    };

    if (!isEqual(newDropdownPosition, dropdownPosition)) {
      setDropdownPosition(newDropdownPosition);
    }
  };

  useEffect(function () {
    updateDropdownPosition();
  }, [isSelected]);
  useEffect(function () {
    window.addEventListener('resize', updateDropdownPosition);
  }, []);
  useEffect(function () {
    setAttributes({
      fontSize: parentAttributes.menuItemFontSize,
      customFontSize: parentAttributes.customMenuItemFontSize,
      textColor: parentAttributes.menuItemColor,
      customTextColor: parentAttributes.customMenuItemColor
    });
  }, []);
  var dropdownWrapperStyle = {
    left: dropdownPosition.left,
    width: dropdownPosition.width,
    maxWidth: parentAttributes.dropdownMaxWidth
  };
  var dropdownStyle = {
    backgroundColor: attributes.customDropdownBackgroundColor
  };
  var dropdownContentStyle = {
    maxWidth: parentAttributes.dropdownContentMaxWidth
  };
  var dropdownClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('wp-block-getwid-megamenu-item__dropdown', _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({
    'has-background': attributes.dropdownBackgroundColor || attributes.customDropdownBackgroundColor
  }, "has-".concat(attributes.dropdownBackgroundColor, "-background-color"), !!attributes.dropdownBackgroundColor));
  var itemClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('wp-block-getwid-megamenu-item', {
    'has-child': hasDescendants,
    'is-opened': showDropdown
  });
  var itemLinkClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('wp-block-getwid-megamenu-item__link', (_classnames2 = {
    'has-text-color': attributes.textColor || attributes.customTextColor
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames2, "has-".concat(attributes.textColor, "-color"), !!attributes.textColor), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames2, "has-".concat(attributes.fontSize, "-font-size"), !!attributes.fontSize), _classnames2));
  var itemLinkStyles = {
    color: attributes.customTextColor,
    fontSize: attributes.customFontSize
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: itemClasses
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: itemLinkClasses,
    style: itemLinkStyles
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("a", {
    href: "#",
    onClick: function onClick() {
      return false;
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RichText, {
    placeholder: itemLabelPlaceholder,
    value: text,
    onChange: function onChange(value) {
      return setAttributes({
        text: value
      });
    },
    withoutInteractiveFormatting: true,
    onReplace: onReplace,
    onMerge: mergeBlocks,
    identifier: "text"
  }), menuItemHasChildrens && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", {
    className: "wp-block-getwid-megamenu-item__dropdown-icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", {
    className: "dashicons dashicons-arrow-down"
  })))), showDropdown && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "wp-block-getwid-megamenu-item__dropdown-wrapper",
    style: dropdownWrapperStyle
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: dropdownClasses,
    style: dropdownStyle
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "wp-block-getwid-megamenu-item__dropdown-content",
    style: dropdownContentStyle
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(InnerBlocks, null))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_5__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    toggleItemDropdown: toggleItemDropdown,
    isItemDropdownOpened: isItemDropdownOpened
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function (select, ownProps) {
  var _select = select('core/block-editor'),
      hasSelectedInnerBlock = _select.hasSelectedInnerBlock,
      getClientIdsOfDescendants = _select.getClientIdsOfDescendants,
      getBlockParentsByBlockName = _select.getBlockParentsByBlockName,
      getBlock = _select.getBlock;

  var clientId = ownProps.clientId;
  var isParentOfSelectedBlock = hasSelectedInnerBlock(clientId, true);
  var hasDescendants = !!getClientIdsOfDescendants([clientId]).length;
  var rootBlockClientId = head(getBlockParentsByBlockName(clientId, 'getwid-megamenu/menu'));
  var parentAttributes = getBlock(rootBlockClientId).attributes;
  return {
    isParentOfSelectedBlock: isParentOfSelectedBlock,
    hasDescendants: hasDescendants,
    rootBlockClientId: rootBlockClientId,
    clientId: clientId,
    parentAttributes: parentAttributes
  };
}), withDispatch(function (dispatch, _ref) {
  var clientId = _ref.clientId;
  return {
    updateInnerBlocks: function updateInnerBlocks(blocks) {
      dispatch('core/block-editor').replaceInnerBlocks(clientId, [], false);
    }
  };
})])(MenuItemEdit));

/***/ }),

/***/ "./src/menu-item/index.js":
/*!********************************!*\
  !*** ./src/menu-item/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/menu-item/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/menu-item/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/menu-item/save.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/menu-item/edit.js");
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;



registerBlockType(_block_json__WEBPACK_IMPORTED_MODULE_0__.name, {
  title: __('Menu Item', 'getwid-megamenu'),
  icon: 'admin-links',
  category: _block_json__WEBPACK_IMPORTED_MODULE_0__.category,
  parent: _block_json__WEBPACK_IMPORTED_MODULE_0__.parent,
  attributes: _block_json__WEBPACK_IMPORTED_MODULE_0__.attributes,
  supports: _block_json__WEBPACK_IMPORTED_MODULE_0__.supports,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/menu-item/save.js":
/*!*******************************!*\
  !*** ./src/menu-item/save.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var InnerBlocks = wp.blockEditor.InnerBlocks;
function save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
}

/***/ }),

/***/ "./src/menu/block.json":
/*!*****************************!*\
  !*** ./src/menu/block.json ***!
  \*****************************/
/*! exports provided: name, category, attributes, supports, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"getwid-megamenu/menu\",\"category\":\"layout\",\"attributes\":{\"itemsJustification\":{\"type\":\"string\"},\"expandDropdown\":{\"type\":\"boolean\",\"default\":false},\"menuMaxWidth\":{\"type\":\"number\"},\"dropdownMaxWidth\":{\"type\":\"number\"},\"dropdownContentMaxWidth\":{\"type\":\"number\"},\"collapseOnMobile\":{\"type\":\"boolean\",\"default\":true},\"responsiveBreakpoint\":{\"type\":\"number\",\"default\":600},\"menuItemFontSize\":{\"type\":\"string\"},\"customMenuItemFontSize\":{\"type\":\"number\"},\"menuItemColor\":{\"type\":\"string\"},\"customMenuItemColor\":{\"type\":\"string\"},\"toggleButtonAlignment\":{\"type\":\"string\"}},\"supports\":{\"anchor\":false,\"align\":[\"wide\",\"full\"],\"reusable\":false,\"customClassName\":true,\"lightBlockWrapper\":true}}");

/***/ }),

/***/ "./src/menu/controls.js":
/*!******************************!*\
  !*** ./src/menu/controls.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_controls_color_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom-controls/color-palette */ "./src/custom-controls/color-palette.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var __ = wp.i18n.__;
var useEffect = wp.element.useEffect;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    FontSizePicker = _wp$blockEditor.FontSizePicker,
    withFontSizes = _wp$blockEditor.withFontSizes,
    withColors = _wp$blockEditor.withColors;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Toolbar = _wp$components.Toolbar,
    ToolbarButton = _wp$components.ToolbarButton,
    ToolbarGroup = _wp$components.ToolbarGroup,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button,
    ToggleControl = _wp$components.ToggleControl;
var withDispatch = wp.data.withDispatch;
var compose = wp.compose.compose;

function Controls(args) {
  var setAttributes = args.setAttributes,
      attributes = args.attributes,
      menuItemFontSize = args.menuItemFontSize,
      setMenuItemFontSize = args.setMenuItemFontSize,
      menuItemColor = args.menuItemColor,
      setMenuItemColor = args.setMenuItemColor,
      updateChildBlocksAttributes = args.updateChildBlocksAttributes;

  function setAlignment(alignment) {
    return function () {
      var itemsJustification = attributes.itemsJustification === alignment ? undefined : alignment;
      setAttributes({
        itemsJustification: itemsJustification
      });
    };
  }

  function expandDropdown() {
    setAttributes({
      expandDropdown: !attributes.expandDropdown
    });
  }

  useEffect(function () {
    updateChildBlocksAttributes({
      fontSize: menuItemFontSize.slug,
      customFontSize: menuItemFontSize.slug ? undefined : menuItemFontSize.size
    });
  }, [menuItemFontSize.size]);
  useEffect(function () {
    updateChildBlocksAttributes({
      textColor: menuItemColor.slug,
      customTextColor: menuItemColor.slug ? undefined : menuItemColor.color
    });
  }, [menuItemColor.color]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Toolbar, {
    icon: attributes.itemsJustification ? "editor-align".concat(attributes.itemsJustification) : "editor-alignleft",
    label: __('Change items justification'),
    isCollapsed: true,
    controls: [{
      icon: "editor-alignleft",
      title: __('Justify items left'),
      isActive: 'left' === attributes.itemsJustification,
      onClick: setAlignment('left')
    }, {
      icon: "editor-aligncenter",
      title: __('Justify items center'),
      isActive: 'center' === attributes.itemsJustification,
      onClick: setAlignment('center')
    }, {
      icon: "editor-alignright",
      title: __('Justify items right'),
      isActive: 'right' === attributes.itemsJustification,
      onClick: setAlignment('right')
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolbarGroup, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolbarButton, {
    name: "expand",
    icon: attributes.expandDropdown ? "editor-contract" : "editor-expand",
    title: __('Expand dropdown'),
    onClick: expandDropdown
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Styles'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(FontSizePicker, {
    value: menuItemFontSize.size,
    onChange: setMenuItemFontSize
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_custom_controls_color_palette__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __('Menu Item Color'),
    disableCustomColors: false,
    color: menuItemColor.color,
    onChange: setMenuItemColor,
    clearable: true
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __('Expand dropdown'),
    help: attributes.expandDropdown ? __('Dropdown width same as window width.') : __('Dropdown width same as menu width.'),
    checked: attributes.expandDropdown,
    onChange: expandDropdown
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Width Settings'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __('Maximum width of top-level menu in pixels'),
    value: attributes.menuMaxWidth,
    onChange: function onChange(value) {
      return setAttributes({
        menuMaxWidth: value
      });
    },
    min: 0,
    max: 2000
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __('Maximum width of dropdown in pixels'),
    value: attributes.dropdownMaxWidth,
    onChange: function onChange(dropdownMaxWidth) {
      return setAttributes({
        dropdownMaxWidth: dropdownMaxWidth
      });
    },
    min: 0,
    max: 2000
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __('Maximum width of dropdown content in pixels'),
    value: attributes.dropdownContentMaxWidth,
    onChange: function onChange(dropdownContentMaxWidth) {
      return setAttributes({
        dropdownContentMaxWidth: dropdownContentMaxWidth
      });
    },
    min: 0,
    max: 2000
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Responsive Settings'),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    label: __('Mobile device breakpoint in pixels'),
    value: attributes.responsiveBreakpoint,
    onChange: function onChange(responsiveBreakpoint) {
      return setAttributes({
        responsiveBreakpoint: responsiveBreakpoint
      });
    },
    min: 0,
    max: 2000
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __('Collapse on mobile?'),
    help: attributes.collapseOnMobile ? __('Menu will be transformed to burger.') : __('Menu will be as it is.'),
    checked: attributes.collapseOnMobile,
    onChange: function onChange(collapseOnMobile) {
      return setAttributes({
        collapseOnMobile: collapseOnMobile
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BaseControl, {
    label: __('Toggle button alignment')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ButtonGroup, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
    icon: "editor-alignleft",
    isSecondary: true,
    onClick: function onClick() {
      setAttributes({
        toggleButtonAlignment: 'left'
      });
    },
    isPrimary: 'left' === attributes.toggleButtonAlignment
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
    icon: "editor-aligncenter",
    isSecondary: true,
    onClick: function onClick() {
      setAttributes({
        toggleButtonAlignment: 'center'
      });
    },
    isPrimary: 'center' === attributes.toggleButtonAlignment
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
    icon: "editor-alignright",
    isSecondary: true,
    onClick: function onClick() {
      setAttributes({
        toggleButtonAlignment: 'right'
      });
    },
    isPrimary: 'right' === attributes.toggleButtonAlignment
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (compose([withColors({
  menuItemColor: 'color'
}), withFontSizes('menuItemFontSize'), withDispatch(function (dispatch, ownProps, registry) {
  return {
    updateChildBlocksAttributes: function updateChildBlocksAttributes(attributes) {
      var _dispatch = dispatch('core/block-editor'),
          updateBlockAttributes = _dispatch.updateBlockAttributes;

      var _registry$select = registry.select('core/block-editor'),
          getBlocksByClientId = _registry$select.getBlocksByClientId;

      var menuItems = getBlocksByClientId(ownProps.clientId)[0].innerBlocks;
      menuItems.forEach(function (menuItem) {
        updateBlockAttributes(menuItem.clientId, _objectSpread({}, attributes));
      });
    }
  };
})])(Controls));

/***/ }),

/***/ "./src/menu/edit.js":
/*!**************************!*\
  !*** ./src/menu/edit.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls */ "./src/menu/controls.js");



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var useRef = wp.element.useRef;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var withSelect = wp.data.withSelect;
var compose = wp.compose.compose;
var TEMPLATE = [['getwid-megamenu/menu-item', {}]];
var ALLOWED_BLOCKS = ['getwid-megamenu/menu-item'];

function MegaMenu(args) {
  var _classnames;

  var selectedBlockHasDescendants = args.selectedBlockHasDescendants,
      isImmediateParentOfSelectedBlock = args.isImmediateParentOfSelectedBlock,
      isSelected = args.isSelected,
      attributes = args.attributes;
  var ref = useRef();
  var menuClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-getwid-megamenu', (_classnames = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "justify-items-".concat(attributes.itemsJustification), attributes.itemsJustification), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "has-full-width-dropdown", attributes.expandDropdown), _classnames));
  var menuWrapperStyle = {
    maxWidth: attributes.menuMaxWidth
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_3__["default"], args), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: menuClasses
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "wp-block-getwid-megamenu__wrapper",
    style: menuWrapperStyle
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "wp-block-getwid-megamenu__content-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "wp-block-getwid-megamenu__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
    ref: ref,
    template: TEMPLATE,
    templateLock: false,
    allowedBlocks: ALLOWED_BLOCKS,
    templateInsertUpdatesSelection: false,
    renderAppender: isImmediateParentOfSelectedBlock && !selectedBlockHasDescendants || isSelected ? InnerBlocks.DefaultAppender : false,
    __experimentalMoverDirection: "horizontal"
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function (select, _ref) {
  var _getClientIdsOfDescen;

  var clientId = _ref.clientId;

  var _select = select('core/block-editor'),
      getClientIdsOfDescendants = _select.getClientIdsOfDescendants,
      hasSelectedInnerBlock = _select.hasSelectedInnerBlock,
      getSelectedBlockClientId = _select.getSelectedBlockClientId,
      getBlocksByClientId = _select.getBlocksByClientId;

  var isImmediateParentOfSelectedBlock = hasSelectedInnerBlock(clientId, false);
  var selectedBlockId = getSelectedBlockClientId();
  var selectedBlockHasDescendants = !!((_getClientIdsOfDescen = getClientIdsOfDescendants([selectedBlockId])) === null || _getClientIdsOfDescen === void 0 ? void 0 : _getClientIdsOfDescen.length);
  var menuItems = getBlocksByClientId(clientId)[0].innerBlocks;
  return {
    isImmediateParentOfSelectedBlock: isImmediateParentOfSelectedBlock,
    selectedBlockHasDescendants: selectedBlockHasDescendants,
    menuItems: menuItems
  };
})])(MegaMenu));

/***/ }),

/***/ "./src/menu/index.js":
/*!***************************!*\
  !*** ./src/menu/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/menu/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/menu/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/menu/save.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/menu/edit.js");
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;



registerBlockType(_block_json__WEBPACK_IMPORTED_MODULE_0__.name, {
  title: __('Mega Menu', 'getwid-megamenu'),
  keywords: [__('navigation', 'getwid-megamenu'), __('links', 'getwid-megamenu')],
  icon: 'menu',
  category: _block_json__WEBPACK_IMPORTED_MODULE_0__.category,
  attributes: _block_json__WEBPACK_IMPORTED_MODULE_0__.attributes,
  supports: _block_json__WEBPACK_IMPORTED_MODULE_0__.supports,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/menu/save.js":
/*!**************************!*\
  !*** ./src/menu/save.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var InnerBlocks = wp.blockEditor.InnerBlocks;
function save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
}

/***/ }),

/***/ "./src/plain-menu-item/block.json":
/*!****************************************!*\
  !*** ./src/plain-menu-item/block.json ***!
  \****************************************/
/*! exports provided: name, category, parent, attributes, supports, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"getwid-megamenu/plain-menu-item\",\"category\":\"layout\",\"parent\":[\"getwid-megamenu/plain-menu\"],\"attributes\":{\"url\":{\"type\":\"string\",\"default\":\"\"},\"text\":{\"type\":\"string\"},\"linkTarget\":{\"type\":\"string\"},\"rel\":{\"type\":\"string\"},\"textColor\":{\"type\":\"string\"},\"customTextColor\":{\"type\":\"string\"},\"fontSize\":{\"type\":\"string\"},\"customFontSize\":{\"type\":\"string\"}},\"supports\":{\"anchor\":false,\"align\":false,\"alignWide\":false,\"reusable\":false,\"lightBlockWrapper\":true}}");

/***/ }),

/***/ "./src/plain-menu-item/controls.js":
/*!*****************************************!*\
  !*** ./src/plain-menu-item/controls.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



/**
 * WordPress dependencies
 */
var _lodash = lodash,
    escape = _lodash.escape;
var __ = wp.i18n.__;
var _wp$element = wp.element,
    useCallback = _wp$element.useCallback,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    ToolbarButton = _wp$components.ToolbarButton,
    ToolbarGroup = _wp$components.ToolbarGroup,
    Popover = _wp$components.Popover;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    __experimentalLinkControl = _wp$blockEditor.__experimentalLinkControl;
var NEW_TAB_REL = 'noreferrer noopener';

function Controls(args) {
  var isSelected = args.isSelected,
      attributes = args.attributes,
      setAttributes = args.setAttributes,
      insertPlainMenuItem = args.insertPlainMenuItem;
  var linkTarget = attributes.linkTarget,
      rel = attributes.rel,
      text = attributes.text,
      url = attributes.url;

  var _useState = useState(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isURLPickerOpen = _useState2[0],
      setIsURLPickerOpen = _useState2[1];

  var isURLSet = !(url === undefined || url.trim().length === 0);

  var openLinkControl = function openLinkControl() {
    setIsURLPickerOpen(true);
    return false;
  };

  var unlinkItem = function unlinkItem() {
    setAttributes({
      url: undefined,
      linkTarget: undefined,
      rel: undefined
    });
    setIsURLPickerOpen(false);
  };

  var onSetLinkRel = useCallback(function (value) {
    setAttributes({
      rel: value
    });
  }, [setAttributes]);
  var onToggleOpenInNewTab = useCallback(function (value) {
    var newLinkTarget = value ? '_blank' : undefined;
    var updatedRel = rel;

    if (newLinkTarget && !rel) {
      updatedRel = NEW_TAB_REL;
    } else if (!newLinkTarget && rel === NEW_TAB_REL) {
      updatedRel = undefined;
    }

    setAttributes({
      linkTarget: newLinkTarget,
      rel: updatedRel
    });
  }, [rel, setAttributes]);
  useEffect(function () {
    if (isSelected && !url) {
      setIsURLPickerOpen(true);
    }
  }, [isSelected]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolbarGroup, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolbarButton, {
    name: "link",
    icon: "admin-links",
    title: __('Edit Link'),
    onClick: openLinkControl,
    isActive: isURLSet
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolbarButton, {
    name: "unlink",
    icon: "editor-unlink",
    title: __('Unlink'),
    onClick: unlinkItem,
    isDisabled: !isURLSet
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolbarGroup, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolbarButton, {
    name: "submenu",
    icon: "download",
    title: __('Add submenu'),
    onClick: insertPlainMenuItem
  }))), isURLPickerOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Popover, {
    position: "bottom center",
    onClose: function onClose() {
      return setIsURLPickerOpen(false);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(__experimentalLinkControl, {
    className: "wp-block-plain-menu-item__inline-link-input",
    value: {
      url: url,
      opensInNewTab: linkTarget === "_blank"
    },
    onChange: function onChange(_ref) {
      var _ref$title = _ref.title,
          newTitle = _ref$title === void 0 ? '' : _ref$title,
          _ref$url = _ref.url,
          newURL = _ref$url === void 0 ? '' : _ref$url,
          newOpensInNewTab = _ref.opensInNewTab;
      setAttributes({
        url: newURL,
        text: function () {
          if (text) {
            return text;
          }

          if (newTitle !== '' && text !== newTitle) {
            return escape(newTitle);
          }
        }()
      });

      if (linkTarget === "_blank" !== newOpensInNewTab) {
        onToggleOpenInNewTab(newOpensInNewTab);
      }
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Link settings')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToggleControl, {
    label: __('Open in new tab'),
    onChange: onToggleOpenInNewTab,
    checked: linkTarget === '_blank'
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    label: __('Link rel'),
    value: rel || '',
    onChange: onSetLinkRel
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Controls);

/***/ }),

/***/ "./src/plain-menu-item/edit.js":
/*!*************************************!*\
  !*** ./src/plain-menu-item/edit.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls */ "./src/plain-menu-item/controls.js");





/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

var _lodash = lodash,
    head = _lodash.head,
    isEqual = _lodash.isEqual,
    escape = _lodash.escape;
var __ = wp.i18n.__;
var _wp$element = wp.element,
    useCallback = _wp$element.useCallback,
    useState = _wp$element.useState,
    useRef = _wp$element.useRef,
    useEffect = _wp$element.useEffect,
    useLayoutEffect = _wp$element.useLayoutEffect;
var compose = wp.compose.compose;
var _wp$data = wp.data,
    withSelect = _wp$data.withSelect,
    withDispatch = _wp$data.withDispatch;
var _wp$components = wp.components,
    KeyboardShortcuts = _wp$components.KeyboardShortcuts,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    ToolbarButton = _wp$components.ToolbarButton,
    ToolbarGroup = _wp$components.ToolbarGroup,
    Popover = _wp$components.Popover;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    RichText = _wp$blockEditor.RichText,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    __experimentalBlock = _wp$blockEditor.__experimentalBlock,
    __experimentalLinkControl = _wp$blockEditor.__experimentalLinkControl;
var _wp$keycodes = wp.keycodes,
    rawShortcut = _wp$keycodes.rawShortcut,
    displayShortcut = _wp$keycodes.displayShortcut;
var createBlock = wp.blocks.createBlock;

function MenuItemEdit(props) {
  var _classnames;

  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      className = props.className,
      isSelected = props.isSelected,
      onReplace = props.onReplace,
      mergeBlocks = props.mergeBlocks,
      isParentOfSelectedBlock = props.isParentOfSelectedBlock,
      isImmediateParentOfSelectedBlock = props.isImmediateParentOfSelectedBlock,
      hasDescendants = props.hasDescendants,
      updateInnerBlocks = props.updateInnerBlocks,
      rootBlockClientId = props.rootBlockClientId,
      insertPlainMenuItem = props.insertPlainMenuItem,
      selectedBlockHasDescendants = props.selectedBlockHasDescendants,
      clientId = props.clientId,
      parentAttributes = props.parentAttributes,
      parentItemClientId = props.parentItemClientId;
  var linkTarget = attributes.linkTarget,
      rel = attributes.rel,
      text = attributes.text,
      url = attributes.url;

  var itemLabelPlaceholder = __('Add link…');

  var _useState = useState(hasDescendants),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      isItemDropdownOpened = _useState2[0],
      setIsItemDropdownOpened = _useState2[1];

  var isMenuItemSelected = isSelected || isParentOfSelectedBlock;
  var menuItemHasChildrens = isItemDropdownOpened || hasDescendants;
  var showDropdown = isMenuItemSelected && menuItemHasChildrens;
  var itemClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('wp-block-getwid-plain-menu-item', {
    'has-child': hasDescendants,
    'has-child-selected': isParentOfSelectedBlock,
    'is-opened': showDropdown
  });
  useEffect(function () {
    setAttributes({
      fontSize: parentItemClientId ? undefined : parentAttributes.menuItemFontSize,
      customFontSize: parentItemClientId ? undefined : parentAttributes.customMenuItemFontSize,
      textColor: parentItemClientId ? undefined : parentAttributes.menuItemColor,
      customTextColor: parentItemClientId ? undefined : parentAttributes.customMenuItemColor
    });
  }, []);
  var itemLinkClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()('wp-block-getwid-plain-menu-item__link', (_classnames = {
    'has-text-color': attributes.textColor || attributes.customTextColor
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, "has-".concat(attributes.textColor, "-color"), !!attributes.textColor), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, "has-".concat(attributes.fontSize, "-font-size"), !!attributes.fontSize), _classnames));
  var itemLinkStyles = {
    color: attributes.customTextColor,
    fontSize: attributes.customFontSize
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: itemClasses
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: itemLinkClasses,
    style: itemLinkStyles
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("a", {
    href: "#",
    onClick: function onClick() {
      return false;
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(RichText, {
    placeholder: itemLabelPlaceholder,
    value: text,
    onChange: function onChange(value) {
      return setAttributes({
        text: value
      });
    },
    withoutInteractiveFormatting: true,
    onReplace: onReplace,
    onMerge: mergeBlocks,
    identifier: "text"
  }), menuItemHasChildrens && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", {
    className: "wp-block-getwid-plain-menu-item__dropdown-icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("span", {
    className: "dashicons dashicons-arrow-down"
  })))), isMenuItemSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "wp-block-getwid-plain-menu-item__dropdown"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "wp-block-getwid-plain-menu-item__dropdown-content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(InnerBlocks, {
    allowedBlocks: ['getwid-megamenu/plain-menu-item'],
    renderAppender: isSelected && hasDescendants || isImmediateParentOfSelectedBlock && !selectedBlockHasDescendants ? InnerBlocks.DefaultAppender : false
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_5__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    insertPlainMenuItem: insertPlainMenuItem
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function (select, ownProps) {
  var _getClientIdsOfDescen;

  var _select = select('core/block-editor'),
      hasSelectedInnerBlock = _select.hasSelectedInnerBlock,
      getClientIdsOfDescendants = _select.getClientIdsOfDescendants,
      getBlockParentsByBlockName = _select.getBlockParentsByBlockName,
      getSelectedBlockClientId = _select.getSelectedBlockClientId,
      getBlock = _select.getBlock;

  var clientId = ownProps.clientId;
  var isParentOfSelectedBlock = hasSelectedInnerBlock(clientId, true);
  var isImmediateParentOfSelectedBlock = hasSelectedInnerBlock(clientId, false);
  var hasDescendants = !!getClientIdsOfDescendants([clientId]).length;
  var selectedBlockId = getSelectedBlockClientId();
  var selectedBlockHasDescendants = !!((_getClientIdsOfDescen = getClientIdsOfDescendants([selectedBlockId])) === null || _getClientIdsOfDescen === void 0 ? void 0 : _getClientIdsOfDescen.length);
  var rootBlockClientId = head(getBlockParentsByBlockName(clientId, 'getwid-megamenu/plain-menu'));
  var parentItemClientId = head(getBlockParentsByBlockName(clientId, 'getwid-megamenu/plain-menu-item'));
  var parentAttributes = getBlock(rootBlockClientId).attributes;
  return {
    isParentOfSelectedBlock: isParentOfSelectedBlock,
    isImmediateParentOfSelectedBlock: isImmediateParentOfSelectedBlock,
    selectedBlockHasDescendants: selectedBlockHasDescendants,
    hasDescendants: hasDescendants,
    rootBlockClientId: rootBlockClientId,
    clientId: clientId,
    parentAttributes: parentAttributes,
    parentItemClientId: parentItemClientId
  };
}), withDispatch(function (dispatch, ownProps, registry) {
  return {
    clearInnerBlocks: function clearInnerBlocks(blocks) {
      dispatch('core/block-editor').replaceInnerBlocks(ownProps.clientId, [], false);
    },
    insertPlainMenuItem: function insertPlainMenuItem() {
      var _dispatch = dispatch('core/block-editor'),
          insertBlock = _dispatch.insertBlock;

      var _registry$select = registry.select('core/block-editor'),
          getClientIdsOfDescendants = _registry$select.getClientIdsOfDescendants;

      var navItems = getClientIdsOfDescendants([ownProps.clientId]);
      var insertionPoint = navItems.length ? navItems.length : 0;
      var blockToInsert = createBlock('getwid-megamenu/plain-menu-item');
      insertBlock(blockToInsert, insertionPoint, ownProps.clientId);
    }
  };
})])(MenuItemEdit));

/***/ }),

/***/ "./src/plain-menu-item/index.js":
/*!**************************************!*\
  !*** ./src/plain-menu-item/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/plain-menu-item/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/plain-menu-item/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/plain-menu-item/save.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/plain-menu-item/edit.js");
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;



registerBlockType(_block_json__WEBPACK_IMPORTED_MODULE_0__.name, {
  title: __('Plain Menu Item', 'getwid-megamenu'),
  icon: 'admin-links',
  category: _block_json__WEBPACK_IMPORTED_MODULE_0__.category,
  parent: _block_json__WEBPACK_IMPORTED_MODULE_0__.parent,
  attributes: _block_json__WEBPACK_IMPORTED_MODULE_0__.attributes,
  supports: _block_json__WEBPACK_IMPORTED_MODULE_0__.supports,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/plain-menu-item/save.js":
/*!*************************************!*\
  !*** ./src/plain-menu-item/save.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var InnerBlocks = wp.blockEditor.InnerBlocks;
function save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
}

/***/ }),

/***/ "./src/plain-menu/block.json":
/*!***********************************!*\
  !*** ./src/plain-menu/block.json ***!
  \***********************************/
/*! exports provided: name, category, attributes, supports, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"getwid-megamenu/plain-menu\",\"category\":\"layout\",\"attributes\":{\"itemsJustification\":{\"type\":\"string\"},\"orientation\":{\"type\":\"string\",\"default\":\"horizontal\"},\"menuItemFontSize\":{\"type\":\"string\"},\"customMenuItemFontSize\":{\"type\":\"number\"},\"menuItemColor\":{\"type\":\"string\"},\"customMenuItemColor\":{\"type\":\"string\"}},\"supports\":{\"anchor\":false,\"align\":false,\"reusable\":false,\"customClassName\":true,\"lightBlockWrapper\":true}}");

/***/ }),

/***/ "./src/plain-menu/controls.js":
/*!************************************!*\
  !*** ./src/plain-menu/controls.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_controls_color_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom-controls/color-palette */ "./src/custom-controls/color-palette.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var __ = wp.i18n.__;
var useEffect = wp.element.useEffect;
var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    FontSizePicker = _wp$blockEditor.FontSizePicker,
    withFontSizes = _wp$blockEditor.withFontSizes,
    withColors = _wp$blockEditor.withColors;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Toolbar = _wp$components.Toolbar,
    ToolbarButton = _wp$components.ToolbarButton,
    ToolbarGroup = _wp$components.ToolbarGroup;
var withDispatch = wp.data.withDispatch;
var compose = wp.compose.compose;

function Controls(args) {
  var setAttributes = args.setAttributes,
      attributes = args.attributes,
      menuItemFontSize = args.menuItemFontSize,
      setMenuItemFontSize = args.setMenuItemFontSize,
      menuItemColor = args.menuItemColor,
      setMenuItemColor = args.setMenuItemColor,
      updateChildBlocksAttributes = args.updateChildBlocksAttributes;

  function setAlignment(alignment) {
    return function () {
      var itemsJustification = attributes.itemsJustification === alignment ? undefined : alignment;
      setAttributes({
        itemsJustification: itemsJustification
      });
    };
  }

  useEffect(function () {
    updateChildBlocksAttributes({
      fontSize: menuItemFontSize.slug,
      customFontSize: menuItemFontSize.slug ? undefined : menuItemFontSize.size
    });
  }, [menuItemFontSize.size]);
  useEffect(function () {
    updateChildBlocksAttributes({
      textColor: menuItemColor.slug,
      customTextColor: menuItemColor.slug ? undefined : menuItemColor.color
    });
  }, [menuItemColor.color]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Toolbar, {
    icon: attributes.itemsJustification ? "editor-align".concat(attributes.itemsJustification) : "editor-alignleft",
    label: __('Change items justification'),
    isCollapsed: true,
    controls: [{
      icon: "editor-alignleft",
      title: __('Justify items left'),
      isActive: 'left' === attributes.itemsJustification,
      onClick: setAlignment('left')
    }, {
      icon: "editor-aligncenter",
      title: __('Justify items center'),
      isActive: 'center' === attributes.itemsJustification,
      onClick: setAlignment('center')
    }, {
      icon: "editor-alignright",
      title: __('Justify items right'),
      isActive: 'right' === attributes.itemsJustification,
      onClick: setAlignment('right')
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolbarGroup, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ToolbarButton, {
    name: "orientation",
    icon: "image-rotate-right",
    title: attributes.orientation === 'vertical' ? __('Make horizontal') : __('Make vertical'),
    isActive: attributes.orientation === 'vertical',
    onClick: function onClick() {
      setAttributes({
        orientation: attributes.orientation === 'vertical' ? 'horizontal' : 'vertical'
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Settings'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(FontSizePicker, {
    value: menuItemFontSize.size,
    onChange: setMenuItemFontSize
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_custom_controls_color_palette__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __('Color'),
    disableCustomColors: false,
    color: menuItemColor.color,
    onChange: setMenuItemColor,
    clearable: true
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (compose([withColors({
  menuItemColor: 'color'
}), withFontSizes('menuItemFontSize'), withDispatch(function (dispatch, ownProps, registry) {
  return {
    updateChildBlocksAttributes: function updateChildBlocksAttributes(attributes) {
      var _dispatch = dispatch('core/block-editor'),
          updateBlockAttributes = _dispatch.updateBlockAttributes;

      var _registry$select = registry.select('core/block-editor'),
          getBlocksByClientId = _registry$select.getBlocksByClientId;

      var menuItems = getBlocksByClientId(ownProps.clientId)[0].innerBlocks;
      menuItems.forEach(function (menuItem) {
        updateBlockAttributes(menuItem.clientId, _objectSpread({}, attributes));
      });
    }
  };
})])(Controls));

/***/ }),

/***/ "./src/plain-menu/edit.js":
/*!********************************!*\
  !*** ./src/plain-menu/edit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls */ "./src/plain-menu/controls.js");



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

var useRef = wp.element.useRef;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var withSelect = wp.data.withSelect;
var compose = wp.compose.compose;
var TEMPLATE = [['getwid-megamenu/plain-menu-item', {}]];
var ALLOWED_BLOCKS = ['getwid-megamenu/plain-menu-item'];

function PlainMenu(args) {
  var _classnames;

  var selectedBlockHasDescendants = args.selectedBlockHasDescendants,
      isImmediateParentOfSelectedBlock = args.isImmediateParentOfSelectedBlock,
      isSelected = args.isSelected,
      attributes = args.attributes;
  var ref = useRef();
  var menuClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-getwid-plain-menu', (_classnames = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "justify-items-".concat(attributes.itemsJustification), attributes.itemsJustification), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, "is-orientation-".concat(attributes.orientation), attributes.orientation), _classnames));
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_controls__WEBPACK_IMPORTED_MODULE_3__["default"], args), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: menuClasses
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "wp-block-getwid-plain-menu__content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
    ref: ref,
    template: TEMPLATE,
    templateLock: false,
    allowedBlocks: ALLOWED_BLOCKS,
    templateInsertUpdatesSelection: false,
    renderAppender: isImmediateParentOfSelectedBlock && !selectedBlockHasDescendants || isSelected ? InnerBlocks.DefaultAppender : false,
    __experimentalMoverDirection: attributes.orientation
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function (select, _ref) {
  var _getClientIdsOfDescen;

  var clientId = _ref.clientId;

  var _select = select('core/block-editor'),
      getClientIdsOfDescendants = _select.getClientIdsOfDescendants,
      hasSelectedInnerBlock = _select.hasSelectedInnerBlock,
      getSelectedBlockClientId = _select.getSelectedBlockClientId;

  var isImmediateParentOfSelectedBlock = hasSelectedInnerBlock(clientId, false);
  var selectedBlockId = getSelectedBlockClientId();
  var selectedBlockHasDescendants = !!((_getClientIdsOfDescen = getClientIdsOfDescendants([selectedBlockId])) === null || _getClientIdsOfDescen === void 0 ? void 0 : _getClientIdsOfDescen.length);
  return {
    isImmediateParentOfSelectedBlock: isImmediateParentOfSelectedBlock,
    selectedBlockHasDescendants: selectedBlockHasDescendants
  };
})])(PlainMenu));

/***/ }),

/***/ "./src/plain-menu/index.js":
/*!*********************************!*\
  !*** ./src/plain-menu/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/plain-menu/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/plain-menu/block.json", 1);
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/plain-menu/save.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/plain-menu/edit.js");
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;



registerBlockType(_block_json__WEBPACK_IMPORTED_MODULE_0__.name, {
  title: __('Plain Menu', 'getwid-megamenu'),
  icon: 'menu',
  category: _block_json__WEBPACK_IMPORTED_MODULE_0__.category,
  attributes: _block_json__WEBPACK_IMPORTED_MODULE_0__.attributes,
  supports: _block_json__WEBPACK_IMPORTED_MODULE_0__.supports,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./src/plain-menu/save.js":
/*!********************************!*\
  !*** ./src/plain-menu/save.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var InnerBlocks = wp.blockEditor.InnerBlocks;
function save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
}

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
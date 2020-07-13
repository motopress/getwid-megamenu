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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/menu-item/block.json":
/*!**********************************!*\
  !*** ./src/menu-item/block.json ***!
  \**********************************/
/*! exports provided: name, category, parent, attributes, supports, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"mp-megamenu/menu-item\",\"category\":\"layout\",\"parent\":[\"mp-megamenu/menu\"],\"attributes\":{\"url\":{\"type\":\"string\",\"default\":\"\"},\"text\":{\"type\":\"string\"},\"linkTarget\":{\"type\":\"string\"},\"rel\":{\"type\":\"string\"}},\"supports\":{\"anchor\":false,\"align\":false,\"alignWide\":false,\"reusable\":false}}");

/***/ }),

/***/ "./src/menu-item/edit.js":
/*!*******************************!*\
  !*** ./src/menu-item/edit.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */

var _lodash = lodash,
    head = _lodash.head;
var __ = wp.i18n.__;
var _wp$element = wp.element,
    useCallback = _wp$element.useCallback,
    useState = _wp$element.useState,
    useRef = _wp$element.useRef,
    useEffect = _wp$element.useEffect;
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
/**
 * Internal dependencies
 */

var NEW_TAB_REL = 'noreferrer noopener';

function MenuItemToolbar(args) {
  var isSelected = args.isSelected,
      url = args.url,
      setAttributes = args.setAttributes,
      opensInNewTab = args.opensInNewTab,
      onToggleOpenInNewTab = args.onToggleOpenInNewTab,
      toggleItemPopup = args.toggleItemPopup,
      isItemPopupOpened = args.isItemPopupOpened,
      hasDescendants = args.hasDescendants;

  var _useState = useState(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      isURLPickerOpen = _useState2[0],
      setIsURLPickerOpen = _useState2[1];

  var isURLSet = !(url === undefined || url.trim().length === 0);

  var openLinkControl = function openLinkControl() {
    setIsURLPickerOpen(true);
    return false; // prevents default behaviour for event
  };

  var unlinkItem = function unlinkItem() {
    setAttributes({
      url: undefined,
      linkTarget: undefined,
      rel: undefined
    });
    setIsURLPickerOpen(false);
  };

  var linkControl = isURLPickerOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Popover, {
    position: "top center",
    onClose: function onClose() {
      return setIsURLPickerOpen(false);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(__experimentalLinkControl, {
    className: "wp-block-navigation-link__inline-link-input",
    value: {
      url: url,
      opensInNewTab: opensInNewTab
    },
    onChange: function onChange(_ref) {
      var _ref$url = _ref.url,
          newURL = _ref$url === void 0 ? '' : _ref$url,
          newOpensInNewTab = _ref.opensInNewTab;
      setAttributes({
        url: newURL
      });

      if (opensInNewTab !== newOpensInNewTab) {
        onToggleOpenInNewTab(newOpensInNewTab);
      }
    }
  }));
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
    onClick: toggleItemPopup
  }))), linkControl);
}

function MenuItemEdit(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      className = props.className,
      isSelected = props.isSelected,
      onReplace = props.onReplace,
      mergeBlocks = props.mergeBlocks,
      isParentOfSelectedBlock = props.isParentOfSelectedBlock,
      hasDescendants = props.hasDescendants,
      updateInnerBlocks = props.updateInnerBlocks,
      rootBlockClientId = props.rootBlockClientId,
      clientId = props.clientId;
  var linkTarget = attributes.linkTarget,
      rel = attributes.rel,
      text = attributes.text,
      url = attributes.url;
  var onSetLinkRel = useCallback(function (value) {
    setAttributes({
      rel: value
    });
  }, [setAttributes]);

  var itemLabelPlaceholder = __('Add link…');

  var _useState3 = useState(hasDescendants),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      isItemPopupOpened = _useState4[0],
      setIsItemPopupOpened = _useState4[1];

  var toggleItemPopup = function toggleItemPopup() {
    setIsItemPopupOpened(!isItemPopupOpened);

    if (hasDescendants) {
      updateInnerBlocks();
    }

    return false; // prevents default behaviour for event
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
  var itemClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()('wp-block-mp-megamenu-menu-item', {
    'has-child': hasDescendants,
    'is-opened': (isSelected || isParentOfSelectedBlock) && (isItemPopupOpened || hasDescendants)
  });

  var _useState5 = useState({
    left: 0,
    width: 'auto'
  }),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      popupPosition = _useState6[0],
      setPopupPosition = _useState6[1];

  var updatePopupPosition = function updatePopupPosition() {
    var rootBlockNode = document.querySelector('[data-block="' + rootBlockClientId + '"] .wp-block-mp-megamenu-menu');
    var blockNode = rootBlockNode.querySelector('[data-block="' + clientId + '"]');
    var rootCoords = rootBlockNode.getBoundingClientRect();
    var blockCoords = blockNode.getBoundingClientRect();
    var left = blockCoords.x - rootCoords.x;
    setPopupPosition({
      left: -left,
      width: rootCoords.width
    });
  };

  useEffect(function () {
    updatePopupPosition();
  }, [isSelected]);
  var popupStyle = {
    left: popupPosition.left,
    width: popupPosition.width
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: itemClasses
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "wp-block-mp-megamenu-item__link"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
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
  })), (isSelected || isParentOfSelectedBlock) && (isItemPopupOpened || hasDescendants) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "wp-block-mp-megamenu-item__popup-wrapper",
    style: popupStyle
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "wp-block-mp-megamenu-item__popup"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, null)))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MenuItemToolbar, {
    url: url,
    toggleItemPopup: toggleItemPopup,
    isItemPopupOpened: isItemPopupOpened,
    setAttributes: setAttributes,
    isSelected: isSelected,
    hasDescendants: true,
    opensInNewTab: linkTarget === '_blank',
    onToggleOpenInNewTab: onToggleOpenInNewTab
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
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

/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(function (select, ownProps) {
  var _select = select('core/block-editor'),
      hasSelectedInnerBlock = _select.hasSelectedInnerBlock,
      getClientIdsOfDescendants = _select.getClientIdsOfDescendants,
      getBlockParentsByBlockName = _select.getBlockParentsByBlockName;

  var clientId = ownProps.clientId;
  var isParentOfSelectedBlock = hasSelectedInnerBlock(clientId, true);
  var hasDescendants = !!getClientIdsOfDescendants([clientId]).length;
  var rootBlockClientId = head(getBlockParentsByBlockName(clientId, 'mp-megamenu/menu'));
  return {
    isParentOfSelectedBlock: isParentOfSelectedBlock,
    hasDescendants: hasDescendants,
    rootBlockClientId: rootBlockClientId,
    clientId: clientId
  };
}), withDispatch(function (dispatch, _ref2) {
  var clientId = _ref2.clientId;
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
  title: __('Menu Item'),
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

module.exports = JSON.parse("{\"name\":\"mp-megamenu/menu\",\"category\":\"layout\",\"attributes\":{},\"supports\":{\"anchor\":false,\"align\":false,\"alignWide\":true,\"reusable\":false,\"customClassName\":true}}");

/***/ }),

/***/ "./src/menu/edit.js":
/*!**************************!*\
  !*** ./src/menu/edit.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


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
var TEMPLATE = [['mp-megamenu/menu-item', {}]];
var ALLOWED_BLOCKS = ['mp-megamenu/menu-item'];

function MegaMenu(args) {
  var selectedBlockHasDescendants = args.selectedBlockHasDescendants,
      isImmediateParentOfSelectedBlock = args.isImmediateParentOfSelectedBlock,
      isSelected = args.isSelected,
      className = args.className;
  var ref = useRef(); // UI State: rendered Block UI

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
    ref: ref,
    template: TEMPLATE,
    templateLock: false,
    allowedBlocks: ALLOWED_BLOCKS,
    templateInsertUpdatesSelection: false,
    renderAppender: isImmediateParentOfSelectedBlock && !selectedBlockHasDescendants || isSelected ? InnerBlocks.DefaultAppender : false,
    __experimentalPassedProps: {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-mp-megamenu-menu__container')
    },
    __experimentalMoverDirection: "horizontal"
  })));
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
  title: __('Menu'),
  category: _block_json__WEBPACK_IMPORTED_MODULE_0__.category,
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
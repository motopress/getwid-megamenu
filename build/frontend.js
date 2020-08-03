/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/frontend.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/frontend.js":
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  $(document).ready(function () {
    var menus = $('.gw-mm');
    var plainMenus = $('.gw-pm');

    function setDropdownsPosition(menus) {
      menus.each(function (index, menu) {
        if ($(menu).hasClass('is-mobile')) {
          $(menu).find('.gw-mm-item__dropdown-wrapper').css({
            'left': '',
            'width': '',
            'max-width': ''
          });
          return;
        }

        var dropdowns = $(menu).find('.gw-mm-item__dropdown-wrapper');
        var menuCoords = $(menu).offset();
        var maxWidth = $(menu).data('dropdown-width');
        var width = $(menu).hasClass('has-full-width-dropdown') ? $(window).width() : $(menu).width();
        var left = $(menu).hasClass('has-full-width-dropdown') ? -menuCoords.left : 0;

        if (maxWidth && maxWidth < width) {
          left = left + (width - maxWidth) / 2;
        }

        dropdowns.each(function (index, dropdown) {
          $(dropdown).css({
            'left': left,
            'width': width,
            'max-width': maxWidth
          });
        });
      });
    }

    function setDropdownsContentWidth(menus) {
      menus.each(function (index, menu) {
        var contentWidth = $(menu).data('dropdown-content-width');

        if (contentWidth) {
          $(menu).find('.gw-mm-item__dropdown-content').css({
            'max-width': contentWidth
          });
        }
      });
    }

    function showMenuToggleButton(menus) {
      menus.each(function (index, menu) {
        if (!$(menu).hasClass('is-collapsible')) {
          return;
        }

        var breakpoint = $(menu).data('responsive-breakpoint');
        var toggleButtonWrapper = $(menu).find('.gw-mm__toggle-wrapper');
        var toggleButton = $(menu).find('.gw-mm__toggle');

        if (breakpoint >= $(window).width()) {
          toggleButtonWrapper.removeClass('is-hidden');
          $(menu).addClass('is-mobile');
        } else {
          toggleButtonWrapper.addClass('is-hidden');
          $(menu).removeClass('is-mobile is-opened');
        }
      });
    }

    function attachToggleActionToButtons(menus) {
      menus.each(function (index, menu) {
        $(menu).on('click', '.gw-mm__toggle', function (event) {
          toggleMobileMenu($(this), $(menu));
        });
        $(menu).on('click', '.gw-mm-item__toggle', function (event) {
          var dropdown = $(this).closest('.gw-mm-item').find('.gw-mm-item__dropdown-wrapper');
          toggleMobileMenu($(this), $(dropdown));
        });
      });
    }

    function toggleMobileMenu(toggle_button, menu) {
      toggle_button.toggleClass('is-opened');
      menu.toggleClass('is-opened');
    }

    function setMobileMenuPosition(menus) {
      menus.each(function (index, menu) {
        var dropdown = $(menu).find('.gw-mm__content-wrapper');

        if (!$(menu).hasClass('is-mobile')) {
          $(dropdown).css({
            'left': '',
            'width': ''
          });
          return false;
        }

        var menuCoords = $(menu).offset();
        var left = -menuCoords.left;
        $(dropdown).css({
          'left': left,
          'width': $(window).width()
        });
      });
    }

    function setPlainMenusDropdownPosition(menus) {
      menus.each(function (index, menu) {
        var dropdowns = $(menu).find('.gw-pm-item__dropdown');
        var isInsideMegaMenu = $(menu).closest('.gw-mm').length;
        dropdowns.each(function (index, dropdown) {
          $(dropdown).removeClass('toleft');
          var rightEdgePosition = $(dropdown).offset().left + $(dropdown).width();
          var rootWidth = isInsideMegaMenu ? $(menu).closest('.gw-mm-item__dropdown-wrapper').offset().left + $(menu).closest('.gw-mm-item__dropdown-wrapper').width() : $(window).width();
          var isLeft = false;

          if (rightEdgePosition >= rootWidth) {
            isLeft = true;
          }

          if (isLeft) {
            $(dropdown).addClass('toleft');
          }
        });
      });
    }

    showMenuToggleButton(menus);
    attachToggleActionToButtons(menus);
    setDropdownsPosition(menus);
    setDropdownsContentWidth(menus);
    setMobileMenuPosition(menus);
    setPlainMenusDropdownPosition(plainMenus);
    $(window).resize(function () {
      showMenuToggleButton(menus);
      setDropdownsPosition(menus);
      setMobileMenuPosition(menus);
      setPlainMenusDropdownPosition(plainMenus);
    });
  });
})(jQuery);

/***/ })

/******/ });
//# sourceMappingURL=frontend.js.map
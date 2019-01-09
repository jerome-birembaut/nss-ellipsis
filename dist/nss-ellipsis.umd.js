(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["NSSEllipsis"] = factory();
	else
		root["NSSEllipsis"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NSSEllipsis =
/*#__PURE__*/
function () {
  function NSSEllipsis() {
    _classCallCheck(this, NSSEllipsis);
  }

  _createClass(NSSEllipsis, null, [{
    key: "update",
    value: function update(element) {
      var lineMax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

      var _precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';

      var _text = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      if (_precision !== NSSEllipsis.WORD_PRECISION && _precision !== NSSEllipsis.LETTER_PRECISION) {
        _precision = NSSEllipsis.WORD_PRECISION;
      }

      _text = _text != null ? _text : element.innerHTML;

      var txt = _text.replace(/(\r\n\t|\n|\r\t)/gm, " ").replace(/  +/g, ' ').split(_precision);

      var lastHeight = parseInt(element.getBoundingClientRect().height);
      element.innerHTML = 'a';
      var lineHeight = parseInt(element.getBoundingClientRect().height);

      if (lastHeight <= lineHeight * lineMax && element.textInit === undefined) {
        element.innerHTML = _text; // console.log('no need to use ellipsis here', _text)

        return;
      }

      if (element.textInit === undefined) {
        element.textInit = txt;
      }

      element.innerHTML = '';
      var changeCount = 0;
      var index = 0;
      lastHeight = 0;
      var currHeight;
      var prevText = '';
      var tempText = '';

      while (changeCount < lineMax + 1) {
        prevText = element.innerHTML;
        element.innerHTML += element.textInit[index] + _precision; //console.log(element.innerHTML)

        tempText = element.innerHTML;
        element.innerHTML = tempText.substring(0, tempText.length - 1);
        element.innerHTML = element.innerHTML.replace(/\s+$/, '') + '...';
        currHeight = parseInt(element.getBoundingClientRect().height);
        element.innerHTML = tempText;

        if (currHeight !== lastHeight) {
          lastHeight = currHeight;
          changeCount = parseInt(currHeight / lineHeight);

          if (changeCount > lineMax) {
            element.innerHTML = prevText.substring(0, prevText.length - 1);
            element.innerHTML = element.innerHTML.replace(/\s+$/, '') + '...';
            lastHeight = currHeight;
            currHeight = parseInt(element.getBoundingClientRect().height); // if adding ... add a new line

            if (currHeight !== lastHeight) {
              var ar = prevText.split(_precision);
              element.innerHTML = '';
              var changeCount2 = 0;
              lastHeight = 0;

              for (var i = 0; i < ar.length - 1; i++) {
                prevText = element.innerHTML;
                element.innerHTML += ar[i] + _precision;
                currHeight = parseInt(element.getBoundingClientRect().height);

                if (currHeight !== lastHeight) {
                  changeCount2++;
                }

                lastHeight = currHeight;

                if (changeCount2 > lineMax + 1) {
                  element.innerHTML = prevText;
                }
              }

              prevText = element.innerHTML;
              currHeight = parseInt(element.getBoundingClientRect().height);
              element.innerHTML = prevText.substring(0, prevText.length - 1);
              element.innerHTML = element.innerHTML.replace(/\s+$/, '') + '...';

              if (currHeight !== parseInt(element.getBoundingClientRect().height) && changeCount2 > lineMax - 1) {
                element.innerHTML = prevText;
              }
            }
          }
        }

        index++;

        if (index > element.textInit.length - 1) {
          changeCount = lineMax + 2;
        }
      }
    }
  }]);

  return NSSEllipsis;
}();

NSSEllipsis.WORD_PRECISION = ' ';
NSSEllipsis.LETTER_PRECISION = '';
/* harmony default export */ __webpack_exports__["default"] = (NSSEllipsis);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
});
//# sourceMappingURL=nss-ellipsis.umd.js.map
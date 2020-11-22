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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/custom-select.js":
/*!*****************************************!*\
  !*** ./src/js/modules/custom-select.js ***!
  \*****************************************/
/*! exports provided: Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Select\", function() { return Select; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError(\"attempted to use private field on non-instance\"); } return receiver; }\n\nvar id = 0;\n\nfunction _classPrivateFieldLooseKey(name) { return \"__private_\" + id++ + \"_\" + name; }\n\nvar getTemplate = function getTemplate() {\n  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var placeholder = arguments.length > 1 ? arguments[1] : undefined;\n  var selectedId = arguments.length > 2 ? arguments[2] : undefined;\n  var text = placeholder !== null && placeholder !== void 0 ? placeholder : \"-- выберите --\";\n  var items = data.map(function (item) {\n    var cls = \"\";\n\n    if (item.id === selectedId) {\n      text = item.value;\n      cls = \"custom-select__item--selected\";\n    }\n\n    return \"\\n        <li class=\\\"custom-select__item \".concat(cls, \"\\\" data-type=\\\"item\\\" data-id=\\\"\").concat(item.id, \"\\\">\").concat(item.value, \"</li>\\n        \");\n  });\n  return \"\\n            <div class=\\\"custom-select__backdrop\\\" data-type=\\\"backdrop\\\"></div>\\n            <div class=\\\"custom-select__input\\\" data-type=\\\"input\\\">\\n                <span data-type=\\\"value\\\">\".concat(text, \"</span>\\n                    <svg data-type=\\\"arrow\\\" width=\\\"14\\\" height=\\\"8\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path\\n                        d=\\\"M14 .667l-.333-.334L7 7 .333.333 0 .667l7 7 7-7z\\\" fill=\\\"#444444\\\"/></svg>\\n                  </svg>\\n                </div>\\n                <div class=\\\"custom-select__dropdown\\\">\\n                  <ul class=\\\"custom-select__list\\\">\\n                        \").concat(items.join(\"\"), \"\\n                  </ul>\\n                </div>\\n            \");\n};\n\nvar _render = _classPrivateFieldLooseKey(\"render\");\n\nvar _setup = _classPrivateFieldLooseKey(\"setup\");\n\nvar Select = /*#__PURE__*/function () {\n  function Select(selector, options) {\n    _classCallCheck(this, Select);\n\n    Object.defineProperty(this, _setup, {\n      value: _setup2\n    });\n    Object.defineProperty(this, _render, {\n      value: _render2\n    });\n    this.$el = document.querySelector(selector);\n    this.options = options;\n    this.selectedId = options.selectedId;\n\n    _classPrivateFieldLooseBase(this, _render)[_render]();\n\n    _classPrivateFieldLooseBase(this, _setup)[_setup]();\n  }\n\n  _createClass(Select, [{\n    key: \"clickHandler\",\n    value: function clickHandler(event) {\n      var type = event.target.dataset.type;\n\n      if (type === \"input\") {\n        this.toggle();\n      } else if (type === \"item\") {\n        var _id = event.target.dataset.id;\n        this.select(_id);\n      } else if (type === \"backdrop\") {\n        this.close();\n      }\n    }\n  }, {\n    key: \"select\",\n    value: function select(id) {\n      this.selectedId = id;\n      this.$value.textContent = this.current.value;\n      this.$el.querySelectorAll('[data-type=\"item\"]').forEach(function (el) {\n        el.classList.remove(\"custom-select__item--selected\");\n      });\n      this.$el.querySelector(\"[data-id=\\\"\".concat(id, \"\\\"]\")).classList.add(\"custom-select__item--selected\");\n      this.options.onSelect ? this.options.onSelect(this.current) : null;\n      this.close();\n    }\n  }, {\n    key: \"toggle\",\n    value: function toggle() {\n      this.isOpen ? this.close() : this.open();\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      this.$el.classList.add(\"custom-select--open\");\n      this.$arrow.style.transition = \".2s\";\n      this.$arrow.style.transform = \"rotate(180deg)\";\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      this.$el.classList.remove(\"custom-select--open\");\n      this.$arrow.style.transform = \"rotate(360deg)\";\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      this.$el.removeEventListener(\"click\", this.clickHandler);\n      this.$el.innerHTML = \"\";\n    }\n  }, {\n    key: \"isOpen\",\n    get: function get() {\n      return this.$el.classList.contains(\"custom-select--open\");\n    }\n  }, {\n    key: \"current\",\n    get: function get() {\n      var _this = this;\n\n      return this.options.data.find(function (item) {\n        return item.id === _this.selectedId;\n      });\n    }\n  }]);\n\n  return Select;\n}();\n\nvar _render2 = function _render2() {\n  var _this$options = this.options,\n      placeholder = _this$options.placeholder,\n      data = _this$options.data;\n  this.$el.classList.add(\"custom-select\");\n  this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId);\n};\n\nvar _setup2 = function _setup2() {\n  this.clickHandler = this.clickHandler.bind(this);\n  this.$el.addEventListener(\"click\", this.clickHandler);\n  this.$arrow = this.$el.querySelector('[data-type=\"arrow\"]');\n  this.$value = this.$el.querySelector('[data-type=\"value\"]');\n};\n\n//# sourceURL=webpack:///./src/js/modules/custom-select.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_custom_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/custom-select */ \"./src/js/modules/custom-select.js\");\n\nvar select = new _modules_custom_select__WEBPACK_IMPORTED_MODULE_0__[\"Select\"](\"#custom-select\", {\n  placeholder: '-- выберите опцию --',\n  //selectedId: '3',\n  data: [{\n    id: '1',\n    value: 'React'\n  }, {\n    id: '2',\n    value: 'Vue'\n  }, {\n    id: '3',\n    value: 'Angular'\n  }],\n  onSelect: function onSelect(item) {\n    console.log('selected item: ', item);\n  }\n});\nwindow.s = select;\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });
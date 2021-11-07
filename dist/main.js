/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_partners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/partners */ \"./src/modules/partners.js\");\n\r\n\r\n\r\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) ()\r\n;(0,_modules_partners__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWtDO0FBQ1E7QUFDMUM7QUFDQSx5REFBSTtBQUNKLDhEQUFRO0FBQ1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Gb29kLURlbGl2ZXJ5LUdsby0vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aCBmcm9tIFwiLi9tb2R1bGVzL2F1dGhcIjtcclxuaW1wb3J0IHBhcnRuZXJzIGZyb20gXCIuL21vZHVsZXMvcGFydG5lcnNcIjtcclxuXHJcbmF1dGggKClcclxucGFydG5lcnMoKVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n  const buttonAuth = document.querySelector(\".button-auth\");\r\n  const modalAuth = document.querySelector(\".modal-auth\");\r\n  const buttonOut = document.querySelector(\".button-out\");\r\n  const userName = document.querySelector(\".user-name\");\r\n  const closeAuth = document.querySelector(\".close-auth\");\r\n  const logInForm = document.getElementById(\"logInForm\");\r\n  const inputLogin = document.getElementById(\"login\");\r\n  const inputPassword = document.getElementById(\"password\");\r\n\r\n  const login = (user) => {\r\n    buttonAuth.style.display = \"none\";\r\n    buttonOut.style.display = \"flex\";\r\n    userName.style.display = \"flex\";\r\n    userName.textContent = user.login;\r\n    modalAuth.style.display = \"none\";\r\n  };\r\n\r\n  const logout = () => {\r\n    buttonAuth.style.display = \"flex\";\r\n    buttonOut.style.display = \"none\";\r\n    userName.style.display = \"none\";\r\n    userName.textContent = \"\";\r\n    localStorage.removeItem(\"user\");\r\n  };\r\n\r\n  buttonAuth.addEventListener(\"click\", () => {\r\n    modalAuth.style.display = \"flex\";\r\n  });\r\n\r\n  closeAuth.addEventListener(\"click\", () => {\r\n    modalAuth.style.display = \"none\";\r\n  });\r\n\r\n  buttonOut.addEventListener(\"click\", () => {\r\n    logout();\r\n  });\r\n\r\n  logInForm.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault();\r\n\r\n    const user = {\r\n      login: inputLogin.value,\r\n      password: inputPassword.value,\r\n    };\r\n\r\n    localStorage.setItem(\"user\", JSON.stringify(user));\r\n    login(user);\r\n  });\r\n\r\n  if (localStorage.getItem(\"user\")) {\r\n    login(JSON.parse(localStorage.getItem(\"user\")));\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL0Zvb2QtRGVsaXZlcnktR2xvLS8uL3NyYy9tb2R1bGVzL2F1dGguanM/ZTdiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdXRoID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJ1dHRvbkF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1hdXRoXCIpO1xyXG4gIGNvbnN0IG1vZGFsQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYXV0aFwiKTtcclxuICBjb25zdCBidXR0b25PdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1vdXRcIik7XHJcbiAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItbmFtZVwiKTtcclxuICBjb25zdCBjbG9zZUF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWF1dGhcIik7XHJcbiAgY29uc3QgbG9nSW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dJbkZvcm1cIik7XHJcbiAgY29uc3QgaW5wdXRMb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5cIik7XHJcbiAgY29uc3QgaW5wdXRQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIik7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gKHVzZXIpID0+IHtcclxuICAgIGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgYnV0dG9uT3V0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHVzZXJOYW1lLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gdXNlci5sb2dpbjtcclxuICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBidXR0b25PdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgdXNlck5hbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gIH07XHJcblxyXG4gIGJ1dHRvbkF1dGguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgfSk7XHJcblxyXG4gIGNsb3NlQXV0aC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9KTtcclxuXHJcbiAgYnV0dG9uT3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBsb2dvdXQoKTtcclxuICB9KTtcclxuXHJcbiAgbG9nSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgIGxvZ2luOiBpbnB1dExvZ2luLnZhbHVlLFxyXG4gICAgICBwYXNzd29yZDogaW5wdXRQYXNzd29yZC52YWx1ZSxcclxuICAgIH07XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgIGxvZ2luKHVzZXIpO1xyXG4gIH0pO1xyXG5cclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSB7XHJcbiAgICBsb2dpbihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSkpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGg7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/partners.js":
/*!*********************************!*\
  !*** ./src/modules/partners.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst partners = () => {\r\n  const renderItems = (data) => {\r\n    data.forEach((element) => {\r\n      console.log(element);\r\n    });\r\n  };\r\n\r\n  fetch(\r\n    \"https://food-delivery-75638-default-rtdb.firebaseio.com/db/partners.json\"\r\n  )\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      renderItems(data);\r\n    })\r\n    .catch((error) => {\r\n      console.log(error);\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (partners);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9wYXJ0bmVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Gb29kLURlbGl2ZXJ5LUdsby0vLi9zcmMvbW9kdWxlcy9wYXJ0bmVycy5qcz8wODU5Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhcnRuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJlbmRlckl0ZW1zID0gKGRhdGEpID0+IHtcclxuICAgIGRhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGZldGNoKFxyXG4gICAgXCJodHRwczovL2Zvb2QtZGVsaXZlcnktNzU2MzgtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL2RiL3BhcnRuZXJzLmpzb25cIlxyXG4gIClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgcmVuZGVySXRlbXMoZGF0YSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhcnRuZXJzO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/partners.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
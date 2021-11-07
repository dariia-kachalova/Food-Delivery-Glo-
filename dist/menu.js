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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) ()\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBa0M7QUFDQTtBQUNsQztBQUNBLHlEQUFJO0FBQ0osMERBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Gb29kLURlbGl2ZXJ5LUdsby0vLi9zcmMvbWVudS5qcz9hYjA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRoIGZyb20gXCIuL21vZHVsZXMvYXV0aFwiO1xyXG5pbXBvcnQgbWVudSBmcm9tIFwiLi9tb2R1bGVzL21lbnVcIjtcclxuXHJcbmF1dGggKClcclxubWVudSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n  const buttonAuth = document.querySelector(\".button-auth\");\r\n  const modalAuth = document.querySelector(\".modal-auth\");\r\n  const buttonOut = document.querySelector(\".button-out\");\r\n  const userName = document.querySelector(\".user-name\");\r\n  const closeAuth = document.querySelector(\".close-auth\");\r\n  const logInForm = document.getElementById(\"logInForm\");\r\n  const inputLogin = document.getElementById(\"login\");\r\n  const inputPassword = document.getElementById(\"password\");\r\n\r\n  const login = (user) => {\r\n    buttonAuth.style.display = \"none\";\r\n    buttonOut.style.display = \"flex\";\r\n    userName.style.display = \"flex\";\r\n    userName.textContent = user.login;\r\n    modalAuth.style.display = \"none\";\r\n  };\r\n\r\n  const logout = () => {\r\n    buttonAuth.style.display = \"flex\";\r\n    buttonOut.style.display = \"none\";\r\n    userName.style.display = \"none\";\r\n    userName.textContent = \"\";\r\n    localStorage.removeItem(\"user\");\r\n  };\r\n\r\n  buttonAuth.addEventListener(\"click\", () => {\r\n    modalAuth.style.display = \"flex\";\r\n  });\r\n\r\n  closeAuth.addEventListener(\"click\", () => {\r\n    modalAuth.style.display = \"none\";\r\n  });\r\n\r\n  buttonOut.addEventListener(\"click\", () => {\r\n    logout();\r\n  });\r\n\r\n  logInForm.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault();\r\n\r\n    const user = {\r\n      login: inputLogin.value,\r\n      password: inputPassword.value,\r\n    };\r\n\r\n    localStorage.setItem(\"user\", JSON.stringify(user));\r\n    login(user);\r\n  });\r\n\r\n  if (localStorage.getItem(\"user\")) {\r\n    login(JSON.parse(localStorage.getItem(\"user\")));\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL0Zvb2QtRGVsaXZlcnktR2xvLS8uL3NyYy9tb2R1bGVzL2F1dGguanM/ZTdiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdXRoID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJ1dHRvbkF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1hdXRoXCIpO1xyXG4gIGNvbnN0IG1vZGFsQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYXV0aFwiKTtcclxuICBjb25zdCBidXR0b25PdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1vdXRcIik7XHJcbiAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItbmFtZVwiKTtcclxuICBjb25zdCBjbG9zZUF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWF1dGhcIik7XHJcbiAgY29uc3QgbG9nSW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dJbkZvcm1cIik7XHJcbiAgY29uc3QgaW5wdXRMb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5cIik7XHJcbiAgY29uc3QgaW5wdXRQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIik7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gKHVzZXIpID0+IHtcclxuICAgIGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgYnV0dG9uT3V0LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHVzZXJOYW1lLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gdXNlci5sb2dpbjtcclxuICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBidXR0b25PdXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgdXNlck5hbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG4gIH07XHJcblxyXG4gIGJ1dHRvbkF1dGguYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgfSk7XHJcblxyXG4gIGNsb3NlQXV0aC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9KTtcclxuXHJcbiAgYnV0dG9uT3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBsb2dvdXQoKTtcclxuICB9KTtcclxuXHJcbiAgbG9nSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgIGxvZ2luOiBpbnB1dExvZ2luLnZhbHVlLFxyXG4gICAgICBwYXNzd29yZDogaW5wdXRQYXNzd29yZC52YWx1ZSxcclxuICAgIH07XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgIGxvZ2luKHVzZXIpO1xyXG4gIH0pO1xyXG5cclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSB7XHJcbiAgICBsb2dpbihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSkpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGg7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const cardsMenu = document.querySelector(\".cards-menu\");\r\n\r\n  const changeTitle = (restaurant) => {\r\n    const restaurantTitle = document.querySelector(\".restaurant-title\");\r\n    const price = document.querySelector(\".price\");\r\n    const rating = document.querySelector(\".rating\");\r\n    const category = document.querySelector(\".category\");\r\n\r\n    restaurantTitle.textContent = restaurant.name;\r\n    price.textContent = `От ${restaurant.price}`;\r\n    rating.textContent = restaurant.stars;\r\n    category.textContent = restaurant.kitchen;\r\n  };\r\n\r\n  const renderItems = (data) => {\r\n    data.forEach(({ description, id, image, name, price }) => {\r\n      const card = document.createElement(\"div\");\r\n\r\n      card.classList.add(\"card\");\r\n      card.innerHTML = `\r\n\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t\t<img src=\"${image}\" alt=\"${name}\" class=\"card-image\" />\r\n\t\t\t\t\t\t\t<div class=\"card-text\">\r\n\t\t\t\t\t\t\t\t<div class=\"card-heading\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"card-title card-title-reg\">${name}</h3>\r\n\t\t\t\t\t\t\t\t</div>\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"card-info\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"ingredients\">\r\n\t\t\t\t\t\t\t\t\t${description}\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<div class=\"card-buttons\">\r\n\t\t\t\t\t\t\t\t\t<button class=\"button button-primary button-add-cart\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"button-card-text\">В корзину</span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"button-cart-svg\"></span>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<strong class=\"card-price-bold\">${price} ₽</strong>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t`;\r\n      cardsMenu.append(card);\r\n    });\r\n  };\r\n  if (localStorage.getItem(\"restaurant\")) {\r\n    const restaurant = JSON.parse(localStorage.getItem(\"restaurant\"));\r\n\r\n    changeTitle(restaurant);\r\n\r\n    fetch(`./db/${restaurant.products}`)\r\n      .then((response) => response.json())\r\n      .then((data) => {\r\n        renderItems(data);\r\n      })\r\n      .catch((error) => {\r\n        console.log(error);\r\n      });\r\n  } else {\r\n    window.location.href = \"/\";\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixpQkFBaUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQ0FBcUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixNQUFNLFNBQVMsS0FBSztBQUN2QztBQUNBO0FBQ0EsaURBQWlELEtBQUs7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLE9BQU87QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Gb29kLURlbGl2ZXJ5LUdsby0vLi9zcmMvbW9kdWxlcy9tZW51LmpzPzJmYWQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWVudSA9ICgpID0+IHtcclxuICBjb25zdCBjYXJkc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzLW1lbnVcIik7XHJcblxyXG4gIGNvbnN0IGNoYW5nZVRpdGxlID0gKHJlc3RhdXJhbnQpID0+IHtcclxuICAgIGNvbnN0IHJlc3RhdXJhbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudC10aXRsZVwiKTtcclxuICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmljZVwiKTtcclxuICAgIGNvbnN0IHJhdGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmF0aW5nXCIpO1xyXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhdGVnb3J5XCIpO1xyXG5cclxuICAgIHJlc3RhdXJhbnRUaXRsZS50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnQubmFtZTtcclxuICAgIHByaWNlLnRleHRDb250ZW50ID0gYNCe0YIgJHtyZXN0YXVyYW50LnByaWNlfWA7XHJcbiAgICByYXRpbmcudGV4dENvbnRlbnQgPSByZXN0YXVyYW50LnN0YXJzO1xyXG4gICAgY2F0ZWdvcnkudGV4dENvbnRlbnQgPSByZXN0YXVyYW50LmtpdGNoZW47XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVySXRlbXMgPSAoZGF0YSkgPT4ge1xyXG4gICAgZGF0YS5mb3JFYWNoKCh7IGRlc2NyaXB0aW9uLCBpZCwgaW1hZ2UsIG5hbWUsIHByaWNlIH0pID0+IHtcclxuICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xyXG4gICAgICBjYXJkLmlubmVySFRNTCA9IGBcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiJHtpbWFnZX1cIiBhbHQ9XCIke25hbWV9XCIgY2xhc3M9XCJjYXJkLWltYWdlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkaW5nXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzcz1cImNhcmQtdGl0bGUgY2FyZC10aXRsZS1yZWdcIj4ke25hbWV9PC9oMz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2Plx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWluZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImluZ3JlZGllbnRzXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCR7ZGVzY3JpcHRpb259XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtYnV0dG9uc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5IGJ1dHRvbi1hZGQtY2FydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiYnV0dG9uLWNhcmQtdGV4dFwiPtCSINC60L7RgNC30LjQvdGDPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiYnV0dG9uLWNhcnQtc3ZnXCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHN0cm9uZyBjbGFzcz1cImNhcmQtcHJpY2UtYm9sZFwiPiR7cHJpY2V9IOKCvTwvc3Ryb25nPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdGA7XHJcbiAgICAgIGNhcmRzTWVudS5hcHBlbmQoY2FyZCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlc3RhdXJhbnRcIikpIHtcclxuICAgIGNvbnN0IHJlc3RhdXJhbnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVzdGF1cmFudFwiKSk7XHJcblxyXG4gICAgY2hhbmdlVGl0bGUocmVzdGF1cmFudCk7XHJcblxyXG4gICAgZmV0Y2goYC4vZGIvJHtyZXN0YXVyYW50LnByb2R1Y3RzfWApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHJlbmRlckl0ZW1zKGRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;
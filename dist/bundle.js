/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Book.js":
/*!*********************!*\
  !*** ./src/Book.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   book: () => (/* binding */ book),\n/* harmony export */   capital_letter: () => (/* binding */ capital_letter)\n/* harmony export */ });\nclass book{\n    #title = ``\n    #author = ``\n    #pages = ``\n    #rating = 0\n    #hasRead = ``\n\n    constructor(title, author, pages, rating, hasRead){\n        this.title = title\n        this.author = author \n        this.pages = pages\n        this.rating = rating\n        this.hasRead = hasRead\n        if (!Number(pages) || Number(pages) < 20 || !title || !author) {\n            throw new Error (`Cannot verify validity of data`)\n        }\n    }\n\n    set title(newTitle){\n\n        this.#title = newTitle\n    }\n    get title(){\n        return this.#title\n    }\n\n\n    set author(newAuthor){\n        this.#author = newAuthor\n    }\n    get author(){\n        return this.#author\n    }\n\n\n    set pages(newPages){\n        this.#pages = newPages\n    }\n    get pages(){\n        return this.#pages\n    }\n\n\n\n    set rating(newRating){\n        this.#rating = newRating\n    }\n    get rating(){\n        return this.#rating\n    }\n\n    set hasRead(newhasRead){\n        this.#hasRead = newhasRead\n    }\n    get hasRead(){\n        return this.#hasRead\n    }\n\n    details(){\n        \n       return {\n        title: this.#title,\n        author: this.#author,\n        pages: this.#pages,\n        rating: this.#rating,\n        hasRead: this.#hasRead\n       }\n            \n    }\n\n}\nfunction capital_letter(str) \n{\n    str = str.split(\" \");\n\n    for (var i = 0, x = str.length; i < x; i++) {\n        str[i] = str[i][0].toUpperCase() + str[i].substr(1);\n    }\n\n    return str.join(\" \");\n}\n\n\n//# sourceURL=webpack://my-large-webpack-project/./src/Book.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Book.js */ \"./src/Book.js\");\n/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./library.js */ \"./src/library.js\");\n/* harmony import */ var _rating_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rating.js */ \"./src/rating.js\");\n\n\n\nwindow.rating = _rating_js__WEBPACK_IMPORTED_MODULE_2__.rating\nwindow.resett = _rating_js__WEBPACK_IMPORTED_MODULE_2__.resett\n\n\n\n    let submit = document.getElementById(`submit-book`)\n    let optionalUrl = document.getElementById(`url`)\n    let check = document.getElementById(`check`)\n\n    //      create elements\n    let left = document.createElement(`div`)\n    let bookimg = document.createElement(`img`)\n    let text = document.createElement(`div`)\n    let right = document.createElement(`div`)\n    let editbut = document.createElement(`button`)\n    let upper = document.createElement(`div`)\n    let bottom = document.createElement(`div`)\n    \n    //// setting relevant classes\n    upper.classList.add(`upper`)\n    _library_js__WEBPACK_IMPORTED_MODULE_1__.bookCont.classList.add(`book`)\n    _library_js__WEBPACK_IMPORTED_MODULE_1__.bookCont.setAttribute(`id`, `bookcont`)\n    _library_js__WEBPACK_IMPORTED_MODULE_1__.bookCont.classList.add(`anim`)\n    left.classList.add(`left`)\n    bookimg.classList.add(`book-prev`)\n    text.classList.add(`text`)\n    _library_js__WEBPACK_IMPORTED_MODULE_1__.titledisp.setAttribute(`id`, `titledisplayed`)\n    _library_js__WEBPACK_IMPORTED_MODULE_1__.authordisp.setAttribute(`id`, `authordisplayed`)\n    _library_js__WEBPACK_IMPORTED_MODULE_1__.ratingdisp.setAttribute(`id`, `rating`)\n    bookimg.setAttribute(`src`, `src/assets/book.png`)\n    right.classList.add(`right`)\n    \n\n    editbut.classList.add(`buttondel`)\n    editbut.classList.add(`edit`)\n    editbut.classList.add(`edite`)\n\n    _library_js__WEBPACK_IMPORTED_MODULE_1__.searchgoogle.textContent = `Search On google`\n    _library_js__WEBPACK_IMPORTED_MODULE_1__.searchgoogle.classList.add(`access`)\n    bottom.classList.add(`gogle`)\n    // appending to relevant parents\n    editbut.appendChild(bookimg)\n    left.appendChild(editbut)\n    text.appendChild(_library_js__WEBPACK_IMPORTED_MODULE_1__.titledisp)\n    text.appendChild(_library_js__WEBPACK_IMPORTED_MODULE_1__.authordisp)\n    text.appendChild(_library_js__WEBPACK_IMPORTED_MODULE_1__.ratingdisp)\n    bottom.appendChild(_library_js__WEBPACK_IMPORTED_MODULE_1__.searchgoogle)\n\n    right.appendChild(_library_js__WEBPACK_IMPORTED_MODULE_1__.delbut)\n    upper.appendChild(left)\n    upper.appendChild(right)\n    _library_js__WEBPACK_IMPORTED_MODULE_1__.bookCont.appendChild(upper)\n    _library_js__WEBPACK_IMPORTED_MODULE_1__.bookCont.appendChild(text)\n    _library_js__WEBPACK_IMPORTED_MODULE_1__.bookCont.appendChild(bottom)\n\n        console.log( JSON.parse(localStorage.getItem(`library`)))\n\n        \n\n\n        let librar = new _library_js__WEBPACK_IMPORTED_MODULE_1__.Library();\n\n\n        submit.addEventListener('click', (ev) => {\n            let bookTitle = document.getElementById('title').value;\n            let authorName = document.getElementById('author-name').value;\n            let pageQuantity = document.getElementById('pages').value;\n            if (bookTitle && authorName && pageQuantity) {\n                if (confirm(`Are you sure you want to proceed? You cannot change the information beyond this stage.`)){\n                    ev.preventDefault();\n                let ifread = ``\n                \n                if (check.checked) {\n                    ifread = `yes`\n                }\n                else{\n                    ifread = `no`\n                }\n                \n                try {\n                    librar.addtolibrary(new _Book_js__WEBPACK_IMPORTED_MODULE_0__.book(bookTitle, authorName, pageQuantity, _rating_js__WEBPACK_IMPORTED_MODULE_2__.ratings, ifread));\n                    librar.update(librar.listbooks());\n                } catch (error) {\n                    console.error('Error adding book:', error.message);\n                }\n                }\n            }\n            \n            \n        });\n\n\n        librar.update(librar.listbooks());\n\n\n\ndocument.getElementById('scrollDownBtn').addEventListener('click', function() {\n    window.scrollBy({\n      top: window.innerHeight - (document.getElementById(`library`).clientHeight - 100),\n      behavior: 'smooth'\n    });\n  });\n  if (document.getElementById(`library`).clientHeight > window.innerHeight) {\n    console.log(document.getElementById(`library`).clientHeight)\n    console.log(window.innerHeight)\n}\ndocument.getElementById(`showlib`).addEventListener(`click`, () => {\n    window.scrollBy({\n        top: window.innerHeight,\n        behavior: `smooth`\n    })\n})\n_library_js__WEBPACK_IMPORTED_MODULE_1__.searchBar.addEventListener(`keyup`, () => {\n    librar.update(librar.findByTitle(_library_js__WEBPACK_IMPORTED_MODULE_1__.searchBar.value))\n    console.log(librar.findByTitle(_library_js__WEBPACK_IMPORTED_MODULE_1__.searchBar.value))\n    _library_js__WEBPACK_IMPORTED_MODULE_1__.searchBar.focus()\n})\ndocument.getElementById(`profilepop`).addEventListener(`change`, () => {\n    if (document.getElementById(`profilepop`).checked){document.getElementById(`overl`).classList.add(`overlay`)}\n        else if (!document.getElementById(`profilepop`).checked){document.getElementById(`overl`).classList.remove(`overlay`)}\n})\ndocument.querySelectorAll(`.anim`).forEach((item) => {\n    item.addEventListener(`dblclick`, () => {\n\n        item.style.transform = `scale(2.5)`\n        setTimeout(() => {window.scrollBy({top: window.innerHeight, behavior:\"smooth\"})}, 400);\n        \n        item.addEventListener(`click`, () => {\n\n            item.style.transform = `scale(1)`\n            \n    \n        })\n    })\n})\ndocument.querySelectorAll(`.select-buttons`).forEach((item) => {\n    console.log(item)\n    item.addEventListener(`click`, () => {\n        console.log(item)\n    })\n})\n\n\n\n//# sourceURL=webpack://my-large-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/library.js":
/*!************************!*\
  !*** ./src/library.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Library: () => (/* binding */ Library),\n/* harmony export */   authordisp: () => (/* binding */ authordisp),\n/* harmony export */   bookCont: () => (/* binding */ bookCont),\n/* harmony export */   delbut: () => (/* binding */ delbut),\n/* harmony export */   one: () => (/* binding */ one),\n/* harmony export */   ratingdisp: () => (/* binding */ ratingdisp),\n/* harmony export */   searchBar: () => (/* binding */ searchBar),\n/* harmony export */   searchgoogle: () => (/* binding */ searchgoogle),\n/* harmony export */   titledisp: () => (/* binding */ titledisp)\n/* harmony export */ });\n/* harmony import */ var _Book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Book.js */ \"./src/Book.js\");\n\n\nlet bookCont = document.createElement(`div`)\nlet ratingdisp = document.createElement(`div`)\nconst one = document.getElementById(`onestar`)\nlet delbut = document.createElement(`button`)\nlet titledisp = document.createElement(`div`)\nlet authordisp = document.createElement(`div`)\nconst searchgoogle = document.createElement(`button`)\n\ndelbut.classList.add(`mama`)\ndelbut.classList.add(`buttondel`)\nconst showlib = document.createElement(`button`)\nshowlib.classList.add(`floating`)\nshowlib.setAttribute(`id`, `showlib`)\nshowlib.innerText = `^`\nconst searchBar = document.createElement(`input`)\n\nsearchBar.classList.add(`search`)\nsearchBar.setAttribute(`type`, `search`)\nclass Library {\n    constructor() {\n        this.#books = JSON.parse(localStorage.getItem('library')) || []\n      }\n    #books =  [];\n\n    addtolibrary(book) {\n        if (this.#books.some(b => b.title === book.title)) {\n            alert('Book already exists!');\n        } else {\n            this.#books.push(book.details());\n            this.saveToLocalStorage();\n        }\n    }\n\n    removefromlib(title) {\n        this.#books = this.#books.filter(book => book.title !== title);\n        this.saveToLocalStorage();\n    }\n\n    findByTitle(title) {\n        const filteredArray = this.#books.filter(book => book.title.toLowerCase().replaceAll(' ', '').includes(title.toLowerCase().replaceAll(' ', '')));\n        return filteredArray\n    }\n\n    listbooks() {\n        return this.#books;\n    }\n\n    update(array) {\n\n\n        \n            let num = 0\n            document.getElementById(`library`).classList.remove(`only`)\n            document.getElementById('library').textContent = ''\n            document.getElementById('library').appendChild(showlib)\n            document.getElementById('library').appendChild(searchBar)\n            if (array.length > 0){\n                array.forEach((item) => {\n                    ratingdisp.textContent = ''\n                    titledisp.textContent = item.title\n                    authordisp.textContent = item.author\n                    for (let i = 0; i < item.rating; i++) {\n                        let starbold = one.cloneNode(true);\n                        starbold.classList.add('fa-solid');\n                        starbold.style.display = 'inline';\n                        ratingdisp.appendChild(starbold);\n                    }\n                    delbut.setAttribute(`id`, `delbutton${num}`)\n                    searchgoogle.setAttribute(`id`, `searchbar${num}`)\n                    num++\n                    \n                    document.getElementById('library').appendChild(bookCont.cloneNode(true))\n                    \n            \n                })\n                this.htmlForDel()\n                this.searchgoogle()\n            }\n            else{\n                document.getElementById('library').appendChild(showlib)\n                document.getElementById('library').appendChild(searchBar)\n                document.getElementById(`library`).classList.add(`only`)\n            }\n            \n        \n        \n\n    }\n\n    saveToLocalStorage() {\n        localStorage.setItem('library', JSON.stringify(this.#books));\n    }\n    htmlForDel(){\n        document.querySelectorAll(`.mama`).forEach((item) => {\n            item.addEventListener(`click`, () => {\n                this.removefromlib(this.listbooks()[item.id.slice(-1)].title)\n                this.update(this.#books)\n            })\n        })\n    }\n    searchgoogle(){\n        document.querySelectorAll(`.access`).forEach((item) =>{\n            item.addEventListener(`click`, () => {\n            let newTab = document.createElement('a');\n            let newURL = String(this.listbooks()[item.id.slice(-1)].title)\n            newURL = (0,_Book_js__WEBPACK_IMPORTED_MODULE_0__.capital_letter)(newURL).replaceAll(`Of`, `of`)\n\n            newTab.href = `https://en.wikipedia.org/wiki/${newURL.replaceAll(` `, `_`)}`\n            newTab.target = \"_blank\";\n            newTab.click();\n            })\n        })\n    }\n       \n    \n}\n\n//# sourceURL=webpack://my-large-webpack-project/./src/library.js?");

/***/ }),

/***/ "./src/rating.js":
/*!***********************!*\
  !*** ./src/rating.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   five: () => (/* binding */ five),\n/* harmony export */   four: () => (/* binding */ four),\n/* harmony export */   rating: () => (/* binding */ rating),\n/* harmony export */   ratingCont: () => (/* binding */ ratingCont),\n/* harmony export */   ratings: () => (/* binding */ ratings),\n/* harmony export */   resett: () => (/* binding */ resett),\n/* harmony export */   three: () => (/* binding */ three),\n/* harmony export */   two: () => (/* binding */ two)\n/* harmony export */ });\n/* harmony import */ var _library_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./library.js */ \"./src/library.js\");\n\n\nconst two = document.getElementById(`twostar`)\nconst three = document.getElementById(`threestar`)\nconst four = document.getElementById(`fourstar`)\nconst five = document.getElementById(`fivestar`)\nlet ratingCont = [_library_js__WEBPACK_IMPORTED_MODULE_0__.one, two, three, four, five]\n\nlet which = 0\nlet ratings = 0\nlet stars = document.querySelectorAll(`.star`)\nfunction rating(which) {\n    which === `onestar` ? which = 1: which === `twostar` ? which = 2 : which === `threestar` ? which = 3: which === `fourstar` ? which = 4: which === `fivestar` ? which = 5:null \n     \n    for (let i = 0; i < which; i++) {\n        stars[i].classList.remove(`fa-regular`)\n        stars[i].classList.add(`fa-solid`)\n\n       for (let i = which; i <stars.length; i++){\n        stars[i].classList.add(`fa-regular`)\n        stars[i].classList.remove(`fa-solid`)\n       }\n    }\n    ratings = which\n}\n\nfunction resett() {\n    which = 0\n    stars.forEach((item) => {\n        item.classList.add(`fa-regular`)\n        item.classList.remove(`fa-solid`)})\n        ratingCont.forEach((item) => {\n            item.classList.remove(`fa-solid`)\n            item.classList.add(`fa-regular`)\n        })\n}\nlet starbold\nratingCont.forEach(()=> {\n    starbold = _library_js__WEBPACK_IMPORTED_MODULE_0__.one\n    starbold.classList.add(`fa-solid`)\n    starbold.style.display = `none`\n    _library_js__WEBPACK_IMPORTED_MODULE_0__.ratingdisp.appendChild(starbold.cloneNode(true))\n    _library_js__WEBPACK_IMPORTED_MODULE_0__.one.style.display = `inline`\n    _library_js__WEBPACK_IMPORTED_MODULE_0__.one.classList.remove(`fa-solid`)\n})\n\n\n//# sourceURL=webpack://my-large-webpack-project/./src/rating.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
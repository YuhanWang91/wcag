webpackJsonp([0,4],{

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(376);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CheckerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var API_ROOT;
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    API_ROOT = "";
}
else {
    API_ROOT = "";
}
var WORD_SUPRISE_THRESHOLD = 0.8;
function parse_readability_result(data) {
    var supriseWords = [];
    var supriseWordCount = 0;
    var unsupriseWordCount = 0;
    var supriseWordHashMap = {};
    var totalScore = 0;
    var totalWordCount = 0;
    var sentences = data[0].map(function (sent) {
        return sent.map(function (word) {
            var score = Number(Number(word[1]).toFixed(3));
            score = score > 1 ? 1 : score;
            var wordInfo = {
                text: word[0],
                score: score
            };
            if (!(wordInfo.text in supriseWordHashMap)) {
                if (score >= WORD_SUPRISE_THRESHOLD) {
                    supriseWords.push(wordInfo);
                    supriseWordCount++;
                }
                else {
                    unsupriseWordCount++;
                }
                supriseWordHashMap[wordInfo.text] = true;
            }
            totalScore += wordInfo.score;
            totalWordCount++;
            return wordInfo;
        });
    });
    supriseWords.sort(function (o1, o2) {
        if (o1.score != o2.score) {
            return o2.score - o1.score;
        }
        else {
            return o1.text < o2.text ? -1 : 1;
        }
    });
    return {
        sentences: sentences,
        supriseWords: supriseWords,
        averageScore: Number((totalScore / totalWordCount).toFixed(3)),
        supriseWordCount: [supriseWordCount, unsupriseWordCount],
        surpriseWordRatio: Number((supriseWordCount / (supriseWordCount + unsupriseWordCount)).toFixed(2))
    };
}
var CheckerService = (function () {
    function CheckerService(http) {
        this.http = http;
    }
    CheckerService.prototype.get = function (path, query) {
        var search = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* URLSearchParams */]();
        for (var key in query) {
            search.set(key, query[key]);
        }
        console.log(search);
        return this.http.get(API_ROOT + "/" + path, {
            search: search
        });
    };
    CheckerService.prototype.checkerDemo = function (url) {
        var query = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* URLSearchParams */]();
        query.set("url", url);
        return this.http.get(API_ROOT + "/checker/demo", {
            search: query
        }).map(function (res) {
            var data = res.json();
            if (data.success) {
                data = parse_readability_result(data.data);
                console.log(data);
                return data;
            }
            else {
                return {
                    sentences: []
                };
            }
        });
    };
    CheckerService.prototype.checker_1_1 = function (url) {
        return this.get("checker/checker-1-1", {
            url: url
        }).map(function (x) { return x.json().data; });
    };
    CheckerService.prototype.checker_1_2 = function (url) {
        return this.get("checker/checker-1-2", {
            url: url
        }).map(function (x) { return x.json().data; });
    };
    CheckerService.prototype.checker_1_3 = function (url) {
        return this.get("checker/checker-1-3", {
            url: url
        }).map(function (x) { return x.json().data; });
    };
    CheckerService.prototype.checker_1_4 = function (url) {
        return this.get("checker/checker-1-4", {
            url: url
        }).map(function (x) { return x.json().data; });
    };
    CheckerService.prototype.checker_2_1 = function (url) {
        return this.get("checker/checker-2-1", {
            url: url
        }).map(function (x) { return x.json().data; });
    };
    CheckerService.prototype.checker_2_2 = function (url) {
        return this.get("checker/checker-2-2", {
            url: url
        }).map(function (x) { return x.json().data; });
    };
    CheckerService.prototype.checker_2_3 = function (url) {
        return this.get("checker/checker-2-3", {
            url: url
        }).map(function (x) { return x.json().data; });
    };
    CheckerService.prototype.checker_2_4 = function (url) {
        return this.get("checker/checker-2-4", {
            url: url
        }).map(function (x) { return x.json().data; });
    };
    CheckerService.prototype.checker_4_1 = function (url) {
        return this.get("checker/checker-4-1", {
            url: url
        }).map(function (x) { return x.json().data; });
    };
    CheckerService.prototype.checker_text_image = function (url) {
        return this.get("checker/checker-image-text", {
            url: url
        }).map(function (x) { return x.json().data; });
    };
    CheckerService.prototype.checker_all = function (url) {
        return this.get("checker/all", {
            url: url
        }).map(function (x) {
            var data = x.json().data;
            data.readability = parse_readability_result(data.readability);
            console.log(data);
            return data;
        });
    };
    CheckerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], CheckerService);
    return CheckerService;
    var _a;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/checker.service.js.map

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_checker_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Checker11Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Checker11Component = (function () {
    function Checker11Component(checkerService) {
        this.checkerService = checkerService;
        this.url = "https://medium.freecodecamp.com/the-12-youtube-videos-new-developers-mention-the-most-f2d1fce337ca";
        this.isloading = false;
    }
    Checker11Component.prototype.ngOnInit = function () {
    };
    Checker11Component.prototype.test = function () {
        var _this = this;
        this.isloading = true;
        this.checkerService.checker_1_1(this.url).subscribe(function (res) {
            _this.result = res;
            _this.isloading = false;
        }, function (err) {
        });
    };
    Checker11Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'checker-1-1',
            template: __webpack_require__(779),
            styles: [__webpack_require__(753)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */]) === 'function' && _a) || Object])
    ], Checker11Component);
    return Checker11Component;
    var _a;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/checker-1-1.component.js.map

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_checker_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Checker12Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Checker12Component = (function () {
    function Checker12Component(checkerService) {
        this.checkerService = checkerService;
        this.url = "https://medium.freecodecamp.com/the-12-youtube-videos-new-developers-mention-the-most-f2d1fce337ca";
        this.isloading = false;
    }
    Checker12Component.prototype.ngOnInit = function () {
    };
    Checker12Component.prototype.test = function () {
        var _this = this;
        this.isloading = true;
        this.checkerService.checker_1_2(this.url).subscribe(function (res) {
            _this.result = res;
            _this.isloading = false;
        }, function (err) {
        });
    };
    Checker12Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'checker-1-2',
            template: __webpack_require__(780),
            styles: [__webpack_require__(754)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */]) === 'function' && _a) || Object])
    ], Checker12Component);
    return Checker12Component;
    var _a;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/checker-1-2.component.js.map

/***/ },

/***/ 361:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_checker_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Checker13Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Checker13Component = (function () {
    function Checker13Component(checkerService) {
        this.checkerService = checkerService;
        this.url = "https://medium.freecodecamp.com/the-12-youtube-videos-new-developers-mention-the-most-f2d1fce337ca";
        this.isloading = false;
    }
    Checker13Component.prototype.ngOnInit = function () {
    };
    Checker13Component.prototype.test = function () {
        var _this = this;
        this.isloading = true;
        this.checkerService.checker_1_3(this.url).subscribe(function (res) {
            _this.result = res;
            _this.isloading = false;
        }, function (err) {
        });
    };
    Checker13Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'checker-1-3',
            template: __webpack_require__(781),
            styles: [__webpack_require__(755)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */]) === 'function' && _a) || Object])
    ], Checker13Component);
    return Checker13Component;
    var _a;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/checker-1-3.component.js.map

/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_checker_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Checker14Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Checker14Component = (function () {
    function Checker14Component(checkerService) {
        this.checkerService = checkerService;
        this.url = "https://medium.freecodecamp.com/the-12-youtube-videos-new-developers-mention-the-most-f2d1fce337ca";
        this.isloading = false;
    }
    Checker14Component.prototype.ngOnInit = function () {
    };
    Checker14Component.prototype.test = function () {
        var _this = this;
        this.isloading = true;
        this.checkerService.checker_1_4(this.url).subscribe(function (res) {
            _this.result = res;
            _this.isloading = false;
        }, function (err) {
        });
    };
    Checker14Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'checker-1-4',
            template: __webpack_require__(782),
            styles: [__webpack_require__(756)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */]) === 'function' && _a) || Object])
    ], Checker14Component);
    return Checker14Component;
    var _a;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/checker-1-4.component.js.map

/***/ },

/***/ 363:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_checker_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Checker21Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Checker21Component = (function () {
    function Checker21Component(checkerService) {
        this.checkerService = checkerService;
        this.url = "https://medium.freecodecamp.com/the-12-youtube-videos-new-developers-mention-the-most-f2d1fce337ca";
        this.isloading = false;
    }
    Checker21Component.prototype.ngOnInit = function () {
    };
    Checker21Component.prototype.test = function () {
        var _this = this;
        this.isloading = true;
        this.checkerService.checker_2_1(this.url).subscribe(function (res) {
            _this.result = res;
            _this.isloading = false;
        }, function (err) {
        });
    };
    Checker21Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'checker-2-1',
            template: __webpack_require__(783),
            styles: [__webpack_require__(757)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */]) === 'function' && _a) || Object])
    ], Checker21Component);
    return Checker21Component;
    var _a;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/checker-2-1.component.js.map

/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_checker_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Checker22Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Checker22Component = (function () {
    function Checker22Component(checkerService) {
        this.checkerService = checkerService;
        this.url = "https://medium.freecodecamp.com/the-12-youtube-videos-new-developers-mention-the-most-f2d1fce337ca";
        this.isloading = false;
    }
    Checker22Component.prototype.ngOnInit = function () {
    };
    Checker22Component.prototype.test = function () {
        var _this = this;
        this.isloading = true;
        this.checkerService.checker_2_2(this.url).subscribe(function (res) {
            _this.result = res;
            _this.isloading = false;
        }, function (err) {
        });
    };
    Checker22Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'checker-2-2',
            template: __webpack_require__(784),
            styles: [__webpack_require__(758)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */]) === 'function' && _a) || Object])
    ], Checker22Component);
    return Checker22Component;
    var _a;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/checker-2-2.component.js.map

/***/ },

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_checker_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Checker23Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Checker23Component = (function () {
    function Checker23Component(checkerService) {
        this.checkerService = checkerService;
        this.url = "https://medium.freecodecamp.com/the-12-youtube-videos-new-developers-mention-the-most-f2d1fce337ca";
        this.isloading = false;
    }
    Checker23Component.prototype.ngOnInit = function () {
    };
    Checker23Component.prototype.test = function () {
        var _this = this;
        this.isloading = true;
        this.checkerService.checker_2_3(this.url).subscribe(function (res) {
            _this.result = res;
            _this.isloading = false;
        }, function (err) {
        });
    };
    Checker23Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'checker-2-3',
            template: __webpack_require__(785),
            styles: [__webpack_require__(759)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */]) === 'function' && _a) || Object])
    ], Checker23Component);
    return Checker23Component;
    var _a;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/checker-2-3.component.js.map

/***/ },

/***/ 366:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_checker_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Checker24Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Checker24Component = (function () {
    function Checker24Component(checkerService) {
        this.checkerService = checkerService;
        this.url = "https://medium.freecodecamp.com/the-12-youtube-videos-new-developers-mention-the-most-f2d1fce337ca";
        this.isloading = false;
    }
    Checker24Component.prototype.ngOnInit = function () {
    };
    Checker24Component.prototype.test = function () {
        var _this = this;
        this.isloading = true;
        this.checkerService.checker_2_4(this.url).subscribe(function (res) {
            _this.result = res;
            _this.isloading = false;
        }, function (err) {
        });
    };
    Checker24Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'checker-2-4',
            template: __webpack_require__(786),
            styles: [__webpack_require__(760)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */]) === 'function' && _a) || Object])
    ], Checker24Component);
    return Checker24Component;
    var _a;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/checker-2-4.component.js.map

/***/ },

/***/ 367:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_checker_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Checker41Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Checker41Component = (function () {
    function Checker41Component(checkerService) {
        this.checkerService = checkerService;
        this.url = "https://medium.freecodecamp.com/the-12-youtube-videos-new-developers-mention-the-most-f2d1fce337ca";
        this.isloading = false;
    }
    Checker41Component.prototype.ngOnInit = function () {
    };
    Checker41Component.prototype.test = function () {
        var _this = this;
        this.isloading = true;
        this.checkerService.checker_4_1(this.url).subscribe(function (res) {
            _this.result = res;
            _this.isloading = false;
        }, function (err) {
        });
    };
    Checker41Component = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'checker-4-1',
            template: __webpack_require__(787),
            styles: [__webpack_require__(761)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */]) === 'function' && _a) || Object])
    ], Checker41Component);
    return Checker41Component;
    var _a;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/checker-4-1.component.js.map

/***/ },

/***/ 368:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_checker_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CheckerTextImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckerTextImageComponent = (function () {
    function CheckerTextImageComponent(checkerService) {
        this.checkerService = checkerService;
        this.url = "https://newsela.com/articles/nigerian-school-girls-released/id/30509/";
        this.isloading = false;
    }
    CheckerTextImageComponent.prototype.ngOnInit = function () {
    };
    CheckerTextImageComponent.prototype.test = function () {
        var _this = this;
        this.isloading = true;
        this.checkerService.checker_text_image(this.url).subscribe(function (res) {
            _this.result = {
                score: res.s,
                a: res.a.join(",")
            };
            _this.isloading = false;
        }, function (err) {
        });
    };
    CheckerTextImageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'checker-text-image',
            template: __webpack_require__(788),
            styles: [__webpack_require__(762)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */]) === 'function' && _a) || Object])
    ], CheckerTextImageComponent);
    return CheckerTextImageComponent;
    var _a;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/checker-text-image.component.js.map

/***/ },

/***/ 369:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_checker_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CheckerDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckerDashboardComponent = (function () {
    function CheckerDashboardComponent(checkerService) {
        this.checkerService = checkerService;
        this.understandableCheckers = [
            {
                name: "Readability Assessment",
                description: "Check surprise words",
                selected: true
            },
            {
                name: "Text Image",
                description: "Check text image match",
                selected: true
            }
        ];
        this.perceivableCheckers = [
            {
                name: "1.1 Text alternative",
                description: "check none-text content's text alternative",
                selected: true
            },
            {
                name: "1.2 Time-based Media",
                description: "Provide alternatives for time-based media.",
                selected: true
            },
            {
                name: "1.3 Adaptable",
                description: "check none-text content's text alternative",
                selected: true
            },
            {
                name: "1.4 Text alternative",
                description: "Create content that can be presented in different ways",
                selected: true
            },
        ];
        this.operableCheckers = [
            {
                name: "2.1 Keyboard Accessible",
                description: "Make all functionality available from a keyboard.",
                selected: true
            },
            {
                name: "2.2 Enough Time",
                description: "Provide users enough time to read and use content.",
                selected: true
            },
            {
                name: "2.3 Seizures",
                description: "Do not design content in a way that is known to cause seizures.",
                selected: true
            },
            {
                name: "2.4 Navigable",
                description: "Provide ways to help users navigate, find content, and determine where they are.",
                selected: true
            },
        ];
        this.robustCheckers = [
            {
                name: "4.1 Compatible",
                description: "Maximize compatibility with current and future user agents, including assistive technologies.",
                selected: true
            }
        ];
        this.isLoading = false;
        this.isShowResult = false;
        this.url = "http://www.media.pa.gov/Pages/Health-Details.aspx?newsid=421";
    }
    CheckerDashboardComponent.prototype.ngOnInit = function () {
    };
    CheckerDashboardComponent.prototype.runCheckers = function () {
        var _this = this;
        this.isLoading = true;
        this.isShowResult = false;
        this.checkerService.checker_all(this.url).subscribe(function (result) {
            _this.result = result;
            _this.isShowResult = true;
            _this.isLoading = false;
        });
    };
    CheckerDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'checker-dashboard',
            template: __webpack_require__(789),
            styles: [__webpack_require__(763)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */]) === 'function' && _a) || Object])
    ], CheckerDashboardComponent);
    return CheckerDashboardComponent;
    var _a;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/checker-dashboard.component.js.map

/***/ },

/***/ 370:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OperableDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OperableDashboardComponent = (function () {
    function OperableDashboardComponent() {
    }
    OperableDashboardComponent.prototype.ngOnInit = function () {
    };
    OperableDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'operable-dashboard',
            template: __webpack_require__(790),
            styles: [__webpack_require__(764)]
        }), 
        __metadata('design:paramtypes', [])
    ], OperableDashboardComponent);
    return OperableDashboardComponent;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/operable-dashboard.component.js.map

/***/ },

/***/ 371:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PerceivableDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PerceivableDashboardComponent = (function () {
    function PerceivableDashboardComponent() {
    }
    PerceivableDashboardComponent.prototype.ngOnInit = function () {
    };
    PerceivableDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'perceivable-dashboard',
            template: __webpack_require__(791),
            styles: [__webpack_require__(765)]
        }), 
        __metadata('design:paramtypes', [])
    ], PerceivableDashboardComponent);
    return PerceivableDashboardComponent;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/perceivable-dashboard.component.js.map

/***/ },

/***/ 372:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReadabilityDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReadabilityDashboardComponent = (function () {
    function ReadabilityDashboardComponent() {
    }
    ReadabilityDashboardComponent.prototype.ngOnInit = function () {
    };
    ReadabilityDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'readability-dashboard',
            template: __webpack_require__(792),
            styles: [__webpack_require__(766)]
        }), 
        __metadata('design:paramtypes', [])
    ], ReadabilityDashboardComponent);
    return ReadabilityDashboardComponent;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/readability-dashboard.component.js.map

/***/ },

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RobustDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RobustDashboardComponent = (function () {
    function RobustDashboardComponent() {
    }
    RobustDashboardComponent.prototype.ngOnInit = function () {
    };
    RobustDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'roubust-dashboard',
            template: __webpack_require__(793),
            styles: [__webpack_require__(767)]
        }), 
        __metadata('design:paramtypes', [])
    ], RobustDashboardComponent);
    return RobustDashboardComponent;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/roubust-dashboard.component.js.map

/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = (function () {
    // @ViewChild("test")
    // test
    //
    // top:number
    // isFixed:boolean = false
    function HomepageComponent(elem) {
        this.elem = elem;
    }
    HomepageComponent.prototype.ngAfterViewInit = function () {
        // this.top = this.test.nativeElement.getBoundingClientRect().top
        // this.elem.nativeElement.addEventListener("scroll",()=>{
        //   if (!this.isFixed && this.test.nativeElement.getBoundingClientRect().top - this.top < -20) {
        //     this.test.nativeElement.style.position = "fixed";
        //     this.isFixed = true
        //   }
        // })
    };
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'homepage',
            template: __webpack_require__(794),
            styles: [__webpack_require__(768)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('showState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])("void => showed", [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                            opacity: 0
                        }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])("1000ms ease-in", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                            opacity: 1
                        }))])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], HomepageComponent);
    return HomepageComponent;
    var _a;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/homepage.component.js.map

/***/ },

/***/ 375:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_checker_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DemoCheckerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemoCheckerComponent = (function () {
    function DemoCheckerComponent(checkerService) {
        this.checkerService = checkerService;
        this.url = "http://www.media.pa.gov/Pages/Health-Details.aspx?newsid=426";
        this.isloading = false;
    }
    DemoCheckerComponent.prototype.ngOnInit = function () {
    };
    DemoCheckerComponent.prototype.test = function () {
        var _this = this;
        this.isloading = true;
        this.sentences = null;
        this.checkerService.checkerDemo(this.url).subscribe(function (res) {
            _this.result = res;
            _this.isloading = false;
        }, function (err) {
        });
    };
    DemoCheckerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'demo-checker',
            template: __webpack_require__(798),
            styles: [__webpack_require__(772)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__service_checker_service__["a" /* CheckerService */]) === 'function' && _a) || Object])
    ], DemoCheckerComponent);
    return DemoCheckerComponent;
    var _a;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/demo-checker.component.js.map

/***/ },

/***/ 376:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/environment.js.map

/***/ },

/***/ 462:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 462;


/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(582);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/main.js.map

/***/ },

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(778),
            styles: [__webpack_require__(752)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/app.component.js.map

/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_countup_js_countUp_module__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_mdl__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__homepage_homepage_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__share_panel_panel_component__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__share_demo_checker_demo_checker_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_checker_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboards_readability_dashboard_readability_dashboard_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__share_sentence_sentence_component__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__share_paragraph_paragraph_component__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboards_checker_dashboard_checker_dashboard_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__share_checker_category_checker_category_component__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__share_sticky_sticky_component__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_charts__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__results_readability_assessment_readability_assessment_component__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dashboards_perceivable_dashboard_perceivable_dashboard_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__checkers_checker_1_1_checker_1_1_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__results_checker_1_1_assessment_checker_1_1_assessment_component__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__checkers_checker_1_2_checker_1_2_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__checkers_checker_text_image_checker_text_image_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__checkers_checker_1_3_checker_1_3_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__checkers_checker_1_4_checker_1_4_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__dashboards_operable_dashboard_operable_dashboard_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__dashboards_roubust_dashboard_roubust_dashboard_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__checkers_checker_2_1_checker_2_1_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__checkers_checker_2_2_checker_2_2_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__checkers_checker_2_3_checker_2_3_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__checkers_checker_2_4_checker_2_4_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__checkers_checker_4_1_checker_4_1_component__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__share_show_details_show_details_component__ = __webpack_require__(590);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__share_panel_panel_component__["a" /* PanelComponent */],
                __WEBPACK_IMPORTED_MODULE_11__share_demo_checker_demo_checker_component__["a" /* DemoCheckerComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dashboards_readability_dashboard_readability_dashboard_component__["a" /* ReadabilityDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__share_sentence_sentence_component__["a" /* SentenceComponent */],
                __WEBPACK_IMPORTED_MODULE_15__share_paragraph_paragraph_component__["a" /* ParagraphComponent */],
                __WEBPACK_IMPORTED_MODULE_16__dashboards_checker_dashboard_checker_dashboard_component__["a" /* CheckerDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_17__share_checker_category_checker_category_component__["a" /* CheckerCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_18__share_sticky_sticky_component__["a" /* StickyComponent */],
                __WEBPACK_IMPORTED_MODULE_20__results_readability_assessment_readability_assessment_component__["a" /* ReadabilityAssessmentComponent */],
                __WEBPACK_IMPORTED_MODULE_21__dashboards_perceivable_dashboard_perceivable_dashboard_component__["a" /* PerceivableDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_22__checkers_checker_1_1_checker_1_1_component__["a" /* Checker11Component */],
                __WEBPACK_IMPORTED_MODULE_23__results_checker_1_1_assessment_checker_1_1_assessment_component__["a" /* Checker11AssessmentComponent */],
                __WEBPACK_IMPORTED_MODULE_24__checkers_checker_1_2_checker_1_2_component__["a" /* Checker12Component */],
                __WEBPACK_IMPORTED_MODULE_25__checkers_checker_text_image_checker_text_image_component__["a" /* CheckerTextImageComponent */],
                __WEBPACK_IMPORTED_MODULE_26__checkers_checker_1_3_checker_1_3_component__["a" /* Checker13Component */],
                __WEBPACK_IMPORTED_MODULE_27__checkers_checker_1_4_checker_1_4_component__["a" /* Checker14Component */],
                __WEBPACK_IMPORTED_MODULE_28__dashboards_operable_dashboard_operable_dashboard_component__["a" /* OperableDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_29__dashboards_roubust_dashboard_roubust_dashboard_component__["a" /* RobustDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_30__checkers_checker_2_1_checker_2_1_component__["a" /* Checker21Component */],
                __WEBPACK_IMPORTED_MODULE_31__checkers_checker_2_2_checker_2_2_component__["a" /* Checker22Component */],
                __WEBPACK_IMPORTED_MODULE_32__checkers_checker_2_3_checker_2_3_component__["a" /* Checker23Component */],
                __WEBPACK_IMPORTED_MODULE_33__checkers_checker_2_4_checker_2_4_component__["a" /* Checker24Component */],
                __WEBPACK_IMPORTED_MODULE_34__checkers_checker_4_1_checker_4_1_component__["a" /* Checker41Component */],
                __WEBPACK_IMPORTED_MODULE_35__share_show_details_show_details_component__["a" /* ShowDetailsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["d" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_mdl__["MdlModule"],
                __WEBPACK_IMPORTED_MODULE_5_countup_js_countUp_module__["a" /* CountUpModule */],
                __WEBPACK_IMPORTED_MODULE_19_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__routes__["a" /* routes */])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__service_checker_service__["a" /* CheckerService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/app.module.js.map

/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Checker11AssessmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Checker11AssessmentComponent = (function () {
    function Checker11AssessmentComponent() {
    }
    Checker11AssessmentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], Checker11AssessmentComponent.prototype, "data", void 0);
    Checker11AssessmentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'checker-1-1-assessment',
            template: __webpack_require__(795),
            styles: [__webpack_require__(769)]
        }), 
        __metadata('design:paramtypes', [])
    ], Checker11AssessmentComponent);
    return Checker11AssessmentComponent;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/checker-1-1-assessment.component.js.map

/***/ },

/***/ 584:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ReadabilityAssessmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReadabilityAssessmentComponent = (function () {
    function ReadabilityAssessmentComponent() {
    }
    Object.defineProperty(ReadabilityAssessmentComponent.prototype, "data", {
        set: function (value) {
            this.surpriseWords = value.supriseWords;
            this.averageScore = value.averageScore;
            this.supriseWordCount = value.supriseWordCount;
            this.surpriseWordRatio = value.surpriseWordRatio;
            this.sentences = value.sentences;
        },
        enumerable: true,
        configurable: true
    });
    ReadabilityAssessmentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ReadabilityAssessmentComponent.prototype, "data", null);
    ReadabilityAssessmentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'readability-assessment',
            template: __webpack_require__(796),
            styles: [__webpack_require__(770)]
        }), 
        __metadata('design:paramtypes', [])
    ], ReadabilityAssessmentComponent);
    return ReadabilityAssessmentComponent;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/readability-assessment.component.js.map

/***/ },

/***/ 585:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__homepage_homepage_component__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__share_demo_checker_demo_checker_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboards_readability_dashboard_readability_dashboard_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboards_checker_dashboard_checker_dashboard_component__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboards_perceivable_dashboard_perceivable_dashboard_component__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkers_checker_1_1_checker_1_1_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__checkers_checker_1_2_checker_1_2_component__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__checkers_checker_text_image_checker_text_image_component__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__checkers_checker_1_3_checker_1_3_component__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__checkers_checker_1_4_checker_1_4_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboards_operable_dashboard_operable_dashboard_component__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboards_roubust_dashboard_roubust_dashboard_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__checkers_checker_2_1_checker_2_1_component__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__checkers_checker_2_2_checker_2_2_component__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__checkers_checker_2_3_checker_2_3_component__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__checkers_checker_2_4_checker_2_4_component__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__checkers_checker_4_1_checker_4_1_component__ = __webpack_require__(367);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });

















/**
 * Created by tony on 4/20/17.
 */
var routes = [
    {
        path: "",
        component: __WEBPACK_IMPORTED_MODULE_0__homepage_homepage_component__["a" /* HomepageComponent */]
    },
    {
        path: "checker",
        children: [
            {
                path: "1-1",
                component: __WEBPACK_IMPORTED_MODULE_5__checkers_checker_1_1_checker_1_1_component__["a" /* Checker11Component */]
            },
            {
                path: "1-2",
                component: __WEBPACK_IMPORTED_MODULE_6__checkers_checker_1_2_checker_1_2_component__["a" /* Checker12Component */]
            },
            {
                path: "1-3",
                component: __WEBPACK_IMPORTED_MODULE_8__checkers_checker_1_3_checker_1_3_component__["a" /* Checker13Component */]
            },
            {
                path: "1-4",
                component: __WEBPACK_IMPORTED_MODULE_9__checkers_checker_1_4_checker_1_4_component__["a" /* Checker14Component */]
            },
            {
                path: "2-1",
                component: __WEBPACK_IMPORTED_MODULE_12__checkers_checker_2_1_checker_2_1_component__["a" /* Checker21Component */]
            },
            {
                path: "2-2",
                component: __WEBPACK_IMPORTED_MODULE_13__checkers_checker_2_2_checker_2_2_component__["a" /* Checker22Component */]
            },
            {
                path: "2-3",
                component: __WEBPACK_IMPORTED_MODULE_14__checkers_checker_2_3_checker_2_3_component__["a" /* Checker23Component */]
            },
            {
                path: "2-4",
                component: __WEBPACK_IMPORTED_MODULE_15__checkers_checker_2_4_checker_2_4_component__["a" /* Checker24Component */]
            },
            {
                path: "4-1",
                component: __WEBPACK_IMPORTED_MODULE_16__checkers_checker_4_1_checker_4_1_component__["a" /* Checker41Component */]
            },
            {
                path: "text-image",
                component: __WEBPACK_IMPORTED_MODULE_7__checkers_checker_text_image_checker_text_image_component__["a" /* CheckerTextImageComponent */]
            },
            {
                path: "demo",
                component: __WEBPACK_IMPORTED_MODULE_1__share_demo_checker_demo_checker_component__["a" /* DemoCheckerComponent */]
            },
        ]
    },
    {
        path: "readability-dashboard",
        component: __WEBPACK_IMPORTED_MODULE_2__dashboards_readability_dashboard_readability_dashboard_component__["a" /* ReadabilityDashboardComponent */]
    },
    {
        path: "perceivable-dashboard",
        component: __WEBPACK_IMPORTED_MODULE_4__dashboards_perceivable_dashboard_perceivable_dashboard_component__["a" /* PerceivableDashboardComponent */]
    },
    {
        path: "operable-dashboard",
        component: __WEBPACK_IMPORTED_MODULE_10__dashboards_operable_dashboard_operable_dashboard_component__["a" /* OperableDashboardComponent */]
    },
    {
        path: "robust-dashboard",
        component: __WEBPACK_IMPORTED_MODULE_11__dashboards_roubust_dashboard_roubust_dashboard_component__["a" /* RobustDashboardComponent */]
    },
    {
        path: "checker-dashboard",
        component: __WEBPACK_IMPORTED_MODULE_3__dashboards_checker_dashboard_checker_dashboard_component__["a" /* CheckerDashboardComponent */]
    },
    {
        path: "**",
        pathMatch: "full",
        redirectTo: "/"
    }
];
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/routes.js.map

/***/ },

/***/ 586:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_mdl__ = __webpack_require__(386);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CheckerCategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckerCategoryComponent = (function () {
    function CheckerCategoryComponent() {
        this.tableModel = new __WEBPACK_IMPORTED_MODULE_1_angular2_mdl__["MdlDefaultTableModel"]([
            {
                key: "name",
                name: "Checker Name"
            },
            {
                key: "description",
                name: "Description"
            }
        ]);
    }
    Object.defineProperty(CheckerCategoryComponent.prototype, "models", {
        set: function (models) {
            this.tableModel.addAll(models);
            this._models = models;
        },
        enumerable: true,
        configurable: true
    });
    CheckerCategoryComponent.prototype.ngOnInit = function () {
    };
    CheckerCategoryComponent.prototype.selectionChanged = function ($event) {
        console.log(this._models);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], CheckerCategoryComponent.prototype, "icon", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], CheckerCategoryComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], CheckerCategoryComponent.prototype, "models", null);
    CheckerCategoryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'checker-category',
            template: __webpack_require__(797),
            styles: [__webpack_require__(771)]
        }), 
        __metadata('design:paramtypes', [])
    ], CheckerCategoryComponent);
    return CheckerCategoryComponent;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/checker-category.component.js.map

/***/ },

/***/ 587:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelComponent = (function () {
    function PanelComponent() {
        this.padding = "1rem";
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], PanelComponent.prototype, "padding", void 0);
    PanelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'panel',
            template: __webpack_require__(799),
            styles: [__webpack_require__(773)]
        }), 
        __metadata('design:paramtypes', [])
    ], PanelComponent);
    return PanelComponent;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/panel.component.js.map

/***/ },

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ParagraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParagraphComponent = (function () {
    function ParagraphComponent() {
    }
    ParagraphComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], ParagraphComponent.prototype, "title", void 0);
    ParagraphComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'paragraph',
            template: __webpack_require__(800),
            styles: [__webpack_require__(774)]
        }), 
        __metadata('design:paramtypes', [])
    ], ParagraphComponent);
    return ParagraphComponent;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/paragraph.component.js.map

/***/ },

/***/ 589:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SentenceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SentenceComponent = (function () {
    function SentenceComponent() {
    }
    SentenceComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SentenceComponent.prototype, "sentence", void 0);
    SentenceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sentence',
            template: __webpack_require__(801),
            styles: [__webpack_require__(775)]
        }), 
        __metadata('design:paramtypes', [])
    ], SentenceComponent);
    return SentenceComponent;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/sentence.component.js.map

/***/ },

/***/ 590:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ShowDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowDetailsComponent = (function () {
    function ShowDetailsComponent() {
        this.isShowDetail = false;
    }
    ShowDetailsComponent.prototype.ngOnInit = function () {
    };
    ShowDetailsComponent.prototype.showDetail = function () {
        this.isShowDetail = true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], ShowDetailsComponent.prototype, "title", void 0);
    ShowDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'show-details',
            template: __webpack_require__(802),
            styles: [__webpack_require__(776)]
        }), 
        __metadata('design:paramtypes', [])
    ], ShowDetailsComponent);
    return ShowDetailsComponent;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/show-details.component.js.map

/***/ },

/***/ 591:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return StickyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StickyComponent = (function () {
    function StickyComponent() {
    }
    StickyComponent.prototype.ngOnInit = function () {
        window.addEventListener("scroll", function () {
            console.log(window);
        });
    };
    StickyComponent.prototype.onScroll = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])("window:scroll", ["$event"]), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], StickyComponent.prototype, "onScroll", null);
    StickyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sticky',
            template: __webpack_require__(803),
            styles: [__webpack_require__(777)]
        }), 
        __metadata('design:paramtypes', [])
    ], StickyComponent);
    return StickyComponent;
}());
//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/sticky.component.js.map

/***/ },

/***/ 592:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(821);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/tony/Documents/projects/is/heath/code/frontend/src/polyfills.js.map

/***/ },

/***/ 752:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 753:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 754:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 755:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 756:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 757:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 758:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 759:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 760:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 761:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 762:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 763:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 764:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 765:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 766:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 767:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 768:
/***/ function(module, exports) {

module.exports = "/*:host{*/\n  /*position: relative;*/\n  /*display:block;*/\n  /*overflow: scroll;*/\n  /*width:auto;*/\n  /*height:600px;*/\n/*}*/\n"

/***/ },

/***/ 769:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 770:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 771:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 772:
/***/ function(module, exports) {

module.exports = ".sentence{\n  display: block;\n  padding: 0;\n  margin:0;\n}\n\n.sentence .word{\n  display: inline-block;\n  padding:0;\n  margin:0;\n}\n"

/***/ },

/***/ 773:
/***/ function(module, exports) {

module.exports = ".panel-container{\n  margin:0rem 0rem 2rem 0rem;\n}\n"

/***/ },

/***/ 774:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 775:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 776:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 777:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 778:
/***/ function(module, exports) {

module.exports = "<div>\n  <mdl-layout #layout=\"mdlLayout\" mdl-layout-fixed-header mdl-layout-fixed-drawer>\n    <mdl-layout-header >\n      <mdl-layout-header-row>\n        <mdl-layout-title></mdl-layout-title>\n        <mdl-layout-spacer></mdl-layout-spacer>\n        <nav class=\"mdl-navigation\">\n          <!--<a class=\"mdl-navigation__link\" >Link 1</a>-->\n\n        </nav>\n      </mdl-layout-header-row>\n    </mdl-layout-header>\n    <mdl-layout-drawer>\n      <mdl-layout-title>\n        <!--<h2>WAM</h2>-->\n        <div style=\"margin-left: -3rem; margin-bottom: -1rem\">\n          <a href=\"\" routerLink=\"/\"><img src=\"/images/WAM-Logo.jpg\" alt=\"\" style=\"width: 100%;display: inline-block\"></a>\n        </div>\n      </mdl-layout-title>\n      <nav class=\"mdl-navigation\">\n        <nav class=\"demo-navigation mdl-navigation mdl-color--blue-grey-800\">\n          <a class=\"mdl-navigation__link\" routerLink=\"/\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\" >home</i>Home</a>\n\n          <a class=\"mdl-navigation__link\" routerLink=\"/perceivable-dashboard\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">delete</i>Perceivable</a>\n          <a class=\"mdl-navigation__link\" routerLink=\"/operable-dashboard\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">report</i>Operable</a>\n          <a class=\"mdl-navigation__link\" routerLink=\"/readability-dashboard\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">remove_red_eye</i>Understandable</a>\n          <a class=\"mdl-navigation__link\" routerLink=\"/robust-dashboard\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">forum</i>Robust</a>\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">people</i>About Us</a>\n          <div class=\"mdl-layout-spacer\"></div>\n          <a class=\"mdl-navigation__link\" href=\"\"><i class=\"mdl-color-text--blue-grey-400 material-icons\" role=\"presentation\">help_outline</i><span>Help</span></a>\n        </nav>\n      </nav>\n    </mdl-layout-drawer>\n    <mdl-layout-content>\n      <router-outlet></router-outlet>\n    </mdl-layout-content>\n  </mdl-layout>\n</div>\n\n"

/***/ },

/***/ 779:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <panel padding=\"2rem\">\n    <h2> <mdl-icon>remove_red_eye</mdl-icon>1.1 Text Alternatives</h2>\n    <paragraph title=\"Description:\">\n      Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.\n    </paragraph>\n    <paragraph title=\"How To Use:\">\n      copy the url of the webpage to the following textbox and click \"TEST\" button, the result will be the score of text alternatives in the given text. The lower the score, the less the text alternative.\n    </paragraph>\n    <paragraph title=\"Test Panel:\">\n      <div class=\"test-panel\">\n        <div class=\"mdl-grid\">\n          <div class=\"mdl-cell mdl-cell--8-col\">\n            <mdl-textfield style=\"width:100%;\" label=\"URL to test\" floating-label [(ngModel)]=\"url\"></mdl-textfield>\n          </div>\n          <div class=\"mdl-cell mdl-cell-2-col\">\n            <button class=\"inline-button\" mdl-button mdl-button-type=\"raised\" mdl-colored=\"primary\" mdl-ripple (click)=\"test()\">test</button>\n          </div>\n        </div>\n      </div>\n    </paragraph>\n\n    <paragraph title=\"Result:\" *ngIf=\"result || isloading\">\n      <div>\n        <mdl-spinner class=\"inline-button\" [active]=\"isloading\" *ngIf=\"isloading\"></mdl-spinner>\n        <div *ngIf=\"!isloading || result\">\n\n          <checker-1-1-assessment [data]=\"result\"></checker-1-1-assessment>\n        </div>\n\n      </div>\n    </paragraph>\n\n  </panel>\n</div>\n"

/***/ },

/***/ 780:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <panel padding=\"2rem\">\n    <h2> <mdl-icon>remove_red_eye</mdl-icon>1.2  Time-based Media</h2>\n    <paragraph title=\"Description:\">\n      Provide alternatives for time-based media.\n    </paragraph>\n    <paragraph title=\"How To Use:\">\n      copy the url of the webpage to the following textbox and click \"TEST\" button, the result will be the score of text alternatives in the given text. The lower the score, the less the text alternative.\n    </paragraph>\n    <paragraph title=\"Test Panel:\">\n      <div class=\"test-panel\">\n        <div class=\"mdl-grid\">\n          <div class=\"mdl-cell mdl-cell--8-col\">\n            <mdl-textfield style=\"width:100%;\" label=\"URL to test\" floating-label [(ngModel)]=\"url\"></mdl-textfield>\n          </div>\n          <div class=\"mdl-cell mdl-cell-2-col\">\n            <button class=\"inline-button\" mdl-button mdl-button-type=\"raised\" mdl-colored=\"primary\" mdl-ripple (click)=\"test()\">test</button>\n          </div>\n        </div>\n      </div>\n    </paragraph>\n\n    <paragraph title=\"Result:\" *ngIf=\"result || isloading\">\n      <div>\n        <mdl-spinner class=\"inline-button\" [active]=\"isloading\" *ngIf=\"isloading\"></mdl-spinner>\n        <div *ngIf=\"!isloading || result\">\n\n          <checker-1-1-assessment [data]=\"result\"></checker-1-1-assessment>\n        </div>\n\n      </div>\n    </paragraph>\n\n  </panel>\n</div>\n"

/***/ },

/***/ 781:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <panel padding=\"2rem\">\n    <h2> <mdl-icon>remove_red_eye</mdl-icon>1.3 Adaptable</h2>\n    <paragraph title=\"Description:\">\n      Create content that can be presented in different ways (for example simpler layout) without losing information or structure.\n    </paragraph>\n    <paragraph title=\"How To Use:\">\n      copy the url of the webpage to the following textbox and click \"TEST\" button, the result will be the score of text alternatives in the given text. The lower the score, the less the text alternative.\n    </paragraph>\n    <paragraph title=\"Test Panel:\">\n      <div class=\"test-panel\">\n        <div class=\"mdl-grid\">\n          <div class=\"mdl-cell mdl-cell--8-col\">\n            <mdl-textfield style=\"width:100%;\" label=\"URL to test\" floating-label [(ngModel)]=\"url\"></mdl-textfield>\n          </div>\n          <div class=\"mdl-cell mdl-cell-2-col\">\n            <button class=\"inline-button\" mdl-button mdl-button-type=\"raised\" mdl-colored=\"primary\" mdl-ripple (click)=\"test()\">test</button>\n          </div>\n        </div>\n      </div>\n    </paragraph>\n\n    <paragraph title=\"Result:\" *ngIf=\"result || isloading\">\n      <div>\n        <mdl-spinner class=\"inline-button\" [active]=\"isloading\" *ngIf=\"isloading\"></mdl-spinner>\n        <div *ngIf=\"!isloading || result\">\n\n          <checker-1-1-assessment [data]=\"result\"></checker-1-1-assessment>\n        </div>\n\n      </div>\n    </paragraph>\n\n  </panel>\n</div>\n"

/***/ },

/***/ 782:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <panel padding=\"2rem\">\n    <h2> <mdl-icon>remove_red_eye</mdl-icon>1.4 Distinguishable</h2>\n    <paragraph title=\"Description:\">\n      Make it easier for users to see and hear content including separating foreground from background.\n      Show techniques and failures for 1.4\n    </paragraph>\n    <paragraph title=\"How To Use:\">\n      copy the url of the webpage to the following textbox and click \"TEST\" button, the result will be the score of text alternatives in the given text. The lower the score, the less the text alternative.\n    </paragraph>\n    <paragraph title=\"Test Panel:\">\n      <div class=\"test-panel\">\n        <div class=\"mdl-grid\">\n          <div class=\"mdl-cell mdl-cell--8-col\">\n            <mdl-textfield style=\"width:100%;\" label=\"URL to test\" floating-label [(ngModel)]=\"url\"></mdl-textfield>\n          </div>\n          <div class=\"mdl-cell mdl-cell-2-col\">\n            <button class=\"inline-button\" mdl-button mdl-button-type=\"raised\" mdl-colored=\"primary\" mdl-ripple (click)=\"test()\">test</button>\n          </div>\n        </div>\n      </div>\n    </paragraph>\n\n    <paragraph title=\"Result:\" *ngIf=\"result || isloading\">\n      <div>\n        <mdl-spinner class=\"inline-button\" [active]=\"isloading\" *ngIf=\"isloading\"></mdl-spinner>\n        <div *ngIf=\"!isloading || result\">\n\n          <checker-1-1-assessment [data]=\"result\"></checker-1-1-assessment>\n        </div>\n\n      </div>\n    </paragraph>\n\n  </panel>\n</div>\n"

/***/ },

/***/ 783:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <panel padding=\"2rem\">\n    <h2> <mdl-icon>remove_red_eye</mdl-icon> 2.1 Keyboard Accessible</h2>\n    <paragraph title=\"Description:\">\n      All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.\n    </paragraph>\n    <paragraph title=\"How To Use:\">\n      copy the url of the webpage to the following textbox and click \"TEST\" button, the result will be the score of text alternatives in the given text. The lower the score, the less the text alternative.\n    </paragraph>\n    <paragraph title=\"Test Panel:\">\n      <div class=\"test-panel\">\n        <div class=\"mdl-grid\">\n          <div class=\"mdl-cell mdl-cell--8-col\">\n            <mdl-textfield style=\"width:100%;\" label=\"URL to test\" floating-label [(ngModel)]=\"url\"></mdl-textfield>\n          </div>\n          <div class=\"mdl-cell mdl-cell-2-col\">\n            <button class=\"inline-button\" mdl-button mdl-button-type=\"raised\" mdl-colored=\"primary\" mdl-ripple (click)=\"test()\">test</button>\n          </div>\n        </div>\n      </div>\n    </paragraph>\n\n    <paragraph title=\"Result:\" *ngIf=\"result || isloading\">\n      <div>\n        <mdl-spinner class=\"inline-button\" [active]=\"isloading\" *ngIf=\"isloading\"></mdl-spinner>\n        <div *ngIf=\"!isloading || result\">\n\n          <checker-1-1-assessment [data]=\"result\"></checker-1-1-assessment>\n        </div>\n\n      </div>\n    </paragraph>\n\n  </panel>\n</div>\n"

/***/ },

/***/ 784:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <panel padding=\"2rem\">\n    <h2> <mdl-icon>remove_red_eye</mdl-icon>2.2 Enough Time</h2>\n    <paragraph title=\"Description:\">\n      Provide users enough time to read and use content.\n    </paragraph>\n    <paragraph title=\"How To Use:\">\n      copy the url of the webpage to the following textbox and click \"TEST\" button, the result will be the score of text alternatives in the given text. The lower the score, the less the text alternative.\n    </paragraph>\n    <paragraph title=\"Test Panel:\">\n      <div class=\"test-panel\">\n        <div class=\"mdl-grid\">\n          <div class=\"mdl-cell mdl-cell--8-col\">\n            <mdl-textfield style=\"width:100%;\" label=\"URL to test\" floating-label [(ngModel)]=\"url\"></mdl-textfield>\n          </div>\n          <div class=\"mdl-cell mdl-cell-2-col\">\n            <button class=\"inline-button\" mdl-button mdl-button-type=\"raised\" mdl-colored=\"primary\" mdl-ripple (click)=\"test()\">test</button>\n          </div>\n        </div>\n      </div>\n    </paragraph>\n\n    <paragraph title=\"Result:\" *ngIf=\"result || isloading\">\n      <div>\n        <mdl-spinner class=\"inline-button\" [active]=\"isloading\" *ngIf=\"isloading\"></mdl-spinner>\n        <div *ngIf=\"!isloading || result\">\n\n          <checker-1-1-assessment [data]=\"result\"></checker-1-1-assessment>\n        </div>\n\n      </div>\n    </paragraph>\n\n  </panel>\n</div>\n"

/***/ },

/***/ 785:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <panel padding=\"2rem\">\n    <h2> <mdl-icon>remove_red_eye</mdl-icon>2.3 Seizures</h2>\n    <paragraph title=\"Description:\">\n      Do not design content in a way that is known to cause seizures.\n    </paragraph>\n    <paragraph title=\"How To Use:\">\n      copy the url of the webpage to the following textbox and click \"TEST\" button, the result will be the score of text alternatives in the given text. The lower the score, the less the text alternative.\n    </paragraph>\n    <paragraph title=\"Test Panel:\">\n      <div class=\"test-panel\">\n        <div class=\"mdl-grid\">\n          <div class=\"mdl-cell mdl-cell--8-col\">\n            <mdl-textfield style=\"width:100%;\" label=\"URL to test\" floating-label [(ngModel)]=\"url\"></mdl-textfield>\n          </div>\n          <div class=\"mdl-cell mdl-cell-2-col\">\n            <button class=\"inline-button\" mdl-button mdl-button-type=\"raised\" mdl-colored=\"primary\" mdl-ripple (click)=\"test()\">test</button>\n          </div>\n        </div>\n      </div>\n    </paragraph>\n\n    <paragraph title=\"Result:\" *ngIf=\"result || isloading\">\n      <div>\n        <mdl-spinner class=\"inline-button\" [active]=\"isloading\" *ngIf=\"isloading\"></mdl-spinner>\n        <div *ngIf=\"!isloading || result\">\n\n          <checker-1-1-assessment [data]=\"result\"></checker-1-1-assessment>\n        </div>\n\n      </div>\n    </paragraph>\n\n  </panel>\n</div>\n"

/***/ },

/***/ 786:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <panel padding=\"2rem\">\n    <h2> <mdl-icon>remove_red_eye</mdl-icon>2.4 Navigable</h2>\n    <paragraph title=\"Description:\">\n      Provide ways to help users navigate, find content, and determine where they are.\n    </paragraph>\n    <paragraph title=\"How To Use:\">\n      copy the url of the webpage to the following textbox and click \"TEST\" button, the result will be the score of text alternatives in the given text. The lower the score, the less the text alternative.\n    </paragraph>\n    <paragraph title=\"Test Panel:\">\n      <div class=\"test-panel\">\n        <div class=\"mdl-grid\">\n          <div class=\"mdl-cell mdl-cell--8-col\">\n            <mdl-textfield style=\"width:100%;\" label=\"URL to test\" floating-label [(ngModel)]=\"url\"></mdl-textfield>\n          </div>\n          <div class=\"mdl-cell mdl-cell-2-col\">\n            <button class=\"inline-button\" mdl-button mdl-button-type=\"raised\" mdl-colored=\"primary\" mdl-ripple (click)=\"test()\">test</button>\n          </div>\n        </div>\n      </div>\n    </paragraph>\n\n    <paragraph title=\"Result:\" *ngIf=\"result || isloading\">\n      <div>\n        <mdl-spinner class=\"inline-button\" [active]=\"isloading\" *ngIf=\"isloading\"></mdl-spinner>\n        <div *ngIf=\"!isloading || result\">\n\n          <checker-1-1-assessment [data]=\"result\"></checker-1-1-assessment>\n        </div>\n\n      </div>\n    </paragraph>\n\n  </panel>\n</div>\n"

/***/ },

/***/ 787:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <panel padding=\"2rem\">\n    <h2> <mdl-icon>remove_red_eye</mdl-icon> 4.1 Compatible</h2>\n    <paragraph title=\"Description:\">\n      Maximize compatibility with current and future user agents, including assistive technologies.\n    </paragraph>\n    <paragraph title=\"How To Use:\">\n      copy the url of the webpage to the following textbox and click \"TEST\" button, the result will be the score of text alternatives in the given text. The lower the score, the less the text alternative.\n    </paragraph>\n    <paragraph title=\"Test Panel:\">\n      <div class=\"test-panel\">\n        <div class=\"mdl-grid\">\n          <div class=\"mdl-cell mdl-cell--8-col\">\n            <mdl-textfield style=\"width:100%;\" label=\"URL to test\" floating-label [(ngModel)]=\"url\"></mdl-textfield>\n          </div>\n          <div class=\"mdl-cell mdl-cell-2-col\">\n            <button class=\"inline-button\" mdl-button mdl-button-type=\"raised\" mdl-colored=\"primary\" mdl-ripple (click)=\"test()\">test</button>\n          </div>\n        </div>\n      </div>\n    </paragraph>\n\n    <paragraph title=\"Result:\" *ngIf=\"result || isloading\">\n      <div>\n        <mdl-spinner class=\"inline-button\" [active]=\"isloading\" *ngIf=\"isloading\"></mdl-spinner>\n        <div *ngIf=\"!isloading || result\">\n\n          <checker-1-1-assessment [data]=\"result\"></checker-1-1-assessment>\n        </div>\n\n      </div>\n    </paragraph>\n\n  </panel>\n</div>\n"

/***/ },

/***/ 788:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <panel padding=\"2rem\">\n    <h2> <mdl-icon>remove_red_eye</mdl-icon>Text Image</h2>\n    <paragraph title=\"Description:\">\n      Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.\n    </paragraph>\n    <paragraph title=\"How To Use:\">\n      copy the url of the webpage to the following textbox and click \"TEST\" button, the result will be the score of text alternatives in the given text. The lower the score, the less the text alternative.\n    </paragraph>\n    <paragraph title=\"Test Panel:\">\n      <div class=\"test-panel\">\n        <div class=\"mdl-grid\">\n          <div class=\"mdl-cell mdl-cell--8-col\">\n            <mdl-textfield style=\"width:100%;\" label=\"URL to test\" floating-label [(ngModel)]=\"url\"></mdl-textfield>\n          </div>\n          <div class=\"mdl-cell mdl-cell-2-col\">\n            <button class=\"inline-button\" mdl-button mdl-button-type=\"raised\" mdl-colored=\"primary\" mdl-ripple (click)=\"test()\">test</button>\n          </div>\n        </div>\n      </div>\n    </paragraph>\n\n    <paragraph title=\"Result:\" *ngIf=\"result || isloading\">\n      <div>\n        <mdl-spinner class=\"inline-button\" [active]=\"isloading\" *ngIf=\"isloading\"></mdl-spinner>\n        <div *ngIf=\"!isloading || result\">\n          <p class=\"description\">Score: {{result.score}}</p>\n          <p class=\"description\">Text Description: {{result.a}}</p>\n        </div>\n\n      </div>\n    </paragraph>\n\n  </panel>\n</div>\n"

/***/ },

/***/ 789:
/***/ function(module, exports) {

module.exports = "<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--12-col\">\n\n    <checker-category icon=\"report\" title=\"Perceivable\" [models]=\"perceivableCheckers\">\n      <p class=\"description\">\n\n      </p>\n    </checker-category>\n\n\n\n    <checker-category icon=\"people\" title=\"Operable\" [models]=\"operableCheckers\">\n      <p class=\"description\">\n\n      </p>\n    </checker-category>\n\n\n    <checker-category icon=\"remove_red_eye\" title=\"Understandable\" [models]=\"understandableCheckers\">\n      <p class=\"description\">\n\n      </p>\n    </checker-category>\n\n\n    <checker-category icon=\"message\" title=\"Robust\" [models]=\"robustCheckers\">\n      <p class=\"description\">\n\n      </p>\n    </checker-category>\n  </div>\n\n  <div class=\"mdl-cell mdl-cell--12-col\">\n    <panel>\n      <mdl-textfield label=\"URL...\" floating-label [(ngModel)]=\"url\" style=\"width:100%;\"></mdl-textfield>\n      <div>\n        <button mdl-button mdl-button-type=\"raised\" mdl-ripple (click)=\"runCheckers()\">Run Checkers</button>\n      </div>\n      <div style=\"padding: 10px\">\n        <mdl-spinner [active]=\"isLoading\"></mdl-spinner>\n      </div>\n\n      <div *ngIf=\"isShowResult\">\n\n        <paragraph title=\"Perceivable\">\n          <hr>\n          <show-details title=\"1.1 Text alternative\">\n            <div class=\"summary\">total score: {{result.c11.total_score.toFixed(3)}}</div>\n            <div class=\"detail\">\n              <checker-1-1-assessment [data]=\"result.c11\">\n              </checker-1-1-assessment>\n            </div>\n          </show-details >\n          <show-details title=\"1.2 Time-based Media\">\n            <div class=\"summary\">total score: {{result.c12.total_score.toFixed(3)}}</div>\n            <div class=\"detail\">\n              <checker-1-1-assessment [data]=\"result.c12\">\n              </checker-1-1-assessment>\n            </div>\n          </show-details>\n          <show-details title=\"1.3 Adaptable\">\n            <div class=\"summary\">total score: {{result.c13.total_score.toFixed(3)}}</div>\n            <div class=\"detail\">\n              <checker-1-1-assessment [data]=\"result.c13\">\n              </checker-1-1-assessment>\n            </div>\n          </show-details>\n          <show-details title=\"1.4 Text alternative\">\n          <div class=\"summary\">total score: {{result.c14.total_score.toFixed(3)}}</div>\n          <div class=\"detail\">\n            <checker-1-1-assessment [data]=\"result.c14\">\n            </checker-1-1-assessment>\n          </div>\n        </show-details>\n\n        </paragraph>\n\n        <paragraph title=\"Operable\">\n          <hr>\n          <show-details title=\"2.1 Keyboard Accessible\">\n            <div class=\"summary\">total score: {{result.c21.total_score.toFixed(3)}}</div>\n            <div class=\"detail\">\n              <checker-1-1-assessment [data]=\"result.c21\">\n              </checker-1-1-assessment>\n            </div>\n          </show-details>\n          <show-details title=\"2.2 Enough Time\">\n            <div class=\"summary\">total score: {{result.c22.total_score.toFixed(3)}}</div>\n            <div class=\"detail\">\n              <checker-1-1-assessment [data]=\"result.c22\">\n              </checker-1-1-assessment>\n            </div>\n          </show-details>\n          <show-details title=\"2.3 Seizures\">\n            <div class=\"summary\">total score: {{result.c23.total_score.toFixed(3)}}</div>\n            <div class=\"detail\">\n              <checker-1-1-assessment [data]=\"result.c23\">\n              </checker-1-1-assessment>\n            </div>\n          </show-details>\n          <show-details title=\"2.4 Navigable\">\n          <div class=\"summary\">total score: {{result.c24.total_score.toFixed(3)}}</div>\n          <div class=\"detail\">\n            <checker-1-1-assessment [data]=\"result.c24\">\n            </checker-1-1-assessment>\n          </div>\n          </show-details>\n        </paragraph>\n\n        <paragraph title=\"Understandable\">\n          <hr>\n          <show-details title=\"Readability Assessment\">\n            <div class=\"summary\">total score: {{result.readability.averageScore}}</div>\n            <div class=\"detail\">\n              <readability-assessment [data]=\"result.readability\"></readability-assessment>\n            </div>\n          </show-details>\n          <show-details title=\"Text Image\">\n            <div class=\"summary\">total score: {{result.c22.total_score.toFixed(3)}}</div>\n            <div class=\"detail\"></div>\n          </show-details>\n\n        </paragraph>\n\n\n\n\n\n        <paragraph title=\"Robust\">\n          <hr>\n          <show-details title=\"4.1 Compatible\">\n            <div class=\"summary\">total score: {{result.c41.total_score.toFixed(3)}}</div>\n            <div class=\"detail\">\n              <checker-1-1-assessment [data]=\"result.c41\">\n              </checker-1-1-assessment>\n            </div>\n          </show-details>\n        </paragraph>\n      </div>\n    </panel>\n  </div>\n</div>\n\n\n\n"

/***/ },

/***/ 790:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"panel-header\"><mdl-icon class=\"header-icon\">remove_red_eye</mdl-icon>Operable Checkers</h3>\n  <div class=\"description paragraph\">Perceivable Checkers will try to evaluate whether a given website is easy to operate</div>\n  <div class=\"mdl-grid\">\n    <div class=\"mdl-cell\">\n      <mdl-card mdl-shadow=\"4\">\n        <mdl-card-title mdl-card-expand>\n          <h2 mdl-card-title-text>2.1 Keyboard Accessible</h2>\n        </mdl-card-title>\n        <mdl-card-supporting-text>\n          All functionality of the content is operable through a keyboard interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.\n        </mdl-card-supporting-text>\n        <mdl-card-actions mdl-card-border>\n          <button mdl-button mdl-colored mdl-ripple routerLink=\"/checker/2-1\">\n            View Details\n          </button>\n        </mdl-card-actions>\n      </mdl-card>\n    </div>\n    <div class=\"mdl-cell\">\n      <mdl-card mdl-shadow=\"4\">\n        <mdl-card-title mdl-card-expand>\n          <h2 mdl-card-title-text>2.2 Enough Time</h2>\n        </mdl-card-title>\n        <mdl-card-supporting-text>\n          copy the url of the webpage to the following textbox and click \"TEST\" button, the result will be the score of text alternatives in the given text. The lower the score, the less the text alternative.\n        </mdl-card-supporting-text>\n        <mdl-card-actions mdl-card-border>\n          <button mdl-button mdl-colored mdl-ripple routerLink=\"/checker/2-2\">\n            View Details\n          </button>\n        </mdl-card-actions>\n      </mdl-card>\n    </div>\n\n    <div class=\"mdl-cell\">\n      <mdl-card mdl-shadow=\"4\">\n        <mdl-card-title mdl-card-expand>\n          <h2 mdl-card-title-text>2.3 Seizures</h2>\n        </mdl-card-title>\n        <mdl-card-supporting-text>\n          Do not design content in a way that is known to cause seizures.\n        </mdl-card-supporting-text>\n        <mdl-card-actions mdl-card-border>\n          <button mdl-button mdl-colored mdl-ripple routerLink=\"/checker/2-3\">\n            View Details\n          </button>\n        </mdl-card-actions>\n      </mdl-card>\n    </div>\n\n    <div class=\"mdl-cell\">\n      <mdl-card mdl-shadow=\"4\">\n        <mdl-card-title mdl-card-expand>\n          <h2 mdl-card-title-text>2.4 Navigable</h2>\n        </mdl-card-title>\n        <mdl-card-supporting-text>\n          Provide ways to help users navigate, find content, and determine where they are.\n        </mdl-card-supporting-text>\n        <mdl-card-actions mdl-card-border>\n          <button mdl-button mdl-colored mdl-ripple routerLink=\"/checker/2-4\">\n            View Details\n          </button>\n        </mdl-card-actions>\n      </mdl-card>\n    </div>\n\n\n  </div>\n</div>\n\n"

/***/ },

/***/ 791:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"panel-header\"><mdl-icon class=\"header-icon\">remove_red_eye</mdl-icon>Perceivable Checkers</h3>\n  <div class=\"description paragraph\">Perceivable Checkers will try to evaluate whether a given website is easy to perceive</div>\n  <div class=\"mdl-grid\">\n    <div class=\"mdl-cell\">\n      <mdl-card mdl-shadow=\"4\">\n        <mdl-card-title mdl-card-expand>\n          <h2 mdl-card-title-text>1.1 Text Alternatives</h2>\n        </mdl-card-title>\n        <mdl-card-supporting-text>\n          check none-text content's text alternatives\n        </mdl-card-supporting-text>\n        <mdl-card-actions mdl-card-border>\n          <button mdl-button mdl-colored mdl-ripple routerLink=\"/checker/1-1\">\n            View Details\n          </button>\n        </mdl-card-actions>\n      </mdl-card>\n    </div>\n    <div class=\"mdl-cell\">\n      <mdl-card mdl-shadow=\"4\">\n        <mdl-card-title mdl-card-expand>\n          <h2 mdl-card-title-text>1.2 Time-based Media</h2>\n        </mdl-card-title>\n        <mdl-card-supporting-text>\n          check time-based's text alternatives\n        </mdl-card-supporting-text>\n        <mdl-card-actions mdl-card-border>\n          <button mdl-button mdl-colored mdl-ripple routerLink=\"/checker/1-2\">\n            View Details\n          </button>\n        </mdl-card-actions>\n      </mdl-card>\n    </div>\n\n    <div class=\"mdl-cell\">\n      <mdl-card mdl-shadow=\"4\">\n        <mdl-card-title mdl-card-expand>\n          <h2 mdl-card-title-text>1.3 Adaptable</h2>\n        </mdl-card-title>\n        <mdl-card-supporting-text>\n          Create content that can be presented in different ways (for example simpler layout) without losing information or structure\n        </mdl-card-supporting-text>\n        <mdl-card-actions mdl-card-border>\n          <button mdl-button mdl-colored mdl-ripple routerLink=\"/checker/1-3\">\n            View Details\n          </button>\n        </mdl-card-actions>\n      </mdl-card>\n    </div>\n\n    <div class=\"mdl-cell\">\n      <mdl-card mdl-shadow=\"4\">\n        <mdl-card-title mdl-card-expand>\n          <h2 mdl-card-title-text>1.4 Distinguishable</h2>\n        </mdl-card-title>\n        <mdl-card-supporting-text>\n          Make it easier for users to see and hear content including separating foreground from background.\n        </mdl-card-supporting-text>\n        <mdl-card-actions mdl-card-border>\n          <button mdl-button mdl-colored mdl-ripple routerLink=\"/checker/1-4\">\n            View Details\n          </button>\n        </mdl-card-actions>\n      </mdl-card>\n    </div>\n\n\n  </div>\n</div>\n\n"

/***/ },

/***/ 792:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"panel-header\"><mdl-icon class=\"header-icon\">remove_red_eye</mdl-icon>Understandable Checkers</h3>\n  <div class=\"description paragraph\">Readability Checkers will try to evaluate whether a given website is easy to understand</div>\n  <div class=\"mdl-grid\">\n    <div class=\"mdl-cell\">\n      <mdl-card mdl-shadow=\"4\">\n        <mdl-card-title mdl-card-expand>\n          <h2 mdl-card-title-text>Readability Assessment</h2>\n        </mdl-card-title>\n        <mdl-card-supporting-text>\n          Assess word-level readability score\n        </mdl-card-supporting-text>\n        <mdl-card-actions mdl-card-border>\n          <button mdl-button mdl-colored mdl-ripple routerLink=\"/checker/demo\">\n            View Details\n          </button>\n        </mdl-card-actions>\n      </mdl-card>\n    </div>\n\n    <div class=\"mdl-cell\">\n      <mdl-card mdl-shadow=\"4\">\n        <mdl-card-title mdl-card-expand>\n          <h2 mdl-card-title-text>Image Text</h2>\n        </mdl-card-title>\n        <mdl-card-supporting-text>\n          Image Text score\n        </mdl-card-supporting-text>\n        <mdl-card-actions mdl-card-border>\n          <button mdl-button mdl-colored mdl-ripple routerLink=\"/checker/text-image\">\n            View Details\n          </button>\n        </mdl-card-actions>\n      </mdl-card>\n    </div>\n\n\n\n    <!--<div class=\"mdl-cell\">-->\n      <!--<mdl-card mdl-shadow=\"4\">-->\n        <!--<mdl-card-title mdl-card-expand>-->\n          <!--<h2 mdl-card-title-text>Checker 2</h2>-->\n        <!--</mdl-card-title>-->\n        <!--<mdl-card-supporting-text>-->\n          <!--checker description...-->\n        <!--</mdl-card-supporting-text>-->\n        <!--<mdl-card-actions mdl-card-border>-->\n          <!--<button mdl-button mdl-colored mdl-ripple>-->\n            <!--View Details-->\n          <!--</button>-->\n        <!--</mdl-card-actions>-->\n      <!--</mdl-card>-->\n    <!--</div>-->\n  </div>\n</div>\n\n"

/***/ },

/***/ 793:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 class=\"panel-header\"><mdl-icon class=\"header-icon\">remove_red_eye</mdl-icon>Robust Checkers</h3>\n  <div class=\"description paragraph\">Readability Checkers will try to evaluate whether a given website is robust</div>\n  <div class=\"mdl-grid\">\n    <div class=\"mdl-cell\">\n      <mdl-card mdl-shadow=\"4\">\n        <mdl-card-title mdl-card-expand>\n          <h2 mdl-card-title-text>4.1 Compatible</h2>\n        </mdl-card-title>\n        <mdl-card-supporting-text>\n          Maximize compatibility with current and future user agents, including assistive technologies.\n          Show techniques and failures for 4.1\n        </mdl-card-supporting-text>\n        <mdl-card-actions mdl-card-border>\n          <button mdl-button mdl-colored mdl-ripple routerLink=\"/checker/4-1\">\n            View Details\n          </button>\n        </mdl-card-actions>\n      </mdl-card>\n    </div>\n\n\n  </div>\n</div>\n\n"

/***/ },

/***/ 794:
/***/ function(module, exports) {

module.exports = "<div class=\"container\" >\n  <panel >\n\n    <div class=\"mdl-grid\">\n      <div class=\"mdl-cell mdl-cell--4-col\">\n        <h2 ><span style=\"color: red\">W</span>eb <span style=\"color: red\">A</span>ccessibility <span style=\"color: red\">M</span>etric</h2>\n        <p class=\"description\">\n          A tool to measure the accessibility of web\n        </p>\n      </div>\n      <div class=\"mdl-cell mdl-cell--8-col\" [@showState]=\"'showed'\">\n        <img src=\"/images/WAM-Banner.jpg\" alt=\"\" style=\"width:100%;\">\n      </div>\n\n    </div>\n\n\n  </panel>\n\n  <checker-dashboard ></checker-dashboard>\n</div>\n"

/***/ },

/***/ 795:
/***/ function(module, exports) {

module.exports = "<h3 class=\"description\">Total Score: {{data.total_score.toFixed(3)}}</h3>\n<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--4-col\" *ngFor=\"let result of data.subs\">\n    <div style=\"display: block\">\n      <canvas baseChart\n              [data]=\"result.ratio\"\n              [labels]=\"['Bad', 'Good']\"\n              [chartType]=\"'doughnut'\"></canvas>\n      <div class=\"description\" style=\"text-align: center\">Score of {{result.name}}:{{!result.present ? '(not present)' : result.score.toFixed(3)}} </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 796:
/***/ function(module, exports) {

module.exports = "<h3 class=\"description\">Average Readability Score: {{averageScore}}</h3>\n<h3 class=\"description\">Surprisal Word Ratio: {{surpriseWordRatio * 100}}%</h3>\n<div class=\"mdl-grid\">\n  <div class=\"mdl-cell mdl-cell--6-col\">\n    <div style=\"display: block\">\n      <canvas baseChart\n              [data]=\"supriseWordCount\"\n              [labels]=\"['Surprisal', 'Unsurprisal']\"\n              [chartType]=\"'doughnut'\"></canvas>\n      <div class=\"description\" style=\"text-align: center\">Surprisal / Unsurprisal words ratio</div>\n    </div>\n  </div>\n\n  <div class=\"mdl-cell mdl-cell--4-col\">\n\n    <table class=\"mdl-data-table mdl-js-data-table mdl-data-table--selectable\">\n      <thead>\n      <tr>\n        <th class=\"mdl-data-table__cell--non-numeric\">Surprisal Word</th>\n        <th>Score</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let word of surpriseWords\">\n        <td class=\"mdl-data-table__cell--non-numeric\">{{word.text}}</td>\n        <td>{{word.score}}</td>\n      </tr>\n      </tbody>\n    </table>\n\n  </div>\n\n</div>\n<show-details title=\"Sentences\">\n  <div class=\"detail\">\n    <sentence *ngFor=\"let sent of sentences\" [sentence]=\"sent\"></sentence>\n  </div>\n</show-details>\n"

/***/ },

/***/ 797:
/***/ function(module, exports) {

module.exports = "<panel>\n  <h3> <mdl-icon>{{icon}}</mdl-icon> {{title}}</h3>\n  <ng-content>\n  </ng-content>\n  <mdl-table-selectable mdl-shadow=\"2\"\n                        [table-model]=\"tableModel\"\n                        (table-model-selectionChanged)=\"selectionChanged($event)\">\n  </mdl-table-selectable>\n</panel>\n"

/***/ },

/***/ 798:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <panel padding=\"2rem\">\n    <h2> <mdl-icon>remove_red_eye</mdl-icon> Readability Assessment</h2>\n    <paragraph title=\"Description:\">\n      our model focuses on automatically identify surprisal words in a text, which indicate the words to be disagree with context so that barriers could hinder the reader. The surprisal value of word is defined as the dissimilarity between current word and previous word. The dissimilarity could be understood as arbitrary combination of words occur less frequently in the corpus that hinder the reader.\n    </paragraph>\n    <paragraph title=\"How To Use:\">\n      copy the url of the webpage to the following textbox and click \"TEST\" button, the result will be the readability of the words. The lower the readability, the lower the score.\n    </paragraph>\n    <paragraph title=\"Test Panel:\">\n      <div class=\"test-panel\">\n        <div class=\"mdl-grid\">\n          <div class=\"mdl-cell mdl-cell--8-col\">\n            <mdl-textfield style=\"width:100%;\" label=\"URL to test\" floating-label [(ngModel)]=\"url\"></mdl-textfield>\n          </div>\n          <div class=\"mdl-cell mdl-cell-2-col\">\n            <button class=\"inline-button\" mdl-button mdl-button-type=\"raised\" mdl-colored=\"primary\" mdl-ripple (click)=\"test()\">test</button>\n          </div>\n        </div>\n      </div>\n    </paragraph>\n\n    <paragraph title=\"Result:\" *ngIf=\"result || isloading\">\n      <div>\n        <mdl-spinner class=\"inline-button\" [active]=\"isloading\" *ngIf=\"isloading\"></mdl-spinner>\n        <div *ngIf=\"!isloading || result\">\n          <!--<div class=\"sentence\" *ngFor=\"let sent of sentences\">-->\n            <!--<div class=\"word\" *ngFor=\"let word of sent; let i = index\"  >-->\n              <!--<span *ngIf=\"i !=0\">&nbsp;</span> <span  [style.color]=\"'red'\" [style.opacity]=\"word.score * 0.66 + 0.33\">{{word.text}}</span>-->\n            <!--</div>-->\n          <!--</div>-->\n          <readability-assessment [data]=\"result\"></readability-assessment>\n        </div>\n\n      </div>\n    </paragraph>\n\n  </panel>\n</div>\n"

/***/ },

/***/ 799:
/***/ function(module, exports) {

module.exports = "<div class=\"panel-container mdl-color--white\" [style.padding]=\"padding\" mdl-shadow=\"4\">\n  <ng-content></ng-content>\n</div>\n"

/***/ },

/***/ 800:
/***/ function(module, exports) {

module.exports = "<div>\n  <h4 class=\"description\">{{title}}</h4>\n  <div class=\"paragraph\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"

/***/ },

/***/ 801:
/***/ function(module, exports) {

module.exports = "<div style=\"font-size: 1.5rem; word-wrap: break-word\">\n  <span style=\"display: inline\" *ngFor=\"let wordInfo of sentence\" [style.color]=\"'red'\" [style.opacity]=\"0.5 + wordInfo.score\">{{wordInfo.text}} </span>.\n</div>\n"

/***/ },

/***/ 802:
/***/ function(module, exports) {

module.exports = "<div>\n  <h4>{{title}}</h4>\n  <ng-content select=\".summary\"></ng-content>\n  <button mdl-button (click)=\"showDetail()\" *ngIf=\"!isShowDetail\" mdl-colored=\"accent\">show details</button>\n  <div *ngIf=\"isShowDetail\">\n    <ng-content select=\".detail\"></ng-content>\n  </div>\n</div>\n"

/***/ },

/***/ 803:
/***/ function(module, exports) {

module.exports = "<p>\n  sticky works!\n</p>\n"

/***/ },

/***/ 822:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(463);


/***/ }

},[822]);
//# sourceMappingURL=main.bundle.map
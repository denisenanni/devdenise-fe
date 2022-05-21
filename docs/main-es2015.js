(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./under-construction/under-construction.component */ "./src/app/under-construction/under-construction.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _projects_and_skills_projects_and_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects-and-skills/projects-and-skills.component */ "./src/app/projects-and-skills/projects-and-skills.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");









const routes = [
    // { path: '',   redirectTo: '/under-construction', pathMatch: 'full' },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"], data: { animation: 'Blog' } },
    {
        path: 'article/:id',
        component: _article_article_component__WEBPACK_IMPORTED_MODULE_6__["ArticleComponent"],
        data: { animation: 'Article' },
    },
    {
        path: 'projects',
        component: _projects_and_skills_projects_and_skills_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsAndSkillsComponent"],
        data: { animation: 'ProjectsAndSkills' },
    },
    { path: 'under-construction', component: _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_3__["UnderConstructionComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route-animation */ "./src/app/route-animation.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");







const _c0 = function (a0) { return { "background-image": a0 }; };
class AppComponent {
    constructor(appService) {
        this.appService = appService;
        this.title = 'DevDenise';
        this.isMobile = appService.isMobile;
        this.backgroundImage = this.isMobile ? '../assets/bg.jpg' : '../assets/bg-desktop.jpg';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 4, consts: [[1, "background", 3, "ngStyle"], ["o", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "footer");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + ctx.backgroundImage + ")"))("@routeAnimations", _r0 && _r0.activatedRouteData && _r0.activatedRouteData["animation"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["footer {\n  background-color: rgba(0, 0, 0, 0.5);\n  height: 1.5rem;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlbmlzZS9BcHBzL2RldmRlbmlzZS1mZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbn1cbiIsImZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbn0iXX0= */"], encapsulation: 2, data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: WIP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIP", function() { return WIP; });
const WIP = "Work in progress";


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./under-construction/under-construction.component */ "./src/app/under-construction/under-construction.component.ts");
/* harmony import */ var _article_card_article_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./article-card/article-card.component */ "./src/app/article-card/article-card.component.ts");
/* harmony import */ var _article_article_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./article/article.component */ "./src/app/article/article.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _directives_goback_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/goback.directive */ "./src/app/directives/goback.directive.ts");
/* harmony import */ var _projects_and_skills_projects_and_skills_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./projects-and-skills/projects-and-skills.component */ "./src/app/projects-and-skills/projects-and-skills.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./project-card/project-card.component */ "./src/app/project-card/project-card.component.ts");





















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"].forRoot({ name: 'default' }),
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_8__["UnderConstructionComponent"],
        _article_card_article_card_component__WEBPACK_IMPORTED_MODULE_9__["ArticleCardComponent"],
        _article_article_component__WEBPACK_IMPORTED_MODULE_10__["ArticleComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"],
        _directives_goback_directive__WEBPACK_IMPORTED_MODULE_14__["GobackDirective"],
        _projects_and_skills_projects_and_skills_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsAndSkillsComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
        _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_18__["ProjectCardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_8__["UnderConstructionComponent"],
                    _article_card_article_card_component__WEBPACK_IMPORTED_MODULE_9__["ArticleCardComponent"],
                    _article_article_component__WEBPACK_IMPORTED_MODULE_10__["ArticleComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
                    _blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"],
                    _directives_goback_directive__WEBPACK_IMPORTED_MODULE_14__["GobackDirective"],
                    _projects_and_skills_projects_and_skills_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsAndSkillsComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                    _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_18__["ProjectCardComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"].forRoot({ name: 'default' }),
                    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                ],
                providers: [_app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _assets_articles_article_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/articles/article_cards */ "./src/assets/articles/article_cards.ts");
/* harmony import */ var _assets_articles_article1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/articles/article1 */ "./src/assets/articles/article1.ts");
/* harmony import */ var _assets_projects_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/projects/projects */ "./src/assets/projects/projects.ts");






class AppService {
    constructor() {
        this.isMobile = this.isMobileDevice();
    }
    isMobileDevice() {
        return /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent);
    }
    getArticlesCards() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_assets_articles_article_cards__WEBPACK_IMPORTED_MODULE_2__["article_cards"]);
    }
    getArticleById(id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_assets_articles_article1__WEBPACK_IMPORTED_MODULE_3__["article1"]);
    }
    getProjects() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_assets_projects_projects__WEBPACK_IMPORTED_MODULE_4__["projects"]);
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/article-card/article-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/article-card/article-card.component.ts ***!
  \********************************************************/
/*! exports provided: ArticleCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleCardComponent", function() { return ArticleCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class ArticleCardComponent {
    constructor(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
    }
    goToArticle() {
        this.router.navigate(['/article', this.articleCard.id]);
    }
}
ArticleCardComponent.ɵfac = function ArticleCardComponent_Factory(t) { return new (t || ArticleCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ArticleCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleCardComponent, selectors: [["ArticleCardComponent"]], inputs: { articleCard: "articleCard" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 1, consts: [[1, "card", "w-100", "text-center"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "card-link", 3, "click"]], template: function ArticleCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleCardComponent_Template_button_click_5_listener() { return ctx.goToArticle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Read more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.articleCard.title, " ");
    } }, styles: ["div.card.w-100[_ngcontent-%COMP%] {\n  width: 80vw;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\na.card-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlbmlzZS9BcHBzL2RldmRlbmlzZS1mZS9zcmMvYXBwL2FydGljbGUtY2FyZC9hcnRpY2xlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FydGljbGUtY2FyZC9hcnRpY2xlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esb0NBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUtY2FyZC9hcnRpY2xlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY2FyZC53LTEwMCB7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5hLmNhcmQtbGluayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSIsImRpdi5jYXJkLnctMTAwIHtcbiAgd2lkdGg6IDgwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuYS5jYXJkLWxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ArticleCardComponent',
                templateUrl: './article-card.component.html',
                styleUrls: ['./article-card.component.scss'],
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { articleCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/article/article.component.ts":
/*!**********************************************!*\
  !*** ./src/app/article/article.component.ts ***!
  \**********************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _directives_goback_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../directives/goback.directive */ "./src/app/directives/goback.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ArticleComponent_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", section_r5.section, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", section_r5.imageLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ArticleComponent_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 13);
} if (rf & 2) {
    const resource_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", resource_r6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ArticleComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ArticleComponent_div_5_div_4_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ArticleComponent_div_5_div_6_Template, 1, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.article.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.article.sections);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.article.resources);
} }
function ArticleComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.notFoundMessage);
} }
class ArticleComponent {
    constructor(activatedRoute, appService) {
        this.activatedRoute = activatedRoute;
        this.appService = appService;
        this.notFoundMessage = _app_constants__WEBPACK_IMPORTED_MODULE_1__["WIP"];
        this.getRouteParam();
    }
    ngOnInit() { }
    getRouteParam() {
        this.activatedRoute.params.subscribe((parameter) => {
            this.idArticle = parameter.id;
            this.getArticle();
        });
    }
    getArticle() {
        this.appService.getArticleById(this.idArticle).subscribe((resp) => {
            this.article = resp;
            this.success = 'OK';
            this.error = null;
        }, (resp) => {
            this.success = null;
            this.error = resp.error.message;
        });
    }
}
ArticleComponent.ɵfac = function ArticleComponent_Factory(t) { return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"])); };
ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleComponent, selectors: [["app-article"]], decls: 12, vars: 2, consts: [[1, "container", "main", "hideSB"], [1, "row", "p-4"], [1, "col"], ["goback", ""], ["class", "row p-4", 4, "ngIf", "ngIfElse"], ["notFound", ""], [1, "row", "p-4", "text-center"], [1, "font-weight-bold", "text-center"], [4, "ngFor", "ngForOf"], [1, "resources"], ["class", "mt-3 mb-3 rrrr", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "content", "imageLink", 3, "innerHTML"], [3, "src"], [1, "mt-3", "mb-3", "rrrr", 3, "innerHTML"]], template: function ArticleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ArticleComponent_div_5_Template, 7, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ArticleComponent_ng_template_6_Template, 3, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.article)("ngIfElse", _r1);
    } }, directives: [_directives_goback_directive__WEBPACK_IMPORTED_MODULE_4__["GobackDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["div.container.main[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  overflow-y: scroll;\n}\n\n\n\n.hideSB[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n\n\n.hideSB[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  \n  scrollbar-width: none;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlbmlzZS9BcHBzL2RldmRlbmlzZS1mZS9zcmMvYXBwL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBLGdEQUFBOztBQUNBO0VBQ0UsYUFBQTtBQ0NGOztBREVBLDRDQUFBOztBQUNBO0VBQ0Usd0JBQUE7RUFBMEIsZ0JBQUE7RUFDMUIscUJBQUE7RUFBdUIsWUFBQTtBQ0d6QiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jb250YWluZXIubWFpbiB7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cbi5oaWRlU0I6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXG4uaGlkZVNCIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbn1cblxuXG4iLCJkaXYuY29udGFpbmVyLm1haW4ge1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXG4uaGlkZVNCOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xuLmhpZGVTQiB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgLyogSUUgYW5kIEVkZ2UgKi9cbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAvKiBGaXJlZm94ICovXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-article',
                templateUrl: './article.component.html',
                styleUrls: ['./article.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _directives_goback_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/goback.directive */ "./src/app/directives/goback.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _article_card_article_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../article-card/article-card.component */ "./src/app/article-card/article-card.component.ts");







function BlogComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ArticleCardComponent", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const articleCard_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("articleCard", articleCard_r4);
} }
function BlogComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlogComponent_div_5_div_1_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.articlesCards);
} }
function BlogComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.notFoundMessage);
} }
class BlogComponent {
    constructor(appService) {
        this.appService = appService;
        this.notFoundMessage = _app_constants__WEBPACK_IMPORTED_MODULE_1__["WIP"];
    }
    ngOnInit() {
        this.getArticlesCards();
    }
    getArticlesCards() {
        this.appService.getArticlesCards().subscribe(resp => {
            this.articlesCards = resp;
        });
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["blog"]], decls: 12, vars: 2, consts: [[1, "container"], [1, "row", "p-4"], [1, "col"], ["goback", ""], ["class", "row p-4 d-flex justify-content-center", 4, "ngIf", "ngIfElse"], ["notFound", ""], [1, "row", "p-4", "text-center"], [1, "row", "p-4", "d-flex", "justify-content-center"], ["class", "col col-lg-10 col-md-10 col-sm-12 mb-4", 4, "ngFor", "ngForOf"], [1, "col", "col-lg-10", "col-md-10", "col-sm-12", "mb-4"], [3, "articleCard"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BlogComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BlogComponent_ng_template_6_Template, 4, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.articlesCards)("ngIfElse", _r1);
    } }, directives: [_directives_goback_directive__WEBPACK_IMPORTED_MODULE_3__["GobackDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _article_card_article_card_component__WEBPACK_IMPORTED_MODULE_5__["ArticleCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.scss'],
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/directives/goback.directive.ts":
/*!************************************************!*\
  !*** ./src/app/directives/goback.directive.ts ***!
  \************************************************/
/*! exports provided: GobackDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GobackDirective", function() { return GobackDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class GobackDirective {
    constructor(location) {
        this.location = location;
    }
    onClick() {
        this.location.back();
    }
}
GobackDirective.ɵfac = function GobackDirective_Factory(t) { return new (t || GobackDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
GobackDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: GobackDirective, selectors: [["", "goback", ""]], hostBindings: function GobackDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GobackDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GobackDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[goback]'
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["footer"]], decls: 2, vars: 0, consts: [[1, "container-fluid", "text-center"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A92020 DevDenise\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div.container-fluid[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlbmlzZS9BcHBzL2RldmRlbmlzZS1mZS9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jb250YWluZXItZmx1aWQge1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG59IiwiZGl2LmNvbnRhaW5lci1mbHVpZCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");



class HomeComponent {
    constructor() {
        this.linkedinProfile = 'https://www.linkedin.com/in/denise-nanni/';
        this.gitHubProfile = 'https://github.com/denisenanni';
        this.soundCloudProfile = 'https://soundcloud.com/denise-nanni';
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["home"]], decls: 20, vars: 3, consts: [[1, "container"], [1, "row", "text-center"], [1, "col", "home-heading"], [1, "home-heading"], [1, "row", "justify-content-center"], [1, "img-container", "col-lg-5", "col-md-5", "col"], ["src", "../../assets/pic-site.png", "alt", "devdenise", 1, "img-fluid", "rounded-circle"], [1, "container", "mt-4", "d-flex", "justify-content-center"], [1, "social-links", "m-3"], ["target", "_blank", 3, "href"], ["src", "./../../assets/github-icon.png", "alt", "Facebook", "width", "30", "height", "30", 1, "icons"], ["src", "./../../assets/linkedin-icon.png", "alt", "Facebook", "width", "30", "height", "30", 1, "icons"], ["src", "./../../assets/soundcloud-icon.png", "alt", "Facebook", "width", "30", "height", "30", 1, "icons"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Devdenise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.gitHubProfile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.linkedinProfile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.soundCloudProfile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]], styles: ["div.img-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nimg.img-fluid[_ngcontent-%COMP%] {\n  max-width: 22vw;\n  border: 2px solid;\n}\n\ndiv.col.home-heading[_ngcontent-%COMP%] {\n  margin-top: 13vh;\n}\n\nh1.home-heading[_ngcontent-%COMP%] {\n  font-size: 6vw;\n  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;\n  max-width: 80vh;\n  height: auto;\n  margin: 0 auto;\n  margin-bottom: 4vh;\n}\n\nimg[_ngcontent-%COMP%] {\n  transition: height 0.9s;\n  transition-timing-function: ease-out;\n}\n\ndiv.social-links[_ngcontent-%COMP%] {\n  display: inline;\n}\n\nimg.icons[_ngcontent-%COMP%]:hover {\n  height: 40px;\n  width: 40px;\n}\n\n@media only screen and (hover: none) and (pointer: coarse) {\n  h1.home-heading[_ngcontent-%COMP%] {\n    font-size: 10vw;\n  }\n\n  img.img-fluid[_ngcontent-%COMP%] {\n    max-width: 38vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlbmlzZS9BcHBzL2RldmRlbmlzZS1mZS9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxvSkFBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FER0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0FGOztBRElBO0VBQ0U7SUFDRSxlQUFBO0VDREY7O0VESUE7SUFDRSxlQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5pbWctY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbWcuaW1nLWZsdWlkIHtcbiAgbWF4LXdpZHRoOiAyMnZ3O1xuICBib3JkZXI6IDJweCBzb2xpZDtcbn1cbmRpdi5jb2wuaG9tZS1oZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogMTN2aDtcbn1cblxuaDEuaG9tZS1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiA2dnc7XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZmZmLCAwIDAgMjBweCAjZmZmLCAwIDAgMzBweCAjZmZmLCAwIDAgNDBweCAjZmYwMGRlLFxuICAgIDAgMCA3MHB4ICNmZjAwZGUsIDAgMCA4MHB4ICNmZjAwZGUsIDAgMCAxMDBweCAjZmYwMGRlLCAwIDAgMTUwcHggI2ZmMDBkZTtcbiAgbWF4LXdpZHRoOiA4MHZoO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA0dmg7XG59XG5cbmltZyB7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjlzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cbmRpdi5zb2NpYWwtbGlua3Mge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIFxufVxuXG5pbWcuaWNvbnM6aG92ZXJ7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoaG92ZXI6IG5vbmUpIGFuZCAocG9pbnRlcjogY29hcnNlKSB7XG4gIGgxLmhvbWUtaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAxMHZ3O1xuICB9XG5cbiAgaW1nLmltZy1mbHVpZCB7XG4gICAgbWF4LXdpZHRoOiAzOHZ3O1xuICB9XG59XG4iLCJkaXYuaW1nLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW1nLmltZy1mbHVpZCB7XG4gIG1heC13aWR0aDogMjJ2dztcbiAgYm9yZGVyOiAycHggc29saWQ7XG59XG5cbmRpdi5jb2wuaG9tZS1oZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogMTN2aDtcbn1cblxuaDEuaG9tZS1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiA2dnc7XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZmZmLCAwIDAgMjBweCAjZmZmLCAwIDAgMzBweCAjZmZmLCAwIDAgNDBweCAjZmYwMGRlLCAwIDAgNzBweCAjZmYwMGRlLCAwIDAgODBweCAjZmYwMGRlLCAwIDAgMTAwcHggI2ZmMDBkZSwgMCAwIDE1MHB4ICNmZjAwZGU7XG4gIG1heC13aWR0aDogODB2aDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNHZoO1xufVxuXG5pbWcge1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC45cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuXG5kaXYuc29jaWFsLWxpbmtzIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG5pbWcuaWNvbnM6aG92ZXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChob3Zlcjogbm9uZSkgYW5kIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgaDEuaG9tZS1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDEwdnc7XG4gIH1cblxuICBpbWcuaW1nLWZsdWlkIHtcbiAgICBtYXgtd2lkdGg6IDM4dnc7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class MenuComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["menu"]], decls: 4, vars: 0, consts: [[1, "menu"], ["routerLink", "/projects"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PROJECTS AND SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["ul.menu[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 100%;\n  list-style-type: none;\n  margin: 5vh auto;\n  padding: 0;\n  display: block;\n  border-top: 0.5px solid #fff;\n}\n\nul.menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 1vw;\n  padding: 0;\n  transition: padding 0.5s, background-color 0.5s;\n  transition-timing-function: ease-out;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  font-size: 2vw;\n}\n\nul.menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n  background-color: rgba(7, 10, 26, 0.6);\n  padding: 1vw;\n}\n\n@media only screen and (hover: none) and (pointer: coarse) {\n  li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: initial;\n  }\n\n  ul.menu[_ngcontent-%COMP%] {\n    border-top: none;\n  }\n\n  ul.menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    display: block;\n    padding: 0.2rem;\n  }\n\n  li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n    background-color: rgba(7, 10, 26, 0.6);\n    padding: 1vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlbmlzZS9BcHBzL2RldmRlbmlzZS1mZS9zcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSwrQ0FBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLHNDQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxrQkFBQTtFQ0NGOztFREVBO0lBQ0UsZ0JBQUE7RUNDRjs7RURFQTtJQUNFLGNBQUE7SUFDQSxlQUFBO0VDQ0Y7O0VERUE7SUFDRSxzQ0FBQTtJQUNBLFlBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwubWVudSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogNXZoIGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjZmZmO1xufVxuXG51bC5tZW51ID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAxdnc7XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zaXRpb246IHBhZGRpbmcgMC41cywgYmFja2dyb3VuZC1jb2xvciAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cbmxpIGEge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDJ2dztcbn1cblxudWwubWVudSA+IGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCAxMCwgMjYsIDAuNik7XG4gIHBhZGRpbmc6IDF2dztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoaG92ZXI6IG5vbmUpIGFuZCAocG9pbnRlcjogY29hcnNlKSB7XG4gIGxpIGEge1xuICAgIGZvbnQtc2l6ZTogaW5pdGlhbDtcbiAgfVxuXG4gIHVsLm1lbnUge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cblxuICB1bC5tZW51ID4gbGkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAuMnJlbTtcbiAgfVxuXG4gIGxpIGE6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcsIDEwLCAyNiwgMC42KTtcbiAgICBwYWRkaW5nOiAxdnc7XG4gIH1cbn1cbiIsInVsLm1lbnUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDV2aCBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXRvcDogMC41cHggc29saWQgI2ZmZjtcbn1cblxudWwubWVudSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMXZ3O1xuICBwYWRkaW5nOiAwO1xuICB0cmFuc2l0aW9uOiBwYWRkaW5nIDAuNXMsIGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuXG5saSBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAydnc7XG59XG5cbnVsLm1lbnUgPiBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNywgMTAsIDI2LCAwLjYpO1xuICBwYWRkaW5nOiAxdnc7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKGhvdmVyOiBub25lKSBhbmQgKHBvaW50ZXI6IGNvYXJzZSkge1xuICBsaSBhIHtcbiAgICBmb250LXNpemU6IGluaXRpYWw7XG4gIH1cblxuICB1bC5tZW51IHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICB9XG5cbiAgdWwubWVudSA+IGxpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwLjJyZW07XG4gIH1cblxuICBsaSBhOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCAxMCwgMjYsIDAuNik7XG4gICAgcGFkZGluZzogMXZ3O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/project-card/project-card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/project-card/project-card.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCardComponent", function() { return ProjectCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ProjectCardComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectCardComponent_div_8_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.goToProject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Go to project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectCardComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectCardComponent_ng_template_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.goToProject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Go to project ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
class ProjectCardComponent {
    constructor(router, appService) {
        this.router = router;
        this.appService = appService;
    }
    ngOnInit() {
        this.mobile = this.appService.isMobile;
    }
    goToProject() {
        window.open(this.project.link, '_blank');
    }
}
ProjectCardComponent.ɵfac = function ProjectCardComponent_Factory(t) { return new (t || ProjectCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"])); };
ProjectCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectCardComponent, selectors: [["ProjectCardComponent"]], inputs: { project: "project" }, decls: 11, vars: 7, consts: [[1, "card", "m-4", 3, "ngStyle"], [1, "layer", "text-center"], [1, "card-header"], [1, "card-title", "font-weight-bold"], [1, "card-body"], [1, "card-text"], [4, "ngIf", "ngIfElse"], ["desktop", ""], [3, "click"], [1, "footer", "w-100"], [1, "btn", "btn-outline-light", "btn-lg", 3, "click"]], template: function ProjectCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectCardComponent_div_8_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectCardComponent_ng_template_9_Template, 3, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "url(" + ctx.project.imageLink + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["div.card[_ngcontent-%COMP%] {\n  background: transparent;\n  height: auto;\n  background-size: cover;\n  border: transparent;\n}\n\na.card-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ndiv.layer[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n  height: inherit;\n  padding: 1rem;\n}\n\np.card-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlbmlzZS9BcHBzL2RldmRlbmlzZS1mZS9zcmMvYXBwL3Byb2plY3QtY2FyZC9wcm9qZWN0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2plY3QtY2FyZC9wcm9qZWN0LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEUUE7RUFDSSxlQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0LWNhcmQvcHJvamVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmNhcmQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXI6IHRyYW5zcGFyZW50O1xufVxuXG5hLmNhcmQtbGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2LmxheWVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDFyZW07XG5cbn1cblxuXG5kaXYuZm9vdGVyIHtcblxufVxuXG5wLmNhcmQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufSIsImRpdi5jYXJkIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbn1cblxuYS5jYXJkLWxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5sYXllciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG5wLmNhcmQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ProjectCardComponent',
                templateUrl: './project-card.component.html',
                styleUrls: ['./project-card.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }]; }, { project: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/projects-and-skills/projects-and-skills.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/projects-and-skills/projects-and-skills.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProjectsAndSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsAndSkillsComponent", function() { return ProjectsAndSkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _directives_goback_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/goback.directive */ "./src/app/directives/goback.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project-card/project-card.component */ "./src/app/project-card/project-card.component.ts");






function ProjectsAndSkillsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ProjectCardComponent", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", p_r2);
} }
function ProjectsAndSkillsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3);
} }
class ProjectsAndSkillsComponent {
    constructor(appService) {
        this.appService = appService;
        this.getProjects();
    }
    ngOnInit() {
        this.skills = ['Java 8', 'Spring Boot', 'Hibernate/JPA', 'SQL', 'MySQL/Postgres', 'Angular 7+', 'HTML/CSS/Bootstrap', 'AWS S3', 'AWS EC2', 'AWS Route53', 'Git', 'React', 'Vim'];
    }
    getProjects() {
        this.appService.getProjects().subscribe((r) => {
            this.projects = r;
            this.success = 'OK';
            this.error = null;
        }, (r) => {
            this.error = r.error;
            this.success = null;
        });
    }
}
ProjectsAndSkillsComponent.ɵfac = function ProjectsAndSkillsComponent_Factory(t) { return new (t || ProjectsAndSkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
ProjectsAndSkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsAndSkillsComponent, selectors: [["projects-and-skills"]], decls: 19, vars: 2, consts: [[1, "container"], [1, "row", "p-4"], [1, "col"], ["goback", ""], [1, "title", "row", "p-4", "d-flex"], [1, "row", "p-4", "d-flex", "justify-content-center"], ["class", "col col-lg-6 col-md-10 col-12 mb-4", 4, "ngFor", "ngForOf"], [1, "title", "row", "p-4", "d-flex", "mb-4"], [4, "ngFor", "ngForOf"], [1, "row", "back", "p-4", "text-center"], [1, "col", "col-lg-6", "col-md-10", "col-12", "mb-4"], [3, "project"], [1, "skills"]], template: function ProjectsAndSkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProjectsAndSkillsComponent_div_9_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProjectsAndSkillsComponent_div_14_Template, 4, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
    } }, directives: [_directives_goback_directive__WEBPACK_IMPORTED_MODULE_2__["GobackDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_4__["ProjectCardComponent"]], styles: ["button[_ngcontent-%COMP%] {\n  padding: 0.5vh;\n  margin: 0.5vh;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\ndiv.project[_ngcontent-%COMP%] {\n  width: 30vw;\n}\n\ndiv.title[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #fff;\n  margin: 0 auto;\n}\n\ndiv.skills[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n@media only screen and (hover: none) and (pointer: coarse) {\n  div.project[_ngcontent-%COMP%] {\n    width: 80vw;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlbmlzZS9BcHBzL2RldmRlbmlzZS1mZS9zcmMvYXBwL3Byb2plY3RzLWFuZC1za2lsbHMvcHJvamVjdHMtYW5kLXNraWxscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdHMtYW5kLXNraWxscy9wcm9qZWN0cy1hbmQtc2tpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsY0FBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy1hbmQtc2tpbGxzL3Byb2plY3RzLWFuZC1za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBwYWRkaW5nOiAwLjV2aDtcbiAgbWFyZ2luOiAwLjV2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG5kaXYucHJvamVjdCB7XG4gIHdpZHRoOiAzMHZ3O1xufVxuXG5kaXYudGl0bGUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmRpdi5za2lsbHMge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoaG92ZXI6IG5vbmUpIGFuZCAocG9pbnRlcjogY29hcnNlKSB7XG4gIGRpdi5wcm9qZWN0IHtcbiAgICB3aWR0aDogODB2dztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuIiwiYnV0dG9uIHtcbiAgcGFkZGluZzogMC41dmg7XG4gIG1hcmdpbjogMC41dmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuZGl2LnByb2plY3Qge1xuICB3aWR0aDogMzB2dztcbn1cblxuZGl2LnRpdGxlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5kaXYuc2tpbGxzIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKGhvdmVyOiBub25lKSBhbmQgKHBvaW50ZXI6IGNvYXJzZSkge1xuICBkaXYucHJvamVjdCB7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsAndSkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'projects-and-skills',
                templateUrl: './projects-and-skills.component.html',
                styleUrls: ['./projects-and-skills.component.scss'],
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/route-animation.ts":
/*!************************************!*\
  !*** ./src/app/route-animation.ts ***!
  \************************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('ProjectsAndSkills => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => ProjectsAndSkills', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Blog => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => Blog', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }))
            ], { optional: true }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))
            ], { optional: true }),
        ])
    ])
]);


/***/ }),

/***/ "./src/app/under-construction/under-construction.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/under-construction/under-construction.component.ts ***!
  \********************************************************************/
/*! exports provided: UnderConstructionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderConstructionComponent", function() { return UnderConstructionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UnderConstructionComponent {
    constructor() { }
    ngOnInit() {
    }
}
UnderConstructionComponent.ɵfac = function UnderConstructionComponent_Factory(t) { return new (t || UnderConstructionComponent)(); };
UnderConstructionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnderConstructionComponent, selectors: [["app-under-construction"]], decls: 4, vars: 0, consts: [[1, "row"], [1, "col", "text-center"], [1, "animate__animated", "animate__bounceInRight"]], template: function UnderConstructionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Under construction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuZGVyLWNvbnN0cnVjdGlvbi91bmRlci1jb25zdHJ1Y3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnderConstructionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-under-construction',
                templateUrl: './under-construction.component.html',
                styleUrls: ['./under-construction.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/assets/articles/article1.ts":
/*!*****************************************!*\
  !*** ./src/assets/articles/article1.ts ***!
  \*****************************************/
/*! exports provided: article1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "article1", function() { return article1; });
const article1 = {
    id: 1,
    title: "How to set up a WordPress site on an EC2 AWS instance with an SSL certificate",
    sections: [
        { section: "<h3>Step 1 – Get a domain name</h3><p> Access to you AWS management console and select the service Route53. </p> <p>Type in your domain and click ‘Check’. Once you found the right available domain proceed adding to chart.<br>Select the wanted option (at this point I opt for the version without www, which can be added later as an alias). The domain registration at this point will be in process.</p> <p> Once processed the request, you’ll be able to see your domain clicking on the option ‘Registered domains’ on the left-hand menu. We’ll come back here later to create the record sets.</p>",
            imageLink: "https://devdenise.s3.eu-west-3.amazonaws.com/articles/1/pending-domain-1200x487.jpg" },
        { section: "<h3>Step 2 – Create the EC2 instance</h3><p>Select EC2 among the services in the console. Select ‘Instances’ in the left-hand menu and ‘Launch Instance’ in the top-right corner of the window.<br> Select Amazon MarketPlace from the options on the left and search for WordPress Certified by Bitnami and Automattic, once selected it will show you the pricing.<br> It is possible to select an instance type free-tier eligible.<br> At this point click ‘Review and Launch’. It will prompt you for defining a key value pair, which we will need to SSH into our instance.<br> You can pick up one already existing (make sure you downloaded it when you created it) or you can create and download a new one.<br>  After you downloaded the .pem file proceed clicking launch instance.<br> Selecting the instance you can see now the public DNS of it, we will need it to SSH into it. </p>",
            imageLink: "https://devdenise.s3.eu-west-3.amazonaws.com/articles/1/initializing-instance-1200x486.jpg" },
        { section: "<h3>Step 3 – Request an SSL certificate from AWS </h3> <p> Select ‘Certificate Manager’ in the AWS console.<br> Click ‘Request a certificate’. Go on with the default options.<br> Add the domain name(s) for which your are requesting it. <br> At this point you’ll probably want to add the 2 version of your domain (with and without ‘www’).<br> Select ‘Next’ and choose the type of validation.<br> I go with the email validation, because it’s quicker, but in case you are not the admin of the account you’ll have to go with the DNS validation.<br> Click ‘Review’ and confirm the request. Select ‘Continue’.<br> If you chose to validate through email you’ll receive an email for every domain you picked, click on the link in the email and click ‘I approve’.<br> </p>",
            imageLink: "https://devdenise.s3.eu-west-3.amazonaws.com/articles/1/ssl-pending.jpg" },
        { section: "<h3>Step 4 – Create a load balancer and target group with associated certificate</h3> <p>   After the certificate is approved we can proceed creating the load balancer . Log into the EC2 dashboard.<br> Select Load Balancer from the left-hand menu. </p> <p>  Click ‘Create load balancer’ and select ‘Application load balancer’. Write a name for it.<br> Add a listener with protocol HTTPS. </p> <p> Select at least 2 availability zones. Proceed clicking ‘Configure security settings’.<br> Select your certificate from the dropdown list and leave the default options for the rest. Click ‘Configure Security Groups’.<br> Select the option ‘Create a new security group’.  You’ll need to add 2 rules with the following option selected:<br> Type : HTTP<br> Source: Anywhere<br>  Type : HTTPS<br> Source: Anywhere<br> </p> <p> Click ‘Configure routing’. Give a name to the target group and click ‘Register target’.<br> In the next window, select your instance at the bottom and click ‘Add to registered’. Click ‘Review’ and then ‘Create’.<br> UPDATE: In order to redirect http to https, once your load balancer is active select it in the panel and select the tab ‘Listeners’.<br> Select “View/edit rules”. Click ‘Edit rules’, eliminate the default action and add the action ‘Redirect to..’, select ‘HTTPS’ on port 443 and update the rule.<br> </p> <h3>Step 5 –  Create the alias records</h3> <p> Let’s go back to Route 53. Select your hosted zone and click ‘Add record set’. </p> <p> One record will be without ‘www’, type A-iPv4. Check the option alias and select your load balancer from the dropdown list.  Repeat the same procedure for the domain with ‘www’. </p>",
            imageLink: "https://devdenise.s3.eu-west-3.amazonaws.com/articles/1/load-balancer-select.jpg" },
        { section: "<h3>Step6–SSHintotheinstance</h3><p>At this point your instance is up and running with the domain name you chose.<br>However to make the certificate effective we’ll need to modify the config file ofour instance.<br>To do so we will need the .pem file downloaded before.<br>The following procedure works on linux and mac.<br>Openaterminal.<br>Typethistochangethefilepermissionsofthe.pemfile<br>chmod600/path-to-your-key.pem<br>Thentypethistosshintotheinstance,usingtheDNSaddressyousawontheEC2panel:<br></p><code>sshbitnami@ec2-17-08-02-19.compute-1.amazonaws.com-i/path-to-your-key.pem</code><p>Typein‘yes’ifitasksyouifyouaresureyouwanttoconnect.<br>Nowwecanseeourapplicationcredentials.<br>Typeincat./bitnami_credentials.Youwillseesomethinglike:<br>Thedefaultusernameandpasswordis'user'and'YUrahstyU'.<br>Thesearethecredentialstoaccessyourwordpressdahsboard.<br>Typein:</p><code>vim/opt/bitnami/apps/wordpress/htdocs/wp-config.php</code><p>Lookfortheselines:</p><code>define('WP_SITEURL','http://'.$_SERVER['HTTP_HOST'].'/');<br>define('WP_HOME','http://'.$_SERVER['HTTP_HOST'].'/');<br></code><p>Modifytheminthisway:</p><code>define('WP_SITEURL','https://'.$_SERVER['HTTP_HOST'].'/');<br>define('WP_HOME','https://'.$_SERVER['HTTP_HOST'].'/');<br></code><p>Beforethese2linesaddthis:</p><code>if(strpos($_SERVER['HTTP_X_FORWARDED_PROTO'],'https')!==false)<br>$_SERVER['HTTPS']='on';</code><p>Saveandclose.<br>Thenlet’smodifytheserverconfigurations.Typein:</p><code>vim/opt/bitnami/apps/wordpress/conf/httpd-prefix.conf.</code><p>Addthislineatthetop:</p><code>SetEnvIfx-forwarded-protohttpsHTTPS=on</code><p>Saveandclose<br>Restarttheserver.<br></p><code>sudo/opt/bitnami/ctlscript.shrestartapache</code><p>Atthispointthecertificatewillbeeffective,butyou’llneedtowaittoseethechangesandifnecessarycleanthecacheofyourbrowser.</p><p>Update:<br>Insomecasestheremightbetheneedtomanuallychangethe‘siteurl’and‘home’valuesofourdomaintothehttpsversion.<br>Inordertodoso,connectviaSSHtoyourinstance.Beforeconnectingtothedatabaseyoucangetyourdefaultpasswordinthewp-config.phpfile.<br>Typetoaccesstoyourdatabase:</p><code>sudomysql-ubn_wordpress-p-e'USEbitnami_wordpress;selectoption_name,option_valuefromwp_optionsWHEREoption_name='siteurl'ORoption_name='home';'</code><p>ItwillaskyouforthepasswordanditwillshowyouyourdomainURL.<br>Iftheurlisnothttpsyoucanchangeitthisway:</p><code>sudomysql-ubn_wordpress-p-e'USEbitnami_wordpress;UPDATEwp_optionsSEToption_value='https://127.0.0.1/wordpress/'WHEREoption_name='home'ORoption_name='siteurl';'</code>",
            imageLink: "https://devdenise.s3.eu-west-3.amazonaws.com/articles/1/initializing-instance-1200x486.jpg" }
    ],
    resources: [
        "https://docs.bitnami.com/aws/faq/get-started/find-credentials/#option-2-find-password-by-connecting-to-your-application-through-ssh<br>",
        "https://stackoverflow.com/questions/24603620/redirecting-ec2-elastic-load-balancer-from-http-to-https<br>",
        "https://stackoverflow.com/questions/46084104/ssl-cloudfront-ec2-wordpress-through-bitnami<br>",
        "http://coenraets.org/blog/2012/01/setting-up-wordpress-on-amazon-ec2-in-5-minutes/<br>",
        "https://community.bitnami.com/t/http-to-https-redirect-is-not-working/69595/9<br>",
        "https://stackoverflow.com/questions/26620670/apache-httpx-forwarded-proto-in-htaccess-is-causing-redirect-loop-in-dev-envir<br>"
    ],
    images: [
        "https://devdenise.s3.eu-west-3.amazonaws.com/articles/1/pending-domain-1200x487.jpg",
        "https://devdenise.s3.eu-west-3.amazonaws.com/articles/1/initializing-instance-1200x486.jpg",
        "https://devdenise.s3.eu-west-3.amazonaws.com/articles/1/ssl-pending.jpg",
    ]
};


/***/ }),

/***/ "./src/assets/articles/article_cards.ts":
/*!**********************************************!*\
  !*** ./src/assets/articles/article_cards.ts ***!
  \**********************************************/
/*! exports provided: article_cards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "article_cards", function() { return article_cards; });
const article_cards = [{
        id: 1,
        title: "How to set up a WordPress site on an EC2 AWS instance with an SSL certificate"
    }];


/***/ }),

/***/ "./src/assets/projects/projects.ts":
/*!*****************************************!*\
  !*** ./src/assets/projects/projects.ts ***!
  \*****************************************/
/*! exports provided: projects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projects", function() { return projects; });
const projects = [
    {
        id: 1,
        title: "Leader Clinique",
        link: "https://leaderclinique.com/",
        imageLink: "https://devdenise.s3.eu-west-3.amazonaws.com/leaderclinique.JPG",
        description: "This static site is hosted on AWS S3 and the form is managed through a Google script. The technology used are HTML, CSS and Javascript.",
    },
    {
        id: 2,
        title: "CovidStats",
        link: "https://denisenanni.github.io/covid-stats/",
        imageLink: "https://devdenise.s3.eu-west-3.amazonaws.com/covid-stats.JPG",
        description: "Angular application hosted on GitHub Pages, with a CD/CI pipleine integration."
    },
    {
        id: 3,
        title: "Pubbliufficio",
        link: "https://pubbliufficio.com/",
        imageLink: "https://devdenise.s3.eu-west-3.amazonaws.com/pubbliufficio.jpg",
        description: "React application hosted on GitHub Pages, with a custom domain and a form managed by a Google script."
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/denise/Apps/devdenise-fe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
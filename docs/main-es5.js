function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./under-construction/under-construction.component */
    "./src/app/under-construction/under-construction.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _projects_and_skills_projects_and_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./projects-and-skills/projects-and-skills.component */
    "./src/app/projects-and-skills/projects-and-skills.component.ts");
    /* harmony import */


    var _article_article_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./article/article.component */
    "./src/app/article/article.component.ts");

    var routes = [// { path: '',   redirectTo: '/under-construction', pathMatch: 'full' },
    {
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'blog',
      component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"],
      data: {
        animation: 'Blog'
      }
    }, {
      path: 'article/:id',
      component: _article_article_component__WEBPACK_IMPORTED_MODULE_6__["ArticleComponent"],
      data: {
        animation: 'Article'
      }
    }, {
      path: 'projects',
      component: _projects_and_skills_projects_and_skills_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsAndSkillsComponent"],
      data: {
        animation: 'ProjectsAndSkills'
      }
    }, {
      path: 'under-construction',
      component: _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_3__["UnderConstructionComponent"]
    }, {
      path: '**',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./route-animation */
    "./src/app/route-animation.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0
      };
    };

    var AppComponent = function AppComponent(appService) {
      _classCallCheck(this, AppComponent);

      this.appService = appService;
      this.title = 'DevDenise';
      this.isMobile = appService.isMobile;
      this.backgroundImage = this.isMobile ? '../assets/bg.jpg' : '../assets/bg-desktop.jpg';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 4,
      consts: [[1, "background", 3, "ngStyle"], ["o", "outlet"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "footer");
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "url(" + ctx.backgroundImage + ")"))("@routeAnimations", _r0 && _r0.activatedRouteData && _r0.activatedRouteData["animation"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
      styles: ["footer {\n  background-color: rgba(0, 0, 0, 0.5);\n  height: 1.5rem;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlbmlzZS9BcHBzL2RldmRlbmlzZS1mZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbn1cbiIsImZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgaGVpZ2h0OiAxLjVyZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbn0iXX0= */"],
      encapsulation: 2,
      data: {
        animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss'],
          animations: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"]],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.constants.ts":
  /*!**********************************!*\
    !*** ./src/app/app.constants.ts ***!
    \**********************************/

  /*! exports provided: SERVER_API_URL, WIP */

  /***/
  function srcAppAppConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SERVER_API_URL", function () {
      return SERVER_API_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WIP", function () {
      return WIP;
    });

    var SERVER_API_URL = 'https://devdenise-be.herokuapp.com/';
    var WIP = "Work in progress";
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @nebular/eva-icons */
    "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./under-construction/under-construction.component */
    "./src/app/under-construction/under-construction.component.ts");
    /* harmony import */


    var _article_card_article_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./article-card/article-card.component */
    "./src/app/article-card/article-card.component.ts");
    /* harmony import */


    var _article_article_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./article/article.component */
    "./src/app/article/article.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _directives_goback_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./directives/goback.directive */
    "./src/app/directives/goback.directive.ts");
    /* harmony import */


    var _projects_and_skills_projects_and_skills_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./projects-and-skills/projects-and-skills.component */
    "./src/app/projects-and-skills/projects-and-skills.component.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./project-card/project-card.component */
    "./src/app/project-card/project-card.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"].forRoot({
        name: 'default'
      }), _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_8__["UnderConstructionComponent"], _article_card_article_card_component__WEBPACK_IMPORTED_MODULE_9__["ArticleCardComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_10__["ArticleComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"], _directives_goback_directive__WEBPACK_IMPORTED_MODULE_14__["GobackDirective"], _projects_and_skills_projects_and_skills_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsAndSkillsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"], _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_19__["ProjectCardComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _under_construction_under_construction_component__WEBPACK_IMPORTED_MODULE_8__["UnderConstructionComponent"], _article_card_article_card_component__WEBPACK_IMPORTED_MODULE_9__["ArticleCardComponent"], _article_article_component__WEBPACK_IMPORTED_MODULE_10__["ArticleComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"], _directives_goback_directive__WEBPACK_IMPORTED_MODULE_14__["GobackDirective"], _projects_and_skills_projects_and_skills_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsAndSkillsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"], _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_19__["ProjectCardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"].forRoot({
            name: 'default'
          }), _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbInputModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]],
          providers: [_app_service__WEBPACK_IMPORTED_MODULE_16__["AppService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.service.ts":
  /*!********************************!*\
    !*** ./src/app/app.service.ts ***!
    \********************************/

  /*! exports provided: AppService */

  /***/
  function srcAppAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppService", function () {
      return AppService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.constants */
    "./src/app/app.constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppService = /*#__PURE__*/function () {
      function AppService(http) {
        _classCallCheck(this, AppService);

        this.http = http;
        this.resourceUrl = _app_constants__WEBPACK_IMPORTED_MODULE_1__["SERVER_API_URL"];
        this.isMobile = this.isMobileDevice();
      }

      _createClass(AppService, [{
        key: "isMobileDevice",
        value: function isMobileDevice() {
          return /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent);
        }
      }, {
        key: "getArticlesCards",
        value: function getArticlesCards() {
          return this.http.get(this.resourceUrl + 'get-articles-cards');
        }
      }, {
        key: "getArticleById",
        value: function getArticleById(id) {
          return this.http.get(this.resourceUrl + 'get-article/' + id, {
            observe: 'response'
          });
        }
      }, {
        key: "getProjects",
        value: function getProjects() {
          return this.http.get(this.resourceUrl + 'get-projects', {
            observe: 'response'
          });
        }
      }]);

      return AppService;
    }();

    AppService.ɵfac = function AppService_Factory(t) {
      return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppService,
      factory: AppService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/article-card/article-card.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/article-card/article-card.component.ts ***!
    \********************************************************/

  /*! exports provided: ArticleCardComponent */

  /***/
  function srcAppArticleCardArticleCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleCardComponent", function () {
      return ArticleCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ArticleCardComponent = /*#__PURE__*/function () {
      function ArticleCardComponent(appService, router) {
        _classCallCheck(this, ArticleCardComponent);

        this.appService = appService;
        this.router = router;
      }

      _createClass(ArticleCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {}
      }, {
        key: "goToArticle",
        value: function goToArticle() {
          this.router.navigate(['/article', this.articleCard.id]);
        }
      }]);

      return ArticleCardComponent;
    }();

    ArticleCardComponent.ɵfac = function ArticleCardComponent_Factory(t) {
      return new (t || ArticleCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    ArticleCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArticleCardComponent,
      selectors: [["article-card"]],
      inputs: {
        articleCard: "articleCard"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 9,
      vars: 2,
      consts: [[1, "card", "w-100", "text-center"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "card-text"], [1, "card-link", 3, "click"]],
      template: function ArticleCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArticleCardComponent_Template_button_click_7_listener() {
            return ctx.goToArticle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Read more ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.articleCard.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.articleCard.outline, " ");
        }
      },
      styles: ["div.card.w-100[_ngcontent-%COMP%] {\n  width: 80vw;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\na.card-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlbmlzZS9BcHBzL2RldmRlbmlzZS1mZS9zcmMvYXBwL2FydGljbGUtY2FyZC9hcnRpY2xlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FydGljbGUtY2FyZC9hcnRpY2xlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0Esb0NBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUtY2FyZC9hcnRpY2xlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuY2FyZC53LTEwMCB7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5hLmNhcmQtbGluayB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSIsImRpdi5jYXJkLnctMTAwIHtcbiAgd2lkdGg6IDgwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuYS5jYXJkLWxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'article-card',
          templateUrl: './article-card.component.html',
          styleUrls: ['./article-card.component.scss']
        }]
      }], function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        articleCard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/article/article.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/article/article.component.ts ***!
    \**********************************************/

  /*! exports provided: ArticleComponent */

  /***/
  function srcAppArticleArticleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticleComponent", function () {
      return ArticleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../app.constants */
    "./src/app/app.constants.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _directives_goback_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../directives/goback.directive */
    "./src/app/directives/goback.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ArticleComponent_div_5_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var section_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", section_r5.section, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", section_r5.imageLink, " ");
      }
    }

    function ArticleComponent_div_5_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
      }

      if (rf & 2) {
        var resource_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", resource_r6.resource, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function ArticleComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ArticleComponent_div_5_div_4_Template, 2, 2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ArticleComponent_div_5_div_6_Template, 1, 1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.article.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.article.sections);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.article.resources);
      }
    }

    function ArticleComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.notFoundMessage);
      }
    }

    var ArticleComponent = /*#__PURE__*/function () {
      function ArticleComponent(activatedRoute, appService) {
        _classCallCheck(this, ArticleComponent);

        this.activatedRoute = activatedRoute;
        this.appService = appService;
        this.notFoundMessage = _app_constants__WEBPACK_IMPORTED_MODULE_1__["WIP"];
        this.getRouteParam();
      }

      _createClass(ArticleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getRouteParam",
        value: function getRouteParam() {
          var _this = this;

          this.activatedRoute.params.subscribe(function (parameter) {
            _this.idArticle = Number(parameter.id);

            _this.getArticle();
          });
        }
      }, {
        key: "getArticle",
        value: function getArticle() {
          var _this2 = this;

          this.appService.getArticleById(this.idArticle).subscribe(function (resp) {
            _this2.article = resp.body;
            _this2.success = 'OK';
            _this2.error = null;
          }, function (resp) {
            _this2.success = null;
            _this2.error = resp.error.message;
          });
        }
      }]);

      return ArticleComponent;
    }();

    ArticleComponent.ɵfac = function ArticleComponent_Factory(t) {
      return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]));
    };

    ArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArticleComponent,
      selectors: [["app-article"]],
      decls: 12,
      vars: 2,
      consts: [[1, "container", "main", "hideSB"], [1, "row", "p-4"], [1, "col"], ["goback", ""], ["class", "row p-4", 4, "ngIf", "ngIfElse"], ["notFound", ""], [1, "row", "p-4", "text-center"], [1, "font-weight-bold", "text-center"], ["class", "content", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "resources"], ["class", "mt-3 mb-3", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "content", 3, "innerHTML"], [1, "mt-3", "mb-3", 3, "innerHTML"]],
      template: function ArticleComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.article)("ngIfElse", _r1);
        }
      },
      directives: [_directives_goback_directive__WEBPACK_IMPORTED_MODULE_4__["GobackDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["div.container.main[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  overflow-y: scroll;\n}\n\n\n\n.hideSB[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n\n\n.hideSB[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  \n  scrollbar-width: none;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlbmlzZS9BcHBzL2RldmRlbmlzZS1mZS9zcmMvYXBwL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBLGdEQUFBOztBQUNBO0VBQ0UsYUFBQTtBQ0NGOztBREVBLDRDQUFBOztBQUNBO0VBQ0Usd0JBQUE7RUFBMEIsZ0JBQUE7RUFDMUIscUJBQUE7RUFBdUIsWUFBQTtBQ0d6QiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUvYXJ0aWNsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jb250YWluZXIubWFpbiB7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmEgKi9cbi5oaWRlU0I6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXG4uaGlkZVNCIHtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbn1cblxuXG4iLCJkaXYuY29udGFpbmVyLm1haW4ge1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXG4uaGlkZVNCOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xuLmhpZGVTQiB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgLyogSUUgYW5kIEVkZ2UgKi9cbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAvKiBGaXJlZm94ICovXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArticleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-article',
          templateUrl: './article.component.html',
          styleUrls: ['./article.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog.component.ts":
  /*!****************************************!*\
    !*** ./src/app/blog/blog.component.ts ***!
    \****************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../app.constants */
    "./src/app/app.constants.ts");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _directives_goback_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../directives/goback.directive */
    "./src/app/directives/goback.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _article_card_article_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../article-card/article-card.component */
    "./src/app/article-card/article-card.component.ts");

    function BlogComponent_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "article-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var articleCard_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("articleCard", articleCard_r4);
      }
    }

    function BlogComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlogComponent_div_5_div_1_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.articlesCards);
      }
    }

    function BlogComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.notFoundMessage);
      }
    }

    var BlogComponent = /*#__PURE__*/function () {
      function BlogComponent(appService) {
        _classCallCheck(this, BlogComponent);

        this.appService = appService;
        this.notFoundMessage = _app_constants__WEBPACK_IMPORTED_MODULE_1__["WIP"];
      }

      _createClass(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getArticlesCards();
        }
      }, {
        key: "getArticlesCards",
        value: function getArticlesCards() {
          var _this3 = this;

          this.appService.getArticlesCards().subscribe(function (resp) {
            _this3.articlesCards = resp;
          });
        }
      }]);

      return BlogComponent;
    }();

    BlogComponent.ɵfac = function BlogComponent_Factory(t) {
      return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]));
    };

    BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogComponent,
      selectors: [["blog"]],
      decls: 12,
      vars: 2,
      consts: [[1, "container"], [1, "row", "p-4"], [1, "col"], ["goback", ""], ["class", "row p-4 d-flex justify-content-center", 4, "ngIf", "ngIfElse"], ["notFound", ""], [1, "row", "p-4", "text-center"], [1, "row", "p-4", "d-flex", "justify-content-center"], ["class", "col col-lg-10 col-md-10 col-sm-12 mb-4", 4, "ngFor", "ngForOf"], [1, "col", "col-lg-10", "col-md-10", "col-sm-12", "mb-4"], [3, "articleCard"]],
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.articlesCards)("ngIfElse", _r1);
        }
      },
      directives: [_directives_goback_directive__WEBPACK_IMPORTED_MODULE_3__["GobackDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _article_card_article_card_component__WEBPACK_IMPORTED_MODULE_5__["ArticleCardComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'blog',
          templateUrl: './blog.component.html',
          styleUrls: ['./blog.component.scss']
        }]
      }], function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/directives/goback.directive.ts":
  /*!************************************************!*\
    !*** ./src/app/directives/goback.directive.ts ***!
    \************************************************/

  /*! exports provided: GobackDirective */

  /***/
  function srcAppDirectivesGobackDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GobackDirective", function () {
      return GobackDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var GobackDirective = /*#__PURE__*/function () {
      function GobackDirective(location) {
        _classCallCheck(this, GobackDirective);

        this.location = location;
      }

      _createClass(GobackDirective, [{
        key: "onClick",
        value: function onClick() {
          this.location.back();
        }
      }]);

      return GobackDirective;
    }();

    GobackDirective.ɵfac = function GobackDirective_Factory(t) {
      return new (t || GobackDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]));
    };

    GobackDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: GobackDirective,
      selectors: [["", "goback", ""]],
      hostBindings: function GobackDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GobackDirective_click_HostBindingHandler() {
            return ctx.onClick();
          });
        }
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GobackDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[goback]'
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }];
      }, {
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["footer"]],
      decls: 2,
      vars: 0,
      consts: [[1, "container-fluid", "text-center"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \xA92020 DevDenise\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["div.container-fluid[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlbmlzZS9BcHBzL2RldmRlbmlzZS1mZS9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5jb250YWluZXItZmx1aWQge1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG59IiwiZGl2LmNvbnRhaW5lci1mbHVpZCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../menu/menu.component */
    "./src/app/menu/menu.component.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.linkedinProfile = 'https://www.linkedin.com/in/denise-nanni/';
        this.gitHubProfile = 'https://github.com/DeniseN90';
        this.soundCloudProfile = 'https://soundcloud.com/denise-nanni';
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["home"]],
      decls: 20,
      vars: 3,
      consts: [[1, "container"], [1, "row", "text-center"], [1, "col", "home-heading"], [1, "home-heading"], [1, "row", "justify-content-center"], [1, "img-container", "col-lg-5", "col-md-5", "col"], ["src", "../../assets/pic-site.png", "alt", "devdenise", 1, "img-fluid", "rounded-circle"], [1, "container", "mt-4", "d-flex", "justify-content-center"], [1, "social-links", "m-3"], ["target", "_blank", 3, "href"], ["src", "./../../assets/github-icon.png", "alt", "Facebook", "width", "30", "height", "30", 1, "icons"], ["src", "./../../assets/linkedin-icon.png", "alt", "Facebook", "width", "30", "height", "30", 1, "icons"], ["src", "./../../assets/soundcloud-icon.png", "alt", "Facebook", "width", "30", "height", "30", 1, "icons"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.gitHubProfile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.linkedinProfile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.soundCloudProfile, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]],
      styles: ["div.img-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nimg.img-fluid[_ngcontent-%COMP%] {\n  max-width: 22vw;\n  border: 2px solid;\n}\n\ndiv.col.home-heading[_ngcontent-%COMP%] {\n  margin-top: 13vh;\n}\n\nh1.home-heading[_ngcontent-%COMP%] {\n  font-size: 6vw;\n  text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de, 0 0 80px #ff00de, 0 0 100px #ff00de, 0 0 150px #ff00de;\n  max-width: 80vh;\n  height: auto;\n  margin: 0 auto;\n  margin-bottom: 4vh;\n}\n\nimg[_ngcontent-%COMP%] {\n  transition: height 0.9s;\n  transition-timing-function: ease-out;\n}\n\ndiv.social-links[_ngcontent-%COMP%] {\n  display: inline;\n}\n\nimg.icons[_ngcontent-%COMP%]:hover {\n  height: 40px;\n  width: 40px;\n}\n\n@media only screen and (hover: none) and (pointer: coarse) {\n  h1.home-heading[_ngcontent-%COMP%] {\n    font-size: 10vw;\n  }\n\n  img.img-fluid[_ngcontent-%COMP%] {\n    max-width: 38vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlbmlzZS9BcHBzL2RldmRlbmlzZS1mZS9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxvSkFBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FER0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0FGOztBRElBO0VBQ0U7SUFDRSxlQUFBO0VDREY7O0VESUE7SUFDRSxlQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5pbWctY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbWcuaW1nLWZsdWlkIHtcbiAgbWF4LXdpZHRoOiAyMnZ3O1xuICBib3JkZXI6IDJweCBzb2xpZDtcbn1cbmRpdi5jb2wuaG9tZS1oZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogMTN2aDtcbn1cblxuaDEuaG9tZS1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiA2dnc7XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZmZmLCAwIDAgMjBweCAjZmZmLCAwIDAgMzBweCAjZmZmLCAwIDAgNDBweCAjZmYwMGRlLFxuICAgIDAgMCA3MHB4ICNmZjAwZGUsIDAgMCA4MHB4ICNmZjAwZGUsIDAgMCAxMDBweCAjZmYwMGRlLCAwIDAgMTUwcHggI2ZmMDBkZTtcbiAgbWF4LXdpZHRoOiA4MHZoO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA0dmg7XG59XG5cbmltZyB7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjlzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cbmRpdi5zb2NpYWwtbGlua3Mge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIFxufVxuXG5pbWcuaWNvbnM6aG92ZXJ7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoaG92ZXI6IG5vbmUpIGFuZCAocG9pbnRlcjogY29hcnNlKSB7XG4gIGgxLmhvbWUtaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAxMHZ3O1xuICB9XG5cbiAgaW1nLmltZy1mbHVpZCB7XG4gICAgbWF4LXdpZHRoOiAzOHZ3O1xuICB9XG59XG4iLCJkaXYuaW1nLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW1nLmltZy1mbHVpZCB7XG4gIG1heC13aWR0aDogMjJ2dztcbiAgYm9yZGVyOiAycHggc29saWQ7XG59XG5cbmRpdi5jb2wuaG9tZS1oZWFkaW5nIHtcbiAgbWFyZ2luLXRvcDogMTN2aDtcbn1cblxuaDEuaG9tZS1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiA2dnc7XG4gIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZmZmLCAwIDAgMjBweCAjZmZmLCAwIDAgMzBweCAjZmZmLCAwIDAgNDBweCAjZmYwMGRlLCAwIDAgNzBweCAjZmYwMGRlLCAwIDAgODBweCAjZmYwMGRlLCAwIDAgMTAwcHggI2ZmMDBkZSwgMCAwIDE1MHB4ICNmZjAwZGU7XG4gIG1heC13aWR0aDogODB2aDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNHZoO1xufVxuXG5pbWcge1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC45cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuXG5kaXYuc29jaWFsLWxpbmtzIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG5pbWcuaWNvbnM6aG92ZXIge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChob3Zlcjogbm9uZSkgYW5kIChwb2ludGVyOiBjb2Fyc2UpIHtcbiAgaDEuaG9tZS1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDEwdnc7XG4gIH1cblxuICBpbWcuaW1nLWZsdWlkIHtcbiAgICBtYXgtd2lkdGg6IDM4dnc7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent() {
        _classCallCheck(this, MenuComponent);
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)();
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["menu"]],
      decls: 7,
      vars: 0,
      consts: [[1, "menu"], ["routerLink", "/projects"], ["routerLink", "/blog"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "PROJECTS AND SKILLS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "BLOG");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["ul.menu[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 100%;\n  list-style-type: none;\n  margin: 5vh auto;\n  padding: 0;\n  display: block;\n  border-top: 0.5px solid #fff;\n}\n\nul.menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 1vw;\n  padding: 0;\n  transition: padding 0.5s, background-color 0.5s;\n  transition-timing-function: ease-out;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  font-size: 2vw;\n}\n\nul.menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover {\n  background-color: rgba(7, 10, 26, 0.6);\n  padding: 1vw;\n}\n\n@media only screen and (hover: none) and (pointer: coarse) {\n  li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: initial;\n  }\n\n  ul.menu[_ngcontent-%COMP%] {\n    border-top: none;\n  }\n\n  ul.menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    display: block;\n    padding: 0.2rem;\n  }\n\n  li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n    background-color: rgba(7, 10, 26, 0.6);\n    padding: 1vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlbmlzZS9BcHBzL2RldmRlbmlzZS1mZS9zcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSwrQ0FBQTtFQUNBLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLHNDQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxrQkFBQTtFQ0NGOztFREVBO0lBQ0UsZ0JBQUE7RUNDRjs7RURFQTtJQUNFLGNBQUE7SUFDQSxlQUFBO0VDQ0Y7O0VERUE7SUFDRSxzQ0FBQTtJQUNBLFlBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwubWVudSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogNXZoIGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCAjZmZmO1xufVxuXG51bC5tZW51ID4gbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAxdnc7XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zaXRpb246IHBhZGRpbmcgMC41cywgYmFja2dyb3VuZC1jb2xvciAwLjVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5cbmxpIGEge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDJ2dztcbn1cblxudWwubWVudSA+IGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCAxMCwgMjYsIDAuNik7XG4gIHBhZGRpbmc6IDF2dztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoaG92ZXI6IG5vbmUpIGFuZCAocG9pbnRlcjogY29hcnNlKSB7XG4gIGxpIGEge1xuICAgIGZvbnQtc2l6ZTogaW5pdGlhbDtcbiAgfVxuXG4gIHVsLm1lbnUge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cblxuICB1bC5tZW51ID4gbGkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAuMnJlbTtcbiAgfVxuXG4gIGxpIGE6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDcsIDEwLCAyNiwgMC42KTtcbiAgICBwYWRkaW5nOiAxdnc7XG4gIH1cbn1cbiIsInVsLm1lbnUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDV2aCBhdXRvO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXRvcDogMC41cHggc29saWQgI2ZmZjtcbn1cblxudWwubWVudSA+IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgMXZ3O1xuICBwYWRkaW5nOiAwO1xuICB0cmFuc2l0aW9uOiBwYWRkaW5nIDAuNXMsIGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuXG5saSBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAydnc7XG59XG5cbnVsLm1lbnUgPiBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNywgMTAsIDI2LCAwLjYpO1xuICBwYWRkaW5nOiAxdnc7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKGhvdmVyOiBub25lKSBhbmQgKHBvaW50ZXI6IGNvYXJzZSkge1xuICBsaSBhIHtcbiAgICBmb250LXNpemU6IGluaXRpYWw7XG4gIH1cblxuICB1bC5tZW51IHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICB9XG5cbiAgdWwubWVudSA+IGxpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwLjJyZW07XG4gIH1cblxuICBsaSBhOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3LCAxMCwgMjYsIDAuNik7XG4gICAgcGFkZGluZzogMXZ3O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/project-card/project-card.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/project-card/project-card.component.ts ***!
    \********************************************************/

  /*! exports provided: ProjectCardComponent */

  /***/
  function srcAppProjectCardProjectCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectCardComponent", function () {
      return ProjectCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProjectCardComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectCardComponent_div_8_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.goToProject();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Go to project");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProjectCardComponent_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectCardComponent_ng_template_9_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.goToProject();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Go to project ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "background-image": a0
      };
    };

    var ProjectCardComponent = /*#__PURE__*/function () {
      function ProjectCardComponent(router, appService) {
        _classCallCheck(this, ProjectCardComponent);

        this.router = router;
        this.appService = appService;
      }

      _createClass(ProjectCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.mobile = this.appService.isMobile;
        }
      }, {
        key: "goToProject",
        value: function goToProject() {
          window.open(this.project.link, '_blank');
        }
      }]);

      return ProjectCardComponent;
    }();

    ProjectCardComponent.ɵfac = function ProjectCardComponent_Factory(t) {
      return new (t || ProjectCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]));
    };

    ProjectCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectCardComponent,
      selectors: [["project-card"]],
      inputs: {
        project: "project"
      },
      decls: 11,
      vars: 7,
      consts: [[1, "card", "m-4", 3, "ngStyle"], [1, "layer", "text-center"], [1, "card-header"], [1, "card-title", "font-weight-bold"], [1, "card-body"], [1, "card-text"], [4, "ngIf", "ngIfElse"], ["desktop", ""], [3, "click"], [1, "footer", "w-100"], [1, "btn", "btn-outline-light", "btn-lg", 3, "click"]],
      template: function ProjectCardComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "url(" + ctx.project.imageLink + ")"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobile)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["div.card[_ngcontent-%COMP%] {\n  background: transparent;\n  height: auto;\n  background-size: cover;\n  border: transparent;\n}\n\na.card-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ndiv.layer[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n  height: inherit;\n  padding: 1rem;\n}\n\np.card-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlbmlzZS9BcHBzL2RldmRlbmlzZS1mZS9zcmMvYXBwL3Byb2plY3QtY2FyZC9wcm9qZWN0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2plY3QtY2FyZC9wcm9qZWN0LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEUUE7RUFDSSxlQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0LWNhcmQvcHJvamVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmNhcmQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXI6IHRyYW5zcGFyZW50O1xufVxuXG5hLmNhcmQtbGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2LmxheWVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDFyZW07XG5cbn1cblxuXG5kaXYuZm9vdGVyIHtcblxufVxuXG5wLmNhcmQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufSIsImRpdi5jYXJkIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbn1cblxuYS5jYXJkLWxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdi5sYXllciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG5wLmNhcmQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'project-card',
          templateUrl: './project-card.component.html',
          styleUrls: ['./project-card.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }];
      }, {
        project: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/projects-and-skills/projects-and-skills.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/projects-and-skills/projects-and-skills.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ProjectsAndSkillsComponent */

  /***/
  function srcAppProjectsAndSkillsProjectsAndSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsAndSkillsComponent", function () {
      return ProjectsAndSkillsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _directives_goback_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../directives/goback.directive */
    "./src/app/directives/goback.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../project-card/project-card.component */
    "./src/app/project-card/project-card.component.ts");

    function ProjectsAndSkillsComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "project-card", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("project", p_r2);
      }
    }

    function ProjectsAndSkillsComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3);
      }
    }

    var ProjectsAndSkillsComponent = /*#__PURE__*/function () {
      function ProjectsAndSkillsComponent(appService) {
        _classCallCheck(this, ProjectsAndSkillsComponent);

        this.appService = appService;
        this.getProjects();
      }

      _createClass(ProjectsAndSkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.skills = ['Java 8', 'Spring Boot', 'Hibernate/JPA', 'SQL', 'MySQL/Postgres', 'Angular 7+', 'HTML/CSS/Bootstrap', 'AWS S3', 'AWS EC2', 'AWS Route53', 'Git', 'React', 'Vim'];
        }
      }, {
        key: "getProjects",
        value: function getProjects() {
          var _this4 = this;

          this.appService.getProjects().subscribe(function (r) {
            _this4.projects = r.body;
            console.log('PROJECTS IN PARENT');
            _this4.success = 'OK';
            _this4.error = null;
          }, function (r) {
            _this4.error = r.error;
            _this4.success = null;
          });
        }
      }]);

      return ProjectsAndSkillsComponent;
    }();

    ProjectsAndSkillsComponent.ɵfac = function ProjectsAndSkillsComponent_Factory(t) {
      return new (t || ProjectsAndSkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]));
    };

    ProjectsAndSkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProjectsAndSkillsComponent,
      selectors: [["projects-and-skills"]],
      decls: 19,
      vars: 2,
      consts: [[1, "container"], [1, "row", "p-4"], [1, "col"], ["goback", ""], [1, "title", "row", "p-4", "d-flex"], [1, "row", "p-4", "d-flex", "justify-content-center"], ["class", "col col-lg-6 col-md-10 col-12 mb-4", 4, "ngFor", "ngForOf"], [1, "title", "row", "p-4", "d-flex", "mb-4"], [4, "ngFor", "ngForOf"], [1, "row", "back", "p-4", "text-center"], [1, "col", "col-lg-6", "col-md-10", "col-12", "mb-4"], [3, "project"], [1, "skills"]],
      template: function ProjectsAndSkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
        }
      },
      directives: [_directives_goback_directive__WEBPACK_IMPORTED_MODULE_2__["GobackDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_4__["ProjectCardComponent"]],
      styles: ["button[_ngcontent-%COMP%] {\n  padding: 0.5vh;\n  margin: 0.5vh;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\ndiv.project[_ngcontent-%COMP%] {\n  width: 30vw;\n}\n\ndiv.title[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #fff;\n  margin: 0 auto;\n}\n\ndiv.skills[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n@media only screen and (hover: none) and (pointer: coarse) {\n  div.project[_ngcontent-%COMP%] {\n    width: 80vw;\n    margin: 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlbmlzZS9BcHBzL2RldmRlbmlzZS1mZS9zcmMvYXBwL3Byb2plY3RzLWFuZC1za2lsbHMvcHJvamVjdHMtYW5kLXNraWxscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdHMtYW5kLXNraWxscy9wcm9qZWN0cy1hbmQtc2tpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsY0FBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy1hbmQtc2tpbGxzL3Byb2plY3RzLWFuZC1za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBwYWRkaW5nOiAwLjV2aDtcbiAgbWFyZ2luOiAwLjV2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG5kaXYucHJvamVjdCB7XG4gIHdpZHRoOiAzMHZ3O1xufVxuXG5kaXYudGl0bGUge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmRpdi5za2lsbHMge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoaG92ZXI6IG5vbmUpIGFuZCAocG9pbnRlcjogY29hcnNlKSB7XG4gIGRpdi5wcm9qZWN0IHtcbiAgICB3aWR0aDogODB2dztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuIiwiYnV0dG9uIHtcbiAgcGFkZGluZzogMC41dmg7XG4gIG1hcmdpbjogMC41dmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuZGl2LnByb2plY3Qge1xuICB3aWR0aDogMzB2dztcbn1cblxuZGl2LnRpdGxlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5kaXYuc2tpbGxzIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKGhvdmVyOiBub25lKSBhbmQgKHBvaW50ZXI6IGNvYXJzZSkge1xuICBkaXYucHJvamVjdCB7XG4gICAgd2lkdGg6IDgwdnc7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsAndSkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'projects-and-skills',
          templateUrl: './projects-and-skills.component.html',
          styleUrls: ['./projects-and-skills.component.scss']
        }]
      }], function () {
        return [{
          type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/route-animation.ts":
  /*!************************************!*\
    !*** ./src/app/route-animation.ts ***!
    \************************************/

  /*! exports provided: slideInAnimation */

  /***/
  function srcAppRouteAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slideInAnimation", function () {
      return slideInAnimation;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('ProjectsAndSkills => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      position: 'fixed',
      width: '100%'
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-100%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0%)'
    }))], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(100%)'
    }))], {
      optional: true
    })])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => ProjectsAndSkills', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      position: 'fixed',
      width: '100%'
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-100%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0%)'
    }))], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(100%)'
    }))], {
      optional: true
    })])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Blog => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      position: 'fixed',
      width: '100%'
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(100%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0%)'
    }))], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-100%)'
    }))], {
      optional: true
    })])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => Blog', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      position: 'fixed',
      width: '100%'
    }), {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(100%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0%)'
    }))], {
      optional: true
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(0%)'
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: 'translateX(-100%)'
    }))], {
      optional: true
    })])])]);
    /***/
  },

  /***/
  "./src/app/under-construction/under-construction.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/under-construction/under-construction.component.ts ***!
    \********************************************************************/

  /*! exports provided: UnderConstructionComponent */

  /***/
  function srcAppUnderConstructionUnderConstructionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnderConstructionComponent", function () {
      return UnderConstructionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UnderConstructionComponent = /*#__PURE__*/function () {
      function UnderConstructionComponent() {
        _classCallCheck(this, UnderConstructionComponent);
      }

      _createClass(UnderConstructionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UnderConstructionComponent;
    }();

    UnderConstructionComponent.ɵfac = function UnderConstructionComponent_Factory(t) {
      return new (t || UnderConstructionComponent)();
    };

    UnderConstructionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UnderConstructionComponent,
      selectors: [["app-under-construction"]],
      decls: 4,
      vars: 0,
      consts: [[1, "row"], [1, "col", "text-center"], [1, "animate__animated", "animate__bounceInRight"]],
      template: function UnderConstructionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Under construction");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VuZGVyLWNvbnN0cnVjdGlvbi91bmRlci1jb25zdHJ1Y3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnderConstructionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-under-construction',
          templateUrl: './under-construction.component.html',
          styleUrls: ['./under-construction.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/denise/Apps/devdenise-fe/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
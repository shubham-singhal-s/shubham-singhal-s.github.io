"use strict";
(self["webpackChunkshubham_resume"] = self["webpackChunkshubham_resume"] || []).push([["main"],{

/***/ 8849:
/*!********************************************************************!*\
  !*** ./src/app/accessories/skill-button/skill-button.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillButtonComponent": () => (/* binding */ SkillButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SkillButtonComponent {
  constructor() {
    this.name = '';
    this.link = '';
    this.goToLink = () => {
      window.open(this.link, '_blank');
    };
  }
}
SkillButtonComponent.ɵfac = function SkillButtonComponent_Factory(t) {
  return new (t || SkillButtonComponent)();
};
SkillButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SkillButtonComponent,
  selectors: [["app-skill-button"]],
  inputs: {
    name: "name",
    link: "link"
  },
  decls: 2,
  vars: 2,
  consts: [[1, "btn", "btn-skill", 3, "disabled", "click"]],
  template: function SkillButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillButtonComponent_Template_button_click_0_listener() {
        return ctx.goToLink();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.link);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, "\n");
    }
  },
  styles: [".btn-skill[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom right, #f56301 0%, #F09819 100%);\n  background-size: 200% 100%;\n  background-position: 30%;\n  transition: background-position 0.2s ease-in-out;\n  border: none;\n  color: white;\n  margin: 8px;\n}\n.btn-skill[_ngcontent-%COMP%]:hover {\n  background-position: 70%;\n}\n\n.btn-grad[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, #FF512F 15%, #F09819 51%, #FF512F 85%);\n  margin: 10px;\n  padding: 15px 45px;\n  text-align: center;\n  text-transform: uppercase;\n  transition: 0.5s;\n  background-size: 200% auto;\n  color: white;\n  box-shadow: 0 0 20px #eee;\n  border-radius: 10px;\n  display: block;\n}\n\n.btn-grad[_ngcontent-%COMP%]:hover {\n  background-position: right center; \n  color: #fff;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjZXNzb3JpZXMvc2tpbGwtYnV0dG9uL3NraWxsLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRFQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLGdEQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTtFQUNJLHdCQUFBO0FBQ1I7O0FBS0E7RUFDSSxrRkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBRko7O0FBS0U7RUFDRSxpQ0FBQSxFQUFBLDRDQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBRkoiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXNraWxsIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNmNTYzMDEgMCUsICNGMDk4MTkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDMwJTtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogOHB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDcwJTtcclxuICAgIH1cclxuICAgICBcclxufVxyXG5cclxuICAgICAgICAgXHJcbi5idG4tZ3JhZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRjUxMkYgMTUlLCAjRjA5ODE5ICA1MSUsICNGRjUxMkYgIDg1JSk7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDQ1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xyXG4gICAgY29sb3I6IHdoaXRlOyAgICAgICAgICAgIFxyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggI2VlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5idG4tZ3JhZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7IC8qIGNoYW5nZSB0aGUgZGlyZWN0aW9uIG9mIHRoZSBjaGFuZ2UgaGVyZSAqL1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);





class AppComponent {
  constructor(matIconRegistry, domSanitizer) {
    this.matIconRegistry = matIconRegistry;
    this.domSanitizer = domSanitizer;
    this.title = 'shubham-resume';
    this.matIconRegistry.addSvgIcon('github', this.domSanitizer.bypassSecurityTrustResourceUrl(`/assets/svg/github.svg`));
    this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl(`/assets/svg/linkedin.svg`));
    this.matIconRegistry.addSvgIcon('pen-tool', this.domSanitizer.bypassSecurityTrustResourceUrl(`/assets/svg/pen-tool.svg`));
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header")(1, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _scroller_scroller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scroller/scroller.component */ 5351);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skills/skills.component */ 5490);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _accessories_skill_button_skill_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accessories/skill-button/skill-button.component */ 8849);
/* harmony import */ var _skill_page_skill_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skill-page/skill-page.component */ 89);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./experience/experience.component */ 1427);
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./education/education.component */ 2554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);




















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _scroller_scroller_component__WEBPACK_IMPORTED_MODULE_4__.ScrollerComponent, _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__.SkillsComponent, _accessories_skill_button_skill_button_component__WEBPACK_IMPORTED_MODULE_6__.SkillButtonComponent, _skill_page_skill_page_component__WEBPACK_IMPORTED_MODULE_7__.SkillPageComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_8__.ExperienceComponent, _education_education_component__WEBPACK_IMPORTED_MODULE_9__.EducationComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__.MatToolbarModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListModule]
  });
})();

/***/ }),

/***/ 1175:
/*!********************************!*\
  !*** ./src/app/data/skills.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skills": () => (/* binding */ skills)
/* harmony export */ });
const skills = [{
  name: 'AI',
  nav: 'ai',
  header: 'Artificial Intelligence',
  content: `
    I have extensive AI expertise that extends beyond my Masters degree (with a major in Data Science), gained through research, internships, and 
    projects. My Intelligent Systems major in undergrad further strengthened my skills. I've worked on 
    Natural Language Processing, Computer Vision, Chatbots, image labeling and generation, predictive systems, and have data 
    processing, analysis, and visualization skills. I have also delved into AWS Sagemaker and their HuggingFace integrations to gain insights about production ready AI systems and their deployments.
    I'm excited to keep pushing AI's boundaries.
    `,
  skills: [{
    name: 'Technologies',
    items: [{
      name: 'Regression',
      link: 'https://en.wikipedia.org/wiki/Regression_analysis'
    }, {
      name: 'Classification',
      link: 'https://en.wikipedia.org/wiki/Statistical_classification'
    }, {
      name: 'Clustering',
      link: 'https://en.wikipedia.org/wiki/Cluster_analysis'
    }, {
      name: 'Natural Language Processing',
      link: 'https://en.wikipedia.org/wiki/Natural_language_processing'
    }, {
      name: 'Natural Language Understanding',
      link: 'https://en.wikipedia.org/wiki/Natural-language_understanding'
    }, {
      name: 'Computer Vision',
      link: 'https://en.wikipedia.org/wiki/Computer_vision'
    }, {
      name: 'Neural Networks',
      link: 'https://en.wikipedia.org/wiki/Artificial_neural_network'
    }, {
      name: 'Deep Learning',
      link: 'https://en.wikipedia.org/wiki/Deep_learning'
    }, {
      name: 'GANs',
      link: 'https://en.wikipedia.org/wiki/Generative_adversarial_network'
    }, {
      name: 'LLM',
      link: 'https://en.wikipedia.org/wiki/Large_language_model'
    }]
  }, {
    name: 'Frameworks',
    items: [{
      name: 'OpenAI (ChatGPT)',
      link: 'https://platform.openai.com/docs/guides/gpt'
    }, {
      name: 'AWS Sagemaker',
      link: 'https://aws.amazon.com/sagemaker/'
    }, {
      name: 'HuggingFace',
      link: 'https://huggingface.co/'
    }, {
      name: 'TensorFlow',
      link: 'https://www.tensorflow.org/'
    }, {
      name: 'Keras',
      link: 'https://keras.io/'
    }, {
      name: 'PyTorch',
      link: 'https://pytorch.org/'
    }, {
      name: 'Scikit-Learn',
      link: 'https://scikit-learn.org/stable/'
    }, {
      name: 'R',
      link: 'https://www.r-project.org/'
    }, {
      name: 'Python',
      link: 'https://www.python.org/'
    }]
  }]
}, {
  name: 'Frontend',
  nav: 'frontend',
  header: 'Frontend Development',
  content: `
    I possess an comprehensive background in frontend development, encompassing a range of technologies and concepts. 
    I am proficient in React, React Native, and Angular, enabling me to craft dynamic and responsive user interfaces. 
    My expertise extends to TypeScript, HTML, JavaScript, CSS, and Bootstrap, which I employ to create visually 
    appealing and well-functioning applications. I am dedicated to ensuring accessibility by implementing semantic HTML,
    ARIA roles, and responsive design principles. Moreover, I prioritize user experience and adhere to design 
    best practices, incorporating research-driven insights into intuitive interfaces. This diverse skill set allows 
    me to develop applications that are both visually engaging and user-friendly, delivering substantial value.
    `,
  skills: [{
    name: 'Frameworks',
    items: [{
      name: 'Angular',
      link: 'https://angular.io/'
    }, {
      name: 'React',
      link: 'https://reactjs.org/'
    }, {
      name: 'React Native',
      link: 'https://reactnative.dev/'
    }, {
      name: 'Wordpress',
      link: 'https://wordpress.com/'
    }, {
      name: 'Jasmine',
      link: 'https://jasmine.github.io/'
    }]
  }, {
    name: 'Technologies',
    items: [{
      name: 'TypeScript',
      link: 'https://www.typescriptlang.org/'
    }, {
      name: 'JavaScript',
      link: 'https://www.javascript.com/'
    }, {
      name: 'HTML',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    }, {
      name: 'CSS',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    }, {
      name: 'Bootstrap',
      link: 'https://getbootstrap.com/'
    }, {
      name: 'Material UI',
      link: 'https://material-ui.com/'
    }, {
      name: 'SASS',
      link: 'https://sass-lang.com/'
    }, {
      name: 'Figma',
      link: 'https://www.figma.com/'
    }, {
      name: 'Adobe Suite',
      link: 'https://www.adobe.com/'
    }]
  }]
}, {
  name: 'Backend',
  nav: 'backend',
  header: 'Backend Development',
  content: `
    Along with the extensive knowledge of frontend development, I have a strong background in backend development.
    I have worked in a Full-Stack capacity for multiple projects, and have experience with Java, Spring Boot, Python and various databses.
    I also have a deep understanding of various integrations and APIs, and have worked with REST and XML APIs.
    Working on large scale projects has given me a keen eye for performance and scalability, by making use of caching, pagination and other techniques.
    `,
  skills: [{
    name: 'Frameworks',
    items: [{
      name: 'Spring/Spring Boot',
      link: 'https://spring.io/projects/spring-boot'
    }, {
      name: 'Hibernate',
      link: 'https://hibernate.org/'
    }, {
      name: 'Flask',
      link: 'https://flask.palletsprojects.com/en/2.0.x/'
    }, {
      name: 'Selenium',
      link: 'https://www.selenium.dev/'
    }]
  }, {
    name: 'Languages',
    items: [{
      name: 'Java',
      link: 'https://www.java.com/en/'
    }, {
      name: 'JUnit',
      link: 'https://junit.org/junit5/'
    }, {
      name: 'Python',
      link: 'https://www.python.org/'
    }, {
      name: 'Apex',
      link: 'https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_intro_what_is_apex.htm'
    }, {
      name: 'SQL',
      link: 'https://en.wikipedia.org/wiki/SQL'
    }, {
      name: 'MongoDB',
      link: 'https://www.mongodb.com/'
    }, {
      name: 'PostgreSQL',
      link: 'https://www.postgresql.org/'
    }, {
      name: 'Flyway',
      link: 'https://flywaydb.org/'
    }, {
      name: 'JavaScript',
      link: 'https://www.javascript.com/'
    }, {
      name: 'REST APIs',
      link: 'https://www.redhat.com/en/topics/api/what-is-a-rest-api'
    }, {
      name: 'XML',
      link: 'https://developer.mozilla.org/en-US/docs/Web/XML'
    }, {
      name: 'JSON',
      link: 'https://www.json.org/json-en.html'
    }, {
      name: 'YAML',
      link: 'https://yaml.org/'
    }]
  }]
}, {
  name: 'CI/CD',
  nav: 'cicd',
  header: 'CI/CD - Deployments and Versioning',
  content: `
    Knowing how to code is only half the battle, it is essential for a developer to be experienced with Continous Integration and Deployments.
    With my knowledge of various Versioning Systems and Deployment Platforms, I have managed multiple projects' integrations and deployments.
    I have also worked with hotfixes, rollbacks, load-testing and production database management.
    `,
  skills: [{
    name: 'Platforms',
    items: [{
      name: 'AWS S3',
      link: 'https://aws.amazon.com/s3/'
    }, {
      name: 'AWS EC2',
      link: 'https://aws.amazon.com/ec2/'
    }, {
      name: 'AWS Elastic Beanstalk',
      link: 'https://aws.amazon.com/elasticbeanstalk/'
    }, {
      name: 'AWS Cloudfront',
      link: 'https://aws.amazon.com/cloudfront/'
    }, {
      name: 'Bitbucket',
      link: 'https://bitbucket.org/'
    }, {
      name: 'Github',
      link: 'https://github.com/shubham21197'
    }]
  }, {
    name: 'Technologies',
    items: [{
      name: 'Git',
      link: 'https://git-scm.com/'
    }, {
      name: 'Docker',
      link: 'https://www.docker.com/'
    }, {
      name: 'JMeter',
      link: 'https://jmeter.apache.org/'
    }, {
      name: 'Bash',
      link: 'https://www.gnu.org/software/bash/'
    }]
  }]
}, {
  name: 'Integrations',
  nav: 'integrations',
  header: '3rd Party Integrations',
  content: `
    Sometimes it is not practical to develop everything from scratch, and it is essential to know how to integrate 3rd party services.
    I have worked with multiple integrations, including payment gateways, email services, authentication providers and CRM softwares.
    My experience in these fields allow me to quickly integrate new services and APIs into existing projects, while also being able to
    manage integration and error handlding flows to provide a seamless experience.
    `,
  skills: [{
    name: 'Technologies',
    items: [{
      name: 'Stripe',
      link: 'https://stripe.com/'
    }, {
      name: 'PayPal',
      link: 'https://www.paypal.com/'
    }, {
      name: 'APIGEE',
      link: 'https://cloud.google.com/apigee'
    }, {
      name: 'Salesforce',
      link: 'https://www.salesforce.com/'
    }, {
      name: 'SendGrid',
      link: 'https://sendgrid.com/'
    }, {
      name: 'Mailchimp',
      link: 'https://mailchimp.com/'
    }, {
      name: 'APIGEE',
      link: 'https://cloud.google.com/apigee'
    }]
  }]
}];

/***/ }),

/***/ 2554:
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationComponent": () => (/* binding */ EducationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/theme.service */ 8140);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7822);



class EducationComponent {
  constructor(themeService) {
    this.themeService = themeService;
  }
  get lightTheme() {
    return this.themeService.lightMode;
  }
}
EducationComponent.ɵfac = function EducationComponent_Factory(t) {
  return new (t || EducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService));
};
EducationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: EducationComponent,
  selectors: [["app-education"]],
  decls: 100,
  vars: 1,
  consts: [[1, "education-container"], [1, "head"], ["color", "primary", 1, "icon"], [1, "provider-container"], ["target", "_blank", "href", "https://www.westernsydney.edu.au/future/study/courses/postgraduate/master-of-artificial-intelligence", 1, "link", "no-link"], [1, "title"], ["src", "assets/images/wsu.webp", "width", "100", 1, "logo"], [1, "institution"], [1, "timeline"], ["target", "_blank", "href", "https://hbook.westernsydney.edu.au/programs/master-artificial-intelligence/", 1, "link"], [1, "icon"], [1, "description"], ["target", "_blank", "href", "https://manipal.edu/mit/program-list/btech/btech-computer-science-engineering.html", 1, "link", "no-link"], ["width", "200", 1, "logo", 3, "src"], ["target", "_blank", "href", "https://manipal.edu/content/dam/manipal/mu/mit/documents/CSE/BTech-CSE_2020.pdf", 1, "link"], ["target", "_blank", "href", "https://coursera.org/share/f8c08b113f2a1a874c16bf1550d5cdd3", 1, "link", "no-link"], ["target", "_blank", "href", "https://coursera.org/share/cf9607bfe0b88be7470e7a113dc7dcc3", 1, "link", "no-link"], ["target", "_blank", "href", "https://coursera.org/share/99e0c09cec2acf80bf1fe84ac8d04c72", 1, "link", "no-link"], ["target", "_blank", "href", "https://coursera.org/share/a7f2a9a7c4f8fc3772d7d9fd7c3503e4", 1, "link", "no-link"], ["target", "_blank", "href", "https://coursera.org/share/08262f26fc6004568f974bd08e733e9e", 1, "link", "no-link"], ["target", "_blank", "href", "https://coursera.org/share/8687e756ee0193406115641d1c096473", 1, "link", "no-link"], ["target", "_blank", "href", "https://coursera.org/share/4f868553e72a94d2a98fc5476b7c9223", 1, "link", "no-link"], ["target", "_blank", "href", "https://www.pearsonpte.com/", 1, "link", "no-link"], ["target", "_blank", "href", "https://frontendmasters.com/courses/accessibility-v2/", 1, "link", "no-link"], ["target", "_blank", "href", "https://frontendmasters.com/courses/complete-react-v7/", 1, "link", "no-link"]],
  template: function EducationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "school");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Education ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "a", 4)(7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Master of Artificial Intelligence ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Western Sydney University ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " 2021 - 2023 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Course Handbook ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "open_in_new");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " I pursued my Master's degree in Artificial Intelligence with a major in Data Science at Western Sydney University, a journey that spanned the years 2021 - 2023. During this enriching academic experience, I delved deep into the realm of Artificial Intelligence, with a specific focus on Data Science. This program not only provided me with a comprehensive understanding of AI methodologies but also equipped me with advanced data analytics techniques, machine learning algorithms, and data-driven decision-making skills. Through a rigorous curriculum and hands-on projects, I honed my ability to extract meaningful insights from complex datasets, design and implement machine learning models, and leverage data to drive informed decisions. My studies at Western Sydney University not only broadened my knowledge in the field of Artificial Intelligence but also prepared me to tackle real-world challenges in the data-driven industry. This Master's program allowed me to explore the cutting-edge developments in AI and data science, positioning me at the forefront of innovation in these fields. Overall, my experience at Western Sydney University has been instrumental in shaping my expertise and passion for the exciting and rapidly evolving domains of Artificial Intelligence and Data Science ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 3)(21, "a", 12)(22, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Bachelor of Computer Science ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Manipal University ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " 2015 - 2019 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Course Handbook ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "open_in_new");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " I earned my Bachelor's degree in Computer Science with a major in Intelligent Systems from Manipal University, where I embarked on a transformative academic journey from 2015 to 2019. This comprehensive program provided me with a strong foundation in computer science principles, programming languages, and cutting-edge technologies, while also specializing in the fascinating field of Intelligent Systems. This education equipped me with the skills and knowledge necessary to excel in the dynamic and rapidly evolving realm of computer science and intelligent systems. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 3)(36, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Certifications and Courses ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 11)(39, "ul")(40, "li")(41, "a", 15)(42, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Deep Learning Specialization (deeplearning.ai)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "open_in_new");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li")(47, "a", 16)(48, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Convolutional Neural Networks");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "open_in_new");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li")(53, "a", 17)(54, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Sequence Models");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "open_in_new");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li")(59, "a", 18)(60, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Neural Networks and Deep Learning");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "open_in_new");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li")(65, "a", 19)(66, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Structuring Machine Learning Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "open_in_new");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li")(71, "a", 20)(72, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "open_in_new");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li")(77, "a", 21)(78, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Graphic Design (CalArts)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "open_in_new");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li")(83, "a", 22)(84, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Pearson Test of English (90/90)");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "open_in_new");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "li")(89, "a", 23)(90, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Web Accessibility");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "open_in_new");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "li")(95, "a", 24)(96, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Complete Intro to React");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "open_in_new");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/manipal_" + (ctx.lightTheme ? "light" : "dark") + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    }
  },
  dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
  styles: ["@charset \"UTF-8\";\n.education-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.education-container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  padding: 32px;\n  font-size: 42px;\n  font-weight: 600;\n  text-align: center;\n}\n@media screen and (max-width: 600px) {\n  .education-container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    line-height: 1;\n    vertical-align: middle;\n  }\n}\n.education-container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: scale(1.5) translate(0, -4px);\n}\n@media screen and (max-width: 600px) {\n  .education-container[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n}\n.education-container[_ngcontent-%COMP%]   .provider-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.education-container[_ngcontent-%COMP%]   .provider-container[_ngcontent-%COMP%]    + .provider-container[_ngcontent-%COMP%] {\n  margin-top: 64px;\n}\n.education-container[_ngcontent-%COMP%]   .provider-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 24pt;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\n  .education-container[_ngcontent-%COMP%]   .provider-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    line-height: 1;\n  }\n}\n.education-container[_ngcontent-%COMP%]   .provider-container[_ngcontent-%COMP%]   .institution[_ngcontent-%COMP%] {\n  font-size: 18pt;\n  font-weight: 500;\n  margin: 16px;\n}\n.education-container[_ngcontent-%COMP%]   .provider-container[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%] {\n  font-size: 14pt;\n  font-weight: 400;\n  margin-bottom: 8px;\n}\n.education-container[_ngcontent-%COMP%]   .provider-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  padding: 16px;\n  margin: 16px auto;\n  width: 95%;\n  text-align: center;\n  background-color: rgba(170, 170, 170, 0.2666666667);\n  border-bottom: 4px solid #1e6dd4;\n  text-align: left;\n  display: flex;\n  gap: 2px;\n}\n.education-container[_ngcontent-%COMP%]   .provider-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: left;\n  list-style-type: \"\u00BB \";\n}\n.education-container[_ngcontent-%COMP%]   .provider-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-left: 4px;\n}\n@media screen and (max-width: 828px) {\n  .education-container[_ngcontent-%COMP%]   .provider-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    display: inline;\n    padding-left: 4px;\n    margin: 0;\n  }\n}\n@media screen and (max-width: 796px) {\n  .education-container[_ngcontent-%COMP%]   .provider-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFFaEI7RUFDSSxpQkFBQTtBQUFKO0FBRUk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUVRO0VBTko7SUFPUSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxjQUFBO0lBQ0Esc0JBQUE7RUFDVjtBQUNGO0FBQ1E7RUFDSSx3Q0FBQTtBQUNaO0FBQVk7RUFGSjtJQUdRLGNBQUE7RUFHZDtBQUNGO0FBQ0k7RUFDSSxrQkFBQTtBQUNSO0FBQ1E7RUFDSSxnQkFBQTtBQUNaO0FBRVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFaO0FBRVk7RUFMSjtJQU1RLGNBQUE7RUFDZDtBQUNGO0FBRVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQVo7QUFHUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRFo7QUFJUTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1EQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0FBRlo7QUFJWTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7QUFGaEI7QUFJZ0I7RUFDSSxnQkFBQTtBQUZwQjtBQUtnQjtFQUdRO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0lBQ0EsU0FBQTtFQUwxQjtBQUNGO0FBVVk7RUEvQko7SUFnQ1Esa0JBQUE7RUFQZDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc2Nzcy9jb2xvcnMnO1xyXG5cclxuLmVkdWNhdGlvbi1jb250YWluZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgLmhlYWQge1xyXG4gICAgICAgIHBhZGRpbmc6IDMycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpIHRyYW5zbGF0ZSgwLCAtNHB4KTtcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wcm92aWRlci1jb250YWluZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgJisucHJvdmlkZXItY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNjRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRwdDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmluc3RpdHV0aW9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB0O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDE2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGltZWxpbmUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTZweCBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE0O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgJGJsdWU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGdhcDogMnB4O1xyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogXCLDgsK7IFwiO1xyXG5cclxuICAgICAgICAgICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyOHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTZweCkge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1427:
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExperienceComponent": () => (/* binding */ ExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/theme.service */ 8140);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7822);



class ExperienceComponent {
  constructor(themeService) {
    this.themeService = themeService;
  }
  get lightMode() {
    return this.themeService.lightMode;
  }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) {
  return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService));
};
ExperienceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ExperienceComponent,
  selectors: [["app-experience"]],
  decls: 115,
  vars: 1,
  consts: [[1, "experience-container"], [1, "experience-head"], ["color", "primary", "mat-list-icon", ""], [1, "job-container"], [1, "job-header"], ["alt", "Digital Purpose", 3, "src"], [1, "job-title"], [1, "job-role"], [1, "job-timeline"], [1, "job-description"], [1, "job-description-title"], ["src", "assets/images/amadeus.png", "alt", "Amadeus", "width", "200"]],
  template: function ExperienceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "domain");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Past Experience ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Full-Stack Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "April 2022 - Current");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9)(14, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Responsibilities");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul")(17, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Designing and developing responsive and accessible frontends for websites, portals, and apps.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Testing and maintaining frontend applications and websites.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Creating cross platform applications using technologies like Ionic and React Native.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Developing backend software and APIs, and seamlessly integrating them with databases and other services.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Managing Databases: integration, development and deployment.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Ensuring optimal performance, scalability, and maintenance of backend systems.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Coordinating with clients and delivering according to their requirements.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Worked with many major third party services and APIs ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ul")(34, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Integrating software applications with various frameworks and services like Salesforce, Cognito, Stripe, OpenAI (ChatGPT), and more. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Conducting research and creating plugins and external integrations for platforms like WordPress and Squarespace.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Managed various aspects of deployment ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ul")(41, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Configuring CI/CD pipelines to automate software testing and deployment.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Swiftly resolving issues with production and staging environments through bug fixing and hotfixing.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Managing deployments and monitoring applications for potential issues, delays, or errors on AWS.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Creating and reviewing technical and functional documents.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Enhancing the Software Development Lifecycle while upholding rigorous quality standards.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Developing Proof of Concepts and prototypes, particularly in the AI/ML domain, for new projects and clients.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Performing comprehensive tests such as Load Tests and Penetration Tests to ensure the security of live applications.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 9)(56, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Technologies");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " Angular, Spring Boot, Flyway, Java, JS, HTML, CSS, SCSS, TypeScript, Python, PHP, MySQL, Postgres, AWS, Docker, Git, Jira, Confluence, Salesforce, Cognito, Stripe, OpenAI (ChatGPT), WordPress, Squarespace, and more. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 3)(60, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "img", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 6)(63, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Full-Stack Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "July 2019 - July 2021");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 9)(68, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Responsibilities");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "ul")(71, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Worked on the developers.amadeus.com portal, enabling customers to purchase, utilize, and try-out various APIs.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Utilized technologies like Angular and Drupal CMS to build the portal's interface based on user needs.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Seamlessly integrated the application with various services like Drupal and APIGEE.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Developed the Microservice based API backend using Spring and Java.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Managed, optimised and integrated a SQL database with the backend services.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Worked on Microservice obfuscation to protect customer identities and sensistive data.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Billing Based on API Usage: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "ul")(86, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Led a major project involving billing calculation and API throttling with APIGEE.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Implemented dynamic throttling and billing for user access, significantly impacting company revenue and customer experience.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Application Security: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "ul")(93, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Conducted regular security audits of the portal to ensure compliance with industry standards, addressing CSRF protection on both frontend and backend.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Followed the latest security guidelines while developing applications to maintain a secure environent.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Maintenance and Quality Assurance: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "ul")(100, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Performed production bug fixes and real-time issue resolution.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Engaged in Quality Assurance, including product testing and test case creation using Selenium.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Release Management: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "ul")(107, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Led three quarterly releases to production.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Took responsibility for delivering new features, ensuring quality assurance, and handling various DevOps tasks.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 9)(112, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Technologies");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, " Angular, Spring, Java, JS, HTML, CSS, SCSS, TypeScript, Python, MariaDB, Git, Jira, Confluence, APIGEE, Drupal and more. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/" + (ctx.lightMode ? "dp.svg" : "dp_dark.svg"), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    }
  },
  dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
  styles: ["@charset \"UTF-8\";\n.experience-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  text-align: center;\n}\n.experience-container[_ngcontent-%COMP%]   .experience-head[_ngcontent-%COMP%] {\n  padding: 32px;\n  font-size: 42px;\n  font-weight: 600;\n  text-align: center;\n}\n@media screen and (max-width: 600px) {\n  .experience-container[_ngcontent-%COMP%]   .experience-head[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    line-height: 1;\n    vertical-align: middle;\n  }\n}\n.experience-container[_ngcontent-%COMP%]   .experience-head[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: scale(1.5) translate(0, -4px);\n}\n@media screen and (max-width: 600px) {\n  .experience-container[_ngcontent-%COMP%]   .experience-head[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n}\n.experience-container[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n.experience-container[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%]   .job-role[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n}\n.experience-container[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%]   .job-timeline[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n}\n.experience-container[_ngcontent-%COMP%]   .job-container[_ngcontent-%COMP%]    + .job-container[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.experience-container[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: left;\n  max-width: 50%;\n  margin: 0 auto;\n}\n@media screen and (max-width: 960px) {\n  .experience-container[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n.experience-container[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]   .job-description-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  text-align: left;\n}\n.experience-container[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: \"\u00BB\";\n  margin: 0 auto;\n  padding: 4px;\n  text-align: left;\n  font-size: 14px;\n  font-weight: 400;\n}\n.experience-container[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: circle;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFBUTtFQU5KO0lBT1EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsY0FBQTtJQUNBLHNCQUFBO0VBR1Y7QUFDRjtBQURRO0VBQ0ksd0NBQUE7QUFHWjtBQUZZO0VBRko7SUFHUSxjQUFBO0VBS2Q7QUFDRjtBQUFRO0VBQ0ksV0FBQTtBQUVaO0FBRFk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFHaEI7QUFBWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUVoQjtBQUdJO0VBQ0ksZ0JBQUE7QUFEUjtBQUlJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFGUjtBQUlRO0VBTko7SUFPUSxlQUFBO0VBRFY7QUFDRjtBQUdRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFEWjtBQU1ZO0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSmhCO0FBTWdCO0VBQ0ksdUJBQUE7QUFKcEIiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhwZXJpZW5jZS1jb250YWluZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLmV4cGVyaWVuY2UtaGVhZCB7XHJcbiAgICAgICAgcGFkZGluZzogMzJweDtcclxuICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KSB0cmFuc2xhdGUoMCwgLTRweCk7XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuam9iLWhlYWRlciB7XHJcbiAgICAgICAgLmpvYi10aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogOHB4O1xyXG4gICAgICAgICAgICAuam9iLXJvbGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmpvYi10aW1lbGluZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5qb2ItY29udGFpbmVyICsgLmpvYi1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmpvYi1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuam9iLWRlc2NyaXB0aW9uLXRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBcIsOCwrtcIjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/theme.service */ 8140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _scroller_scroller_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scroller/scroller.component */ 5351);








const _c0 = ["scroller"];
function HeaderComponent_a_9_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const route_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](route_r6.title);
  }
}
function HeaderComponent_a_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_a_9_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const route_r6 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.scrollTo(route_r6.path));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 10)(2, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HeaderComponent_a_9_p_4_Template, 2, 1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const route_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active-link", ctx_r1.scrollPosition === i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", !ctx_r1.isExpanded ? route_r6.title : " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", route_r6.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isExpanded);
  }
}
function HeaderComponent_mat_icon_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "brightness_5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_mat_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "bedtime");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4.lightMode ? "Light" : "Dark", " Mode");
  }
}
class HeaderComponent {
  get lightMode() {
    return this.themeService.lightMode;
  }
  constructor(themeService) {
    this.themeService = themeService;
    this.className = '';
    this.mobile = false;
    this.isExpanded = true;
    this.scrollPosition = 0;
    this.routes = [{
      path: 'home',
      icon: 'home',
      title: 'Home'
    }, {
      path: 'skills',
      icon: 'code',
      title: 'Skills'
    }, {
      path: 'experience',
      icon: 'domain',
      title: 'Experience'
    }, {
      path: 'education',
      icon: 'school',
      title: 'Education'
    }];
    this.mobile = window.innerWidth < 768;
    this.isExpanded = !this.mobile;
  }
  ngOnInit() {
    this.className = this.themeService.lightMode ? '' : 'darkMode';
  }
  onResize() {
    if (window.innerWidth < 768) {
      if (this.isExpanded) {
        this.toggle();
      }
      this.mobile = true;
    }
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  scrollTo(page) {
    this.scroller.scrollToPage(page);
  }
  setScrollPosition(position) {
    this.scrollPosition = position;
  }
  toggleMode() {
    this.themeService.lightMode = !this.themeService.lightMode;
    this.className = this.themeService.lightMode ? '' : 'darkMode';
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  viewQuery: function HeaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function HeaderComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.className);
    }
  },
  decls: 19,
  vars: 12,
  consts: [[3, "autosize", "hasBackdrop"], ["mode", "side", "opened", "", 3, "fixedInViewport"], ["sidenav", ""], [1, "h-100", "d-flex", "flex-column"], [1, "toggle"], ["color", "primary", 3, "click"], [1, "nav", "d-flex", "flex-column", "justify-content-between"], [1, ""], ["mat-list-item", "", 3, "active-link", "click", 4, "ngFor", "ngForOf"], ["mat-list-item", "", 3, "click"], [1, "d-flex", "flex-row", "gap-2", "nav-icon-holder"], ["color", "primary", 4, "ngIf"], ["matLine", "", 4, "ngIf"], [3, "currentPage", "setPage"], ["scroller", ""], ["color", "primary", "mat-list-icon", "", "matTooltipPosition", "right", 3, "matTooltip"], ["matLine", ""], ["color", "primary"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-sidenav-container", 0)(1, "mat-sidenav", 1, 2)(3, "section", 3)(4, "div", 4)(5, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_mat_icon_click_5_listener() {
        return ctx.toggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " dehaze ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-nav-list", 6)(8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, HeaderComponent_a_9_Template, 5, 5, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() {
        return ctx.toggleMode();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, HeaderComponent_mat_icon_13_Template, 2, 0, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, HeaderComponent_mat_icon_14_Template, 2, 0, "mat-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, HeaderComponent_p_15_Template, 2, 1, "p", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-sidenav-content")(17, "app-scroller", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("setPage", function HeaderComponent_Template_app_scroller_setPage_17_listener($event) {
        return ctx.setScrollPosition($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("autosize", !ctx.mobile)("hasBackdrop", ctx.mobile && ctx.isExpanded);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-drawer-dark", !ctx.lightMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedInViewport", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("sidenav", ctx.isExpanded);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.routes);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.lightMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.lightMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isExpanded);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("currentPage", ctx.scrollPosition);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__.MatTooltip, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListItem, _scroller_scroller_component__WEBPACK_IMPORTED_MODULE_1__.ScrollerComponent],
  styles: [".sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n}\n.sidenav[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n.toggle[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  padding: 25px 16px;\n  flex: 0 1 auto;\n}\n.toggle[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.nav[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.nav[_ngcontent-%COMP%]:last-child {\n  float: bottom;\n}\n.nav[_ngcontent-%COMP%]   .active-link[_ngcontent-%COMP%] {\n  background-color: rgba(100, 100, 100, 0.2);\n  box-sizing: border-box;\n  border-left: solid 3px #ffb300;\n}\n.nav[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: none;\n  box-sizing: border-box;\n  text-decoration: none;\n}\n.nav[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]:hover, .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: rgba(100, 100, 100, 0.2);\n  border-left: solid 3px #ffb300;\n}\n.nav[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   .nav-icon-holder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .nav-icon-holder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.mat-drawer[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/bg-nav-light.png\");\n}\n\n.mat-drawer-dark[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/bg-nav.png\") !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLFlBQUE7QUFISjtBQUtJO0VBQ0ksMkJBQUE7QUFIUjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFKSjtBQU1JO0VBQ0ksZUFBQTtBQUpSOztBQVFBO0VBRUksY0FBQTtBQU5KO0FBT0k7RUFDSSxhQUFBO0FBTFI7QUFPSTtFQUNJLDBDQTdCTztFQThCUCxzQkFBQTtFQUNBLDhCQUFBO0FBTFI7QUFRSTs7RUFFSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQU5SO0FBUVE7O0VBQ0ksZUFBQTtFQUNBLDBDQTFDRztFQTJDSCw4QkFBQTtBQUxaO0FBUVE7O0VBQ0ksU0FBQTtBQUxaOztBQVVBO0VBQ0ksd0RBQUE7QUFQSjs7QUFXQTtFQUNJLDZEQUFBO0FBUkoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zY3NzL2NvbG9ycyc7XHJcblxyXG4kc2VsZWN0ZWQtbmF2OiByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuMik7XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcblxyXG4gICAgLnRvZ2dsZSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG59XHJcblxyXG4udG9nZ2xlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgcGFkZGluZzogMjVweCAxNnB4O1xyXG4gICAgZmxleDogMCAxIGF1dG87XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmF2IHtcclxuXHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgZmxvYXQ6IGJvdHRvbTtcclxuICAgIH1cclxuICAgIC5hY3RpdmUtbGluayB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlbGVjdGVkLW5hdjtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAzcHggJHByaW1hcnk7XHJcbiAgICB9XHJcblxyXG4gICAgbWF0LWxpc3QtaXRlbSxcclxuICAgIGEge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlbGVjdGVkLW5hdjtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDNweCAkcHJpbWFyeTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXYtaWNvbi1ob2xkZXIgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtZHJhd2VyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmctbmF2LWxpZ2h0LnBuZycpO1xyXG59XHJcblxyXG5cclxuLm1hdC1kcmF3ZXItZGFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2JnLW5hdi5wbmcnKSAhaW1wb3J0YW50O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_scroll_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/scroll.service */ 550);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);




function HomeComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_36_Template_mat_icon_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.scrollTo("skills"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class HomeComponent {
  constructor(scrollService) {
    this.scrollService = scrollService;
    this.onTop = true;
  }
  scrollTo(page) {
    this.scrollService.scrollToPage.emit(page);
  }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) {
  return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_scroll_service__WEBPACK_IMPORTED_MODULE_0__.ScrollService));
};
HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomeComponent,
  selectors: [["app-home"]],
  inputs: {
    onTop: "onTop"
  },
  decls: 37,
  vars: 1,
  consts: [[1, "home-container"], [1, "home-header"], [1, "main-info"], [1, "title"], [1, "subtitle"], [1, "contacts"], ["color", "primary", "aria-label", "email"], [1, "contacts", "green"], ["color", "primary", "aria-label", "phone"], [1, "contacts", "blue"], ["aria-label", "linkedin", "svgIcon", "linkedin"], ["href", "https://www.linkedin.com/in/shubham-singhal-s/", "target", "_blank"], ["aria-label", "github", "svgIcon", "github"], ["href", "https://github.com/shubham-singhal-s", "target", "_blank"], ["color", "warn", "aria-label", "location"], ["class", "down", 4, "ngIf"], [1, "down"], [1, "scroll-container"], ["color", "primary", 1, "hover", 3, "click"], [1, "circle"]],
  template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Shubham Singhal");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Full-Stack | AI | Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "mat-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " shubham21197@gmail.com ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7)(12, "mat-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " +61 403 773 769 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "mat-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "shubham-singhal-s");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "mat-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "shubham-singhal-s");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 5)(24, "mat-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "location_on");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Sydney, NSW ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "blockquote")(28, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " As an accomplished full-stack developer boasting over three years of hands-on experience and armed with aBachelor's degree in Computer Science complemented by a Master's in Artificial Intelligence, I have a distinguished trackrecord ofcontributing to numerous AI-driven projects. My proficiency extends across a spectrum of cutting-edgetechnologies,including Angular, React, Spring, Databases, and Python, enabling me to seamlessly navigate both Backend andFrontenddevelopment landscapes. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Furthermore, my expertise extends beyond development to encompass a deep understanding of deployment procedures and proficient CI/CD management. Beyond the confines of my professional responsibilities, I am deeply engrossed in the world of AI, continually exploring and refining AI models. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " In addition to my technical prowess, I possess a keen eye for design, crafting visually striking designs. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " This multifaceted skill set embodies my commitment to innovation, technical excellence, and creative finesse, making me a well-rounded candidate prepared to excel in the field of Artificial Intelligence. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, HomeComponent_div_36_Template, 5, 0, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onTop);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
  styles: ["@charset \"UTF-8\";\n.home-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  position: relative;\n}\n.home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%] {\n  width: 100%;\n  background-image: url(\"/assets/images/header-bg.png\");\n  background-size: cover;\n  display: flex;\n  justify-content: space-between;\n  padding: 92px 64px 48px;\n  border-width: 0 0 4px;\n  border-style: solid;\n  border-image: linear-gradient(to right, rgb(46, 183, 229), #1e6dd4) 1;\n}\n@media screen and (max-width: 796px) {\n  .home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 16px 0 0;\n  }\n}\n.home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%]   .profile-pic[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n@media screen and (max-width: 796px) {\n  .home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%]   .profile-pic[_ngcontent-%COMP%] {\n    order: 1;\n    margin: 0 auto;\n  }\n}\n.home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%] {\n  font-family: helvetica, sans-serif;\n  padding: 32px 64px 0;\n}\n.home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 36pt;\n  font-weight: 700;\n}\n.home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n.home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  font-size: 10pt;\n  margin: 4px 12px;\n  width: 100%;\n}\n.home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]   .contacts.green[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]   .contacts.blue[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1e6dd4;\n}\n.home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 16pt;\n}\n.home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1e6dd4;\n  text-decoration: none;\n}\n.home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #1856a7;\n}\n@media screen and (max-width: 1100px) {\n  .home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 32pt;\n    font-weight: 600;\n  }\n}\n@media screen and (max-width: 1020px) {\n  .home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 26pt;\n    font-weight: 600;\n  }\n}\n@media screen and (max-width: 796px) {\n  .home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%] {\n    padding: 16px;\n    order: 2;\n  }\n  .home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n    font-weight: 500;\n    text-align: center;\n    width: 100%;\n    margin: 0;\n  }\n  .home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    padding: 0;\n    text-align: center;\n    width: 100%;\n  }\n  .home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    padding-left: 24px;\n    padding-right: 42px;\n    width: 100%;\n    margin-top: 8px;\n  }\n}\n@media screen and (max-width: 360px) {\n  .home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%] {\n    padding: 0;\n    flex-direction: column;\n    text-align: center;\n  }\n  .home-container[_ngcontent-%COMP%]   .home-header[_ngcontent-%COMP%]   .main-info[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 100%;\n    margin: 0 auto;\n  }\n}\n\nblockquote[_ngcontent-%COMP%] {\n  background: rgba(249, 249, 249, 0.1333333333);\n  border-left: 10px solid rgba(204, 204, 204, 0.4);\n  margin: 1.5em 10px;\n  padding: 1.5em 10px;\n  quotes: \"\u201C\" \"\u201D\" \"\u2018\" \"\u2019\";\n  font-size: large;\n}\nblockquote[_ngcontent-%COMP%]   br[_ngcontent-%COMP%] {\n  margin: 4px;\n}\n@media screen and (max-width: 796px) {\n  blockquote[_ngcontent-%COMP%] {\n    font-size: medium;\n  }\n}\n\nblockquote[_ngcontent-%COMP%]:before {\n  content: open-quote;\n  font-size: 4em;\n  line-height: 0.1em;\n  margin-right: 0.25em;\n  vertical-align: -0.4em;\n}\n\n.down[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  bottom: 32px;\n}\n.down[_ngcontent-%COMP%]   .scroll-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: scale(3);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_pulse 6s infinite;\n  padding: 0;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    box-shadow: rgba(255, 105, 180, 0) 0 0 0 0;\n    background-color: rgba(255, 105, 180, 0);\n  }\n  15% {\n    box-shadow: rgba(255, 161, 72, 0.2666666667) 0 0 0 0;\n    background-color: rgba(255, 161, 72, 0.2666666667);\n  }\n  30% {\n    box-shadow: rgba(255, 105, 180, 0) 0 0 0 6px;\n    background-color: rgba(255, 105, 180, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUVoQjtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUVFO0VBQ0UsV0FBQTtFQUNBLHFEQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxRUFBQTtBQUFKO0FBR0k7RUFaRjtJQWFJLHNCQUFBO0lBQ0EsaUJBQUE7RUFBSjtBQUNGO0FBRUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUFOO0FBRU07RUFKRjtJQUtJLFFBQUE7SUFDQSxjQUFBO0VBQ047QUFDRjtBQUVJO0VBQ0Usa0NBQUE7RUFDQSxvQkFBQTtBQUFOO0FBRU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUdNO0VBQ0UsaUJBQUE7QUFEUjtBQUlNO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUZSO0FBS1U7RUFDRSxjQUFBO0FBSFo7QUFRVTtFQUNFLGNDNURMO0FEc0RQO0FBVVE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFSVjtBQVdRO0VBQ0UsY0N0RUg7RUR1RUcscUJBQUE7QUFUVjtBQVdVO0VBQ0UsY0FBQTtBQVRaO0FBY007RUFDRTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQVpSO0FBQ0Y7QUFlTTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VBYlI7QUFDRjtBQWdCTTtFQTdERjtJQThESSxhQUFBO0lBQ0EsUUFBQTtFQWJOO0VBZU07SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtFQWJSO0VBZ0JNO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtFQWRSO0VBaUJNO0lBQ0UsYUFBQTtJQUNBLDhCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VBZlI7QUFDRjtBQW1CTTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7RUFqQlI7RUFtQlE7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0VBakJWO0FBQ0Y7O0FBd0JBO0VBQ0UsNkNBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBckJGO0FBdUJFO0VBQ0UsV0FBQTtBQXJCSjtBQXdCRTtFQVpGO0lBY0ksaUJBQUE7RUF0QkY7QUFDRjs7QUEwQkE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQXZCRjtBQTRCSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUExQk47QUE4QkU7RUFDRTtJQUNFLDBDQUFBO0lBQ0Esd0NBQUE7RUE1Qko7RUE4QkU7SUFDRSxvREFBQTtJQUNBLGtEQUFBO0VBNUJKO0VBOEJFO0lBQ0UsNENBQUE7SUFDQSx3Q0FBQTtFQTVCSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc2Nzcy9jb2xvcnMnO1xyXG5cclxuLmhvbWUtY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5ob21lLWhlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2hlYWRlci1iZy5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDkycHggNjRweCA0OHB4O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgNHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoNDYsIDE4MywgMjI5KSwgJGJsdWUpXHJcbiAgICAgIDE7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzk2cHgpIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgcGFkZGluZzogMTZweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtcGljIHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG5cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzk2cHgpIHtcclxuICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tYWluLWluZm8ge1xyXG4gICAgICBmb250LWZhbWlseTogaGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICBwYWRkaW5nOiAzMnB4IDY0cHggMDtcclxuXHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb250YWN0cyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgICAgIG1hcmdpbjogNHB4IDEycHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICYuZ3JlZW4ge1xyXG4gICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogIzRjYWY1MDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYmx1ZSB7XHJcbiAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogJGJsdWU7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJGJsdWUsIDEwJSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMnB0O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjBweCkge1xyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI2cHQ7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzk2cHgpIHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIG9yZGVyOiAyO1xyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc3VidGl0bGUge1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhY3RzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MnB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTdXBwb3J0IEdhbGF4eSBmb2xkIDonKFxyXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgICAgIC5jb250YWN0cyB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYmxvY2txdW90ZSB7XHJcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTIyO1xyXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNjY2NjY2M2NjtcclxuICBtYXJnaW46IDEuNWVtIDEwcHg7XHJcbiAgcGFkZGluZzogMS41ZW0gMTBweDtcclxuICBxdW90ZXM6IFwiXFwyMDFDXCJcIlxcMjAxRFwiXCJcXDIwMThcIlwiXFwyMDE5XCI7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuXHJcbiAgYnIge1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTZweCkge1xyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5ibG9ja3F1b3RlOmJlZm9yZSB7XHJcbiAgY29udGVudDogb3Blbi1xdW90ZTtcclxuICBmb250LXNpemU6IDRlbTtcclxuICBsaW5lLWhlaWdodDogMC4xZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1ZW07XHJcbiAgdmVydGljYWwtYWxpZ246IC0wLjRlbTtcclxufVxyXG5cclxuLmRvd24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMzJweDtcclxuXHJcbiAgLnNjcm9sbC1jb250YWluZXIge1xyXG5cclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMyk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYW5pbWF0aW9uOiBwdWxzZSA2cyBpbmZpbml0ZTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgMCUge1xyXG4gICAgICBib3gtc2hhZG93OiAjZmY2OWI0MDAgMCAwIDAgMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjliNDAwO1xyXG4gICAgfVxyXG4gICAgMTUlIHtcclxuICAgICAgYm94LXNoYWRvdzogI2ZmYTE0ODQ0IDAgMCAwIDA7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmExNDg0NDtcclxuICAgIH1cclxuICAgIDMwJSB7XHJcbiAgICAgIGJveC1zaGFkb3c6ICNmZjY5YjQwMCAwIDAgMCA2cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjY5YjQwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJHByaW1hcnk6ICNmZmIzMDA7XHJcbiRibHVlOiAjMWU2ZGQ0OyJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5351:
/*!************************************************!*\
  !*** ./src/app/scroller/scroller.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollerComponent": () => (/* binding */ ScrollerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 8977);
/* harmony import */ var _services_scroll_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/scroll.service */ 550);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/home.component */ 5067);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skills/skills.component */ 5490);
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../experience/experience.component */ 1427);
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../education/education.component */ 2554);








const _c0 = ["home"];
const _c1 = ["skills"];
const _c2 = ["experience"];
const _c3 = ["education"];
class ScrollerComponent {
  constructor(scrollService) {
    this.scrollService = scrollService;
    this.currentPage = 0;
    this.setPage = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.onTop = true;
    this.midPoints = [0, 0];
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(window, 'scroll').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(100), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)()).subscribe(() => {
      this.onScroll();
    });
    this.scrollService.scrollToPage.subscribe(page => {
      this.scrollToPage(page);
    });
  }
  ngAfterViewInit() {
    this.midPoints[0] = window.scrollY + this.home.nativeElement.getBoundingClientRect().top + this.home.nativeElement.scrollHeight / 2;
    this.midPoints[1] = window.scrollY + this.skills.nativeElement.getBoundingClientRect().top + this.skills.nativeElement.scrollHeight / 2;
    this.midPoints[2] = window.scrollY + this.experience.nativeElement.getBoundingClientRect().top + this.experience.nativeElement.scrollHeight / 2;
    this.midPoints[3] = window.scrollY + this.education.nativeElement.getBoundingClientRect().top + this.education.nativeElement.scrollHeight / 2;
  }
  scrollToPage(page) {
    switch (page) {
      case 'home':
        this.home.nativeElement.scrollIntoView({
          behavior: 'smooth'
        });
        this.setPage.emit(0);
        break;
      case 'skills':
        this.skills.nativeElement.scrollIntoView({
          behavior: 'smooth'
        });
        this.setPage.emit(1);
        break;
      case 'experience':
        this.experience.nativeElement.scrollIntoView({
          behavior: 'smooth'
        });
        this.setPage.emit(2);
        break;
      case 'education':
        this.education.nativeElement.scrollIntoView({
          behavior: 'smooth'
        });
        this.setPage.emit(3);
        break;
      default:
        break;
    }
  }
  onScroll() {
    // if (this.onTop && window.scrollY > 100) {
    //   this.onTop = false;
    // }
    this.onTop = window.scrollY < 100;
    const scrollTop = window.scrollY;
    const nearestPage = this.midPoints.reduce((prev, curr) => {
      return Math.abs(curr - scrollTop) < Math.abs(prev - scrollTop) ? curr : prev;
    });
    const index = this.midPoints.indexOf(nearestPage);
    if (index === this.currentPage) {
      return;
    }
    this.setPage.emit(index);
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
ScrollerComponent.ɵfac = function ScrollerComponent_Factory(t) {
  return new (t || ScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_scroll_service__WEBPACK_IMPORTED_MODULE_0__.ScrollService));
};
ScrollerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ScrollerComponent,
  selectors: [["app-scroller"]],
  viewQuery: function ScrollerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.home = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.skills = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.experience = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.education = _t.first);
    }
  },
  inputs: {
    currentPage: "currentPage"
  },
  outputs: {
    setPage: "setPage"
  },
  decls: 11,
  vars: 1,
  consts: [[3, "onTop"], ["home", ""], ["skills", ""], ["experience", ""], ["education", ""]],
  template: function ScrollerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-home", 0, 1)(2, "hr")(3, "app-skills", null, 2)(5, "hr")(6, "app-experience", null, 3)(8, "hr")(9, "app-education", null, 4);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("onTop", ctx.onTop);
    }
  },
  dependencies: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__.SkillsComponent, _experience_experience_component__WEBPACK_IMPORTED_MODULE_3__.ExperienceComponent, _education_education_component__WEBPACK_IMPORTED_MODULE_4__.EducationComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 550:
/*!********************************************!*\
  !*** ./src/app/services/scroll.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollService": () => (/* binding */ ScrollService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class ScrollService {
  constructor() {
    this.scrollToPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
}
ScrollService.ɵfac = function ScrollService_Factory(t) {
  return new (t || ScrollService)();
};
ScrollService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ScrollService,
  factory: ScrollService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8140:
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ThemeService {
  get lightMode() {
    return this._lightMode;
  }
  set lightMode(value) {
    localStorage.setItem('lightMode', value.toString());
    this._lightMode = value;
  }
  constructor() {
    this._lightMode = true;
    const prefersLight = !window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (!localStorage.getItem('lightMode')) {
      localStorage.setItem('lightMode', prefersLight.toString());
    }
    this._lightMode = localStorage.getItem('lightMode') === 'true';
  }
}
ThemeService.ɵfac = function ThemeService_Factory(t) {
  return new (t || ThemeService)();
};
ThemeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ThemeService,
  factory: ThemeService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 89:
/*!****************************************************!*\
  !*** ./src/app/skill-page/skill-page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillPageComponent": () => (/* binding */ SkillPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _accessories_skill_button_skill_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../accessories/skill-button/skill-button.component */ 8849);




function SkillPageComponent_div_8_app_skill_button_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-skill-button", 11);
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", m_r3.name)("link", m_r3.link);
  }
}
function SkillPageComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8)(4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SkillPageComponent_div_8_app_skill_button_5_Template, 1, 2, "app-skill-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](skill_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", skill_r1.items);
  }
}
class SkillPageComponent {
  constructor() {
    this.skills = [];
    this.header = '';
    this.content = '';
  }
}
SkillPageComponent.ɵfac = function SkillPageComponent_Factory(t) {
  return new (t || SkillPageComponent)();
};
SkillPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: SkillPageComponent,
  selectors: [["app-skill-page"]],
  inputs: {
    skills: "skills",
    header: "header",
    content: "content"
  },
  decls: 9,
  vars: 3,
  consts: [[1, "skill-page-container"], [1, "skill-head"], ["aria-label", "skills"], [1, "skill-info"], [1, "skill-content"], ["class", "skill-content-container", 4, "ngFor", "ngForOf"], [1, "skill-content-container"], [1, "skill-content-header"], [1, "skill-content-info"], [1, "skill-buttons"], [3, "name", "link", 4, "ngFor", "ngForOf"], [3, "name", "link"]],
  template: function SkillPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "layers");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SkillPageComponent_div_8_Template, 6, 2, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.header, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.content, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.skills);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _accessories_skill_button_skill_button_component__WEBPACK_IMPORTED_MODULE_0__.SkillButtonComponent],
  styles: [".skill-page-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: middle;\n}\n\n.skill-head[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  padding: 8px;\n  margin: 16px;\n  width: 100%;\n  text-align: center;\n  color: rgba(112, 112, 112, 0.8666666667);\n}\n@media screen and (max-width: 796px) {\n  .skill-head[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 8px;\n    margin-left: 4px;\n  }\n}\n\n.skill-info[_ngcontent-%COMP%] {\n  padding: 16px;\n  margin: 0 auto;\n  width: 95%;\n  text-align: center;\n  background-color: rgba(170, 170, 170, 0.2666666667);\n  border-bottom: 4px solid #1e6dd4;\n  text-align: left;\n  display: flex;\n  gap: 2px;\n}\n@media screen and (max-width: 796px) {\n  .skill-info[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n.skill-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n}\n.skill-content[_ngcontent-%COMP%]   .skill-content-container[_ngcontent-%COMP%] {\n  max-width: 60%;\n}\n.skill-content[_ngcontent-%COMP%]   .skill-content-container[_ngcontent-%COMP%]   .skill-content-header[_ngcontent-%COMP%] {\n  margin: 8px auto;\n  padding: 0 8px;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-bottom: 2px solid #1e6dd4;\n}\n.skill-content[_ngcontent-%COMP%]   .skill-content-container[_ngcontent-%COMP%]   .skill-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2tpbGwtcGFnZS9za2lsbC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFESjtBQUdJO0VBVEo7SUFVUSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0EsUUFBQTtJQUNBLGdCQUFBO0VBQU47QUFDRjs7QUFHQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7QUFBSjtBQUVJO0VBWEo7SUFZUSxrQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ0k7RUFDSSxjQUFBO0FBQ1I7QUFBUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxnQ0FBQTtBQUVaO0FBQ1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNaIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc2Nzcy9jb2xvcnMnO1xyXG5cclxuLnNraWxsLXBhZ2UtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IG1pZGRsZTtcclxufVxyXG5cclxuLnNraWxsLWhlYWQge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIG1hcmdpbjogMTZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM3MDcwNzBkZDtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTZweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5za2lsbC1pbmZvIHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhNDtcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAkYmx1ZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAycHg7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzk2cHgpIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5za2lsbC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5za2lsbC1jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MCU7XHJcbiAgICAgICAgLnNraWxsLWNvbnRlbnQtaGVhZGVyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiA4cHggYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRibHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNraWxsLWJ1dHRvbnMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5490:
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsComponent": () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var _data_skills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/skills */ 1175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _skill_page_skill_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../skill-page/skill-page.component */ 89);





function SkillsComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SkillsComponent_a_5_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const tab_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.navTo(tab_r1.nav));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.currentTab.nav === tab_r1.nav);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tab_r1.name, " ");
  }
}
class SkillsComponent {
  constructor() {
    this.tabs = _data_skills__WEBPACK_IMPORTED_MODULE_0__.skills;
    this.currentTab = this.tabs[0];
    this.navTo = nav => {
      const currentTab = this.tabs.find(tab => tab.nav === nav);
      if (currentTab) {
        this.currentTab = currentTab;
      }
    };
    this.openLink = link => {
      window.open(link, '_blank');
    };
  }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
  return new (t || SkillsComponent)();
};
SkillsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SkillsComponent,
  selectors: [["app-skills"]],
  decls: 9,
  vars: 4,
  consts: [[1, "skills-container"], [1, "skills-head"], ["color", "primary", "aria-label", "skills", "svgIcon", "pen-tool"], [1, "nav"], ["class", "nav-link", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "skill-container"], [3, "skills", "header", "content"], [1, "nav-link", 3, "click"]],
  template: function SkillsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Skills ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nav", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SkillsComponent_a_5_Template, 2, 3, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-skill-page", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tabs);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("skills", ctx.currentTab.skills)("header", ctx.currentTab.header)("content", ctx.currentTab.content);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _skill_page_skill_page_component__WEBPACK_IMPORTED_MODULE_1__.SkillPageComponent],
  styles: [".skills-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.skills-container[_ngcontent-%COMP%]   .skills-head[_ngcontent-%COMP%] {\n  padding: 32px;\n  font-size: 42px;\n  font-weight: 600;\n  text-align: center;\n}\n@media screen and (max-width: 600px) {\n  .skills-container[_ngcontent-%COMP%]   .skills-head[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n    vertical-align: middle;\n  }\n}\n.skills-container[_ngcontent-%COMP%]   .skills-head[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: scale(1.5) translate(0, -4px);\n}\n@media screen and (max-width: 600px) {\n  .skills-container[_ngcontent-%COMP%]   .skills-head[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n}\n.skills-container[_ngcontent-%COMP%]   .skill-container[_ngcontent-%COMP%] {\n  padding: 8px 24px;\n}\n\n.nav[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  gap: 0;\n}\n.nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  flex: 1;\n  cursor: pointer;\n  color: inherit;\n  padding: 8px 24px;\n  min-width: 128px;\n  text-align: center;\n  border-bottom: 1px solid #113f7b;\n  font-size: 12pt;\n}\n.nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #1e6dd4;\n  z-index: 10;\n  color: #1e6dd4;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFBO0FBREo7QUFHSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURSO0FBR1E7RUFOSjtJQU9RLGFBQUE7SUFDQSxzQkFBQTtJQUVBLFNBQUE7SUFDQSxzQkFBQTtFQURWO0FBQ0Y7QUFHUTtFQUNJLHdDQUFBO0FBRFo7QUFFWTtFQUZKO0lBR1EsY0FBQTtFQUNkO0FBQ0Y7QUFHSTtFQUNJLGlCQUFBO0FBRFI7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtBQUZKO0FBSUk7RUFDSSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFGUjtBQUlRO0VBQ0ksZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsY0NsREw7RURtREssZ0JBQUE7QUFGWiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3Njc3MvY29sb3JzJztcclxuXHJcbi5za2lsbHMtY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5cclxuICAgIC5za2lsbHMtaGVhZCB7XHJcbiAgICAgICAgcGFkZGluZzogMzJweDtcclxuICAgICAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC8vIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgICBnYXA6IDEycHg7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KSB0cmFuc2xhdGUoMCwgLTRweCk7XHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2tpbGwtY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMjRweDtcclxuICAgIH1cclxufVxyXG5cclxuLm5hdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZ2FwOiAwO1xyXG5cclxuICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDI0cHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMjhweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGRhcmtlbigkYmx1ZSwgMjAlKTtcclxuICAgICAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgICBcclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkYmx1ZTtcclxuICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmx1ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiJHByaW1hcnk6ICNmZmIzMDA7XHJcbiRibHVlOiAjMWU2ZGQ0OyJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
(function(e){function _(_){for(var r,s,c=_[0],o=_[1],i=_[2],l=0,d=[];l<c.length;l++)s=c[l],n[s]&&d.push(n[s][0]),n[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(_);while(d.length)d.shift()();return a.push.apply(a,i||[]),t()}function t(){for(var e,_=0;_<a.length;_++){for(var t=a[_],r=!0,c=1;c<t.length;c++){var o=t[c];0!==n[o]&&(r=!1)}r&&(a.splice(_--,1),e=s(s.s=t[0]))}return e}var r={},n={app:0},a=[];function s(_){if(r[_])return r[_].exports;var t=r[_]={i:_,l:!1,exports:{}};return e[_].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=e,s.c=r,s.d=function(e,_,t){s.o(e,_)||Object.defineProperty(e,_,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,_){if(1&_&&(e=s(e)),8&_)return e;if(4&_&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&_&&"string"!=typeof e)for(var r in e)s.d(t,r,function(_){return e[_]}.bind(null,r));return t},s.n=function(e){var _=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(_,"a",_),_},s.o=function(e,_){return Object.prototype.hasOwnProperty.call(e,_)},s.p="/json-schema-to-jsdoc/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=_,c=c.slice();for(var i=0;i<c.length;i++)_(c[i]);var u=o;a.push([0,"chunk-vendors"]),t()})({0:function(e,_,t){e.exports=t("56d7")},"034f":function(e,_,t){"use strict";var r=t("64a9"),n=t.n(r);n.a},"199c":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("6762"),core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("2fdb"),core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__),element_ui_lib_theme_chalk_message_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("0fb7"),element_ui_lib_theme_chalk_message_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(element_ui_lib_theme_chalk_message_css__WEBPACK_IMPORTED_MODULE_2__),element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("450d"),element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(element_ui_lib_theme_chalk_base_css__WEBPACK_IMPORTED_MODULE_3__),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("f529"),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(element_ui_lib_message__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("7f7f"),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5__),_plugins_jsonschema2jsdoc__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("7d37"),debounce__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("b012"),debounce__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_7__);__webpack_exports__["a"]={name:"app",data:function(){return{rows:20,schema:{body:localStorage.getItem("schema-body")||"",name:""},jsdoc:"",error:""}},methods:{schema2jsdoc:function schema2jsdoc(){try{var text=this.schema.body,schemaObject=eval("("+text+")"),jsdoc=Object(_plugins_jsonschema2jsdoc__WEBPACK_IMPORTED_MODULE_6__["a"])(schemaObject,{id:this.schema.name});this.jsdoc=jsdoc}catch(e){console.error(e),element_ui_lib_message__WEBPACK_IMPORTED_MODULE_4___default()({showClose:!0,message:e.message,type:"error"})}}},watch:{"schema.body":{handler:debounce__WEBPACK_IMPORTED_MODULE_7___default()(function(e){this.error="",e&&!e.includes("id")&&(this.error="schema没有id字段，请手动补全jsdoc"),localStorage.setItem("schema-body",e)},300)}}}},"56d7":function(e,_,t){"use strict";t.r(_);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),n=function(){var e=this,_=e.$createElement,t=e._self._c||_;return t("el-container",{attrs:{id:"app"}},[t("el-header",[t("h1",[e._v("Json-Schema to jsdoc")])]),t("el-main",[t("el-row",{attrs:{gutter:32}},[t("el-col",{attrs:{span:12}},[t("h3",[e._v("\n          JSON-Schema\n          "),t("transition",{attrs:{name:"el-fade-in-linear"}},[t("b",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],staticStyle:{color:"#F56C6C","font-size":"12px"}},[e._v(e._s(e.error))])])],1),t("codemirror",{model:{value:e.schema.body,callback:function(_){e.$set(e.schema,"body",_)},expression:"schema.body"}}),t("div",{staticStyle:{"margin-top":"10px","text-align":"right"}},[t("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.schema2jsdoc}},[e._v("GO")])],1)],1),t("el-col",{attrs:{span:12}},[t("h3",[e._v("JSDoc")]),t("codemirror",{attrs:{value:e.jsdoc}})],1)],1)],1)],1)},a=[],s=t("199c"),c=s["a"],o=(t("034f"),t("2877")),i=Object(o["a"])(c,n,a,!1,null,null,null),u=i.exports,l=(t("f4f9"),t("450d"),t("c2cc")),d=t.n(l),p=(t("7a0f"),t("0f6c")),f=t.n(p),m=(t("de31"),t("c69e")),b=t.n(m),h=(t("a673"),t("7b31")),E=t.n(h),O=(t("adec"),t("3d2d")),P=t.n(O),v=(t("1951"),t("eedf")),M=t.n(v);r["default"].use(M.a),r["default"].use(P.a),r["default"].use(E.a),r["default"].use(b.a),r["default"].use(f.a),r["default"].use(d.a);var D=t("8f94"),g=t.n(D);t("a7be"),t("f9d4"),t("cc10");r["default"].use(g.a,{options:{theme:"base16-light",mode:"text/javascript",lineNumbers:!0,line:!0}}),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(u)}}).$mount("#app")},"64a9":function(e,_,t){},"7d37":function(e,_,t){"use strict";t.d(_,"a",function(){return a});t("6762"),t("2fdb"),t("ac6a"),t("456d");var r=t("dc2d"),n=t.n(r);function a(e){var _=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t="";return e&&0!==Object.keys(e).length?(t+="/**\n",t+=c(e),n.a.has(e,"/properties")?(t+=s(e,"",_),t+="  */\n",t):t):t}function s(e,_){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.a.get(e,"/properties"),a=n.a.has(e,"/required")?n.a.get(e,"/required"):[],c="";for(var l in r){var d=!a.includes(l);if(!Array.isArray(t.ignore)||!t.ignore.includes(l)){var p=_?"".concat(_,"."):"";if("object"===r[l].type&&r[l].properties)c+=o("Object",p+l,r[l].description,d),c+=s(r[l],p+l);else if("array"===r[l].type&&r[l].items){var f=r[l].items;"object"===f.type?(c+=o("Object[]",p+l,r[l].description,!a.includes(l)),c+=s(f,p+l+"[]")):c+=o(i(r[l].items)+"[]",p+l,r[l].description,d)}else{var m=i(r[l])||u(l);c+=o(m,p+l,r[l].description,d)}}}return c}function c(e){var _=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"object",t=e.id||e.description,r=e.description||"Represents a ".concat(t," ").concat(_);return r+="\n  * @name ".concat(u(t)),"  * ".concat(r,"\n  *\n")}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",_=arguments.length>1?arguments[1]:void 0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],n=r?"[".concat(_,"]"):_;return"  * @property {".concat(e,"} ").concat(n," - ").concat(t," \n")}function i(e){if(e.$ref){var _=n.a.get(e,e.$ref.substr(1));return i(_)}return e.enum?"enum":Array.isArray(e.type)?e.type.includes("null")?"?".concat(e.type[0]):e.type.join("|"):e.type}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.substr(0,1).toUpperCase()+e.substr(1)}}});
//# sourceMappingURL=app.ad9a18fd.js.map
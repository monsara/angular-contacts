function _get(n,t,e){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(n,t,e){var l=_superPropBase(n,t);if(l){var i=Object.getOwnPropertyDescriptor(l,t);return i.get?i.get.call(e):i.value}})(n,t,e||n)}function _superPropBase(n,t){for(;!Object.prototype.hasOwnProperty.call(n,t)&&null!==(n=_getPrototypeOf(n)););return n}function _inherits(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&_setPrototypeOf(n,t)}function _setPrototypeOf(n,t){return(_setPrototypeOf=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function _createSuper(n){var t=_isNativeReflectConstruct();return function(){var e,l=_getPrototypeOf(n);if(t){var i=_getPrototypeOf(this).constructor;e=Reflect.construct(l,arguments,i)}else e=l.apply(this,arguments);return _possibleConstructorReturn(this,e)}}function _possibleConstructorReturn(n,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(n):t}function _assertThisInitialized(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function _getPrototypeOf(n){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var l=t[e];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(n,l.key,l)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{gQYv:function(n,t,e){"use strict";e.r(t);var l=e("8Y7J"),i=function n(){_classCallCheck(this,n)},o=e("pMnS"),c=e("SVse"),r=function(){function n(){_classCallCheck(this,n),this.profilePhotoUrl="assets/images/photo.png"}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),a=l.nb({encapsulation:0,styles:[[".contact-card-list[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap}@media screen and (min-width:1200px){.contact-card-list[_ngcontent-%COMP%]{margin-bottom:size(14)}}.contact-card-list__contact-card[_ngcontent-%COMP%]{display:flex;margin-bottom:size(30)}@media screen and (min-width:768px){.contact-card-list__contact-card[_ngcontent-%COMP%]{max-width:size(275.812);margin-right:size(60)}}.contact-card-list__contact-card[_ngcontent-%COMP%]:nth-child(2n){margin-right:0}.contact-card__image[_ngcontent-%COMP%]{margin-right:size(28);width:size(67);height:size(67);flex:none;border-radius:50%;background-repeat:no-repeat;background-position:center;background-size:cover}.contact-card__name[_ngcontent-%COMP%]{margin-bottom:size(10);font-size:size(16);line-height:1.5;color:rgba(40,43,46,.871);letter-spacing:.15px}.contact-card__department[_ngcontent-%COMP%], .contact-card__organization[_ngcontent-%COMP%]{margin-bottom:size(5);color:#a6aaad}.contact-card__position[_ngcontent-%COMP%]{margin-bottom:size(10);color:#a6aaad}.contact-card__email[_ngcontent-%COMP%], .contact-card__phone[_ngcontent-%COMP%]{color:#212121}"]],data:{}});function u(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,18,"div",[["class","contact-card contact-card-list__contact-card"]],null,null,null,null,null)),(n()(),l.pb(1,0,null,null,3,"div",[["class","contact-card__image"]],null,null,null,null,null)),l.Db(512,null,c.q,c.r,[l.k,l.r,l.B]),l.ob(3,278528,null,0,c.l,[c.q],{ngStyle:[0,"ngStyle"]},null),l.Cb(4,{"background-image":0}),(n()(),l.pb(5,0,null,null,13,"div",[["class","contact-card__content"]],null,null,null,null,null)),(n()(),l.pb(6,0,null,null,1,"h3",[["class","contact-card__name title"]],null,null,null,null,null)),(n()(),l.Fb(7,null,[" "," "," "," "])),(n()(),l.pb(8,0,null,null,10,"div",[["class","contact-card__desc"]],null,null,null,null,null)),(n()(),l.pb(9,0,null,null,1,"div",[["class","contact-card__organization"]],null,null,null,null,null)),(n()(),l.Fb(10,null,[" "," "])),(n()(),l.pb(11,0,null,null,1,"div",[["class","contact-card__department"]],null,null,null,null,null)),(n()(),l.Fb(12,null,[" "," "])),(n()(),l.pb(13,0,null,null,1,"div",[["class","contact-card__position"]],null,null,null,null,null)),(n()(),l.Fb(14,null,[" "," "])),(n()(),l.pb(15,0,null,null,1,"div",[["class","contact-card__phone"]],null,null,null,null,null)),(n()(),l.Fb(16,null,[" "," "])),(n()(),l.pb(17,0,null,null,1,"div",[["class","contact-card__email"]],null,null,null,null,null)),(n()(),l.Fb(18,null,[" "," "]))],(function(n,t){var e=n(t,4,0,"url("+t.component.profilePhotoUrl+")");n(t,3,0,e)}),(function(n,t){var e=t.component;n(t,7,0,e.contact.lastName,e.contact.firstName,e.contact.middleName),n(t,10,0,e.contact.organization),n(t,12,0,e.contact.department),n(t,14,0,e.contact.position),n(t,16,0,e.contact.phone),n(t,18,0,e.contact.email)}))}var s=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),d=l.nb({encapsulation:0,styles:[[".icon[_ngcontent-%COMP%]{background-repeat:no-repeat;background-position:center;background-size:contain;flex-shrink:0}.contacts-header[_ngcontent-%COMP%]{margin-right:auto;margin-left:auto;margin-bottom:size(20);padding:size(24) 0;text-align:center;border-bottom:solid #d7d7d7;background-color:#e5e5e5}@media screen and (min-width:1024px){.contacts-header[_ngcontent-%COMP%]{margin-bottom:size(31)}}@media screen and (min-width:1200px){.contacts-header[_ngcontent-%COMP%]{width:97%;margin-bottom:0}}.contacts-header__title[_ngcontent-%COMP%]{font-weight:700;font-size:size(22);line-height:1.1818181818;color:#282b2e;text-transform:uppercase;letter-spacing:1px}"]],data:{}});function p(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,2,"div",[["class","contacts-header"]],null,null,null,null,null)),(n()(),l.pb(1,0,null,null,1,"h1",[["class","contacts-header__title title"]],null,null,null,null,null)),(n()(),l.Fb(-1,null,["\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"]))],null,null)}var h=e("s7LF"),f=function(){function n(){_classCallCheck(this,n),this.selectOptions=new Array(5),this.fg=new h.c({select:new h.b,input:new h.b})}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),g=l.nb({encapsulation:0,styles:[['.contacts-filter[_ngcontent-%COMP%]{margin-bottom:size(12.2)}.contacts-filter__form[_ngcontent-%COMP%]{display:flex;width:100%;flex-flow:column nowrap}.contacts-filter__form-block[_ngcontent-%COMP%]{position:relative}.contacts-filter__select[_ngcontent-%COMP%]{width:100%;min-height:size(34);padding-top:size(10);padding-right:size(30);padding-bottom:size(10);padding-left:size(10);font-style:italic;font-size:size(11.3);color:#333;border:solid #6e767d;border-radius:size(72);box-shadow:0 2.81818px 14.7955px rgba(0,0,0,.07);opacity:.8;outline:0}.contacts-filter__select[_ngcontent-%COMP%]:focus{border-color:#005fcc}.contacts-filter__select-wrap[_ngcontent-%COMP%]{margin-bottom:size(12.2)}.contacts-filter__select-wrap[_ngcontent-%COMP%]::before{position:absolute;top:50%;right:size(15);z-index:1;font-weight:700;font-size:size(16);color:#ed1c24;transform:translateY(-50%)}@media (min-width:667px){.contacts-filter__form[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-between}.contacts-filter__form-block[_ngcontent-%COMP%]{flex:auto}.contacts-filter__select[_ngcontent-%COMP%]{min-height:size(28);padding-top:size(6);padding-bottom:size(7);padding-left:size(15.95);font-size:size(12);border-top-left-radius:size(72);border-bottom-left-radius:size(72);border-top-right-radius:0;border-bottom-right-radius:0}.contacts-filter__select-wrap[_ngcontent-%COMP%]{width:33.58753%;margin-bottom:0}.contacts-filter__select-wrap[_ngcontent-%COMP%]::before{right:size(10)}}.contacts-filter__search-input[_ngcontent-%COMP%]{width:100%;min-height:size(34);padding-top:size(10);padding-right:size(33);padding-bottom:size(10);padding-left:size(10);font-style:italic;font-size:size(11.3);border:.704545px solid #6e767d;border-radius:size(72);box-shadow:0 size(2.81818) size(14.7955) rgba(0,0,0,.07);opacity:.8;outline:0}@media (min-width:667px){.contacts-filter__search-input[_ngcontent-%COMP%]{min-height:size(28);padding-top:size(6);padding-bottom:size(7);padding-left:size(8.29);font-size:size(12);border-left:0;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:size(72);border-bottom-right-radius:size(72)}.contacts-filter__search-input-wrap[_ngcontent-%COMP%]{width:66.41247%}}.contacts-filter__search-input[_ngcontent-%COMP%]:focus{border-color:#005fcc}.contacts-filter__search-input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#333}.contacts-filter__search-input[_ngcontent-%COMP%]::-moz-placeholder{color:#333}.contacts-filter__search-input[_ngcontent-%COMP%]::-ms-input-placeholder{color:#333}.contacts-filter__search-input[_ngcontent-%COMP%]::placeholder{color:#333}.contacts-filter__search-input-wrap[_ngcontent-%COMP%]::before{position:absolute;top:50%;right:size(10);z-index:1;font-size:size(25);color:#6e767d;transform:translateY(-50%)}.contacts-filter-options__content[_ngcontent-%COMP%]{display:flex;margin-bottom:size(28.8);flex-flow:column}@media (min-width:667px){.contacts-filter__search-input-wrap[_ngcontent-%COMP%]::before{right:size(7.64)}.contacts-filter-options__content[_ngcontent-%COMP%]{flex-flow:row}}.toggle-button[_ngcontent-%COMP%]{position:relative;width:size(34);height:size(14);margin:0;vertical-align:top;background:#e5e5e5;border-radius:size(30);outline:0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:all .3s cubic-bezier(.2,.85,.32,1.2)}.toggle-button[_ngcontent-%COMP%]::after{content:"";position:absolute;left:0;top:size(-3);width:size(19);height:size(19);background-color:#fafafa;border-radius:50%;box-shadow:0 size(2) size(3) size(-2);transform:translateX(0);transition:all .3s cubic-bezier(.2,.85,.32,1.2)}.toggle-button[_ngcontent-%COMP%]:checked::after{transform:translateX(calc(100% - 3px))}.toggle-button[_ngcontent-%COMP%]:checked{background-color:#aeaeae}.toggle-button-wrap[_ngcontent-%COMP%]{display:flex;align-items:center}.toggle-button-wrap[_ngcontent-%COMP%]:first-child{margin-bottom:size(12.2)}@media (min-width:667px){.toggle-button-wrap[_ngcontent-%COMP%]{margin-bottom:0;margin-right:size(30)}}@media screen and (min-width:768px){.toggle-button-wrap[_ngcontent-%COMP%]{margin-right:size(54)}}.toggle-button__text[_ngcontent-%COMP%]{margin-left:size(6);font-size:size(16);line-height:1.1875;color:#000;opacity:.3;letter-spacing:size(.15);cursor:pointer}']],data:{}});function b(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,1,"option",[],[[8,"value",0]],null,null,null,null)),(n()(),l.Fb(1,null,["Option ",""]))],null,(function(n,t){n(t,0,0,l.tb(1,"option",t.context.index,"")),n(t,1,0,t.context.index)}))}function _(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,7,"div",[["class","contacts-filter page__contacts-filter"]],null,null,null,null,null)),(n()(),l.pb(1,0,null,null,6,"form",[["class","contacts-filter__form"],["formGroup","fg"]],null,null,null,null,null)),(n()(),l.pb(2,0,null,null,3,"div",[["class","contacts-filter__form-block contacts-filter__select-wrap icon-angle-down"]],null,null,null,null,null)),(n()(),l.pb(3,0,null,null,2,"select",[["class","contacts-filter__select"],["formControlName","select"]],null,null,null,null,null)),(n()(),l.eb(16777216,null,null,1,null,b)),l.ob(5,278528,null,0,c.i,[l.M,l.J,l.q],{ngForOf:[0,"ngForOf"]},null),(n()(),l.pb(6,0,null,null,1,"div",[["class","contacts-filter__form-block contacts-filter__search-input-wrap icon-search"]],null,null,null,null,null)),(n()(),l.pb(7,0,null,null,0,"input",[["class","contacts-filter__search-input"],["formControlName","input"],["placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424\u0418\u041e, \u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c \u0438\u043b\u0438 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"],["type","text"]],null,null,null,null,null)),(n()(),l.pb(8,0,null,null,8,"div",[["class","contacts-filter-options contacts-filter-options__content"]],null,null,null,null,null)),(n()(),l.pb(9,0,null,null,3,"div",[["class","toggle-button-wrap"]],null,null,null,null,null)),(n()(),l.pb(10,0,null,null,0,"input",[["class","toggle-button"],["id","toggle-button-1"],["name","toggle"],["type","checkbox"]],null,null,null,null,null)),(n()(),l.pb(11,0,null,null,1,"label",[["class","toggle-button__text"],["for","toggle-button-1"]],null,null,null,null,null)),(n()(),l.Fb(-1,null,["\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432 "])),(n()(),l.pb(13,0,null,null,3,"div",[["class","toggle-button-wrap"]],null,null,null,null,null)),(n()(),l.pb(14,0,null,null,0,"input",[["class","toggle-button"],["id","toggle-button-2"],["name","toggle"],["type","checkbox"]],null,null,null,null,null)),(n()(),l.pb(15,0,null,null,1,"label",[["class","toggle-button__text"],["for","toggle-button-2"]],null,null,null,null,null)),(n()(),l.Fb(-1,null,["\u0410\u043a\u0442\u0438\u0432\u043d\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 "]))],(function(n,t){n(t,5,0,t.component.selectOptions)}),null)}var m,v,C=function(){function n(t){_classCallCheck(this,n),this.apiService=t}return _createClass(n,[{key:"ngOnInit",value:function(){this.contacts=this.apiService.contacts$}}]),n}(),z=e("2Vo4"),w=function(n){_inherits(e,n);var t=_createSuper(e);function e(n,l){var i;return _classCallCheck(this,e),(i=t.call(this,n,l)).scheduler=n,i.work=l,i.pending=!1,i}return _createClass(e,[{key:"schedule",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(this.closed)return this;this.state=n;var e=this.id,l=this.scheduler;return null!=e&&(this.id=this.recycleAsyncId(l,e,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(l,this.id,t),this}},{key:"requestAsyncId",value:function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return setInterval(n.flush.bind(n,this),e)}},{key:"recycleAsyncId",value:function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(null!==e&&this.delay===e&&!1===this.pending)return t;clearInterval(t)}},{key:"execute",value:function(n,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var e=this._execute(n,t);if(e)return e;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}},{key:"_execute",value:function(n,t){var e=!1,l=void 0;try{this.work(n)}catch(i){e=!0,l=!!i&&i||new Error(i)}if(e)return this.unsubscribe(),l}},{key:"_unsubscribe",value:function(){var n=this.id,t=this.scheduler,e=t.actions,l=e.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==l&&e.splice(l,1),null!=n&&(this.id=this.recycleAsyncId(t,n,null)),this.delay=null}}]),e}(function(n){_inherits(e,n);var t=_createSuper(e);function e(n,l){return _classCallCheck(this,e),t.call(this)}return _createClass(e,[{key:"schedule",value:function(n){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this}}]),e}(e("quSY").a)),y=function(){var n=function(){function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.now;_classCallCheck(this,n),this.SchedulerAction=t,this.now=e}return _createClass(n,[{key:"schedule",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2?arguments[2]:void 0;return new this.SchedulerAction(this,n).schedule(e,t)}}]),n}();return n.now=function(){return Date.now()},n}(),k=new(function(n){_inherits(e,n);var t=_createSuper(e);function e(n){var l,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.now;return _classCallCheck(this,e),(l=t.call(this,n,(function(){return e.delegate&&e.delegate!==_assertThisInitialized(l)?e.delegate.now():i()}))).actions=[],l.active=!1,l.scheduled=void 0,l}return _createClass(e,[{key:"schedule",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,l=arguments.length>2?arguments[2]:void 0;return e.delegate&&e.delegate!==this?e.delegate.schedule(n,t,l):_get(_getPrototypeOf(e.prototype),"schedule",this).call(this,n,t,l)}},{key:"flush",value:function(n){var t=this.actions;if(this.active)t.push(n);else{var e;this.active=!0;do{if(e=n.execute(n.state,n.delay))break}while(n=t.shift());if(this.active=!1,e){for(;n=t.shift();)n.unsubscribe();throw e}}}}]),e}(y))(w),O=e("7o/Q"),P=e("EY2u"),x=e("LRne"),M=e("HDdC"),N=((m=function(){function n(t,e,l){_classCallCheck(this,n),this.kind=t,this.value=e,this.error=l,this.hasValue="N"===t}return _createClass(n,[{key:"observe",value:function(n){switch(this.kind){case"N":return n.next&&n.next(this.value);case"E":return n.error&&n.error(this.error);case"C":return n.complete&&n.complete()}}},{key:"do",value:function(n,t,e){switch(this.kind){case"N":return n&&n(this.value);case"E":return t&&t(this.error);case"C":return e&&e()}}},{key:"accept",value:function(n,t,e){return n&&"function"==typeof n.next?this.observe(n):this.do(n,t,e)}},{key:"toObservable",value:function(){switch(this.kind){case"N":return Object(x.a)(this.value);case"E":return n=this.error,new M.a((function(t){return t.error(n)}));case"C":return Object(P.b)()}var n;throw new Error("unexpected notification kind value")}}],[{key:"createNext",value:function(t){return void 0!==t?new n("N",t):n.undefinedValueNotification}},{key:"createError",value:function(t){return new n("E",void 0,t)}},{key:"createComplete",value:function(){return n.completeNotification}}]),n}()).completeNotification=new m("C"),m.undefinedValueNotification=new m("N",void 0),m),F=function(){function n(t,e){_classCallCheck(this,n),this.delay=t,this.scheduler=e}return _createClass(n,[{key:"call",value:function(n,t){return t.subscribe(new j(n,this.delay,this.scheduler))}}]),n}(),j=function(n){_inherits(e,n);var t=_createSuper(e);function e(n,l,i){var o;return _classCallCheck(this,e),(o=t.call(this,n)).delay=l,o.scheduler=i,o.queue=[],o.active=!1,o.errored=!1,o}return _createClass(e,[{key:"_schedule",value:function(n){this.active=!0,this.destination.add(n.schedule(e.dispatch,this.delay,{source:this,destination:this.destination,scheduler:n}))}},{key:"scheduleNotification",value:function(n){if(!0!==this.errored){var t=this.scheduler,e=new I(t.now()+this.delay,n);this.queue.push(e),!1===this.active&&this._schedule(t)}}},{key:"_next",value:function(n){this.scheduleNotification(N.createNext(n))}},{key:"_error",value:function(n){this.errored=!0,this.queue=[],this.destination.error(n),this.unsubscribe()}},{key:"_complete",value:function(){this.scheduleNotification(N.createComplete()),this.unsubscribe()}}],[{key:"dispatch",value:function(n){for(var t=n.source,e=t.queue,l=n.scheduler,i=n.destination;e.length>0&&e[0].time-l.now()<=0;)e.shift().notification.observe(i);if(e.length>0){var o=Math.max(0,e[0].time-l.now());this.schedule(n,o)}else this.unsubscribe(),t.active=!1}}]),e}(O.a),I=function n(t,e){_classCallCheck(this,n),this.time=t,this.notification=e},S=((v=function n(){_classCallCheck(this,n),this.contacts=new z.a([]),this.contacts$=this.contacts.asObservable().pipe(function(n){var t,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k,l=(t=n)instanceof Date&&!isNaN(+t)?+n-e.now():Math.abs(n);return function(n){return n.lift(new F(l,e))}}(200));var t=new Array(15).fill(R);this.contacts.next(t)}).ngInjectableDef=l.Lb({factory:function(){return new v},token:v,providedIn:"root"}),v),R={firstName:"\u0418\u0432\u0430\u043d",lastName:"\u0418\u0432\u0430\u043d\u043e\u0432",middleName:"\u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",organization:'\u041e\u041e\u041e "\u0420\u043e\u043c\u0430\u0448\u043a\u0438"',department:"\u0413\u043b\u0430\u0432\u043d\u043e\u0435 \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0435",position:"\u042d\u043a\u0441\u043f\u0435\u0440\u0442",email:"ivan.ivanov@romashki.com",phone:"+380443456789"},q=l.nb({encapsulation:0,styles:[[".contacts-main[_ngcontent-%COMP%]{background-color:#fff}@media screen and (min-width:1200px){.contacts-main[_ngcontent-%COMP%]{margin-bottom:size(23);padding-top:size(41);padding-right:size(70);padding-bottom:size(38);padding-left:size(70)}}@media screen and (min-width:1440px){.contacts-main[_ngcontent-%COMP%]{padding-top:size(41);padding-right:size(93);padding-bottom:size(38);padding-left:size(93)}}.paginator-block[_ngcontent-%COMP%]{display:none}@media screen and (min-width:1200px){.paginator-block[_ngcontent-%COMP%]{display:inline-flex;width:100%;justify-content:center}.paginator-block__page-number[_ngcontent-%COMP%]:not(:last-child){margin-right:size(16)}.paginator-block__button[_ngcontent-%COMP%]{display:flex;width:size(24.61);height:size(24.61);justify-content:center;align-items:center;font-weight:700;font-size:size(14);line-height:1.1428571429;color:#6e767d;border-radius:50%;border:1.28px solid #6e767d;transition:background-color,border-width .2s ease-in-out;cursor:pointer}.paginator-block__button_current[_ngcontent-%COMP%]{color:#ed1c24;border-color:#ed1c24}.paginator-block__button.icon-right[_ngcontent-%COMP%]{font-size:size(12)}.paginator-block__button[_ngcontent-%COMP%]:hover{background-color:#e5e5e5}}"]],data:{}});function E(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,1,"app-contact-card",[],null,null,null,u,a)),l.ob(1,114688,null,0,r,[],{contact:[0,"contact"]},null)],(function(n,t){n(t,1,0,t.context.$implicit)}),null)}function A(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,1,"app-contacts-header",[],null,null,null,p,d)),l.ob(1,114688,null,0,s,[],null,null),(n()(),l.pb(2,0,null,null,21,"div",[["class","contacts-main container"]],null,null,null,null,null)),(n()(),l.pb(3,0,null,null,1,"app-contacts-filter",[],null,null,null,_,g)),l.ob(4,114688,null,0,f,[],null,null),(n()(),l.pb(5,0,null,null,3,"div",[["class","contact-card-list"]],null,null,null,null,null)),(n()(),l.eb(16777216,null,null,2,null,E)),l.ob(7,278528,null,0,c.i,[l.M,l.J,l.q],{ngForOf:[0,"ngForOf"]},null),l.Bb(131072,c.b,[l.h]),(n()(),l.pb(9,0,null,null,14,"div",[["class","paginator-block"]],null,null,null,null,null)),(n()(),l.pb(10,0,null,null,2,"div",[["class","paginator-block__page-number"]],null,null,null,null,null)),(n()(),l.pb(11,0,null,null,1,"span",[["class","paginator-block__button paginator-block__button_current"]],null,null,null,null,null)),(n()(),l.Fb(-1,null,["1"])),(n()(),l.pb(13,0,null,null,2,"div",[["class","paginator-block__page-number"]],null,null,null,null,null)),(n()(),l.pb(14,0,null,null,1,"span",[["class","paginator-block__button"]],null,null,null,null,null)),(n()(),l.Fb(-1,null,["2"])),(n()(),l.pb(16,0,null,null,2,"div",[["class","paginator-block__page-number"]],null,null,null,null,null)),(n()(),l.pb(17,0,null,null,1,"span",[["class","paginator-block__button"]],null,null,null,null,null)),(n()(),l.Fb(-1,null,["3"])),(n()(),l.pb(19,0,null,null,2,"div",[["class","paginator-block__page-number"]],null,null,null,null,null)),(n()(),l.pb(20,0,null,null,1,"span",[["class","paginator-block__button"]],null,null,null,null,null)),(n()(),l.Fb(-1,null,["4"])),(n()(),l.pb(22,0,null,null,1,"div",[["class","paginator-block__page-next"]],null,null,null,null,null)),(n()(),l.pb(23,0,null,null,0,"span",[["class","paginator-block__button icon-right"]],null,null,null,null,null))],(function(n,t){var e=t.component;n(t,1,0),n(t,4,0),n(t,7,0,l.Gb(t,7,0,l.Ab(t,8).transform(e.contacts)))}),null)}var D=l.lb("app-contacts-main",C,(function(n){return l.Hb(0,[(n()(),l.pb(0,0,null,null,1,"app-contacts-main",[],null,null,null,A,q)),l.ob(1,114688,null,0,C,[S],null,null)],(function(n,t){n(t,1,0)}),null)}),{},{},[]),H=e("iInd"),Y=function n(){_classCallCheck(this,n)};e.d(t,"ContactsModuleNgFactory",(function(){return J}));var J=l.mb(i,[],(function(n){return l.yb([l.zb(512,l.j,l.X,[[8,[o.a,D]],[3,l.j],l.v]),l.zb(4608,c.k,c.j,[l.s,[2,c.t]]),l.zb(1073742336,c.c,c.c,[]),l.zb(1073742336,H.l,H.l,[[2,H.q],[2,H.k]]),l.zb(1073742336,Y,Y,[]),l.zb(1073742336,i,i,[]),l.zb(1024,H.i,(function(){return[[{path:"",component:C}]]}),[])])}))}}]);
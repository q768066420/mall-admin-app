(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e5a39f0"],{"027a":function(t,e,r){"use strict";r.d(e,"d",(function(){return o})),r.d(e,"c",(function(){return a})),r.d(e,"e",(function(){return i})),r.d(e,"f",(function(){return c})),r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return u}));var n=r("bb36");function o(t){return n["a"].get("/category/all",t)}function a(t){return n["a"].get("/products/all",{params:t})}function i(t){return n["a"].delete("/products/".concat(t))}function c(t){return n["a"].post("/products/add",t)}function s(t){return n["a"].get("/products/".concat(t))}function u(t){return n["a"].put("/products/edit",t)}},"02aa":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-add-container"},[r("a-steps",{staticClass:"steps-container",attrs:{current:t.current}},t._l(t.steps,(function(t){return r("a-step",{key:t.title,attrs:{title:t.title}})})),1),r("div",{staticClass:"steps-content"},[0===t.current?r("EditProInfo",{attrs:{form:t.form},on:{nextBtn:t.next}}):t._e(),1===t.current?r("SelaDetail",{attrs:{form:t.from},on:{prev:t.prev,nextBtn:t.next}}):t._e()],1)],1)},o=[],a=r("5530"),i=r("1da1"),c=(r("96cf"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-form-model",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,"label-col":{span:5},"wrapper-col":{span:13}}},[r("a-form-model-item",{ref:"title",attrs:{label:"标题",prop:"title",validate:""}},[r("a-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),r("a-form-model-item",{ref:"desc",attrs:{label:"商品描述",prop:"desc",validate:""}},[r("a-input",{model:{value:t.form.desc,callback:function(e){t.$set(t.form,"desc",e)},expression:"form.desc"}})],1),r("a-form-model-item",{attrs:{label:"商品类目",prop:"category",validate:""}},[r("a-select",{attrs:{placeholder:"请选择添加的商品类目"},on:{change:t.categoryChange},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}},t._l(t.categoryArr,(function(e){return r("a-select-option",{key:e.id,attrs:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),1)],1),r("a-form-model-item",{attrs:{label:" ",prop:"category",validate:""}},[r("a-select",{attrs:{placeholder:"请选择添加的商品子类目"},model:{value:t.form.c_item,callback:function(e){t.$set(t.form,"c_item",e)},expression:"form.c_item"}},t._l(t.c_itemArr,(function(e){return r("a-select-option",{key:e,attrs:{value:e}},[t._v(" "+t._s(e)+" ")])})),1)],1),r("a-form-model-item",{attrs:{label:"商品标签",prop:"tags",validate:""}},[r("a-select",{staticStyle:{width:"100%"},attrs:{mode:"tags","token-separators":[","]},model:{value:t.form.tags,callback:function(e){t.$set(t.form,"tags",e)},expression:"form.tags"}},t._l(this.form.tags,(function(e){return r("a-select-option",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),r("a-form-model-item",{staticClass:"nextBtn",attrs:{label:"",validate:"",wrapperCol:{span:24}}},[r("a-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v(" 下一步 ")])],1)],1)}),s=[],u=r("027a"),l={props:["form"],created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["d"])();case 2:r=e.sent,t.categoryArr=r.data.data;case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{categoryArr:[],c_itemArr:[],rules:{title:[{required:!0,message:"该项不可以为空",trigger:"blur"}],desc:[{required:!0,message:"该项不可以为空",trigger:"blur"}],category:[{required:!0,message:"该项不可以为空",trigger:"blur"}],c_item:[{required:!0,message:"该项不可以为空",trigger:"blur"}]}}},methods:{onSubmit:function(){var t=this;this.$refs.ruleForm.validate((function(e){return e?(t.$emit("nextBtn",t.form),!0):(console.log("error submit!!"),!1)}))},categoryChange:function(){for(var t=0;t<this.categoryArr.length;t+=1)if(this.categoryArr[t].id===this.form.category)if(this.c_itemArr=this.categoryArr[t].c_items,this.c_itemArr.length>0){var e=this.c_itemArr[0];this.form.c_item=e}else this.form.c_item=""}}},f=l,p=(r("eb02"),r("2877")),m=Object(p["a"])(f,c,s,!1,null,"fa817910",null),d=m.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-form-model",{ref:"ruleForm",attrs:{model:t.form,rules:t.rules,"label-col":{span:5},"wrapper-col":{span:13}}},[r("a-form-model-item",{ref:"price",attrs:{label:"商品售价",prop:"price",validate:""}},[r("a-input",{model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1),r("a-form-model-item",{ref:"price_off",attrs:{label:"折扣价格",prop:"price_off"}},[r("a-input",{model:{value:t.form.price_off,callback:function(e){t.$set(t.form,"price_off",e)},expression:"form.price_off"}})],1),r("a-form-model-item",{ref:"inventory",attrs:{label:"商品库存",prop:"inventory",validate:""}},[r("a-input",{model:{value:t.form.inventory,callback:function(e){t.$set(t.form,"inventory",e)},expression:"form.inventory"}})],1),r("a-form-model-item",{ref:"unit",attrs:{label:"计量单位",prop:"unit",validate:""}},[r("a-input",{model:{value:t.form.unit,callback:function(e){t.$set(t.form,"unit",e)},expression:"form.unit"}})],1),r("a-form-model-item",{ref:"images",attrs:{label:"商品相册",prop:"images",validate:""}},[r("a-upload",{attrs:{action:"https://mallapi.duyiedu.com/upload/images?appkey="+t.$store.state.user.user.appkey,"list-type":"picture-card","file-list":t.fileList,name:"avatar"},on:{preview:t.handlePreview,change:t.handleChange}},[t.fileList.length<8?r("div",[r("a-icon",{attrs:{type:"plus"}}),r("div",{staticClass:"ant-upload-text"},[t._v("Upload")])],1):t._e()]),r("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleCancel}},[r("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1),r("a-form-model-item",{staticClass:"nextBtn",attrs:{label:" ",validate:"",wrapperCol:{span:20},width:"60px"}},[r("a-button",{staticClass:"prev",attrs:{type:"primary"},on:{click:t.prev}},[t._v("上一步")]),r("a-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("提交")])],1)],1)},v=[];r("d3b7"),r("d81d"),r("4de4");function g(t){return new Promise((function(e,r){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e(n.result)},n.onerror=function(t){return r(t)}}))}var y={created:function(){this.form.images.length>0&&(this.fileList=this.form.images.map((function(t,e){return{uid:e,name:"image-".concat(e,".png"),status:"done",url:t}})))},props:["form"],data:function(){return{rules:{price:[{required:!0,message:"该项不可以为空",trigger:"blur"}],inventory:[{required:!0,message:"该项不可以为空",trigger:"blur"}],unit:[{required:!0,message:"该项不可以为空",trigger:"blur"}]},previewVisible:!1,previewImage:"",fileList:[]}},methods:{prev:function(){this.$emit("prev")},onSubmit:function(){var t=this;this.$refs.ruleForm.validate((function(e){return e?(t.$emit("nextBtn",t.form),!0):(console.log("error submit!!"),!1)}))},handleCancel:function(){this.previewVisible=!1},handlePreview:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=t,t.url||t.preview){r.next=5;break}return r.next=4,g(t.originFileObj);case 4:n.preview=r.sent;case 5:e.previewImage=t.url||t.preview,e.previewVisible=!0;case 7:case"end":return r.stop()}}),r)})))()},handleChange:function(t){var e=t.file,r=t.fileList;this.fileList=r,"done"===e.status?this.form.images.push(e.response.data.url):"removed"===e.status&&(this.form.images=this.form.images.filter((function(t){return t!==e.response.data.url})))}}},b=y,w=(r("d5d2"),Object(p["a"])(b,h,v,!1,null,"465332a0",null)),x=w.exports,_={components:{EditProInfo:d,SelaDetail:x},data:function(){return{current:0,steps:[{title:"填写商品基本信息",content:"First-content"},{title:"填写商品销售信息",content:"Second-content"}],form:{title:"",desc:"",category:"",c_item:"",tags:["全国顺丰包邮"],price:0,price_off:0,inventory:0,unit:"g",images:[]}}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.$route.params.id,!r){e.next=6;break}return e.next=4,Object(u["b"])(r);case 4:n=e.sent,t.form=n.data;case 6:case"end":return e.stop()}}),e)})))()},methods:{next:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.from=Object(a["a"])(Object(a["a"])({},e.from),t),1!==e.current){r.next=16;break}if(n=e.$route.params.id,!n){r.next=11;break}return console.log(1),r.next=7,Object(u["a"])(e.from);case 7:console.log(2),e.$message.info("编辑成功"),r.next=14;break;case 11:return r.next=13,Object(u["f"])(e.form);case 13:e.$message.info("提交成功");case 14:return e.$router.push({name:"ProductList"}),r.abrupt("return");case 16:e.current+=1;case 17:case"end":return r.stop()}}),r)})))()},prev:function(){this.current-=1}}},k=_,L=(r("a11c"),Object(p["a"])(k,n,o,!1,null,null,null));e["default"]=L.exports},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}},"1e85":function(t,e,r){},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=w;var f="suspendedStart",p="suspendedYield",m="executing",d="completed",h={},v={};v[i]=function(){return this};var g=Object.getPrototypeOf,y=g&&g(g(S([])));y&&y!==n&&o.call(y,i)&&(v=y);var b=L.prototype=_.prototype=Object.create(v);k.prototype=b.constructor=L,L.constructor=k,L[s]=k.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},E(j.prototype),j.prototype[c]=function(){return this},l.AsyncIterator=j,l.async=function(t,e,r,n){var o=new j(w(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},E(b),b[s]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:S(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),h}}}function w(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,a=Object.create(o.prototype),i=new P(n||[]);return a._invoke=O(t,r,i),a}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function _(){}function k(){}function L(){}function E(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){function e(r,n,a,i){var c=x(t[r],t,n);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,a,i)}),(function(t){e("throw",t,a,i)})):Promise.resolve(u).then((function(t){s.value=t,a(s)}),i)}i(c.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function O(t,e,r){var n=f;return function(o,a){if(n===m)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return F()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var c=$(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=m;var s=x(t,e,r);if("normal"===s.type){if(n=r.done?d:p,s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}function $(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,$(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},a11c:function(t,e,r){"use strict";r("1e85")},adc1:function(t,e,r){},bdde:function(t,e,r){},d5d2:function(t,e,r){"use strict";r("adc1")},d81d:function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").map,a=r("1dde"),i=a("map");n({target:"Array",proto:!0,forced:!i},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},eb02:function(t,e,r){"use strict";r("bdde")}}]);
//# sourceMappingURL=chunk-8e5a39f0.a54cfe4b.js.map
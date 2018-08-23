parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"20dW":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,o){if("function"==typeof e&&e.amd)e(["exports","module"],o);else if("undefined"!=typeof exports&&"undefined"!=typeof module)o(exports,module);else{var n={exports:{}};o(n.exports,n),t.fetchJsonp=n.exports}}(this,function(e,t){"use strict";var o={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function n(e){try{delete window[e]}catch(t){window[e]=void 0}}function r(e){var t=document.getElementById(e);t&&document.getElementsByTagName("head")[0].removeChild(t)}t.exports=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=e,a=t.timeout||o.timeout,u=t.jsonpCallback||o.jsonpCallback,c=void 0;return new Promise(function(o,s){var l=t.jsonpCallbackFunction||"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random()),d=u+"_"+l;window[l]=function(e){o({ok:!0,json:function(){return Promise.resolve(e)}}),c&&clearTimeout(c),r(d),n(l)},i+=-1===i.indexOf("?")?"?":"&";var m=document.createElement("script");m.setAttribute("src",""+i+u+"="+l),t.charset&&m.setAttribute("charset",t.charset),m.id=d,document.getElementsByTagName("head")[0].appendChild(m),c=setTimeout(function(){s(new Error("JSONP request to "+e+" timed out")),n(l),r(d),window[l]=function(){n(l)}},a),m.onerror=function(){s(new Error("JSONP request to "+e+" failed")),n(l),r(d),c&&clearTimeout(c)}})}});
},{}],"qa4v":[function(require,module,exports) {
"use strict";function e(e){return/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/.test(e)}function t(e,t){var r=document.createElement("div");r.className="alert alert-"+t,r.appendChild(document.createTextNode(e));var o=document.querySelector(".container"),u=document.querySelector("#pet-form");o.insertBefore(r,u),setTimeout(function(){return document.querySelector(".alert").remove()},3e3)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isValidCity=e,exports.showAlert=t;
},{}],"d6sW":[function(require,module,exports) {
"use strict";var t=require("fetch-jsonp"),n=c(t),e=require("./validate");function c(t){return t&&t.__esModule?t:{default:t}}var a=document.querySelector("#pet-form");function i(t){t.preventDefault();var c=document.querySelector("#animal").value,a=document.querySelector("#city").value;(0,e.isValidCity)(a)?(0,n.default)("http://api.petfinder.com/pet.find?format=json&key=c235f6fb5f50626d8b358767dab50e9c&animal="+c+"&location="+a+"&callback=callback",{jsonpCallbackFunction:"callback"}).then(function(t){return t.json()}).then(function(t){return l(t.petfinder.pets.pet)}).catch(function(t){return console.log(t)}):(0,e.showAlert)("Please Enter a Valid City","danger")}function l(t){var n=document.querySelector("#results");n.innerHTML="",t.forEach(function(t){var e=document.createElement("div");e.classList.add("card","card-body","mb-3"),e.innerHTML='\n        <div class="row">\n            <div class="col-sm-6">\n                <h4>'+t.name.$t+" ("+t.age.$t+')</h4>\n                <p class="text-secondary">'+t.breeds.breed.$t+"</p>\n                <p>\n                "+(t.contact.address1.$t?"\n                    "+t.contact.address1.$t:"")+"\n\n                "+(t.contact.city.$t?"\n                    "+t.contact.city.$t:"")+"    \n\n                "+(t.contact.state.$t?"\n                    "+t.contact.state.$t:"")+" \n\n                "+(t.contact.zip.$t?"\n                    "+t.contact.zip.$t:"")+'   \n\n\n                <ul class="list-group">\n                    '+(t.contact.phone.$t?'\n                    <li class="list-group-item">Phone: \n                    '+t.contact.phone.$t+"</li>":"")+"\n                   \n                    "+(t.contact.email.$t?'\n                    <li class="list-group-item">Email: \n                    '+t.contact.email.$t+"</li>":"")+"\n\n                    "+(t.shelterId.$t?'\n                      <li class="list-group-item">Shelter ID: \n                      '+t.shelterId.$t+"</li>":"")+'\n                </ul>\n            </div>  \n            <div class="col-sm-6 text-center">\n                <img id="pet-img" class="img-fluid img-thumbnail rounded mt-2" src="'+t.media.photos.photo[3].$t+'">\n            </div>\n        </div>\n    ',n.appendChild(e)})}a.addEventListener("submit",i);
},{"fetch-jsonp":"20dW","./validate":"qa4v"}]},{},["d6sW"], null)
//# sourceMappingURL=/main.e62de019.map
function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,g=Math.min,m=function(){return l.Date.now()};function v(t,e,n){var r,o,i,a,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=r,i=o;return r=o=void 0,c=e,a=t.apply(i,n)}function j(t){return c=t,f=setTimeout(S,e),l?y(t):a}function O(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=i}function S(){var t=m();if(O(t))return h(t);f=setTimeout(S,function(t){var n=e-(t-u);return s?g(n,i-(t-c)):n}(t))}function h(t){return f=void 0,v&&r?y(t):(r=o=void 0,a)}function T(){var t=m(),n=O(t);if(r=arguments,o=this,u=t,n){if(void 0===f)return j(u);if(s)return f=setTimeout(S,e),y(u)}return void 0===f&&(f=setTimeout(S,e)),a}return e=b(e)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,e):i,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},T.flush=function(){return void 0===f?a:h(m())},T}function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(p(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=p(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=i.test(t);return n||a.test(t)?f(t.slice(2),n?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(t,e,{leading:r,maxWait:e,trailing:o})};const y=document.querySelector(".js-form");let j={};y.addEventListener("input",t(e)((function(t){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e)return e[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(e)),void(j=e);j[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),y.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log(j)})),function(){const t=JSON.parse(localStorage.getItem("feedback-form-state"));t&&Object.entries(t).forEach((([t,e])=>{y.elements[t].value=e}))}();
//# sourceMappingURL=03-feedback.1224d95f.js.map

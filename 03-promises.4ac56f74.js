!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i"),r={form:document.querySelector(".form"),inputDelay:document.querySelector('input[name = "delay"]'),inputStep:document.querySelector('input[name = "step"]'),inputAmount:document.querySelector('input[name = "amount"]'),btn:document.querySelector("button")};function u(e,n){return new Promise((function(t,o){var i=Math.random()>.3;setTimeout((function(){i?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}r.form.addEventListener("submit",(function(e){e.preventDefault();for(var n=parseInt(r.inputAmount.value),t=parseInt(r.inputDelay.value),o=parseInt(r.inputStep.value),a=0;a<n;a+=1)u(a+1,t+a*o).then((function(e){var n=e.position,t=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}))}))}();
//# sourceMappingURL=03-promises.4ac56f74.js.map
!(function(t) {
  var e = {};
  function n(o) {
    if (e[o]) return e[o].exports;
    var r = (e[o] = { i: o, l: !1, exports: {} });
    return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function(t, e, o) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
    }),
    (n.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var o = Object.create(null);
      if ((n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
        for (var r in t)
          n.d(
            o,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = "/"),
    n((n.s = 0));
})([
  function(t, e, n) {
    "use strict";
    n.r(e);
    const o = (t) => !(!t.startsWith(".") && !t.startsWith("#")),
      r = (t) => !!t.startsWith("@"),
      l = (t) => {
        var e = document.createElement("div");
        return (e.innerHTML = t.trim()), e.firstChild;
      };
    var s = function(t, e, n, o) {
      const r = document.createElement("template");
      (r.innerHTML = `\n\t\t<style>\n\t\t${n}\n\t\t</style>\n\t  ${e}\n\t`),
        customElements.define(
          t.replace(/@/g, ""),
          class extends HTMLElement {
            $(t) {
              return this.shadowRoot && this.shadowRoot.querySelector(t);
            }
            constructor() {
              super(), this.attachShadow({ mode: "open" }).appendChild(r.content.cloneNode(!0));
            }
            connectedCallback() {
              const t = {
                element: this,
                on: (e, n) => (t.element.addEventListener(e, n), t),
                find: (e) => t.element.querySelector(e)
              };
              o && o(t, this);
            }
          }
        );
    };
    function c(t, e) {
      if (!r(t)) {
        const e = {
          element: o(t) ? document.querySelector(t) : document.createElement(t),
          html: (t) => (null === t ? e.element : (e.element.append(l(t)), e)),
          on: (t, n) => (e.element.addEventListener(t, n), e),
          attr: (t, n) => (null === n ? e.element.getAttribute(t) : (e.element.setAttribute(t, n), e)),
          addClass: (t) => (e.element.classList.add(t), e),
          removeClass: () => (e.element.classList.remove(classname), e)
        };
        return e;
      }
      s(t, e().markup, e().style, e().onConnected);
    }
    n.d(e, "lagom", function() {
      return c;
    }),
      c("@test-component", () => ({
        style:
          "\n\t\t.test-component {\n\t\t\tbackground-color: white;\n\t\t\theight: 100px;\n\t\t\twidth: 100px;\n\t\t}\n\t\t",
        markup: '\n\t\t<div class="test-component">\n\t\t\t<p>Test</p>\n\t\t\t<slot></slot>\n\t\t</div>\n\t\t',
        onConnected(t) {
          t.on("click", () => {
            console.log("hej");
          });
        }
      }));
  }
]);

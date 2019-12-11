import { elementFrom, classified, isTemplate } from "./core/helpers";
import createComponent from "./core/createComponent";
export default function lagom(selector, component) {
  if (isTemplate(selector)) {
    createComponent(selector, component().markup, component().style, component().onConnected);
  } else {
    const self = {
      element: classified(selector) ? document.querySelector(selector) : document.createElement(selector),

      html: (template) => {
        if (template === null) {
          return self.element;
        } else {
          self.element.append(elementFrom(template));
          return self;
        }
      },

      on: (event, callback) => {
        self.element.addEventListener(event, callback);
        return self;
      },

      attr: (name, value) => {
        if (value === null) {
          return self.element.getAttribute(name);
        } else {
          self.element.setAttribute(name, value);
        }
        return self;
      },

      addClass: (classname) => {
        self.element.classList.add(classname);
        return self;
      },

      removeClass: () => {
        self.element.classList.remove(classname);
        return self;
      },

      appendTo: (el) => {
        const element = typeof el === "string" ? document.querySelector(el) : el;
        element.append(self.element);
        return self;
      },

      find: (val) => {
        self.element = self.element.querySelectorAll(val);
        return self;
      },

      each: (callback) => {
        self.element.forEach((el) => {
          let me = self;
          me.element = el;
          callback(me);
        });
        return self;
      }
    };
    return self;
  }
}

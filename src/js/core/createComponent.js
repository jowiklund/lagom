export default function(name, markup, style, onConnected) {

	const template = document.createElement('template')
	template.innerHTML = `
		<style>
		${style}
		</style>
	  ${markup}
	`;

	window.ShadyCSS && ShadyCSS.prepareTemplate(template, name.replace(/@/g, '') , 'div');

	customElements.define(name.replace(/@/g, ''), class TemplateComponent extends HTMLElement {

	  $(selector) {
	    return this.shadowRoot && this.shadowRoot.querySelector(selector)
	  }

	  constructor() {
	    super()
	    const root = this.attachShadow({mode: 'open'})
      root.appendChild(template.content.cloneNode(true))
	  }

	  connectedCallback() {
			const self = {
				element: this,

				on: (event, callback) => {
					self.element.addEventListener(event, callback);
					return self;
				},

				find: (selector) => {
					return self.element.querySelector(selector);
				}
				
			}
			if (onConnected) {
				onConnected(self, this);
			}
		}
	});
}

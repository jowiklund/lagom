import '@webcomponents/webcomponentsjs';
export { default as lagom } from './js';
import lagom from './js';

lagom('@test-component', () => {
	return {
		style: `
		.test-component {
			background-color: white;
			height: 100px;
			width: 100px;
			display: flex;
			justify-content: center;
			align-items: center;
			text-transform: uppercase;
			font-weight: bold;
			font-family: monospace;
			border: 1px solid black;
			border-radius: 10px;
		}
		`,
		markup: `
		<div class="test-component">
			<p>Test</p>
			<slot></slot>
		</div>
		`,
		onConnected(self) {
			self.on('click', (e) => {
				console.log(e)
			})
		}
	}
})

lagom('body').addClass('test');

lagom('.manyDivs').find('div').each(el => {
	el.on('click', (e) => {console.log(e.target)});
});

/* 
document.body.appendChild(
  div({ id: `app` },
    header({ className: `header` },
      h1({ className: `header__title` }, `Know It All`),
      a(
        {
          className: `header__help`,
          target: `_blank`,
          rel: `noopener noreferrer`,
          title: `Find out more about know it all`,
          href: `https://hackernoon.com/what-you-dont-know-about-web-development-d7d631f5d468#.ex2yp6d64`,
        },
        `What is this?`,
      ),
    ),
    div({ className: `skill-table` }),
  )
);
 */
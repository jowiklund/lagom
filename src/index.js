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
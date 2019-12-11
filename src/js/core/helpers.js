export const classified = (el) => {
	return el.startsWith('.') || el.startsWith('#') || document.querySelector(el) ? true : false;
}

export const isTemplate = (el) => {
	return el.startsWith('@') ? true : false;
}

export const elementFrom = (htmlString) => {
	var div = document.createElement('div');
	div.innerHTML = htmlString.trim();
	// Change this to div.childNodes to support multiple top-level nodes
	return div.firstChild; 
}
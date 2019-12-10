export const classified = (el) => {
	if ( el.startsWith('.') || el.startsWith('#') || document.querySelector(el)) {
		return true;
	}
	
	return false;
}

export const isTemplate = (el) => {
	if (el.startsWith('@')) {
		return true;
	}
	return false;
}

export const elementFrom = (htmlString) => {
	var div = document.createElement('div');
	div.innerHTML = htmlString.trim();
	// Change this to div.childNodes to support multiple top-level nodes
	return div.firstChild; 
}
(function(){
	var findIdUnder = function(e) {
		if (e.id)
			return e.id;
		for(var c = e.firstChild; c; c = c.nextSibling) {
			var id = findIdUnder(c);
			if (id)
				return id;
		}
		return null;
	}
	var findId = function(e) {
		if (e.id)
			return e.id;
		for(var ee = e.previousSibling; ee; ee = ee.previousSibling) {
			var id = findIdUnder(ee);
			if (id)
				return id;
		}
		if (e.parentNode)
			return findId(e.parentNode);
		return null;
	}
	var old_onmousedown = document.body.onmousedown;
	var last_click = document;
	document.body.onmousedown = function(e) {
		console.log(e.target);
		last_click = e.target;
		if (old_onmousedown) old_onmousedown(e);
	}
	chrome.extension.onMessage.addListener(
		function(request, sender, sendResponse) {
			var id = findId(last_click);
			var idString = "";
			if (id)
				idString = "#" + id;
			sendResponse(document.location.href.split("#")[0] + idString);
		}
	);
})()


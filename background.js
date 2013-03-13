function linkOnClick(info, tab) {
	chrome.tabs.sendMessage(tab.id, {}, function(response) {
		var ta = document.getElementById("ta");
		ta.value = response;
		ta.focus();
		document.execCommand("SelectAll");
		document.execCommand("Copy", false, null);
		console.log(response);
	});
}

chrome.contextMenus.onClicked.addListener(linkOnClick);

chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create({"id": "link-clipboard", "title": "Copy Link To Here", "contexts": ["link","selection","page","image"]});
});

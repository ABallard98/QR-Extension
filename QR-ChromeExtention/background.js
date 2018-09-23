console.log("Scannr background script running");

/*
This function will run when the window is fully loaded
*/
window.onload = function (){	
	displayURL(); //run the displayURL function
}

/*
This function will create a QR code and display in on the window
of the extension.g
*/
function displayURL(){
	chrome.tabs.getSelected(null, function (tab) {
	var url = new URL(tab.url)
	var domain = url.hostname
	var text = document.getElementById("testText"); //displaying url for testing
	text.innerHTML = url;
	
	//generating QR code
	new QRCode(document.getElementById("qrcode"), {
		text: url,
		width: 128,
		height: 128,
		colorDark : "#000000",
		colorLight : "#ffffff",
		correctLevel : QRCode.CorrectLevel.H
	});
});
}

function testTextFunc(){
	var text = document.getElementById("testText");
	text.innerHTML = "hello world";
}




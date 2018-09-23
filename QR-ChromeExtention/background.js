console.log("QR scanner background script running");

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
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var currTab = tabs[0]; //setting the current tab
		if (currTab) { 
			var url = currTab.url;
							
			//generating QR code
			new QRCode(document.getElementById("qrcode"), {
				text: url,
				width: 128,
				height: 128,
				colorDark : "#000000",
				colorLight : "#ffffff",
				correctLevel : QRCode.CorrectLevel.H
			});
		} //end of if statement
	});
}





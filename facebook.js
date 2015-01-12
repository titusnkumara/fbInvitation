(function addfriends(){
	
	var scrollingTimeout =  20;
	var iterationTime = 1000;
	var percentage=0;
	function openpopup(content){ 
		winpops=window.open('',"test","fullscreen=no,toolbar=yes,status=yes, " +
		"menubar=yes,scrollbars=yes,resizable=yes,directories=yes,location=yes, " +
		"width=500,height=400,left=100,top=100,screenX=100,screenY=100");
		winpops.document.write(content);
		return winpops;
	} 
	var popup = openpopup('<title>Progress</title><h1>Thank you for using our Extension</h1>');
	
	var a = document.getElementsByClassName("_5tee")[0];
	function scroll(){
		a.getElementsByClassName("uiScrollableAreaWrap scrollable")[0].scrollTop = 9999999;
		var writeString = "wait.... scrolling "+String(start*percentage)+"%"
		popup.document.write("<p>"+writeString+"</p>");
		console.log(writeString);
		percentage++;
	}
	
	function sendRequests(){
		var b =document.getElementsByClassName("_5l6a")[0];
		divs = b.getElementsByClassName("_42ef");
		length = divs.length;

		for(var x=2;x<length;x=x+2){
			//edit here
			divs[x].getElementsByTagName('button')[0].click();
			var writeProgress = "Sent to "+divs[x].getElementsByTagName('strong')[0].innerText + " count "+String(x/2);
			popup.document.write("<p>"+writeProgress+"</p>");
			console.log(writeProgress);
		}
	}
	// scroll to all members
	for (var start = 1; start < scrollingTimeout; start++){
			setTimeout(function () {
					scroll(start);
				}, iterationTime * start);
		}
	//send requests
	setTimeout(function () {
					sendRequests();
				}, iterationTime * (scrollingTimeout+1));

	
	
})();

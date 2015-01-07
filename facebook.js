(function addfriends(){
	
	var scrollingTimeout =  10;
	var iterationTime = 2000;
	var percentage=0;
	
	
	var a = document.getElementsByClassName("_5tee")[0];
	function scroll(){
		a.getElementsByClassName("uiScrollableAreaWrap scrollable")[0].scrollTop = 9999999;
		console.log("wait.... scrolling "+String(start*percentage)+"%");
		percentage++;
	}
	
	function sendRequests(){
		var b =document.getElementsByClassName("_5l6a")[0];
		divs = b.getElementsByClassName("_42ef");
		length = divs.length;

		for(var x=2;x<length;x=x+2){
			divs[x].getElementsByTagName('button')[0].click();
			console.log("Sent to "+divs[x].getElementsByTagName('strong')[0].innerText + "count "+String(x/2));
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

var currentlikes = 1106;
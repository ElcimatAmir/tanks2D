//FIRST TIME BASIC SETUP
	//its a var to know if game allready playing or no
	var gameRunning = false ;
	
	//set the value of input to the user name
	document.getElementById("playerName").value = "";

	//seting the players records at the begining
	window.onload = setRecords();

	function setRecords(){
		const memory = window.localStorage ;
		var info = {};
		for (var i = 0; i < memory.length; i++){
			info.name  = memory.key(i);
			info.score = memory.getItem(info.name); 

			//also theis method before get the values to show showed sorted them			
			
			drawHtml(info) ;
		}
	}


//when button play get clicked
document.getElementById("playButton").onclick = function(){
	var playerName = document.getElementById("playerName").value ;
	
	if(playerName == "" || playerName == null || gameRunning){
		$("#playerName").css('border', '2px solid red');
		console.log("mabe the input is empty or the game is all ready running");
	}else{
		$("#playerName").css('border', '1px solid gray');
		document.getElementById("playerName").value = "";
		startGame(playerName);
	}
}

function startGame(playerName){
	var canvas  = document.getElementById("canvas");

	var playerInfo = {
		name: playerName ,
		score: 0
	}
	//for this time its set a randoum number for score
	playerInfo.score =  Math.floor(Math.random() * (100 - 1) + 1) ;
	console.log(playerInfo);

	// save the player data to the local storage
	savePlayer(playerInfo);
}

function savePlayer(playerInfo){
	const memory = window.localStorage ;
	memory.setItem(playerInfo.name , playerInfo.score)
	
	drawHtml(playerInfo);	
}



function drawHtml(playerInfo){
	var html = "" ;
	var recordsPanel = document.getElementById("playersResult");

	html += "<div class='playersInfo'>"
				+"<h4>"+playerInfo.name+"</h4>"
				+"<h4>"+playerInfo.score+"</h4>"
			+"</div>" ;
	$(recordsPanel).append(html);		
}
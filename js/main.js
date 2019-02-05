
//FIRST TIME BASIC SETUP
	//its a var to know if game allready playing or no
	var gameRunning = false ;
	
	//set the value of input to the user name
	document.getElementById("playerName").value = "";

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
	var playerInfo = {
		Name: playerName ,
		score: 0
	}

	console.log(playerInfo);

	savePlayer(playerInfo);
}

function savePlayer(playerInfo){
	var recordsPanel = document.getElementById("playersRecords");
	/*
		here i should add a table and save a data in memory
	*/
}
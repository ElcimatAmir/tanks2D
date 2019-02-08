function startGame(playerName){
	// канвес его высотал и длина константы + и контекст для рисование
	const canvas = document.getElementById("canvas");
	const c = canvas.getContext("2d");
	const width  = canvas.width;
	const height = canvas.height;
	
	//сам рисунак танка и размеры танка для игрока так же константы 
	const myTank = document.getElementById("myTank");
	const tankWidth = 30;
	const tankHeight = 35;
	
	//обект для хранения информации об играке имя баллы и положения его танка 
	var playerInfo = {
		name: playerName ,
		score: 0,
		playerXPosition : 100,
		playerYPosition : 100,
		//нужны для того чтобы знать место нахождения танка тоесть он едет в верх вниз в право или в лево 
		//поможет в гожде при повороте танка в разные стороны
		//поумочанию танк смотрит в верх
		isUp   : true,
		isDown : false,
		isLeft : false,
		isRight: false
	};
	console.log(width + " : "+ height+"playex POsition: " + playerInfo.playerXPosition);
	//нарисовка первого положения танка
	c.drawImage(myTank, playerInfo.playerXPosition, playerInfo.playerYPosition, tankWidth, tankHeight) ;
	
	// при нажатие на клавиятуре работает метод пересовки танка 
	addEventListener("keydown",moveMyTankEvent,false);
	function moveMyTankEvent(e){
		// это keycode для кнопок WASD для перемешения своего танка
		const up = 87;
		const down = 83;
		const left = 65; 
		const right = 68;
		console.log(e.keyCode);
		
		//далее проверка на какую кнопку юзер кликнулл
		/*	* зарание придуприждаю то что формулы используемые далее с матиматичасками расчетами так что их не тогать  *	*/
		//идет в верх
		if (e.keyCode == up && playerInfo.playerYPosition > 0) {
			// передвижения в верх по Y
			playerInfo.playerYPosition--;
			
			//первый метод очишяет canvas а второй ресует с новыми кардинатами
			c.clearRect(0, 0, width, height);
			c.drawImage(myTank, playerInfo.playerXPosition, playerInfo.playerYPosition, tankWidth, tankHeight) ;
		}//идет в вниз
		else if (e.keyCode == down && (playerInfo.playerYPosition - tankHeight -5) < (height/2) ) {
			// передвижения в вниз по Y 
			playerInfo.playerYPosition++;
			
			//первый метод очишяет canvas а второй ресует с новыми кардинатами
			c.clearRect(0, 0, width, height);
			c.drawImage(myTank, playerInfo.playerXPosition, playerInfo.playerYPosition, tankWidth, tankHeight) ;
		
		}//идет на лево
		else if (e.keyCode == left && (playerInfo.playerXPosition + 7) > 0) {
			playerInfo.playerXPosition--;
			//первый метод очишяет canvas а второй ресует с новыми кардинатами
			c.clearRect(0, 0, width, height);
			c.drawImage(myTank, playerInfo.playerXPosition, playerInfo.playerYPosition, tankWidth, tankHeight) ;
		}//идет на право 
		else if (e.keyCode == right && (playerInfo.playerXPosition - tankWidth) < (width-55) ) {
			playerInfo.playerXPosition++;
			console.log("playerX position: "+ playerInfo.playerXPosition);
			//первый метод очишяет canvas а второй ресует с новыми кардинатами
			c.clearRect(0, 0, width, height);
			c.drawImage(myTank, playerInfo.playerXPosition, playerInfo.playerYPosition, tankWidth, tankHeight) ;
		}

		//метод вызывается для разварота танка при повороте 
		function changeDiretion(changeDiretionFrom, changeDiretionTo){
			c.save();

		}
	}

	//for this time its set a randoum number for score
	playerInfo.score =  Math.floor(Math.random() * (100 - 1) + 1) 	
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
const motoManiacs = {
	//parametros
	ctx: undefined,
	canvasSize: {
		width: undefined,
		height: undefined},
	game: undefined,
	backgroundImage: undefined,
	newMoto: undefined,
	music: undefined,
	elapsedTime: undefined,
	score: 0,

	init (elementCanvas) {
		//indicar parametros al canvas (2d, dimensiones)
		this.setContext (elementCanvas);
		this.setDimensions (elementCanvas);
		
		//Cargar imagen de fondo
		this.setBackground ();

		//cargar la musica
		this.setMusic ();
		this.music.play ();

		//Crear la moto
		this.moto = new Moto (this.ctx, 70, 80);

		//arrancar listeners
		this.setListeners ();





		this.refreshScreen();
	},

	//Funciones del setting inicial: Contexto, dimensiones del canvas, background, musica, listeners

	setMusic () {
		this.music = new Audio;
		this.music.src = '/music/Motocross Maniacs - 30 Years Anniversary Tribute.mp3';
	},

	setContext (elementCanvas){
		this.ctx = elementCanvas.getContext("2d");
	},

	setDimensions (elementCanvas){
		this.canvasSize.width = 700;
		this.canvasSize.height = 500;
		elementCanvas.setAttribute("width",this.canvasSize.width);
		elementCanvas.setAttribute("height", this.canvasSize.height);
	},

	setBackground () {
		this.backgroundImage = new Image();
		this.backgroundImage.src = "/images/backgrounds/background 3.png";
	}, 

	setListeners() {
		document.addEventListener('keydown', e => {
			switch (e.keyCode) {
			  case 39:
				this.moto.rotateRight ();;
			  break;
			  case 37: 
				this.moto.rotateLeft ();
			  break;
			  case 65://"A"
				this.moto.accelerate ();
			  break;
			  case 68://"D"
				this.moto.turbo ();
			  break;
			}
		  }); 
	},

	//Funciones de pintura

	clearCanvas() {
		this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
	},

	drawBackground() {
		this.ctx.drawImage(this.backgroundImage, 0, 0, this.canvasSize.width, this.canvasSize.height);
	},

	drawScores() {
		this.ctx.font = '25px Verdana';
		this.ctx.fillStyle = 'black';
		this.ctx.fillText('Score: ' + this.score, 550, 50);
	  },

	drawAll (){
		this.drawBackground ();
		this.moto.draw();
		this.drawScores ();
	}, 

	//Funcion de accion

	refreshScreen (){
		//this.checkIfColision ();
		this.clearCanvas ();
		this.drawAll();
		this.game = requestAnimationFrame (() => {this.refreshScreen();});
	},

	//Aux functions

	random (max) {
		return Math.floor(Math.random() * max);
	}

}





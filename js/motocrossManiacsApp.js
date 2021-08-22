const motoManiacs = {
	//parametros
	ctx: undefined,
	canvasSize: {
		width: undefined,
		height: undefined},
	backgroundImage: undefined,
	newMoto: undefined,
	music: undefined,

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
		this.moto = new Moto (this.ctx, 180, 180);



		this.refreshScreen();
	},

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
		this.backgroundImage.src = "/images/background 3.png";
	}, 

	drawAll (){
		this.ctx.drawImage(this.backgroundImage, 0, 0, this.canvasSize.width, this.canvasSize.height);
		this.moto.draw();
	}, 

	refreshScreen (){
		this.drawAll();
		let game = requestAnimationFrame (() => {this.refreshScreen();});
	}

}





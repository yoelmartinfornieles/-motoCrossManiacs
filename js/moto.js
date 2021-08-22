class Moto {
	constructor (context, width, height) {
		this.context = context
		this.position = {
			x: 0,
			y: 338
		}
		this.width = width;
		this.height = height;
		this.image = new Image();
		this.image.src = "/images/testDriver.png";
		this.moving = false;
	}

	accelerate () {
		this.moving = true;
	}

	brake () {

	}

	turbo () {

	}

	draw () {
		this.context.drawImage (
			this.image,
			this.position.x,
			this.position.y, 
			this.width, 
			this.height
		);
	}
}
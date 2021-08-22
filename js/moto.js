class Moto {
	constructor (context, width, height) {
		this.context = context
		this.position = {
			x: 40,
			y: 390
		}
		this.width = width;
		this.height = height;
		this.image = new Image();
		this.image.src = "/images/characters/pohakuSprites.png";
		this.moving = false;
		this.speed = 0;

	}

	accelerate () {
		//this.position.x ++; //test
		this.moving = true;
		this.speed ++;
	}

	turbo () {

	}

	rotateRight () {

	}

	rotateLeft () {

	}

	intersects(object) {
		return (this.x < object.x + object.width &&
                this.x + this.width > object.x &&
                this.y < object.y + object.height &&
                this.y + this.height > object.y);
        }

	draw () {
		this.context.drawImage (
			this.image,
			0,
			110,
			60,
			60,
			this.position.x,
			this.position.y, 
			this.width, 
			this.height
		);
	}
}
class Car{
	acceleration: number = 0;

	constructor(private name: String){
		
	}
	honk():void{
	   console.log('${this.name} is saying: Toooooooooot!');
	}
	accelerate(speed: number): void{
	   this.acceleration = this.acceleration + speed;
	}
}

var car = new Car("BMW");

car.honk();

console.log(car.acceleration);

car.accelerate(60);

console.log(car.acceleration);
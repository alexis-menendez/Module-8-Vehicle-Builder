// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // TODO: Declare properties of the Motorbike class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])

  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // TODO: Create a constructor that accepts the properties of the Motorbike class
  constructor(
    vin: string,
    make: string,
    model: string,
    year: number,
    color: string,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] = []
  ) {
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    super();

    // TODO: The constructor should initialize the properties of the Motorbike class
    this.vin = vin;
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    this.wheels = wheels.length === 2 ? wheels : [new Wheel(17, "Default Brand"), new Wheel(17, "Default Brand")];
  }

  // TODO: Implement the wheelie method
  wheelie(): void {
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // TODO: The method should call the printDetails method of the parent class
    super.printDetails();

    // TODO: The method should log the details of the Motorbike
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
    console.log(`
      Motorbike Details:
      VIN: ${this.vin}
      Make: ${this.make}
      Model: ${this.model}
      Year: ${this.year}
      Color: ${this.color}
      Weight: ${this.weight} lbs
      Top Speed: ${this.topSpeed} mph
      Wheels: ${this.wheels.map(wheel => `${wheel.getTireBrand} (${wheel.getDiameter} inch)`).join(", ")}
    `);
  }
}

// TODO: Export the Motorbike class as the default export
export default Motorbike;
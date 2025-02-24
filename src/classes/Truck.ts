// Import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle';
import Motorbike from './Motorbike';
import Car from './Car';
import Wheel from './Wheel';
import AbleToTow from '../interfaces/AbleToTow';

// The Truck class extends Vehicle and implements the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // TODO: Declare properties of the Truck class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // TODO: Create a constructor that accepts the properties of the Truck class
  // TODO: The constructor should call the constructor of the parent class, Vehicle
  // TODO: The constructor should initialize the properties of the Truck class
  // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
  // Constructor initializes the properties and ensures 4 wheels
  constructor(
    vin: string,
    make: string,
    model: string,
    year: number,
    color: string,
    weight: number,
    topSpeed: number,
    towingCapacity: number,
    wheels: Wheel[] = []
  ) {
    // Call the parent Vehicle class constructor
    super(vin, make, model, year, color);
    
    this.year = year;
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    // Ensure the truck has exactly 4 wheels; if not, create 4 new default wheels
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(18, "Default Brand"), new Wheel(18, "Default Brand"), new Wheel(18, "Default Brand"), new Wheel(18, "Default Brand")];
  }

  // TODO: Implement the tow method from the AbleToTow interface
  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // TODO: Get the make and model of the vehicle if it exists
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // TODO: If it is, log that the vehicle is being towed
    // TODO: If it is not, log that the vehicle is too heavy to be towed
    // Get make and model of the vehicle
    const vehicleInfo = `${vehicle.make} ${vehicle.model}`;

    // Check if the vehicle's weight is within the truck's towing capacity
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${vehicleInfo} is being towed by ${this.make} ${this.model}.`);
    } else {
      console.log(`${vehicleInfo} is too heavy to be towed by ${this.make} ${this.model}.`);
    }
  }

  // TODO: Override the printDetails method from the Vehicle class
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Truck
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
  // Override the printDetails method from the Vehicle class
  printDetails(): void {
    // Call the parent class method (if applicable)
    super.printDetails();

    // Log the Truck details
    console.log(`
      Truck Details:
      VIN: ${this.vin}
      Make: ${this.make}
      Model: ${this.model}
      Year: ${this.year}
      Color: ${this.color}
      Weight: ${this.weight} lbs
      Top Speed: ${this.topSpeed} mph
      Towing Capacity: ${this.towingCapacity} lbs
      Wheels: ${this.wheels.map(wheel => `${wheel.brand} (${wheel.diameter} inch)`).join(", ")}
    `);
  }
}

// Export the Truck class as the default export
export default Truck;

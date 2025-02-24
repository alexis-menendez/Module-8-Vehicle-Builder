// Importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Vehicle from "./Vehicle.js";
import Wheel from "./Wheel.js";

// TODO: Implement logic to allow the user to perform actions.
// Define the Cli class
class Cli {
  //  STARTED, NOT COMPLETE
  // TODO: update the vehicles property to accept Truck and Motorbike objects as well
  // TODO: You will need to use the Union operator to define additional types for the array
  // TODO: See the AbleToTow interface for an example of how to use the Union operator
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  // DONE
  //  TODO: Update the constructor to accept Truck and Motorbike objects as well
  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  // Method to perform actions on a vehicle
  performActions(): void {
    const selectedVehicle = this.vehicles.find(vehicle => vehicle.vin === this.selectedVehicleVin) as Vehicle;

    if (!selectedVehicle) {
      console.log("No vehicle selected. Returning to main menu...");
      this.startCli();
      return;
    }

    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: `What would you like to do with your ${selectedVehicle.make} ${selectedVehicle.model}?`,
          choices: ['Start', 'Drive', 'Accelerate', 'Decelerate', 'Stop', 'Turn', 'Reverse', 'Tow', 'Perform Wheelie', 'Exit']
        }
      ])
      .then((answers) => {
        if (answers.action === 'Start' && typeof selectedVehicle.start === 'function') {
          selectedVehicle.start();

        } else if (answers.action === 'Drive' && typeof selectedVehicle.drive === 'function') {
          selectedVehicle.drive();

        } else if (answers.action === 'Accelerate' && typeof selectedVehicle.accelerate === 'function') {
            selectedVehicle.accelerate(10);

        } else if (answers.action === 'Decelerate' && typeof selectedVehicle.decelerate === 'function') {
          selectedVehicle.decelerate(10);

        } else if (answers.action === 'Stop' && typeof selectedVehicle.stop === 'function') {
          selectedVehicle.stop();

        } else if (answers.action === 'Turn' && typeof selectedVehicle.turn === 'function') {
          inquirer
            .prompt([
              {
                type: 'list',
                name: 'direction',
                message: "Which direction do you want to turn?",
                choices: ["Left", "Right"]
              }
            ])
            .then((turnAnswer) => {
              selectedVehicle.turn(turnAnswer.direction);
              this.performActions();
            });
          return; 

        } else if (answers.action === 'Reverse' && typeof selectedVehicle.reverse === 'function') {
          selectedVehicle.reverse();

        } else if (answers.action === 'Tow' && 'tow' in selectedVehicle) {
          (selectedVehicle as Truck).tow(selectedVehicle as Truck);
            inquirer
            .prompt([
              {
              type: 'list',
              name: 'vehicleToTow',
              message: 'Select a vehicle to tow',
              choices: this.vehicles
                .filter(vehicle => vehicle.vin !== (selectedVehicle as Truck).vin && vehicle instanceof Truck)
                .map(vehicle => {
                return {
                  name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
                  value: vehicle.vin,
                };
                }),
              },
            ])
            .then((towAnswer) => {
              const vehicleToTow = this.vehicles.find(vehicle => vehicle.vin === towAnswer.vehicleToTow);
              if (vehicleToTow) {
              (selectedVehicle as Truck).tow(vehicleToTow);
              }
              this.performActions();
            });
            return;
        } else if (answers.action === 'Perform Wheelie' && 'wheelie' in selectedVehicle) {
          (selectedVehicle as Motorbike).wheelie();

        } else if (answers.action === 'Exit') {
          console.log("Exiting program...");
          process.exit();

        } else {
          console.log("This action is not available for the selected vehicle.");
        }

        // After performing an action, ask again
        this.performActions();
      });
  }

  // Method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers) => {
        // Set the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        // Perform actions on the selected vehicle
        this.performActions();
      });
  }

  // Static method to generate a vin
  static generateVin(): string {
    // Return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  // Method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          choices: ['Car', 'Truck', 'Motorbike'], 
        },
      ])
      .then((answers) => {
        if (answers.vehicleType === 'Car') {
          this.createCar();
        } else if (answers.vehicleType === 'Truck') {
          this.createTruck();
        } else if (answers.vehicleType === 'Motorbike') {
          this.createMotorbike();
        } 
      });
  }

  // Method to create a car
  createCar(): void {
    inquirer
      .prompt([
        { type: 'input', name: 'color', message: 'Enter Color' },
        { type: 'input', name: 'make', message: 'Enter Make' },
        { type: 'input', name: 'model', message: 'Enter Model' },
        { type: 'input', name: 'year', message: 'Enter Year' },
        { type: 'input', name: 'weight', message: 'Enter Weight' },
        { type: 'input', name: 'topSpeed', message: 'Enter Top Speed' },
      ])
      .then((answers) => {
        const car = new Car(
          Cli.generateVin(),
          answers.make,
          answers.model,
          answers.year,
          answers.color,
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        this.vehicles.push(car);
        this.selectedVehicleVin = car.vin;
        this.performActions();
      });
  }

  // Method to create a truck
  createTruck(): void {
    inquirer
      .prompt([
        { type: 'input', name: 'color', message: 'Enter Color' },
        { type: 'input', name: 'make', message: 'Enter Make' },
        { type: 'input', name: 'model', message: 'Enter Model' },
        { type: 'input', name: 'year', message: 'Enter Year' },
        { type: 'input', name: 'weight', message: 'Enter Weight' },
        { type: 'input', name: 'topSpeed', message: 'Enter Top Speed' },
        { type: 'input', name: 'towingCapacity', message: 'Enter Towing Capacity' },
      ])
      .then((answers) => {
        const truck = new Truck(
          Cli.generateVin(),
          answers.make,
          answers.model,
          parseInt(answers.year),
          answers.color,
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          parseInt(answers.towingCapacity),
          []
        );
        this.vehicles.push(truck);
        this.selectedVehicleVin = truck.vin;
        this.performActions();
      });
  }

  // Method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        { type: 'input', name: 'color', message: 'Enter Color' },
        { type: 'input', name: 'make', message: 'Enter Make' },
        { type: 'input', name: 'model', message: 'Enter Model' },
        { type: 'input', name: 'year', message: 'Enter Year' },
        { type: 'input', name: 'weight', message: 'Enter Weight' },
        { type: 'input', name: 'topSpeed', message: 'Enter Top Speed' },
      ])
      .then((answers) => {
        const motorbike = new Motorbike(
          Cli.generateVin(),
          answers.make,
          answers.model,
          parseInt(answers.year),
          answers.color,
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [new Wheel(17, "Default Brand"), new Wheel(17, "Default Brand")]
        );
        this.vehicles.push(motorbike);
        this.selectedVehicleVin = motorbike.vin;
        this.performActions();
      });
  }

  // Method to start the CLI
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message: 'Would you like to create a new vehicle or select an existing one?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers) => {
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// Export the Cli class
export default Cli;

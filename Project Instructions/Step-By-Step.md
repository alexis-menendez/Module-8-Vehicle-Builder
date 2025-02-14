#  Step-By-Step Instructions

##  Step 1: Understand the Existing Codebase
Before making changes, review the existing files:
- index.ts: The main entry point for the application.
- Vehicle.ts: Likely a base class for vehicles.
- Car.ts: Implementation of the car functionality.
- Truck.ts (new class to be modified).
- Motorbike.ts (new class to be modified).
- AbleToTow.ts: Possibly an interface related to towing capability.
- Driveable.ts: Possibly an interface for driveable vehicles.
- Wheel.ts: Could define wheel-related properties.


##  Step 2: Modify Vehicle.ts to Support More Vehicle Types
- Update the Vehicle class (if necessary) to ensure it can act as a base for Car, Truck, and Motorbike.
- Add an abstract method or shared properties if required.
- Ensure it includes common properties like make, model, year, wheels, etc.


##  Step 3: Implement Truck.ts
- Ensure the Truck class extends Vehicle.
- Prompt the user for unique truck-specific properties (e.g., cargo capacity, towing capacity).
- Implement at least one unique action that only Truck can perform (e.g., towTrailer()).
- Ensure Truck adheres to the AbleToTow interface if applicable.

**Example: (typescript)**

import { Vehicle } from "./Vehicle";

export class Truck extends Vehicle {
    towingCapacity: number;

    constructor(make: string, model: string, year: number, towingCapacity: number) {
        super(make, model, year);
        this.towingCapacity = towingCapacity;
    }

    towTrailer() {
        console.log(`${this.make} ${this.model} is towing a trailer with capacity of ${this.towingCapacity} lbs.`);
    }
}



##  Step 4: Implement Motorbike.ts
- Ensure Motorbike extends Vehicle.
- Prompt the user for unique properties specific to motorbikes (e.g., hasSidecar).
- Implement an action exclusive to Motorbike (e.g., doWheelie()).

**Example: (typescript)**

import { Vehicle } from "./Vehicle";

export class Motorbike extends Vehicle {
    hasSidecar: boolean;

    constructor(make: string, model: string, year: number, hasSidecar: boolean) {
        super(make, model, year);
        this.hasSidecar = hasSidecar;
    }

    doWheelie() {
        console.log(`${this.make} ${this.model} does a wheelie!`);
    }
}



##  Step 5: Update Cli.ts to Include Truck & Motorbike Options
- Modify the inquirer prompts to include Truck and Motorbike as vehicle choices.
- Ensure user input allows selection of these vehicle types.

**Example: (typescript)**

import inquirer from "inquirer";
import { Car } from "./Car";
import { Truck } from "./Truck";
import { Motorbike } from "./Motorbike";

async function createVehicle() {
    const { type } = await inquirer.prompt([
        {
            type: "list",
            name: "type",
            message: "What type of vehicle do you want to create?",
            choices: ["Car", "Truck", "Motorbike"],
        }
    ]);

    switch (type) {
        case "Car":
            return new Car("Toyota", "Camry", 2023);
        case "Truck":
            return new Truck("Ford", "F-150", 2023, 12000);
        case "Motorbike":
            return new Motorbike("Harley", "Sportster", 2023, false);
    }
}

createVehicle();



##  Step 6: Ensure All Actions Work in the Menu
- After a vehicle is created, allow the user to perform actions (drive(), towTrailer(), doWheelie()).
- Display results in the command line.

**Example: (typescript)**
<div class="warning" style='padding:0.1em; background-color:#E9D8FD; color:#69337A'>
<span>
<p style='margin-top:1em; text-align:center'>
<b>On the importance of sentence length</b></p>
<p style='margin-left:1em;'>
async function performAction(vehicle: Vehicle) {
    const { action } = await inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What do you want to do?",
            choices: vehicle instanceof Truck ? ["Drive", "Tow Trailer", "Exit"] :
                     vehicle instanceof Motorbike ? ["Drive", "Do Wheelie", "Exit"] :
                     ["Drive", "Exit"],
        }
    ]);

    if (action === "Drive") vehicle.drive();
    if (action === "Tow Trailer" && vehicle instanceof Truck) vehicle.towTrailer();
    if (action === "Do Wheelie" && vehicle instanceof Motorbike) vehicle.doWheelie();

    if (action !== "Exit") await performAction(vehicle);
}
</p>
<p style='margin-bottom:1em; margin-right:1em; text-align:right; font-family:Georgia'> <b>- Gary Provost</b> <i>(100 Ways to Improve Your Writing, 1985)</i>
</p></span>
</div>



##  Step 7: Test Your Application
- Run: (sh)
    - npm start
- Create a car, truck, and motorbike.
- Ensure prompts appear correctly.
- Perform actions unique to each vehicle.
- Verify command-line output.


##  Step 8: Create a Walkthrough Video
- Record a screen capture using OBS, Zoom, or another screen recording tool.
- Demonstrate:
    - Running npm start.
    - Creating a Car, Truck, and Motorbike.
    - Showing truck and motorbike-specific features.
    - Performing actions.
    - Exiting the program.
- Upload the video to YouTube, Google Drive, or another hosting platform.


##  Step 9: Update README.md
- Add:
    - Project description.
    - Instructions to install and run.
    - Example commands and expected outputs.
    - Link to walkthrough video.


##  Step 10: Push to GitHub
- Initialize Git (if not already done): (sh)
    - git init
    - git add .
    - git commit -m "Implemented trucks and motorbikes"
    - git branch -M main
    - git remote add origin <your-repo-url>
    - git push -u origin main
- Ensure:
    - Commit messages are descriptive.
    - Code follows best practices.
    - README includes the walkthrough video link.

##  Final Checks
    - ✅ Vehicle creation includes Truck and Motorbike
    - ✅ Truck and Motorbike have unique attributes & actions
    - ✅ User can interact with created vehicles
    - ✅ Inquirer prompts work correctly
    - ✅ Walkthrough video is linked in README.md
    - ✅ Code is pushed to GitHub

Once everything is complete, submit your GitHub repository link and the walkthrough video link. 🎉


#  Vehicle Builder
##  **Description**

Vehicle Builder is a TypeScript-based command-line application that allows users to create and interact with different types of vehicles. The program enables users to define cars, trucks, and motorbikes, each with unique attributes and actions. Users can navigate through prompts to build their desired vehicle and perform specific actions such as driving, towing (for trucks), or performing a wheelie (for motorbikes).

**Key Features**

* Object-oriented structure with a base Vehicle class.
* Specialized classes for Car, Truck, and Motorbike, each with unique attributes and methods.
* Implementation of TypeScript interfaces for additional functionality (e.g., AbleToTow).
* Command-line interface using inquirer.js for user input and interaction.
* Dynamic vehicle creation and action execution through a menu-driven system.
* Modular and expandable design, making it easy to add new vehicle types in the future.

**Technology Stack**

* **Language:** TypeScript
* **Module System:** ESNext
* **User Interaction:** Inquirer.js
* **Build System:** TypeScript Compiler (tsc)

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Walkthrough Video](#walkthrough-video)
* [Contributing](#contributing)
* [Tests](#tests)
* [Documentation](#documentation)
* [Questions](#questions)


## Installation

To set up and run this project on your local machine, follow these steps:

1. Before installing, ensure you have the following installed on your system:
	* [Node.js](https://nodejs.org/) installed on your system
	* npm (Comes bundled with Node.js)
	* TypeScript (Installed as a dependency in this project)
   
2. Clone the [Vehicle Builder](https://github.com/alexis-menendez/Vehicle-Builder) repository to your local machine:
	* Open a terminal or command prompt and run:
	  * git clone <(https://github.com/alexis-menendez/Vehicle-Builder)>

3. Navigate to the project directory:
	* cd your-project-folder

4. Install Dependencies:
	* Run the following command to install all required dependencies:
	  * npm install inquirer
	  * This will install:
	    * inquirer (for command-line interaction)
	    * typescript (for compiling TypeScript to JavaScript)
	    * @types/inquirer and @types/node (for TypeScript type definitions)

5. Build the Project:
	* Compile the TypeScript code to JavaScript by running:
	  * npm run build
	  * This will generate the dist/ folder containing the compiled files.

6. Run the Application:
	* Start the CLI application by executing:
	  * npm start
	* Follow the on-screen prompts to create and interact with vehicles.
   
## Usage

1. Run the application using command:
	* npm start
2. Select a vehicle type (Car, Truck, or Motorbike).
3. Enter details specific to the selected vehicle type.
4. Perform actions such as driving, towing a trailer, or doing a wheelie.


## Walkthrough Video

* [Walkthrough Video]([https://drive.google.com/file/d/1AVRHAOM_FYpr0sbzLSJkNS7NEEhWHYT_/view])

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes and create a pull request.


## Tests

There are currently no automated tests for this project

## Documentation

* [Project Repository](https://github.com/alexis-menendez/Vehicle-Builder)
* [Walkthrough Video]([https://drive.google.com/file/d/1AVRHAOM_FYpr0sbzLSJkNS7NEEhWHYT_/view])

## Acknowledgements

* I used Github Copilot to help me write the code for this project, primarily its suggestive text feature which enabled me to write code faster.
* I also used ChatGPT to:
  	* Provide assitance debugging my code. I am happy to provide transcripts of the conversation with ChatGPT upon request.
  	* Review my completed project and offer suggestions for improvement.
  	* Create detailed explanations for certain concepts which informed my writing.

## Contact

If you have any questions, feel free to contact me:

*  **GitHub**: [alexis-menendez](https://github.com/alexis-menendez)
*  **Email**: alexis.menendez@austincc.edu


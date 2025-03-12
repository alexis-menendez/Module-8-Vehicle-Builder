# Module 8
Your task this week is to update an existing TypeScript command-line application that builds and uses cars to include additional options for motorbikes and trucks.

# Vehicle Builder
This Challenge prompts the user to either create a new vehicle or select an existing vehicle. After going through the creation or selection process, the user is able to perform certain actions with the selected vehicle. The user is returned to the actions menu after each action until they decide to exit the application.
Because this application won't be deployed, you'll need to provide a link to a walkthrough video that demonstrates its functionality. You'll need to submit a link to the video and add it to the README of your project.
Refer to the video submission guide on the Full-Stack Blog
 for additional guidance on creating a video.

# important
Make sure to download and unzip the starter code files and make your own repository with the starter code.
Before you start, download the starter code

# User Story
AS a developer
I WANT to update an existing application to include additional vehicle types
SO THAT I am able to comprehend and work with existing code bases.

# Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted to create a new vehicle or existing vehicle
THEN I can choose between the two options
WHEN I am prompted to choose the vehicle type during creation
THEN I can choose between car, truck, and motorbike
WHEN I am prompted for details about the vehicle
THEN I can enter the vehicle information
WHEN I have entered all the vehicle information
THEN I can use the created vehicle
WHEN I select an existing vehicle
THEN I can use the selected existing vehicle
WHEN I have created a new vehicle or selected an existing vehicle
THEN I can perform actions with that vehicle
WHEN I perform an action with a vehicle
THEN I see the result of the action in the command-line
WHEN I complete the process of performing an action
THEN I can perform additional actions until I choose to exit

# Getting Started
This Challenge combines many of the skills covered so far. In addition to the user story and acceptance criteria, we've provided some guidelines to help you get started:
Because this Challenge requires a video submission, refer to the Full-Stack Blog video submission guide
 for guidance on creating and sharing a video.
Your application should use Inquirer
 for collecting input from the user. The application will be invoked by using the following command:
npm start

# on the job
Starting with this Challenge, you will be provided with a tsconfig.json file. This models the common practice at most companies, where you will be assigned projects with these configurations already set up.

# Helpful TypeScript Resources
Classes
Object types
Everyday types
More on functions

# Grading Requirements

# note
If a Challenge assignment submission is marked as "0," it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include:
A repository that has no code
A repository that includes a unique name but nothing else
A repository that includes only a README file but nothing else
A repository that only includes starter code
This Challenge is graded based on the following criteria:

# Deliverables: 20%
A walkthrough video that demonstrates the functionality of the Vehicle Builder.
Your GitHub repository containing your application code.

# Walkthrough Video: 27%
The README.md file must include a link to the walkthrough video.
The walkthrough video must demonstrate how a user would invoke the application from the command line.
The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.
The walkthrough video must demonstrate all the prompts and functionality related to trucks and motorbikes working properly.

# Technical Acceptance Criteria: 40%
Satisfies all of the preceding acceptance criteria plus the following:
Application uses the Inquirer package
The application must have properly implemented Truck and Motorbike classes:
The user should be able to choose between a car, a truck, or a motorbike when creating a vehicle.
The Truck and Motorbike classes must prompt the user for details that the Car class doesn't.
The Truck class must allow the user to implement an action that the Car and Motorbike classes cannot.

# Repository Quality: 13%
Repository has a unique name.
Repository follows best practices for file structure and naming conventions.
Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
Repository contains multiple descriptive commit messages.
Repository contains a high-quality README with description and a link to a walkthrough video.

# How to Submit the Challenge
You are required to submit the following for review:
A walkthrough video that demonstrates the functionality of the application.
The URL of the GitHub repository, with a unique name and a README describing the project.

# note
You are allowed to miss up to two Challenge assignments and still earn your certificate. If you complete all Challenge assignments, your lowest two grades will be dropped. If you wish to skip this assignment, click Next, and move on to the next Module.
Comments are disabled for graded submissions in BootCamp Spot. If you have questions about your feedback, please notify your instructional staff or the Student Success Advisor. If you would like to resubmit your work for an improved grade, you can use the Resubmit Assignment button to upload new links. You may resubmit up to three times for a total of four submissions.

# important
It is your responsibility to include a note in the README section of your repo specifying code source and its location within your repo. This applies if you have worked with a peer on an assignment, used code in which you did not author or create sourced from a forum such as Stack Overflow, or you received code outside curriculum content from support staff such as an Instructor, TA, Tutor, or Learning Assistant. This will provide visibility to grading staff of your circumstance in order to avoid flagging your work as plagiarized.
If you are struggling with a Challenge or any aspect of the curriculum, please remember that there are student support services available for you:
Xpert LA Chat+ - chat with a Live Agent in the "Xpert Learning Assistant Chat+" section of Bootcampspot - Canvas.
Office hours facilitated by your instructional staff before and after each class session.
Tutoring Guidelines—schedule a session in the "Tutor Sessions" section of Bootcampspot - Canvas.
If the above resources are not applicable and you have a need, please reach out to a member of your instructional team, your Student Success Advisor, or submit a support ticket in the Student Support section of your BCS application.


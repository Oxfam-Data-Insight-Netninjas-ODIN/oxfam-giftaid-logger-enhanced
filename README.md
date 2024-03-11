# oxfam-giftaid-logger-enhanced

This is a continuation of project one. - please read further to see the proposed changes to each section.

# User requirements

Page 1 - landing page/logger

- This is the Landing page and displays the Oxfam heading and title
- The page will ask to confirm a user location, and display if allowed.
- The page shows the current date and temperature.
- The page shows a message saying welcome, and then the name of who is 'logged in' or says 'volunteer'.
- The page has a drop-down form that lets the user select their name if they are using the till, this will carry across page changes
- It has 2 x buttons, 1 for add gift aid, and one for not gift aid. These are large for the user to see and responsive (sound/visual cues)
- An animated marquee. this could maybe be replaced with another animation in the future -it is just something to grab the user's attention, containing a motivational script.

A single table row with the days' data: Gift Aided / Not Gift Aided / Percentage
information that is being used on this page is:

- shopCode is 1 letter followed by 4 numbers e.g.. F1924 (this is not included on the prototype landing page)
- userFirstName is a string of up to 12 characters (this is not included on the prototype landing page)
- giftAided is an int number value
- notGiftAided is an int number value
- Date is a date value, maybe using DateJS API
- Percentage, is an int value that is the percentage of GiftAid over the total sales (giftAided and notGiftAided)

## proposed changes to page 1 a.k.a Logger(homepage)
- enhance the buttons to make them feel more tactile, make them look convex or concave when pressed, to help them feel more 'clicky.
- add more variety of GIFFS to the application that is displayed to the user upon GA sale - user feedback was very positive on this.
- parallax scrolling to be added to the background gradient perhaps, or another image, as long as it isn't busy.
- a screen saver for the application, that could display animated text and images to tell the volunteers what campaigns Oxfam works on, to help motivate them.
- shopCode must become cityTown. Security breaches and Phishing attempts have led to increased security with Oxfam's internal systems, to counter this, no shop codes must be used, when a user's information is added to any form of storage. Instead, use a 'city/town name' Bear in mind, that there can be more than one Oxfam shop in a town or city.
- A user must not be identifiable other than their first name or nickname ( some users have the same name, do a check for this, mention alternatives such as Sue2, or Sue3 etc). they should have a brief password to enter to enter a session, that is created by them upon user name creation. they should have the option to delete the account ( prompted with an 'Are you sure' y/n ) an email signup for user authentication is not required.
  

## IMPORTANT CONSIDERATION: the sizing of the layout must be adequate for the phones that they are to be displayed on.
eg - small iPhone 4 phones, and also a tablet that could be used to demo the application.




# Final Project
## Application Requirements
You and your group will use everything you’ve learned to create a real-world client-side single-page application that you’ll be able to showcase to potential employers. The user story and acceptance criteria will depend on the project that you create, but your project must fulfill the following requirements:
* Must use ReactJS.
* Must use Node.
* Must have both GET and POST routes for retrieving and adding new data.
* Must deploy this application using Netlify.
* Must utilize at least two libraries, packages, or technologies that we haven't discussed.
* Must have a polished front end/UI.
* Must meet good quality coding standards (indentation, scoping, naming).
* Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).
## Presentation Requirements
Use this [project presentation template](https://docs.google.com/presentation/d/1_u8TKy5zW5UlrVQVnyDEZ0unGI2tjQPDEpA0FNuBKAw/edit?usp=sharing) to address the following:
* Elevator pitch: a one minute description of your application.
* Concept: What is your user story? What was your motivation for development?
* Process: What were the technologies used? How were tasks and group roles broken down and assigned? What challenges did you encounter? What were your successes?
* Demo: Show your stuff!
* Directions for future development
* Links to to the deployed application and the GitHub repository
## Grading Requirements
This project is graded based on the following criteria:
### Technical Acceptance Criteria: 20%
* Satisfies the following code requirements:
  * Application uses React.
  * Application uses Node.
  * Application uses at least two libraries, packages, or technologies that we haven't discussed.
  * Application has both GET and POST routes for retrieving and adding new data.
### Concept 10%
* Application should be a unique and novel idea.
* Your group should clearly and concisely articulate your project idea.
### Deployment: 20%
* Application deployed at live URL using Netlify and loads with no errors.
* Application GitHub URL submitted.
### Repository Quality: 10%
* Repository has a unique name.
* Repository follows best practices for file structure and naming conventions.
* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
* Repository contains multiple descriptive commit messages.
* Repository contains a quality README file with description, screenshot, and link to deployed application.
### Application Quality: 15%
* Application user experience is intuitive and easy to navigate.
* Application user interface style is clean and polished.
* Application is responsive.
### Presentation 10%
* Your group should present using Powerpoint or a similar presentation software.
* Every group member should speak during the presentation.
* Your presentation should follow the [Project Presentation Template](https://docs.google.com/presentation/d/10QaO9KH8HtUXj__81ve0SZcpO5DbMbqqQr4iPpbwKks/edit?usp=sharing).
### Collaboration 15%
* There are no major disparities in the number of GitHub contributions between group members.
## How to Submit Your Client-Side Single-Page Application
**Each member of your group** is required to submit the following for review:
* The URL of the deployed application.
* The URL of the GitHub repository, with a unique name and a README describing the project.

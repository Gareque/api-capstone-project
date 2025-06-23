# Overview

In this project, students are expected to build a website using the Express/Node.js platform, with the Axios HTTP client, that integrates a chosen public API from the given list: Public API Lists. The website should interact with the chosen API, retrieve data, and present it in a user-friendly manner.

# Objectives

- Develop an understanding of how to integrate public APIs into web projects.

- Gain practical experience using Express/Node.js for server-side programming.

- Enhance understanding of client-server communication using Axios.

- Demonstrate ability to manipulate, present, and work with data retrieved from APIs.

# Requirements:

Requirements

1. API Choice

## Choice:

D&D 5E API: https://www.dnd5eapi.co/

2. Project Planning
   The aim is to create an API web app that can be used to call on spells.

3. Project Setup

- Set up a new Node.js project using Express.js.
- Axios for making HTTP requests.
- EJS for templating.

Ensure that the project has a structured directory and file organization.

4. API Integration
   Implement at least a GET endpoint to interact with your chosen API.

Use Axios to send HTTP requests to the API and handle responses.

5. Data Presentation
   Design the application to present the retrieved data in a user-friendly way. Use appropriate HTML, CSS, and a templating engine like EJS.

6. Error Handling
   Ensure that error handling is in place for both your application and any API requests. You can console log any errors, but you can also give users any user-relevant errors.

7. Documentation
   Include comments throughout your code to explain your logic.

8. Code Sharing
   Running the App:
   In order to run the app, cd into the directory and run the following commands:

- npm i, this will install all of the required modules that are required
- mpm install nodemon
- Open package.json and ensure that beneath '"main": "index.js"' you enter:
- - "type": "module",
- Run the application using nodemon .\index.js
- navigate to localhost:3000/ on your browser

# Star Trek Quiz with SweetAlerts

![Screenshot](screenshot.png) <!-- Add a screenshot of your webpage -->

This project is a solution to the "Introducing Conditional Statements" challenge in the JavaScript Basics course on Teamtreehouse.com. The challenge was to create a quiz application that prompts the user with a question and logs to the console whether the answer is correct or not. In this project, I've adapted the challenge to use SweetAlert2 and DaisyUI for a better user experience by providing multiple-choice options and feedback.

## Project Overview

The "Star Trek Quiz" is an interactive web application that presents users with questions about the Star Trek universe. The application uses SweetAlert2 popups with radio buttons to allow users to select answers. Based on the user's selection, the application provides immediate feedback on whether the answer is correct or not.

Key features of the project:

- Questions are presented using SweetAlert2 popups with radio buttons for multiple-choice answers.
- The application logs to the console whether the user's answer is correct or not.
- Users receive immediate feedback on their quiz performance.

## Conditional Statements

I have used conditional statements to implement a function to calculate a user's rank based on their quiz score. Here's how the `getRank` function works:

```javascript
function getRank(score) {
  if (score === 10) {
    return "Starfleet Admiral";
  } else if (score >= 7) {
    return "Commander";
  } else if (score >= 4) {
    return "Lieutenant";
  } else if (score >= 1) {
    return "Ensign";
  } else {
    return "Cadet";
  }
}
```

The function takes the `score` as an argument and returns a rank based on the conditional statements. For example, if the user scores 10, they are awarded the rank "Starfleet Admiral." If their score is 7 or higher, they are a "Commander," and so on.

## Usage

1. Open your web browser and go to [https://berianlowe.com/star-trek-quiz](https://berianlowe.com/star-trek-quiz).
2. Click the "ENGAGE!" button on the webpage to begin the quiz.
3. Answer the series of questions.
4. Once all questions have been answered, the page will update with the results of the quiz, a rank and any incorrect answers will get printed to a table and show you the answer you selected along with the correct answer.

## Dependencies

* [SweetAlert2](https://sweetalert2.github.io/): A JavaScript library for creating attractive alerts and prompts.

## Project Structure

* `index.html`: The main HTML file that contains the structure of the webpage.
* `styles.css`: CSS file for styling the webpage.
* `conditionals.js`: JavaScript file containing the logic for displaying questions, evaluating answers, and providing feedback using SweetAlert2.

## Credits

* Original challenge and project idea: [Teamtreehouse.com](https://teamtreehouse.com/)
* SweetAlert2 library: [SweetAlert2](https://sweetalert2.github.io/)
* - DaisyUI: [DaisyUI](https://daisyui.com/)

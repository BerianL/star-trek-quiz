document.getElementById('startQuiz').addEventListener('click', () => {
  let score = 0;

  const questions = [
    {
      question: "Who is the captain of the USS Enterprise NCC-1701-D?",
      answers: ["Benjamin Sisko", "James T. Kirk", "Jean-Luc Picard"],
      correctAnswer: "Jean-Luc Picard",
      userAnswer: null,
    },
    {
      question: "What is the name of Spock's home planet?",
      answers: ["Romulus", "Vulcan", "Andoria"],
      correctAnswer: "Vulcan",
      userAnswer: null,
    },
    {
      question: "What is the name of the starship in the original Star Trek series?",
      answers: ["USS Galaxy", "USS Enterprise", "USS Discovery"],
      correctAnswer: "USS Enterprise",
      userAnswer: null,
    },
    {
      question: "Which species is known for their use of assimilation?",
      answers: ["Romulan", "Klingon", "Borg"],
      correctAnswer: "Borg",
      userAnswer: null,
    },
    {
      question: "What is the name of Captain Kirk's first officer on the USS Enterprise NCC-1701?",
      answers: ["Leonard McCoy", "Uhura", "Spock"],
      correctAnswer: "Spock",
      userAnswer: null,
    },
    {
      question: "Which alien race is known for their strong sense of honor and warrior culture?",
      answers: ["Vulcan", "Klingon", "Cardassian"],
      correctAnswer: "Klingon",
      userAnswer: null,
    },
    {
      question: "What is the name of the android lieutenant commander on the USS Enterprise NCC-1701-D?",
      answers: ["Geordi La Forge", "Worf", "Data"],
      correctAnswer: "Data",
      userAnswer: null,
    },
    {
      question: "What is the fictional substance that powers starships' warp drives?",
      answers: ["Tritanium", "Dilithium", "Platinum"],
      correctAnswer: "Dilithium",
      userAnswer: null,
    },
    {
      question: "Which space station serves as a major hub near a stable wormhole?",
      answers: ["Starbase 12", "Space Station Alpha", "Deep Space Nine"],
      correctAnswer: "Deep Space Nine",
      userAnswer: null,
    },
    {
      question: "Which famous Starfleet captain is known for saying 'Make it so'?",
      answers: ["Jonathan Archer", "James T. Kirk", "Jean-Luc Picard"],
      correctAnswer: "Jean-Luc Picard",
      userAnswer: null,
    },
  ];

  const incorrectAnswers = [];

  function askQuestion(questionObj, questionNumber) {
    Swal.fire({
      width: '45rem',
      title: `Question ${questionNumber - 1}`,
      text: questionObj.question,
      input: 'radio',
      inputOptions: {
        0: questionObj.answers[0],
        1: questionObj.answers[1],
        2: questionObj.answers[2],
      },
      showCancelButton: true,
      confirmButtonText: "Submit",
      cancelButtonText: "Skip",
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const userAnswer = questionObj.answers[result.value];
        if (userAnswer === questionObj.correctAnswer) {
          score++;
        } else {
          incorrectAnswers.push({
            question: questionObj.question,
            correctAnswer: questionObj.correctAnswer,
            userAnswer: userAnswer,
          });
        }
      } else if (result.isDismissed) {
        incorrectAnswers.push({
          question: questionObj.question,
          correctAnswer: questionObj.correctAnswer,
          userAnswer: "Skipped",
        });
      }
    }).then(() => {
      if (questions.length > 0) {
        askNextQuestion();
      } else {
        showResults();
      }
    });
  }

  function askNextQuestion() {
    const nextQuestion = questions.pop();
    askQuestion(nextQuestion, 11 - questions.length);
  }

  function showResults() {
    let resultsHTML = `<p>Your final score is: <strong>${score} out of 10</strong></p>`;
    resultsHTML += `<p>Your rank: ${getLevel(score)}</p>`;

    if (incorrectAnswers.length > 0) {
      resultsHTML += '<h2>Questions you answered incorrectly:</h2>';
      resultsHTML += '<div class="overflow-x-auto">';
      resultsHTML += '<table class="table">';
      resultsHTML += '<thead><tr><th>Question</th><th>Your Answer</th><th>Correct Answer</th></tr></thead><tbody>';

      incorrectAnswers.forEach((answerObj) => {
        resultsHTML += `
          <tr>
            <td>${answerObj.question}</td>
            <td style="color: red;">${answerObj.userAnswer}</td>
            <td style="color: green;">${answerObj.correctAnswer}</td>
          </tr>`;
      });

      resultsHTML += '</tbody></table>';
      resultsHTML += '</div>';
    }

    const resultsElement = document.querySelector('.card-body');
    resultsElement.innerHTML = resultsHTML;
  }

  function getLevel(score) {
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

  askNextQuestion();
});
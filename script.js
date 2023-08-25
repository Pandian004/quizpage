"use strict";
const questions = [
    {
      question: "1. What does 'JS' stand for in JavaScript?",
      options: ["Java Syntax", "Java Style", "JavaScript", "Just Saying"],
      correct: 2
    },
    {
      question: "2.Which keyword is used to declare a variable in JavaScript?",
      options: ["v", "variable", "var", "let"],
      correct: 3
    },
    {
      question: "3.Which built-in method can be used to convert a string to uppercase?",
      options: ["toUpperCase()", "upperCase()", "changeCase(caseType)", "stringToUpper()"],
      correct: 0
    },
    {
      question: "4.What does the '=== ' operator do in JavaScript?",
      options: ["Compares values for equality, but not for data type", "Compares values and data types for equality", "Assigns a value to a variable", "Checks if a variable exists"],
      correct: 1
    },
    {
      question: "5.How do you add a comment in JavaScript?",
      options: ["<!-- This is a comment -->", "// This is a comment", "** This is a comment", "/* This is a comment */"],
      correct: 1
    },
    {
      question: "6.Which of the following is NOT a primitive data type in JavaScript?",
      options: ["string", "number", "boolean", "array"],
      correct: 3
    },
    {
      question: "7.What is the purpose of the 'console.log()' function in JavaScript?",
      options: ["Displays a message in a pop-up dialog", "Logs information to the console for debugging", "Prints content on the webpage", "Executes a function immediately"],
      correct: 1
    },
    {
      question: "8.Which loop is used to iterate through the elements of an array in JavaScript?",
      options: ["while loop", "do-while loop", "for loop", "loop through"],
      correct: 2
    },
    {
      question: "9.What does the 'return' statement do in a JavaScript function?",
      options: ["Ends the execution of the function", "Declares a new variable", "Outputs text to the console", "Specifies the data type of a variable"],
      correct: 0
    },
    {
      question: "10.How do you include an external JavaScript file in an HTML document?",
      options: ["js src='script.js'", "javascript src='script.js'", "script type='text/javascript' src='script.js'", "include src='script.js'"],
      correct: 2
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const questionElem = document.getElementById('question');
    const optionsElem = document.getElementById('options');
    
    questionElem.textContent = questions[currentQuestion].question;
    optionsElem.innerHTML = '';
  
    questions[currentQuestion].options.forEach((option, index) => {
      const optionElem = document.createElement('div');
      optionElem.className = 'option';
      optionElem.innerHTML = `
      <input type="radio" id="radio${index}" class="radio" name="options" value="${index}">
      <label for="radio${index}">${String.fromCharCode(97 + index)}) ${option}</label>
    `;
      optionElem.onclick = () => checkAnswer(index);
      optionsElem.appendChild(optionElem);
    });
  
    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtn').disabled = currentQuestion === questions.length - 1;
  }
  
  function checkAnswer(selectedOption) {
    const resultElem = document.getElementById('result');
    if (selectedOption === questions[currentQuestion].correct) {
      resultElem.textContent = 'Correct!';
      score++;
    } else {
      resultElem.textContent = 'Wrong. Try again.';
    }
    updateScore();
  }
  function updateScore() {
    document.getElementById('score').textContent = `Score: ${score}`;
  }
  
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length-1) {
      document.getElementById('submitBtn').disabled = false;
      showQuestion(); 
    } else {
        document.getElementById('result').textContent = '';
        document.querySelectorAll('.radio').forEach(radio => radio.disabled = false);
      showQuestion();
    }
  }
   
  function prevQuestion() {
    if (currentQuestion > 0) {
      currentQuestion--;
      showQuestion();
    }
  }
  function showFinalScore() {
    const containerElem = document.querySelector('.container');
    containerElem.innerHTML = `
      <h1>Quiz Completed</h1>
      <div class="score">Your Score: ${score} out of ${questions.length}</div>
    `;
  }
  showQuestion();
  
  
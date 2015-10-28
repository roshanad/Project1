$(document).ready(function() {
  $('#testQuestion').hide();
  $('#messagebox').hide();
  $('.timer').hide();
  var questions = [
      { question: 'What is the full form of HTML?',
      choices: ['Hyperlinks and Text Markup Language','Hyper Text Markup Language', 'Hypertext Machine Language', 'Home Tool Markup Language'],
      correct: 1
    },
    {
      question: 'Which property is used to flow text around an image?',
      choices: ['display','wrap', 'float'],
      correct: 2},
    {
      question: 'Which jQuery method is used to hide selected elements?',
      choices: ["hidden()","hide()","visible(false)","display(none)"],
      correct: 1},
    {
      question: 'What is the tag that is used to load and external stylesheet?',
      choices: ["link", "style","script","css"],
      correct: 0},
    {
      question: 'Which jQuery method is used to set one or more style properties for selected elements?',
      choices: ['style()', 'html()', 'css()'],
      correct: 2
    },
    {
      question:'What is the attribute on img tag to specify the image URL?',
      choices: ["link", "rel", "src", "href"],
      correct: 2
    },
    {
      question: 'Which element attribute is used to add inline styles?',
      choices: ["css","style","styles"],
      correct: 1
    },
    {
      question: "Identify the universal selector in CSS.",
      choices: [ "*","@","%"],
      correct: 0
    },
    {
      question: 'Which jQuery function is used to prevent code from running, before the document is finished loading?',
      choices: ["$(document).load()", "$(body).onload()", "$(document).ready()"],
      correct: 2
    },
    {
      question: 'Which of the following is correct?',
      choices: ['jQuery is a JSON Library', 'jQuery is a JavaScript Library'],
      correct: 1
    },
    ]
    var questionNum = 0;
    var totalQuestion = questions.length;
    var correctAnswer = 0;
    $('#testQuestion').hide();
    // Start quiz and show the first question
    // hide startQuiz text and show questions
    //display the questions and multiple choice list
    function questionDisplay() {
      $('#questionNum').text("Question " + (questionNum+1) + " of " + totalQuestion);
      $('#question').text(questions[questionNum].question);
      $('#choices').empty();
      var choiceTotal = questions[questionNum].choices.length;
      var answerChoices = questions[questionNum];
      console.log(choiceTotal);
      for (var i=0; i<choiceTotal; i++) {
      $('#choices').append("<input type='radio' class='guess' name='guess' value=" + i + "> " + answerChoices.choices[i] + "<br>");
      }
    }

    function timer() {
      seconds = 0;
      var interval = setInterval(function(){
        seconds++;
          $('.timer').html("<p>Time Spent: " + seconds + "s"+ "</p>");
        console.log("this is updated text")
    }, 1500)
  }

    $('#startQuizButton').on('click', function(){
      console.log("Start Key Button clicked");
      $('#startQuiz').hide();
      $('#testQuestion').show();
      $('.timer').show();
      questionDisplay();
      timer();
    });

    $('#testQuestion').on('click', '#submit', function(){
      console.log("Yay Submit Answer Button is clicked");
      var answer = $('input:radio[name=guess]:checked').val();
      var rightAnswer = questions[questionNum].correct;
      console.log(rightAnswer);
      //Check if the answer is null user is forced to submit one answer
      // If that is right answer then add message on message box and button to continue
      // If it's wrong answer then displays wrong answer and add button to continue
      if (answer == null){
        $('#messagebox').show();
        console.log("Writing in messagebox");
        $('#message').html("<p>Please select an answer.</p>");
      }
      else if (answer == rightAnswer)
      {
        $('#messagebox').show();
        $('#message').html('<img src="/img/facesmiley.jpg" alt="someimage" />'+"<p>Correct</p>" + "</p><input id='continue' class='button' type='submit' value='Continue'>" + "</p>");
        correctAnswer++;
      }
      else {
        console.log("Incorrect");
        var getRightAnswer = questions[questionNum].choices[rightAnswer];
        $('#messagebox').show();
        $('#message').html("<p>The Correct Answer is: " + "<span class=black>" + getRightAnswer + "</span>" + "</p>" + "</p><input id='continue' class='button' type='submit' value='Continue'>" + "</p>");
        console.log(getRightAnswer);
      }
    });

    $('#message').on('click', '#continue', function(){
      console.log("Yay I am clicking submit function on message");
      if (questionNum+1 == totalQuestion)
      {
        $('#message').html("<p>You have answered " + "<span class=red>" + correctAnswer + "</span>" + " questions correctly out of " + "<span class=red>" + totalQuestion + "</span>" + " questions.");
        $('.timer').hide();
        $('#testQuestion').hide();
        $('#startQuiz').show();
      }
      else {
        console.log("I am here ****")
        questionNum++;
        console.log("QuestionNum");
        $('#messagebox').hide();
        questionDisplay();
      }
    });

});
